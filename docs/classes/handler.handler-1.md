[@breautek/storm](../README.md) / [Handler](../modules/handler.md) / Handler

# Class: Handler<TApplication, TGetRequest, TGetResponse, TPostRequest, TPostResponse, TPutRequest, TPutResponse, TDeleteRequest, TDeleteResponse\>

[Handler](../modules/handler.md).Handler

## Type parameters

Name | Type | Default |
------ | ------ | ------ |
`TApplication` | [*Application*](application.application-1.md) | [*Application*](application.application-1.md) |
`TGetRequest` | - | *any* |
`TGetResponse` | - | *any* |
`TPostRequest` | - | *any* |
`TPostResponse` | - | *any* |
`TPutRequest` | - | *any* |
`TPutResponse` | - | *any* |
`TDeleteRequest` | - | *any* |
`TDeleteResponse` | - | *any* |

## Hierarchy

* **Handler**

## Table of contents

### Constructors

- [constructor](handler.handler-1.md#constructor)

### Methods

- [\_delete](handler.handler-1.md#_delete)
- [\_get](handler.handler-1.md#_get)
- [\_initMiddlewares](handler.handler-1.md#_initmiddlewares)
- [\_onMiddlewareReject](handler.handler-1.md#_onmiddlewarereject)
- [\_post](handler.handler-1.md#_post)
- [\_put](handler.handler-1.md#_put)
- [delete](handler.handler-1.md#delete)
- [get](handler.handler-1.md#get)
- [getAccessToken](handler.handler-1.md#getaccesstoken)
- [getApplication](handler.handler-1.md#getapplication)
- [post](handler.handler-1.md#post)
- [put](handler.handler-1.md#put)

## Constructors

### constructor

\+ **new Handler**<TApplication, TGetRequest, TGetResponse, TPostRequest, TPostResponse, TPutRequest, TPutResponse, TDeleteRequest, TDeleteResponse\>(`app`: TApplication): [*Handler*](handler.handler-1.md)<TApplication, TGetRequest, TGetResponse, TPostRequest, TPostResponse, TPutRequest, TPutResponse, TDeleteRequest, TDeleteResponse\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`TApplication` | [*Application*](application.application-1.md)<[*IConfig*](../interfaces/iconfig.iconfig-1.md), [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md), *any*, *any*, TApplication\> | [*Application*](application.application-1.md)<[*IConfig*](../interfaces/iconfig.iconfig-1.md), [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md), *any*, *any*\> |
`TGetRequest` | - | *any* |
`TGetResponse` | - | *any* |
`TPostRequest` | - | *any* |
`TPostResponse` | - | *any* |
`TPutRequest` | - | *any* |
`TPutResponse` | - | *any* |
`TDeleteRequest` | - | *any* |
`TDeleteResponse` | - | *any* |

#### Parameters:

Name | Type |
------ | ------ |
`app` | TApplication |

**Returns:** [*Handler*](handler.handler-1.md)<TApplication, TGetRequest, TGetResponse, TPostRequest, TPostResponse, TPutRequest, TPutResponse, TDeleteRequest, TDeleteResponse\>

Defined in: [src/Handler.ts:44](https://github.com/breautek/storm/blob/022545d/src/Handler.ts#L44)

## Methods

### \_delete

▸ `Protected`**_delete**(`request`: [*Request*](request.request-1.md)<TDeleteRequest, [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md)\>, `response`: [*Response*](response.response-1.md)<TDeleteResponse, *string* \| Error \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)\>): *Promise*<*void*\>

#### Parameters:

Name | Type |
------ | ------ |
`request` | [*Request*](request.request-1.md)<TDeleteRequest, [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md)\> |
`response` | [*Response*](response.response-1.md)<TDeleteResponse, *string* \| Error \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)\> |

**Returns:** *Promise*<*void*\>

Defined in: [src/Handler.ts:179](https://github.com/breautek/storm/blob/022545d/src/Handler.ts#L179)

___

### \_get

▸ `Protected`**_get**(`request`: [*Request*](request.request-1.md)<TGetRequest, [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md)\>, `response`: [*Response*](response.response-1.md)<TGetResponse, *string* \| Error \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)\>): *Promise*<*void*\>

#### Parameters:

Name | Type |
------ | ------ |
`request` | [*Request*](request.request-1.md)<TGetRequest, [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md)\> |
`response` | [*Response*](response.response-1.md)<TGetResponse, *string* \| Error \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)\> |

**Returns:** *Promise*<*void*\>

Defined in: [src/Handler.ts:164](https://github.com/breautek/storm/blob/022545d/src/Handler.ts#L164)

___

### \_initMiddlewares

▸ `Protected`**_initMiddlewares**(): [*Middleware*](middleware.middleware-1.md)[]

**Returns:** [*Middleware*](middleware.middleware-1.md)[]

Defined in: [src/Handler.ts:55](https://github.com/breautek/storm/blob/022545d/src/Handler.ts#L55)

___

### \_onMiddlewareReject

▸ `Protected`**_onMiddlewareReject**(`request`: [*Request*](request.request-1.md)<*any*, [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md)\>, `response`: [*Response*](response.response-1.md)<*any*, *string* \| Error \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)\>, `error`: [*StormError*](stormerror.stormerror-1.md)<*any*\>): *void*

#### Parameters:

Name | Type |
------ | ------ |
`request` | [*Request*](request.request-1.md)<*any*, [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md)\> |
`response` | [*Response*](response.response-1.md)<*any*, *string* \| Error \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)\> |
`error` | [*StormError*](stormerror.stormerror-1.md)<*any*\> |

**Returns:** *void*

Defined in: [src/Handler.ts:111](https://github.com/breautek/storm/blob/022545d/src/Handler.ts#L111)

___

### \_post

▸ `Protected`**_post**(`request`: [*Request*](request.request-1.md)<TPostRequest, [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md)\>, `response`: [*Response*](response.response-1.md)<TPostResponse, *string* \| Error \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)\>): *Promise*<*void*\>

#### Parameters:

Name | Type |
------ | ------ |
`request` | [*Request*](request.request-1.md)<TPostRequest, [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md)\> |
`response` | [*Response*](response.response-1.md)<TPostResponse, *string* \| Error \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)\> |

**Returns:** *Promise*<*void*\>

Defined in: [src/Handler.ts:169](https://github.com/breautek/storm/blob/022545d/src/Handler.ts#L169)

___

### \_put

▸ `Protected`**_put**(`request`: [*Request*](request.request-1.md)<TPutRequest, [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md)\>, `response`: [*Response*](response.response-1.md)<TPutResponse, *string* \| Error \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)\>): *Promise*<*void*\>

#### Parameters:

Name | Type |
------ | ------ |
`request` | [*Request*](request.request-1.md)<TPutRequest, [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md)\> |
`response` | [*Response*](response.response-1.md)<TPutResponse, *string* \| Error \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)\> |

**Returns:** *Promise*<*void*\>

Defined in: [src/Handler.ts:174](https://github.com/breautek/storm/blob/022545d/src/Handler.ts#L174)

___

### delete

▸ **delete**(`request`: [*Request*](request.request-1.md)<TDeleteRequest, [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md)\>, `response`: [*Response*](response.response-1.md)<TDeleteResponse, *string* \| Error \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)\>): *Promise*<*void*\>

#### Parameters:

Name | Type |
------ | ------ |
`request` | [*Request*](request.request-1.md)<TDeleteRequest, [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md)\> |
`response` | [*Response*](response.response-1.md)<TDeleteResponse, *string* \| Error \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)\> |

**Returns:** *Promise*<*void*\>

Defined in: [src/Handler.ts:152](https://github.com/breautek/storm/blob/022545d/src/Handler.ts#L152)

___

### get

▸ **get**(`request`: [*Request*](request.request-1.md)<TGetRequest, [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md)\>, `response`: [*Response*](response.response-1.md)<TGetResponse, *string* \| Error \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)\>): *Promise*<*void*\>

#### Parameters:

Name | Type |
------ | ------ |
`request` | [*Request*](request.request-1.md)<TGetRequest, [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md)\> |
`response` | [*Response*](response.response-1.md)<TGetResponse, *string* \| Error \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)\> |

**Returns:** *Promise*<*void*\>

Defined in: [src/Handler.ts:115](https://github.com/breautek/storm/blob/022545d/src/Handler.ts#L115)

___

### getAccessToken

▸ **getAccessToken**(`request`: [*Request*](request.request-1.md)<*any*, [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md)\>): *string*

#### Parameters:

Name | Type |
------ | ------ |
`request` | [*Request*](request.request-1.md)<*any*, [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md)\> |

**Returns:** *string*

Defined in: [src/Handler.ts:59](https://github.com/breautek/storm/blob/022545d/src/Handler.ts#L59)

___

### getApplication

▸ **getApplication**(): TApplication

**Returns:** TApplication

Defined in: [src/Handler.ts:51](https://github.com/breautek/storm/blob/022545d/src/Handler.ts#L51)

___

### post

▸ **post**(`request`: [*Request*](request.request-1.md)<TPostRequest, [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md)\>, `response`: [*Response*](response.response-1.md)<TPostResponse, *string* \| Error \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)\>): *Promise*<*void*\>

#### Parameters:

Name | Type |
------ | ------ |
`request` | [*Request*](request.request-1.md)<TPostRequest, [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md)\> |
`response` | [*Response*](response.response-1.md)<TPostResponse, *string* \| Error \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)\> |

**Returns:** *Promise*<*void*\>

Defined in: [src/Handler.ts:140](https://github.com/breautek/storm/blob/022545d/src/Handler.ts#L140)

___

### put

▸ **put**(`request`: [*Request*](request.request-1.md)<TPutRequest, [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md)\>, `response`: [*Response*](response.response-1.md)<TPutResponse, *string* \| Error \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)\>): *Promise*<*void*\>

#### Parameters:

Name | Type |
------ | ------ |
`request` | [*Request*](request.request-1.md)<TPutRequest, [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md)\> |
`response` | [*Response*](response.response-1.md)<TPutResponse, *string* \| Error \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)\> |

**Returns:** *Promise*<*void*\>

Defined in: [src/Handler.ts:128](https://github.com/breautek/storm/blob/022545d/src/Handler.ts#L128)
