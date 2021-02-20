[@breautek/storm](../README.md) / [Query](../modules/query.md) / Query

# Class: Query<TQueryParameters, TQueryResultSet, TQueryPostProcessedResultSet\>

[Query](../modules/query.md).Query

## Type parameters

Name | Default |
------ | ------ |
`TQueryParameters` | *any* |
`TQueryResultSet` | *any* |
`TQueryPostProcessedResultSet` | TQueryResultSet |

## Hierarchy

* **Query**

  ↳ [*DropTemporaryTableQuery*](droptemporarytablequery.droptemporarytablequery-1.md)

  ↳ [*RawQuery*](rawquery.rawquery-1.md)

  ↳ [*TemporaryTableQuery*](temporarytablequery.temporarytablequery-1.md)

  ↳ [*CommitQuery*](private_commitquery.commitquery.md)

  ↳ [*RollbackQuery*](private_rollbackquery.rollbackquery.md)

  ↳ [*StartTransactionQuery*](private_starttransactionquery.starttransactionquery.md)

## Table of contents

### Constructors

- [constructor](query.query-1.md#constructor)

### Methods

- [\_getQuery](query.query-1.md#_getquery)
- [execute](query.query-1.md#execute)
- [getParameters](query.query-1.md#getparameters)
- [getParametersForQuery](query.query-1.md#getparametersforquery)
- [getQuery](query.query-1.md#getquery)
- [onPostProcess](query.query-1.md#onpostprocess)

## Constructors

### constructor

\+ **new Query**<TQueryParameters, TQueryResultSet, TQueryPostProcessedResultSet\>(`parameters?`: TQueryParameters): [*Query*](query.query-1.md)<TQueryParameters, TQueryResultSet, TQueryPostProcessedResultSet\>

#### Type parameters:

Name | Default |
------ | ------ |
`TQueryParameters` | *any* |
`TQueryResultSet` | *any* |
`TQueryPostProcessedResultSet` | TQueryResultSet |

#### Parameters:

Name | Type |
------ | ------ |
`parameters?` | TQueryParameters |

**Returns:** [*Query*](query.query-1.md)<TQueryParameters, TQueryResultSet, TQueryPostProcessedResultSet\>

Defined in: [src/Query.ts:21](https://github.com/breautek/storm/blob/4e204d2/src/Query.ts#L21)

## Methods

### \_getQuery

▸ `Protected` `Abstract`**_getQuery**(): *string*

**Returns:** *string*

Defined in: [src/Query.ts:35](https://github.com/breautek/storm/blob/4e204d2/src/Query.ts#L35)

___

### execute

▸ **execute**(`connection`: [*IDatabaseConnection*](../interfaces/idatabaseconnection.idatabaseconnection-1.md)): *Promise*<TQueryPostProcessedResultSet\>

#### Parameters:

Name | Type |
------ | ------ |
`connection` | [*IDatabaseConnection*](../interfaces/idatabaseconnection.idatabaseconnection-1.md) |

**Returns:** *Promise*<TQueryPostProcessedResultSet\>

Defined in: [src/Query.ts:52](https://github.com/breautek/storm/blob/4e204d2/src/Query.ts#L52)

___

### getParameters

▸ **getParameters**(): TQueryParameters

**Returns:** TQueryParameters

Defined in: [src/Query.ts:27](https://github.com/breautek/storm/blob/4e204d2/src/Query.ts#L27)

___

### getParametersForQuery

▸ **getParametersForQuery**(): *IDictionary*<*any*\>

**Returns:** *IDictionary*<*any*\>

Defined in: [src/Query.ts:31](https://github.com/breautek/storm/blob/4e204d2/src/Query.ts#L31)

___

### getQuery

▸ **getQuery**(): *string*

**Returns:** *string*

Defined in: [src/Query.ts:37](https://github.com/breautek/storm/blob/4e204d2/src/Query.ts#L37)

___

### onPostProcess

▸ **onPostProcess**(`connection`: [*IDatabaseConnection*](../interfaces/idatabaseconnection.idatabaseconnection-1.md), `resultSet`: TQueryResultSet[]): *Promise*<TQueryPostProcessedResultSet[]\>

Override to augment/manipulate the returned result set.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`connection` | [*IDatabaseConnection*](../interfaces/idatabaseconnection.idatabaseconnection-1.md) | The connection object used for this query execution. Useful if further queries are required.   |
`resultSet` | TQueryResultSet[] | - |

**Returns:** *Promise*<TQueryPostProcessedResultSet[]\>

Defined in: [src/Query.ts:47](https://github.com/breautek/storm/blob/4e204d2/src/Query.ts#L47)
