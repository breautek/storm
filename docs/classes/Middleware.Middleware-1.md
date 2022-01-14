[@breautek/storm](../README.md) / [Middleware](../modules/Middleware.md) / Middleware

# Class: Middleware

[Middleware](../modules/Middleware.md).Middleware

## Hierarchy

- **`Middleware`**

  ↳ [`CORSMiddleware`](CORSMiddleware.CORSMiddleware-1.md)

## Table of contents

### Constructors

- [constructor](Middleware.Middleware-1.md#constructor)

### Methods

- [\_execute](Middleware.Middleware-1.md#_execute)
- [execute](Middleware.Middleware-1.md#execute)

## Constructors

### constructor

• **new Middleware**()

#### Defined in

[src/Middleware.ts:23](https://github.com/breautek/storm/blob/6ea3887/src/Middleware.ts#L23)

## Methods

### \_execute

▸ `Protected` `Abstract` **_execute**(`request`, `response`): `Promise`<[`IRequestResponse`](../interfaces/IRequestResponse.IRequestResponse-1.md)<`any`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](Request.Request-1.md)<`any`, [`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md)\> |
| `response` | [`Response`](Response.Response-1.md)<`any`, `string` \| `Error` \| [`IErrorResponse`](../interfaces/StormError.IErrorResponse.md)\> |

#### Returns

`Promise`<[`IRequestResponse`](../interfaces/IRequestResponse.IRequestResponse-1.md)<`any`, `any`\>\>

#### Defined in

[src/Middleware.ts:25](https://github.com/breautek/storm/blob/6ea3887/src/Middleware.ts#L25)

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

#### Defined in

[src/Middleware.ts:27](https://github.com/breautek/storm/blob/6ea3887/src/Middleware.ts#L27)
