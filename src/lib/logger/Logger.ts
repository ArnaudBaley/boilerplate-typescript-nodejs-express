import * as winston from 'winston';

export class Logger {
    public debug(message: string): void {
        this.log('debug', message);
    }

    public info(message: string): void {
        this.log('info', message);
    }

    public warn(message: string): void {
        this.log('warn', message);
    }

    public error(message: string): void {
        this.log('error', message);
    }

    private log(level: string, message: string): void {
        if (winston) {        
            winston[level](`${message}`);
        }
    }
}