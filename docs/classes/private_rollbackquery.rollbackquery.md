[@breautek/storm](../README.md) / [private/RollbackQuery](../modules/private_rollbackquery.md) / RollbackQuery

# Class: RollbackQuery

[private/RollbackQuery](../modules/private_rollbackquery.md).RollbackQuery

## Hierarchy

* [*Query*](query.query-1.md)<*void*, *void*\>

  ↳ **RollbackQuery**

## Table of contents

### Constructors

- [constructor](private_rollbackquery.rollbackquery.md#constructor)

### Methods

- [\_getQuery](private_rollbackquery.rollbackquery.md#_getquery)
- [execute](private_rollbackquery.rollbackquery.md#execute)
- [getParameters](private_rollbackquery.rollbackquery.md#getparameters)
- [getParametersForQuery](private_rollbackquery.rollbackquery.md#getparametersforquery)
- [getQuery](private_rollbackquery.rollbackquery.md#getquery)
- [onPostProcess](private_rollbackquery.rollbackquery.md#onpostprocess)

## Constructors

### constructor

\+ **new RollbackQuery**(`parameters?`: *void*): [*RollbackQuery*](private_rollbackquery.rollbackquery.md)

#### Parameters:

Name | Type |
------ | ------ |
`parameters?` | *void* |

**Returns:** [*RollbackQuery*](private_rollbackquery.rollbackquery.md)

Inherited from: [Query](query.query-1.md)

Defined in: [src/Query.ts:21](https://github.com/breautek/storm/blob/8748493/src/Query.ts#L21)

## Methods

### \_getQuery

▸ `Protected`**_getQuery**(): *string*

**Returns:** *string*

Overrides: [Query](query.query-1.md)

Defined in: [src/private/RollbackQuery.ts:20](https://github.com/breautek/storm/blob/8748493/src/private/RollbackQuery.ts#L20)

___

### execute

▸ **execute**(`connection`: [*IDatabaseConnection*](../interfaces/idatabaseconnection.idatabaseconnection-1.md)): *Promise*<*void*\>

#### Parameters:

Name | Type |
------ | ------ |
`connection` | [*IDatabaseConnection*](../interfaces/idatabaseconnection.idatabaseconnection-1.md) |

**Returns:** *Promise*<*void*\>

Inherited from: [Query](query.query-1.md)

Defined in: [src/Query.ts:52](https://github.com/breautek/storm/blob/8748493/src/Query.ts#L52)

___

### getParameters

▸ **getParameters**(): *void*

**Returns:** *void*

Inherited from: [Query](query.query-1.md)

Defined in: [src/Query.ts:27](https://github.com/breautek/storm/blob/8748493/src/Query.ts#L27)

___

### getParametersForQuery

▸ **getParametersForQuery**(): *IDictionary*<*any*\>

**Returns:** *IDictionary*<*any*\>

Inherited from: [Query](query.query-1.md)

Defined in: [src/Query.ts:31](https://github.com/breautek/storm/blob/8748493/src/Query.ts#L31)

___

### getQuery

▸ **getQuery**(): *string*

**Returns:** *string*

Inherited from: [Query](query.query-1.md)

Defined in: [src/Query.ts:37](https://github.com/breautek/storm/blob/8748493/src/Query.ts#L37)

___

### onPostProcess

▸ **onPostProcess**(`connection`: [*IDatabaseConnection*](../interfaces/idatabaseconnection.idatabaseconnection-1.md), `resultSet`: *void*): *Promise*<*void*\>

Override to augment/manipulate the returned result set.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`connection` | [*IDatabaseConnection*](../interfaces/idatabaseconnection.idatabaseconnection-1.md) | The connection object used for this query execution. Useful if further queries are required.   |
`resultSet` | *void* | - |

**Returns:** *Promise*<*void*\>

Inherited from: [Query](query.query-1.md)

Defined in: [src/Query.ts:47](https://github.com/breautek/storm/blob/8748493/src/Query.ts#L47)
