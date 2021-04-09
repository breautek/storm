[@breautek/storm](../README.md) / [MissingConfigError](../modules/missingconfigerror.md) / MissingConfigError

# Class: MissingConfigError

[MissingConfigError](../modules/missingconfigerror.md).MissingConfigError

## Hierarchy

* [*StormError*](stormerror.stormerror-1.md)<IMissingConfigErrorDetails\>

  ↳ **MissingConfigError**

## Table of contents

### Constructors

- [constructor](missingconfigerror.missingconfigerror-1.md#constructor)

### Properties

- [message](missingconfigerror.missingconfigerror-1.md#message)
- [name](missingconfigerror.missingconfigerror-1.md#name)
- [prepareStackTrace](missingconfigerror.missingconfigerror-1.md#preparestacktrace)
- [stack](missingconfigerror.missingconfigerror-1.md#stack)
- [stackTraceLimit](missingconfigerror.missingconfigerror-1.md#stacktracelimit)

### Methods

- [captureStackTrace](missingconfigerror.missingconfigerror-1.md#capturestacktrace)
- [getCode](missingconfigerror.missingconfigerror-1.md#getcode)
- [getErrorResponse](missingconfigerror.missingconfigerror-1.md#geterrorresponse)
- [getExitCode](missingconfigerror.missingconfigerror-1.md#getexitcode)
- [getHTTPCode](missingconfigerror.missingconfigerror-1.md#gethttpcode)
- [getMessage](missingconfigerror.missingconfigerror-1.md#getmessage)
- [getPrivateDetails](missingconfigerror.missingconfigerror-1.md#getprivatedetails)
- [getPublicDetails](missingconfigerror.missingconfigerror-1.md#getpublicdetails)

## Constructors

### constructor

\+ **new MissingConfigError**(`path`: *string*): [*MissingConfigError*](missingconfigerror.missingconfigerror-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`path` | *string* |

**Returns:** [*MissingConfigError*](missingconfigerror.missingconfigerror-1.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/MissingConfigError.ts:26](https://github.com/breautek/storm/blob/af5cad8/src/MissingConfigError.ts#L26)

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

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

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

Defined in: [src/MissingConfigError.ts:37](https://github.com/breautek/storm/blob/af5cad8/src/MissingConfigError.ts#L37)

___

### getErrorResponse

▸ **getErrorResponse**(): [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)

**Returns:** [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:70](https://github.com/breautek/storm/blob/af5cad8/src/StormError.ts#L70)

___

### getExitCode

▸ **getExitCode**(): [*ExitCode*](../enums/exitcode.exitcode-1.md)

**Returns:** [*ExitCode*](../enums/exitcode.exitcode-1.md)

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/MissingConfigError.ts:45](https://github.com/breautek/storm/blob/af5cad8/src/MissingConfigError.ts#L45)

___

### getHTTPCode

▸ **getHTTPCode**(): [*StatusCode*](../enums/statuscode.statuscode-1.md)

**Returns:** [*StatusCode*](../enums/statuscode.statuscode-1.md)

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/MissingConfigError.ts:41](https://github.com/breautek/storm/blob/af5cad8/src/MissingConfigError.ts#L41)

___

### getMessage

▸ **getMessage**(): *string*

**Returns:** *string*

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/MissingConfigError.ts:33](https://github.com/breautek/storm/blob/af5cad8/src/MissingConfigError.ts#L33)

___

### getPrivateDetails

▸ **getPrivateDetails**(): IMissingConfigErrorDetails

Private details are only logged to the server log.
They are kept secret from the client.

**Returns:** IMissingConfigErrorDetails

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:62](https://github.com/breautek/storm/blob/af5cad8/src/StormError.ts#L62)

___

### getPublicDetails

▸ **getPublicDetails**(): [*IAdditionalErrorDetails*](../interfaces/stormerror.iadditionalerrordetails.md)

Sends details to the client.

**Returns:** [*IAdditionalErrorDetails*](../interfaces/stormerror.iadditionalerrordetails.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:54](https://github.com/breautek/storm/blob/af5cad8/src/StormError.ts#L54)
