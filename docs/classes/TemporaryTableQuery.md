[@breautek/storm](../README.md) / TemporaryTableQuery

# Class: TemporaryTableQuery

## Hierarchy

- [`Query`](Query.md)<`any`\>

  ↳ **`TemporaryTableQuery`**

## Table of contents

### Constructors

- [constructor](TemporaryTableQuery.md#constructor)

### Methods

- [\_getQuery](TemporaryTableQuery.md#_getquery)
- [execute](TemporaryTableQuery.md#execute)
- [getParameters](TemporaryTableQuery.md#getparameters)
- [getParametersForQuery](TemporaryTableQuery.md#getparametersforquery)
- [getQuery](TemporaryTableQuery.md#getquery)
- [onPostProcess](TemporaryTableQuery.md#onpostprocess)
- [onPreQuery](TemporaryTableQuery.md#onprequery)

## Constructors

### constructor

• **new TemporaryTableQuery**(`parameters?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters?` | `any` |

#### Inherited from

[Query](Query.md).[constructor](Query.md#constructor)

#### Defined in

[src/Query.ts:22](https://github.com/breautek/storm/blob/3ad3438/src/Query.ts#L22)

## Methods

### \_getQuery

▸ `Protected` **_getQuery**(`connection`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`IDatabaseConnection`](../interfaces/IDatabaseConnection.md) |

#### Returns

`string`

#### Overrides

[Query](Query.md).[_getQuery](Query.md#_getquery)

#### Defined in

[src/TemporaryTableQuery.ts:35](https://github.com/breautek/storm/blob/3ad3438/src/TemporaryTableQuery.ts#L35)

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

[src/Query.ts:62](https://github.com/breautek/storm/blob/3ad3438/src/Query.ts#L62)

___

### getParameters

▸ **getParameters**(): `any`

#### Returns

`any`

#### Inherited from

[Query](Query.md).[getParameters](Query.md#getparameters)

#### Defined in

[src/Query.ts:26](https://github.com/breautek/storm/blob/3ad3438/src/Query.ts#L26)

___

### getParametersForQuery

▸ **getParametersForQuery**(): `Record`<`any`, `any`\>

#### Returns

`Record`<`any`, `any`\>

#### Overrides

[Query](Query.md).[getParametersForQuery](Query.md#getparametersforquery)

#### Defined in

[src/TemporaryTableQuery.ts:27](https://github.com/breautek/storm/blob/3ad3438/src/TemporaryTableQuery.ts#L27)

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
