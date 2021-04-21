[@breautek/storm](../README.md) / [MySQLDatabase](../modules/mysqldatabase.md) / MySQLDatabase

# Class: MySQLDatabase

[MySQLDatabase](../modules/mysqldatabase.md).MySQLDatabase

## Hierarchy

* [*Database*](database.database-1.md)<MySQL.PoolConfig, MySQL.PoolConnection\>

  ↳ **MySQLDatabase**

## Table of contents

### Constructors

- [constructor](mysqldatabase.mysqldatabase-1.md#constructor)

### Methods

- [\_addNode](mysqldatabase.mysqldatabase-1.md#_addnode)
- [\_getConnection](mysqldatabase.mysqldatabase-1.md#_getconnection)
- [\_removeNode](mysqldatabase.mysqldatabase-1.md#_removenode)
- [addMaster](mysqldatabase.mysqldatabase-1.md#addmaster)
- [addSlave](mysqldatabase.mysqldatabase-1.md#addslave)
- [escape](mysqldatabase.mysqldatabase-1.md#escape)
- [getConnection](mysqldatabase.mysqldatabase-1.md#getconnection)
- [removeMaster](mysqldatabase.mysqldatabase-1.md#removemaster)
- [removeSlave](mysqldatabase.mysqldatabase-1.md#removeslave)
- [escape](mysqldatabase.mysqldatabase-1.md#escape)

## Constructors

### constructor

\+ **new MySQLDatabase**(): [*MySQLDatabase*](mysqldatabase.mysqldatabase-1.md)

**Returns:** [*MySQLDatabase*](mysqldatabase.mysqldatabase-1.md)

Overrides: [Database](database.database-1.md)

Defined in: [src/MySQLDatabase.ts:25](https://github.com/breautek/storm/blob/2614a1c/src/MySQLDatabase.ts#L25)

## Methods

### \_addNode

▸ `Protected`**_addNode**(`nodeID`: *string*, `config`: PoolConfig): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `nodeID` | *string* |
| `config` | PoolConfig |

**Returns:** *void*

Overrides: [Database](database.database-1.md)

Defined in: [src/MySQLDatabase.ts:49](https://github.com/breautek/storm/blob/2614a1c/src/MySQLDatabase.ts#L49)

___

### \_getConnection

▸ `Protected`**_getConnection**(`query`: *string*, `requireWriteAccess`: *boolean*): *Promise*<[*MySQLConnection*](mysqlconnection.mysqlconnection-1.md)\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | *string* |
| `requireWriteAccess` | *boolean* |

**Returns:** *Promise*<[*MySQLConnection*](mysqlconnection.mysqlconnection-1.md)\>

Overrides: [Database](database.database-1.md)

Defined in: [src/MySQLDatabase.ts:59](https://github.com/breautek/storm/blob/2614a1c/src/MySQLDatabase.ts#L59)

___

### \_removeNode

▸ `Protected`**_removeNode**(`nodeID`: *string*): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `nodeID` | *string* |

**Returns:** *void*

Overrides: [Database](database.database-1.md)

Defined in: [src/MySQLDatabase.ts:54](https://github.com/breautek/storm/blob/2614a1c/src/MySQLDatabase.ts#L54)

___

### addMaster

▸ **addMaster**(`config`: PoolConfig): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `config` | PoolConfig |

**Returns:** *void*

Inherited from: [Database](database.database-1.md)

Defined in: [src/Database.ts:32](https://github.com/breautek/storm/blob/2614a1c/src/Database.ts#L32)

___

### addSlave

▸ **addSlave**(`slaveID`: *string*, `config`: PoolConfig): *string*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `slaveID` | *string* |
| `config` | PoolConfig |

**Returns:** *string*

Inherited from: [Database](database.database-1.md)

Defined in: [src/Database.ts:46](https://github.com/breautek/storm/blob/2614a1c/src/Database.ts#L46)

___

### escape

▸ **escape**(`value`: *any*): *string*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | *any* |

**Returns:** *string*

Overrides: [Database](database.database-1.md)

Defined in: [src/MySQLDatabase.ts:40](https://github.com/breautek/storm/blob/2614a1c/src/MySQLDatabase.ts#L40)

___

### getConnection

▸ **getConnection**(`requireWriteAccess?`: *boolean*, `nodeID?`: *string*): *Promise*<[*DatabaseConnection*](databaseconnection.databaseconnection-1.md)<PoolConnection\>\>

#### Parameters:

| Name | Type | Default value |
| :------ | :------ | :------ |
| `requireWriteAccess` | *boolean* | false |
| `nodeID?` | *string* | - |

**Returns:** *Promise*<[*DatabaseConnection*](databaseconnection.databaseconnection-1.md)<PoolConnection\>\>

Inherited from: [Database](database.database-1.md)

Defined in: [src/Database.ts:65](https://github.com/breautek/storm/blob/2614a1c/src/Database.ts#L65)

___

### removeMaster

▸ **removeMaster**(): *void*

**Returns:** *void*

Inherited from: [Database](database.database-1.md)

Defined in: [src/Database.ts:41](https://github.com/breautek/storm/blob/2614a1c/src/Database.ts#L41)

___

### removeSlave

▸ **removeSlave**(`slaveID`: *string*): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `slaveID` | *string* |

**Returns:** *void*

Inherited from: [Database](database.database-1.md)

Defined in: [src/Database.ts:55](https://github.com/breautek/storm/blob/2614a1c/src/Database.ts#L55)

___

### escape

▸ `Static`**escape**(`value`: *any*): *string*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | *any* |

**Returns:** *string*

Defined in: [src/MySQLDatabase.ts:45](https://github.com/breautek/storm/blob/2614a1c/src/MySQLDatabase.ts#L45)
