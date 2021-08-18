[@breautek/storm](../README.md) / [BackendAuthenticationMiddleware](../modules/BackendAuthenticationMiddleware.md) / BackendAuthenticationMiddleware

# Class: BackendAuthenticationMiddleware

[BackendAuthenticationMiddleware](../modules/BackendAuthenticationMiddleware.md).BackendAuthenticationMiddleware

A base authentication strategy that handles 90% of the authentication process.
This will verify that the token hasn't been manipulated or tainted.
The authenticate API must be implemented by subclasses to further validate the token data
for their specific use cases.

## Table of contents

### Constructors

- [constructor](BackendAuthenticationMiddleware.BackendAuthenticationMiddleware-1.md#constructor)

### Methods

- [execute](BackendAuthenticationMiddleware.BackendAuthenticationMiddleware-1.md#execute)

## Constructors

### constructor

• **new BackendAuthenticationMiddleware**()

#### Defined in

[src/BackendAuthenticationMiddleware.ts:36](https://github.com/breautek/storm/blob/8fb5f8c/src/BackendAuthenticationMiddleware.ts#L36)

## Methods

### execute

▸ **execute**(`request`, `response`, `options?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | [`Request`](Request.Request-1.md)<`any`, [`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md)\> |  |
| `response` | [`Response`](Response.Response-1.md)<`any`, `string` \| `Error` \| [`IErrorResponse`](../interfaces/StormError.IErrorResponse.md)\> |  |
| `options?` | `any` | Arbituary object containing any relevant information used for authentication. |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/BackendAuthenticationMiddleware.ts:47](https://github.com/breautek/storm/blob/8fb5f8c/src/BackendAuthenticationMiddleware.ts#L47)
