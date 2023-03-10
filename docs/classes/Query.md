[@breautek/storm](../README.md) / Query

# Class: Query<TQueryParameters, TQueryResultSet, TQueryPostProcessedResultSet\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TQueryParameters` | `any` |
| `TQueryResultSet` | `any` |
| `TQueryPostProcessedResultSet` | `TQueryResultSet` |

## Hierarchy

- **`Query`**

  ↳ [`TemporaryTableQuery`](TemporaryTableQuery.md)

  ↳ [`DropTemporaryTableQuery`](DropTemporaryTableQuery.md)

  ↳ [`RawQuery`](RawQuery.md)

  ↳ [`SetSessionVariableQuery`](SetSessionVariableQuery.md)

## Implements

- [`IQueryable`](../interfaces/IQueryable.md)<`TQueryPostProcessedResultSet`\>

## Table of contents

### Constructors

- [constructor](Query.md#constructor)

### Methods

- [\_getQuery](Query.md#_getquery)
- [execute](Query.md#execute)
- [getParameters](Query.md#getparameters)
- [getParametersForQuery](Query.md#getparametersforquery)
- [getQuery](Query.md#getquery)
- [onPostProcess](Query.md#onpostprocess)
- [onPreQuery](Query.md#onprequery)

## Constructors

### constructor

• **new Query**<`TQueryParameters`, `TQueryResultSet`, `TQueryPostProcessedResultSet`\>(`parameters?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQueryParameters` | `any` |
| `TQueryResultSet` | `any` |
| `TQueryPostProcessedResultSet` | `TQueryResultSet` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters?` | `TQueryParameters` |

#### Defined in

[src/Query.ts:23](https://github.com/breautek/storm/blob/d45307d/src/Query.ts#L23)

## Methods

### \_getQuery

▸ `Protected` `Abstract` **_getQuery**(`connection`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`IDatabaseConnection`](../interfaces/IDatabaseConnection.md) |

#### Returns

`string`

#### Defined in

[src/Query.ts:43](https://github.com/breautek/storm/blob/d45307d/src/Query.ts#L43)

___

### execute

▸ **execute**(`connection`): `Promise`<`TQueryPostProcessedResultSet`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`IDatabaseConnection`](../interfaces/IDatabaseConnection.md) |

#### Returns

`Promise`<`TQueryPostProcessedResultSet`\>

#### Implementation of

[IQueryable](../interfaces/IQueryable.md).[execute](../interfaces/IQueryable.md#execute)

#### Defined in

[src/Query.ts:71](https://github.com/breautek/storm/blob/d45307d/src/Query.ts#L71)

___

### getParameters

▸ **getParameters**(): `TQueryParameters`

#### Returns

`TQueryParameters`

parameters that was passed into the constructor.

#### Defined in

[src/Query.ts:30](https://github.com/breautek/storm/blob/d45307d/src/Query.ts#L30)

___

### getParametersForQuery

▸ **getParametersForQuery**(): `Record`<`string`, `any`\>

Query implementations may override this API to augment the parameters.

#### Returns

`Record`<`string`, `any`\>

parameters that will be used when this query is ran.

#### Implementation of

[IQueryable](../interfaces/IQueryable.md).[getParametersForQuery](../interfaces/IQueryable.md#getparametersforquery)

#### Defined in

[src/Query.ts:39](https://github.com/breautek/storm/blob/d45307d/src/Query.ts#L39)

___

### getQuery

▸ **getQuery**(`connection`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`IDatabaseConnection`](../interfaces/IDatabaseConnection.md) |

#### Returns

`string`

#### Implementation of

[IQueryable](../interfaces/IQueryable.md).[getQuery](../interfaces/IQueryable.md#getquery)

#### Defined in

[src/Query.ts:45](https://github.com/breautek/storm/blob/d45307d/src/Query.ts#L45)

___

### onPostProcess

▸ **onPostProcess**(`connection`, `resultSet`): `Promise`<`TQueryPostProcessedResultSet`\>

Override to augment/manipulate the returned result set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `connection` | [`IDatabaseConnection`](../interfaces/IDatabaseConnection.md) | The connection object used for this query execution. Useful if further queries are required. |
| `resultSet` | `TQueryResultSet` | - |

#### Returns

`Promise`<`TQueryPostProcessedResultSet`\>

#### Implementation of

[IQueryable](../interfaces/IQueryable.md).[onPostProcess](../interfaces/IQueryable.md#onpostprocess)

#### Defined in

[src/Query.ts:66](https://github.com/breautek/storm/blob/d45307d/src/Query.ts#L66)

___

### onPreQuery

▸ **onPreQuery**(`connection`): `Promise`<`void`\>

Overridable to execute statements before the main query.
Can be used to set session variables or create temporary tables, etc.

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`IDatabaseConnection`](../interfaces/IDatabaseConnection.md) |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IQueryable](../interfaces/IQueryable.md).[onPreQuery](../interfaces/IQueryable.md#onprequery)

#### Defined in

[src/Query.ts:56](https://github.com/breautek/storm/blob/d45307d/src/Query.ts#L56)
