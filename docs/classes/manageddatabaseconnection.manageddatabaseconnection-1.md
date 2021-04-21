[@breautek/storm](../README.md) / [ManagedDatabaseConnection](../modules/manageddatabaseconnection.md) / ManagedDatabaseConnection

# Class: ManagedDatabaseConnection

[ManagedDatabaseConnection](../modules/manageddatabaseconnection.md).ManagedDatabaseConnection

## Implements

* [*IDatabaseConnection*](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

## Table of contents

### Constructors

- [constructor](manageddatabaseconnection.manageddatabaseconnection-1.md#constructor)

### Methods

- [close](manageddatabaseconnection.manageddatabaseconnection-1.md#close)
- [commit](manageddatabaseconnection.manageddatabaseconnection-1.md#commit)
- [getAPI](manageddatabaseconnection.manageddatabaseconnection-1.md#getapi)
- [getInstantiationStack](manageddatabaseconnection.manageddatabaseconnection-1.md#getinstantiationstack)
- [getTimeout](manageddatabaseconnection.manageddatabaseconnection-1.md#gettimeout)
- [hasConnection](manageddatabaseconnection.manageddatabaseconnection-1.md#hasconnection)
- [isClosed](manageddatabaseconnection.manageddatabaseconnection-1.md#isclosed)
- [isManaged](manageddatabaseconnection.manageddatabaseconnection-1.md#ismanaged)
- [isReadOnly](manageddatabaseconnection.manageddatabaseconnection-1.md#isreadonly)
- [isTransaction](manageddatabaseconnection.manageddatabaseconnection-1.md#istransaction)
- [isWriteRequired](manageddatabaseconnection.manageddatabaseconnection-1.md#iswriterequired)
- [query](manageddatabaseconnection.manageddatabaseconnection-1.md#query)
- [rollback](manageddatabaseconnection.manageddatabaseconnection-1.md#rollback)
- [setConnection](manageddatabaseconnection.manageddatabaseconnection-1.md#setconnection)
- [setInstantiationStack](manageddatabaseconnection.manageddatabaseconnection-1.md#setinstantiationstack)
- [setTimeout](manageddatabaseconnection.manageddatabaseconnection-1.md#settimeout)
- [startTransaction](manageddatabaseconnection.manageddatabaseconnection-1.md#starttransaction)
- [stream](manageddatabaseconnection.manageddatabaseconnection-1.md#stream)

## Constructors

### constructor

\+ **new ManagedDatabaseConnection**(`requiresWrite?`: *boolean*): [*ManagedDatabaseConnection*](manageddatabaseconnection.manageddatabaseconnection-1.md)

#### Parameters:

| Name | Type | Default value |
| :------ | :------ | :------ |
| `requiresWrite` | *boolean* | false |

**Returns:** [*ManagedDatabaseConnection*](manageddatabaseconnection.manageddatabaseconnection-1.md)

Defined in: [src/ManagedDatabaseConnection.ts:34](https://github.com/breautek/storm/blob/2614a1c/src/ManagedDatabaseConnection.ts#L34)

## Methods

### close

▸ **close**(`forceClose?`: *boolean*): *Promise*<void\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `forceClose?` | *boolean* |

**Returns:** *Promise*<void\>

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/ManagedDatabaseConnection.ts:149](https://github.com/breautek/storm/blob/2614a1c/src/ManagedDatabaseConnection.ts#L149)

___

### commit

▸ **commit**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/ManagedDatabaseConnection.ts:186](https://github.com/breautek/storm/blob/2614a1c/src/ManagedDatabaseConnection.ts#L186)

___

### getAPI

▸ **getAPI**(): *any*

**Returns:** *any*

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/ManagedDatabaseConnection.ts:234](https://github.com/breautek/storm/blob/2614a1c/src/ManagedDatabaseConnection.ts#L234)

___

### getInstantiationStack

▸ **getInstantiationStack**(): *string*

**Returns:** *string*

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/ManagedDatabaseConnection.ts:102](https://github.com/breautek/storm/blob/2614a1c/src/ManagedDatabaseConnection.ts#L102)

___

### getTimeout

▸ **getTimeout**(): *number*

**Returns:** *number*

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/ManagedDatabaseConnection.ts:126](https://github.com/breautek/storm/blob/2614a1c/src/ManagedDatabaseConnection.ts#L126)

___

### hasConnection

▸ **hasConnection**(): *boolean*

**Returns:** *boolean*

Defined in: [src/ManagedDatabaseConnection.ts:89](https://github.com/breautek/storm/blob/2614a1c/src/ManagedDatabaseConnection.ts#L89)

___

### isClosed

▸ **isClosed**(): *boolean*

**Returns:** *boolean*

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/ManagedDatabaseConnection.ts:72](https://github.com/breautek/storm/blob/2614a1c/src/ManagedDatabaseConnection.ts#L72)

___

### isManaged

▸ **isManaged**(): *boolean*

**Returns:** *boolean*

Defined in: [src/ManagedDatabaseConnection.ts:85](https://github.com/breautek/storm/blob/2614a1c/src/ManagedDatabaseConnection.ts#L85)

___

### isReadOnly

▸ **isReadOnly**(): *boolean*

**Returns:** *boolean*

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/ManagedDatabaseConnection.ts:111](https://github.com/breautek/storm/blob/2614a1c/src/ManagedDatabaseConnection.ts#L111)

___

### isTransaction

▸ **isTransaction**(): *boolean*

**Returns:** *boolean*

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/ManagedDatabaseConnection.ts:177](https://github.com/breautek/storm/blob/2614a1c/src/ManagedDatabaseConnection.ts#L177)

___

### isWriteRequired

▸ **isWriteRequired**(): *boolean*

**Returns:** *boolean*

Defined in: [src/ManagedDatabaseConnection.ts:81](https://github.com/breautek/storm/blob/2614a1c/src/ManagedDatabaseConnection.ts#L81)

___

### query

▸ **query**(`query`: *string* \| [*Query*](query.query-1.md)<any, any, any\>, `params?`: *any*): *Promise*<any\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | *string* \| [*Query*](query.query-1.md)<any, any, any\> |
| `params?` | *any* |

**Returns:** *Promise*<any\>

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/ManagedDatabaseConnection.ts:136](https://github.com/breautek/storm/blob/2614a1c/src/ManagedDatabaseConnection.ts#L136)

___

### rollback

▸ **rollback**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/ManagedDatabaseConnection.ts:199](https://github.com/breautek/storm/blob/2614a1c/src/ManagedDatabaseConnection.ts#L199)

___

### setConnection

▸ **setConnection**(`connection`: [*IDatabaseConnection*](../interfaces/idatabaseconnection.idatabaseconnection-1.md)): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `connection` | [*IDatabaseConnection*](../interfaces/idatabaseconnection.idatabaseconnection-1.md) |

**Returns:** *void*

Defined in: [src/ManagedDatabaseConnection.ts:42](https://github.com/breautek/storm/blob/2614a1c/src/ManagedDatabaseConnection.ts#L42)

___

### setInstantiationStack

▸ **setInstantiationStack**(`stack`: *string*): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `stack` | *string* |

**Returns:** *void*

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/ManagedDatabaseConnection.ts:93](https://github.com/breautek/storm/blob/2614a1c/src/ManagedDatabaseConnection.ts#L93)

___

### setTimeout

▸ **setTimeout**(`timeout`: *number*): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `timeout` | *number* |

**Returns:** *void*

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/ManagedDatabaseConnection.ts:120](https://github.com/breautek/storm/blob/2614a1c/src/ManagedDatabaseConnection.ts#L120)

___

### startTransaction

▸ **startTransaction**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/ManagedDatabaseConnection.ts:164](https://github.com/breautek/storm/blob/2614a1c/src/ManagedDatabaseConnection.ts#L164)

___

### stream

▸ **stream**(`query`: *string* \| [*Query*](query.query-1.md)<any, any, any\>, `params?`: *any*, `streamOptions?`: *any*): *Readable*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | *string* \| [*Query*](query.query-1.md)<any, any, any\> |
| `params?` | *any* |
| `streamOptions?` | *any* |

**Returns:** *Readable*

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/ManagedDatabaseConnection.ts:145](https://github.com/breautek/storm/blob/2614a1c/src/ManagedDatabaseConnection.ts#L145)
