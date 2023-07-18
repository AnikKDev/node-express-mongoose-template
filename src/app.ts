import express, { Application } from "express";
const app: Application = express();
import cors from "cors";
import router from "./app/routes";
// middlewares ==> with .use()
app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes
app.use("/api/v1/", router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
