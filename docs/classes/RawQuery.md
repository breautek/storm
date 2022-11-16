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

[src/RawQuery.ts:22](https://github.com/breautek/storm/blob/4b2254f/src/RawQuery.ts#L22)

## Methods

### \_getQuery

▸ `Protected` **_getQuery**(): `string`

#### Returns

`string`

#### Overrides

[Query](Query.md).[_getQuery](Query.md#_getquery)

#### Defined in

[src/RawQuery.ts:27](https://github.com/breautek/storm/blob/4b2254f/src/RawQuery.ts#L27)

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

[src/Query.ts:70](https://github.com/breautek/storm/blob/4b2254f/src/Query.ts#L70)

___

### getParameters

▸ **getParameters**(): `TQueryParameters`

#### Returns

`TQueryParameters`

parameters that was passed into the constructor.

#### Inherited from

[Query](Query.md).[getParameters](Query.md#getparameters)

#### Defined in

[src/Query.ts:29](https://github.com/breautek/storm/blob/4b2254f/src/Query.ts#L29)

___

### getParametersForQuery

▸ **getParametersForQuery**(): `Record`<`any`, `any`\>

Query implementations may override this API to augment the parameters.

#### Returns

`Record`<`any`, `any`\>

parameters that will be used when this query is ran.

#### Inherited from

[Query](Query.md).[getParametersForQuery](Query.md#getparametersforquery)

#### Defined in

[src/Query.ts:38](https://github.com/breautek/storm/blob/4b2254f/src/Query.ts#L38)

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

[src/Query.ts:44](https://github.com/breautek/storm/blob/4b2254f/src/Query.ts#L44)

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

[src/Query.ts:65](https://github.com/breautek/storm/blob/4b2254f/src/Query.ts#L65)

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

[src/Query.ts:55](https://github.com/breautek/storm/blob/4b2254f/src/Query.ts#L55)
