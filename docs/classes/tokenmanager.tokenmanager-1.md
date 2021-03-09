[@breautek/storm](../README.md) / [TokenManager](../modules/tokenmanager.md) / TokenManager

# Class: TokenManager<TAuthToken\>

[TokenManager](../modules/tokenmanager.md).TokenManager

## Type parameters

Name | Type | Default |
------ | ------ | ------ |
`TAuthToken` | [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md) | [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md) |

## Hierarchy

* **TokenManager**

## Table of contents

### Constructors

- [constructor](tokenmanager.tokenmanager-1.md#constructor)

### Methods

- [decode](tokenmanager.tokenmanager-1.md#decode)
- [sign](tokenmanager.tokenmanager-1.md#sign)
- [verify](tokenmanager.tokenmanager-1.md#verify)

## Constructors

### constructor

\+ **new TokenManager**<TAuthToken\>(`secret`: *string*): [*TokenManager*](tokenmanager.tokenmanager-1.md)<TAuthToken\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`TAuthToken` | [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md) | [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md) |

#### Parameters:

Name | Type |
------ | ------ |
`secret` | *string* |

**Returns:** [*TokenManager*](tokenmanager.tokenmanager-1.md)<TAuthToken\>

Defined in: [src/TokenManager.ts:27](https://github.com/breautek/storm/blob/40c8f69/src/TokenManager.ts#L27)

## Methods

### decode

▸ **decode**(`token`: [*Token*](token.token-1.md)): *Promise*<TAuthToken\>

#### Parameters:

Name | Type |
------ | ------ |
`token` | [*Token*](token.token-1.md) |

**Returns:** *Promise*<TAuthToken\>

Defined in: [src/TokenManager.ts:78](https://github.com/breautek/storm/blob/40c8f69/src/TokenManager.ts#L78)

___

### sign

▸ **sign**(`payload`: { [key: string]: *any*;  }, `expiresIn`: *string* \| *number*): *Promise*<[*Token*](token.token-1.md)\>

#### Parameters:

Name | Type |
------ | ------ |
`payload` | { [key: string]: *any*;  } |
`expiresIn` | *string* \| *number* |

**Returns:** *Promise*<[*Token*](token.token-1.md)\>

Defined in: [src/TokenManager.ts:33](https://github.com/breautek/storm/blob/40c8f69/src/TokenManager.ts#L33)

___

### verify

▸ **verify**(`token`: [*Token*](token.token-1.md), `options?`: [*IJWTVerifyOptions*](../interfaces/ijwtverifyoptions.ijwtverifyoptions-1.md)): *Promise*<TAuthToken\>

#### Parameters:

Name | Type |
------ | ------ |
`token` | [*Token*](token.token-1.md) |
`options?` | [*IJWTVerifyOptions*](../interfaces/ijwtverifyoptions.ijwtverifyoptions-1.md) |

**Returns:** *Promise*<TAuthToken\>

Defined in: [src/TokenManager.ts:56](https://github.com/breautek/storm/blob/40c8f69/src/TokenManager.ts#L56)
