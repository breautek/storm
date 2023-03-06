[@breautek/storm](../README.md) / ServiceResponse

# Class: ServiceResponse

## Table of contents

### Constructors

- [constructor](ServiceResponse.md#constructor)

### Methods

- [getJSON](ServiceResponse.md#getjson)
- [getRaw](ServiceResponse.md#getraw)
- [getStatusCode](ServiceResponse.md#getstatuscode)
- [getUTF8](ServiceResponse.md#getutf8)

## Constructors

### constructor

• **new ServiceResponse**(`data`, `response`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Buffer` |
| `response` | `IncomingMessage` |

#### Defined in

[src/ServiceResponse.ts:24](https://github.com/breautek/storm/blob/3748147/src/ServiceResponse.ts#L24)

## Methods

### getJSON

▸ **getJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/ServiceResponse.ts:37](https://github.com/breautek/storm/blob/3748147/src/ServiceResponse.ts#L37)

___

### getRaw

▸ **getRaw**(): `Buffer`

#### Returns

`Buffer`

#### Defined in

[src/ServiceResponse.ts:29](https://github.com/breautek/storm/blob/3748147/src/ServiceResponse.ts#L29)

___

### getStatusCode

▸ **getStatusCode**(): [`StatusCode`](../enums/StatusCode.md)

#### Returns

[`StatusCode`](../enums/StatusCode.md)

#### Defined in

[src/ServiceResponse.ts:41](https://github.com/breautek/storm/blob/3748147/src/ServiceResponse.ts#L41)

___

### getUTF8

▸ **getUTF8**(): `string`

#### Returns

`string`

#### Defined in

[src/ServiceResponse.ts:33](https://github.com/breautek/storm/blob/3748147/src/ServiceResponse.ts#L33)
