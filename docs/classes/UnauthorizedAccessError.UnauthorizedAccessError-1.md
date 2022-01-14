[@breautek/storm](../README.md) / [UnauthorizedAccessError](../modules/UnauthorizedAccessError.md) / UnauthorizedAccessError

# Class: UnauthorizedAccessError

[UnauthorizedAccessError](../modules/UnauthorizedAccessError.md).UnauthorizedAccessError

## Hierarchy

- [`StormError`](StormError.StormError-1.md)

  ↳ **`UnauthorizedAccessError`**

## Table of contents

### Constructors

- [constructor](UnauthorizedAccessError.UnauthorizedAccessError-1.md#constructor)

### Properties

- [message](UnauthorizedAccessError.UnauthorizedAccessError-1.md#message)
- [name](UnauthorizedAccessError.UnauthorizedAccessError-1.md#name)
- [stack](UnauthorizedAccessError.UnauthorizedAccessError-1.md#stack)
- [prepareStackTrace](UnauthorizedAccessError.UnauthorizedAccessError-1.md#preparestacktrace)
- [stackTraceLimit](UnauthorizedAccessError.UnauthorizedAccessError-1.md#stacktracelimit)

### Methods

- [getCode](UnauthorizedAccessError.UnauthorizedAccessError-1.md#getcode)
- [getErrorResponse](UnauthorizedAccessError.UnauthorizedAccessError-1.md#geterrorresponse)
- [getExitCode](UnauthorizedAccessError.UnauthorizedAccessError-1.md#getexitcode)
- [getHTTPCode](UnauthorizedAccessError.UnauthorizedAccessError-1.md#gethttpcode)
- [getMessage](UnauthorizedAccessError.UnauthorizedAccessError-1.md#getmessage)
- [getPrivateDetails](UnauthorizedAccessError.UnauthorizedAccessError-1.md#getprivatedetails)
- [getPublicDetails](UnauthorizedAccessError.UnauthorizedAccessError-1.md#getpublicdetails)
- [captureStackTrace](UnauthorizedAccessError.UnauthorizedAccessError-1.md#capturestacktrace)

## Constructors

### constructor

• **new UnauthorizedAccessError**(`userToken`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `userToken` | `string` |

#### Overrides

[StormError](StormError.StormError-1.md).[constructor](StormError.StormError-1.md#constructor)

#### Defined in

[src/UnauthorizedAccessError.ts:22](https://github.com/breautek/storm/blob/6ea3887/src/UnauthorizedAccessError.ts#L22)

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

[src/UnauthorizedAccessError.ts:30](https://github.com/breautek/storm/blob/6ea3887/src/UnauthorizedAccessError.ts#L30)

___

### getErrorResponse

▸ **getErrorResponse**(): [`IErrorResponse`](../interfaces/StormError.IErrorResponse.md)

#### Returns

[`IErrorResponse`](../interfaces/StormError.IErrorResponse.md)

#### Inherited from

[StormError](StormError.StormError-1.md).[getErrorResponse](StormError.StormError-1.md#geterrorresponse)

#### Defined in

[src/StormError.ts:70](https://github.com/breautek/storm/blob/6ea3887/src/StormError.ts#L70)

___

### getExitCode

▸ **getExitCode**(): [`ExitCode`](../enums/ExitCode.ExitCode-1.md)

#### Returns

[`ExitCode`](../enums/ExitCode.ExitCode-1.md)

#### Inherited from

[StormError](StormError.StormError-1.md).[getExitCode](StormError.StormError-1.md#getexitcode)

#### Defined in

[src/StormError.ts:79](https://github.com/breautek/storm/blob/6ea3887/src/StormError.ts#L79)

___

### getHTTPCode

▸ **getHTTPCode**(): [`StatusCode`](../enums/StatusCode.StatusCode-1.md)

#### Returns

[`StatusCode`](../enums/StatusCode.StatusCode-1.md)

#### Overrides

[StormError](StormError.StormError-1.md).[getHTTPCode](StormError.StormError-1.md#gethttpcode)

#### Defined in

[src/UnauthorizedAccessError.ts:34](https://github.com/breautek/storm/blob/6ea3887/src/UnauthorizedAccessError.ts#L34)

___

### getMessage

▸ **getMessage**(): `string`

#### Returns

`string`

#### Overrides

[StormError](StormError.StormError-1.md).[getMessage](StormError.StormError-1.md#getmessage)

#### Defined in

[src/UnauthorizedAccessError.ts:26](https://github.com/breautek/storm/blob/6ea3887/src/UnauthorizedAccessError.ts#L26)

___

### getPrivateDetails

▸ **getPrivateDetails**(): `any`

Private details are only logged to the server log.
They are kept secret from the client.

#### Returns

`any`

#### Inherited from

[StormError](StormError.StormError-1.md).[getPrivateDetails](StormError.StormError-1.md#getprivatedetails)

#### Defined in

[src/StormError.ts:62](https://github.com/breautek/storm/blob/6ea3887/src/StormError.ts#L62)

___

### getPublicDetails

▸ **getPublicDetails**(): [`IAdditionalErrorDetails`](../interfaces/StormError.IAdditionalErrorDetails.md)

Sends details to the client.

#### Returns

[`IAdditionalErrorDetails`](../interfaces/StormError.IAdditionalErrorDetails.md)

#### Inherited from

[StormError](StormError.StormError-1.md).[getPublicDetails](StormError.StormError-1.md#getpublicdetails)

#### Defined in

[src/StormError.ts:54](https://github.com/breautek/storm/blob/6ea3887/src/StormError.ts#L54)

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
