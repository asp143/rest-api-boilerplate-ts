import winston from "winston";

class Logger {
    private logger;
    private readonly loggerName: string;

    constructor(loggerName: string) {
        this.loggerName =  loggerName;
        this.logger = winston.createLogger({
            level: 'info',
            format: winston.format.json(),
            defaultMeta: { service: 'user-service' },
            transports: [
                new winston.transports.File({ filename: 'error.log', level: 'error' }),
                new winston.transports.File({ filename: 'combined.log' }),
                new winston.transports.Console({
                    format: winston.format.combine(
                        winston.format.colorize(),
                        winston.format.simple(),
                        winston.format.timestamp({
                            format: 'DD-MM-YYYY HH:mm:ss.SSS',
                        }),
                        winston.format.label({
                            label: this.loggerName,
                        }),
                        winston.format.printf((info) => `[${info.timestamp}] [${info.label}] [${info.level}] : ${info.message}`),
                    ),
                })
            ],
        });

    }

}
export default Logger;
