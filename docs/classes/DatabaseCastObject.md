[@breautek/storm](../README.md) / DatabaseCastObject

# Class: DatabaseCastObject

## Hierarchy

- **`DatabaseCastObject`**

  ↳ [`Point`](Point.md)

  ↳ [`LineString`](LineString.md)

  ↳ [`Polygon`](Polygon.md)

## Table of contents

### Constructors

- [constructor](DatabaseCastObject.md#constructor)

### Methods

- [\_toSQLString](DatabaseCastObject.md#_tosqlstring)
- [escape](DatabaseCastObject.md#escape)
- [toSqlString](DatabaseCastObject.md#tosqlstring)

## Constructors

### constructor

• **new DatabaseCastObject**()

## Methods

### \_toSQLString

▸ `Protected` `Abstract` **_toSQLString**(): `string`

#### Returns

`string`

#### Defined in

[src/DatabaseCastObject.ts:28](https://github.com/breautek/storm/blob/d45307d/src/DatabaseCastObject.ts#L28)

___

### escape

▸ **escape**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

#### Defined in

[src/DatabaseCastObject.ts:24](https://github.com/breautek/storm/blob/d45307d/src/DatabaseCastObject.ts#L24)

___

### toSqlString

▸ **toSqlString**(): `string`

#### Returns

`string`

#### Defined in

[src/DatabaseCastObject.ts:20](https://github.com/breautek/storm/blob/d45307d/src/DatabaseCastObject.ts#L20)
