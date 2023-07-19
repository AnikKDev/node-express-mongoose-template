import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import config from "../config";
import colors from "colors";
import { ZodError } from "zod";
import { IGenericErrorMessage } from "../../shared/interfaces/genericError.interface";
import { handleValidationError } from "../../errors/handleValidationError";
import { handleZodError } from "../../errors/handleZodError";
import ApiError from "../../errors/ApiError";
const globalErrorHanlder: ErrorRequestHandler = (
  error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (config.env === "development") {
    console.log(colors.red.bold(`Global Error Handler ==> ${error}`));
  } else {
    console.log(colors.red.bold(`Global Error Handler ==> ${error}`));
  }

  let statusCode = 500;
  let message = "Something went wrong";
  let errorMessages: IGenericErrorMessage[] = [];

  if (error?.name === "ValidationError") {
    const simplifiedError = handleValidationError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error.message;
    errorMessages = error?.message
      ? [
          {
            path: "",
            message: error?.message,
          },
        ]
      : [];
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: "",
            message: error?.message,
          },
        ]
      : [];
  }
  res.status(statusCode).send({
    success: false,
    message,
    errorMessages,
    stack: config.env !== "production" ? error?.stack : undefined,
  });
};
export default globalErrorHanlder;
