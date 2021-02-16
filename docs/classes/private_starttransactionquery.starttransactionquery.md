[@breautek/storm](../README.md) / [private/StartTransactionQuery](../modules/private_starttransactionquery.md) / StartTransactionQuery

# Class: StartTransactionQuery

[private/StartTransactionQuery](../modules/private_starttransactionquery.md).StartTransactionQuery

## Hierarchy

* [*Query*](query.query-1.md)<*void*, *void*\>

  ↳ **StartTransactionQuery**

## Table of contents

### Constructors

- [constructor](private_starttransactionquery.starttransactionquery.md#constructor)

### Methods

- [\_getQuery](private_starttransactionquery.starttransactionquery.md#_getquery)
- [execute](private_starttransactionquery.starttransactionquery.md#execute)
- [getParameters](private_starttransactionquery.starttransactionquery.md#getparameters)
- [getParametersForQuery](private_starttransactionquery.starttransactionquery.md#getparametersforquery)
- [getQuery](private_starttransactionquery.starttransactionquery.md#getquery)
- [onPostProcess](private_starttransactionquery.starttransactionquery.md#onpostprocess)

## Constructors

### constructor

\+ **new StartTransactionQuery**(`parameters?`: *void*): [*StartTransactionQuery*](private_starttransactionquery.starttransactionquery.md)

#### Parameters:

Name | Type |
------ | ------ |
`parameters?` | *void* |

**Returns:** [*StartTransactionQuery*](private_starttransactionquery.starttransactionquery.md)

Inherited from: [Query](query.query-1.md)

Defined in: [src/Query.ts:21](https://github.com/breautek/storm/blob/51bc6e5/src/Query.ts#L21)

## Methods

### \_getQuery

▸ `Protected`**_getQuery**(): *string*

**Returns:** *string*

Overrides: [Query](query.query-1.md)

Defined in: [src/private/StartTransactionQuery.ts:20](https://github.com/breautek/storm/blob/51bc6e5/src/private/StartTransactionQuery.ts#L20)

___

### execute

▸ **execute**(`connection`: [*IDatabaseConnection*](../interfaces/idatabaseconnection.idatabaseconnection-1.md)): *Promise*<*void*\>

#### Parameters:

Name | Type |
------ | ------ |
`connection` | [*IDatabaseConnection*](../interfaces/idatabaseconnection.idatabaseconnection-1.md) |

**Returns:** *Promise*<*void*\>

Inherited from: [Query](query.query-1.md)

Defined in: [src/Query.ts:52](https://github.com/breautek/storm/blob/51bc6e5/src/Query.ts#L52)

___

### getParameters

▸ **getParameters**(): *void*

**Returns:** *void*

Inherited from: [Query](query.query-1.md)

Defined in: [src/Query.ts:27](https://github.com/breautek/storm/blob/51bc6e5/src/Query.ts#L27)

___

### getParametersForQuery

▸ **getParametersForQuery**(): *IDictionary*<*any*\>

**Returns:** *IDictionary*<*any*\>

Inherited from: [Query](query.query-1.md)

Defined in: [src/Query.ts:31](https://github.com/breautek/storm/blob/51bc6e5/src/Query.ts#L31)

___

### getQuery

▸ **getQuery**(): *string*

**Returns:** *string*

Inherited from: [Query](query.query-1.md)

Defined in: [src/Query.ts:37](https://github.com/breautek/storm/blob/51bc6e5/src/Query.ts#L37)

___

### onPostProcess

▸ **onPostProcess**(`connection`: [*IDatabaseConnection*](../interfaces/idatabaseconnection.idatabaseconnection-1.md), `resultSet`: *void*[]): *Promise*<*void*[]\>

Override to augment/manipulate the returned result set.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`connection` | [*IDatabaseConnection*](../interfaces/idatabaseconnection.idatabaseconnection-1.md) | The connection object used for this query execution. Useful if further queries are required.   |
`resultSet` | *void*[] | - |

**Returns:** *Promise*<*void*[]\>

Inherited from: [Query](query.query-1.md)

Defined in: [src/Query.ts:47](https://github.com/breautek/storm/blob/51bc6e5/src/Query.ts#L47)
