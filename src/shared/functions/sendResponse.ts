import { Response } from "express";
import { IApiResponse } from "../interfaces/genericResponse.interface";

const sendResponse = <T>(res: Response, data: IApiResponse<T>): void => {
  res.status(data.statusCode).send({
    statusCode: data.statusCode,
    success: data.success,
    message: data.message,
    data: data.data || null,
    meta: data.meta || null,
  });
};

export default sendResponse;
