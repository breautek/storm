[@breautek/storm](../README.md) / [IDatabaseConnection](../modules/IDatabaseConnection.md) / IDatabaseConnection

# Interface: IDatabaseConnection

[IDatabaseConnection](../modules/IDatabaseConnection.md).IDatabaseConnection

## Implemented by

- [`DatabaseConnection`](../classes/DatabaseConnection.DatabaseConnection-1.md)
- [`ManagedDatabaseConnection`](../classes/ManagedDatabaseConnection.ManagedDatabaseConnection-1.md)

## Table of contents

### Methods

- [close](IDatabaseConnection.IDatabaseConnection-1.md#close)
- [commit](IDatabaseConnection.IDatabaseConnection-1.md#commit)
- [getAPI](IDatabaseConnection.IDatabaseConnection-1.md#getapi)
- [getInstantiationStack](IDatabaseConnection.IDatabaseConnection-1.md#getinstantiationstack)
- [getTimeout](IDatabaseConnection.IDatabaseConnection-1.md#gettimeout)
- [isClosed](IDatabaseConnection.IDatabaseConnection-1.md#isclosed)
- [isReadOnly](IDatabaseConnection.IDatabaseConnection-1.md#isreadonly)
- [isTransaction](IDatabaseConnection.IDatabaseConnection-1.md#istransaction)
- [query](IDatabaseConnection.IDatabaseConnection-1.md#query)
- [rollback](IDatabaseConnection.IDatabaseConnection-1.md#rollback)
- [setInstantiationStack](IDatabaseConnection.IDatabaseConnection-1.md#setinstantiationstack)
- [setTimeout](IDatabaseConnection.IDatabaseConnection-1.md#settimeout)
- [startTransaction](IDatabaseConnection.IDatabaseConnection-1.md#starttransaction)
- [stream](IDatabaseConnection.IDatabaseConnection-1.md#stream)

## Methods

### close

▸ **close**(`forceClose?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `forceClose?` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/IDatabaseConnection.ts:29](https://github.com/breautek/storm/blob/6ea3887/src/IDatabaseConnection.ts#L29)

___

### commit

▸ **commit**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/IDatabaseConnection.ts:33](https://github.com/breautek/storm/blob/6ea3887/src/IDatabaseConnection.ts#L33)

___

### getAPI

▸ **getAPI**(): `any`

#### Returns

`any`

#### Defined in

[src/IDatabaseConnection.ts:23](https://github.com/breautek/storm/blob/6ea3887/src/IDatabaseConnection.ts#L23)

___

### getInstantiationStack

▸ **getInstantiationStack**(): `string`

#### Returns

`string`

#### Defined in

[src/IDatabaseConnection.ts:22](https://github.com/breautek/storm/blob/6ea3887/src/IDatabaseConnection.ts#L22)

___

### getTimeout

▸ **getTimeout**(): `number`

#### Returns

`number`

#### Defined in

[src/IDatabaseConnection.ts:26](https://github.com/breautek/storm/blob/6ea3887/src/IDatabaseConnection.ts#L26)

___

### isClosed

▸ **isClosed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/IDatabaseConnection.ts:30](https://github.com/breautek/storm/blob/6ea3887/src/IDatabaseConnection.ts#L30)

___

### isReadOnly

▸ **isReadOnly**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/IDatabaseConnection.ts:24](https://github.com/breautek/storm/blob/6ea3887/src/IDatabaseConnection.ts#L24)

___

### isTransaction

▸ **isTransaction**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/IDatabaseConnection.ts:32](https://github.com/breautek/storm/blob/6ea3887/src/IDatabaseConnection.ts#L32)

___

### query

▸ **query**(`query`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` \| [`Query`](../classes/Query.Query-1.md)<`any`, `any`, `any`\> |
| `params?` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/IDatabaseConnection.ts:27](https://github.com/breautek/storm/blob/6ea3887/src/IDatabaseConnection.ts#L27)

___

### rollback

▸ **rollback**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/IDatabaseConnection.ts:34](https://github.com/breautek/storm/blob/6ea3887/src/IDatabaseConnection.ts#L34)

___

### setInstantiationStack

▸ **setInstantiationStack**(`stack`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stack` | `string` |

#### Returns

`void`

#### Defined in

[src/IDatabaseConnection.ts:21](https://github.com/breautek/storm/blob/6ea3887/src/IDatabaseConnection.ts#L21)

___

### setTimeout

▸ **setTimeout**(`timeout`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeout` | `number` |

#### Returns

`void`

#### Defined in

[src/IDatabaseConnection.ts:25](https://github.com/breautek/storm/blob/6ea3887/src/IDatabaseConnection.ts#L25)

___

### startTransaction

▸ **startTransaction**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/IDatabaseConnection.ts:31](https://github.com/breautek/storm/blob/6ea3887/src/IDatabaseConnection.ts#L31)

___

### stream

▸ **stream**(`query`, `params?`, `streamOptions?`): `Readable`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` \| [`Query`](../classes/Query.Query-1.md)<`any`, `any`, `any`\> |
| `params?` | `any` |
| `streamOptions?` | `any` |

#### Returns

`Readable`

#### Defined in

[src/IDatabaseConnection.ts:28](https://github.com/breautek/storm/blob/6ea3887/src/IDatabaseConnection.ts#L28)
