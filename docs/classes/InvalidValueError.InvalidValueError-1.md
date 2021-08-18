[@breautek/storm](../README.md) / [InvalidValueError](../modules/InvalidValueError.md) / InvalidValueError

# Class: InvalidValueError

[InvalidValueError](../modules/InvalidValueError.md).InvalidValueError

## Hierarchy

- [`StormError`](StormError.StormError-1.md)<`Object`\>

  ↳ **`InvalidValueError`**

## Table of contents

### Constructors

- [constructor](InvalidValueError.InvalidValueError-1.md#constructor)

### Properties

- [message](InvalidValueError.InvalidValueError-1.md#message)
- [name](InvalidValueError.InvalidValueError-1.md#name)
- [stack](InvalidValueError.InvalidValueError-1.md#stack)
- [prepareStackTrace](InvalidValueError.InvalidValueError-1.md#preparestacktrace)
- [stackTraceLimit](InvalidValueError.InvalidValueError-1.md#stacktracelimit)

### Methods

- [getCode](InvalidValueError.InvalidValueError-1.md#getcode)
- [getErrorResponse](InvalidValueError.InvalidValueError-1.md#geterrorresponse)
- [getExitCode](InvalidValueError.InvalidValueError-1.md#getexitcode)
- [getHTTPCode](InvalidValueError.InvalidValueError-1.md#gethttpcode)
- [getMessage](InvalidValueError.InvalidValueError-1.md#getmessage)
- [getPrivateDetails](InvalidValueError.InvalidValueError-1.md#getprivatedetails)
- [getPublicDetails](InvalidValueError.InvalidValueError-1.md#getpublicdetails)
- [captureStackTrace](InvalidValueError.InvalidValueError-1.md#capturestacktrace)

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

[StormError](StormError.StormError-1.md).[constructor](StormError.StormError-1.md#constructor)

#### Defined in

[src/InvalidValueError.ts:27](https://github.com/breautek/storm/blob/3807444/src/InvalidValueError.ts#L27)

## Properties

### message

• **message**: `string`

#### Inherited from

[StormError](StormError.StormError-1.md).[message](StormError.StormError-1.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: `string`

#### Inherited from

[StormError](StormError.StormError-1.md).[name](StormError.StormError-1.md#name)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:973

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[StormError](StormError.StormError-1.md).[stack](StormError.StormError-1.md#stack)

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

[StormError](StormError.StormError-1.md).[prepareStackTrace](StormError.StormError-1.md#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[StormError](StormError.StormError-1.md).[stackTraceLimit](StormError.StormError-1.md#stacktracelimit)

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### getCode

▸ **getCode**(): [`ErrorCode`](../enums/ErrorCode.ErrorCode-1.md)

#### Returns

[`ErrorCode`](../enums/ErrorCode.ErrorCode-1.md)

#### Overrides

[StormError](StormError.StormError-1.md).[getCode](StormError.StormError-1.md#getcode)

#### Defined in

[src/InvalidValueError.ts:40](https://github.com/breautek/storm/blob/3807444/src/InvalidValueError.ts#L40)

___

### getErrorResponse

▸ **getErrorResponse**(): [`IErrorResponse`](../interfaces/StormError.IErrorResponse.md)

#### Returns

[`IErrorResponse`](../interfaces/StormError.IErrorResponse.md)

#### Inherited from

[StormError](StormError.StormError-1.md).[getErrorResponse](StormError.StormError-1.md#geterrorresponse)

#### Defined in

[src/StormError.ts:70](https://github.com/breautek/storm/blob/3807444/src/StormError.ts#L70)

___

### getExitCode

▸ **getExitCode**(): [`ExitCode`](../enums/ExitCode.ExitCode-1.md)

#### Returns

[`ExitCode`](../enums/ExitCode.ExitCode-1.md)

#### Inherited from

[StormError](StormError.StormError-1.md).[getExitCode](StormError.StormError-1.md#getexitcode)

#### Defined in

[src/StormError.ts:79](https://github.com/breautek/storm/blob/3807444/src/StormError.ts#L79)

___

### getHTTPCode

▸ **getHTTPCode**(): [`StatusCode`](../enums/StatusCode.StatusCode-1.md)

#### Returns

[`StatusCode`](../enums/StatusCode.StatusCode-1.md)

#### Overrides

[StormError](StormError.StormError-1.md).[getHTTPCode](StormError.StormError-1.md#gethttpcode)

#### Defined in

[src/InvalidValueError.ts:44](https://github.com/breautek/storm/blob/3807444/src/InvalidValueError.ts#L44)

___

### getMessage

▸ **getMessage**(): `string`

#### Returns

`string`

#### Overrides

[StormError](StormError.StormError-1.md).[getMessage](StormError.StormError-1.md#getmessage)

#### Defined in

[src/InvalidValueError.ts:35](https://github.com/breautek/storm/blob/3807444/src/InvalidValueError.ts#L35)

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

[StormError](StormError.StormError-1.md).[getPrivateDetails](StormError.StormError-1.md#getprivatedetails)

#### Defined in

[src/StormError.ts:62](https://github.com/breautek/storm/blob/3807444/src/StormError.ts#L62)

___

### getPublicDetails

▸ **getPublicDetails**(): [`IAdditionalErrorDetails`](../interfaces/StormError.IAdditionalErrorDetails.md)

Sends details to the client.

#### Returns

[`IAdditionalErrorDetails`](../interfaces/StormError.IAdditionalErrorDetails.md)

#### Inherited from

[StormError](StormError.StormError-1.md).[getPublicDetails](StormError.StormError-1.md#getpublicdetails)

#### Defined in

[src/StormError.ts:54](https://github.com/breautek/storm/blob/3807444/src/StormError.ts#L54)

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

[StormError](StormError.StormError-1.md).[captureStackTrace](StormError.StormError-1.md#capturestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:4
