[@breautek/storm](../README.md) / MySQLConnection

# Class: MySQLConnection

Do not call `new Database` directly. Use `Database.getConnection` to create a `DatabaseConnection` object.

**`Abstract`**

**`Implements`**

`IDatabaseConnection`

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

[src/MySQLConnection.ts:50](https://github.com/breautek/storm/blob/5fbba2d/src/MySQLConnection.ts#L50)

## Methods

### \_close

▸ `Protected` **_close**(`forceClose`): `Promise`<`void`\>

Implementation to close the connection, if `forceClose` is true, close the connection no matter what.
Silently error if it means the connection is closed.

**`Async`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `forceClose` | `boolean` | boolean, if `true`, should close the connection no matter what. |

#### Returns

`Promise`<`void`\>

Promise<void>

#### Overrides

[DatabaseConnection](DatabaseConnection.md).[_close](DatabaseConnection.md#_close)

#### Defined in

[src/MySQLConnection.ts:206](https://github.com/breautek/storm/blob/5fbba2d/src/MySQLConnection.ts#L206)

___

### \_query

▸ `Protected` **_query**(`query`, `params?`): `Promise`<`any`\>

Implementation method to return a dataset from the database

**`Async`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | The database query |
| `params?` | `any` | The query parameters |

#### Returns

`Promise`<`any`\>

Promise

#### Overrides

[DatabaseConnection](DatabaseConnection.md).[_query](DatabaseConnection.md#_query)

#### Defined in

[src/MySQLConnection.ts:78](https://github.com/breautek/storm/blob/5fbba2d/src/MySQLConnection.ts#L78)

___

### \_stream

▸ `Protected` **_stream**(`query`, `params?`, `streamOptions?`): `Readable`

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

#### Overrides

[DatabaseConnection](DatabaseConnection.md).[_stream](DatabaseConnection.md#_stream)

#### Defined in

[src/MySQLConnection.ts:127](https://github.com/breautek/storm/blob/5fbba2d/src/MySQLConnection.ts#L127)

___

### close

▸ **close**(`forceClose?`): `Promise`<`void`\>

Closes the connection. May error if connection has an active transaction.
if `forceClose` boolean is true, it will force close the connection, regardless
of transaction state.

**`Async`**

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

[src/DatabaseConnection.ts:169](https://github.com/breautek/storm/blob/5fbba2d/src/DatabaseConnection.ts#L169)

___

### commit

▸ **commit**(): `Promise`<`void`\>

Commits a transaction. This will end a transaction.

**`Abstract`**

**`Async`**

#### Returns

`Promise`<`void`\>

Promise<void>

#### Overrides

[DatabaseConnection](DatabaseConnection.md).[commit](DatabaseConnection.md#commit)

#### Defined in

[src/MySQLConnection.ts:190](https://github.com/breautek/storm/blob/5fbba2d/src/MySQLConnection.ts#L190)

___

### endTransaction

▸ **endTransaction**(`requiresRollback?`): `Promise`<`void`\>

Ends a transaction. if `requiresRollback` is `true`, then `rollback()` is invoked. Otherwise, `commit()` is invoked.

**`Abstract`**

**`Async`**

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `requiresRollback` | `boolean` | `false` | optional boolean |

#### Returns

`Promise`<`void`\>

Promise<void>

#### Overrides

[DatabaseConnection](DatabaseConnection.md).[endTransaction](DatabaseConnection.md#endtransaction)

#### Defined in

[src/MySQLConnection.ts:170](https://github.com/breautek/storm/blob/5fbba2d/src/MySQLConnection.ts#L170)

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

[src/DatabaseConnection.ts:91](https://github.com/breautek/storm/blob/5fbba2d/src/DatabaseConnection.ts#L91)

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

[src/DatabaseConnection.ts:73](https://github.com/breautek/storm/blob/5fbba2d/src/DatabaseConnection.ts#L73)

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

[src/DatabaseConnection.ts:121](https://github.com/breautek/storm/blob/5fbba2d/src/DatabaseConnection.ts#L121)

___

### isClosed

▸ **isClosed**(): `boolean`

Returns true if the connection has been closed.

#### Returns

`boolean`

#### Inherited from

[DatabaseConnection](DatabaseConnection.md).[isClosed](DatabaseConnection.md#isclosed)

#### Defined in

[src/DatabaseConnection.ts:182](https://github.com/breautek/storm/blob/5fbba2d/src/DatabaseConnection.ts#L182)

___

### isOpen

▸ **isOpen**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/MySQLConnection.ts:73](https://github.com/breautek/storm/blob/5fbba2d/src/MySQLConnection.ts#L73)

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

[src/DatabaseConnection.ts:100](https://github.com/breautek/storm/blob/5fbba2d/src/DatabaseConnection.ts#L100)

___

### isTransaction

▸ **isTransaction**(): `boolean`

Implementation method to determine if the connection is in an active transaction.

**`Abstract`**

#### Returns

`boolean`

boolean

#### Overrides

[DatabaseConnection](DatabaseConnection.md).[isTransaction](DatabaseConnection.md#istransaction)

#### Defined in

[src/MySQLConnection.ts:69](https://github.com/breautek/storm/blob/5fbba2d/src/MySQLConnection.ts#L69)

___

### query

▸ **query**<`TQueryResult`\>(`query`): `Promise`<`TQueryResult`\>

Queries the database for a dataset.

**`Async`**

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

[src/DatabaseConnection.ts:132](https://github.com/breautek/storm/blob/5fbba2d/src/DatabaseConnection.ts#L132)

___

### rollback

▸ **rollback**(): `Promise`<`void`\>

Rollsback a transaction. This will end a transaction.

**`Abstract`**

**`Async`**

#### Returns

`Promise`<`void`\>

Promise<void>

#### Overrides

[DatabaseConnection](DatabaseConnection.md).[rollback](DatabaseConnection.md#rollback)

#### Defined in

[src/MySQLConnection.ts:174](https://github.com/breautek/storm/blob/5fbba2d/src/MySQLConnection.ts#L174)

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

[src/DatabaseConnection.ts:64](https://github.com/breautek/storm/blob/5fbba2d/src/DatabaseConnection.ts#L64)

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

[src/DatabaseConnection.ts:109](https://github.com/breautek/storm/blob/5fbba2d/src/DatabaseConnection.ts#L109)

___

### startTransaction

▸ **startTransaction**(`isolationLevel?`): `Promise`<`void`\>

Implementation method to start a transaction.

**`Abstract`**

**`Async`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `isolationLevel?` | [`IsolationLevel`](../enums/IsolationLevel.md) |

#### Returns

`Promise`<`void`\>

Promise<void>

#### Overrides

[DatabaseConnection](DatabaseConnection.md).[startTransaction](DatabaseConnection.md#starttransaction)

#### Defined in

[src/MySQLConnection.ts:146](https://github.com/breautek/storm/blob/5fbba2d/src/MySQLConnection.ts#L146)

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

[src/DatabaseConnection.ts:152](https://github.com/breautek/storm/blob/5fbba2d/src/DatabaseConnection.ts#L152)
