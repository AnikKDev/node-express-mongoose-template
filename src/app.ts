import express, { Application, NextFunction, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import router from "./app/routes";
import globalErrorHanlder from "./app/middlewares/globalErrorHandler";
import httpStatus from "http-status";
// middlewares ==> with .use()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes
app.use("/api/v1/", router);

// global error
app.use(globalErrorHanlder);

// not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API Not Found",
      },
    ],
  });
  next();
});

export default app;
