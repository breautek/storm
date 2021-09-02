[@breautek/storm](../README.md) / [MySQLDatabase](../modules/MySQLDatabase.md) / MySQLDatabase

# Class: MySQLDatabase

[MySQLDatabase](../modules/MySQLDatabase.md).MySQLDatabase

## Hierarchy

- [`Database`](Database.Database-1.md)<`MySQL.PoolConfig`, `MySQL.PoolConnection`\>

  ↳ **`MySQLDatabase`**

## Table of contents

### Constructors

- [constructor](MySQLDatabase.MySQLDatabase-1.md#constructor)

### Methods

- [\_addNode](MySQLDatabase.MySQLDatabase-1.md#_addnode)
- [\_getConnection](MySQLDatabase.MySQLDatabase-1.md#_getconnection)
- [\_removeNode](MySQLDatabase.MySQLDatabase-1.md#_removenode)
- [addMaster](MySQLDatabase.MySQLDatabase-1.md#addmaster)
- [addSlave](MySQLDatabase.MySQLDatabase-1.md#addslave)
- [escape](MySQLDatabase.MySQLDatabase-1.md#escape)
- [getConnection](MySQLDatabase.MySQLDatabase-1.md#getconnection)
- [removeMaster](MySQLDatabase.MySQLDatabase-1.md#removemaster)
- [removeSlave](MySQLDatabase.MySQLDatabase-1.md#removeslave)
- [escape](MySQLDatabase.MySQLDatabase-1.md#escape)

## Constructors

### constructor

• **new MySQLDatabase**()

#### Overrides

[Database](Database.Database-1.md).[constructor](Database.Database-1.md#constructor)

#### Defined in

[src/MySQLDatabase.ts:27](https://github.com/breautek/storm/blob/3449719/src/MySQLDatabase.ts#L27)

## Methods

### \_addNode

▸ `Protected` **_addNode**(`nodeID`, `config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeID` | `string` |
| `config` | `PoolConfig` |

#### Returns

`void`

#### Overrides

[Database](Database.Database-1.md).[_addNode](Database.Database-1.md#_addnode)

#### Defined in

[src/MySQLDatabase.ts:49](https://github.com/breautek/storm/blob/3449719/src/MySQLDatabase.ts#L49)

___

### \_getConnection

▸ `Protected` **_getConnection**(`query`, `requireWriteAccess`): `Promise`<[`MySQLConnection`](MySQLConnection.MySQLConnection-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `requireWriteAccess` | `boolean` |

#### Returns

`Promise`<[`MySQLConnection`](MySQLConnection.MySQLConnection-1.md)\>

#### Overrides

[Database](Database.Database-1.md).[_getConnection](Database.Database-1.md#_getconnection)

#### Defined in

[src/MySQLDatabase.ts:59](https://github.com/breautek/storm/blob/3449719/src/MySQLDatabase.ts#L59)

___

### \_removeNode

▸ `Protected` **_removeNode**(`nodeID`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeID` | `string` |

#### Returns

`void`

#### Overrides

[Database](Database.Database-1.md).[_removeNode](Database.Database-1.md#_removenode)

#### Defined in

[src/MySQLDatabase.ts:54](https://github.com/breautek/storm/blob/3449719/src/MySQLDatabase.ts#L54)

___

### addMaster

▸ **addMaster**(`config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `PoolConfig` |

#### Returns

`void`

#### Inherited from

[Database](Database.Database-1.md).[addMaster](Database.Database-1.md#addmaster)

#### Defined in

[src/Database.ts:32](https://github.com/breautek/storm/blob/3449719/src/Database.ts#L32)

___

### addSlave

▸ **addSlave**(`slaveID`, `config`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `slaveID` | `string` |
| `config` | `PoolConfig` |

#### Returns

`string`

#### Inherited from

[Database](Database.Database-1.md).[addSlave](Database.Database-1.md#addslave)

#### Defined in

[src/Database.ts:46](https://github.com/breautek/storm/blob/3449719/src/Database.ts#L46)

___

### escape

▸ **escape**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

#### Overrides

[Database](Database.Database-1.md).[escape](Database.Database-1.md#escape)

#### Defined in

[src/MySQLDatabase.ts:40](https://github.com/breautek/storm/blob/3449719/src/MySQLDatabase.ts#L40)

___

### getConnection

▸ **getConnection**(`requireWriteAccess?`, `nodeID?`): `Promise`<[`DatabaseConnection`](DatabaseConnection.DatabaseConnection-1.md)<`PoolConnection`\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `requireWriteAccess` | `boolean` | `false` |
| `nodeID?` | `string` | `undefined` |

#### Returns

`Promise`<[`DatabaseConnection`](DatabaseConnection.DatabaseConnection-1.md)<`PoolConnection`\>\>

#### Inherited from

[Database](Database.Database-1.md).[getConnection](Database.Database-1.md#getconnection)

#### Defined in

[src/Database.ts:65](https://github.com/breautek/storm/blob/3449719/src/Database.ts#L65)

___

### removeMaster

▸ **removeMaster**(): `void`

#### Returns

`void`

#### Inherited from

[Database](Database.Database-1.md).[removeMaster](Database.Database-1.md#removemaster)

#### Defined in

[src/Database.ts:41](https://github.com/breautek/storm/blob/3449719/src/Database.ts#L41)

___

### removeSlave

▸ **removeSlave**(`slaveID`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `slaveID` | `string` |

#### Returns

`void`

#### Inherited from

[Database](Database.Database-1.md).[removeSlave](Database.Database-1.md#removeslave)

#### Defined in

[src/Database.ts:55](https://github.com/breautek/storm/blob/3449719/src/Database.ts#L55)

___

### escape

▸ `Static` **escape**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

#### Defined in

[src/MySQLDatabase.ts:45](https://github.com/breautek/storm/blob/3449719/src/MySQLDatabase.ts#L45)
