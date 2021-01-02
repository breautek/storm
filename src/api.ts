// Copyright (C) 2017  Norman Breau

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

// Application
export {getInstance, getApplicationLogger} from './instance';
export {Application} from './Application';

// Config
export {ConfigLoader} from './ConfigLoader';

// Database
export {Database} from './Database';
export {DatabaseConnection} from './DatabaseConnection';
export {MySQLDatabase} from './MySQLDatabase';
export {MySQLConnection} from './MySQLConnection';
export {ManagedDatabaseConnection} from './ManagedDatabaseConnection';
export {Query} from './Query';
export {TemporaryTableQuery, ITemporaryTableQueryInput} from './TemporaryTableQuery';
export {DropTemporaryTableQuery} from './DropTemporaryTableQuery';
export {RawQuery} from './RawQuery';
export {IInsertQueryResult} from './IInsertQueryResult';
export {IDeleteQueryResult} from './IDeleteQueryResult';
export {IUpdateQueryResult} from './IUpdateQueryResult';

// Errors
export {ErrorCode} from './ErrorCode';
export {
    StormError,
    IErrorResponse,
    IAdditionalErrorDetails
} from './StormError';
export {JWTError} from './JWTError';
export {MissingParameterError} from './MissingParameterError';
export {InvalidCredentialsError} from './InvalidCredentialsError';
export {InternalError} from './InternalError';
export {ExpiredTokenError} from './ExpiredTokenError';
export {InvalidValueError} from './InvalidValueError';
export {UnauthorizedAccessError} from './UnauthorizedAccessError';
export {EntityNotFoundError} from './EntityNotFoundError';
export {DiskSpaceError} from './DiskSpaceError';
export {DuplicateEntryError} from './DuplicateEntryError';

// HTTP
export {StatusCode} from './StatusCode';
export {Middleware} from './Middleware';
export {Request, IParameterMap} from './Request';
export {Response} from './Response';
export {ResponseData} from './ResponseData';
export {Handler} from './Handler';
export {CORSMiddleware} from './CORSMiddleware';
export {ServiceProvider} from './ServiceProvider';
export {HTTPMethod} from './HTTPMethod';
export {ServiceResponse} from './ServiceResponse';
export {BackendAuthenticationMiddleware} from './BackendAuthenticationMiddleware';

// Interfaces
export {IDatabaseConfig} from './IDatabaseConfig';
export {ILogEvent} from './ILogEvent';
export {IJWTVerifyOptions} from './IJWTVerifyOptions';
export {IHandler} from './IHandler';
export {IRequestResponse} from './IRequestResponse';
export {IConfig} from './IConfig';
export {IFormData} from './IFormData';
export {IDatabaseConnection} from './IDatabaseConnection';
export {IServiceHeaders} from './IServiceHeaders';
export {IAuthTokenData} from './IAuthTokenData';

// Token
export {Token} from './Token';
export {TokenManager} from './TokenManager';
export {AuthenticationMiddleware} from './AuthenticationMiddleware';

// Utils
export {ExitCode} from './ExitCode';
export {LogEvent} from './LogEvent';
export {Logger} from './Logger';
export {LogSeverity} from './LogSeverity';
export {LoggerMiddleware} from './LoggerMiddleware';
export {DumpStream} from './DumpStream';

// Third-party
import * as formidable from 'formidable';
export {formidable};
