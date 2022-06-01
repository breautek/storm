[@breautek/storm](../README.md) / Database

# Class: Database<TDatabaseConfig, TConnectionAPI\>

## Type parameters

| Name |
| :------ |
| `TDatabaseConfig` |
| `TConnectionAPI` |

## Hierarchy

- **`Database`**

  ↳ [`MySQLDatabase`](MySQLDatabase.md)

## Table of contents

### Constructors

- [constructor](Database.md#constructor)

### Methods

- [\_addNode](Database.md#_addnode)
- [\_destroy](Database.md#_destroy)
- [\_getConnection](Database.md#_getconnection)
- [\_removeNode](Database.md#_removenode)
- [addMaster](Database.md#addmaster)
- [addSlave](Database.md#addslave)
- [destroy](Database.md#destroy)
- [escape](Database.md#escape)
- [getConnection](Database.md#getconnection)
- [removeMaster](Database.md#removemaster)
- [removeSlave](Database.md#removeslave)

## Constructors

### constructor

• **new Database**<`TDatabaseConfig`, `TConnectionAPI`\>()

#### Type parameters

| Name |
| :------ |
| `TDatabaseConfig` |
| `TConnectionAPI` |

#### Defined in

[src/Database.ts:27](https://github.com/breautek/storm/blob/3ad3438/src/Database.ts#L27)

## Methods

### \_addNode

▸ `Protected` `Abstract` **_addNode**(`name`, `config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `config` | `TDatabaseConfig` |

#### Returns

`void`

#### Defined in

[src/Database.ts:82](https://github.com/breautek/storm/blob/3ad3438/src/Database.ts#L82)

___

### \_destroy

▸ `Protected` `Abstract` **_destroy**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/Database.ts:81](https://github.com/breautek/storm/blob/3ad3438/src/Database.ts#L81)

___

### \_getConnection

▸ `Protected` `Abstract` **_getConnection**(`query`, `requireWriteAccess`): `Promise`<[`DatabaseConnection`](DatabaseConnection.md)<`TConnectionAPI`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `requireWriteAccess` | `boolean` |

#### Returns

`Promise`<[`DatabaseConnection`](DatabaseConnection.md)<`TConnectionAPI`\>\>

#### Defined in

[src/Database.ts:84](https://github.com/breautek/storm/blob/3ad3438/src/Database.ts#L84)

___

### \_removeNode

▸ `Protected` `Abstract` **_removeNode**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[src/Database.ts:83](https://github.com/breautek/storm/blob/3ad3438/src/Database.ts#L83)

___

### addMaster

▸ **addMaster**(`config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `TDatabaseConfig` |

#### Returns

`void`

#### Defined in

[src/Database.ts:31](https://github.com/breautek/storm/blob/3ad3438/src/Database.ts#L31)

___

### addSlave

▸ **addSlave**(`slaveID`, `config`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `slaveID` | `string` |
| `config` | `TDatabaseConfig` |

#### Returns

`string`

#### Defined in

[src/Database.ts:45](https://github.com/breautek/storm/blob/3ad3438/src/Database.ts#L45)

___

### destroy

▸ **destroy**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/Database.ts:77](https://github.com/breautek/storm/blob/3ad3438/src/Database.ts#L77)

___

### escape

▸ `Abstract` **escape**(`query`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`string`

#### Defined in

[src/Database.ts:85](https://github.com/breautek/storm/blob/3ad3438/src/Database.ts#L85)

___

### getConnection

▸ **getConnection**(`requireWriteAccess?`, `nodeID?`): `Promise`<[`DatabaseConnection`](DatabaseConnection.md)<`TConnectionAPI`\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `requireWriteAccess` | `boolean` | `false` |
| `nodeID?` | `string` | `undefined` |

#### Returns

`Promise`<[`DatabaseConnection`](DatabaseConnection.md)<`TConnectionAPI`\>\>

#### Defined in

[src/Database.ts:64](https://github.com/breautek/storm/blob/3ad3438/src/Database.ts#L64)

___

### removeMaster

▸ **removeMaster**(): `void`

#### Returns

`void`

#### Defined in

[src/Database.ts:40](https://github.com/breautek/storm/blob/3ad3438/src/Database.ts#L40)

___

### removeSlave

▸ **removeSlave**(`slaveID`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `slaveID` | `string` |

#### Returns

`void`

#### Defined in

[src/Database.ts:54](https://github.com/breautek/storm/blob/3ad3438/src/Database.ts#L54)
