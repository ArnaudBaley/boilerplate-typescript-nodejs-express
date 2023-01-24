const winston = require('winston');
import config from '../../config/logger';

interface LogFormat {
    timestamp: string,
    level: string,
    message: string,
}


const options = {
    file: {
        level: config.getFileLoglevel(),
        filename: `./logs/app.log`,
        handleExceptions: true,
        maxsize: config.maxSizeFile,
        maxFiles: config.maxFiles,
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json(),
            winston.format.printf((info: LogFormat) => `${info.timestamp} ${info.level}: ${info.message}`,)
        ),
    },
    console: {
        level: config.getConsoleLoglevel(),
        handleExceptions: true,
        format: winston.format.combine(
            winston.format.colorize({all: true}),
            winston.format.timestamp(),
            winston.format.simple(),
            winston.format.printf((info: LogFormat) => `${info.timestamp} ${info.level}: ${info.message}`,)
        ),
    },
};

const logger = winston.createLogger({
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console),
    ],
    exitOnError: false,
});

export default logger;