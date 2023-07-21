import { Response } from "express";

export type IApiResponse<T> = {
  statusCode: number;
  message: string;
  success: boolean;
  data?: T | null;
  meta?: {
    page?: number;
    limit?: number;
    totalData?: number;
  };
};
export type IGenericResponse<T> = {
  res: Response;
  data: IApiResponse<T>;
};
