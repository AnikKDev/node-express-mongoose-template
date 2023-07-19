import mongoose from "mongoose";
import { IGenericErrorResponse } from "../shared/interfaces/genericErrorResponse.interface";
import { IGenericErrorMessage } from "../shared/interfaces/genericError.interface";

export const handleValidationError = (
  error: mongoose.Error.ValidationError,
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = Object.values(error.errors).map(
    (elem: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: elem?.path,
        message: elem?.message,
      };
    },
  );
  const statusCode = 400;
  return {
    message: "Validation error",
    statusCode,
    errorMessages: errors,
  };
};
