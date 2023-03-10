[@breautek/storm](../README.md) / TokenManager

# Class: TokenManager<TAuthToken\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TAuthToken` | extends [`IAuthTokenData`](../interfaces/IAuthTokenData.md) = [`IAuthTokenData`](../interfaces/IAuthTokenData.md) |

## Table of contents

### Constructors

- [constructor](TokenManager.md#constructor)

### Methods

- [decode](TokenManager.md#decode)
- [sign](TokenManager.md#sign)
- [verify](TokenManager.md#verify)

## Constructors

### constructor

• **new TokenManager**<`TAuthToken`\>(`secret`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAuthToken` | extends [`IAuthTokenData`](../interfaces/IAuthTokenData.md) = [`IAuthTokenData`](../interfaces/IAuthTokenData.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `secret` | `string` |

#### Defined in

[src/TokenManager.ts:29](https://github.com/breautek/storm/blob/eca48f5/src/TokenManager.ts#L29)

## Methods

### decode

▸ **decode**(`token`): `Promise`<`TAuthToken`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`Token`](Token.md) |

#### Returns

`Promise`<`TAuthToken`\>

#### Defined in

[src/TokenManager.ts:78](https://github.com/breautek/storm/blob/eca48f5/src/TokenManager.ts#L78)

___

### sign

▸ **sign**(`payload`, `expiresIn`): `Promise`<[`Token`](Token.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Object` |
| `expiresIn` | `string` \| `number` |

#### Returns

`Promise`<[`Token`](Token.md)\>

#### Defined in

[src/TokenManager.ts:33](https://github.com/breautek/storm/blob/eca48f5/src/TokenManager.ts#L33)

___

### verify

▸ **verify**(`token`, `options?`): `Promise`<`TAuthToken`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`Token`](Token.md) |
| `options?` | [`IJWTVerifyOptions`](../interfaces/IJWTVerifyOptions.md) |

#### Returns

`Promise`<`TAuthToken`\>

#### Defined in

[src/TokenManager.ts:56](https://github.com/breautek/storm/blob/eca48f5/src/TokenManager.ts#L56)
