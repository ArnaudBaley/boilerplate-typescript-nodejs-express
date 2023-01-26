import "reflect-metadata";
import express, { Express, Request, Response } from "express";
import { createExpressServer } from "routing-controllers";
import httpLogger from "./lib/logger/http-logger";
import logger from "./lib/logger/logger";
import config from "./config/server";
import { UserController } from "./controllers/UserController";
import HomeController from "./controllers/HomeController";
import { SqliteDataSource } from "./config/dataSources/SqliteDataSource";

const app: Express = createExpressServer({
  controllers: [HomeController, UserController],
});
const port = config.PORT;

app.use(httpLogger);
logger.info("Logger is working");

SqliteDataSource.initialize()
  .then(() => {    

    app.set("port", port ? port : 3000);

    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => logger.error(error));
