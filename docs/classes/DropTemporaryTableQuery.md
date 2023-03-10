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

[src/Query.ts:23](https://github.com/breautek/storm/blob/d45307d/src/Query.ts#L23)

## Methods

### \_getQuery

▸ `Protected` **_getQuery**(): `string`

#### Returns

`string`

#### Overrides

[Query](Query.md).[_getQuery](Query.md#_getquery)

#### Defined in

[src/DropTemporaryTableQuery.ts:29](https://github.com/breautek/storm/blob/d45307d/src/DropTemporaryTableQuery.ts#L29)

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

[src/Query.ts:71](https://github.com/breautek/storm/blob/d45307d/src/Query.ts#L71)

___

### getParameters

▸ **getParameters**(): `IDropTemporaryTableQueryInput`

#### Returns

`IDropTemporaryTableQueryInput`

parameters that was passed into the constructor.

#### Overrides

[Query](Query.md).[getParameters](Query.md#getparameters)

#### Defined in

[src/DropTemporaryTableQuery.ts:25](https://github.com/breautek/storm/blob/d45307d/src/DropTemporaryTableQuery.ts#L25)

___

### getParametersForQuery

▸ **getParametersForQuery**(): `Record`<`string`, `any`\>

Query implementations may override this API to augment the parameters.

#### Returns

`Record`<`string`, `any`\>

parameters that will be used when this query is ran.

#### Inherited from

[Query](Query.md).[getParametersForQuery](Query.md#getparametersforquery)

#### Defined in

[src/Query.ts:39](https://github.com/breautek/storm/blob/d45307d/src/Query.ts#L39)

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

[src/Query.ts:45](https://github.com/breautek/storm/blob/d45307d/src/Query.ts#L45)

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

[src/Query.ts:66](https://github.com/breautek/storm/blob/d45307d/src/Query.ts#L66)

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

[src/Query.ts:56](https://github.com/breautek/storm/blob/d45307d/src/Query.ts#L56)
