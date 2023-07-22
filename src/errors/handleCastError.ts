import { CastError } from "mongoose";
import { IGenericErrorMessage } from "../shared/interfaces/genericError.interface";
import { IGenericErrorResponse } from "../shared/interfaces/genericErrorResponse.interface";

export const handleCastError = (err: CastError): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = [
    {
      path: err.path,
      message: "Invalid Id [Cast Error]",
    },
  ];
  const statusCode = 400;
  return {
    message: "Mongoose cast error",
    statusCode,
    errorMessages: errors,
  };
};
