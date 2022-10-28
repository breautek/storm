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

[src/Query.ts:22](https://github.com/breautek/storm/blob/306a47f/src/Query.ts#L22)

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

[src/Query.ts:42](https://github.com/breautek/storm/blob/306a47f/src/Query.ts#L42)

___

### execute

▸ **execute**(`connection`): `Promise`<`TQueryPostProcessedResultSet`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`IDatabaseConnection`](../interfaces/IDatabaseConnection.md) |

#### Returns

`Promise`<`TQueryPostProcessedResultSet`\>

#### Defined in

[src/Query.ts:70](https://github.com/breautek/storm/blob/306a47f/src/Query.ts#L70)

___

### getParameters

▸ **getParameters**(): `TQueryParameters`

#### Returns

`TQueryParameters`

parameters that was passed into the constructor.

#### Defined in

[src/Query.ts:29](https://github.com/breautek/storm/blob/306a47f/src/Query.ts#L29)

___

### getParametersForQuery

▸ **getParametersForQuery**(): `Record`<`any`, `any`\>

Query implementations may override this API to augment the parameters.

#### Returns

`Record`<`any`, `any`\>

parameters that will be used when this query is ran.

#### Defined in

[src/Query.ts:38](https://github.com/breautek/storm/blob/306a47f/src/Query.ts#L38)

___

### getQuery

▸ **getQuery**(`connection`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`IDatabaseConnection`](../interfaces/IDatabaseConnection.md) |

#### Returns

`string`

#### Defined in

[src/Query.ts:44](https://github.com/breautek/storm/blob/306a47f/src/Query.ts#L44)

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

#### Defined in

[src/Query.ts:65](https://github.com/breautek/storm/blob/306a47f/src/Query.ts#L65)

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

#### Defined in

[src/Query.ts:55](https://github.com/breautek/storm/blob/306a47f/src/Query.ts#L55)
