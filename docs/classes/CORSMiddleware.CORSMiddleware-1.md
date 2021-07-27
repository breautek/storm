[@breautek/storm](../README.md) / [CORSMiddleware](../modules/CORSMiddleware.md) / CORSMiddleware

# Class: CORSMiddleware

[CORSMiddleware](../modules/CORSMiddleware.md).CORSMiddleware

CORSMiddleware is used to enable CORS on APIs.
It will automatically add the necessary headers necessary to
communicate with CORS enabled clients.

## Hierarchy

- [`Middleware`](Middleware.Middleware-1.md)

  ↳ **`CORSMiddleware`**

## Table of contents

### Constructors

- [constructor](CORSMiddleware.CORSMiddleware-1.md#constructor)

### Methods

- [\_execute](CORSMiddleware.CORSMiddleware-1.md#_execute)
- [execute](CORSMiddleware.CORSMiddleware-1.md#execute)
- [getDefaultAllowedHeaders](CORSMiddleware.CORSMiddleware-1.md#getdefaultallowedheaders)
- [getDefaultAllowedMethods](CORSMiddleware.CORSMiddleware-1.md#getdefaultallowedmethods)
- [getDefaultAllowedOrigin](CORSMiddleware.CORSMiddleware-1.md#getdefaultallowedorigin)

## Constructors

### constructor

• **new CORSMiddleware**(`allowedOrigin?`, `allowedHeaders?`, `allowedMethods?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `allowedOrigin?` | `string` | The allowed origin. By default it will use the request origin. |
| `allowedHeaders?` | `string`[] | Array of allowed headers. |
| `allowedMethods?` | `string`[] | Array of allowed HTTP methods. |

#### Overrides

[Middleware](Middleware.Middleware-1.md).[constructor](Middleware.Middleware-1.md#constructor)

#### Defined in

[src/CORSMiddleware.ts:39](https://github.com/breautek/storm/blob/7b25240/src/CORSMiddleware.ts#L39)

## Methods

### \_execute

▸ `Protected` **_execute**(`request`, `response`): `Promise`<[`IRequestResponse`](../interfaces/IRequestResponse.IRequestResponse-1.md)<`any`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](Request.Request-1.md)<`any`, [`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md)\> |
| `response` | [`Response`](Response.Response-1.md)<`any`, `string` \| `Error` \| [`IErrorResponse`](../interfaces/StormError.IErrorResponse.md)\> |

#### Returns

`Promise`<[`IRequestResponse`](../interfaces/IRequestResponse.IRequestResponse-1.md)<`any`, `any`\>\>

#### Overrides

[Middleware](Middleware.Middleware-1.md).[_execute](Middleware.Middleware-1.md#_execute)

#### Defined in

[src/CORSMiddleware.ts:75](https://github.com/breautek/storm/blob/7b25240/src/CORSMiddleware.ts#L75)

___

### execute

▸ **execute**(`request`, `response`): `Promise`<[`IRequestResponse`](../interfaces/IRequestResponse.IRequestResponse-1.md)<`any`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](Request.Request-1.md)<`any`, [`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md)\> |
| `response` | [`Response`](Response.Response-1.md)<`any`, `string` \| `Error` \| [`IErrorResponse`](../interfaces/StormError.IErrorResponse.md)\> |

#### Returns

`Promise`<[`IRequestResponse`](../interfaces/IRequestResponse.IRequestResponse-1.md)<`any`, `any`\>\>

#### Inherited from

[Middleware](Middleware.Middleware-1.md).[execute](Middleware.Middleware-1.md#execute)

#### Defined in

[src/Middleware.ts:27](https://github.com/breautek/storm/blob/7b25240/src/Middleware.ts#L27)

___

### getDefaultAllowedHeaders

▸ **getDefaultAllowedHeaders**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/CORSMiddleware.ts:54](https://github.com/breautek/storm/blob/7b25240/src/CORSMiddleware.ts#L54)

___

### getDefaultAllowedMethods

▸ **getDefaultAllowedMethods**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/CORSMiddleware.ts:64](https://github.com/breautek/storm/blob/7b25240/src/CORSMiddleware.ts#L64)

___

### getDefaultAllowedOrigin

▸ **getDefaultAllowedOrigin**(): `string`

Sets the allowed origin. By default,

#### Returns

`string`

#### Defined in

[src/CORSMiddleware.ts:50](https://github.com/breautek/storm/blob/7b25240/src/CORSMiddleware.ts#L50)
