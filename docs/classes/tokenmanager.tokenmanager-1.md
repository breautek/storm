[@breautek/storm](../README.md) / [TokenManager](../modules/tokenmanager.md) / TokenManager

# Class: TokenManager<TAuthToken\>

[TokenManager](../modules/tokenmanager.md).TokenManager

## Type parameters

| Name | Type |
| :------ | :------ |
| `TAuthToken` | extends [`IAuthTokenData`](../interfaces/iauthtokendata.iauthtokendata-1.md)[`IAuthTokenData`](../interfaces/iauthtokendata.iauthtokendata-1.md) |

## Table of contents

### Constructors

- [constructor](tokenmanager.tokenmanager-1.md#constructor)

### Methods

- [decode](tokenmanager.tokenmanager-1.md#decode)
- [sign](tokenmanager.tokenmanager-1.md#sign)
- [verify](tokenmanager.tokenmanager-1.md#verify)

## Constructors

### constructor

• **new TokenManager**<`TAuthToken`\>(`secret`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAuthToken` | extends [`IAuthTokenData`](../interfaces/iauthtokendata.iauthtokendata-1.md)[`IAuthTokenData`](../interfaces/iauthtokendata.iauthtokendata-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `secret` | `string` |

#### Defined in

[src/TokenManager.ts:27](https://github.com/breautek/storm/blob/fff2ea4/src/TokenManager.ts#L27)

## Methods

### decode

▸ **decode**(`token`): `Promise`<`TAuthToken`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`Token`](token.token-1.md) |

#### Returns

`Promise`<`TAuthToken`\>

#### Defined in

[src/TokenManager.ts:78](https://github.com/breautek/storm/blob/fff2ea4/src/TokenManager.ts#L78)

___

### sign

▸ **sign**(`payload`, `expiresIn`): `Promise`<[`Token`](token.token-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Object` |
| `expiresIn` | `string` \| `number` |

#### Returns

`Promise`<[`Token`](token.token-1.md)\>

#### Defined in

[src/TokenManager.ts:33](https://github.com/breautek/storm/blob/fff2ea4/src/TokenManager.ts#L33)

___

### verify

▸ **verify**(`token`, `options?`): `Promise`<`TAuthToken`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`Token`](token.token-1.md) |
| `options?` | [`IJWTVerifyOptions`](../interfaces/ijwtverifyoptions.ijwtverifyoptions-1.md) |

#### Returns

`Promise`<`TAuthToken`\>

#### Defined in

[src/TokenManager.ts:56](https://github.com/breautek/storm/blob/fff2ea4/src/TokenManager.ts#L56)
