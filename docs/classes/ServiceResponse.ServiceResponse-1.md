[@breautek/storm](../README.md) / [ServiceResponse](../modules/ServiceResponse.md) / ServiceResponse

# Class: ServiceResponse

[ServiceResponse](../modules/ServiceResponse.md).ServiceResponse

## Table of contents

### Constructors

- [constructor](ServiceResponse.ServiceResponse-1.md#constructor)

### Methods

- [getJSON](ServiceResponse.ServiceResponse-1.md#getjson)
- [getRaw](ServiceResponse.ServiceResponse-1.md#getraw)
- [getUTF8](ServiceResponse.ServiceResponse-1.md#getutf8)

## Constructors

### constructor

• **new ServiceResponse**(`data`, `response`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Buffer` |
| `response` | `IncomingMessage` |

#### Defined in

[src/ServiceResponse.ts:23](https://github.com/breautek/storm/blob/621aeec/src/ServiceResponse.ts#L23)

## Methods

### getJSON

▸ **getJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/ServiceResponse.ts:36](https://github.com/breautek/storm/blob/621aeec/src/ServiceResponse.ts#L36)

___

### getRaw

▸ **getRaw**(): `Buffer`

#### Returns

`Buffer`

#### Defined in

[src/ServiceResponse.ts:28](https://github.com/breautek/storm/blob/621aeec/src/ServiceResponse.ts#L28)

___

### getUTF8

▸ **getUTF8**(): `string`

#### Returns

`string`

#### Defined in

[src/ServiceResponse.ts:32](https://github.com/breautek/storm/blob/621aeec/src/ServiceResponse.ts#L32)
