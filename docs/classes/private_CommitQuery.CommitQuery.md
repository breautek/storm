[@breautek/storm](../README.md) / [private/CommitQuery](../modules/private_CommitQuery.md) / CommitQuery

# Class: CommitQuery

[private/CommitQuery](../modules/private_CommitQuery.md).CommitQuery

## Hierarchy

- [`Query`](Query.Query-1.md)<`void`, `void`\>

  ↳ **`CommitQuery`**

## Table of contents

### Constructors

- [constructor](private_CommitQuery.CommitQuery.md#constructor)

### Methods

- [\_getQuery](private_CommitQuery.CommitQuery.md#_getquery)
- [execute](private_CommitQuery.CommitQuery.md#execute)
- [getParameters](private_CommitQuery.CommitQuery.md#getparameters)
- [getParametersForQuery](private_CommitQuery.CommitQuery.md#getparametersforquery)
- [getQuery](private_CommitQuery.CommitQuery.md#getquery)
- [onPostProcess](private_CommitQuery.CommitQuery.md#onpostprocess)

## Constructors

### constructor

• **new CommitQuery**(`parameters?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters?` | `void` |

#### Inherited from

[Query](Query.Query-1.md).[constructor](Query.Query-1.md#constructor)

#### Defined in

[src/Query.ts:23](https://github.com/breautek/storm/blob/7b25240/src/Query.ts#L23)

## Methods

### \_getQuery

▸ `Protected` **_getQuery**(): `string`

#### Returns

`string`

#### Overrides

[Query](Query.Query-1.md).[_getQuery](Query.Query-1.md#_getquery)

#### Defined in

[src/private/CommitQuery.ts:20](https://github.com/breautek/storm/blob/7b25240/src/private/CommitQuery.ts#L20)

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

[src/Query.ts:52](https://github.com/breautek/storm/blob/7b25240/src/Query.ts#L52)

___

### getParameters

▸ **getParameters**(): `void`

#### Returns

`void`

#### Inherited from

[Query](Query.Query-1.md).[getParameters](Query.Query-1.md#getparameters)

#### Defined in

[src/Query.ts:27](https://github.com/breautek/storm/blob/7b25240/src/Query.ts#L27)

___

### getParametersForQuery

▸ **getParametersForQuery**(): `IDictionary`<`any`\>

#### Returns

`IDictionary`<`any`\>

#### Inherited from

[Query](Query.Query-1.md).[getParametersForQuery](Query.Query-1.md#getparametersforquery)

#### Defined in

[src/Query.ts:31](https://github.com/breautek/storm/blob/7b25240/src/Query.ts#L31)

___

### getQuery

▸ **getQuery**(): `string`

#### Returns

`string`

#### Inherited from

[Query](Query.Query-1.md).[getQuery](Query.Query-1.md#getquery)

#### Defined in

[src/Query.ts:37](https://github.com/breautek/storm/blob/7b25240/src/Query.ts#L37)

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

[src/Query.ts:47](https://github.com/breautek/storm/blob/7b25240/src/Query.ts#L47)
