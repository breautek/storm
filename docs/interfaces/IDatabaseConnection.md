[@breautek/storm](../README.md) / IDatabaseConnection

# Interface: IDatabaseConnection

## Implemented by

- [`DatabaseConnection`](../classes/DatabaseConnection.md)
- [`ManagedDatabaseConnection`](../classes/ManagedDatabaseConnection.md)

## Table of contents

### Methods

- [close](IDatabaseConnection.md#close)
- [commit](IDatabaseConnection.md#commit)
- [getAPI](IDatabaseConnection.md#getapi)
- [getInstantiationStack](IDatabaseConnection.md#getinstantiationstack)
- [getTimeout](IDatabaseConnection.md#gettimeout)
- [isClosed](IDatabaseConnection.md#isclosed)
- [isReadOnly](IDatabaseConnection.md#isreadonly)
- [isTransaction](IDatabaseConnection.md#istransaction)
- [query](IDatabaseConnection.md#query)
- [rollback](IDatabaseConnection.md#rollback)
- [setInstantiationStack](IDatabaseConnection.md#setinstantiationstack)
- [setTimeout](IDatabaseConnection.md#settimeout)
- [startTransaction](IDatabaseConnection.md#starttransaction)
- [stream](IDatabaseConnection.md#stream)

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

[src/IDatabaseConnection.ts:30](https://github.com/breautek/storm/blob/5fbba2d/src/IDatabaseConnection.ts#L30)

___

### commit

▸ **commit**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/IDatabaseConnection.ts:34](https://github.com/breautek/storm/blob/5fbba2d/src/IDatabaseConnection.ts#L34)

___

### getAPI

▸ **getAPI**(): `any`

#### Returns

`any`

#### Defined in

[src/IDatabaseConnection.ts:24](https://github.com/breautek/storm/blob/5fbba2d/src/IDatabaseConnection.ts#L24)

___

### getInstantiationStack

▸ **getInstantiationStack**(): `string`

#### Returns

`string`

#### Defined in

[src/IDatabaseConnection.ts:23](https://github.com/breautek/storm/blob/5fbba2d/src/IDatabaseConnection.ts#L23)

___

### getTimeout

▸ **getTimeout**(): `number`

#### Returns

`number`

#### Defined in

[src/IDatabaseConnection.ts:27](https://github.com/breautek/storm/blob/5fbba2d/src/IDatabaseConnection.ts#L27)

___

### isClosed

▸ **isClosed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/IDatabaseConnection.ts:31](https://github.com/breautek/storm/blob/5fbba2d/src/IDatabaseConnection.ts#L31)

___

### isReadOnly

▸ **isReadOnly**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/IDatabaseConnection.ts:25](https://github.com/breautek/storm/blob/5fbba2d/src/IDatabaseConnection.ts#L25)

___

### isTransaction

▸ **isTransaction**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/IDatabaseConnection.ts:33](https://github.com/breautek/storm/blob/5fbba2d/src/IDatabaseConnection.ts#L33)

___

### query

▸ **query**(`query`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` \| [`Query`](../classes/Query.md)<`any`, `any`, `any`\> |
| `params?` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/IDatabaseConnection.ts:28](https://github.com/breautek/storm/blob/5fbba2d/src/IDatabaseConnection.ts#L28)

___

### rollback

▸ **rollback**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/IDatabaseConnection.ts:35](https://github.com/breautek/storm/blob/5fbba2d/src/IDatabaseConnection.ts#L35)

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

[src/IDatabaseConnection.ts:22](https://github.com/breautek/storm/blob/5fbba2d/src/IDatabaseConnection.ts#L22)

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

[src/IDatabaseConnection.ts:26](https://github.com/breautek/storm/blob/5fbba2d/src/IDatabaseConnection.ts#L26)

___

### startTransaction

▸ **startTransaction**(`level?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `level?` | [`IsolationLevel`](../enums/IsolationLevel.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/IDatabaseConnection.ts:32](https://github.com/breautek/storm/blob/5fbba2d/src/IDatabaseConnection.ts#L32)

___

### stream

▸ **stream**(`query`, `params?`, `streamOptions?`): `Readable`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` \| [`Query`](../classes/Query.md)<`any`, `any`, `any`\> |
| `params?` | `any` |
| `streamOptions?` | `any` |

#### Returns

`Readable`

#### Defined in

[src/IDatabaseConnection.ts:29](https://github.com/breautek/storm/blob/5fbba2d/src/IDatabaseConnection.ts#L29)
