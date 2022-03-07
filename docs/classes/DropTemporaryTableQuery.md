[@breautek/storm](../README.md) / DropTemporaryTableQuery

# Class: DropTemporaryTableQuery

## Hierarchy

- [`Query`](Query.md)<`IDropTemporaryTableQueryInput`\>

  ↳ **`DropTemporaryTableQuery`**

## Table of contents

### Constructors

- [constructor](DropTemporaryTableQuery.md#constructor)

### Methods

- [\_getQuery](DropTemporaryTableQuery.md#_getquery)
- [execute](DropTemporaryTableQuery.md#execute)
- [getParameters](DropTemporaryTableQuery.md#getparameters)
- [getParametersForQuery](DropTemporaryTableQuery.md#getparametersforquery)
- [getQuery](DropTemporaryTableQuery.md#getquery)
- [onPostProcess](DropTemporaryTableQuery.md#onpostprocess)
- [onPreQuery](DropTemporaryTableQuery.md#onprequery)

## Constructors

### constructor

• **new DropTemporaryTableQuery**(`parameters?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters?` | `IDropTemporaryTableQueryInput` |

#### Inherited from

[Query](Query.md).[constructor](Query.md#constructor)

#### Defined in

[src/Query.ts:23](https://github.com/breautek/storm/blob/2f08fb3/src/Query.ts#L23)

## Methods

### \_getQuery

▸ `Protected` **_getQuery**(): `string`

#### Returns

`string`

#### Overrides

[Query](Query.md).[_getQuery](Query.md#_getquery)

#### Defined in

[src/DropTemporaryTableQuery.ts:29](https://github.com/breautek/storm/blob/2f08fb3/src/DropTemporaryTableQuery.ts#L29)

___

### execute

▸ **execute**(`connection`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`IDatabaseConnection`](../interfaces/IDatabaseConnection.md) |

#### Returns

`Promise`<`any`\>

#### Inherited from

[Query](Query.md).[execute](Query.md#execute)

#### Defined in

[src/Query.ts:63](https://github.com/breautek/storm/blob/2f08fb3/src/Query.ts#L63)

___

### getParameters

▸ **getParameters**(): `IDropTemporaryTableQueryInput`

#### Returns

`IDropTemporaryTableQueryInput`

#### Overrides

[Query](Query.md).[getParameters](Query.md#getparameters)

#### Defined in

[src/DropTemporaryTableQuery.ts:25](https://github.com/breautek/storm/blob/2f08fb3/src/DropTemporaryTableQuery.ts#L25)

___

### getParametersForQuery

▸ **getParametersForQuery**(): `IDictionary`<`any`\>

#### Returns

`IDictionary`<`any`\>

#### Inherited from

[Query](Query.md).[getParametersForQuery](Query.md#getparametersforquery)

#### Defined in

[src/Query.ts:31](https://github.com/breautek/storm/blob/2f08fb3/src/Query.ts#L31)

___

### getQuery

▸ **getQuery**(): `string`

#### Returns

`string`

#### Inherited from

[Query](Query.md).[getQuery](Query.md#getquery)

#### Defined in

[src/Query.ts:37](https://github.com/breautek/storm/blob/2f08fb3/src/Query.ts#L37)

___

### onPostProcess

▸ **onPostProcess**(`connection`, `resultSet`): `Promise`<`any`\>

Override to augment/manipulate the returned result set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `connection` | [`IDatabaseConnection`](../interfaces/IDatabaseConnection.md) | The connection object used for this query execution. Useful if further queries are required. |
| `resultSet` | `any` | - |

#### Returns

`Promise`<`any`\>

#### Inherited from

[Query](Query.md).[onPostProcess](Query.md#onpostprocess)

#### Defined in

[src/Query.ts:58](https://github.com/breautek/storm/blob/2f08fb3/src/Query.ts#L58)

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

[src/Query.ts:48](https://github.com/breautek/storm/blob/2f08fb3/src/Query.ts#L48)
