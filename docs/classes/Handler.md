[@breautek/storm](../README.md) / Handler

# Class: Handler<TApplication, TGetRequest, TGetResponse, TPostRequest, TPostResponse, TPutRequest, TPutResponse, TDeleteRequest, TDeleteResponse\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TApplication` | extends [`Application`](Application.md) = [`Application`](Application.md) |
| `TGetRequest` | `any` |
| `TGetResponse` | [`IHandlerResponse`](../README.md#ihandlerresponse) |
| `TPostRequest` | `any` |
| `TPostResponse` | [`IHandlerResponse`](../README.md#ihandlerresponse) |
| `TPutRequest` | `any` |
| `TPutResponse` | [`IHandlerResponse`](../README.md#ihandlerresponse) |
| `TDeleteRequest` | `any` |
| `TDeleteResponse` | [`IHandlerResponse`](../README.md#ihandlerresponse) |

## Table of contents

### Constructors

- [constructor](Handler.md#constructor)

### Methods

- [\_delete](Handler.md#_delete)
- [\_get](Handler.md#_get)
- [\_initMiddlewares](Handler.md#_initmiddlewares)
- [\_onMiddlewareReject](Handler.md#_onmiddlewarereject)
- [\_post](Handler.md#_post)
- [\_put](Handler.md#_put)
- [delete](Handler.md#delete)
- [get](Handler.md#get)
- [getAccessToken](Handler.md#getaccesstoken)
- [getApplication](Handler.md#getapplication)
- [post](Handler.md#post)
- [put](Handler.md#put)

## Constructors

### constructor

• **new Handler**<`TApplication`, `TGetRequest`, `TGetResponse`, `TPostRequest`, `TPostResponse`, `TPutRequest`, `TPutResponse`, `TDeleteRequest`, `TDeleteResponse`\>(`app`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TApplication` | extends [`Application`](Application.md)<[`IConfig`](../interfaces/IConfig.md), [`IAuthTokenData`](../interfaces/IAuthTokenData.md), `any`, `any`, `TApplication`\> = [`Application`](Application.md)<[`IConfig`](../interfaces/IConfig.md), [`IAuthTokenData`](../interfaces/IAuthTokenData.md), `any`, `any`\> |
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

[src/Handler.ts:72](https://github.com/breautek/storm/blob/c3ad7fa/src/Handler.ts#L72)

## Methods

### \_delete

▸ `Protected` **_delete**(`request`): `Promise`<`TDeleteResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](Request.md)<`TDeleteRequest`, [`IAuthTokenData`](../interfaces/IAuthTokenData.md)\> |

#### Returns

`Promise`<`TDeleteResponse`\>

#### Defined in

[src/Handler.ts:211](https://github.com/breautek/storm/blob/c3ad7fa/src/Handler.ts#L211)

___

### \_get

▸ `Protected` **_get**(`request`): `Promise`<`TGetResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](Request.md)<`TGetRequest`, [`IAuthTokenData`](../interfaces/IAuthTokenData.md)\> |

#### Returns

`Promise`<`TGetResponse`\>

#### Defined in

[src/Handler.ts:199](https://github.com/breautek/storm/blob/c3ad7fa/src/Handler.ts#L199)

___

### \_initMiddlewares

▸ `Protected` **_initMiddlewares**(): [`Middleware`](Middleware.md)[]

#### Returns

[`Middleware`](Middleware.md)[]

#### Defined in

[src/Handler.ts:81](https://github.com/breautek/storm/blob/c3ad7fa/src/Handler.ts#L81)

___

### \_onMiddlewareReject

▸ `Protected` **_onMiddlewareReject**(`request`, `response`, `error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](Request.md)<`any`, [`IAuthTokenData`](../interfaces/IAuthTokenData.md)\> |
| `response` | [`Response`](Response.md)<`any`, `string` \| `Error` \| [`IErrorResponse`](../interfaces/IErrorResponse.md)\> |
| `error` | [`StormError`](StormError.md)<`any`\> |

#### Returns

`void`

#### Defined in

[src/Handler.ts:137](https://github.com/breautek/storm/blob/c3ad7fa/src/Handler.ts#L137)

___

### \_post

▸ `Protected` **_post**(`request`): `Promise`<`TPostResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](Request.md)<`TPostRequest`, [`IAuthTokenData`](../interfaces/IAuthTokenData.md)\> |

#### Returns

`Promise`<`TPostResponse`\>

#### Defined in

[src/Handler.ts:203](https://github.com/breautek/storm/blob/c3ad7fa/src/Handler.ts#L203)

___

### \_put

▸ `Protected` **_put**(`request`): `Promise`<`TPutResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](Request.md)<`TPutRequest`, [`IAuthTokenData`](../interfaces/IAuthTokenData.md)\> |

#### Returns

`Promise`<`TPutResponse`\>

#### Defined in

[src/Handler.ts:207](https://github.com/breautek/storm/blob/c3ad7fa/src/Handler.ts#L207)

___

### delete

▸ **delete**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](Request.md)<`TDeleteRequest`, [`IAuthTokenData`](../interfaces/IAuthTokenData.md)\> |
| `response` | [`Response`](Response.md)<`TDeleteResponse`, `string` \| `Error` \| [`IErrorResponse`](../interfaces/IErrorResponse.md)\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/Handler.ts:186](https://github.com/breautek/storm/blob/c3ad7fa/src/Handler.ts#L186)

___

### get

▸ **get**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](Request.md)<`TGetRequest`, [`IAuthTokenData`](../interfaces/IAuthTokenData.md)\> |
| `response` | [`Response`](Response.md)<`TGetResponse`, `string` \| `Error` \| [`IErrorResponse`](../interfaces/IErrorResponse.md)\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/Handler.ts:147](https://github.com/breautek/storm/blob/c3ad7fa/src/Handler.ts#L147)

___

### getAccessToken

▸ **getAccessToken**(`request`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](Request.md)<`any`, [`IAuthTokenData`](../interfaces/IAuthTokenData.md)\> |

#### Returns

`string`

#### Defined in

[src/Handler.ts:85](https://github.com/breautek/storm/blob/c3ad7fa/src/Handler.ts#L85)

___

### getApplication

▸ **getApplication**(): `TApplication`

#### Returns

`TApplication`

#### Defined in

[src/Handler.ts:77](https://github.com/breautek/storm/blob/c3ad7fa/src/Handler.ts#L77)

___

### post

▸ **post**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](Request.md)<`TPostRequest`, [`IAuthTokenData`](../interfaces/IAuthTokenData.md)\> |
| `response` | [`Response`](Response.md)<`TPostResponse`, `string` \| `Error` \| [`IErrorResponse`](../interfaces/IErrorResponse.md)\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/Handler.ts:173](https://github.com/breautek/storm/blob/c3ad7fa/src/Handler.ts#L173)

___

### put

▸ **put**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](Request.md)<`TPutRequest`, [`IAuthTokenData`](../interfaces/IAuthTokenData.md)\> |
| `response` | [`Response`](Response.md)<`TPutResponse`, `string` \| `Error` \| [`IErrorResponse`](../interfaces/IErrorResponse.md)\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/Handler.ts:160](https://github.com/breautek/storm/blob/c3ad7fa/src/Handler.ts#L160)
