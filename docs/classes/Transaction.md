[@breautek/storm](../README.md) / Transaction

# Class: Transaction

A class encapsulating an entire transaction from beginning to commitment.

This encapsulates a routine to conduct for the transaction.
Should the transaction fail due to a deadlock, the transaction will automatically
be tried.

## Implements

- [`IQueryable`](../interfaces/IQueryable.md)<`void`\>

## Table of contents

### Constructors

- [constructor](Transaction.md#constructor)

### Methods

- [execute](Transaction.md#execute)
- [getParametersForQuery](Transaction.md#getparametersforquery)
- [getQuery](Transaction.md#getquery)
- [onPostProcess](Transaction.md#onpostprocess)
- [onPreQuery](Transaction.md#onprequery)

## Constructors

### constructor

• **new Transaction**(`app`, `executor`, `retryLimit?`, `isolationLevel?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `app` | [`Application`](Application.md)<[`IConfig`](../interfaces/IConfig.md), [`IAuthTokenData`](../interfaces/IAuthTokenData.md), `any`, `any`\> | `undefined` |
| `executor` | `ITransactionExecutor` | `undefined` |
| `retryLimit` | `number` | `Infinity` |
| `isolationLevel` | [`IsolationLevel`](../enums/IsolationLevel.md) | `IsolationLevel.REPEATABLE_READ` |

#### Defined in

[src/Transaction.ts:43](https://github.com/breautek/storm/blob/d45307d/src/Transaction.ts#L43)

## Methods

### execute

▸ **execute**(`connection`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`IDatabaseConnection`](../interfaces/IDatabaseConnection.md) |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IQueryable](../interfaces/IQueryable.md).[execute](../interfaces/IQueryable.md#execute)

#### Defined in

[src/Transaction.ts:70](https://github.com/breautek/storm/blob/d45307d/src/Transaction.ts#L70)

___

### getParametersForQuery

▸ **getParametersForQuery**(): `Record`<`string`, `any`\>

#### Returns

`Record`<`string`, `any`\>

#### Implementation of

[IQueryable](../interfaces/IQueryable.md).[getParametersForQuery](../interfaces/IQueryable.md#getparametersforquery)

#### Defined in

[src/Transaction.ts:63](https://github.com/breautek/storm/blob/d45307d/src/Transaction.ts#L63)

___

### getQuery

▸ **getQuery**(`connection`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`IDatabaseConnection`](../interfaces/IDatabaseConnection.md) |

#### Returns

`string`

#### Implementation of

[IQueryable](../interfaces/IQueryable.md).[getQuery](../interfaces/IQueryable.md#getquery)

#### Defined in

[src/Transaction.ts:60](https://github.com/breautek/storm/blob/d45307d/src/Transaction.ts#L60)

___

### onPostProcess

▸ **onPostProcess**(`connection`, `results`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`IDatabaseConnection`](../interfaces/IDatabaseConnection.md) |
| `results` | `any` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IQueryable](../interfaces/IQueryable.md).[onPostProcess](../interfaces/IQueryable.md#onpostprocess)

#### Defined in

[src/Transaction.ts:66](https://github.com/breautek/storm/blob/d45307d/src/Transaction.ts#L66)

___

### onPreQuery

▸ **onPreQuery**(`connection`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`IDatabaseConnection`](../interfaces/IDatabaseConnection.md) |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IQueryable](../interfaces/IQueryable.md).[onPreQuery](../interfaces/IQueryable.md#onprequery)

#### Defined in

[src/Transaction.ts:58](https://github.com/breautek/storm/blob/d45307d/src/Transaction.ts#L58)
