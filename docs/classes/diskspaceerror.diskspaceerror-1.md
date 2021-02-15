[@breautek/storm](../README.md) / [DiskSpaceError](../modules/diskspaceerror.md) / DiskSpaceError

# Class: DiskSpaceError

[DiskSpaceError](../modules/diskspaceerror.md).DiskSpaceError

## Hierarchy

* [*StormError*](stormerror.stormerror-1.md)

  ↳ **DiskSpaceError**

## Table of contents

### Constructors

- [constructor](diskspaceerror.diskspaceerror-1.md#constructor)

### Properties

- [message](diskspaceerror.diskspaceerror-1.md#message)
- [name](diskspaceerror.diskspaceerror-1.md#name)
- [prepareStackTrace](diskspaceerror.diskspaceerror-1.md#preparestacktrace)
- [stack](diskspaceerror.diskspaceerror-1.md#stack)
- [stackTraceLimit](diskspaceerror.diskspaceerror-1.md#stacktracelimit)

### Methods

- [captureStackTrace](diskspaceerror.diskspaceerror-1.md#capturestacktrace)
- [getCode](diskspaceerror.diskspaceerror-1.md#getcode)
- [getErrorResponse](diskspaceerror.diskspaceerror-1.md#geterrorresponse)
- [getExitCode](diskspaceerror.diskspaceerror-1.md#getexitcode)
- [getHTTPCode](diskspaceerror.diskspaceerror-1.md#gethttpcode)
- [getMessage](diskspaceerror.diskspaceerror-1.md#getmessage)
- [getPrivateDetails](diskspaceerror.diskspaceerror-1.md#getprivatedetails)
- [getPublicDetails](diskspaceerror.diskspaceerror-1.md#getpublicdetails)

## Constructors

### constructor

\+ **new DiskSpaceError**(`spaceRequired`: *number*): [*DiskSpaceError*](diskspaceerror.diskspaceerror-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`spaceRequired` | *number* |

**Returns:** [*DiskSpaceError*](diskspaceerror.diskspaceerror-1.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/DiskSpaceError.ts:21](https://github.com/breautek/storm/blob/547898b/src/DiskSpaceError.ts#L21)

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

Defined in: [src/DiskSpaceError.ts:32](https://github.com/breautek/storm/blob/547898b/src/DiskSpaceError.ts#L32)

___

### getErrorResponse

▸ **getErrorResponse**(): [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)

**Returns:** [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:70](https://github.com/breautek/storm/blob/547898b/src/StormError.ts#L70)

___

### getExitCode

▸ **getExitCode**(): [*ExitCode*](../enums/exitcode.exitcode-1.md)

**Returns:** [*ExitCode*](../enums/exitcode.exitcode-1.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:79](https://github.com/breautek/storm/blob/547898b/src/StormError.ts#L79)

___

### getHTTPCode

▸ **getHTTPCode**(): [*StatusCode*](../enums/statuscode.statuscode-1.md)

**Returns:** [*StatusCode*](../enums/statuscode.statuscode-1.md)

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/DiskSpaceError.ts:36](https://github.com/breautek/storm/blob/547898b/src/DiskSpaceError.ts#L36)

___

### getMessage

▸ **getMessage**(): *string*

**Returns:** *string*

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/DiskSpaceError.ts:28](https://github.com/breautek/storm/blob/547898b/src/DiskSpaceError.ts#L28)

___

### getPrivateDetails

▸ **getPrivateDetails**(): *any*

Private details are only logged to the server log.
They are kept secret from the client.

**Returns:** *any*

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:62](https://github.com/breautek/storm/blob/547898b/src/StormError.ts#L62)

___

### getPublicDetails

▸ **getPublicDetails**(): [*IAdditionalErrorDetails*](../interfaces/stormerror.iadditionalerrordetails.md)

Sends details to the client.

**Returns:** [*IAdditionalErrorDetails*](../interfaces/stormerror.iadditionalerrordetails.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:54](https://github.com/breautek/storm/blob/547898b/src/StormError.ts#L54)
