[@breautek/storm](../README.md) / Polygon

# Class: Polygon

## Hierarchy

- [`DatabaseCastObject`](DatabaseCastObject.md)

  ↳ **`Polygon`**

## Table of contents

### Constructors

- [constructor](Polygon.md#constructor)

### Methods

- [\_toSQLString](Polygon.md#_tosqlstring)
- [escape](Polygon.md#escape)
- [toSqlString](Polygon.md#tosqlstring)

## Constructors

### constructor

• **new Polygon**(`coordinates?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinates?` | [`TCoordinate`](../README.md#tcoordinate)[][] |

#### Overrides

[DatabaseCastObject](DatabaseCastObject.md).[constructor](DatabaseCastObject.md#constructor)

#### Defined in

[src/Polygon.ts:23](https://github.com/breautek/storm/blob/eca48f5/src/Polygon.ts#L23)

## Methods

### \_toSQLString

▸ `Protected` **_toSQLString**(): `string`

#### Returns

`string`

#### Overrides

[DatabaseCastObject](DatabaseCastObject.md).[_toSQLString](DatabaseCastObject.md#_tosqlstring)

#### Defined in

[src/Polygon.ts:29](https://github.com/breautek/storm/blob/eca48f5/src/Polygon.ts#L29)

___

### escape

▸ **escape**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

#### Inherited from

[DatabaseCastObject](DatabaseCastObject.md).[escape](DatabaseCastObject.md#escape)

#### Defined in

[src/DatabaseCastObject.ts:24](https://github.com/breautek/storm/blob/eca48f5/src/DatabaseCastObject.ts#L24)

___

### toSqlString

▸ **toSqlString**(): `string`

#### Returns

`string`

#### Inherited from

[DatabaseCastObject](DatabaseCastObject.md).[toSqlString](DatabaseCastObject.md#tosqlstring)

#### Defined in

[src/DatabaseCastObject.ts:20](https://github.com/breautek/storm/blob/eca48f5/src/DatabaseCastObject.ts#L20)
