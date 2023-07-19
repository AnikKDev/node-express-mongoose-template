import { ZodError, ZodIssue } from "zod";
import { IGenericErrorMessage } from "../shared/interfaces/genericError.interface";
import { IGenericErrorResponse } from "../shared/interfaces/genericErrorResponse.interface";

export const handleZodError = (error: ZodError): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    };
  });
  const statusCode = 400;
  return {
    message: "Zod validation error",
    statusCode: statusCode,
    errorMessages: errors,
  };
};
