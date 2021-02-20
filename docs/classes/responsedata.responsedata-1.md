[@breautek/storm](../README.md) / [ResponseData](../modules/responsedata.md) / ResponseData

# Class: ResponseData<TData\>

[ResponseData](../modules/responsedata.md).ResponseData

## Type parameters

Name | Default |
------ | ------ |
`TData` | *any* |

## Hierarchy

* **ResponseData**

## Table of contents

### Constructors

- [constructor](responsedata.responsedata-1.md#constructor)

### Methods

- [getData](responsedata.responsedata-1.md#getdata)
- [getStatus](responsedata.responsedata-1.md#getstatus)

## Constructors

### constructor

\+ **new ResponseData**<TData\>(`status`: [*StatusCode*](../enums/statuscode.statuscode-1.md), `data?`: TData): [*ResponseData*](responsedata.responsedata-1.md)<TData\>

#### Type parameters:

Name | Default |
------ | ------ |
`TData` | *any* |

#### Parameters:

Name | Type |
------ | ------ |
`status` | [*StatusCode*](../enums/statuscode.statuscode-1.md) |
`data?` | TData |

**Returns:** [*ResponseData*](responsedata.responsedata-1.md)<TData\>

Defined in: [src/ResponseData.ts:21](https://github.com/breautek/storm/blob/4e204d2/src/ResponseData.ts#L21)

## Methods

### getData

▸ **getData**(): TData

**Returns:** TData

Defined in: [src/ResponseData.ts:32](https://github.com/breautek/storm/blob/4e204d2/src/ResponseData.ts#L32)

___

### getStatus

▸ **getStatus**(): [*StatusCode*](../enums/statuscode.statuscode-1.md)

**Returns:** [*StatusCode*](../enums/statuscode.statuscode-1.md)

Defined in: [src/ResponseData.ts:28](https://github.com/breautek/storm/blob/4e204d2/src/ResponseData.ts#L28)
