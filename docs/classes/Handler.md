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
- [attach](Handler.md#attach)
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

[src/Handler.ts:71](https://github.com/breautek/storm/blob/2f08fb3/src/Handler.ts#L71)

## Methods

### \_delete

▸ `Protected` **_delete**(`request`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](Request.md)<`TDeleteRequest`, [`IAuthTokenData`](../interfaces/IAuthTokenData.md)\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/Handler.ts:214](https://github.com/breautek/storm/blob/2f08fb3/src/Handler.ts#L214)

___

### \_get

▸ `Protected` **_get**(`request`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](Request.md)<`TGetRequest`, [`IAuthTokenData`](../interfaces/IAuthTokenData.md)\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/Handler.ts:202](https://github.com/breautek/storm/blob/2f08fb3/src/Handler.ts#L202)

___

### \_initMiddlewares

▸ `Protected` **_initMiddlewares**(): [`Middleware`](Middleware.md)[]

#### Returns

[`Middleware`](Middleware.md)[]

#### Defined in

[src/Handler.ts:80](https://github.com/breautek/storm/blob/2f08fb3/src/Handler.ts#L80)

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

[src/Handler.ts:136](https://github.com/breautek/storm/blob/2f08fb3/src/Handler.ts#L136)

___

### \_post

▸ `Protected` **_post**(`request`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](Request.md)<`TPostRequest`, [`IAuthTokenData`](../interfaces/IAuthTokenData.md)\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/Handler.ts:206](https://github.com/breautek/storm/blob/2f08fb3/src/Handler.ts#L206)

___

### \_put

▸ `Protected` **_put**(`request`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](Request.md)<`TPutRequest`, [`IAuthTokenData`](../interfaces/IAuthTokenData.md)\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/Handler.ts:210](https://github.com/breautek/storm/blob/2f08fb3/src/Handler.ts#L210)

___

### attach

▸ **attach**(`app`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`Application`](Application.md)<[`IConfig`](../interfaces/IConfig.md), [`IAuthTokenData`](../interfaces/IAuthTokenData.md), `any`, `any`\> |

#### Returns

`void`

#### Defined in

[src/Handler.ts:146](https://github.com/breautek/storm/blob/2f08fb3/src/Handler.ts#L146)

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

[src/Handler.ts:189](https://github.com/breautek/storm/blob/2f08fb3/src/Handler.ts#L189)

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

[src/Handler.ts:150](https://github.com/breautek/storm/blob/2f08fb3/src/Handler.ts#L150)

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

[src/Handler.ts:84](https://github.com/breautek/storm/blob/2f08fb3/src/Handler.ts#L84)

___

### getApplication

▸ **getApplication**(): `TApplication`

#### Returns

`TApplication`

#### Defined in

[src/Handler.ts:76](https://github.com/breautek/storm/blob/2f08fb3/src/Handler.ts#L76)

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

[src/Handler.ts:176](https://github.com/breautek/storm/blob/2f08fb3/src/Handler.ts#L176)

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

[src/Handler.ts:163](https://github.com/breautek/storm/blob/2f08fb3/src/Handler.ts#L163)
