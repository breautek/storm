[@breautek/storm](../README.md) / [InvalidValueError](../modules/invalidvalueerror.md) / InvalidValueError

# Class: InvalidValueError

[InvalidValueError](../modules/invalidvalueerror.md).InvalidValueError

## Hierarchy

* [*StormError*](stormerror.stormerror-1.md)<{ `expected`: *any* ; `got`: *any* ; `variable`: *string*  }\>

  ↳ **InvalidValueError**

## Table of contents

### Constructors

- [constructor](invalidvalueerror.invalidvalueerror-1.md#constructor)

### Properties

- [message](invalidvalueerror.invalidvalueerror-1.md#message)
- [name](invalidvalueerror.invalidvalueerror-1.md#name)
- [prepareStackTrace](invalidvalueerror.invalidvalueerror-1.md#preparestacktrace)
- [stack](invalidvalueerror.invalidvalueerror-1.md#stack)
- [stackTraceLimit](invalidvalueerror.invalidvalueerror-1.md#stacktracelimit)

### Methods

- [captureStackTrace](invalidvalueerror.invalidvalueerror-1.md#capturestacktrace)
- [getCode](invalidvalueerror.invalidvalueerror-1.md#getcode)
- [getErrorResponse](invalidvalueerror.invalidvalueerror-1.md#geterrorresponse)
- [getExitCode](invalidvalueerror.invalidvalueerror-1.md#getexitcode)
- [getHTTPCode](invalidvalueerror.invalidvalueerror-1.md#gethttpcode)
- [getMessage](invalidvalueerror.invalidvalueerror-1.md#getmessage)
- [getPrivateDetails](invalidvalueerror.invalidvalueerror-1.md#getprivatedetails)
- [getPublicDetails](invalidvalueerror.invalidvalueerror-1.md#getpublicdetails)

## Constructors

### constructor

\+ **new InvalidValueError**(`variable`: *string*, `expected`: *any*, `got`: *any*): [*InvalidValueError*](invalidvalueerror.invalidvalueerror-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`variable` | *string* |
`expected` | *any* |
`got` | *any* |

**Returns:** [*InvalidValueError*](invalidvalueerror.invalidvalueerror-1.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/InvalidValueError.ts:25](https://github.com/breautek/storm/blob/8748493/src/InvalidValueError.ts#L25)

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

Defined in: [src/InvalidValueError.ts:40](https://github.com/breautek/storm/blob/8748493/src/InvalidValueError.ts#L40)

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

Defined in: [src/InvalidValueError.ts:44](https://github.com/breautek/storm/blob/8748493/src/InvalidValueError.ts#L44)

___

### getMessage

▸ **getMessage**(): *string*

**Returns:** *string*

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/InvalidValueError.ts:35](https://github.com/breautek/storm/blob/8748493/src/InvalidValueError.ts#L35)

___

### getPrivateDetails

▸ **getPrivateDetails**(): *object*

Private details are only logged to the server log.
They are kept secret from the client.

**Returns:** *object*

Name | Type |
------ | ------ |
`expected` | *any* |
`got` | *any* |
`variable` | *string* |

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:62](https://github.com/breautek/storm/blob/8748493/src/StormError.ts#L62)

___

### getPublicDetails

▸ **getPublicDetails**(): [*IAdditionalErrorDetails*](../interfaces/stormerror.iadditionalerrordetails.md)

Sends details to the client.

**Returns:** [*IAdditionalErrorDetails*](../interfaces/stormerror.iadditionalerrordetails.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:54](https://github.com/breautek/storm/blob/8748493/src/StormError.ts#L54)
