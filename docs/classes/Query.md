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

[src/Query.ts:23](https://github.com/breautek/storm/blob/186ee78/src/Query.ts#L23)

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

[src/Query.ts:35](https://github.com/breautek/storm/blob/186ee78/src/Query.ts#L35)

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

[src/Query.ts:63](https://github.com/breautek/storm/blob/186ee78/src/Query.ts#L63)

___

### getParameters

▸ **getParameters**(): `TQueryParameters`

#### Returns

`TQueryParameters`

#### Defined in

[src/Query.ts:27](https://github.com/breautek/storm/blob/186ee78/src/Query.ts#L27)

___

### getParametersForQuery

▸ **getParametersForQuery**(): `IDictionary`<`any`\>

#### Returns

`IDictionary`<`any`\>

#### Defined in

[src/Query.ts:31](https://github.com/breautek/storm/blob/186ee78/src/Query.ts#L31)

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

[src/Query.ts:37](https://github.com/breautek/storm/blob/186ee78/src/Query.ts#L37)

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

[src/Query.ts:58](https://github.com/breautek/storm/blob/186ee78/src/Query.ts#L58)

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

[src/Query.ts:48](https://github.com/breautek/storm/blob/186ee78/src/Query.ts#L48)
