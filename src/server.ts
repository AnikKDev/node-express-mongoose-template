import mongoose from "mongoose";
import config from "./app/config";
import colors from "colors";
import app from "./app";
import { Server } from "http";
// handling uncaught exceptions
process.on("uncaughtException", (error) => {
  console.log(colors.red.bold(`Uncaught exception ${error.message}`));
  process.exit(1);
});

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log(colors.green.bold("Connected to database"));
    server = app.listen(config.port, () => {
      console.log(colors.cyan.bold(`Connectd to port ${config.port}`));
    });
  } catch (error) {
    console.log(colors.red.bold("could not connect to database"));
  }
}

// listening event
process.on("unhandledRejection", (error) => {
  console.log(colors.red.bold("got into unhandledRejection"));
  if (server) {
    server.close((error) => {
      console.log(
        colors.yellow.bold(
          `closing server 🥹 :=> ${error?.name} == ${error?.message}`,
        ),
      );
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

main();
