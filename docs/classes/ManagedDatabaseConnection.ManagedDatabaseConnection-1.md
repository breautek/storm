[@breautek/storm](../README.md) / [ManagedDatabaseConnection](../modules/ManagedDatabaseConnection.md) / ManagedDatabaseConnection

# Class: ManagedDatabaseConnection

[ManagedDatabaseConnection](../modules/ManagedDatabaseConnection.md).ManagedDatabaseConnection

## Implements

- [`IDatabaseConnection`](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md)

## Table of contents

### Constructors

- [constructor](ManagedDatabaseConnection.ManagedDatabaseConnection-1.md#constructor)

### Methods

- [close](ManagedDatabaseConnection.ManagedDatabaseConnection-1.md#close)
- [commit](ManagedDatabaseConnection.ManagedDatabaseConnection-1.md#commit)
- [getAPI](ManagedDatabaseConnection.ManagedDatabaseConnection-1.md#getapi)
- [getInstantiationStack](ManagedDatabaseConnection.ManagedDatabaseConnection-1.md#getinstantiationstack)
- [getTimeout](ManagedDatabaseConnection.ManagedDatabaseConnection-1.md#gettimeout)
- [hasConnection](ManagedDatabaseConnection.ManagedDatabaseConnection-1.md#hasconnection)
- [isClosed](ManagedDatabaseConnection.ManagedDatabaseConnection-1.md#isclosed)
- [isManaged](ManagedDatabaseConnection.ManagedDatabaseConnection-1.md#ismanaged)
- [isReadOnly](ManagedDatabaseConnection.ManagedDatabaseConnection-1.md#isreadonly)
- [isTransaction](ManagedDatabaseConnection.ManagedDatabaseConnection-1.md#istransaction)
- [isWriteRequired](ManagedDatabaseConnection.ManagedDatabaseConnection-1.md#iswriterequired)
- [query](ManagedDatabaseConnection.ManagedDatabaseConnection-1.md#query)
- [rollback](ManagedDatabaseConnection.ManagedDatabaseConnection-1.md#rollback)
- [setConnection](ManagedDatabaseConnection.ManagedDatabaseConnection-1.md#setconnection)
- [setInstantiationStack](ManagedDatabaseConnection.ManagedDatabaseConnection-1.md#setinstantiationstack)
- [setTimeout](ManagedDatabaseConnection.ManagedDatabaseConnection-1.md#settimeout)
- [startTransaction](ManagedDatabaseConnection.ManagedDatabaseConnection-1.md#starttransaction)
- [stream](ManagedDatabaseConnection.ManagedDatabaseConnection-1.md#stream)

## Constructors

### constructor

• **new ManagedDatabaseConnection**(`requiresWrite?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `requiresWrite` | `boolean` | `false` |

#### Defined in

[src/ManagedDatabaseConnection.ts:37](https://github.com/breautek/storm/blob/8fb5f8c/src/ManagedDatabaseConnection.ts#L37)

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

[IDatabaseConnection](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md).[close](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md#close)

#### Defined in

[src/ManagedDatabaseConnection.ts:150](https://github.com/breautek/storm/blob/8fb5f8c/src/ManagedDatabaseConnection.ts#L150)

___

### commit

▸ **commit**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md).[commit](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md#commit)

#### Defined in

[src/ManagedDatabaseConnection.ts:187](https://github.com/breautek/storm/blob/8fb5f8c/src/ManagedDatabaseConnection.ts#L187)

___

### getAPI

▸ **getAPI**(): `any`

#### Returns

`any`

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md).[getAPI](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md#getapi)

#### Defined in

[src/ManagedDatabaseConnection.ts:235](https://github.com/breautek/storm/blob/8fb5f8c/src/ManagedDatabaseConnection.ts#L235)

___

### getInstantiationStack

▸ **getInstantiationStack**(): `string`

#### Returns

`string`

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md).[getInstantiationStack](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md#getinstantiationstack)

#### Defined in

[src/ManagedDatabaseConnection.ts:103](https://github.com/breautek/storm/blob/8fb5f8c/src/ManagedDatabaseConnection.ts#L103)

___

### getTimeout

▸ **getTimeout**(): `number`

#### Returns

`number`

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md).[getTimeout](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md#gettimeout)

#### Defined in

[src/ManagedDatabaseConnection.ts:127](https://github.com/breautek/storm/blob/8fb5f8c/src/ManagedDatabaseConnection.ts#L127)

___

### hasConnection

▸ **hasConnection**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/ManagedDatabaseConnection.ts:90](https://github.com/breautek/storm/blob/8fb5f8c/src/ManagedDatabaseConnection.ts#L90)

___

### isClosed

▸ **isClosed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md).[isClosed](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md#isclosed)

#### Defined in

[src/ManagedDatabaseConnection.ts:73](https://github.com/breautek/storm/blob/8fb5f8c/src/ManagedDatabaseConnection.ts#L73)

___

### isManaged

▸ **isManaged**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/ManagedDatabaseConnection.ts:86](https://github.com/breautek/storm/blob/8fb5f8c/src/ManagedDatabaseConnection.ts#L86)

___

### isReadOnly

▸ **isReadOnly**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md).[isReadOnly](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md#isreadonly)

#### Defined in

[src/ManagedDatabaseConnection.ts:112](https://github.com/breautek/storm/blob/8fb5f8c/src/ManagedDatabaseConnection.ts#L112)

___

### isTransaction

▸ **isTransaction**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md).[isTransaction](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md#istransaction)

#### Defined in

[src/ManagedDatabaseConnection.ts:178](https://github.com/breautek/storm/blob/8fb5f8c/src/ManagedDatabaseConnection.ts#L178)

___

### isWriteRequired

▸ **isWriteRequired**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/ManagedDatabaseConnection.ts:82](https://github.com/breautek/storm/blob/8fb5f8c/src/ManagedDatabaseConnection.ts#L82)

___

### query

▸ **query**(`query`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](Query.Query-1.md)<`any`, `any`, `any`\> |
| `params?` | `any` |

#### Returns

`Promise`<`any`\>

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md).[query](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md#query)

#### Defined in

[src/ManagedDatabaseConnection.ts:137](https://github.com/breautek/storm/blob/8fb5f8c/src/ManagedDatabaseConnection.ts#L137)

___

### rollback

▸ **rollback**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md).[rollback](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md#rollback)

#### Defined in

[src/ManagedDatabaseConnection.ts:200](https://github.com/breautek/storm/blob/8fb5f8c/src/ManagedDatabaseConnection.ts#L200)

___

### setConnection

▸ **setConnection**(`connection`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`IDatabaseConnection`](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md) |

#### Returns

`void`

#### Defined in

[src/ManagedDatabaseConnection.ts:43](https://github.com/breautek/storm/blob/8fb5f8c/src/ManagedDatabaseConnection.ts#L43)

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

[IDatabaseConnection](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md).[setInstantiationStack](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md#setinstantiationstack)

#### Defined in

[src/ManagedDatabaseConnection.ts:94](https://github.com/breautek/storm/blob/8fb5f8c/src/ManagedDatabaseConnection.ts#L94)

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

[IDatabaseConnection](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md).[setTimeout](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md#settimeout)

#### Defined in

[src/ManagedDatabaseConnection.ts:121](https://github.com/breautek/storm/blob/8fb5f8c/src/ManagedDatabaseConnection.ts#L121)

___

### startTransaction

▸ **startTransaction**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md).[startTransaction](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md#starttransaction)

#### Defined in

[src/ManagedDatabaseConnection.ts:165](https://github.com/breautek/storm/blob/8fb5f8c/src/ManagedDatabaseConnection.ts#L165)

___

### stream

▸ **stream**(`query`, `params?`, `streamOptions?`): `Readable`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](Query.Query-1.md)<`any`, `any`, `any`\> |
| `params?` | `any` |
| `streamOptions?` | `any` |

#### Returns

`Readable`

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md).[stream](../interfaces/IDatabaseConnection.IDatabaseConnection-1.md#stream)

#### Defined in

[src/ManagedDatabaseConnection.ts:146](https://github.com/breautek/storm/blob/8fb5f8c/src/ManagedDatabaseConnection.ts#L146)
