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

import {getInstance, getApplicationLogger} from './instance';
import {Application} from './Application';
import {Logger} from './Logger';
import {LogSeverity} from './LogSeverity';
import {ILogEvent} from './ILogEvent';
import {LogEvent} from './LogEvent';
import {ExitCode} from './ExitCode';
import {Iterator} from './Iterator';
import {Token} from './Token';
import {TokenManager} from './TokenManager';
import {IJWTVerifyOptions} from './IJWTVerifyOptions';
import {StormError, IErrorResponse, IAdditionalErrorDetails} from './StormError';
import {StatusCode} from './StatusCode';
import {ErrorCode} from './ErrorCode';
import {MissingParameterError} from './MissingParameterError';
import {MissingParameter} from './MissingParameter';
import {InvalidCredentials} from './InvalidCredentials';
import {InternalError} from './InternalError';
import {ExpiredToken} from './ExpiredToken';
import {Database} from './Database';
import {DatabaseConnection} from './DatabaseConnection';
import {MySQLDatabase} from './MySQLDatabase';
import {MySQLConnection} from './MySQLConnection';
import {Middleware} from './Middleware';
import {LoggerMiddleware} from './LoggerMiddleware';
import {Request, IParameterMap} from './Request';
import {Response} from './Response';
import {ResponseData} from './ResponseData';
import {Handler} from './Handler';
import {AuthenticationMiddleware} from './AuthenticationMiddleware';
import {IHandler} from './IHandler';
import {DictionaryIterator, IDictionary, IDictionaryIteratorResult} from './DictionaryIterator';
import {ReverseIterator} from './ReverseIterator';
import {InvalidValueError} from './InvalidValueError';
import {DuplicateEntryError, IDuplicateEntryErrorOptions} from './DuplicateEntryError';
import {UnauthorizedAccess} from './UnauthorizedAccess';
import {EntityNotFoundError} from './EntityNotFoundError';
import {DiskSpaceError} from './DiskSpaceError';
import {ConfigLoader} from './ConfigLoader';
import {IRequestResponse} from './IRequestResponse';
import {CORSMiddleware} from './CORSMiddleware';
import * as formidable from 'formidable';
import {IFormData} from './IFormData';
import {BackendAuthenticationMiddleware} from './BackendAuthenticationMiddleware';
import {IConfig} from './IConfig';
import {ServiceProvider} from './ServiceProvider';
import {HTTPMethod} from './HTTPMethod';
import {ServiceResponse} from './ServiceResponse';
import {IServiceHeaders} from './IServiceHeaders';
import {DumpStream} from './DumpStream';
import {ManagedDatabaseConnection} from './ManagedDatabaseConnection';
import {IDatabaseConnection} from './IDatabaseConnection';

export {
    getInstance, getApplicationLogger,
    Application,
    Logger,
    LogSeverity,
    LogEvent, 
    ILogEvent,
    ExitCode,
    Iterator,
    Token,
    TokenManager,
    IJWTVerifyOptions,
    StormError, IErrorResponse, IAdditionalErrorDetails,
    StatusCode,
    ErrorCode,
    MissingParameterError,
    MissingParameter,
    InvalidCredentials,
    InternalError,
    ExpiredToken,
    Database,
    DatabaseConnection,
    MySQLDatabase,
    MySQLConnection,
    Middleware,
    LoggerMiddleware,
    Request, IParameterMap,
    Response,
    ResponseData,
    Handler,
    AuthenticationMiddleware,
    IHandler,
    DictionaryIterator, IDictionary, IDictionaryIteratorResult,
    ReverseIterator,
    InvalidValueError,
    DuplicateEntryError, IDuplicateEntryErrorOptions,
    UnauthorizedAccess,
    EntityNotFoundError,
    DiskSpaceError,
    ConfigLoader,
    IRequestResponse,
    CORSMiddleware,
    formidable,
    IFormData,
    BackendAuthenticationMiddleware,
    IConfig,
    HTTPMethod,
    ServiceProvider,
    IServiceHeaders,
    ServiceResponse,
    DumpStream,
    ManagedDatabaseConnection,
    IDatabaseConnection
};
