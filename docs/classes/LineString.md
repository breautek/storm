[@breautek/storm](../README.md) / LineString

# Class: LineString

## Hierarchy

- [`DatabaseCastObject`](DatabaseCastObject.md)

  ↳ **`LineString`**

## Table of contents

### Constructors

- [constructor](LineString.md#constructor)

### Methods

- [\_toSQLString](LineString.md#_tosqlstring)
- [escape](LineString.md#escape)
- [toSqlString](LineString.md#tosqlstring)

## Constructors

### constructor

• **new LineString**(`coordinates?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinates?` | [`TCoordinate`](../README.md#tcoordinate)[] |

#### Overrides

[DatabaseCastObject](DatabaseCastObject.md).[constructor](DatabaseCastObject.md#constructor)

#### Defined in

[src/LineString.ts:23](https://github.com/breautek/storm/blob/daf9166/src/LineString.ts#L23)

## Methods

### \_toSQLString

▸ `Protected` **_toSQLString**(): `string`

#### Returns

`string`

#### Overrides

[DatabaseCastObject](DatabaseCastObject.md).[_toSQLString](DatabaseCastObject.md#_tosqlstring)

#### Defined in

[src/LineString.ts:29](https://github.com/breautek/storm/blob/daf9166/src/LineString.ts#L29)

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

[src/DatabaseCastObject.ts:24](https://github.com/breautek/storm/blob/daf9166/src/DatabaseCastObject.ts#L24)

___

### toSqlString

▸ **toSqlString**(): `string`

#### Returns

`string`

#### Inherited from

[DatabaseCastObject](DatabaseCastObject.md).[toSqlString](DatabaseCastObject.md#tosqlstring)

#### Defined in

[src/DatabaseCastObject.ts:20](https://github.com/breautek/storm/blob/daf9166/src/DatabaseCastObject.ts#L20)
