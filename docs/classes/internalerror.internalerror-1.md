[@breautek/storm](../README.md) / [InternalError](../modules/internalerror.md) / InternalError

# Class: InternalError

[InternalError](../modules/internalerror.md).InternalError

## Hierarchy

* [*StormError*](stormerror.stormerror-1.md)<*any*\>

  ↳ **InternalError**

## Table of contents

### Constructors

- [constructor](internalerror.internalerror-1.md#constructor)

### Properties

- [message](internalerror.internalerror-1.md#message)
- [name](internalerror.internalerror-1.md#name)
- [prepareStackTrace](internalerror.internalerror-1.md#preparestacktrace)
- [stack](internalerror.internalerror-1.md#stack)
- [stackTraceLimit](internalerror.internalerror-1.md#stacktracelimit)

### Methods

- [captureStackTrace](internalerror.internalerror-1.md#capturestacktrace)
- [getCode](internalerror.internalerror-1.md#getcode)
- [getErrorResponse](internalerror.internalerror-1.md#geterrorresponse)
- [getExitCode](internalerror.internalerror-1.md#getexitcode)
- [getHTTPCode](internalerror.internalerror-1.md#gethttpcode)
- [getMessage](internalerror.internalerror-1.md#getmessage)
- [getPrivateDetails](internalerror.internalerror-1.md#getprivatedetails)
- [getPublicDetails](internalerror.internalerror-1.md#getpublicdetails)

## Constructors

### constructor

\+ **new InternalError**(`details?`: *any*): [*InternalError*](internalerror.internalerror-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`details?` | *any* |

**Returns:** [*InternalError*](internalerror.internalerror-1.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/InternalError.ts:21](https://github.com/breautek/storm/blob/8748493/src/InternalError.ts#L21)

## Properties

### message

• **message**: *string*

Inherited from: [StormError](stormerror.stormerror-1.md).[message](stormerror.stormerror-1.md#message)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: *string*

Inherited from: [StormError](stormerror.stormerror-1.md).[name](stormerror.stormerror-1.md#name)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:973

___

### prepareStackTrace

• `Optional` **prepareStackTrace**: (`err`: Error, `stackTraces`: CallSite[]) => *any*

Optional override for formatting stack traces

**`see`** https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

Inherited from: [StormError](stormerror.stormerror-1.md).[prepareStackTrace](stormerror.stormerror-1.md#preparestacktrace)

Defined in: node_modules/@types/node/globals.d.ts:11

___

### stack

• `Optional` **stack**: *string*

Inherited from: [StormError](stormerror.stormerror-1.md).[stack](stormerror.stormerror-1.md#stack)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:975

___

### stackTraceLimit

• **stackTraceLimit**: *number*

Inherited from: [StormError](stormerror.stormerror-1.md).[stackTraceLimit](stormerror.stormerror-1.md#stacktracelimit)

Defined in: node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`: *object*, `constructorOpt?`: Function): *void*

Create .stack property on a target object

#### Parameters:

Name | Type |
------ | ------ |
`targetObject` | *object* |
`constructorOpt?` | Function |

**Returns:** *void*

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: node_modules/@types/node/globals.d.ts:4

___

### getCode

▸ **getCode**(): [*ErrorCode*](../enums/errorcode.errorcode-1.md)

**Returns:** [*ErrorCode*](../enums/errorcode.errorcode-1.md)

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/InternalError.ts:31](https://github.com/breautek/storm/blob/8748493/src/InternalError.ts#L31)

___

### getErrorResponse

▸ **getErrorResponse**(): [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)

**Returns:** [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:70](https://github.com/breautek/storm/blob/8748493/src/StormError.ts#L70)

___

### getExitCode

▸ **getExitCode**(): [*ExitCode*](../enums/exitcode.exitcode-1.md)

**Returns:** [*ExitCode*](../enums/exitcode.exitcode-1.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:79](https://github.com/breautek/storm/blob/8748493/src/StormError.ts#L79)

___

### getHTTPCode

▸ **getHTTPCode**(): [*StatusCode*](../enums/statuscode.statuscode-1.md)

**Returns:** [*StatusCode*](../enums/statuscode.statuscode-1.md)

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/InternalError.ts:35](https://github.com/breautek/storm/blob/8748493/src/InternalError.ts#L35)

___

### getMessage

▸ **getMessage**(): *string*

**Returns:** *string*

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/InternalError.ts:27](https://github.com/breautek/storm/blob/8748493/src/InternalError.ts#L27)

___

### getPrivateDetails

▸ **getPrivateDetails**(): *any*

Private details are only logged to the server log.
They are kept secret from the client.

**Returns:** *any*

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:62](https://github.com/breautek/storm/blob/8748493/src/StormError.ts#L62)

___

### getPublicDetails

▸ **getPublicDetails**(): [*IAdditionalErrorDetails*](../interfaces/stormerror.iadditionalerrordetails.md)

Sends details to the client.

**Returns:** [*IAdditionalErrorDetails*](../interfaces/stormerror.iadditionalerrordetails.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:54](https://github.com/breautek/storm/blob/8748493/src/StormError.ts#L54)
