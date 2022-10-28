[@breautek/storm](../README.md) / CORSMiddleware

# Class: CORSMiddleware

CORSMiddleware is used to enable CORS on APIs. 
It will automatically add the necessary headers necessary to
communicate with CORS enabled clients.

## Hierarchy

- [`Middleware`](Middleware.md)

  ↳ **`CORSMiddleware`**

## Table of contents

### Constructors

- [constructor](CORSMiddleware.md#constructor)

### Methods

- [\_execute](CORSMiddleware.md#_execute)
- [execute](CORSMiddleware.md#execute)
- [getDefaultAllowedHeaders](CORSMiddleware.md#getdefaultallowedheaders)
- [getDefaultAllowedMethods](CORSMiddleware.md#getdefaultallowedmethods)
- [getDefaultAllowedOrigin](CORSMiddleware.md#getdefaultallowedorigin)

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

[Middleware](Middleware.md).[constructor](Middleware.md#constructor)

#### Defined in

[src/CORSMiddleware.ts:39](https://github.com/breautek/storm/blob/306a47f/src/CORSMiddleware.ts#L39)

## Methods

### \_execute

▸ `Protected` **_execute**(`request`, `response`): `Promise`<[`IRequestResponse`](../interfaces/IRequestResponse.md)<`any`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](Request.md)<`any`, [`IAuthTokenData`](../interfaces/IAuthTokenData.md)\> |
| `response` | [`Response`](Response.md)<`any`, `string` \| `Error` \| [`IErrorResponse`](../interfaces/IErrorResponse.md)\> |

#### Returns

`Promise`<[`IRequestResponse`](../interfaces/IRequestResponse.md)<`any`, `any`\>\>

#### Overrides

[Middleware](Middleware.md).[_execute](Middleware.md#_execute)

#### Defined in

[src/CORSMiddleware.ts:75](https://github.com/breautek/storm/blob/306a47f/src/CORSMiddleware.ts#L75)

___

### execute

▸ **execute**(`request`, `response`): `Promise`<[`IRequestResponse`](../interfaces/IRequestResponse.md)<`any`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](Request.md)<`any`, [`IAuthTokenData`](../interfaces/IAuthTokenData.md)\> |
| `response` | [`Response`](Response.md)<`any`, `string` \| `Error` \| [`IErrorResponse`](../interfaces/IErrorResponse.md)\> |

#### Returns

`Promise`<[`IRequestResponse`](../interfaces/IRequestResponse.md)<`any`, `any`\>\>

#### Inherited from

[Middleware](Middleware.md).[execute](Middleware.md#execute)

#### Defined in

[src/Middleware.ts:27](https://github.com/breautek/storm/blob/306a47f/src/Middleware.ts#L27)

___

### getDefaultAllowedHeaders

▸ **getDefaultAllowedHeaders**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/CORSMiddleware.ts:54](https://github.com/breautek/storm/blob/306a47f/src/CORSMiddleware.ts#L54)

___

### getDefaultAllowedMethods

▸ **getDefaultAllowedMethods**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/CORSMiddleware.ts:64](https://github.com/breautek/storm/blob/306a47f/src/CORSMiddleware.ts#L64)

___

### getDefaultAllowedOrigin

▸ **getDefaultAllowedOrigin**(): `string`

Sets the allowed origin. By default,

#### Returns

`string`

#### Defined in

[src/CORSMiddleware.ts:50](https://github.com/breautek/storm/blob/306a47f/src/CORSMiddleware.ts#L50)
