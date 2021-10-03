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

[src/BackendAuthenticationMiddleware.ts:35](https://github.com/breautek/storm/blob/477d756/src/BackendAuthenticationMiddleware.ts#L35)

## Methods

### execute

▸ **execute**(`request`, `options?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | [`Request`](Request.Request-1.md)<`any`, [`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md)\> |  |
| `options?` | `any` | Arbituary object containing any relevant information used for authentication. |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/BackendAuthenticationMiddleware.ts:46](https://github.com/breautek/storm/blob/477d756/src/BackendAuthenticationMiddleware.ts#L46)
