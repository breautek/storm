[@breautek/storm](../README.md) / [CORSMiddleware](../modules/corsmiddleware.md) / CORSMiddleware

# Class: CORSMiddleware

[CORSMiddleware](../modules/corsmiddleware.md).CORSMiddleware

CORSMiddleware is used to enable CORS on APIs.
It will automatically add the necessary headers necessary to
communicate with CORS enabled clients.

## Hierarchy

* [*Middleware*](middleware.middleware-1.md)

  ↳ **CORSMiddleware**

## Table of contents

### Constructors

- [constructor](corsmiddleware.corsmiddleware-1.md#constructor)

### Methods

- [\_execute](corsmiddleware.corsmiddleware-1.md#_execute)
- [execute](corsmiddleware.corsmiddleware-1.md#execute)
- [getDefaultAllowedHeaders](corsmiddleware.corsmiddleware-1.md#getdefaultallowedheaders)
- [getDefaultAllowedMethods](corsmiddleware.corsmiddleware-1.md#getdefaultallowedmethods)
- [getDefaultAllowedOrigin](corsmiddleware.corsmiddleware-1.md#getdefaultallowedorigin)

## Constructors

### constructor

\+ **new CORSMiddleware**(`allowedOrigin?`: *string*, `allowedHeaders?`: *string*[], `allowedMethods?`: *string*[]): [*CORSMiddleware*](corsmiddleware.corsmiddleware-1.md)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`allowedOrigin?` | *string* | The allowed origin. By default it will use the request origin.   |
`allowedHeaders?` | *string*[] | Array of allowed headers.   |
`allowedMethods?` | *string*[] | Array of allowed HTTP methods.    |

**Returns:** [*CORSMiddleware*](corsmiddleware.corsmiddleware-1.md)

Inherited from: [Middleware](middleware.middleware-1.md)

Defined in: [src/CORSMiddleware.ts:31](https://github.com/breautek/storm/blob/4e204d2/src/CORSMiddleware.ts#L31)

## Methods

### \_execute

▸ `Protected`**_execute**(`request`: [*Request*](request.request-1.md)<*any*, [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md)\>, `response`: [*Response*](response.response-1.md)<*any*, *string* \| Error \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)\>): *Promise*<[*IRequestResponse*](../interfaces/irequestresponse.irequestresponse-1.md)<*any*, *any*\>\>

#### Parameters:

Name | Type |
------ | ------ |
`request` | [*Request*](request.request-1.md)<*any*, [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md)\> |
`response` | [*Response*](response.response-1.md)<*any*, *string* \| Error \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)\> |

**Returns:** *Promise*<[*IRequestResponse*](../interfaces/irequestresponse.irequestresponse-1.md)<*any*, *any*\>\>

Overrides: [Middleware](middleware.middleware-1.md)

Defined in: [src/CORSMiddleware.ts:75](https://github.com/breautek/storm/blob/4e204d2/src/CORSMiddleware.ts#L75)

___

### execute

▸ **execute**(`request`: [*Request*](request.request-1.md)<*any*, [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md)\>, `response`: [*Response*](response.response-1.md)<*any*, *string* \| Error \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)\>): *Promise*<[*IRequestResponse*](../interfaces/irequestresponse.irequestresponse-1.md)<*any*, *any*\>\>

#### Parameters:

Name | Type |
------ | ------ |
`request` | [*Request*](request.request-1.md)<*any*, [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md)\> |
`response` | [*Response*](response.response-1.md)<*any*, *string* \| Error \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)\> |

**Returns:** *Promise*<[*IRequestResponse*](../interfaces/irequestresponse.irequestresponse-1.md)<*any*, *any*\>\>

Inherited from: [Middleware](middleware.middleware-1.md)

Defined in: [src/Middleware.ts:27](https://github.com/breautek/storm/blob/4e204d2/src/Middleware.ts#L27)

___

### getDefaultAllowedHeaders

▸ **getDefaultAllowedHeaders**(): *string*[]

**Returns:** *string*[]

Defined in: [src/CORSMiddleware.ts:54](https://github.com/breautek/storm/blob/4e204d2/src/CORSMiddleware.ts#L54)

___

### getDefaultAllowedMethods

▸ **getDefaultAllowedMethods**(): *string*[]

**Returns:** *string*[]

Defined in: [src/CORSMiddleware.ts:64](https://github.com/breautek/storm/blob/4e204d2/src/CORSMiddleware.ts#L64)

___

### getDefaultAllowedOrigin

▸ **getDefaultAllowedOrigin**(): *string*

Sets the allowed origin. By default,

**Returns:** *string*

Defined in: [src/CORSMiddleware.ts:50](https://github.com/breautek/storm/blob/4e204d2/src/CORSMiddleware.ts#L50)
