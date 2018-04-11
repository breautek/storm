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
import {LogEvent, LogEventInterface} from './LogEvent';
import {ExitCode} from './ExitCode';
import {Iterator} from './Iterator';
import {Token} from './Token';
import {TokenManager} from './TokenManager';
import {StormError, ErrorResponse, AdditionalErrorDetails} from './StormError';
import {StatusCode} from './StatusCode';
import {ErrorCode} from './ErrorCode';
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
import {Request, ParameterMap} from './Request';
import {Response} from './Response';
import {ResponseData} from './ResponseData';
import {Handler} from './Handler';
import {AuthenticationMiddleware} from './AuthenticationMiddleware';
import {IHandler} from './IHandler';
import {DictionaryIterator, Dictionary, DictionaryIteratorResult} from './DictionaryIterator'
import {ReverseIterator} from './ReverseIterator';
import {InvalidValueError} from './InvalidValueError';
import {DuplicateEntryError, DuplicateEntryErrorOptions} from './DuplicateEntryError';
import {UnauthorizedAccess} from './UnauthorizedAccess';
import {EntityNotFoundError} from './EntityNotFoundError';
import {DiskSpaceError} from './DiskSpaceError';
import {ConfigLoader} from './ConfigLoader';
import {RequestResponse} from './RequestResponse';
import {CORSMiddleware} from './CORSMiddleware';

export {
    getInstance, getApplicationLogger,
    Application,
    Logger,
    LogSeverity,
    LogEvent, LogEventInterface,
    ExitCode,
    Iterator,
    Token,
    TokenManager,
    StormError, ErrorResponse, AdditionalErrorDetails,
    StatusCode,
    ErrorCode,
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
    Request, ParameterMap,
    Response,
    ResponseData,
    Handler,
    AuthenticationMiddleware,
    IHandler,
    DictionaryIterator, Dictionary, DictionaryIteratorResult,
    ReverseIterator,
    InvalidValueError,
    DuplicateEntryError, DuplicateEntryErrorOptions,
    UnauthorizedAccess,
    EntityNotFoundError,
    DiskSpaceError,
    ConfigLoader,
    RequestResponse,
    CORSMiddleware
};
