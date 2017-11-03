
export enum LogSeverity {
    TRACE = 1,
    DEBUG = 2,
    INFO = 4,
    WARNING = 8,
    ERROR = 16,
    FATAL = 32,
    ALL = TRACE | DEBUG | INFO | WARNING | ERROR | FATAL
}
