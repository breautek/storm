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

export enum StatusCode {
    INFO_CONTINUE = 100,
    INFO_SWITCHING_PROTOCOLS = 101,
    INFO_PROCESSING = 102,

    OK = 200,
    OK_CREATED = 201,
    OK_ACCEPTED = 202,
    OK_NON_AUTH_INFO = 203,
    OK_NO_CONTENT = 204,
    OK_RESET_CONTENT = 205,
    OK_PARTIAL_CONTENT = 206,
    OK_MULTI_STATUS = 207,
    OK_ALREADY_REPORTED = 208,

    REDIR_MULTIPLE_CHOICE = 300,
    REDIR_MOVED_PERMANENTLY = 301,
    REDIR_FOUND = 302,
    REDIR_SEE_OTHER = 303,
    REDIR_NOT_MODIFIED = 304,
    REDIR_USE_PROXY = 305,
    REDIR_TEMP = 307,

    ERR_BAD_REQUEST = 400,
    ERR_UNAUTHORIZED = 401,		// Used when the user needs to authorize.
    ERR_PAYMENT_REQUIRED = 402,
    ERR_FORBIDDEN = 403,		// USed when the user is authorized but is not allowed access.
    ERR_NOT_FOUND = 404,
    ERR_NOT_ALLOWED = 405,
    ERR_NOT_ACCEPTABLE = 406,
    ERR_PROXY_AUTH_REQUIRED = 407,
    ERR_REQUEST_TIMEOUT = 408,
    ERR_CONFLICT= 409,
    ERR_GONE = 410,
    ERR_LENGTH_REQUIRED = 411,
    ERR_PRECONDITION_FAILED = 412,
    ERR_REQUEST_TOO_LARGE = 413,
    ERR_REQUEST_URI_TOO_LONG = 414,
    ERR_UNSUPPORTED_MEDIA_TYPE = 415,
    ERR_REQUEST_RANGE_NOT_SATISFIABLE = 416,
    ERR_EXPECTATION_FAILED = 417,
    ERR_TEAPOT = 418,
    ERR_UPGRADE_REQUIRED = 426,
    ERR_PRECONDITION_REQUIRED = 428,
    ERR_TOO_MANY_REQUESTS = 429,
    ERR_REQUEST_HEADERS_TOO_LARGE = 431,
    ERR_LEGAL = 451,

    INTERNAL_ERROR = 500,
    INTERNAL_NOT_IMPLEMENTED = 501,
    INTERNAL_BAD_GATEWAY = 502,
    INTERNAL_SERVICE_UNAVAILABLE = 503,
    INTERNAL_TIMEOUT = 504
}
