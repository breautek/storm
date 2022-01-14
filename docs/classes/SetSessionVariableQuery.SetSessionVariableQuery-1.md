[@breautek/storm](../README.md) / [SetSessionVariableQuery](../modules/SetSessionVariableQuery.md) / SetSessionVariableQuery

# Class: SetSessionVariableQuery

[SetSessionVariableQuery](../modules/SetSessionVariableQuery.md).SetSessionVariableQuery

## Hierarchy

- [`Query`](Query.Query-1.md)<[`ISetSessionVariableQueryInput`](../interfaces/SetSessionVariableQuery.ISetSessionVariableQueryInput.md), `void`\>

  ↳ **`SetSessionVariableQuery`**

## Table of contents

### Constructors

- [constructor](SetSessionVariableQuery.SetSessionVariableQuery-1.md#constructor)

### Methods

- [\_getQuery](SetSessionVariableQuery.SetSessionVariableQuery-1.md#_getquery)
- [execute](SetSessionVariableQuery.SetSessionVariableQuery-1.md#execute)
- [getParameters](SetSessionVariableQuery.SetSessionVariableQuery-1.md#getparameters)
- [getParametersForQuery](SetSessionVariableQuery.SetSessionVariableQuery-1.md#getparametersforquery)
- [getQuery](SetSessionVariableQuery.SetSessionVariableQuery-1.md#getquery)
- [onPostProcess](SetSessionVariableQuery.SetSessionVariableQuery-1.md#onpostprocess)
- [onPreQuery](SetSessionVariableQuery.SetSessionVariableQuery-1.md#onprequery)

## Constructors

### constructor

• **new SetSessionVariableQuery**(`parameters?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters?` | [`ISetSessionVariableQueryInput`](../interfaces/SetSessionVariableQuery.ISetSessionVariableQueryInput.md) |

#### Inherited from

[Query](Query.Query-1.md).[constructor](Query.Query-1.md#constructor)

#### Defined in

[src/Query.ts:23](https://github.com/breautek/storm/blob/6ea3887/src/Query.ts#L23)

## Methods

### \_getQuery

▸ `Protected` **_getQuery**(): `string`

#### Returns

`string`

#### Overrides

[Query](Query.Query-1.md).[_getQuery](Query.Query-1.md#_getquery)

#### Defined in

[src/SetSessionVariableQuery.ts:13](https://github.com/breautek/storm/blob/6ea3887/src/SetSessionVariableQuery.ts#L13)

___

### execute

▸ **execute**(`connection`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`IDatabaseConnection`](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

[Query](Query.Query-1.md).[execute](Query.Query-1.md#execute)

#### Defined in

[src/Query.ts:63](https://github.com/breautek/storm/blob/6ea3887/src/Query.ts#L63)

___

### getParameters

▸ **getParameters**(): [`ISetSessionVariableQueryInput`](../interfaces/SetSessionVariableQuery.ISetSessionVariableQueryInput.md)

#### Returns

[`ISetSessionVariableQueryInput`](../interfaces/SetSessionVariableQuery.ISetSessionVariableQueryInput.md)

#### Inherited from

[Query](Query.Query-1.md).[getParameters](Query.Query-1.md#getparameters)

#### Defined in

[src/Query.ts:27](https://github.com/breautek/storm/blob/6ea3887/src/Query.ts#L27)

___

### getParametersForQuery

▸ **getParametersForQuery**(): `IDictionary`<`any`\>

#### Returns

`IDictionary`<`any`\>

#### Overrides

[Query](Query.Query-1.md).[getParametersForQuery](Query.Query-1.md#getparametersforquery)

#### Defined in

[src/SetSessionVariableQuery.ts:24](https://github.com/breautek/storm/blob/6ea3887/src/SetSessionVariableQuery.ts#L24)

___

### getQuery

▸ **getQuery**(): `string`

#### Returns

`string`

#### Inherited from

[Query](Query.Query-1.md).[getQuery](Query.Query-1.md#getquery)

#### Defined in

[src/Query.ts:37](https://github.com/breautek/storm/blob/6ea3887/src/Query.ts#L37)

___

### onPostProcess

▸ **onPostProcess**(`connection`, `resultSet`): `Promise`<`void`\>

Override to augment/manipulate the returned result set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `connection` | [`IDatabaseConnection`](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md) | The connection object used for this query execution. Useful if further queries are required. |
| `resultSet` | `void` | - |

#### Returns

`Promise`<`void`\>

#### Inherited from

[Query](Query.Query-1.md).[onPostProcess](Query.Query-1.md#onpostprocess)

#### Defined in

[src/Query.ts:58](https://github.com/breautek/storm/blob/6ea3887/src/Query.ts#L58)

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

[src/Query.ts:48](https://github.com/breautek/storm/blob/6ea3887/src/Query.ts#L48)
