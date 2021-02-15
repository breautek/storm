[@breautek/storm](../README.md) / [ServiceProvider](../modules/serviceprovider.md) / ServiceProvider

# Class: ServiceProvider

[ServiceProvider](../modules/serviceprovider.md).ServiceProvider

## Hierarchy

* **ServiceProvider**

## Table of contents

### Constructors

- [constructor](serviceprovider.serviceprovider-1.md#constructor)

### Methods

- [\_createURL](serviceprovider.serviceprovider-1.md#_createurl)
- [\_getApp](serviceprovider.serviceprovider-1.md#_getapp)
- [\_getBase](serviceprovider.serviceprovider-1.md#_getbase)
- [\_getDomain](serviceprovider.serviceprovider-1.md#_getdomain)
- [\_getPort](serviceprovider.serviceprovider-1.md#_getport)
- [\_getProtocol](serviceprovider.serviceprovider-1.md#_getprotocol)
- [delete](serviceprovider.serviceprovider-1.md#delete)
- [get](serviceprovider.serviceprovider-1.md#get)
- [getApp](serviceprovider.serviceprovider-1.md#getapp)
- [getVersion](serviceprovider.serviceprovider-1.md#getversion)
- [post](serviceprovider.serviceprovider-1.md#post)
- [put](serviceprovider.serviceprovider-1.md#put)
- [request](serviceprovider.serviceprovider-1.md#request)
- [urlSuffix](serviceprovider.serviceprovider-1.md#urlsuffix)

## Constructors

### constructor

\+ **new ServiceProvider**(`app`: [*Application*](application.application-1.md)<[*IConfig*](../interfaces/iconfig.iconfig-1.md), [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md), *any*, *any*\>): [*ServiceProvider*](serviceprovider.serviceprovider-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`app` | [*Application*](application.application-1.md)<[*IConfig*](../interfaces/iconfig.iconfig-1.md), [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md), *any*, *any*\> |

**Returns:** [*ServiceProvider*](serviceprovider.serviceprovider-1.md)

Defined in: [src/ServiceProvider.ts:28](https://github.com/breautek/storm/blob/d383af9/src/ServiceProvider.ts#L28)

## Methods

### \_createURL

▸ `Protected`**_createURL**(`url`: *string*, `queryParams?`: *IDictionary*<*any*\>): *string*

#### Parameters:

Name | Type |
------ | ------ |
`url` | *string* |
`queryParams?` | *IDictionary*<*any*\> |

**Returns:** *string*

Defined in: [src/ServiceProvider.ts:65](https://github.com/breautek/storm/blob/d383af9/src/ServiceProvider.ts#L65)

___

### \_getApp

▸ `Protected`**_getApp**(): [*Application*](application.application-1.md)<[*IConfig*](../interfaces/iconfig.iconfig-1.md), [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md), *any*, *any*\>

**Returns:** [*Application*](application.application-1.md)<[*IConfig*](../interfaces/iconfig.iconfig-1.md), [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md), *any*, *any*\>

Defined in: [src/ServiceProvider.ts:37](https://github.com/breautek/storm/blob/d383af9/src/ServiceProvider.ts#L37)

___

### \_getBase

▸ `Protected` `Abstract`**_getBase**(): *string*

**Returns:** *string*

Defined in: [src/ServiceProvider.ts:34](https://github.com/breautek/storm/blob/d383af9/src/ServiceProvider.ts#L34)

___

### \_getDomain

▸ `Protected`**_getDomain**(): *string*

**Returns:** *string*

Defined in: [src/ServiceProvider.ts:45](https://github.com/breautek/storm/blob/d383af9/src/ServiceProvider.ts#L45)

___

### \_getPort

▸ `Protected` `Abstract`**_getPort**(): *number*

**Returns:** *number*

Defined in: [src/ServiceProvider.ts:35](https://github.com/breautek/storm/blob/d383af9/src/ServiceProvider.ts#L35)

___

### \_getProtocol

▸ `Protected`**_getProtocol**(): *string*

**Returns:** *string*

Defined in: [src/ServiceProvider.ts:57](https://github.com/breautek/storm/blob/d383af9/src/ServiceProvider.ts#L57)

___

### delete

▸ **delete**(`url`: *string*, `accessToken`: *string*, `data?`: *any*, `headers?`: [*IServiceHeaders*](../interfaces/iserviceheaders.iserviceheaders-1.md), `additionalOptions?`: *any*): *Promise*<[*ServiceResponse*](serviceresponse.serviceresponse-1.md)\>

#### Parameters:

Name | Type |
------ | ------ |
`url` | *string* |
`accessToken` | *string* |
`data?` | *any* |
`headers?` | [*IServiceHeaders*](../interfaces/iserviceheaders.iserviceheaders-1.md) |
`additionalOptions?` | *any* |

**Returns:** *Promise*<[*ServiceResponse*](serviceresponse.serviceresponse-1.md)\>

Defined in: [src/ServiceProvider.ts:158](https://github.com/breautek/storm/blob/d383af9/src/ServiceProvider.ts#L158)

___

### get

▸ **get**(`url`: *string*, `accessToken`: *string*, `data?`: *any*, `headers?`: [*IServiceHeaders*](../interfaces/iserviceheaders.iserviceheaders-1.md), `additionalOptions?`: *any*): *Promise*<[*ServiceResponse*](serviceresponse.serviceresponse-1.md)\>

#### Parameters:

Name | Type |
------ | ------ |
`url` | *string* |
`accessToken` | *string* |
`data?` | *any* |
`headers?` | [*IServiceHeaders*](../interfaces/iserviceheaders.iserviceheaders-1.md) |
`additionalOptions?` | *any* |

**Returns:** *Promise*<[*ServiceResponse*](serviceresponse.serviceresponse-1.md)\>

Defined in: [src/ServiceProvider.ts:143](https://github.com/breautek/storm/blob/d383af9/src/ServiceProvider.ts#L143)

___

### getApp

▸ **getApp**(): [*Application*](application.application-1.md)<[*IConfig*](../interfaces/iconfig.iconfig-1.md), [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md), *any*, *any*\>

**Returns:** [*Application*](application.application-1.md)<[*IConfig*](../interfaces/iconfig.iconfig-1.md), [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md), *any*, *any*\>

Defined in: [src/ServiceProvider.ts:41](https://github.com/breautek/storm/blob/d383af9/src/ServiceProvider.ts#L41)

___

### getVersion

▸ **getVersion**(): *string*

**Returns:** *string*

Defined in: [src/ServiceProvider.ts:61](https://github.com/breautek/storm/blob/d383af9/src/ServiceProvider.ts#L61)

___

### post

▸ **post**(`url`: *string*, `accessToken`: *string*, `data?`: *any*, `headers?`: [*IServiceHeaders*](../interfaces/iserviceheaders.iserviceheaders-1.md), `additionalOptions?`: *any*): *Promise*<[*ServiceResponse*](serviceresponse.serviceresponse-1.md)\>

#### Parameters:

Name | Type |
------ | ------ |
`url` | *string* |
`accessToken` | *string* |
`data?` | *any* |
`headers?` | [*IServiceHeaders*](../interfaces/iserviceheaders.iserviceheaders-1.md) |
`additionalOptions?` | *any* |

**Returns:** *Promise*<[*ServiceResponse*](serviceresponse.serviceresponse-1.md)\>

Defined in: [src/ServiceProvider.ts:148](https://github.com/breautek/storm/blob/d383af9/src/ServiceProvider.ts#L148)

___

### put

▸ **put**(`url`: *string*, `accessToken`: *string*, `data?`: *any*, `headers?`: [*IServiceHeaders*](../interfaces/iserviceheaders.iserviceheaders-1.md), `additionalOptions?`: *any*): *Promise*<[*ServiceResponse*](serviceresponse.serviceresponse-1.md)\>

#### Parameters:

Name | Type |
------ | ------ |
`url` | *string* |
`accessToken` | *string* |
`data?` | *any* |
`headers?` | [*IServiceHeaders*](../interfaces/iserviceheaders.iserviceheaders-1.md) |
`additionalOptions?` | *any* |

**Returns:** *Promise*<[*ServiceResponse*](serviceresponse.serviceresponse-1.md)\>

Defined in: [src/ServiceProvider.ts:153](https://github.com/breautek/storm/blob/d383af9/src/ServiceProvider.ts#L153)

___

### request

▸ **request**(`method`: [*HTTPMethod*](../enums/httpmethod.httpmethod-1.md), `url`: *string*, `accessToken`: *string*, `data`: *any*, `headers?`: [*IServiceHeaders*](../interfaces/iserviceheaders.iserviceheaders-1.md), `additionalOptions?`: *any*): *Promise*<[*ServiceResponse*](serviceresponse.serviceresponse-1.md)\>

#### Parameters:

Name | Type |
------ | ------ |
`method` | [*HTTPMethod*](../enums/httpmethod.httpmethod-1.md) |
`url` | *string* |
`accessToken` | *string* |
`data` | *any* |
`headers?` | [*IServiceHeaders*](../interfaces/iserviceheaders.iserviceheaders-1.md) |
`additionalOptions?` | *any* |

**Returns:** *Promise*<[*ServiceResponse*](serviceresponse.serviceresponse-1.md)\>

Defined in: [src/ServiceProvider.ts:83](https://github.com/breautek/storm/blob/d383af9/src/ServiceProvider.ts#L83)

___

### urlSuffix

▸ **urlSuffix**(): *string*

**Returns:** *string*

Defined in: [src/ServiceProvider.ts:53](https://github.com/breautek/storm/blob/d383af9/src/ServiceProvider.ts#L53)
