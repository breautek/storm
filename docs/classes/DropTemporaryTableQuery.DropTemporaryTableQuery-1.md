[@breautek/storm](../README.md) / [DropTemporaryTableQuery](../modules/DropTemporaryTableQuery.md) / DropTemporaryTableQuery

# Class: DropTemporaryTableQuery

[DropTemporaryTableQuery](../modules/DropTemporaryTableQuery.md).DropTemporaryTableQuery

## Hierarchy

- [`Query`](Query.Query-1.md)<[`IDropTemporaryTableQueryInput`](../interfaces/DropTemporaryTableQuery.IDropTemporaryTableQueryInput.md)\>

  ↳ **`DropTemporaryTableQuery`**

## Table of contents

### Constructors

- [constructor](DropTemporaryTableQuery.DropTemporaryTableQuery-1.md#constructor)

### Methods

- [\_getQuery](DropTemporaryTableQuery.DropTemporaryTableQuery-1.md#_getquery)
- [execute](DropTemporaryTableQuery.DropTemporaryTableQuery-1.md#execute)
- [getParameters](DropTemporaryTableQuery.DropTemporaryTableQuery-1.md#getparameters)
- [getParametersForQuery](DropTemporaryTableQuery.DropTemporaryTableQuery-1.md#getparametersforquery)
- [getQuery](DropTemporaryTableQuery.DropTemporaryTableQuery-1.md#getquery)
- [onPostProcess](DropTemporaryTableQuery.DropTemporaryTableQuery-1.md#onpostprocess)

## Constructors

### constructor

• **new DropTemporaryTableQuery**(`parameters?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters?` | [`IDropTemporaryTableQueryInput`](../interfaces/DropTemporaryTableQuery.IDropTemporaryTableQueryInput.md) |

#### Inherited from

[Query](Query.Query-1.md).[constructor](Query.Query-1.md#constructor)

#### Defined in

[src/Query.ts:23](https://github.com/breautek/storm/blob/8fb5f8c/src/Query.ts#L23)

## Methods

### \_getQuery

▸ `Protected` **_getQuery**(): `string`

#### Returns

`string`

#### Overrides

[Query](Query.Query-1.md).[_getQuery](Query.Query-1.md#_getquery)

#### Defined in

[src/DropTemporaryTableQuery.ts:29](https://github.com/breautek/storm/blob/8fb5f8c/src/DropTemporaryTableQuery.ts#L29)

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

[src/Query.ts:52](https://github.com/breautek/storm/blob/8fb5f8c/src/Query.ts#L52)

___

### getParameters

▸ **getParameters**(): [`IDropTemporaryTableQueryInput`](../interfaces/DropTemporaryTableQuery.IDropTemporaryTableQueryInput.md)

#### Returns

[`IDropTemporaryTableQueryInput`](../interfaces/DropTemporaryTableQuery.IDropTemporaryTableQueryInput.md)

#### Overrides

[Query](Query.Query-1.md).[getParameters](Query.Query-1.md#getparameters)

#### Defined in

[src/DropTemporaryTableQuery.ts:25](https://github.com/breautek/storm/blob/8fb5f8c/src/DropTemporaryTableQuery.ts#L25)

___

### getParametersForQuery

▸ **getParametersForQuery**(): `IDictionary`<`any`\>

#### Returns

`IDictionary`<`any`\>

#### Inherited from

[Query](Query.Query-1.md).[getParametersForQuery](Query.Query-1.md#getparametersforquery)

#### Defined in

[src/Query.ts:31](https://github.com/breautek/storm/blob/8fb5f8c/src/Query.ts#L31)

___

### getQuery

▸ **getQuery**(): `string`

#### Returns

`string`

#### Inherited from

[Query](Query.Query-1.md).[getQuery](Query.Query-1.md#getquery)

#### Defined in

[src/Query.ts:37](https://github.com/breautek/storm/blob/8fb5f8c/src/Query.ts#L37)

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

[src/Query.ts:47](https://github.com/breautek/storm/blob/8fb5f8c/src/Query.ts#L47)
