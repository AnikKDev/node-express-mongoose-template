import dotenv from "dotenv";
import path from "path";

// configuring current project directory with env
dotenv.config({
  path: path.join(process.cwd(), ".env"),
});

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  databasUrl: process.env.DATABASE_URL,
};
