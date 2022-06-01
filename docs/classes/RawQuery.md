[@breautek/storm](../README.md) / RawQuery

# Class: RawQuery<TQueryParameters, TQueryResultSet, TQueryPostProcessedResultSet\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TQueryParameters` | `any` |
| `TQueryResultSet` | `any` |
| `TQueryPostProcessedResultSet` | `TQueryResultSet` |

## Hierarchy

- [`Query`](Query.md)<`TQueryParameters`, `TQueryResultSet`, `TQueryPostProcessedResultSet`\>

  ↳ **`RawQuery`**

## Table of contents

### Constructors

- [constructor](RawQuery.md#constructor)

### Methods

- [\_getQuery](RawQuery.md#_getquery)
- [execute](RawQuery.md#execute)
- [getParameters](RawQuery.md#getparameters)
- [getParametersForQuery](RawQuery.md#getparametersforquery)
- [getQuery](RawQuery.md#getquery)
- [onPostProcess](RawQuery.md#onpostprocess)
- [onPreQuery](RawQuery.md#onprequery)

## Constructors

### constructor

• **new RawQuery**<`TQueryParameters`, `TQueryResultSet`, `TQueryPostProcessedResultSet`\>(`query`, `parameters?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQueryParameters` | `any` |
| `TQueryResultSet` | `any` |
| `TQueryPostProcessedResultSet` | `TQueryResultSet` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `parameters?` | `TQueryParameters` |

#### Overrides

[Query](Query.md).[constructor](Query.md#constructor)

#### Defined in

[src/RawQuery.ts:22](https://github.com/breautek/storm/blob/3ad3438/src/RawQuery.ts#L22)

## Methods

### \_getQuery

▸ `Protected` **_getQuery**(): `string`

#### Returns

`string`

#### Overrides

[Query](Query.md).[_getQuery](Query.md#_getquery)

#### Defined in

[src/RawQuery.ts:27](https://github.com/breautek/storm/blob/3ad3438/src/RawQuery.ts#L27)

___

### execute

▸ **execute**(`connection`): `Promise`<`TQueryPostProcessedResultSet`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`IDatabaseConnection`](../interfaces/IDatabaseConnection.md) |

#### Returns

`Promise`<`TQueryPostProcessedResultSet`\>

#### Inherited from

[Query](Query.md).[execute](Query.md#execute)

#### Defined in

[src/Query.ts:62](https://github.com/breautek/storm/blob/3ad3438/src/Query.ts#L62)

___

### getParameters

▸ **getParameters**(): `TQueryParameters`

#### Returns

`TQueryParameters`

#### Inherited from

[Query](Query.md).[getParameters](Query.md#getparameters)

#### Defined in

[src/Query.ts:26](https://github.com/breautek/storm/blob/3ad3438/src/Query.ts#L26)

___

### getParametersForQuery

▸ **getParametersForQuery**(): `Record`<`any`, `any`\>

#### Returns

`Record`<`any`, `any`\>

#### Inherited from

[Query](Query.md).[getParametersForQuery](Query.md#getparametersforquery)

#### Defined in

[src/Query.ts:30](https://github.com/breautek/storm/blob/3ad3438/src/Query.ts#L30)

___

### getQuery

▸ **getQuery**(`connection`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`IDatabaseConnection`](../interfaces/IDatabaseConnection.md) |

#### Returns

`string`

#### Inherited from

[Query](Query.md).[getQuery](Query.md#getquery)

#### Defined in

[src/Query.ts:36](https://github.com/breautek/storm/blob/3ad3438/src/Query.ts#L36)

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

#### Inherited from

[Query](Query.md).[onPostProcess](Query.md#onpostprocess)

#### Defined in

[src/Query.ts:57](https://github.com/breautek/storm/blob/3ad3438/src/Query.ts#L57)

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

#### Inherited from

[Query](Query.md).[onPreQuery](Query.md#onprequery)

#### Defined in

[src/Query.ts:47](https://github.com/breautek/storm/blob/3ad3438/src/Query.ts#L47)
