[@breautek/storm](../README.md) / [Exports](../modules.md) / [ServiceResponse](../modules/serviceresponse.md) / ServiceResponse

# Class: ServiceResponse

[ServiceResponse](../modules/serviceresponse.md).ServiceResponse

## Hierarchy

* **ServiceResponse**

## Table of contents

### Constructors

- [constructor](serviceresponse.serviceresponse-1.md#constructor)

### Methods

- [getJSON](serviceresponse.serviceresponse-1.md#getjson)
- [getRaw](serviceresponse.serviceresponse-1.md#getraw)
- [getUTF8](serviceresponse.serviceresponse-1.md#getutf8)

## Constructors

### constructor

\+ **new ServiceResponse**(`data`: *Buffer*, `response`: *IncomingMessage*): [*ServiceResponse*](serviceresponse.serviceresponse-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`data` | *Buffer* |
`response` | *IncomingMessage* |

**Returns:** [*ServiceResponse*](serviceresponse.serviceresponse-1.md)

Defined in: [src/ServiceResponse.ts:21](https://github.com/breautek/storm/blob/0d2af7e/src/ServiceResponse.ts#L21)

## Methods

### getJSON

▸ **getJSON**(): *any*

**Returns:** *any*

Defined in: [src/ServiceResponse.ts:36](https://github.com/breautek/storm/blob/0d2af7e/src/ServiceResponse.ts#L36)

___

### getRaw

▸ **getRaw**(): *Buffer*

**Returns:** *Buffer*

Defined in: [src/ServiceResponse.ts:28](https://github.com/breautek/storm/blob/0d2af7e/src/ServiceResponse.ts#L28)

___

### getUTF8

▸ **getUTF8**(): *string*

**Returns:** *string*

Defined in: [src/ServiceResponse.ts:32](https://github.com/breautek/storm/blob/0d2af7e/src/ServiceResponse.ts#L32)
