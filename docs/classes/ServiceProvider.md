[@breautek/storm](../README.md) / ServiceProvider

# Class: ServiceProvider

## Table of contents

### Constructors

- [constructor](ServiceProvider.md#constructor)

### Methods

- [\_createURL](ServiceProvider.md#_createurl)
- [\_getApp](ServiceProvider.md#_getapp)
- [\_getBase](ServiceProvider.md#_getbase)
- [\_getDomain](ServiceProvider.md#_getdomain)
- [\_getPort](ServiceProvider.md#_getport)
- [\_getProtocol](ServiceProvider.md#_getprotocol)
- [delete](ServiceProvider.md#delete)
- [get](ServiceProvider.md#get)
- [getApp](ServiceProvider.md#getapp)
- [getVersion](ServiceProvider.md#getversion)
- [post](ServiceProvider.md#post)
- [put](ServiceProvider.md#put)
- [request](ServiceProvider.md#request)
- [urlSuffix](ServiceProvider.md#urlsuffix)

## Constructors

### constructor

• **new ServiceProvider**(`app`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`Application`](Application.md)<[`IConfig`](../interfaces/IConfig.md), [`IAuthTokenData`](../interfaces/IAuthTokenData.md), `any`, `any`\> |

#### Defined in

[src/ServiceProvider.ts:29](https://github.com/breautek/storm/blob/0875c73/src/ServiceProvider.ts#L29)

## Methods

### \_createURL

▸ `Protected` **_createURL**(`url`, `queryParams?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `queryParams?` | `Record`<`any`, `any`\> |

#### Returns

`string`

#### Defined in

[src/ServiceProvider.ts:64](https://github.com/breautek/storm/blob/0875c73/src/ServiceProvider.ts#L64)

___

### \_getApp

▸ `Protected` **_getApp**(): [`Application`](Application.md)<[`IConfig`](../interfaces/IConfig.md), [`IAuthTokenData`](../interfaces/IAuthTokenData.md), `any`, `any`\>

#### Returns

[`Application`](Application.md)<[`IConfig`](../interfaces/IConfig.md), [`IAuthTokenData`](../interfaces/IAuthTokenData.md), `any`, `any`\>

#### Defined in

[src/ServiceProvider.ts:36](https://github.com/breautek/storm/blob/0875c73/src/ServiceProvider.ts#L36)

___

### \_getBase

▸ `Protected` `Abstract` **_getBase**(): `string`

#### Returns

`string`

#### Defined in

[src/ServiceProvider.ts:33](https://github.com/breautek/storm/blob/0875c73/src/ServiceProvider.ts#L33)

___

### \_getDomain

▸ `Protected` **_getDomain**(): `string`

#### Returns

`string`

#### Defined in

[src/ServiceProvider.ts:44](https://github.com/breautek/storm/blob/0875c73/src/ServiceProvider.ts#L44)

___

### \_getPort

▸ `Protected` `Abstract` **_getPort**(): `number`

#### Returns

`number`

#### Defined in

[src/ServiceProvider.ts:34](https://github.com/breautek/storm/blob/0875c73/src/ServiceProvider.ts#L34)

___

### \_getProtocol

▸ `Protected` **_getProtocol**(): `string`

#### Returns

`string`

#### Defined in

[src/ServiceProvider.ts:56](https://github.com/breautek/storm/blob/0875c73/src/ServiceProvider.ts#L56)

___

### delete

▸ **delete**(`url`, `accessToken`, `data?`, `headers?`, `additionalOptions?`): `Promise`<[`ServiceResponse`](ServiceResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `accessToken` | `string` |
| `data?` | `any` |
| `headers?` | [`IServiceHeaders`](../interfaces/IServiceHeaders.md) |
| `additionalOptions?` | `any` |

#### Returns

`Promise`<[`ServiceResponse`](ServiceResponse.md)\>

#### Defined in

[src/ServiceProvider.ts:157](https://github.com/breautek/storm/blob/0875c73/src/ServiceProvider.ts#L157)

___

### get

▸ **get**(`url`, `accessToken`, `data?`, `headers?`, `additionalOptions?`): `Promise`<[`ServiceResponse`](ServiceResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `accessToken` | `string` |
| `data?` | `any` |
| `headers?` | [`IServiceHeaders`](../interfaces/IServiceHeaders.md) |
| `additionalOptions?` | `any` |

#### Returns

`Promise`<[`ServiceResponse`](ServiceResponse.md)\>

#### Defined in

[src/ServiceProvider.ts:142](https://github.com/breautek/storm/blob/0875c73/src/ServiceProvider.ts#L142)

___

### getApp

▸ **getApp**(): [`Application`](Application.md)<[`IConfig`](../interfaces/IConfig.md), [`IAuthTokenData`](../interfaces/IAuthTokenData.md), `any`, `any`\>

#### Returns

[`Application`](Application.md)<[`IConfig`](../interfaces/IConfig.md), [`IAuthTokenData`](../interfaces/IAuthTokenData.md), `any`, `any`\>

#### Defined in

[src/ServiceProvider.ts:40](https://github.com/breautek/storm/blob/0875c73/src/ServiceProvider.ts#L40)

___

### getVersion

▸ **getVersion**(): `string`

#### Returns

`string`

#### Defined in

[src/ServiceProvider.ts:60](https://github.com/breautek/storm/blob/0875c73/src/ServiceProvider.ts#L60)

___

### post

▸ **post**(`url`, `accessToken`, `data?`, `headers?`, `additionalOptions?`): `Promise`<[`ServiceResponse`](ServiceResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `accessToken` | `string` |
| `data?` | `any` |
| `headers?` | [`IServiceHeaders`](../interfaces/IServiceHeaders.md) |
| `additionalOptions?` | `any` |

#### Returns

`Promise`<[`ServiceResponse`](ServiceResponse.md)\>

#### Defined in

[src/ServiceProvider.ts:147](https://github.com/breautek/storm/blob/0875c73/src/ServiceProvider.ts#L147)

___

### put

▸ **put**(`url`, `accessToken`, `data?`, `headers?`, `additionalOptions?`): `Promise`<[`ServiceResponse`](ServiceResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `accessToken` | `string` |
| `data?` | `any` |
| `headers?` | [`IServiceHeaders`](../interfaces/IServiceHeaders.md) |
| `additionalOptions?` | `any` |

#### Returns

`Promise`<[`ServiceResponse`](ServiceResponse.md)\>

#### Defined in

[src/ServiceProvider.ts:152](https://github.com/breautek/storm/blob/0875c73/src/ServiceProvider.ts#L152)

___

### request

▸ **request**(`method`, `url`, `accessToken`, `data`, `headers?`, `additionalOptions?`): `Promise`<[`ServiceResponse`](ServiceResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | [`HTTPMethod`](../enums/HTTPMethod.md) |
| `url` | `string` |
| `accessToken` | `string` |
| `data` | `any` |
| `headers?` | [`IServiceHeaders`](../interfaces/IServiceHeaders.md) |
| `additionalOptions?` | `any` |

#### Returns

`Promise`<[`ServiceResponse`](ServiceResponse.md)\>

#### Defined in

[src/ServiceProvider.ts:82](https://github.com/breautek/storm/blob/0875c73/src/ServiceProvider.ts#L82)

___

### urlSuffix

▸ **urlSuffix**(): `string`

#### Returns

`string`

#### Defined in

[src/ServiceProvider.ts:52](https://github.com/breautek/storm/blob/0875c73/src/ServiceProvider.ts#L52)
