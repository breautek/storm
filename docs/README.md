@breautek/storm

# @breautek/storm

## Table of contents

### Namespaces

- [formidable](modules/formidable.md)

### Enumerations

- [ErrorCode](enums/ErrorCode.md)
- [ExitCode](enums/ExitCode.md)
- [HTTPMethod](enums/HTTPMethod.md)
- [JWTError](enums/JWTError.md)
- [StatusCode](enums/StatusCode.md)

### Classes

- [Application](classes/Application.md)
- [BackendAuthenticationMiddleware](classes/BackendAuthenticationMiddleware.md)
- [CORSMiddleware](classes/CORSMiddleware.md)
- [ConfigLoader](classes/ConfigLoader.md)
- [Database](classes/Database.md)
- [DatabaseConnection](classes/DatabaseConnection.md)
- [DatabaseQueryError](classes/DatabaseQueryError.md)
- [DeadLockError](classes/DeadLockError.md)
- [DiskSpaceError](classes/DiskSpaceError.md)
- [DropTemporaryTableQuery](classes/DropTemporaryTableQuery.md)
- [DumpStream](classes/DumpStream.md)
- [DuplicateEntryError](classes/DuplicateEntryError.md)
- [EntityNotFoundError](classes/EntityNotFoundError.md)
- [ExpiredTokenError](classes/ExpiredTokenError.md)
- [Handler](classes/Handler.md)
- [InternalError](classes/InternalError.md)
- [InvalidCredentialsError](classes/InvalidCredentialsError.md)
- [InvalidValueError](classes/InvalidValueError.md)
- [ManagedDatabaseConnection](classes/ManagedDatabaseConnection.md)
- [Middleware](classes/Middleware.md)
- [MissingConfigError](classes/MissingConfigError.md)
- [MissingParameterError](classes/MissingParameterError.md)
- [MySQLConnection](classes/MySQLConnection.md)
- [MySQLDatabase](classes/MySQLDatabase.md)
- [NotImplementedError](classes/NotImplementedError.md)
- [Query](classes/Query.md)
- [RawError](classes/RawError.md)
- [RawQuery](classes/RawQuery.md)
- [Request](classes/Request.md)
- [Response](classes/Response.md)
- [ResponseData](classes/ResponseData.md)
- [ServiceProvider](classes/ServiceProvider.md)
- [ServiceResponse](classes/ServiceResponse.md)
- [SetSessionVariableQuery](classes/SetSessionVariableQuery.md)
- [StormError](classes/StormError.md)
- [TemporaryTableQuery](classes/TemporaryTableQuery.md)
- [Token](classes/Token.md)
- [TokenManager](classes/TokenManager.md)
- [UnauthorizedAccessError](classes/UnauthorizedAccessError.md)

### Interfaces

- [IAdditionalErrorDetails](interfaces/IAdditionalErrorDetails.md)
- [IAuthTokenData](interfaces/IAuthTokenData.md)
- [IConfig](interfaces/IConfig.md)
- [IDatabaseConfig](interfaces/IDatabaseConfig.md)
- [IDatabaseConnection](interfaces/IDatabaseConnection.md)
- [IErrorResponse](interfaces/IErrorResponse.md)
- [IFormData](interfaces/IFormData.md)
- [IHandler](interfaces/IHandler.md)
- [IInsertQueryResult](interfaces/IInsertQueryResult.md)
- [IJWTVerifyOptions](interfaces/IJWTVerifyOptions.md)
- [IParameterMap](interfaces/IParameterMap.md)
- [IRequestResponse](interfaces/IRequestResponse.md)
- [IServiceHeaders](interfaces/IServiceHeaders.md)
- [ISetSessionVariableQueryInput](interfaces/ISetSessionVariableQueryInput.md)
- [ITemporaryTableQueryInput](interfaces/ITemporaryTableQueryInput.md)
- [IUpdateQueryResult](interfaces/IUpdateQueryResult.md)

### Type Aliases

- [IDeleteQueryResult](README.md#ideletequeryresult)
- [IHandlerError](README.md#ihandlererror)
- [IHandlerResponse](README.md#ihandlerresponse)

### Functions

- [formidable](README.md#formidable)
- [getInstance](README.md#getinstance)

## Type Aliases

### IDeleteQueryResult

Ƭ **IDeleteQueryResult**: [`IUpdateQueryResult`](interfaces/IUpdateQueryResult.md)

#### Defined in

[src/IDeleteQueryResult.ts:19](https://github.com/breautek/storm/blob/0875c73/src/IDeleteQueryResult.ts#L19)

___

### IHandlerError

Ƭ **IHandlerError**: [`StormError`](classes/StormError.md) \| `Error` \| `any`

Like IHandlerResponse, an IHandlerError can be any arbitrary type of object,
however it's recommended that the type be of a StormError.

If the type is not a StormError, the error will be wrapped in an InternalError object.
This is to avoid accidental leakage of privilege data (e.g. snippets of database queries with sensitive information)

#### Defined in

[src/Handler.ts:55](https://github.com/breautek/storm/blob/0875c73/src/Handler.ts#L55)

___

### IHandlerResponse

Ƭ **IHandlerResponse**: [`ResponseData`](classes/ResponseData.md) \| `ReadableStream` \| `ReadStream` \| `any` \| `void`

IHandlerResponse can actually accept any arbitrary object, however it may do
certain things depending on the type of object it receives.

- If the response object is a stream, it will pipe the stream to stream the HTTP response.
- If the response is ResponseData, the status code and response data will be passed as the HTTP response.
- Passing nothing/undefined will return a status code of 204 with no body content
- Primitive data types will be passed as is
- Buffers will be passed through
- Any other object will be passed through JSON.stringify

#### Defined in

[src/Handler.ts:46](https://github.com/breautek/storm/blob/0875c73/src/Handler.ts#L46)

## Functions

### formidable

▸ **formidable**(`options?`): `IncomingForm`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`Options`](interfaces/formidable.Options.md) |

#### Returns

`IncomingForm`

#### Defined in

node_modules/@types/formidable/index.d.ts:282

___

### getInstance

▸ **getInstance**(): [`Application`](classes/Application.md)<[`IConfig`](interfaces/IConfig.md), [`IAuthTokenData`](interfaces/IAuthTokenData.md), `any`, `any`\>

#### Returns

[`Application`](classes/Application.md)<[`IConfig`](interfaces/IConfig.md), [`IAuthTokenData`](interfaces/IAuthTokenData.md), `any`, `any`\>

#### Defined in

[src/instance.ts:28](https://github.com/breautek/storm/blob/0875c73/src/instance.ts#L28)
