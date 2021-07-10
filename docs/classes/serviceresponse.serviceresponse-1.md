[@breautek/storm](../README.md) / [ServiceResponse](../modules/serviceresponse.md) / ServiceResponse

# Class: ServiceResponse

[ServiceResponse](../modules/serviceresponse.md).ServiceResponse

## Table of contents

### Constructors

- [constructor](serviceresponse.serviceresponse-1.md#constructor)

### Methods

- [getJSON](serviceresponse.serviceresponse-1.md#getjson)
- [getRaw](serviceresponse.serviceresponse-1.md#getraw)
- [getUTF8](serviceresponse.serviceresponse-1.md#getutf8)

## Constructors

### constructor

• **new ServiceResponse**(`data`, `response`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Buffer` |
| `response` | `IncomingMessage` |

#### Defined in

[src/ServiceResponse.ts:21](https://github.com/breautek/storm/blob/fff2ea4/src/ServiceResponse.ts#L21)

## Methods

### getJSON

▸ **getJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/ServiceResponse.ts:36](https://github.com/breautek/storm/blob/fff2ea4/src/ServiceResponse.ts#L36)

___

### getRaw

▸ **getRaw**(): `Buffer`

#### Returns

`Buffer`

#### Defined in

[src/ServiceResponse.ts:28](https://github.com/breautek/storm/blob/fff2ea4/src/ServiceResponse.ts#L28)

___

### getUTF8

▸ **getUTF8**(): `string`

#### Returns

`string`

#### Defined in

[src/ServiceResponse.ts:32](https://github.com/breautek/storm/blob/fff2ea4/src/ServiceResponse.ts#L32)
