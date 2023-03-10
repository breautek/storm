[@breautek/storm](../README.md) / Point

# Class: Point

## Hierarchy

- [`DatabaseCastObject`](DatabaseCastObject.md)

  ↳ **`Point`**

## Table of contents

### Constructors

- [constructor](Point.md#constructor)

### Methods

- [\_toSQLString](Point.md#_tosqlstring)
- [escape](Point.md#escape)
- [toSqlString](Point.md#tosqlstring)

## Constructors

### constructor

• **new Point**(`x?`, `y?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` |
| `y?` | `number` |

#### Overrides

[DatabaseCastObject](DatabaseCastObject.md).[constructor](DatabaseCastObject.md#constructor)

#### Defined in

[src/Point.ts:23](https://github.com/breautek/storm/blob/d45307d/src/Point.ts#L23)

## Methods

### \_toSQLString

▸ `Protected` **_toSQLString**(): `string`

#### Returns

`string`

#### Overrides

[DatabaseCastObject](DatabaseCastObject.md).[_toSQLString](DatabaseCastObject.md#_tosqlstring)

#### Defined in

[src/Point.ts:30](https://github.com/breautek/storm/blob/d45307d/src/Point.ts#L30)

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

[src/DatabaseCastObject.ts:24](https://github.com/breautek/storm/blob/d45307d/src/DatabaseCastObject.ts#L24)

___

### toSqlString

▸ **toSqlString**(): `string`

#### Returns

`string`

#### Inherited from

[DatabaseCastObject](DatabaseCastObject.md).[toSqlString](DatabaseCastObject.md#tosqlstring)

#### Defined in

[src/DatabaseCastObject.ts:20](https://github.com/breautek/storm/blob/d45307d/src/DatabaseCastObject.ts#L20)
