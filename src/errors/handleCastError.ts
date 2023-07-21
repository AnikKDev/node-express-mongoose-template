import { CastError } from "mongoose";
import { IGenericErrorMessage } from "../shared/interfaces/genericError.interface";

export const handleCastError = (err: CastError) => {
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
