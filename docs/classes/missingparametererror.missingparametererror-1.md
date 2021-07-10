[@breautek/storm](../README.md) / [MissingParameterError](../modules/missingparametererror.md) / MissingParameterError

# Class: MissingParameterError

[MissingParameterError](../modules/missingparametererror.md).MissingParameterError

## Hierarchy

- [`StormError`](stormerror.stormerror-1.md)

  ↳ **`MissingParameterError`**

## Table of contents

### Constructors

- [constructor](missingparametererror.missingparametererror-1.md#constructor)

### Properties

- [message](missingparametererror.missingparametererror-1.md#message)
- [name](missingparametererror.missingparametererror-1.md#name)
- [stack](missingparametererror.missingparametererror-1.md#stack)
- [prepareStackTrace](missingparametererror.missingparametererror-1.md#preparestacktrace)
- [stackTraceLimit](missingparametererror.missingparametererror-1.md#stacktracelimit)

### Methods

- [getCode](missingparametererror.missingparametererror-1.md#getcode)
- [getErrorResponse](missingparametererror.missingparametererror-1.md#geterrorresponse)
- [getExitCode](missingparametererror.missingparametererror-1.md#getexitcode)
- [getHTTPCode](missingparametererror.missingparametererror-1.md#gethttpcode)
- [getMessage](missingparametererror.missingparametererror-1.md#getmessage)
- [getPrivateDetails](missingparametererror.missingparametererror-1.md#getprivatedetails)
- [getPublicDetails](missingparametererror.missingparametererror-1.md#getpublicdetails)
- [captureStackTrace](missingparametererror.missingparametererror-1.md#capturestacktrace)

## Constructors

### constructor

• **new MissingParameterError**(`parameter`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameter` | `string` |

#### Overrides

[StormError](stormerror.stormerror-1.md).[constructor](stormerror.stormerror-1.md#constructor)

#### Defined in

[src/MissingParameterError.ts:21](https://github.com/breautek/storm/blob/fff2ea4/src/MissingParameterError.ts#L21)

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

[src/MissingParameterError.ts:30](https://github.com/breautek/storm/blob/fff2ea4/src/MissingParameterError.ts#L30)

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

[src/MissingParameterError.ts:34](https://github.com/breautek/storm/blob/fff2ea4/src/MissingParameterError.ts#L34)

___

### getMessage

▸ **getMessage**(): `string`

#### Returns

`string`

#### Overrides

[StormError](stormerror.stormerror-1.md).[getMessage](stormerror.stormerror-1.md#getmessage)

#### Defined in

[src/MissingParameterError.ts:26](https://github.com/breautek/storm/blob/fff2ea4/src/MissingParameterError.ts#L26)

___

### getPrivateDetails

▸ **getPrivateDetails**(): `any`

Private details are only logged to the server log.
They are kept secret from the client.

#### Returns

`any`

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
