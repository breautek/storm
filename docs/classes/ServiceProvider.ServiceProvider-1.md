[@breautek/storm](../README.md) / [ServiceProvider](../modules/ServiceProvider.md) / ServiceProvider

# Class: ServiceProvider

[ServiceProvider](../modules/ServiceProvider.md).ServiceProvider

## Table of contents

### Constructors

- [constructor](ServiceProvider.ServiceProvider-1.md#constructor)

### Methods

- [\_createURL](ServiceProvider.ServiceProvider-1.md#_createurl)
- [\_getApp](ServiceProvider.ServiceProvider-1.md#_getapp)
- [\_getBase](ServiceProvider.ServiceProvider-1.md#_getbase)
- [\_getDomain](ServiceProvider.ServiceProvider-1.md#_getdomain)
- [\_getPort](ServiceProvider.ServiceProvider-1.md#_getport)
- [\_getProtocol](ServiceProvider.ServiceProvider-1.md#_getprotocol)
- [delete](ServiceProvider.ServiceProvider-1.md#delete)
- [get](ServiceProvider.ServiceProvider-1.md#get)
- [getApp](ServiceProvider.ServiceProvider-1.md#getapp)
- [getVersion](ServiceProvider.ServiceProvider-1.md#getversion)
- [post](ServiceProvider.ServiceProvider-1.md#post)
- [put](ServiceProvider.ServiceProvider-1.md#put)
- [request](ServiceProvider.ServiceProvider-1.md#request)
- [urlSuffix](ServiceProvider.ServiceProvider-1.md#urlsuffix)

## Constructors

### constructor

• **new ServiceProvider**(`app`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`Application`](Application.Application-1.md)<[`IConfig`](../interfaces/IConfig.IConfig-1.md), [`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md), `any`, `any`\> |

#### Defined in

[src/ServiceProvider.ts:30](https://github.com/breautek/storm/blob/3845ece/src/ServiceProvider.ts#L30)

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

[src/ServiceProvider.ts:65](https://github.com/breautek/storm/blob/3845ece/src/ServiceProvider.ts#L65)

___

### \_getApp

▸ `Protected` **_getApp**(): [`Application`](Application.Application-1.md)<[`IConfig`](../interfaces/IConfig.IConfig-1.md), [`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md), `any`, `any`\>

#### Returns

[`Application`](Application.Application-1.md)<[`IConfig`](../interfaces/IConfig.IConfig-1.md), [`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md), `any`, `any`\>

#### Defined in

[src/ServiceProvider.ts:37](https://github.com/breautek/storm/blob/3845ece/src/ServiceProvider.ts#L37)

___

### \_getBase

▸ `Protected` `Abstract` **_getBase**(): `string`

#### Returns

`string`

#### Defined in

[src/ServiceProvider.ts:34](https://github.com/breautek/storm/blob/3845ece/src/ServiceProvider.ts#L34)

___

### \_getDomain

▸ `Protected` **_getDomain**(): `string`

#### Returns

`string`

#### Defined in

[src/ServiceProvider.ts:45](https://github.com/breautek/storm/blob/3845ece/src/ServiceProvider.ts#L45)

___

### \_getPort

▸ `Protected` `Abstract` **_getPort**(): `number`

#### Returns

`number`

#### Defined in

[src/ServiceProvider.ts:35](https://github.com/breautek/storm/blob/3845ece/src/ServiceProvider.ts#L35)

___

### \_getProtocol

▸ `Protected` **_getProtocol**(): `string`

#### Returns

`string`

#### Defined in

[src/ServiceProvider.ts:57](https://github.com/breautek/storm/blob/3845ece/src/ServiceProvider.ts#L57)

___

### delete

▸ **delete**(`url`, `accessToken`, `data?`, `headers?`, `additionalOptions?`): `Promise`<[`ServiceResponse`](ServiceResponse.ServiceResponse-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `accessToken` | `string` |
| `data?` | `any` |
| `headers?` | [`IServiceHeaders`](../interfaces/IServiceHeaders.IServiceHeaders-1.md) |
| `additionalOptions?` | `any` |

#### Returns

`Promise`<[`ServiceResponse`](ServiceResponse.ServiceResponse-1.md)\>

#### Defined in

[src/ServiceProvider.ts:158](https://github.com/breautek/storm/blob/3845ece/src/ServiceProvider.ts#L158)

___

### get

▸ **get**(`url`, `accessToken`, `data?`, `headers?`, `additionalOptions?`): `Promise`<[`ServiceResponse`](ServiceResponse.ServiceResponse-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `accessToken` | `string` |
| `data?` | `any` |
| `headers?` | [`IServiceHeaders`](../interfaces/IServiceHeaders.IServiceHeaders-1.md) |
| `additionalOptions?` | `any` |

#### Returns

`Promise`<[`ServiceResponse`](ServiceResponse.ServiceResponse-1.md)\>

#### Defined in

[src/ServiceProvider.ts:143](https://github.com/breautek/storm/blob/3845ece/src/ServiceProvider.ts#L143)

___

### getApp

▸ **getApp**(): [`Application`](Application.Application-1.md)<[`IConfig`](../interfaces/IConfig.IConfig-1.md), [`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md), `any`, `any`\>

#### Returns

[`Application`](Application.Application-1.md)<[`IConfig`](../interfaces/IConfig.IConfig-1.md), [`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md), `any`, `any`\>

#### Defined in

[src/ServiceProvider.ts:41](https://github.com/breautek/storm/blob/3845ece/src/ServiceProvider.ts#L41)

___

### getVersion

▸ **getVersion**(): `string`

#### Returns

`string`

#### Defined in

[src/ServiceProvider.ts:61](https://github.com/breautek/storm/blob/3845ece/src/ServiceProvider.ts#L61)

___

### post

▸ **post**(`url`, `accessToken`, `data?`, `headers?`, `additionalOptions?`): `Promise`<[`ServiceResponse`](ServiceResponse.ServiceResponse-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `accessToken` | `string` |
| `data?` | `any` |
| `headers?` | [`IServiceHeaders`](../interfaces/IServiceHeaders.IServiceHeaders-1.md) |
| `additionalOptions?` | `any` |

#### Returns

`Promise`<[`ServiceResponse`](ServiceResponse.ServiceResponse-1.md)\>

#### Defined in

[src/ServiceProvider.ts:148](https://github.com/breautek/storm/blob/3845ece/src/ServiceProvider.ts#L148)

___

### put

▸ **put**(`url`, `accessToken`, `data?`, `headers?`, `additionalOptions?`): `Promise`<[`ServiceResponse`](ServiceResponse.ServiceResponse-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `accessToken` | `string` |
| `data?` | `any` |
| `headers?` | [`IServiceHeaders`](../interfaces/IServiceHeaders.IServiceHeaders-1.md) |
| `additionalOptions?` | `any` |

#### Returns

`Promise`<[`ServiceResponse`](ServiceResponse.ServiceResponse-1.md)\>

#### Defined in

[src/ServiceProvider.ts:153](https://github.com/breautek/storm/blob/3845ece/src/ServiceProvider.ts#L153)

___

### request

▸ **request**(`method`, `url`, `accessToken`, `data`, `headers?`, `additionalOptions?`): `Promise`<[`ServiceResponse`](ServiceResponse.ServiceResponse-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | [`HTTPMethod`](../enums/HTTPMethod.HTTPMethod-1.md) |
| `url` | `string` |
| `accessToken` | `string` |
| `data` | `any` |
| `headers?` | [`IServiceHeaders`](../interfaces/IServiceHeaders.IServiceHeaders-1.md) |
| `additionalOptions?` | `any` |

#### Returns

`Promise`<[`ServiceResponse`](ServiceResponse.ServiceResponse-1.md)\>

#### Defined in

[src/ServiceProvider.ts:83](https://github.com/breautek/storm/blob/3845ece/src/ServiceProvider.ts#L83)

___

### urlSuffix

▸ **urlSuffix**(): `string`

#### Returns

`string`

#### Defined in

[src/ServiceProvider.ts:53](https://github.com/breautek/storm/blob/3845ece/src/ServiceProvider.ts#L53)
