[@breautek/storm](../README.md) / [Query](../modules/Query.md) / Query

# Class: Query<TQueryParameters, TQueryResultSet, TQueryPostProcessedResultSet\>

[Query](../modules/Query.md).Query

## Type parameters

| Name | Type |
| :------ | :------ |
| `TQueryParameters` | `any` |
| `TQueryResultSet` | `any` |
| `TQueryPostProcessedResultSet` | `TQueryResultSet` |

## Hierarchy

- **`Query`**

  ↳ [`DropTemporaryTableQuery`](DropTemporaryTableQuery.DropTemporaryTableQuery-1.md)

  ↳ [`RawQuery`](RawQuery.RawQuery-1.md)

  ↳ [`TemporaryTableQuery`](TemporaryTableQuery.TemporaryTableQuery-1.md)

  ↳ [`CommitQuery`](private_CommitQuery.CommitQuery.md)

  ↳ [`RollbackQuery`](private_RollbackQuery.RollbackQuery.md)

  ↳ [`StartTransactionQuery`](private_StartTransactionQuery.StartTransactionQuery.md)

## Table of contents

### Constructors

- [constructor](Query.Query-1.md#constructor)

### Methods

- [\_getQuery](Query.Query-1.md#_getquery)
- [execute](Query.Query-1.md#execute)
- [getParameters](Query.Query-1.md#getparameters)
- [getParametersForQuery](Query.Query-1.md#getparametersforquery)
- [getQuery](Query.Query-1.md#getquery)
- [onPostProcess](Query.Query-1.md#onpostprocess)
- [onPreQuery](Query.Query-1.md#onprequery)

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

[src/Query.ts:23](https://github.com/breautek/storm/blob/3845ece/src/Query.ts#L23)

## Methods

### \_getQuery

▸ `Protected` `Abstract` **_getQuery**(): `string`

#### Returns

`string`

#### Defined in

[src/Query.ts:35](https://github.com/breautek/storm/blob/3845ece/src/Query.ts#L35)

___

### execute

▸ **execute**(`connection`): `Promise`<`TQueryPostProcessedResultSet`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`IDatabaseConnection`](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md) |

#### Returns

`Promise`<`TQueryPostProcessedResultSet`\>

#### Defined in

[src/Query.ts:63](https://github.com/breautek/storm/blob/3845ece/src/Query.ts#L63)

___

### getParameters

▸ **getParameters**(): `TQueryParameters`

#### Returns

`TQueryParameters`

#### Defined in

[src/Query.ts:27](https://github.com/breautek/storm/blob/3845ece/src/Query.ts#L27)

___

### getParametersForQuery

▸ **getParametersForQuery**(): `IDictionary`<`any`\>

#### Returns

`IDictionary`<`any`\>

#### Defined in

[src/Query.ts:31](https://github.com/breautek/storm/blob/3845ece/src/Query.ts#L31)

___

### getQuery

▸ **getQuery**(): `string`

#### Returns

`string`

#### Defined in

[src/Query.ts:37](https://github.com/breautek/storm/blob/3845ece/src/Query.ts#L37)

___

### onPostProcess

▸ **onPostProcess**(`connection`, `resultSet`): `Promise`<`TQueryPostProcessedResultSet`\>

Override to augment/manipulate the returned result set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `connection` | [`IDatabaseConnection`](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md) | The connection object used for this query execution. Useful if further queries are required. |
| `resultSet` | `TQueryResultSet` | - |

#### Returns

`Promise`<`TQueryPostProcessedResultSet`\>

#### Defined in

[src/Query.ts:58](https://github.com/breautek/storm/blob/3845ece/src/Query.ts#L58)

___

### onPreQuery

▸ **onPreQuery**(`connection`): `Promise`<`void`\>

Overridable to execute statements before the main query.
Can be used to set session variables or create temporary tables, etc.

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`IDatabaseConnection`](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/Query.ts:48](https://github.com/breautek/storm/blob/3845ece/src/Query.ts#L48)
