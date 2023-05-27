/*
   Copyright 2017-2021 Norman Breau

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

// Application
export {getInstance} from './instance';
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
export {SetSessionVariableQuery, ISetSessionVariableQueryInput} from './SetSessionVariableQuery';
export {IsolationLevel} from './IsolationLevel';
export {Transaction} from './Transaction';

// Errors
export {ErrorCode} from './ErrorCode';
export {RawError} from './RawError';
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
export {MissingConfigError} from './MissingConfigError';
export {DatabaseQueryError} from './DatabaseQueryError';
export {NotImplementedError} from './NotImplementedError';
export {DeadLockError} from './DeadLockError';
export {LockWaitTimeoutError} from './LockWaitTimeoutError';

// HTTP
export {StatusCode} from './StatusCode';
export {Middleware} from './Middleware';
export {Request, IParameterMap} from './Request';
export {Response} from './Response';
export {ResponseData} from './ResponseData';
export {Handler, IHandlerError, IHandlerResponse} from './Handler';
export {CORSMiddleware} from './CORSMiddleware';
export {ServiceProvider} from './ServiceProvider';
export {HTTPMethod} from './HTTPMethod';
export {ServiceResponse} from './ServiceResponse';
export {BackendAuthenticationMiddleware} from './BackendAuthenticationMiddleware';

// Interfaces
export {IDatabaseConfig} from './IDatabaseConfig';
export {IJWTVerifyOptions} from './IJWTVerifyOptions';
export {IHandler} from './IHandler';
export {IRequestResponse} from './IRequestResponse';
export {
    IConfig,
    ICloudwatchConfig,
    ICloudwatchCredentials,
    ICloudwatchStreamConfig
} from './IConfig';
export {IFormData} from './IFormData';
export {IDatabaseConnection} from './IDatabaseConnection';
export {IServiceHeaders} from './IServiceHeaders';
export {IAuthTokenData} from './IAuthTokenData';
export {IQueryable} from './IQueryable';

// Token
export {Token} from './Token';
export {TokenManager} from './TokenManager';

// Utils
export {ExitCode} from './ExitCode';

// Database Objects
export {TCoordinate} from './TCoordinate';
export {DatabaseCastObject} from './DatabaseCastObject';
export {Point} from './Point';
export {LineString} from './LineString';
export {Polygon} from './Polygon';

// Third-party
import * as formidable from 'formidable';
export {formidable};
