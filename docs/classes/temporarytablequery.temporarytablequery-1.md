[@breautek/storm](../README.md) / [TemporaryTableQuery](../modules/temporarytablequery.md) / TemporaryTableQuery

# Class: TemporaryTableQuery

[TemporaryTableQuery](../modules/temporarytablequery.md).TemporaryTableQuery

## Hierarchy

* [*Query*](query.query-1.md)<any\>

  ↳ **TemporaryTableQuery**

## Table of contents

### Constructors

- [constructor](temporarytablequery.temporarytablequery-1.md#constructor)

### Methods

- [\_getQuery](temporarytablequery.temporarytablequery-1.md#_getquery)
- [execute](temporarytablequery.temporarytablequery-1.md#execute)
- [getParameters](temporarytablequery.temporarytablequery-1.md#getparameters)
- [getParametersForQuery](temporarytablequery.temporarytablequery-1.md#getparametersforquery)
- [getQuery](temporarytablequery.temporarytablequery-1.md#getquery)
- [onPostProcess](temporarytablequery.temporarytablequery-1.md#onpostprocess)

## Constructors

### constructor

\+ **new TemporaryTableQuery**(`parameters?`: *any*): [*TemporaryTableQuery*](temporarytablequery.temporarytablequery-1.md)

#### Parameters:

| Name | Type |
| :------ | :------ |
| `parameters?` | *any* |

**Returns:** [*TemporaryTableQuery*](temporarytablequery.temporarytablequery-1.md)

Inherited from: [Query](query.query-1.md)

Defined in: [src/Query.ts:21](https://github.com/breautek/storm/blob/2614a1c/src/Query.ts#L21)

## Methods

### \_getQuery

▸ `Protected`**_getQuery**(): *string*

**Returns:** *string*

Overrides: [Query](query.query-1.md)

Defined in: [src/TemporaryTableQuery.ts:35](https://github.com/breautek/storm/blob/2614a1c/src/TemporaryTableQuery.ts#L35)

___

### execute

▸ **execute**(`connection`: [*IDatabaseConnection*](../interfaces/idatabaseconnection.idatabaseconnection-1.md)): *Promise*<any\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `connection` | [*IDatabaseConnection*](../interfaces/idatabaseconnection.idatabaseconnection-1.md) |

**Returns:** *Promise*<any\>

Inherited from: [Query](query.query-1.md)

Defined in: [src/Query.ts:52](https://github.com/breautek/storm/blob/2614a1c/src/Query.ts#L52)

___

### getParameters

▸ **getParameters**(): *any*

**Returns:** *any*

Inherited from: [Query](query.query-1.md)

Defined in: [src/Query.ts:27](https://github.com/breautek/storm/blob/2614a1c/src/Query.ts#L27)

___

### getParametersForQuery

▸ **getParametersForQuery**(): *IDictionary*<any\>

**Returns:** *IDictionary*<any\>

Overrides: [Query](query.query-1.md)

Defined in: [src/TemporaryTableQuery.ts:27](https://github.com/breautek/storm/blob/2614a1c/src/TemporaryTableQuery.ts#L27)

___

### getQuery

▸ **getQuery**(): *string*

**Returns:** *string*

Inherited from: [Query](query.query-1.md)

Defined in: [src/Query.ts:37](https://github.com/breautek/storm/blob/2614a1c/src/Query.ts#L37)

___

### onPostProcess

▸ **onPostProcess**(`connection`: [*IDatabaseConnection*](../interfaces/idatabaseconnection.idatabaseconnection-1.md), `resultSet`: *any*): *Promise*<any\>

Override to augment/manipulate the returned result set.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `connection` | [*IDatabaseConnection*](../interfaces/idatabaseconnection.idatabaseconnection-1.md) | The connection object used for this query execution. Useful if further queries are required. |
| `resultSet` | *any* | - |

**Returns:** *Promise*<any\>

Inherited from: [Query](query.query-1.md)

Defined in: [src/Query.ts:47](https://github.com/breautek/storm/blob/2614a1c/src/Query.ts#L47)
