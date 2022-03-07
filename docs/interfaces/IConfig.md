[@breautek/storm](../README.md) / IConfig

# Interface: IConfig

## Table of contents

### Properties

- [authentication\_header](IConfig.md#authentication_header)
- [backend\_authentication\_header](IConfig.md#backend_authentication_header)
- [backend\_authentication\_secret](IConfig.md#backend_authentication_secret)
- [bind](IConfig.md#bind)
- [database](IConfig.md#database)
- [log](IConfig.md#log)
- [port](IConfig.md#port)
- [request\_size\_limit](IConfig.md#request_size_limit)

## Properties

### authentication\_header

• `Optional` **authentication\_header**: `string`

#### Defined in

[src/IConfig.ts:26](https://github.com/breautek/storm/blob/2f08fb3/src/IConfig.ts#L26)

___

### backend\_authentication\_header

• `Optional` **backend\_authentication\_header**: `string`

#### Defined in

[src/IConfig.ts:27](https://github.com/breautek/storm/blob/2f08fb3/src/IConfig.ts#L27)

___

### backend\_authentication\_secret

• `Optional` **backend\_authentication\_secret**: `string`

#### Defined in

[src/IConfig.ts:28](https://github.com/breautek/storm/blob/2f08fb3/src/IConfig.ts#L28)

___

### bind

• `Optional` **bind**: `string`

#### Defined in

[src/IConfig.ts:22](https://github.com/breautek/storm/blob/2f08fb3/src/IConfig.ts#L22)

___

### database

• `Optional` **database**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `main?` | [`IDatabaseConfig`](IDatabaseConfig.md)<``"MASTER"``\> |
| `query_timeout?` | `number` |
| `replicationNodes?` | [`IDatabaseConfig`](IDatabaseConfig.md)<`string`\>[] |

#### Defined in

[src/IConfig.ts:38](https://github.com/breautek/storm/blob/2f08fb3/src/IConfig.ts#L38)

___

### log

• `Optional` **log**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `directory?` | `string` |
| `filters?` | `string`[] |
| `level?` | `LogLevel` |

#### Defined in

[src/IConfig.ts:31](https://github.com/breautek/storm/blob/2f08fb3/src/IConfig.ts#L31)

___

### port

• `Optional` **port**: `number`

#### Defined in

[src/IConfig.ts:23](https://github.com/breautek/storm/blob/2f08fb3/src/IConfig.ts#L23)

___

### request\_size\_limit

• `Optional` **request\_size\_limit**: `number`

#### Defined in

[src/IConfig.ts:45](https://github.com/breautek/storm/blob/2f08fb3/src/IConfig.ts#L45)