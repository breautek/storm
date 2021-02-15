[@breautek/storm](../README.md) / [DatabaseConnection](../modules/databaseconnection.md) / DatabaseConnection

# Class: DatabaseConnection<TAPI\>

[DatabaseConnection](../modules/databaseconnection.md).DatabaseConnection

Do not call `new Database` directly. Use `Database.getConnection` to create a `DatabaseConnection` object.

**`abstract`** 

**`implements`** `IDatabaseConnection`

## Type parameters

Name |
------ |
`TAPI` |

## Hierarchy

* **DatabaseConnection**

  ↳ [*MySQLConnection*](mysqlconnection.mysqlconnection-1.md)

## Implements

* [*IDatabaseConnection*](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

## Table of contents

### Constructors

- [constructor](databaseconnection.databaseconnection-1.md#constructor)

### Methods

- [\_close](databaseconnection.databaseconnection-1.md#_close)
- [\_query](databaseconnection.databaseconnection-1.md#_query)
- [\_stream](databaseconnection.databaseconnection-1.md#_stream)
- [close](databaseconnection.databaseconnection-1.md#close)
- [commit](databaseconnection.databaseconnection-1.md#commit)
- [endTransaction](databaseconnection.databaseconnection-1.md#endtransaction)
- [getAPI](databaseconnection.databaseconnection-1.md#getapi)
- [getInstantiationStack](databaseconnection.databaseconnection-1.md#getinstantiationstack)
- [getTimeout](databaseconnection.databaseconnection-1.md#gettimeout)
- [isClosed](databaseconnection.databaseconnection-1.md#isclosed)
- [isReadOnly](databaseconnection.databaseconnection-1.md#isreadonly)
- [isTransaction](databaseconnection.databaseconnection-1.md#istransaction)
- [query](databaseconnection.databaseconnection-1.md#query)
- [rollback](databaseconnection.databaseconnection-1.md#rollback)
- [setInstantiationStack](databaseconnection.databaseconnection-1.md#setinstantiationstack)
- [setTimeout](databaseconnection.databaseconnection-1.md#settimeout)
- [startTransaction](databaseconnection.databaseconnection-1.md#starttransaction)
- [stream](databaseconnection.databaseconnection-1.md#stream)

## Constructors

### constructor

\+ **new DatabaseConnection**<TAPI\>(`api`: TAPI, `isReadOnly`: *boolean*, `instantiationStack`: *string*): [*DatabaseConnection*](databaseconnection.databaseconnection-1.md)<TAPI\>

#### Type parameters:

Name |
------ |
`TAPI` |

#### Parameters:

Name | Type |
------ | ------ |
`api` | TAPI |
`isReadOnly` | *boolean* |
`instantiationStack` | *string* |

**Returns:** [*DatabaseConnection*](databaseconnection.databaseconnection-1.md)<TAPI\>

Defined in: [src/DatabaseConnection.ts:42](https://github.com/breautek/storm/blob/d383af9/src/DatabaseConnection.ts#L42)

## Methods

### \_close

▸ `Protected` `Abstract`**_close**(`forceClose`: *boolean*): *Promise*<*void*\>

Implementation to close the connection, if `forceClose` is true, close the connection no matter what.
Silently error if it means the connection is closed.

**`async`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`forceClose` | *boolean* | boolean, if `true`, should close the connection no matter what.   |

**Returns:** *Promise*<*void*\>

Promise<void>

Defined in: [src/DatabaseConnection.ts:238](https://github.com/breautek/storm/blob/d383af9/src/DatabaseConnection.ts#L238)

___

### \_query

▸ `Protected` `Abstract`**_query**<TQueryResult\>(`query`: *string*, `params?`: *any*): *Promise*<TQueryResult\>

Implementation method to return a dataset from the database

**`async`** 

#### Type parameters:

Name |
------ |
`TQueryResult` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`query` | *string* | The database query   |
`params?` | *any* | The query parameters   |

**Returns:** *Promise*<TQueryResult\>

Promise

Defined in: [src/DatabaseConnection.ts:249](https://github.com/breautek/storm/blob/d383af9/src/DatabaseConnection.ts#L249)

___

### \_stream

▸ `Protected` `Abstract`**_stream**(`query`: *string*, `params?`: *any*, `streamOptions?`: *any*): *Readable*

Implementation method to return a dataset from the database like `query()`,
but returns a `Readable` stream instead.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`query` | *string* | The database query   |
`params?` | *any* | The query parameters   |
`streamOptions?` | *any* | `Readable` stream options   |

**Returns:** *Readable*

`Readable`

Defined in: [src/DatabaseConnection.ts:261](https://github.com/breautek/storm/blob/d383af9/src/DatabaseConnection.ts#L261)

___

### close

▸ **close**(`forceClose?`: *boolean*): *Promise*<*void*\>

Closes the connection. May error if connection has an active transaction.
if `forceClose` boolean is true, it will force close the connection, regardless
of transaction state.

**`async`** 

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`forceClose` | *boolean* | false | optional boolean   |

**Returns:** *Promise*<*void*\>

Promise<void>

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/DatabaseConnection.ts:168](https://github.com/breautek/storm/blob/d383af9/src/DatabaseConnection.ts#L168)

___

### commit

▸ `Abstract`**commit**(): *Promise*<*void*\>

Commits a transaction. This will end a transaction.

**`abstract`** 

**`async`** 

**Returns:** *Promise*<*void*\>

Promise<void>

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/DatabaseConnection.ts:219](https://github.com/breautek/storm/blob/d383af9/src/DatabaseConnection.ts#L219)

___

### endTransaction

▸ `Abstract`**endTransaction**(`requiresRollback?`: *boolean*): *Promise*<*void*\>

Ends a transaction. if `requiresRollback` is `true`, then `rollback()` is invoked. Otherwise, `commit()` is invoked.

**`abstract`** 

**`async`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`requiresRollback?` | *boolean* | optional boolean   |

**Returns:** *Promise*<*void*\>

Promise<void>

Defined in: [src/DatabaseConnection.ts:210](https://github.com/breautek/storm/blob/d383af9/src/DatabaseConnection.ts#L210)

___

### getAPI

▸ **getAPI**(): TAPI

Gets the underlying Database API

**Returns:** TAPI

any

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/DatabaseConnection.ts:91](https://github.com/breautek/storm/blob/d383af9/src/DatabaseConnection.ts#L91)

___

### getInstantiationStack

▸ **getInstantiationStack**(): *string*

Gets the callback stacktrace to determine what opened
this connection. Useful for debugging lingering connections.

**Returns:** *string*

string - A stacktrace

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/DatabaseConnection.ts:73](https://github.com/breautek/storm/blob/d383af9/src/DatabaseConnection.ts#L73)

___

### getTimeout

▸ **getTimeout**(): *number*

Returns the current timeout setting

**Returns:** *number*

number in milliseconds

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/DatabaseConnection.ts:121](https://github.com/breautek/storm/blob/d383af9/src/DatabaseConnection.ts#L121)

___

### isClosed

▸ **isClosed**(): *boolean*

Returns true if the connection has been closed.

**Returns:** *boolean*

Defined in: [src/DatabaseConnection.ts:181](https://github.com/breautek/storm/blob/d383af9/src/DatabaseConnection.ts#L181)

___

### isReadOnly

▸ **isReadOnly**(): *boolean*

Returns true if connection was created without
write access

**Returns:** *boolean*

boolean

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/DatabaseConnection.ts:100](https://github.com/breautek/storm/blob/d383af9/src/DatabaseConnection.ts#L100)

___

### isTransaction

▸ `Abstract`**isTransaction**(): *boolean*

Implementation method to determine if the connection is in an active transaction.

**`abstract`** 

**Returns:** *boolean*

boolean

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/DatabaseConnection.ts:200](https://github.com/breautek/storm/blob/d383af9/src/DatabaseConnection.ts#L200)

___

### query

▸ **query**<TQueryResult\>(`query`: [*Query*](query.query-1.md)<*any*, *any*, *any*\>): *Promise*<TQueryResult\>

Queries the database for a dataset.

**`async`** 

#### Type parameters:

Name | Default |
------ | ------ |
`TQueryResult` | *any* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`query` | [*Query*](query.query-1.md)<*any*, *any*, *any*\> | The database query   |

**Returns:** *Promise*<TQueryResult\>

Promise<TQueryResult>

Defined in: [src/DatabaseConnection.ts:132](https://github.com/breautek/storm/blob/d383af9/src/DatabaseConnection.ts#L132)

___

### rollback

▸ `Abstract`**rollback**(): *Promise*<*void*\>

Rollsback a transaction. This will end a transaction.

**`abstract`** 

**`async`** 

**Returns:** *Promise*<*void*\>

Promise<void>

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/DatabaseConnection.ts:228](https://github.com/breautek/storm/blob/d383af9/src/DatabaseConnection.ts#L228)

___

### setInstantiationStack

▸ **setInstantiationStack**(`stack`: *string*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`stack` | *string* |

**Returns:** *void*

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/DatabaseConnection.ts:64](https://github.com/breautek/storm/blob/d383af9/src/DatabaseConnection.ts#L64)

___

### setTimeout

▸ **setTimeout**(`timeout`: *number*): *void*

Sets the timeout of this connectino

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`timeout` | *number* | in milliseconds    |

**Returns:** *void*

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/DatabaseConnection.ts:109](https://github.com/breautek/storm/blob/d383af9/src/DatabaseConnection.ts#L109)

___

### startTransaction

▸ `Abstract`**startTransaction**(): *Promise*<*void*\>

Implementation method to start a transaction.

**`abstract`** 

**`async`** 

**Returns:** *Promise*<*void*\>

Promise<void>

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/DatabaseConnection.ts:192](https://github.com/breautek/storm/blob/d383af9/src/DatabaseConnection.ts#L192)

___

### stream

▸ **stream**(`query`: [*Query*](query.query-1.md)<*any*, *any*, *any*\>, `streamOptions?`: *any*): *Readable*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`query` | [*Query*](query.query-1.md)<*any*, *any*, *any*\> | The database query   |
`streamOptions?` | *any* | Stream options   |

**Returns:** *Readable*

Readable

Defined in: [src/DatabaseConnection.ts:151](https://github.com/breautek/storm/blob/d383af9/src/DatabaseConnection.ts#L151)
