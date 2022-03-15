import pino from "pino";

const log = pino({
    enabled: !(!!process.env.LOG_DISABLED),
    transport: {
        target: 'pino-pretty',
        options: {
            colorise: true
        }
    }
});

export const logger = log;