[@breautek/storm](../README.md) / [RawQuery](../modules/RawQuery.md) / RawQuery

# Class: RawQuery<TQueryParameters, TQueryResultSet\>

[RawQuery](../modules/RawQuery.md).RawQuery

## Type parameters

| Name | Type |
| :------ | :------ |
| `TQueryParameters` | `any` |
| `TQueryResultSet` | `any` |

## Hierarchy

- [`Query`](Query.Query-1.md)<`TQueryParameters`, `TQueryResultSet`, `TQueryResultSet`\>

  ↳ **`RawQuery`**

## Table of contents

### Constructors

- [constructor](RawQuery.RawQuery-1.md#constructor)

### Methods

- [\_getQuery](RawQuery.RawQuery-1.md#_getquery)
- [execute](RawQuery.RawQuery-1.md#execute)
- [getParameters](RawQuery.RawQuery-1.md#getparameters)
- [getParametersForQuery](RawQuery.RawQuery-1.md#getparametersforquery)
- [getQuery](RawQuery.RawQuery-1.md#getquery)
- [onPostProcess](RawQuery.RawQuery-1.md#onpostprocess)

## Constructors

### constructor

• **new RawQuery**<`TQueryParameters`, `TQueryResultSet`\>(`query`, `parameters?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQueryParameters` | `any` |
| `TQueryResultSet` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `parameters?` | `TQueryParameters` |

#### Overrides

[Query](Query.Query-1.md).[constructor](Query.Query-1.md#constructor)

#### Defined in

[src/RawQuery.ts:22](https://github.com/breautek/storm/blob/0825061/src/RawQuery.ts#L22)

## Methods

### \_getQuery

▸ `Protected` **_getQuery**(): `string`

#### Returns

`string`

#### Overrides

[Query](Query.Query-1.md).[_getQuery](Query.Query-1.md#_getquery)

#### Defined in

[src/RawQuery.ts:27](https://github.com/breautek/storm/blob/0825061/src/RawQuery.ts#L27)

___

### execute

▸ **execute**(`connection`): `Promise`<`TQueryResultSet`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`IDatabaseConnection`](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md) |

#### Returns

`Promise`<`TQueryResultSet`\>

#### Inherited from

[Query](Query.Query-1.md).[execute](Query.Query-1.md#execute)

#### Defined in

[src/Query.ts:52](https://github.com/breautek/storm/blob/0825061/src/Query.ts#L52)

___

### getParameters

▸ **getParameters**(): `TQueryParameters`

#### Returns

`TQueryParameters`

#### Inherited from

[Query](Query.Query-1.md).[getParameters](Query.Query-1.md#getparameters)

#### Defined in

[src/Query.ts:27](https://github.com/breautek/storm/blob/0825061/src/Query.ts#L27)

___

### getParametersForQuery

▸ **getParametersForQuery**(): `IDictionary`<`any`\>

#### Returns

`IDictionary`<`any`\>

#### Inherited from

[Query](Query.Query-1.md).[getParametersForQuery](Query.Query-1.md#getparametersforquery)

#### Defined in

[src/Query.ts:31](https://github.com/breautek/storm/blob/0825061/src/Query.ts#L31)

___

### getQuery

▸ **getQuery**(): `string`

#### Returns

`string`

#### Inherited from

[Query](Query.Query-1.md).[getQuery](Query.Query-1.md#getquery)

#### Defined in

[src/Query.ts:37](https://github.com/breautek/storm/blob/0825061/src/Query.ts#L37)

___

### onPostProcess

▸ **onPostProcess**(`connection`, `resultSet`): `Promise`<`TQueryResultSet`\>

Override to augment/manipulate the returned result set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `connection` | [`IDatabaseConnection`](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md) | The connection object used for this query execution. Useful if further queries are required. |
| `resultSet` | `TQueryResultSet` | - |

#### Returns

`Promise`<`TQueryResultSet`\>

#### Inherited from

[Query](Query.Query-1.md).[onPostProcess](Query.Query-1.md#onpostprocess)

#### Defined in

[src/Query.ts:47](https://github.com/breautek/storm/blob/0825061/src/Query.ts#L47)
