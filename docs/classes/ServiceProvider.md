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

[src/ServiceProvider.ts:30](https://github.com/breautek/storm/blob/186ee78/src/ServiceProvider.ts#L30)

## Methods

### \_createURL

▸ `Protected` **_createURL**(`url`, `queryParams?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `queryParams?` | `IDictionary`<`any`\> |

#### Returns

`string`

#### Defined in

[src/ServiceProvider.ts:65](https://github.com/breautek/storm/blob/186ee78/src/ServiceProvider.ts#L65)

___

### \_getApp

▸ `Protected` **_getApp**(): [`Application`](Application.md)<[`IConfig`](../interfaces/IConfig.md), [`IAuthTokenData`](../interfaces/IAuthTokenData.md), `any`, `any`\>

#### Returns

[`Application`](Application.md)<[`IConfig`](../interfaces/IConfig.md), [`IAuthTokenData`](../interfaces/IAuthTokenData.md), `any`, `any`\>

#### Defined in

[src/ServiceProvider.ts:37](https://github.com/breautek/storm/blob/186ee78/src/ServiceProvider.ts#L37)

___

### \_getBase

▸ `Protected` `Abstract` **_getBase**(): `string`

#### Returns

`string`

#### Defined in

[src/ServiceProvider.ts:34](https://github.com/breautek/storm/blob/186ee78/src/ServiceProvider.ts#L34)

___

### \_getDomain

▸ `Protected` **_getDomain**(): `string`

#### Returns

`string`

#### Defined in

[src/ServiceProvider.ts:45](https://github.com/breautek/storm/blob/186ee78/src/ServiceProvider.ts#L45)

___

### \_getPort

▸ `Protected` `Abstract` **_getPort**(): `number`

#### Returns

`number`

#### Defined in

[src/ServiceProvider.ts:35](https://github.com/breautek/storm/blob/186ee78/src/ServiceProvider.ts#L35)

___

### \_getProtocol

▸ `Protected` **_getProtocol**(): `string`

#### Returns

`string`

#### Defined in

[src/ServiceProvider.ts:57](https://github.com/breautek/storm/blob/186ee78/src/ServiceProvider.ts#L57)

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

[src/ServiceProvider.ts:158](https://github.com/breautek/storm/blob/186ee78/src/ServiceProvider.ts#L158)

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

[src/ServiceProvider.ts:143](https://github.com/breautek/storm/blob/186ee78/src/ServiceProvider.ts#L143)

___

### getApp

▸ **getApp**(): [`Application`](Application.md)<[`IConfig`](../interfaces/IConfig.md), [`IAuthTokenData`](../interfaces/IAuthTokenData.md), `any`, `any`\>

#### Returns

[`Application`](Application.md)<[`IConfig`](../interfaces/IConfig.md), [`IAuthTokenData`](../interfaces/IAuthTokenData.md), `any`, `any`\>

#### Defined in

[src/ServiceProvider.ts:41](https://github.com/breautek/storm/blob/186ee78/src/ServiceProvider.ts#L41)

___

### getVersion

▸ **getVersion**(): `string`

#### Returns

`string`

#### Defined in

[src/ServiceProvider.ts:61](https://github.com/breautek/storm/blob/186ee78/src/ServiceProvider.ts#L61)

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

[src/ServiceProvider.ts:148](https://github.com/breautek/storm/blob/186ee78/src/ServiceProvider.ts#L148)

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

[src/ServiceProvider.ts:153](https://github.com/breautek/storm/blob/186ee78/src/ServiceProvider.ts#L153)

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

[src/ServiceProvider.ts:83](https://github.com/breautek/storm/blob/186ee78/src/ServiceProvider.ts#L83)

___

### urlSuffix

▸ **urlSuffix**(): `string`

#### Returns

`string`

#### Defined in

[src/ServiceProvider.ts:53](https://github.com/breautek/storm/blob/186ee78/src/ServiceProvider.ts#L53)
