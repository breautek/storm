[@breautek/storm](../README.md) / [IConfig](../modules/iconfig.md) / IConfig

# Interface: IConfig

[IConfig](../modules/iconfig.md).IConfig

## Hierarchy

* **IConfig**

## Table of contents

### Properties

- [authentication\_header](iconfig.iconfig-1.md#authentication_header)
- [backend\_authentication\_header](iconfig.iconfig-1.md#backend_authentication_header)
- [backend\_authentication\_secret](iconfig.iconfig-1.md#backend_authentication_secret)
- [bind](iconfig.iconfig-1.md#bind)
- [database](iconfig.iconfig-1.md#database)
- [log](iconfig.iconfig-1.md#log)
- [port](iconfig.iconfig-1.md#port)
- [request\_size\_limit](iconfig.iconfig-1.md#request_size_limit)

## Properties

### authentication\_header

• `Optional` **authentication\_header**: *string*

Defined in: [src/IConfig.ts:26](https://github.com/breautek/storm/blob/d5629c8/src/IConfig.ts#L26)

___

### backend\_authentication\_header

• `Optional` **backend\_authentication\_header**: *string*

Defined in: [src/IConfig.ts:27](https://github.com/breautek/storm/blob/d5629c8/src/IConfig.ts#L27)

___

### backend\_authentication\_secret

• `Optional` **backend\_authentication\_secret**: *string*

Defined in: [src/IConfig.ts:28](https://github.com/breautek/storm/blob/d5629c8/src/IConfig.ts#L28)

___

### bind

• `Optional` **bind**: *string*

Defined in: [src/IConfig.ts:22](https://github.com/breautek/storm/blob/d5629c8/src/IConfig.ts#L22)

___

### database

• `Optional` **database**: { `main?`: [*IDatabaseConfig*](idatabaseconfig.idatabaseconfig-1.md)<*MASTER*\> ; `query_timeout?`: *number* ; `replicationNodes?`: [*IDatabaseConfig*](idatabaseconfig.idatabaseconfig-1.md)<*string*\>[]  }

#### Type declaration:

Name | Type |
------ | ------ |
`main?` | [*IDatabaseConfig*](idatabaseconfig.idatabaseconfig-1.md)<*MASTER*\> |
`query_timeout?` | *number* |
`replicationNodes?` | [*IDatabaseConfig*](idatabaseconfig.idatabaseconfig-1.md)<*string*\>[] |

Defined in: [src/IConfig.ts:38](https://github.com/breautek/storm/blob/d5629c8/src/IConfig.ts#L38)

___

### log

• `Optional` **log**: { `directory?`: *string* ; `filters?`: *string*[] ; `level?`: LogLevel  }

#### Type declaration:

Name | Type |
------ | ------ |
`directory?` | *string* |
`filters?` | *string*[] |
`level?` | LogLevel |

Defined in: [src/IConfig.ts:31](https://github.com/breautek/storm/blob/d5629c8/src/IConfig.ts#L31)

___

### port

• `Optional` **port**: *number*

Defined in: [src/IConfig.ts:23](https://github.com/breautek/storm/blob/d5629c8/src/IConfig.ts#L23)

___

### request\_size\_limit

• `Optional` **request\_size\_limit**: *number*

Defined in: [src/IConfig.ts:45](https://github.com/breautek/storm/blob/d5629c8/src/IConfig.ts#L45)
