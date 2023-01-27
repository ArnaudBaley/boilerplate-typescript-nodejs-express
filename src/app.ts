import "reflect-metadata";
import Container from "typedi";
import express, { Express, Request, Response } from "express";
import { createExpressServer, useContainer } from "routing-controllers";
import httpLogger from "./lib/logger/http-logger";
import logger from "./lib/logger/logger";
import config from "./config/server";
import { UserController } from "./controllers/UserController";
import { sqliteDataSource } from "./config/dataSources/sqliteDataSource";

useContainer(Container);

const app: Express = createExpressServer({
  controllers: [UserController],
});
const port = config.PORT;

app.use(httpLogger);
logger.info("Logger is working");

sqliteDataSource.initialize()
  .then(() => {    

    app.set("port", port ? port : 3000);

    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => logger.error(error));
