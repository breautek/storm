[@breautek/storm](../README.md) / [RawQuery](../modules/rawquery.md) / RawQuery

# Class: RawQuery<TQueryParameters, TQueryResultSet\>

[RawQuery](../modules/rawquery.md).RawQuery

## Type parameters

| Name | Type |
| :------ | :------ |
| `TQueryParameters` | `any` |
| `TQueryResultSet` | `any` |

## Hierarchy

- [`Query`](query.query-1.md)<`TQueryParameters`, `TQueryResultSet`, `TQueryResultSet`\>

  ↳ **`RawQuery`**

## Table of contents

### Constructors

- [constructor](rawquery.rawquery-1.md#constructor)

### Methods

- [\_getQuery](rawquery.rawquery-1.md#_getquery)
- [execute](rawquery.rawquery-1.md#execute)
- [getParameters](rawquery.rawquery-1.md#getparameters)
- [getParametersForQuery](rawquery.rawquery-1.md#getparametersforquery)
- [getQuery](rawquery.rawquery-1.md#getquery)
- [onPostProcess](rawquery.rawquery-1.md#onpostprocess)

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

[Query](query.query-1.md).[constructor](query.query-1.md#constructor)

#### Defined in

[src/RawQuery.ts:20](https://github.com/breautek/storm/blob/fff2ea4/src/RawQuery.ts#L20)

## Methods

### \_getQuery

▸ `Protected` **_getQuery**(): `string`

#### Returns

`string`

#### Overrides

[Query](query.query-1.md).[_getQuery](query.query-1.md#_getquery)

#### Defined in

[src/RawQuery.ts:27](https://github.com/breautek/storm/blob/fff2ea4/src/RawQuery.ts#L27)

___

### execute

▸ **execute**(`connection`): `Promise`<`TQueryResultSet`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`IDatabaseConnection`](../interfaces/idatabaseconnection.idatabaseconnection-1.md) |

#### Returns

`Promise`<`TQueryResultSet`\>

#### Inherited from

[Query](query.query-1.md).[execute](query.query-1.md#execute)

#### Defined in

[src/Query.ts:52](https://github.com/breautek/storm/blob/fff2ea4/src/Query.ts#L52)

___

### getParameters

▸ **getParameters**(): `TQueryParameters`

#### Returns

`TQueryParameters`

#### Inherited from

[Query](query.query-1.md).[getParameters](query.query-1.md#getparameters)

#### Defined in

[src/Query.ts:27](https://github.com/breautek/storm/blob/fff2ea4/src/Query.ts#L27)

___

### getParametersForQuery

▸ **getParametersForQuery**(): `IDictionary`<`any`\>

#### Returns

`IDictionary`<`any`\>

#### Inherited from

[Query](query.query-1.md).[getParametersForQuery](query.query-1.md#getparametersforquery)

#### Defined in

[src/Query.ts:31](https://github.com/breautek/storm/blob/fff2ea4/src/Query.ts#L31)

___

### getQuery

▸ **getQuery**(): `string`

#### Returns

`string`

#### Inherited from

[Query](query.query-1.md).[getQuery](query.query-1.md#getquery)

#### Defined in

[src/Query.ts:37](https://github.com/breautek/storm/blob/fff2ea4/src/Query.ts#L37)

___

### onPostProcess

▸ **onPostProcess**(`connection`, `resultSet`): `Promise`<`TQueryResultSet`\>

Override to augment/manipulate the returned result set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `connection` | [`IDatabaseConnection`](../interfaces/idatabaseconnection.idatabaseconnection-1.md) | The connection object used for this query execution. Useful if further queries are required. |
| `resultSet` | `TQueryResultSet` | - |

#### Returns

`Promise`<`TQueryResultSet`\>

#### Inherited from

[Query](query.query-1.md).[onPostProcess](query.query-1.md#onpostprocess)

#### Defined in

[src/Query.ts:47](https://github.com/breautek/storm/blob/fff2ea4/src/Query.ts#L47)
