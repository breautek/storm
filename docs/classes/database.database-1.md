[@breautek/storm](../README.md) / [Database](../modules/database.md) / Database

# Class: Database<TDatabaseConfig, TConnectionAPI\>

[Database](../modules/database.md).Database

## Type parameters

| Name |
| :------ |
| `TDatabaseConfig` |
| `TConnectionAPI` |

## Hierarchy

- **`Database`**

  ↳ [`MySQLDatabase`](mysqldatabase.mysqldatabase-1.md)

## Table of contents

### Constructors

- [constructor](database.database-1.md#constructor)

### Methods

- [\_addNode](database.database-1.md#_addnode)
- [\_getConnection](database.database-1.md#_getconnection)
- [\_removeNode](database.database-1.md#_removenode)
- [addMaster](database.database-1.md#addmaster)
- [addSlave](database.database-1.md#addslave)
- [escape](database.database-1.md#escape)
- [getConnection](database.database-1.md#getconnection)
- [removeMaster](database.database-1.md#removemaster)
- [removeSlave](database.database-1.md#removeslave)

## Constructors

### constructor

• **new Database**<`TDatabaseConfig`, `TConnectionAPI`\>()

#### Type parameters

| Name |
| :------ |
| `TDatabaseConfig` |
| `TConnectionAPI` |

#### Defined in

[src/Database.ts:26](https://github.com/breautek/storm/blob/fff2ea4/src/Database.ts#L26)

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

[src/Database.ts:78](https://github.com/breautek/storm/blob/fff2ea4/src/Database.ts#L78)

___

### \_getConnection

▸ `Protected` `Abstract` **_getConnection**(`query`, `requireWriteAccess`): `Promise`<[`DatabaseConnection`](databaseconnection.databaseconnection-1.md)<`TConnectionAPI`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `requireWriteAccess` | `boolean` |

#### Returns

`Promise`<[`DatabaseConnection`](databaseconnection.databaseconnection-1.md)<`TConnectionAPI`\>\>

#### Defined in

[src/Database.ts:80](https://github.com/breautek/storm/blob/fff2ea4/src/Database.ts#L80)

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

[src/Database.ts:79](https://github.com/breautek/storm/blob/fff2ea4/src/Database.ts#L79)

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

[src/Database.ts:32](https://github.com/breautek/storm/blob/fff2ea4/src/Database.ts#L32)

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

[src/Database.ts:46](https://github.com/breautek/storm/blob/fff2ea4/src/Database.ts#L46)

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

[src/Database.ts:81](https://github.com/breautek/storm/blob/fff2ea4/src/Database.ts#L81)

___

### getConnection

▸ **getConnection**(`requireWriteAccess?`, `nodeID?`): `Promise`<[`DatabaseConnection`](databaseconnection.databaseconnection-1.md)<`TConnectionAPI`\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `requireWriteAccess` | `boolean` | `false` |
| `nodeID?` | `string` | `undefined` |

#### Returns

`Promise`<[`DatabaseConnection`](databaseconnection.databaseconnection-1.md)<`TConnectionAPI`\>\>

#### Defined in

[src/Database.ts:65](https://github.com/breautek/storm/blob/fff2ea4/src/Database.ts#L65)

___

### removeMaster

▸ **removeMaster**(): `void`

#### Returns

`void`

#### Defined in

[src/Database.ts:41](https://github.com/breautek/storm/blob/fff2ea4/src/Database.ts#L41)

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

[src/Database.ts:55](https://github.com/breautek/storm/blob/fff2ea4/src/Database.ts#L55)
