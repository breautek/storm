import { Application } from "./Application";
import { IConfig } from "./IConfig";
import {Logger} from '@arashi/logger';

export class LogManager {
    private _app: Application;
    private _loggers: Record<string, Logger>;

    public constructor(app: Application) {
        this._app = app;
        this._loggers = {};
    }

    public getLogger(name: string): Logger {
        let logger: Logger = null;

        if (this._loggers[name]) {
            logger = this._loggers[name];
        }
        else {
            logger = new Logger(name, this._app.getConfig().log_level);
            this._loggers[name] = logger;
        }

        return logger;
    }

    protected _getDefaultLogFilters(): Array<RegExp> {
        return [ /TokenExpiredError/g ];
    }

    private _parseRegex(strReg: string): RegExp {
        let malformError: Error = new Error('Malformed regex in log_filters');
        if (strReg[0] !== '/') {
            throw malformError;
        }

        let lastSlashIndex = strReg.lastIndexOf('/');
        if (lastSlashIndex === strReg.indexOf('/')) {
            throw malformError;
        }

        let reg: string = strReg.slice(1, lastSlashIndex);
        let flags = strReg.slice(lastSlashIndex + 1);

        return new RegExp(reg, flags);
    }

    protected _getFilters(): Array<RegExp> {
        let config: IConfig = this._app.getConfig();
        let filters: Array<RegExp> = null;
        if (!config.log_filters || (config.log_filters && config.log_filters.length === 0)) {
            filters = this._getDefaultLogFilters();
        }
        else {
            filters = [];
            for (let i: number = 0; i < config.log_filters.length; i++) {
                let logFilter: string = config.log_filters[i];
                filters.push(new RegExp(this._parseRegex(logFilter)));
            }
        }
        return filters;
    }
}
