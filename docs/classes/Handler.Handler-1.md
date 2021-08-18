[@breautek/storm](../README.md) / [Handler](../modules/Handler.md) / Handler

# Class: Handler<TApplication, TGetRequest, TGetResponse, TPostRequest, TPostResponse, TPutRequest, TPutResponse, TDeleteRequest, TDeleteResponse\>

[Handler](../modules/Handler.md).Handler

## Type parameters

| Name | Type |
| :------ | :------ |
| `TApplication` | extends [`Application`](Application.Application-1.md)[`Application`](Application.Application-1.md) |
| `TGetRequest` | `any` |
| `TGetResponse` | [`IHandlerResponse`](../modules/Handler.md#ihandlerresponse) |
| `TPostRequest` | `any` |
| `TPostResponse` | [`IHandlerResponse`](../modules/Handler.md#ihandlerresponse) |
| `TPutRequest` | `any` |
| `TPutResponse` | [`IHandlerResponse`](../modules/Handler.md#ihandlerresponse) |
| `TDeleteRequest` | `any` |
| `TDeleteResponse` | [`IHandlerResponse`](../modules/Handler.md#ihandlerresponse) |

## Table of contents

### Constructors

- [constructor](Handler.Handler-1.md#constructor)

### Methods

- [\_delete](Handler.Handler-1.md#_delete)
- [\_get](Handler.Handler-1.md#_get)
- [\_initMiddlewares](Handler.Handler-1.md#_initmiddlewares)
- [\_onMiddlewareReject](Handler.Handler-1.md#_onmiddlewarereject)
- [\_post](Handler.Handler-1.md#_post)
- [\_put](Handler.Handler-1.md#_put)
- [delete](Handler.Handler-1.md#delete)
- [get](Handler.Handler-1.md#get)
- [getAccessToken](Handler.Handler-1.md#getaccesstoken)
- [getApplication](Handler.Handler-1.md#getapplication)
- [post](Handler.Handler-1.md#post)
- [put](Handler.Handler-1.md#put)

## Constructors

### constructor

• **new Handler**<`TApplication`, `TGetRequest`, `TGetResponse`, `TPostRequest`, `TPostResponse`, `TPutRequest`, `TPutResponse`, `TDeleteRequest`, `TDeleteResponse`\>(`app`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TApplication` | extends [`Application`](Application.Application-1.md)<[`IConfig`](../interfaces/IConfig.IConfig-1.md), [`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md), `any`, `any`, `TApplication`\>[`Application`](Application.Application-1.md)<[`IConfig`](../interfaces/IConfig.IConfig-1.md), [`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md), `any`, `any`\> |
| `TGetRequest` | `any` |
| `TGetResponse` | `any` |
| `TPostRequest` | `any` |
| `TPostResponse` | `any` |
| `TPutRequest` | `any` |
| `TPutResponse` | `any` |
| `TDeleteRequest` | `any` |
| `TDeleteResponse` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | `TApplication` |

#### Defined in

[src/Handler.ts:71](https://github.com/breautek/storm/blob/8fb5f8c/src/Handler.ts#L71)

## Methods

### \_delete

▸ `Protected` **_delete**(`request`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](Request.Request-1.md)<`TDeleteRequest`, [`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md)\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/Handler.ts:212](https://github.com/breautek/storm/blob/8fb5f8c/src/Handler.ts#L212)

___

### \_get

▸ `Protected` **_get**(`request`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](Request.Request-1.md)<`TGetRequest`, [`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md)\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/Handler.ts:200](https://github.com/breautek/storm/blob/8fb5f8c/src/Handler.ts#L200)

___

### \_initMiddlewares

▸ `Protected` **_initMiddlewares**(): [`Middleware`](Middleware.Middleware-1.md)[]

#### Returns

[`Middleware`](Middleware.Middleware-1.md)[]

#### Defined in

[src/Handler.ts:80](https://github.com/breautek/storm/blob/8fb5f8c/src/Handler.ts#L80)

___

### \_onMiddlewareReject

▸ `Protected` **_onMiddlewareReject**(`request`, `response`, `error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](Request.Request-1.md)<`any`, [`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md)\> |
| `response` | [`Response`](Response.Response-1.md)<`any`, `string` \| `Error` \| [`IErrorResponse`](../interfaces/StormError.IErrorResponse.md)\> |
| `error` | [`StormError`](StormError.StormError-1.md)<`any`\> |

#### Returns

`void`

#### Defined in

[src/Handler.ts:136](https://github.com/breautek/storm/blob/8fb5f8c/src/Handler.ts#L136)

___

### \_post

▸ `Protected` **_post**(`request`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](Request.Request-1.md)<`TPostRequest`, [`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md)\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/Handler.ts:204](https://github.com/breautek/storm/blob/8fb5f8c/src/Handler.ts#L204)

___

### \_put

▸ `Protected` **_put**(`request`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](Request.Request-1.md)<`TPutRequest`, [`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md)\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/Handler.ts:208](https://github.com/breautek/storm/blob/8fb5f8c/src/Handler.ts#L208)

___

### delete

▸ **delete**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](Request.Request-1.md)<`TDeleteRequest`, [`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md)\> |
| `response` | [`Response`](Response.Response-1.md)<`TDeleteResponse`, `string` \| `Error` \| [`IErrorResponse`](../interfaces/StormError.IErrorResponse.md)\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/Handler.ts:187](https://github.com/breautek/storm/blob/8fb5f8c/src/Handler.ts#L187)

___

### get

▸ **get**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](Request.Request-1.md)<`TGetRequest`, [`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md)\> |
| `response` | [`Response`](Response.Response-1.md)<`TGetResponse`, `string` \| `Error` \| [`IErrorResponse`](../interfaces/StormError.IErrorResponse.md)\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/Handler.ts:148](https://github.com/breautek/storm/blob/8fb5f8c/src/Handler.ts#L148)

___

### getAccessToken

▸ **getAccessToken**(`request`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](Request.Request-1.md)<`any`, [`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md)\> |

#### Returns

`string`

#### Defined in

[src/Handler.ts:84](https://github.com/breautek/storm/blob/8fb5f8c/src/Handler.ts#L84)

___

### getApplication

▸ **getApplication**(): `TApplication`

#### Returns

`TApplication`

#### Defined in

[src/Handler.ts:76](https://github.com/breautek/storm/blob/8fb5f8c/src/Handler.ts#L76)

___

### post

▸ **post**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](Request.Request-1.md)<`TPostRequest`, [`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md)\> |
| `response` | [`Response`](Response.Response-1.md)<`TPostResponse`, `string` \| `Error` \| [`IErrorResponse`](../interfaces/StormError.IErrorResponse.md)\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/Handler.ts:174](https://github.com/breautek/storm/blob/8fb5f8c/src/Handler.ts#L174)

___

### put

▸ **put**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](Request.Request-1.md)<`TPutRequest`, [`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md)\> |
| `response` | [`Response`](Response.Response-1.md)<`TPutResponse`, `string` \| `Error` \| [`IErrorResponse`](../interfaces/StormError.IErrorResponse.md)\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/Handler.ts:161](https://github.com/breautek/storm/blob/8fb5f8c/src/Handler.ts#L161)
