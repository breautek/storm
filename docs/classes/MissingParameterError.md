[@breautek/storm](../README.md) / MissingParameterError

# Class: MissingParameterError

## Hierarchy

- [`StormError`](StormError.md)

  ↳ **`MissingParameterError`**

## Table of contents

### Constructors

- [constructor](MissingParameterError.md#constructor)

### Properties

- [message](MissingParameterError.md#message)
- [name](MissingParameterError.md#name)
- [stack](MissingParameterError.md#stack)
- [prepareStackTrace](MissingParameterError.md#preparestacktrace)
- [stackTraceLimit](MissingParameterError.md#stacktracelimit)

### Methods

- [getCode](MissingParameterError.md#getcode)
- [getErrorResponse](MissingParameterError.md#geterrorresponse)
- [getExitCode](MissingParameterError.md#getexitcode)
- [getHTTPCode](MissingParameterError.md#gethttpcode)
- [getMessage](MissingParameterError.md#getmessage)
- [getPrivateDetails](MissingParameterError.md#getprivatedetails)
- [getPublicDetails](MissingParameterError.md#getpublicdetails)
- [captureStackTrace](MissingParameterError.md#capturestacktrace)

## Constructors

### constructor

• **new MissingParameterError**(`parameter`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameter` | `string` |

#### Overrides

[StormError](StormError.md).[constructor](StormError.md#constructor)

#### Defined in

[src/MissingParameterError.ts:22](https://github.com/breautek/storm/blob/f198938/src/MissingParameterError.ts#L22)

## Properties

### message

• **message**: `string`

#### Inherited from

[StormError](StormError.md).[message](StormError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1029

___

### name

• **name**: `string`

#### Inherited from

[StormError](StormError.md).[name](StormError.md#name)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1028

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[StormError](StormError.md).[stack](StormError.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1030

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

[StormError](StormError.md).[prepareStackTrace](StormError.md#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[StormError](StormError.md).[stackTraceLimit](StormError.md#stacktracelimit)

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### getCode

▸ **getCode**(): [`ErrorCode`](../enums/ErrorCode.md)

#### Returns

[`ErrorCode`](../enums/ErrorCode.md)

#### Overrides

[StormError](StormError.md).[getCode](StormError.md#getcode)

#### Defined in

[src/MissingParameterError.ts:30](https://github.com/breautek/storm/blob/f198938/src/MissingParameterError.ts#L30)

___

### getErrorResponse

▸ **getErrorResponse**(): [`IErrorResponse`](../interfaces/IErrorResponse.md)

#### Returns

[`IErrorResponse`](../interfaces/IErrorResponse.md)

#### Inherited from

[StormError](StormError.md).[getErrorResponse](StormError.md#geterrorresponse)

#### Defined in

[src/StormError.ts:70](https://github.com/breautek/storm/blob/f198938/src/StormError.ts#L70)

___

### getExitCode

▸ **getExitCode**(): [`ExitCode`](../enums/ExitCode.md)

#### Returns

[`ExitCode`](../enums/ExitCode.md)

#### Inherited from

[StormError](StormError.md).[getExitCode](StormError.md#getexitcode)

#### Defined in

[src/StormError.ts:79](https://github.com/breautek/storm/blob/f198938/src/StormError.ts#L79)

___

### getHTTPCode

▸ **getHTTPCode**(): [`StatusCode`](../enums/StatusCode.md)

#### Returns

[`StatusCode`](../enums/StatusCode.md)

#### Overrides

[StormError](StormError.md).[getHTTPCode](StormError.md#gethttpcode)

#### Defined in

[src/MissingParameterError.ts:34](https://github.com/breautek/storm/blob/f198938/src/MissingParameterError.ts#L34)

___

### getMessage

▸ **getMessage**(): `string`

#### Returns

`string`

#### Overrides

[StormError](StormError.md).[getMessage](StormError.md#getmessage)

#### Defined in

[src/MissingParameterError.ts:26](https://github.com/breautek/storm/blob/f198938/src/MissingParameterError.ts#L26)

___

### getPrivateDetails

▸ **getPrivateDetails**(): `any`

Private details are only logged to the server log.
They are kept secret from the client.

#### Returns

`any`

#### Inherited from

[StormError](StormError.md).[getPrivateDetails](StormError.md#getprivatedetails)

#### Defined in

[src/StormError.ts:62](https://github.com/breautek/storm/blob/f198938/src/StormError.ts#L62)

___

### getPublicDetails

▸ **getPublicDetails**(): [`IAdditionalErrorDetails`](../interfaces/IAdditionalErrorDetails.md)

Sends details to the client.

#### Returns

[`IAdditionalErrorDetails`](../interfaces/IAdditionalErrorDetails.md)

#### Inherited from

[StormError](StormError.md).[getPublicDetails](StormError.md#getpublicdetails)

#### Defined in

[src/StormError.ts:54](https://github.com/breautek/storm/blob/f198938/src/StormError.ts#L54)

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

[StormError](StormError.md).[captureStackTrace](StormError.md#capturestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:4
