[@breautek/storm](../README.md) / [Exports](../modules.md) / [Middleware](../modules/middleware.md) / Middleware

# Class: Middleware

[Middleware](../modules/middleware.md).Middleware

## Hierarchy

* **Middleware**

  ↳ [*CORSMiddleware*](corsmiddleware.corsmiddleware-1.md)

## Table of contents

### Constructors

- [constructor](middleware.middleware-1.md#constructor)

### Methods

- [\_execute](middleware.middleware-1.md#_execute)
- [execute](middleware.middleware-1.md#execute)

## Constructors

### constructor

\+ **new Middleware**(): [*Middleware*](middleware.middleware-1.md)

**Returns:** [*Middleware*](middleware.middleware-1.md)

Defined in: [src/Middleware.ts:21](https://github.com/breautek/storm/blob/ec148ff/src/Middleware.ts#L21)

## Methods

### \_execute

▸ `Protected` `Abstract`**_execute**(`request`: [*Request*](request.request-1.md)<*any*, [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md)\>, `response`: [*Response*](response.response-1.md)<*any*, *string* \| Error \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)\>): *Promise*<[*IRequestResponse*](../interfaces/irequestresponse.irequestresponse-1.md)<*any*, *any*\>\>

#### Parameters:

Name | Type |
------ | ------ |
`request` | [*Request*](request.request-1.md)<*any*, [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md)\> |
`response` | [*Response*](response.response-1.md)<*any*, *string* \| Error \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)\> |

**Returns:** *Promise*<[*IRequestResponse*](../interfaces/irequestresponse.irequestresponse-1.md)<*any*, *any*\>\>

Defined in: [src/Middleware.ts:25](https://github.com/breautek/storm/blob/ec148ff/src/Middleware.ts#L25)

___

### execute

▸ **execute**(`request`: [*Request*](request.request-1.md)<*any*, [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md)\>, `response`: [*Response*](response.response-1.md)<*any*, *string* \| Error \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)\>): *Promise*<[*IRequestResponse*](../interfaces/irequestresponse.irequestresponse-1.md)<*any*, *any*\>\>

#### Parameters:

Name | Type |
------ | ------ |
`request` | [*Request*](request.request-1.md)<*any*, [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md)\> |
`response` | [*Response*](response.response-1.md)<*any*, *string* \| Error \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)\> |

**Returns:** *Promise*<[*IRequestResponse*](../interfaces/irequestresponse.irequestresponse-1.md)<*any*, *any*\>\>

Defined in: [src/Middleware.ts:27](https://github.com/breautek/storm/blob/ec148ff/src/Middleware.ts#L27)
