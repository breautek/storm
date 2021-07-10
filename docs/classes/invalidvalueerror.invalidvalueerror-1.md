[@breautek/storm](../README.md) / [InvalidValueError](../modules/invalidvalueerror.md) / InvalidValueError

# Class: InvalidValueError

[InvalidValueError](../modules/invalidvalueerror.md).InvalidValueError

## Hierarchy

- [`StormError`](stormerror.stormerror-1.md)<`Object`\>

  ↳ **`InvalidValueError`**

## Table of contents

### Constructors

- [constructor](invalidvalueerror.invalidvalueerror-1.md#constructor)

### Properties

- [message](invalidvalueerror.invalidvalueerror-1.md#message)
- [name](invalidvalueerror.invalidvalueerror-1.md#name)
- [stack](invalidvalueerror.invalidvalueerror-1.md#stack)
- [prepareStackTrace](invalidvalueerror.invalidvalueerror-1.md#preparestacktrace)
- [stackTraceLimit](invalidvalueerror.invalidvalueerror-1.md#stacktracelimit)

### Methods

- [getCode](invalidvalueerror.invalidvalueerror-1.md#getcode)
- [getErrorResponse](invalidvalueerror.invalidvalueerror-1.md#geterrorresponse)
- [getExitCode](invalidvalueerror.invalidvalueerror-1.md#getexitcode)
- [getHTTPCode](invalidvalueerror.invalidvalueerror-1.md#gethttpcode)
- [getMessage](invalidvalueerror.invalidvalueerror-1.md#getmessage)
- [getPrivateDetails](invalidvalueerror.invalidvalueerror-1.md#getprivatedetails)
- [getPublicDetails](invalidvalueerror.invalidvalueerror-1.md#getpublicdetails)
- [captureStackTrace](invalidvalueerror.invalidvalueerror-1.md#capturestacktrace)

## Constructors

### constructor

• **new InvalidValueError**(`variable`, `expected`, `got`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `string` |
| `expected` | `any` |
| `got` | `any` |

#### Overrides

[StormError](stormerror.stormerror-1.md).[constructor](stormerror.stormerror-1.md#constructor)

#### Defined in

[src/InvalidValueError.ts:25](https://github.com/breautek/storm/blob/fff2ea4/src/InvalidValueError.ts#L25)

## Properties

### message

• **message**: `string`

#### Inherited from

[StormError](stormerror.stormerror-1.md).[message](stormerror.stormerror-1.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: `string`

#### Inherited from

[StormError](stormerror.stormerror-1.md).[name](stormerror.stormerror-1.md#name)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:973

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[StormError](stormerror.stormerror-1.md).[stack](stormerror.stormerror-1.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

Optional override for formatting stack traces

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

[StormError](stormerror.stormerror-1.md).[prepareStackTrace](stormerror.stormerror-1.md#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[StormError](stormerror.stormerror-1.md).[stackTraceLimit](stormerror.stormerror-1.md#stacktracelimit)

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### getCode

▸ **getCode**(): [`ErrorCode`](../enums/errorcode.errorcode-1.md)

#### Returns

[`ErrorCode`](../enums/errorcode.errorcode-1.md)

#### Overrides

[StormError](stormerror.stormerror-1.md).[getCode](stormerror.stormerror-1.md#getcode)

#### Defined in

[src/InvalidValueError.ts:40](https://github.com/breautek/storm/blob/fff2ea4/src/InvalidValueError.ts#L40)

___

### getErrorResponse

▸ **getErrorResponse**(): [`IErrorResponse`](../interfaces/stormerror.ierrorresponse.md)

#### Returns

[`IErrorResponse`](../interfaces/stormerror.ierrorresponse.md)

#### Inherited from

[StormError](stormerror.stormerror-1.md).[getErrorResponse](stormerror.stormerror-1.md#geterrorresponse)

#### Defined in

[src/StormError.ts:70](https://github.com/breautek/storm/blob/fff2ea4/src/StormError.ts#L70)

___

### getExitCode

▸ **getExitCode**(): [`ExitCode`](../enums/exitcode.exitcode-1.md)

#### Returns

[`ExitCode`](../enums/exitcode.exitcode-1.md)

#### Inherited from

[StormError](stormerror.stormerror-1.md).[getExitCode](stormerror.stormerror-1.md#getexitcode)

#### Defined in

[src/StormError.ts:79](https://github.com/breautek/storm/blob/fff2ea4/src/StormError.ts#L79)

___

### getHTTPCode

▸ **getHTTPCode**(): [`StatusCode`](../enums/statuscode.statuscode-1.md)

#### Returns

[`StatusCode`](../enums/statuscode.statuscode-1.md)

#### Overrides

[StormError](stormerror.stormerror-1.md).[getHTTPCode](stormerror.stormerror-1.md#gethttpcode)

#### Defined in

[src/InvalidValueError.ts:44](https://github.com/breautek/storm/blob/fff2ea4/src/InvalidValueError.ts#L44)

___

### getMessage

▸ **getMessage**(): `string`

#### Returns

`string`

#### Overrides

[StormError](stormerror.stormerror-1.md).[getMessage](stormerror.stormerror-1.md#getmessage)

#### Defined in

[src/InvalidValueError.ts:35](https://github.com/breautek/storm/blob/fff2ea4/src/InvalidValueError.ts#L35)

___

### getPrivateDetails

▸ **getPrivateDetails**(): `Object`

Private details are only logged to the server log.
They are kept secret from the client.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `expected` | `any` |
| `got` | `any` |
| `variable` | `string` |

#### Inherited from

[StormError](stormerror.stormerror-1.md).[getPrivateDetails](stormerror.stormerror-1.md#getprivatedetails)

#### Defined in

[src/StormError.ts:62](https://github.com/breautek/storm/blob/fff2ea4/src/StormError.ts#L62)

___

### getPublicDetails

▸ **getPublicDetails**(): [`IAdditionalErrorDetails`](../interfaces/stormerror.iadditionalerrordetails.md)

Sends details to the client.

#### Returns

[`IAdditionalErrorDetails`](../interfaces/stormerror.iadditionalerrordetails.md)

#### Inherited from

[StormError](stormerror.stormerror-1.md).[getPublicDetails](stormerror.stormerror-1.md#getpublicdetails)

#### Defined in

[src/StormError.ts:54](https://github.com/breautek/storm/blob/fff2ea4/src/StormError.ts#L54)

___

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

[StormError](stormerror.stormerror-1.md).[captureStackTrace](stormerror.stormerror-1.md#capturestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:4
