[@breautek/storm](../README.md) / IQueryable

# Interface: IQueryable<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`Query`](../classes/Query.md)
- [`Transaction`](../classes/Transaction.md)

## Table of contents

### Methods

- [execute](IQueryable.md#execute)
- [getParametersForQuery](IQueryable.md#getparametersforquery)
- [getQuery](IQueryable.md#getquery)
- [onPostProcess](IQueryable.md#onpostprocess)
- [onPreQuery](IQueryable.md#onprequery)

## Methods

### execute

▸ **execute**(`connection`): `Promise`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`IDatabaseConnection`](IDatabaseConnection.md) |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/IQueryable.ts:22](https://github.com/breautek/storm/blob/d45307d/src/IQueryable.ts#L22)

___

### getParametersForQuery

▸ **getParametersForQuery**(): `Record`<`string`, `any`\>

#### Returns

`Record`<`string`, `any`\>

#### Defined in

[src/IQueryable.ts:23](https://github.com/breautek/storm/blob/d45307d/src/IQueryable.ts#L23)

___

### getQuery

▸ **getQuery**(`connection`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`IDatabaseConnection`](IDatabaseConnection.md) |

#### Returns

`string`

#### Defined in

[src/IQueryable.ts:21](https://github.com/breautek/storm/blob/d45307d/src/IQueryable.ts#L21)

___

### onPostProcess

▸ **onPostProcess**(`connection`, `results`): `Promise`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`IDatabaseConnection`](IDatabaseConnection.md) |
| `results` | `any` |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/IQueryable.ts:24](https://github.com/breautek/storm/blob/d45307d/src/IQueryable.ts#L24)

___

### onPreQuery

▸ **onPreQuery**(`connection`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`IDatabaseConnection`](IDatabaseConnection.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/IQueryable.ts:20](https://github.com/breautek/storm/blob/d45307d/src/IQueryable.ts#L20)
