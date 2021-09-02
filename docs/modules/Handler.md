[@breautek/storm](../README.md) / Handler

# Module: Handler

## Table of contents

### Classes

- [Handler](../classes/Handler.Handler-1.md)

### Type aliases

- [IHandlerError](Handler.md#ihandlererror)
- [IHandlerResponse](Handler.md#ihandlerresponse)

## Type aliases

### IHandlerError

Ƭ **IHandlerError**: [`StormError`](../classes/StormError.StormError-1.md) \| `Error` \| `any`

Like IHandlerResponse, an IHandlerError can be any arbitrary type of object,
however it's recommended that the type be of a StormError.

If the type is not a StormError, the error will be wrapped in an InternalError object.
This is to avoid accidental leakage of privilege data (e.g. snippets of database queries with sensitive information)

#### Defined in

[src/Handler.ts:54](https://github.com/breautek/storm/blob/3449719/src/Handler.ts#L54)

___

### IHandlerResponse

Ƭ **IHandlerResponse**: [`ResponseData`](../classes/ResponseData.ResponseData-1.md) \| `ReadableStream` \| `ReadStream` \| `any` \| `void`

IHandlerResponse can actually accept any arbitrary object, however it may do
certain things depending on the type of object it receives.

- If the response object is a stream, it will pipe the stream to stream the HTTP response.
- If the response is ResponseData, the status code and response data will be passed as the HTTP response.
- Passing nothing/undefined will return a status code of 204 with no body content
- Primitive data types will be passed as is
- Buffers will be passed through
- Any other object will be passed through JSON.stringify

#### Defined in

[src/Handler.ts:45](https://github.com/breautek/storm/blob/3449719/src/Handler.ts#L45)
