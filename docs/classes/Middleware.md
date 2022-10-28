[@breautek/storm](../README.md) / Middleware

# Class: Middleware

## Hierarchy

- **`Middleware`**

  ↳ [`CORSMiddleware`](CORSMiddleware.md)

## Table of contents

### Constructors

- [constructor](Middleware.md#constructor)

### Methods

- [\_execute](Middleware.md#_execute)
- [execute](Middleware.md#execute)

## Constructors

### constructor

• **new Middleware**()

#### Defined in

[src/Middleware.ts:23](https://github.com/breautek/storm/blob/dc7102f/src/Middleware.ts#L23)

## Methods

### \_execute

▸ `Protected` `Abstract` **_execute**(`request`, `response`): `Promise`<[`IRequestResponse`](../interfaces/IRequestResponse.md)<`any`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Request`](Request.md)<`any`, [`IAuthTokenData`](../interfaces/IAuthTokenData.md)\> |
| `response` | [`Response`](Response.md)<`any`, `string` \| `Error` \| [`IErrorResponse`](../interfaces/IErrorResponse.md)\> |

#### Returns

`Promise`<[`IRequestResponse`](../interfaces/IRequestResponse.md)<`any`, `any`\>\>

#### Defined in

[src/Middleware.ts:25](https://github.com/breautek/storm/blob/dc7102f/src/Middleware.ts#L25)

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

#### Defined in

[src/Middleware.ts:27](https://github.com/breautek/storm/blob/dc7102f/src/Middleware.ts#L27)
