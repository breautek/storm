[@breautek/storm](../README.md) / [TemporaryTableQuery](../modules/TemporaryTableQuery.md) / TemporaryTableQuery

# Class: TemporaryTableQuery

[TemporaryTableQuery](../modules/TemporaryTableQuery.md).TemporaryTableQuery

## Hierarchy

- [`Query`](Query.Query-1.md)<`any`\>

  ↳ **`TemporaryTableQuery`**

## Table of contents

### Constructors

- [constructor](TemporaryTableQuery.TemporaryTableQuery-1.md#constructor)

### Methods

- [\_getQuery](TemporaryTableQuery.TemporaryTableQuery-1.md#_getquery)
- [execute](TemporaryTableQuery.TemporaryTableQuery-1.md#execute)
- [getParameters](TemporaryTableQuery.TemporaryTableQuery-1.md#getparameters)
- [getParametersForQuery](TemporaryTableQuery.TemporaryTableQuery-1.md#getparametersforquery)
- [getQuery](TemporaryTableQuery.TemporaryTableQuery-1.md#getquery)
- [onPostProcess](TemporaryTableQuery.TemporaryTableQuery-1.md#onpostprocess)
- [onPreQuery](TemporaryTableQuery.TemporaryTableQuery-1.md#onprequery)

## Constructors

### constructor

• **new TemporaryTableQuery**(`parameters?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters?` | `any` |

#### Inherited from

[Query](Query.Query-1.md).[constructor](Query.Query-1.md#constructor)

#### Defined in

[src/Query.ts:23](https://github.com/breautek/storm/blob/621aeec/src/Query.ts#L23)

## Methods

### \_getQuery

▸ `Protected` **_getQuery**(): `string`

#### Returns

`string`

#### Overrides

[Query](Query.Query-1.md).[_getQuery](Query.Query-1.md#_getquery)

#### Defined in

[src/TemporaryTableQuery.ts:35](https://github.com/breautek/storm/blob/621aeec/src/TemporaryTableQuery.ts#L35)

___

### execute

▸ **execute**(`connection`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`IDatabaseConnection`](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md) |

#### Returns

`Promise`<`any`\>

#### Inherited from

[Query](Query.Query-1.md).[execute](Query.Query-1.md#execute)

#### Defined in

[src/Query.ts:63](https://github.com/breautek/storm/blob/621aeec/src/Query.ts#L63)

___

### getParameters

▸ **getParameters**(): `any`

#### Returns

`any`

#### Inherited from

[Query](Query.Query-1.md).[getParameters](Query.Query-1.md#getparameters)

#### Defined in

[src/Query.ts:27](https://github.com/breautek/storm/blob/621aeec/src/Query.ts#L27)

___

### getParametersForQuery

▸ **getParametersForQuery**(): `IDictionary`<`any`\>

#### Returns

`IDictionary`<`any`\>

#### Overrides

[Query](Query.Query-1.md).[getParametersForQuery](Query.Query-1.md#getparametersforquery)

#### Defined in

[src/TemporaryTableQuery.ts:27](https://github.com/breautek/storm/blob/621aeec/src/TemporaryTableQuery.ts#L27)

___

### getQuery

▸ **getQuery**(): `string`

#### Returns

`string`

#### Inherited from

[Query](Query.Query-1.md).[getQuery](Query.Query-1.md#getquery)

#### Defined in

[src/Query.ts:37](https://github.com/breautek/storm/blob/621aeec/src/Query.ts#L37)

___

### onPostProcess

▸ **onPostProcess**(`connection`, `resultSet`): `Promise`<`any`\>

Override to augment/manipulate the returned result set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `connection` | [`IDatabaseConnection`](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md) | The connection object used for this query execution. Useful if further queries are required. |
| `resultSet` | `any` | - |

#### Returns

`Promise`<`any`\>

#### Inherited from

[Query](Query.Query-1.md).[onPostProcess](Query.Query-1.md#onpostprocess)

#### Defined in

[src/Query.ts:58](https://github.com/breautek/storm/blob/621aeec/src/Query.ts#L58)

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

#### Inherited from

[Query](Query.Query-1.md).[onPreQuery](Query.Query-1.md#onprequery)

#### Defined in

[src/Query.ts:48](https://github.com/breautek/storm/blob/621aeec/src/Query.ts#L48)
