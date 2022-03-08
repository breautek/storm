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

[src/Query.ts:23](https://github.com/breautek/storm/blob/186ee78/src/Query.ts#L23)

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

[src/TemporaryTableQuery.ts:36](https://github.com/breautek/storm/blob/186ee78/src/TemporaryTableQuery.ts#L36)

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

[src/Query.ts:63](https://github.com/breautek/storm/blob/186ee78/src/Query.ts#L63)

___

### getParameters

▸ **getParameters**(): `any`

#### Returns

`any`

#### Inherited from

[Query](Query.md).[getParameters](Query.md#getparameters)

#### Defined in

[src/Query.ts:27](https://github.com/breautek/storm/blob/186ee78/src/Query.ts#L27)

___

### getParametersForQuery

▸ **getParametersForQuery**(): `IDictionary`<`any`\>

#### Returns

`IDictionary`<`any`\>

#### Overrides

[Query](Query.md).[getParametersForQuery](Query.md#getparametersforquery)

#### Defined in

[src/TemporaryTableQuery.ts:28](https://github.com/breautek/storm/blob/186ee78/src/TemporaryTableQuery.ts#L28)

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

[src/Query.ts:37](https://github.com/breautek/storm/blob/186ee78/src/Query.ts#L37)

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

[src/Query.ts:58](https://github.com/breautek/storm/blob/186ee78/src/Query.ts#L58)

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

[src/Query.ts:48](https://github.com/breautek/storm/blob/186ee78/src/Query.ts#L48)
