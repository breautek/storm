[@breautek/storm](../README.md) / MySQLDatabase

# Class: MySQLDatabase

## Hierarchy

- [`Database`](Database.md)<`MySQL.PoolConfig`, `MySQL.PoolConnection`\>

  ↳ **`MySQLDatabase`**

## Table of contents

### Constructors

- [constructor](MySQLDatabase.md#constructor)

### Methods

- [\_addNode](MySQLDatabase.md#_addnode)
- [\_destroy](MySQLDatabase.md#_destroy)
- [\_getConnection](MySQLDatabase.md#_getconnection)
- [\_removeNode](MySQLDatabase.md#_removenode)
- [addMaster](MySQLDatabase.md#addmaster)
- [addSlave](MySQLDatabase.md#addslave)
- [destroy](MySQLDatabase.md#destroy)
- [escape](MySQLDatabase.md#escape)
- [getConnection](MySQLDatabase.md#getconnection)
- [removeMaster](MySQLDatabase.md#removemaster)
- [removeSlave](MySQLDatabase.md#removeslave)
- [escape](MySQLDatabase.md#escape-1)

## Constructors

### constructor

• **new MySQLDatabase**()

#### Overrides

[Database](Database.md).[constructor](Database.md#constructor)

#### Defined in

[src/MySQLDatabase.ts:27](https://github.com/breautek/storm/blob/cf7306d/src/MySQLDatabase.ts#L27)

## Methods

### \_addNode

▸ `Protected` **_addNode**(`nodeID`, `config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeID` | `string` |
| `config` | `PoolConfig` |

#### Returns

`void`

#### Overrides

[Database](Database.md).[_addNode](Database.md#_addnode)

#### Defined in

[src/MySQLDatabase.ts:49](https://github.com/breautek/storm/blob/cf7306d/src/MySQLDatabase.ts#L49)

___

### \_destroy

▸ `Protected` **_destroy**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

[Database](Database.md).[_destroy](Database.md#_destroy)

#### Defined in

[src/MySQLDatabase.ts:59](https://github.com/breautek/storm/blob/cf7306d/src/MySQLDatabase.ts#L59)

___

### \_getConnection

▸ `Protected` **_getConnection**(`query`, `requireWriteAccess`): `Promise`<[`MySQLConnection`](MySQLConnection.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `requireWriteAccess` | `boolean` |

#### Returns

`Promise`<[`MySQLConnection`](MySQLConnection.md)\>

#### Overrides

[Database](Database.md).[_getConnection](Database.md#_getconnection)

#### Defined in

[src/MySQLDatabase.ts:72](https://github.com/breautek/storm/blob/cf7306d/src/MySQLDatabase.ts#L72)

___

### \_removeNode

▸ `Protected` **_removeNode**(`nodeID`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeID` | `string` |

#### Returns

`void`

#### Overrides

[Database](Database.md).[_removeNode](Database.md#_removenode)

#### Defined in

[src/MySQLDatabase.ts:54](https://github.com/breautek/storm/blob/cf7306d/src/MySQLDatabase.ts#L54)

___

### addMaster

▸ **addMaster**(`config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `PoolConfig` |

#### Returns

`void`

#### Inherited from

[Database](Database.md).[addMaster](Database.md#addmaster)

#### Defined in

[src/Database.ts:31](https://github.com/breautek/storm/blob/cf7306d/src/Database.ts#L31)

___

### addSlave

▸ **addSlave**(`slaveID`, `config`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `slaveID` | `string` |
| `config` | `PoolConfig` |

#### Returns

`string`

#### Inherited from

[Database](Database.md).[addSlave](Database.md#addslave)

#### Defined in

[src/Database.ts:45](https://github.com/breautek/storm/blob/cf7306d/src/Database.ts#L45)

___

### destroy

▸ **destroy**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[Database](Database.md).[destroy](Database.md#destroy)

#### Defined in

[src/Database.ts:77](https://github.com/breautek/storm/blob/cf7306d/src/Database.ts#L77)

___

### escape

▸ **escape**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

#### Overrides

[Database](Database.md).[escape](Database.md#escape)

#### Defined in

[src/MySQLDatabase.ts:40](https://github.com/breautek/storm/blob/cf7306d/src/MySQLDatabase.ts#L40)

___

### getConnection

▸ **getConnection**(`requireWriteAccess?`, `nodeID?`): `Promise`<[`DatabaseConnection`](DatabaseConnection.md)<`PoolConnection`\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `requireWriteAccess` | `boolean` | `false` |
| `nodeID?` | `string` | `undefined` |

#### Returns

`Promise`<[`DatabaseConnection`](DatabaseConnection.md)<`PoolConnection`\>\>

#### Inherited from

[Database](Database.md).[getConnection](Database.md#getconnection)

#### Defined in

[src/Database.ts:64](https://github.com/breautek/storm/blob/cf7306d/src/Database.ts#L64)

___

### removeMaster

▸ **removeMaster**(): `void`

#### Returns

`void`

#### Inherited from

[Database](Database.md).[removeMaster](Database.md#removemaster)

#### Defined in

[src/Database.ts:40](https://github.com/breautek/storm/blob/cf7306d/src/Database.ts#L40)

___

### removeSlave

▸ **removeSlave**(`slaveID`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `slaveID` | `string` |

#### Returns

`void`

#### Inherited from

[Database](Database.md).[removeSlave](Database.md#removeslave)

#### Defined in

[src/Database.ts:54](https://github.com/breautek/storm/blob/cf7306d/src/Database.ts#L54)

___

### escape

▸ `Static` **escape**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

#### Defined in

[src/MySQLDatabase.ts:45](https://github.com/breautek/storm/blob/cf7306d/src/MySQLDatabase.ts#L45)
