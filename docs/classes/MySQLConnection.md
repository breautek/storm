[@breautek/storm](../README.md) / MySQLConnection

# Class: MySQLConnection

## Hierarchy

- [`DatabaseConnection`](DatabaseConnection.md)<`MySQL.PoolConnection`\>

  ↳ **`MySQLConnection`**

## Table of contents

### Constructors

- [constructor](MySQLConnection.md#constructor)

### Methods

- [\_close](MySQLConnection.md#_close)
- [\_query](MySQLConnection.md#_query)
- [\_stream](MySQLConnection.md#_stream)
- [close](MySQLConnection.md#close)
- [commit](MySQLConnection.md#commit)
- [endTransaction](MySQLConnection.md#endtransaction)
- [getAPI](MySQLConnection.md#getapi)
- [getInstantiationStack](MySQLConnection.md#getinstantiationstack)
- [getTimeout](MySQLConnection.md#gettimeout)
- [isClosed](MySQLConnection.md#isclosed)
- [isOpen](MySQLConnection.md#isopen)
- [isReadOnly](MySQLConnection.md#isreadonly)
- [isTransaction](MySQLConnection.md#istransaction)
- [query](MySQLConnection.md#query)
- [rollback](MySQLConnection.md#rollback)
- [setInstantiationStack](MySQLConnection.md#setinstantiationstack)
- [setTimeout](MySQLConnection.md#settimeout)
- [startTransaction](MySQLConnection.md#starttransaction)
- [stream](MySQLConnection.md#stream)

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

[DatabaseConnection](DatabaseConnection.md).[constructor](DatabaseConnection.md#constructor)

#### Defined in

[src/MySQLConnection.ts:46](https://github.com/breautek/storm/blob/f198938/src/MySQLConnection.ts#L46)

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

[DatabaseConnection](DatabaseConnection.md).[_close](DatabaseConnection.md#_close)

#### Defined in

[src/MySQLConnection.ts:190](https://github.com/breautek/storm/blob/f198938/src/MySQLConnection.ts#L190)

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

[DatabaseConnection](DatabaseConnection.md).[_query](DatabaseConnection.md#_query)

#### Defined in

[src/MySQLConnection.ts:74](https://github.com/breautek/storm/blob/f198938/src/MySQLConnection.ts#L74)

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

[DatabaseConnection](DatabaseConnection.md).[_stream](DatabaseConnection.md#_stream)

#### Defined in

[src/MySQLConnection.ts:113](https://github.com/breautek/storm/blob/f198938/src/MySQLConnection.ts#L113)

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

[DatabaseConnection](DatabaseConnection.md).[close](DatabaseConnection.md#close)

#### Defined in

[src/DatabaseConnection.ts:168](https://github.com/breautek/storm/blob/f198938/src/DatabaseConnection.ts#L168)

___

### commit

▸ **commit**(): `Promise`<`void`\>

Commits a transaction. This will end a transaction.

#### Returns

`Promise`<`void`\>

Promise<void>

#### Overrides

[DatabaseConnection](DatabaseConnection.md).[commit](DatabaseConnection.md#commit)

#### Defined in

[src/MySQLConnection.ts:174](https://github.com/breautek/storm/blob/f198938/src/MySQLConnection.ts#L174)

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

[DatabaseConnection](DatabaseConnection.md).[endTransaction](DatabaseConnection.md#endtransaction)

#### Defined in

[src/MySQLConnection.ts:154](https://github.com/breautek/storm/blob/f198938/src/MySQLConnection.ts#L154)

___

### getAPI

▸ **getAPI**(): `PoolConnection`

Gets the underlying Database API

#### Returns

`PoolConnection`

any

#### Inherited from

[DatabaseConnection](DatabaseConnection.md).[getAPI](DatabaseConnection.md#getapi)

#### Defined in

[src/DatabaseConnection.ts:90](https://github.com/breautek/storm/blob/f198938/src/DatabaseConnection.ts#L90)

___

### getInstantiationStack

▸ **getInstantiationStack**(): `string`

Gets the callback stacktrace to determine what opened
this connection. Useful for debugging lingering connections.

#### Returns

`string`

string - A stacktrace

#### Inherited from

[DatabaseConnection](DatabaseConnection.md).[getInstantiationStack](DatabaseConnection.md#getinstantiationstack)

#### Defined in

[src/DatabaseConnection.ts:72](https://github.com/breautek/storm/blob/f198938/src/DatabaseConnection.ts#L72)

___

### getTimeout

▸ **getTimeout**(): `number`

Returns the current timeout setting

#### Returns

`number`

number in milliseconds

#### Inherited from

[DatabaseConnection](DatabaseConnection.md).[getTimeout](DatabaseConnection.md#gettimeout)

#### Defined in

[src/DatabaseConnection.ts:120](https://github.com/breautek/storm/blob/f198938/src/DatabaseConnection.ts#L120)

___

### isClosed

▸ **isClosed**(): `boolean`

Returns true if the connection has been closed.

#### Returns

`boolean`

#### Inherited from

[DatabaseConnection](DatabaseConnection.md).[isClosed](DatabaseConnection.md#isclosed)

#### Defined in

[src/DatabaseConnection.ts:181](https://github.com/breautek/storm/blob/f198938/src/DatabaseConnection.ts#L181)

___

### isOpen

▸ **isOpen**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/MySQLConnection.ts:69](https://github.com/breautek/storm/blob/f198938/src/MySQLConnection.ts#L69)

___

### isReadOnly

▸ **isReadOnly**(): `boolean`

Returns true if connection was created without
write access

#### Returns

`boolean`

boolean

#### Inherited from

[DatabaseConnection](DatabaseConnection.md).[isReadOnly](DatabaseConnection.md#isreadonly)

#### Defined in

[src/DatabaseConnection.ts:99](https://github.com/breautek/storm/blob/f198938/src/DatabaseConnection.ts#L99)

___

### isTransaction

▸ **isTransaction**(): `boolean`

Implementation method to determine if the connection is in an active transaction.

#### Returns

`boolean`

boolean

#### Overrides

[DatabaseConnection](DatabaseConnection.md).[isTransaction](DatabaseConnection.md#istransaction)

#### Defined in

[src/MySQLConnection.ts:65](https://github.com/breautek/storm/blob/f198938/src/MySQLConnection.ts#L65)

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
| `query` | [`Query`](Query.md)<`any`, `any`, `any`\> | The database query |

#### Returns

`Promise`<`TQueryResult`\>

Promise<TQueryResult>

#### Inherited from

[DatabaseConnection](DatabaseConnection.md).[query](DatabaseConnection.md#query)

#### Defined in

[src/DatabaseConnection.ts:131](https://github.com/breautek/storm/blob/f198938/src/DatabaseConnection.ts#L131)

___

### rollback

▸ **rollback**(): `Promise`<`void`\>

Rollsback a transaction. This will end a transaction.

#### Returns

`Promise`<`void`\>

Promise<void>

#### Overrides

[DatabaseConnection](DatabaseConnection.md).[rollback](DatabaseConnection.md#rollback)

#### Defined in

[src/MySQLConnection.ts:158](https://github.com/breautek/storm/blob/f198938/src/MySQLConnection.ts#L158)

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

[DatabaseConnection](DatabaseConnection.md).[setInstantiationStack](DatabaseConnection.md#setinstantiationstack)

#### Defined in

[src/DatabaseConnection.ts:63](https://github.com/breautek/storm/blob/f198938/src/DatabaseConnection.ts#L63)

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

[DatabaseConnection](DatabaseConnection.md).[setTimeout](DatabaseConnection.md#settimeout)

#### Defined in

[src/DatabaseConnection.ts:108](https://github.com/breautek/storm/blob/f198938/src/DatabaseConnection.ts#L108)

___

### startTransaction

▸ **startTransaction**(): `Promise`<`void`\>

Implementation method to start a transaction.

#### Returns

`Promise`<`void`\>

Promise<void>

#### Overrides

[DatabaseConnection](DatabaseConnection.md).[startTransaction](DatabaseConnection.md#starttransaction)

#### Defined in

[src/MySQLConnection.ts:132](https://github.com/breautek/storm/blob/f198938/src/MySQLConnection.ts#L132)

___

### stream

▸ **stream**(`query`, `streamOptions?`): `Readable`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | [`Query`](Query.md)<`any`, `any`, `any`\> | The database query |
| `streamOptions?` | `any` | Stream options |

#### Returns

`Readable`

Readable

#### Inherited from

[DatabaseConnection](DatabaseConnection.md).[stream](DatabaseConnection.md#stream)

#### Defined in

[src/DatabaseConnection.ts:151](https://github.com/breautek/storm/blob/f198938/src/DatabaseConnection.ts#L151)
