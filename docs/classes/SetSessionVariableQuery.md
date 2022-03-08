[@breautek/storm](../README.md) / SetSessionVariableQuery

# Class: SetSessionVariableQuery

## Hierarchy

- [`Query`](Query.md)<[`ISetSessionVariableQueryInput`](../interfaces/ISetSessionVariableQueryInput.md), `void`\>

  ↳ **`SetSessionVariableQuery`**

## Table of contents

### Constructors

- [constructor](SetSessionVariableQuery.md#constructor)

### Methods

- [\_getQuery](SetSessionVariableQuery.md#_getquery)
- [execute](SetSessionVariableQuery.md#execute)
- [getParameters](SetSessionVariableQuery.md#getparameters)
- [getParametersForQuery](SetSessionVariableQuery.md#getparametersforquery)
- [getQuery](SetSessionVariableQuery.md#getquery)
- [onPostProcess](SetSessionVariableQuery.md#onpostprocess)
- [onPreQuery](SetSessionVariableQuery.md#onprequery)

## Constructors

### constructor

• **new SetSessionVariableQuery**(`parameters?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters?` | [`ISetSessionVariableQueryInput`](../interfaces/ISetSessionVariableQueryInput.md) |

#### Inherited from

[Query](Query.md).[constructor](Query.md#constructor)

#### Defined in

[src/Query.ts:23](https://github.com/breautek/storm/blob/186ee78/src/Query.ts#L23)

## Methods

### \_getQuery

▸ `Protected` **_getQuery**(): `string`

#### Returns

`string`

#### Overrides

[Query](Query.md).[_getQuery](Query.md#_getquery)

#### Defined in

[src/SetSessionVariableQuery.ts:13](https://github.com/breautek/storm/blob/186ee78/src/SetSessionVariableQuery.ts#L13)

___

### execute

▸ **execute**(`connection`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`IDatabaseConnection`](../interfaces/IDatabaseConnection.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

[Query](Query.md).[execute](Query.md#execute)

#### Defined in

[src/Query.ts:63](https://github.com/breautek/storm/blob/186ee78/src/Query.ts#L63)

___

### getParameters

▸ **getParameters**(): [`ISetSessionVariableQueryInput`](../interfaces/ISetSessionVariableQueryInput.md)

#### Returns

[`ISetSessionVariableQueryInput`](../interfaces/ISetSessionVariableQueryInput.md)

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

[src/SetSessionVariableQuery.ts:24](https://github.com/breautek/storm/blob/186ee78/src/SetSessionVariableQuery.ts#L24)

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

▸ **onPostProcess**(`connection`, `resultSet`): `Promise`<`void`\>

Override to augment/manipulate the returned result set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `connection` | [`IDatabaseConnection`](../interfaces/IDatabaseConnection.md) | The connection object used for this query execution. Useful if further queries are required. |
| `resultSet` | `void` | - |

#### Returns

`Promise`<`void`\>

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
