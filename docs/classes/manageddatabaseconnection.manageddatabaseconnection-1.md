[@breautek/storm](../README.md) / [ManagedDatabaseConnection](../modules/manageddatabaseconnection.md) / ManagedDatabaseConnection

# Class: ManagedDatabaseConnection

[ManagedDatabaseConnection](../modules/manageddatabaseconnection.md).ManagedDatabaseConnection

## Hierarchy

* **ManagedDatabaseConnection**

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

Name | Type | Default value |
------ | ------ | ------ |
`requiresWrite` | *boolean* | false |

**Returns:** [*ManagedDatabaseConnection*](manageddatabaseconnection.manageddatabaseconnection-1.md)

Defined in: [src/ManagedDatabaseConnection.ts:34](https://github.com/breautek/storm/blob/547898b/src/ManagedDatabaseConnection.ts#L34)

## Methods

### close

▸ **close**(`forceClose?`: *boolean*): *Promise*<*void*\>

#### Parameters:

Name | Type |
------ | ------ |
`forceClose?` | *boolean* |

**Returns:** *Promise*<*void*\>

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/ManagedDatabaseConnection.ts:140](https://github.com/breautek/storm/blob/547898b/src/ManagedDatabaseConnection.ts#L140)

___

### commit

▸ **commit**(): *Promise*<*void*\>

**Returns:** *Promise*<*void*\>

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/ManagedDatabaseConnection.ts:177](https://github.com/breautek/storm/blob/547898b/src/ManagedDatabaseConnection.ts#L177)

___

### getAPI

▸ **getAPI**(): *any*

**Returns:** *any*

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/ManagedDatabaseConnection.ts:225](https://github.com/breautek/storm/blob/547898b/src/ManagedDatabaseConnection.ts#L225)

___

### getInstantiationStack

▸ **getInstantiationStack**(): *string*

**Returns:** *string*

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/ManagedDatabaseConnection.ts:93](https://github.com/breautek/storm/blob/547898b/src/ManagedDatabaseConnection.ts#L93)

___

### getTimeout

▸ **getTimeout**(): *number*

**Returns:** *number*

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/ManagedDatabaseConnection.ts:117](https://github.com/breautek/storm/blob/547898b/src/ManagedDatabaseConnection.ts#L117)

___

### hasConnection

▸ **hasConnection**(): *boolean*

**Returns:** *boolean*

Defined in: [src/ManagedDatabaseConnection.ts:80](https://github.com/breautek/storm/blob/547898b/src/ManagedDatabaseConnection.ts#L80)

___

### isManaged

▸ **isManaged**(): *boolean*

**Returns:** *boolean*

Defined in: [src/ManagedDatabaseConnection.ts:76](https://github.com/breautek/storm/blob/547898b/src/ManagedDatabaseConnection.ts#L76)

___

### isReadOnly

▸ **isReadOnly**(): *boolean*

**Returns:** *boolean*

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/ManagedDatabaseConnection.ts:102](https://github.com/breautek/storm/blob/547898b/src/ManagedDatabaseConnection.ts#L102)

___

### isTransaction

▸ **isTransaction**(): *boolean*

**Returns:** *boolean*

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/ManagedDatabaseConnection.ts:168](https://github.com/breautek/storm/blob/547898b/src/ManagedDatabaseConnection.ts#L168)

___

### isWriteRequired

▸ **isWriteRequired**(): *boolean*

**Returns:** *boolean*

Defined in: [src/ManagedDatabaseConnection.ts:72](https://github.com/breautek/storm/blob/547898b/src/ManagedDatabaseConnection.ts#L72)

___

### query

▸ **query**(`query`: *string* \| [*Query*](query.query-1.md)<*any*, *any*, *any*\>, `params?`: *any*): *Promise*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`query` | *string* \| [*Query*](query.query-1.md)<*any*, *any*, *any*\> |
`params?` | *any* |

**Returns:** *Promise*<*any*\>

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/ManagedDatabaseConnection.ts:127](https://github.com/breautek/storm/blob/547898b/src/ManagedDatabaseConnection.ts#L127)

___

### rollback

▸ **rollback**(): *Promise*<*void*\>

**Returns:** *Promise*<*void*\>

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/ManagedDatabaseConnection.ts:190](https://github.com/breautek/storm/blob/547898b/src/ManagedDatabaseConnection.ts#L190)

___

### setConnection

▸ **setConnection**(`connection`: [*IDatabaseConnection*](../interfaces/idatabaseconnection.idatabaseconnection-1.md)): *void*

#### Parameters:

Name | Type |
------ | ------ |
`connection` | [*IDatabaseConnection*](../interfaces/idatabaseconnection.idatabaseconnection-1.md) |

**Returns:** *void*

Defined in: [src/ManagedDatabaseConnection.ts:42](https://github.com/breautek/storm/blob/547898b/src/ManagedDatabaseConnection.ts#L42)

___

### setInstantiationStack

▸ **setInstantiationStack**(`stack`: *string*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`stack` | *string* |

**Returns:** *void*

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/ManagedDatabaseConnection.ts:84](https://github.com/breautek/storm/blob/547898b/src/ManagedDatabaseConnection.ts#L84)

___

### setTimeout

▸ **setTimeout**(`timeout`: *number*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`timeout` | *number* |

**Returns:** *void*

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/ManagedDatabaseConnection.ts:111](https://github.com/breautek/storm/blob/547898b/src/ManagedDatabaseConnection.ts#L111)

___

### startTransaction

▸ **startTransaction**(): *Promise*<*void*\>

**Returns:** *Promise*<*void*\>

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/ManagedDatabaseConnection.ts:155](https://github.com/breautek/storm/blob/547898b/src/ManagedDatabaseConnection.ts#L155)

___

### stream

▸ **stream**(`query`: *string* \| [*Query*](query.query-1.md)<*any*, *any*, *any*\>, `params?`: *any*, `streamOptions?`: *any*): *Readable*

#### Parameters:

Name | Type |
------ | ------ |
`query` | *string* \| [*Query*](query.query-1.md)<*any*, *any*, *any*\> |
`params?` | *any* |
`streamOptions?` | *any* |

**Returns:** *Readable*

Implementation of: [IDatabaseConnection](../interfaces/idatabaseconnection.idatabaseconnection-1.md)

Defined in: [src/ManagedDatabaseConnection.ts:136](https://github.com/breautek/storm/blob/547898b/src/ManagedDatabaseConnection.ts#L136)
