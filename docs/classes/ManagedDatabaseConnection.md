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

[src/ManagedDatabaseConnection.ts:38](https://github.com/breautek/storm/blob/d45307d/src/ManagedDatabaseConnection.ts#L38)

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

[src/ManagedDatabaseConnection.ts:153](https://github.com/breautek/storm/blob/d45307d/src/ManagedDatabaseConnection.ts#L153)

___

### commit

▸ **commit**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.md).[commit](../interfaces/IDatabaseConnection.md#commit)

#### Defined in

[src/ManagedDatabaseConnection.ts:190](https://github.com/breautek/storm/blob/d45307d/src/ManagedDatabaseConnection.ts#L190)

___

### getAPI

▸ **getAPI**(): `any`

#### Returns

`any`

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.md).[getAPI](../interfaces/IDatabaseConnection.md#getapi)

#### Defined in

[src/ManagedDatabaseConnection.ts:238](https://github.com/breautek/storm/blob/d45307d/src/ManagedDatabaseConnection.ts#L238)

___

### getInstantiationStack

▸ **getInstantiationStack**(): `string`

#### Returns

`string`

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.md).[getInstantiationStack](../interfaces/IDatabaseConnection.md#getinstantiationstack)

#### Defined in

[src/ManagedDatabaseConnection.ts:105](https://github.com/breautek/storm/blob/d45307d/src/ManagedDatabaseConnection.ts#L105)

___

### getTimeout

▸ **getTimeout**(): `number`

#### Returns

`number`

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.md).[getTimeout](../interfaces/IDatabaseConnection.md#gettimeout)

#### Defined in

[src/ManagedDatabaseConnection.ts:130](https://github.com/breautek/storm/blob/d45307d/src/ManagedDatabaseConnection.ts#L130)

___

### hasConnection

▸ **hasConnection**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/ManagedDatabaseConnection.ts:92](https://github.com/breautek/storm/blob/d45307d/src/ManagedDatabaseConnection.ts#L92)

___

### isClosed

▸ **isClosed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.md).[isClosed](../interfaces/IDatabaseConnection.md#isclosed)

#### Defined in

[src/ManagedDatabaseConnection.ts:75](https://github.com/breautek/storm/blob/d45307d/src/ManagedDatabaseConnection.ts#L75)

___

### isManaged

▸ **isManaged**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/ManagedDatabaseConnection.ts:88](https://github.com/breautek/storm/blob/d45307d/src/ManagedDatabaseConnection.ts#L88)

___

### isReadOnly

▸ **isReadOnly**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.md).[isReadOnly](../interfaces/IDatabaseConnection.md#isreadonly)

#### Defined in

[src/ManagedDatabaseConnection.ts:114](https://github.com/breautek/storm/blob/d45307d/src/ManagedDatabaseConnection.ts#L114)

___

### isTransaction

▸ **isTransaction**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.md).[isTransaction](../interfaces/IDatabaseConnection.md#istransaction)

#### Defined in

[src/ManagedDatabaseConnection.ts:181](https://github.com/breautek/storm/blob/d45307d/src/ManagedDatabaseConnection.ts#L181)

___

### isWriteRequired

▸ **isWriteRequired**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/ManagedDatabaseConnection.ts:84](https://github.com/breautek/storm/blob/d45307d/src/ManagedDatabaseConnection.ts#L84)

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

[src/ManagedDatabaseConnection.ts:140](https://github.com/breautek/storm/blob/d45307d/src/ManagedDatabaseConnection.ts#L140)

___

### rollback

▸ **rollback**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.md).[rollback](../interfaces/IDatabaseConnection.md#rollback)

#### Defined in

[src/ManagedDatabaseConnection.ts:203](https://github.com/breautek/storm/blob/d45307d/src/ManagedDatabaseConnection.ts#L203)

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

[src/ManagedDatabaseConnection.ts:45](https://github.com/breautek/storm/blob/d45307d/src/ManagedDatabaseConnection.ts#L45)

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

[src/ManagedDatabaseConnection.ts:96](https://github.com/breautek/storm/blob/d45307d/src/ManagedDatabaseConnection.ts#L96)

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

[src/ManagedDatabaseConnection.ts:124](https://github.com/breautek/storm/blob/d45307d/src/ManagedDatabaseConnection.ts#L124)

___

### startTransaction

▸ **startTransaction**(`isolationLevel?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isolationLevel?` | [`IsolationLevel`](../enums/IsolationLevel.md) |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IDatabaseConnection](../interfaces/IDatabaseConnection.md).[startTransaction](../interfaces/IDatabaseConnection.md#starttransaction)

#### Defined in

[src/ManagedDatabaseConnection.ts:168](https://github.com/breautek/storm/blob/d45307d/src/ManagedDatabaseConnection.ts#L168)

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

[src/ManagedDatabaseConnection.ts:149](https://github.com/breautek/storm/blob/d45307d/src/ManagedDatabaseConnection.ts#L149)
