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
- [getStatus](ResponseData.ResponseData-1.md#getstatus)

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

[src/ResponseData.ts:23](https://github.com/breautek/storm/blob/0825061/src/ResponseData.ts#L23)

## Methods

### getData

▸ **getData**(): `TData`

#### Returns

`TData`

#### Defined in

[src/ResponseData.ts:32](https://github.com/breautek/storm/blob/0825061/src/ResponseData.ts#L32)

___

### getStatus

▸ **getStatus**(): [`StatusCode`](../enums/StatusCode.StatusCode-1.md)

#### Returns

[`StatusCode`](../enums/StatusCode.StatusCode-1.md)

#### Defined in

[src/ResponseData.ts:28](https://github.com/breautek/storm/blob/0825061/src/ResponseData.ts#L28)
