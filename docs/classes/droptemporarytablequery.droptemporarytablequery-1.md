[@breautek/storm](../README.md) / [DropTemporaryTableQuery](../modules/droptemporarytablequery.md) / DropTemporaryTableQuery

# Class: DropTemporaryTableQuery

[DropTemporaryTableQuery](../modules/droptemporarytablequery.md).DropTemporaryTableQuery

## Hierarchy

* [*Query*](query.query-1.md)<[*IDropTemporaryTableQueryInput*](../interfaces/droptemporarytablequery.idroptemporarytablequeryinput.md)\>

  ↳ **DropTemporaryTableQuery**

## Table of contents

### Constructors

- [constructor](droptemporarytablequery.droptemporarytablequery-1.md#constructor)

### Methods

- [\_getQuery](droptemporarytablequery.droptemporarytablequery-1.md#_getquery)
- [execute](droptemporarytablequery.droptemporarytablequery-1.md#execute)
- [getParameters](droptemporarytablequery.droptemporarytablequery-1.md#getparameters)
- [getParametersForQuery](droptemporarytablequery.droptemporarytablequery-1.md#getparametersforquery)
- [getQuery](droptemporarytablequery.droptemporarytablequery-1.md#getquery)
- [onPostProcess](droptemporarytablequery.droptemporarytablequery-1.md#onpostprocess)

## Constructors

### constructor

\+ **new DropTemporaryTableQuery**(`parameters?`: [*IDropTemporaryTableQueryInput*](../interfaces/droptemporarytablequery.idroptemporarytablequeryinput.md)): [*DropTemporaryTableQuery*](droptemporarytablequery.droptemporarytablequery-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`parameters?` | [*IDropTemporaryTableQueryInput*](../interfaces/droptemporarytablequery.idroptemporarytablequeryinput.md) |

**Returns:** [*DropTemporaryTableQuery*](droptemporarytablequery.droptemporarytablequery-1.md)

Inherited from: [Query](query.query-1.md)

Defined in: [src/Query.ts:21](https://github.com/breautek/storm/blob/547898b/src/Query.ts#L21)

## Methods

### \_getQuery

▸ `Protected`**_getQuery**(): *string*

**Returns:** *string*

Overrides: [Query](query.query-1.md)

Defined in: [src/DropTemporaryTableQuery.ts:29](https://github.com/breautek/storm/blob/547898b/src/DropTemporaryTableQuery.ts#L29)

___

### execute

▸ **execute**(`connection`: [*IDatabaseConnection*](../interfaces/idatabaseconnection.idatabaseconnection-1.md)): *Promise*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`connection` | [*IDatabaseConnection*](../interfaces/idatabaseconnection.idatabaseconnection-1.md) |

**Returns:** *Promise*<*any*\>

Inherited from: [Query](query.query-1.md)

Defined in: [src/Query.ts:52](https://github.com/breautek/storm/blob/547898b/src/Query.ts#L52)

___

### getParameters

▸ **getParameters**(): [*IDropTemporaryTableQueryInput*](../interfaces/droptemporarytablequery.idroptemporarytablequeryinput.md)

**Returns:** [*IDropTemporaryTableQueryInput*](../interfaces/droptemporarytablequery.idroptemporarytablequeryinput.md)

Overrides: [Query](query.query-1.md)

Defined in: [src/DropTemporaryTableQuery.ts:25](https://github.com/breautek/storm/blob/547898b/src/DropTemporaryTableQuery.ts#L25)

___

### getParametersForQuery

▸ **getParametersForQuery**(): *IDictionary*<*any*\>

**Returns:** *IDictionary*<*any*\>

Inherited from: [Query](query.query-1.md)

Defined in: [src/Query.ts:31](https://github.com/breautek/storm/blob/547898b/src/Query.ts#L31)

___

### getQuery

▸ **getQuery**(): *string*

**Returns:** *string*

Inherited from: [Query](query.query-1.md)

Defined in: [src/Query.ts:37](https://github.com/breautek/storm/blob/547898b/src/Query.ts#L37)

___

### onPostProcess

▸ **onPostProcess**(`connection`: [*IDatabaseConnection*](../interfaces/idatabaseconnection.idatabaseconnection-1.md), `resultSet`: *any*[]): *Promise*<*any*[]\>

Override to augment/manipulate the returned result set.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`connection` | [*IDatabaseConnection*](../interfaces/idatabaseconnection.idatabaseconnection-1.md) | The connection object used for this query execution. Useful if further queries are required.   |
`resultSet` | *any*[] | - |

**Returns:** *Promise*<*any*[]\>

Inherited from: [Query](query.query-1.md)

Defined in: [src/Query.ts:47](https://github.com/breautek/storm/blob/547898b/src/Query.ts#L47)
