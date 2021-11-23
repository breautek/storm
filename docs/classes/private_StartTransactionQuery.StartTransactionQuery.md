[@breautek/storm](../README.md) / [private/StartTransactionQuery](../modules/private_StartTransactionQuery.md) / StartTransactionQuery

# Class: StartTransactionQuery

[private/StartTransactionQuery](../modules/private_StartTransactionQuery.md).StartTransactionQuery

## Hierarchy

- [`Query`](Query.Query-1.md)<`void`, `void`\>

  ↳ **`StartTransactionQuery`**

## Table of contents

### Constructors

- [constructor](private_StartTransactionQuery.StartTransactionQuery.md#constructor)

### Methods

- [\_getQuery](private_StartTransactionQuery.StartTransactionQuery.md#_getquery)
- [execute](private_StartTransactionQuery.StartTransactionQuery.md#execute)
- [getParameters](private_StartTransactionQuery.StartTransactionQuery.md#getparameters)
- [getParametersForQuery](private_StartTransactionQuery.StartTransactionQuery.md#getparametersforquery)
- [getQuery](private_StartTransactionQuery.StartTransactionQuery.md#getquery)
- [onPostProcess](private_StartTransactionQuery.StartTransactionQuery.md#onpostprocess)
- [onPreQuery](private_StartTransactionQuery.StartTransactionQuery.md#onprequery)

## Constructors

### constructor

• **new StartTransactionQuery**(`parameters?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters?` | `void` |

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

[src/private/StartTransactionQuery.ts:20](https://github.com/breautek/storm/blob/621aeec/src/private/StartTransactionQuery.ts#L20)

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

[src/Query.ts:63](https://github.com/breautek/storm/blob/621aeec/src/Query.ts#L63)

___

### getParameters

▸ **getParameters**(): `void`

#### Returns

`void`

#### Inherited from

[Query](Query.Query-1.md).[getParameters](Query.Query-1.md#getparameters)

#### Defined in

[src/Query.ts:27](https://github.com/breautek/storm/blob/621aeec/src/Query.ts#L27)

___

### getParametersForQuery

▸ **getParametersForQuery**(): `IDictionary`<`any`\>

#### Returns

`IDictionary`<`any`\>

#### Inherited from

[Query](Query.Query-1.md).[getParametersForQuery](Query.Query-1.md#getparametersforquery)

#### Defined in

[src/Query.ts:31](https://github.com/breautek/storm/blob/621aeec/src/Query.ts#L31)

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
