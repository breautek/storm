[@breautek/storm](../README.md) / [DatabaseConnection](../modules/DatabaseConnection.md) / DatabaseConnection

# Class: DatabaseConnection<TAPI\>

[DatabaseConnection](../modules/DatabaseConnection.md).DatabaseConnection

Do not call `new Database` directly. Use `Database.getConnection` to create a `DatabaseConnection` object.

**`abstract`**

**`implements`** `IDatabaseConnection`

## Type parameters

| Name |
| :------ |
| `TAPI` |

## Hierarchy

- **`DatabaseConnection`**

  ↳ [`MySQLConnection`](MySQLConnection.MySQLConnection-1.md)

## Implements

- [`IDatabaseConnection`](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md)

## Table of contents

### Constructors

- [constructor](DatabaseConnection.DatabaseConnection-1.md#constructor)

### Methods

- [\_close](DatabaseConnection.DatabaseConnection-1.md#_close)
- [\_query](DatabaseConnection.DatabaseConnection-1.md#_query)
- [\_stream](DatabaseConnection.DatabaseConnection-1.md#_stream)
- [close](DatabaseConnection.DatabaseConnection-1.md#close)
- [commit](DatabaseConnection.DatabaseConnection-1.md#commit)
- [endTransaction](DatabaseConnection.DatabaseConnection-1.md#endtransaction)
- [getAPI](DatabaseConnection.DatabaseConnection-1.md#getapi)
- [getInstantiationStack](DatabaseConnection.DatabaseConnection-1.md#getinstantiationstack)
- [getTimeout](DatabaseConnection.DatabaseConnection-1.md#gettimeout)
- [isClosed](DatabaseConnection.DatabaseConnection-1.md#isclosed)
- [isReadOnly](DatabaseConnection.DatabaseConnection-1.md#isreadonly)
- [isTransaction](DatabaseConnection.DatabaseConnection-1.md#istransaction)
- [query](DatabaseConnection.DatabaseConnection-1.md#query)
- [rollback](DatabaseConnection.DatabaseConnection-1.md#rollback)
- [setInstantiationStack](DatabaseConnection.DatabaseConnection-1.md#setinstantiationstack)
- [setTimeout](DatabaseConnection.DatabaseConnection-1.md#settimeout)
- [startTransaction](DatabaseConnection.DatabaseConnection-1.md#starttransaction)
- [stream](DatabaseConnection.DatabaseConnection-1.md#stream)

## Constructors

### constructor

• **new DatabaseConnection**<`TAPI`\>(`api`, `isReadOnly`, `instantiationStack`)

#### Type parameters

| Name |
| :------ |
| `TAPI` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `TAPI` |
| `isReadOnly` | `boolean` |
| `instantiationStack` | `string` |

#### Defined in

[src/DatabaseConnection.ts:44](https://github.com/breautek/storm/blob/72412c9/src/DatabaseConnection.ts#L44)

## Methods

### \_close

▸ `Protected` `Abstract` **_close**(`forceClose`): `Promise`<`void`\>

Implementation to close the connection, if `forceClose` is true, close the connection no matter what.
Silently error if it means the connection is closed.

**`async`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `forceClose` | `boolean` | boolean, if `true`, should close the connection no matter what. |

#### Returns

`Promise`<`void`\>

Promise<void>

#### Defined in

[src/DatabaseConnection.ts:239](https://github.com/breautek/storm/blob/72412c9/src/DatabaseConnection.ts#L239)

___

### \_query

▸ `Protected` `Abstract` **_query**<`TQueryResult`\>(`query`, `params?`): `Promise`<`TQueryResult`\>

Implementation method to return a dataset from the database

**`async`**

#### Type parameters

| Name |
| :------ |
| `TQueryResult` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | The database query |
| `params?` | `any` | The query parameters |

#### Returns

`Promise`<`TQueryResult`\>

Promise

#### Defined in

[src/DatabaseConnection.ts:250](https://github.com/breautek/storm/blob/72412c9/src/DatabaseConnection.ts#L250)

___

### \_stream

▸ `Protected` `Abstract` **_stream**(`query`, `params?`, `streamOptions?`): `Readable`

Implementation method to return a dataset from the database like `query()`,
but returns a `Readable` stream instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | The database query |
| `params?` | `any` | The query parameters |
| `streamOptions?` | `any` | `Readable` stream options |

#### Returns

`Readable`

`Readable`

#### Defined in

[src/DatabaseConnection.ts:262](https://github.com/breautek/storm/blob/72412c9/src/DatabaseConnection.ts#L262)

___

### close

▸ **close**(`forceClose?`): `Promise`<`void`\>

Closes the connection. May error if connection has an active transaction.
if `forceClose` boolean is true, it will force close the connection, regardless
of transaction state.

**`async`**

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `forceClose` | `boolean` | `false` | optional boolean |

#### Returns

`Promise`<`void`\>

Promise<void>

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md).[close](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md#close)

#### Defined in

[src/DatabaseConnection.ts:169](https://github.com/breautek/storm/blob/72412c9/src/DatabaseConnection.ts#L169)

___

### commit

▸ `Abstract` **commit**(): `Promise`<`void`\>

Commits a transaction. This will end a transaction.

**`abstract`**

**`async`**

#### Returns

`Promise`<`void`\>

Promise<void>

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md).[commit](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md#commit)

#### Defined in

[src/DatabaseConnection.ts:220](https://github.com/breautek/storm/blob/72412c9/src/DatabaseConnection.ts#L220)

___

### endTransaction

▸ `Abstract` **endTransaction**(`requiresRollback?`): `Promise`<`void`\>

Ends a transaction. if `requiresRollback` is `true`, then `rollback()` is invoked. Otherwise, `commit()` is invoked.

**`abstract`**

**`async`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requiresRollback?` | `boolean` | optional boolean |

#### Returns

`Promise`<`void`\>

Promise<void>

#### Defined in

[src/DatabaseConnection.ts:211](https://github.com/breautek/storm/blob/72412c9/src/DatabaseConnection.ts#L211)

___

### getAPI

▸ **getAPI**(): `TAPI`

Gets the underlying Database API

#### Returns

`TAPI`

any

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md).[getAPI](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md#getapi)

#### Defined in

[src/DatabaseConnection.ts:91](https://github.com/breautek/storm/blob/72412c9/src/DatabaseConnection.ts#L91)

___

### getInstantiationStack

▸ **getInstantiationStack**(): `string`

Gets the callback stacktrace to determine what opened
this connection. Useful for debugging lingering connections.

#### Returns

`string`

string - A stacktrace

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md).[getInstantiationStack](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md#getinstantiationstack)

#### Defined in

[src/DatabaseConnection.ts:73](https://github.com/breautek/storm/blob/72412c9/src/DatabaseConnection.ts#L73)

___

### getTimeout

▸ **getTimeout**(): `number`

Returns the current timeout setting

#### Returns

`number`

number in milliseconds

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md).[getTimeout](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md#gettimeout)

#### Defined in

[src/DatabaseConnection.ts:121](https://github.com/breautek/storm/blob/72412c9/src/DatabaseConnection.ts#L121)

___

### isClosed

▸ **isClosed**(): `boolean`

Returns true if the connection has been closed.

#### Returns

`boolean`

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md).[isClosed](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md#isclosed)

#### Defined in

[src/DatabaseConnection.ts:182](https://github.com/breautek/storm/blob/72412c9/src/DatabaseConnection.ts#L182)

___

### isReadOnly

▸ **isReadOnly**(): `boolean`

Returns true if connection was created without
write access

#### Returns

`boolean`

boolean

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md).[isReadOnly](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md#isreadonly)

#### Defined in

[src/DatabaseConnection.ts:100](https://github.com/breautek/storm/blob/72412c9/src/DatabaseConnection.ts#L100)

___

### isTransaction

▸ `Abstract` **isTransaction**(): `boolean`

Implementation method to determine if the connection is in an active transaction.

**`abstract`**

#### Returns

`boolean`

boolean

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md).[isTransaction](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md#istransaction)

#### Defined in

[src/DatabaseConnection.ts:201](https://github.com/breautek/storm/blob/72412c9/src/DatabaseConnection.ts#L201)

___

### query

▸ **query**<`TQueryResult`\>(`query`): `Promise`<`TQueryResult`\>

Queries the database for a dataset.

**`async`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQueryResult` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | [`Query`](Query.Query-1.md)<`any`, `any`, `any`\> | The database query |

#### Returns

`Promise`<`TQueryResult`\>

Promise<TQueryResult>

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md).[query](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md#query)

#### Defined in

[src/DatabaseConnection.ts:132](https://github.com/breautek/storm/blob/72412c9/src/DatabaseConnection.ts#L132)

___

### rollback

▸ `Abstract` **rollback**(): `Promise`<`void`\>

Rollsback a transaction. This will end a transaction.

**`abstract`**

**`async`**

#### Returns

`Promise`<`void`\>

Promise<void>

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md).[rollback](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md#rollback)

#### Defined in

[src/DatabaseConnection.ts:229](https://github.com/breautek/storm/blob/72412c9/src/DatabaseConnection.ts#L229)

___

### setInstantiationStack

▸ **setInstantiationStack**(`stack`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stack` | `string` |

#### Returns

`void`

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md).[setInstantiationStack](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md#setinstantiationstack)

#### Defined in

[src/DatabaseConnection.ts:64](https://github.com/breautek/storm/blob/72412c9/src/DatabaseConnection.ts#L64)

___

### setTimeout

▸ **setTimeout**(`timeout`): `void`

Sets the timeout of this connectino

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timeout` | `number` | in milliseconds |

#### Returns

`void`

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md).[setTimeout](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md#settimeout)

#### Defined in

[src/DatabaseConnection.ts:109](https://github.com/breautek/storm/blob/72412c9/src/DatabaseConnection.ts#L109)

___

### startTransaction

▸ `Abstract` **startTransaction**(): `Promise`<`void`\>

Implementation method to start a transaction.

**`abstract`**

**`async`**

#### Returns

`Promise`<`void`\>

Promise<void>

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md).[startTransaction](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md#starttransaction)

#### Defined in

[src/DatabaseConnection.ts:193](https://github.com/breautek/storm/blob/72412c9/src/DatabaseConnection.ts#L193)

___

### stream

▸ **stream**(`query`, `streamOptions?`): `Readable`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | [`Query`](Query.Query-1.md)<`any`, `any`, `any`\> | The database query |
| `streamOptions?` | `any` | Stream options |

#### Returns

`Readable`

Readable

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md).[stream](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md#stream)

#### Defined in

[src/DatabaseConnection.ts:152](https://github.com/breautek/storm/blob/72412c9/src/DatabaseConnection.ts#L152)
