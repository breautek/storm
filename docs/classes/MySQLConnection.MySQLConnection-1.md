[@breautek/storm](../README.md) / [MySQLConnection](../modules/MySQLConnection.md) / MySQLConnection

# Class: MySQLConnection

[MySQLConnection](../modules/MySQLConnection.md).MySQLConnection

## Hierarchy

- [`DatabaseConnection`](DatabaseConnection.DatabaseConnection-1.md)<`MySQL.PoolConnection`\>

  ↳ **`MySQLConnection`**

## Table of contents

### Constructors

- [constructor](MySQLConnection.MySQLConnection-1.md#constructor)

### Methods

- [\_close](MySQLConnection.MySQLConnection-1.md#_close)
- [\_query](MySQLConnection.MySQLConnection-1.md#_query)
- [\_stream](MySQLConnection.MySQLConnection-1.md#_stream)
- [close](MySQLConnection.MySQLConnection-1.md#close)
- [commit](MySQLConnection.MySQLConnection-1.md#commit)
- [endTransaction](MySQLConnection.MySQLConnection-1.md#endtransaction)
- [getAPI](MySQLConnection.MySQLConnection-1.md#getapi)
- [getInstantiationStack](MySQLConnection.MySQLConnection-1.md#getinstantiationstack)
- [getTimeout](MySQLConnection.MySQLConnection-1.md#gettimeout)
- [isClosed](MySQLConnection.MySQLConnection-1.md#isclosed)
- [isOpen](MySQLConnection.MySQLConnection-1.md#isopen)
- [isReadOnly](MySQLConnection.MySQLConnection-1.md#isreadonly)
- [isTransaction](MySQLConnection.MySQLConnection-1.md#istransaction)
- [query](MySQLConnection.MySQLConnection-1.md#query)
- [rollback](MySQLConnection.MySQLConnection-1.md#rollback)
- [setInstantiationStack](MySQLConnection.MySQLConnection-1.md#setinstantiationstack)
- [setTimeout](MySQLConnection.MySQLConnection-1.md#settimeout)
- [startTransaction](MySQLConnection.MySQLConnection-1.md#starttransaction)
- [stream](MySQLConnection.MySQLConnection-1.md#stream)

## Constructors

### constructor

• **new MySQLConnection**(`connection`, `instantiationStack`, `isReadOnly?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `connection` | `PoolConnection` | `undefined` |
| `instantiationStack` | `string` | `undefined` |
| `isReadOnly` | `boolean` | `true` |

#### Overrides

[DatabaseConnection](DatabaseConnection.DatabaseConnection-1.md).[constructor](DatabaseConnection.DatabaseConnection-1.md#constructor)

#### Defined in

[src/MySQLConnection.ts:46](https://github.com/breautek/storm/blob/621aeec/src/MySQLConnection.ts#L46)

## Methods

### \_close

▸ `Protected` **_close**(`forceClose`): `Promise`<`void`\>

Implementation to close the connection, if `forceClose` is true, close the connection no matter what.
Silently error if it means the connection is closed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `forceClose` | `boolean` |

#### Returns

`Promise`<`void`\>

Promise<void>

#### Overrides

[DatabaseConnection](DatabaseConnection.DatabaseConnection-1.md).[_close](DatabaseConnection.DatabaseConnection-1.md#_close)

#### Defined in

[src/MySQLConnection.ts:190](https://github.com/breautek/storm/blob/621aeec/src/MySQLConnection.ts#L190)

___

### \_query

▸ `Protected` **_query**(`query`, `params?`): `Promise`<`any`\>

Implementation method to return a dataset from the database

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `params?` | `any` |

#### Returns

`Promise`<`any`\>

Promise

#### Overrides

[DatabaseConnection](DatabaseConnection.DatabaseConnection-1.md).[_query](DatabaseConnection.DatabaseConnection-1.md#_query)

#### Defined in

[src/MySQLConnection.ts:74](https://github.com/breautek/storm/blob/621aeec/src/MySQLConnection.ts#L74)

___

### \_stream

▸ `Protected` **_stream**(`query`, `params?`, `streamOptions?`): `Readable`

Implementation method to return a dataset from the database like `query()`,
but returns a `Readable` stream instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `params?` | `any` |
| `streamOptions?` | `any` |

#### Returns

`Readable`

`Readable`

#### Overrides

[DatabaseConnection](DatabaseConnection.DatabaseConnection-1.md).[_stream](DatabaseConnection.DatabaseConnection-1.md#_stream)

#### Defined in

[src/MySQLConnection.ts:113](https://github.com/breautek/storm/blob/621aeec/src/MySQLConnection.ts#L113)

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

#### Inherited from

[DatabaseConnection](DatabaseConnection.DatabaseConnection-1.md).[close](DatabaseConnection.DatabaseConnection-1.md#close)

#### Defined in

[src/DatabaseConnection.ts:169](https://github.com/breautek/storm/blob/621aeec/src/DatabaseConnection.ts#L169)

___

### commit

▸ **commit**(): `Promise`<`void`\>

Commits a transaction. This will end a transaction.

#### Returns

`Promise`<`void`\>

Promise<void>

#### Overrides

[DatabaseConnection](DatabaseConnection.DatabaseConnection-1.md).[commit](DatabaseConnection.DatabaseConnection-1.md#commit)

#### Defined in

[src/MySQLConnection.ts:174](https://github.com/breautek/storm/blob/621aeec/src/MySQLConnection.ts#L174)

___

### endTransaction

▸ **endTransaction**(`requiresRollback?`): `Promise`<`void`\>

Ends a transaction. if `requiresRollback` is `true`, then `rollback()` is invoked. Otherwise, `commit()` is invoked.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `requiresRollback` | `boolean` | `false` |

#### Returns

`Promise`<`void`\>

Promise<void>

#### Overrides

[DatabaseConnection](DatabaseConnection.DatabaseConnection-1.md).[endTransaction](DatabaseConnection.DatabaseConnection-1.md#endtransaction)

#### Defined in

[src/MySQLConnection.ts:154](https://github.com/breautek/storm/blob/621aeec/src/MySQLConnection.ts#L154)

___

### getAPI

▸ **getAPI**(): `PoolConnection`

Gets the underlying Database API

#### Returns

`PoolConnection`

any

#### Inherited from

[DatabaseConnection](DatabaseConnection.DatabaseConnection-1.md).[getAPI](DatabaseConnection.DatabaseConnection-1.md#getapi)

#### Defined in

[src/DatabaseConnection.ts:91](https://github.com/breautek/storm/blob/621aeec/src/DatabaseConnection.ts#L91)

___

### getInstantiationStack

▸ **getInstantiationStack**(): `string`

Gets the callback stacktrace to determine what opened
this connection. Useful for debugging lingering connections.

#### Returns

`string`

string - A stacktrace

#### Inherited from

[DatabaseConnection](DatabaseConnection.DatabaseConnection-1.md).[getInstantiationStack](DatabaseConnection.DatabaseConnection-1.md#getinstantiationstack)

#### Defined in

[src/DatabaseConnection.ts:73](https://github.com/breautek/storm/blob/621aeec/src/DatabaseConnection.ts#L73)

___

### getTimeout

▸ **getTimeout**(): `number`

Returns the current timeout setting

#### Returns

`number`

number in milliseconds

#### Inherited from

[DatabaseConnection](DatabaseConnection.DatabaseConnection-1.md).[getTimeout](DatabaseConnection.DatabaseConnection-1.md#gettimeout)

#### Defined in

[src/DatabaseConnection.ts:121](https://github.com/breautek/storm/blob/621aeec/src/DatabaseConnection.ts#L121)

___

### isClosed

▸ **isClosed**(): `boolean`

Returns true if the connection has been closed.

#### Returns

`boolean`

#### Inherited from

[DatabaseConnection](DatabaseConnection.DatabaseConnection-1.md).[isClosed](DatabaseConnection.DatabaseConnection-1.md#isclosed)

#### Defined in

[src/DatabaseConnection.ts:182](https://github.com/breautek/storm/blob/621aeec/src/DatabaseConnection.ts#L182)

___

### isOpen

▸ **isOpen**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/MySQLConnection.ts:69](https://github.com/breautek/storm/blob/621aeec/src/MySQLConnection.ts#L69)

___

### isReadOnly

▸ **isReadOnly**(): `boolean`

Returns true if connection was created without
write access

#### Returns

`boolean`

boolean

#### Inherited from

[DatabaseConnection](DatabaseConnection.DatabaseConnection-1.md).[isReadOnly](DatabaseConnection.DatabaseConnection-1.md#isreadonly)

#### Defined in

[src/DatabaseConnection.ts:100](https://github.com/breautek/storm/blob/621aeec/src/DatabaseConnection.ts#L100)

___

### isTransaction

▸ **isTransaction**(): `boolean`

Implementation method to determine if the connection is in an active transaction.

#### Returns

`boolean`

boolean

#### Overrides

[DatabaseConnection](DatabaseConnection.DatabaseConnection-1.md).[isTransaction](DatabaseConnection.DatabaseConnection-1.md#istransaction)

#### Defined in

[src/MySQLConnection.ts:65](https://github.com/breautek/storm/blob/621aeec/src/MySQLConnection.ts#L65)

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

#### Inherited from

[DatabaseConnection](DatabaseConnection.DatabaseConnection-1.md).[query](DatabaseConnection.DatabaseConnection-1.md#query)

#### Defined in

[src/DatabaseConnection.ts:132](https://github.com/breautek/storm/blob/621aeec/src/DatabaseConnection.ts#L132)

___

### rollback

▸ **rollback**(): `Promise`<`void`\>

Rollsback a transaction. This will end a transaction.

#### Returns

`Promise`<`void`\>

Promise<void>

#### Overrides

[DatabaseConnection](DatabaseConnection.DatabaseConnection-1.md).[rollback](DatabaseConnection.DatabaseConnection-1.md#rollback)

#### Defined in

[src/MySQLConnection.ts:158](https://github.com/breautek/storm/blob/621aeec/src/MySQLConnection.ts#L158)

___

### setInstantiationStack

▸ **setInstantiationStack**(`stack`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stack` | `string` |

#### Returns

`void`

#### Inherited from

[DatabaseConnection](DatabaseConnection.DatabaseConnection-1.md).[setInstantiationStack](DatabaseConnection.DatabaseConnection-1.md#setinstantiationstack)

#### Defined in

[src/DatabaseConnection.ts:64](https://github.com/breautek/storm/blob/621aeec/src/DatabaseConnection.ts#L64)

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

#### Inherited from

[DatabaseConnection](DatabaseConnection.DatabaseConnection-1.md).[setTimeout](DatabaseConnection.DatabaseConnection-1.md#settimeout)

#### Defined in

[src/DatabaseConnection.ts:109](https://github.com/breautek/storm/blob/621aeec/src/DatabaseConnection.ts#L109)

___

### startTransaction

▸ **startTransaction**(): `Promise`<`void`\>

Implementation method to start a transaction.

#### Returns

`Promise`<`void`\>

Promise<void>

#### Overrides

[DatabaseConnection](DatabaseConnection.DatabaseConnection-1.md).[startTransaction](DatabaseConnection.DatabaseConnection-1.md#starttransaction)

#### Defined in

[src/MySQLConnection.ts:132](https://github.com/breautek/storm/blob/621aeec/src/MySQLConnection.ts#L132)

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

#### Inherited from

[DatabaseConnection](DatabaseConnection.DatabaseConnection-1.md).[stream](DatabaseConnection.DatabaseConnection-1.md#stream)

#### Defined in

[src/DatabaseConnection.ts:152](https://github.com/breautek/storm/blob/621aeec/src/DatabaseConnection.ts#L152)
