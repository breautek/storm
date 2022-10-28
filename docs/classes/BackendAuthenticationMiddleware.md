[@breautek/storm](../README.md) / BackendAuthenticationMiddleware

# Class: BackendAuthenticationMiddleware

A base authentication strategy that handles 90% of the authentication process.
This will verify that the token hasn't been manipulated or tainted.
The authenticate API must be implemented by subclasses to further validate the token data 
for their specific use cases.

## Table of contents

### Constructors

- [constructor](BackendAuthenticationMiddleware.md#constructor)

### Methods

- [execute](BackendAuthenticationMiddleware.md#execute)

## Constructors

### constructor

• **new BackendAuthenticationMiddleware**()

#### Defined in

[src/BackendAuthenticationMiddleware.ts:35](https://github.com/breautek/storm/blob/dc7102f/src/BackendAuthenticationMiddleware.ts#L35)

## Methods

### execute

▸ **execute**(`request`, `options?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | [`Request`](Request.md)<`any`, [`IAuthTokenData`](../interfaces/IAuthTokenData.md)\> |  |
| `options?` | `any` | Arbituary object containing any relevant information used for authentication. |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/BackendAuthenticationMiddleware.ts:46](https://github.com/breautek/storm/blob/dc7102f/src/BackendAuthenticationMiddleware.ts#L46)
