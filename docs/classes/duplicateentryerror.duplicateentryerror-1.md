[@breautek/storm](../README.md) / [DuplicateEntryError](../modules/duplicateentryerror.md) / DuplicateEntryError

# Class: DuplicateEntryError

[DuplicateEntryError](../modules/duplicateentryerror.md).DuplicateEntryError

## Hierarchy

* [*StormError*](stormerror.stormerror-1.md)

  ↳ **DuplicateEntryError**

## Table of contents

### Constructors

- [constructor](duplicateentryerror.duplicateentryerror-1.md#constructor)

### Properties

- [message](duplicateentryerror.duplicateentryerror-1.md#message)
- [name](duplicateentryerror.duplicateentryerror-1.md#name)
- [prepareStackTrace](duplicateentryerror.duplicateentryerror-1.md#preparestacktrace)
- [stack](duplicateentryerror.duplicateentryerror-1.md#stack)
- [stackTraceLimit](duplicateentryerror.duplicateentryerror-1.md#stacktracelimit)

### Methods

- [captureStackTrace](duplicateentryerror.duplicateentryerror-1.md#capturestacktrace)
- [getCode](duplicateentryerror.duplicateentryerror-1.md#getcode)
- [getErrorResponse](duplicateentryerror.duplicateentryerror-1.md#geterrorresponse)
- [getExitCode](duplicateentryerror.duplicateentryerror-1.md#getexitcode)
- [getHTTPCode](duplicateentryerror.duplicateentryerror-1.md#gethttpcode)
- [getMessage](duplicateentryerror.duplicateentryerror-1.md#getmessage)
- [getPrivateDetails](duplicateentryerror.duplicateentryerror-1.md#getprivatedetails)
- [getPublicDetails](duplicateentryerror.duplicateentryerror-1.md#getpublicdetails)

## Constructors

### constructor

\+ **new DuplicateEntryError**(`entity`: *string*, `name`: *string*, `property?`: *string*): [*DuplicateEntryError*](duplicateentryerror.duplicateentryerror-1.md)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`entity` | *string* | - |
`name` | *string* | - |
`property` | *string* | 'name' |

**Returns:** [*DuplicateEntryError*](duplicateentryerror.duplicateentryerror-1.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/DuplicateEntryError.ts:27](https://github.com/breautek/storm/blob/40c8f69/src/DuplicateEntryError.ts#L27)

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

Defined in: [src/DuplicateEntryError.ts:41](https://github.com/breautek/storm/blob/40c8f69/src/DuplicateEntryError.ts#L41)

___

### getErrorResponse

▸ **getErrorResponse**(): [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)

**Returns:** [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:70](https://github.com/breautek/storm/blob/40c8f69/src/StormError.ts#L70)

___

### getExitCode

▸ **getExitCode**(): [*ExitCode*](../enums/exitcode.exitcode-1.md)

**Returns:** [*ExitCode*](../enums/exitcode.exitcode-1.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:79](https://github.com/breautek/storm/blob/40c8f69/src/StormError.ts#L79)

___

### getHTTPCode

▸ **getHTTPCode**(): [*StatusCode*](../enums/statuscode.statuscode-1.md)

**Returns:** [*StatusCode*](../enums/statuscode.statuscode-1.md)

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/DuplicateEntryError.ts:45](https://github.com/breautek/storm/blob/40c8f69/src/DuplicateEntryError.ts#L45)

___

### getMessage

▸ **getMessage**(): *string*

**Returns:** *string*

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/DuplicateEntryError.ts:36](https://github.com/breautek/storm/blob/40c8f69/src/DuplicateEntryError.ts#L36)

___

### getPrivateDetails

▸ **getPrivateDetails**(): *any*

Private details are only logged to the server log.
They are kept secret from the client.

**Returns:** *any*

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:62](https://github.com/breautek/storm/blob/40c8f69/src/StormError.ts#L62)

___

### getPublicDetails

▸ **getPublicDetails**(): [*IAdditionalErrorDetails*](../interfaces/stormerror.iadditionalerrordetails.md)

Sends details to the client.

**Returns:** [*IAdditionalErrorDetails*](../interfaces/stormerror.iadditionalerrordetails.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:54](https://github.com/breautek/storm/blob/40c8f69/src/StormError.ts#L54)
