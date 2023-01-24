import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import httpLogger from './lib/logger/http-logger';
import logger from './lib/logger/logger';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(httpLogger);
logger.info('Logger is working');

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});