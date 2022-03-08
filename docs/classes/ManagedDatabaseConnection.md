[@breautek/storm](../README.md) / ManagedDatabaseConnection

# Class: ManagedDatabaseConnection

## Implements

- [`IDatabaseConnection`](../interfaces/IDatabaseConnection.md)

## Table of contents

### Constructors

- [constructor](ManagedDatabaseConnection.md#constructor)

### Methods

- [close](ManagedDatabaseConnection.md#close)
- [commit](ManagedDatabaseConnection.md#commit)
- [getAPI](ManagedDatabaseConnection.md#getapi)
- [getInstantiationStack](ManagedDatabaseConnection.md#getinstantiationstack)
- [getTimeout](ManagedDatabaseConnection.md#gettimeout)
- [hasConnection](ManagedDatabaseConnection.md#hasconnection)
- [isClosed](ManagedDatabaseConnection.md#isclosed)
- [isManaged](ManagedDatabaseConnection.md#ismanaged)
- [isReadOnly](ManagedDatabaseConnection.md#isreadonly)
- [isTransaction](ManagedDatabaseConnection.md#istransaction)
- [isWriteRequired](ManagedDatabaseConnection.md#iswriterequired)
- [query](ManagedDatabaseConnection.md#query)
- [rollback](ManagedDatabaseConnection.md#rollback)
- [setConnection](ManagedDatabaseConnection.md#setconnection)
- [setInstantiationStack](ManagedDatabaseConnection.md#setinstantiationstack)
- [setTimeout](ManagedDatabaseConnection.md#settimeout)
- [startTransaction](ManagedDatabaseConnection.md#starttransaction)
- [stream](ManagedDatabaseConnection.md#stream)

## Constructors

### constructor

• **new ManagedDatabaseConnection**(`requiresWrite?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `requiresWrite` | `boolean` | `false` |

#### Defined in

[src/ManagedDatabaseConnection.ts:37](https://github.com/breautek/storm/blob/186ee78/src/ManagedDatabaseConnection.ts#L37)

## Methods

### close

▸ **close**(`forceClose?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `forceClose?` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.md).[close](../interfaces/IDatabaseConnection.md#close)

#### Defined in

[src/ManagedDatabaseConnection.ts:152](https://github.com/breautek/storm/blob/186ee78/src/ManagedDatabaseConnection.ts#L152)

___

### commit

▸ **commit**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.md).[commit](../interfaces/IDatabaseConnection.md#commit)

#### Defined in

[src/ManagedDatabaseConnection.ts:189](https://github.com/breautek/storm/blob/186ee78/src/ManagedDatabaseConnection.ts#L189)

___

### getAPI

▸ **getAPI**(): `any`

#### Returns

`any`

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.md).[getAPI](../interfaces/IDatabaseConnection.md#getapi)

#### Defined in

[src/ManagedDatabaseConnection.ts:237](https://github.com/breautek/storm/blob/186ee78/src/ManagedDatabaseConnection.ts#L237)

___

### getInstantiationStack

▸ **getInstantiationStack**(): `string`

#### Returns

`string`

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.md).[getInstantiationStack](../interfaces/IDatabaseConnection.md#getinstantiationstack)

#### Defined in

[src/ManagedDatabaseConnection.ts:104](https://github.com/breautek/storm/blob/186ee78/src/ManagedDatabaseConnection.ts#L104)

___

### getTimeout

▸ **getTimeout**(): `number`

#### Returns

`number`

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.md).[getTimeout](../interfaces/IDatabaseConnection.md#gettimeout)

#### Defined in

[src/ManagedDatabaseConnection.ts:129](https://github.com/breautek/storm/blob/186ee78/src/ManagedDatabaseConnection.ts#L129)

___

### hasConnection

▸ **hasConnection**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/ManagedDatabaseConnection.ts:91](https://github.com/breautek/storm/blob/186ee78/src/ManagedDatabaseConnection.ts#L91)

___

### isClosed

▸ **isClosed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.md).[isClosed](../interfaces/IDatabaseConnection.md#isclosed)

#### Defined in

[src/ManagedDatabaseConnection.ts:74](https://github.com/breautek/storm/blob/186ee78/src/ManagedDatabaseConnection.ts#L74)

___

### isManaged

▸ **isManaged**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/ManagedDatabaseConnection.ts:87](https://github.com/breautek/storm/blob/186ee78/src/ManagedDatabaseConnection.ts#L87)

___

### isReadOnly

▸ **isReadOnly**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.md).[isReadOnly](../interfaces/IDatabaseConnection.md#isreadonly)

#### Defined in

[src/ManagedDatabaseConnection.ts:113](https://github.com/breautek/storm/blob/186ee78/src/ManagedDatabaseConnection.ts#L113)

___

### isTransaction

▸ **isTransaction**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.md).[isTransaction](../interfaces/IDatabaseConnection.md#istransaction)

#### Defined in

[src/ManagedDatabaseConnection.ts:180](https://github.com/breautek/storm/blob/186ee78/src/ManagedDatabaseConnection.ts#L180)

___

### isWriteRequired

▸ **isWriteRequired**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/ManagedDatabaseConnection.ts:83](https://github.com/breautek/storm/blob/186ee78/src/ManagedDatabaseConnection.ts#L83)

___

### query

▸ **query**(`query`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](Query.md)<`any`, `any`, `any`\> |
| `params?` | `any` |

#### Returns

`Promise`<`any`\>

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.md).[query](../interfaces/IDatabaseConnection.md#query)

#### Defined in

[src/ManagedDatabaseConnection.ts:139](https://github.com/breautek/storm/blob/186ee78/src/ManagedDatabaseConnection.ts#L139)

___

### rollback

▸ **rollback**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.md).[rollback](../interfaces/IDatabaseConnection.md#rollback)

#### Defined in

[src/ManagedDatabaseConnection.ts:202](https://github.com/breautek/storm/blob/186ee78/src/ManagedDatabaseConnection.ts#L202)

___

### setConnection

▸ **setConnection**(`connection`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`IDatabaseConnection`](../interfaces/IDatabaseConnection.md) |

#### Returns

`void`

#### Defined in

[src/ManagedDatabaseConnection.ts:44](https://github.com/breautek/storm/blob/186ee78/src/ManagedDatabaseConnection.ts#L44)

___

### setInstantiationStack

▸ **setInstantiationStack**(`stack`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stack` | `string` |

#### Returns

`void`

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.md).[setInstantiationStack](../interfaces/IDatabaseConnection.md#setinstantiationstack)

#### Defined in

[src/ManagedDatabaseConnection.ts:95](https://github.com/breautek/storm/blob/186ee78/src/ManagedDatabaseConnection.ts#L95)

___

### setTimeout

▸ **setTimeout**(`timeout`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeout` | `number` |

#### Returns

`void`

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.md).[setTimeout](../interfaces/IDatabaseConnection.md#settimeout)

#### Defined in

[src/ManagedDatabaseConnection.ts:123](https://github.com/breautek/storm/blob/186ee78/src/ManagedDatabaseConnection.ts#L123)

___

### startTransaction

▸ **startTransaction**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.md).[startTransaction](../interfaces/IDatabaseConnection.md#starttransaction)

#### Defined in

[src/ManagedDatabaseConnection.ts:167](https://github.com/breautek/storm/blob/186ee78/src/ManagedDatabaseConnection.ts#L167)

___

### stream

▸ **stream**(`query`, `params?`, `streamOptions?`): `Readable`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](Query.md)<`any`, `any`, `any`\> |
| `params?` | `any` |
| `streamOptions?` | `any` |

#### Returns

`Readable`

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.md).[stream](../interfaces/IDatabaseConnection.md#stream)

#### Defined in

[src/ManagedDatabaseConnection.ts:148](https://github.com/breautek/storm/blob/186ee78/src/ManagedDatabaseConnection.ts#L148)
