[@breautek/storm](../README.md) / [ResponseData](../modules/ResponseData.md) / ResponseData

# Class: ResponseData<TData\>

[ResponseData](../modules/ResponseData.md).ResponseData

## Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `any` |

## Table of contents

### Constructors

- [constructor](ResponseData.ResponseData-1.md#constructor)

### Methods

- [getData](ResponseData.ResponseData-1.md#getdata)
- [getHeaders](ResponseData.ResponseData-1.md#getheaders)
- [getRedirect](ResponseData.ResponseData-1.md#getredirect)
- [getStatus](ResponseData.ResponseData-1.md#getstatus)
- [redirect](ResponseData.ResponseData-1.md#redirect)
- [setHeader](ResponseData.ResponseData-1.md#setheader)

## Constructors

### constructor

• **new ResponseData**<`TData`\>(`status`, `data?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`StatusCode`](../enums/StatusCode.StatusCode-1.md) |
| `data?` | `TData` |

#### Defined in

[src/ResponseData.ts:25](https://github.com/breautek/storm/blob/7b25240/src/ResponseData.ts#L25)

## Methods

### getData

▸ **getData**(): `TData`

#### Returns

`TData`

#### Defined in

[src/ResponseData.ts:44](https://github.com/breautek/storm/blob/7b25240/src/ResponseData.ts#L44)

___

### getHeaders

▸ **getHeaders**(): `Map`<`string`, `string`\>

#### Returns

`Map`<`string`, `string`\>

#### Defined in

[src/ResponseData.ts:36](https://github.com/breautek/storm/blob/7b25240/src/ResponseData.ts#L36)

___

### getRedirect

▸ **getRedirect**(): `string`

#### Returns

`string`

#### Defined in

[src/ResponseData.ts:52](https://github.com/breautek/storm/blob/7b25240/src/ResponseData.ts#L52)

___

### getStatus

▸ **getStatus**(): [`StatusCode`](../enums/StatusCode.StatusCode-1.md)

#### Returns

[`StatusCode`](../enums/StatusCode.StatusCode-1.md)

#### Defined in

[src/ResponseData.ts:40](https://github.com/breautek/storm/blob/7b25240/src/ResponseData.ts#L40)

___

### redirect

▸ **redirect**(`url`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`void`

#### Defined in

[src/ResponseData.ts:48](https://github.com/breautek/storm/blob/7b25240/src/ResponseData.ts#L48)

___

### setHeader

▸ **setHeader**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/ResponseData.ts:32](https://github.com/breautek/storm/blob/7b25240/src/ResponseData.ts#L32)
