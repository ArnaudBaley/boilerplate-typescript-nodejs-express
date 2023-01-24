const morgan = require("morgan");
import logger from './logger';

// Use custom logger
const stream = {
    write: (message : string) => logger.http(message),
};

const httpLogger = morgan(
    ":method :url :status :res[content-length] - :response-time ms",
    { stream }
);

export default httpLogger;