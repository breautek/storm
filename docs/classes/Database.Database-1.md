[@breautek/storm](../README.md) / [Database](../modules/Database.md) / Database

# Class: Database<TDatabaseConfig, TConnectionAPI\>

[Database](../modules/Database.md).Database

## Type parameters

| Name |
| :------ |
| `TDatabaseConfig` |
| `TConnectionAPI` |

## Hierarchy

- **`Database`**

  ↳ [`MySQLDatabase`](MySQLDatabase.MySQLDatabase-1.md)

## Table of contents

### Constructors

- [constructor](Database.Database-1.md#constructor)

### Methods

- [\_addNode](Database.Database-1.md#_addnode)
- [\_destroy](Database.Database-1.md#_destroy)
- [\_getConnection](Database.Database-1.md#_getconnection)
- [\_removeNode](Database.Database-1.md#_removenode)
- [addMaster](Database.Database-1.md#addmaster)
- [addSlave](Database.Database-1.md#addslave)
- [destroy](Database.Database-1.md#destroy)
- [escape](Database.Database-1.md#escape)
- [getConnection](Database.Database-1.md#getconnection)
- [removeMaster](Database.Database-1.md#removemaster)
- [removeSlave](Database.Database-1.md#removeslave)

## Constructors

### constructor

• **new Database**<`TDatabaseConfig`, `TConnectionAPI`\>()

#### Type parameters

| Name |
| :------ |
| `TDatabaseConfig` |
| `TConnectionAPI` |

#### Defined in

[src/Database.ts:28](https://github.com/breautek/storm/blob/8c3a317/src/Database.ts#L28)

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

[src/Database.ts:83](https://github.com/breautek/storm/blob/8c3a317/src/Database.ts#L83)

___

### \_destroy

▸ `Protected` `Abstract` **_destroy**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/Database.ts:82](https://github.com/breautek/storm/blob/8c3a317/src/Database.ts#L82)

___

### \_getConnection

▸ `Protected` `Abstract` **_getConnection**(`query`, `requireWriteAccess`): `Promise`<[`DatabaseConnection`](DatabaseConnection.DatabaseConnection-1.md)<`TConnectionAPI`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `requireWriteAccess` | `boolean` |

#### Returns

`Promise`<[`DatabaseConnection`](DatabaseConnection.DatabaseConnection-1.md)<`TConnectionAPI`\>\>

#### Defined in

[src/Database.ts:85](https://github.com/breautek/storm/blob/8c3a317/src/Database.ts#L85)

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

[src/Database.ts:84](https://github.com/breautek/storm/blob/8c3a317/src/Database.ts#L84)

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

[src/Database.ts:32](https://github.com/breautek/storm/blob/8c3a317/src/Database.ts#L32)

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

[src/Database.ts:46](https://github.com/breautek/storm/blob/8c3a317/src/Database.ts#L46)

___

### destroy

▸ **destroy**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/Database.ts:78](https://github.com/breautek/storm/blob/8c3a317/src/Database.ts#L78)

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

[src/Database.ts:86](https://github.com/breautek/storm/blob/8c3a317/src/Database.ts#L86)

___

### getConnection

▸ **getConnection**(`requireWriteAccess?`, `nodeID?`): `Promise`<[`DatabaseConnection`](DatabaseConnection.DatabaseConnection-1.md)<`TConnectionAPI`\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `requireWriteAccess` | `boolean` | `false` |
| `nodeID?` | `string` | `undefined` |

#### Returns

`Promise`<[`DatabaseConnection`](DatabaseConnection.DatabaseConnection-1.md)<`TConnectionAPI`\>\>

#### Defined in

[src/Database.ts:65](https://github.com/breautek/storm/blob/8c3a317/src/Database.ts#L65)

___

### removeMaster

▸ **removeMaster**(): `void`

#### Returns

`void`

#### Defined in

[src/Database.ts:41](https://github.com/breautek/storm/blob/8c3a317/src/Database.ts#L41)

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

[src/Database.ts:55](https://github.com/breautek/storm/blob/8c3a317/src/Database.ts#L55)
