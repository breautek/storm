[@breautek/storm](../README.md) / [TokenManager](../modules/TokenManager.md) / TokenManager

# Class: TokenManager<TAuthToken\>

[TokenManager](../modules/TokenManager.md).TokenManager

## Type parameters

| Name | Type |
| :------ | :------ |
| `TAuthToken` | extends [`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md)[`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md) |

## Table of contents

### Constructors

- [constructor](TokenManager.TokenManager-1.md#constructor)

### Methods

- [decode](TokenManager.TokenManager-1.md#decode)
- [sign](TokenManager.TokenManager-1.md#sign)
- [verify](TokenManager.TokenManager-1.md#verify)

## Constructors

### constructor

• **new TokenManager**<`TAuthToken`\>(`secret`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAuthToken` | extends [`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md)[`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `secret` | `string` |

#### Defined in

[src/TokenManager.ts:29](https://github.com/breautek/storm/blob/3449719/src/TokenManager.ts#L29)

## Methods

### decode

▸ **decode**(`token`): `Promise`<`TAuthToken`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`Token`](Token.Token-1.md) |

#### Returns

`Promise`<`TAuthToken`\>

#### Defined in

[src/TokenManager.ts:78](https://github.com/breautek/storm/blob/3449719/src/TokenManager.ts#L78)

___

### sign

▸ **sign**(`payload`, `expiresIn`): `Promise`<[`Token`](Token.Token-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Object` |
| `expiresIn` | `string` \| `number` |

#### Returns

`Promise`<[`Token`](Token.Token-1.md)\>

#### Defined in

[src/TokenManager.ts:33](https://github.com/breautek/storm/blob/3449719/src/TokenManager.ts#L33)

___

### verify

▸ **verify**(`token`, `options?`): `Promise`<`TAuthToken`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`Token`](Token.Token-1.md) |
| `options?` | [`IJWTVerifyOptions`](../interfaces/IJWTVerifyOptions.IJWTVerifyOptions-1.md) |

#### Returns

`Promise`<`TAuthToken`\>

#### Defined in

[src/TokenManager.ts:56](https://github.com/breautek/storm/blob/3449719/src/TokenManager.ts#L56)
