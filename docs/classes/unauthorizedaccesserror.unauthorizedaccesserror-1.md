[@breautek/storm](../README.md) / [UnauthorizedAccessError](../modules/unauthorizedaccesserror.md) / UnauthorizedAccessError

# Class: UnauthorizedAccessError

[UnauthorizedAccessError](../modules/unauthorizedaccesserror.md).UnauthorizedAccessError

## Hierarchy

* [*StormError*](stormerror.stormerror-1.md)

  ↳ **UnauthorizedAccessError**

## Table of contents

### Constructors

- [constructor](unauthorizedaccesserror.unauthorizedaccesserror-1.md#constructor)

### Properties

- [message](unauthorizedaccesserror.unauthorizedaccesserror-1.md#message)
- [name](unauthorizedaccesserror.unauthorizedaccesserror-1.md#name)
- [prepareStackTrace](unauthorizedaccesserror.unauthorizedaccesserror-1.md#preparestacktrace)
- [stack](unauthorizedaccesserror.unauthorizedaccesserror-1.md#stack)
- [stackTraceLimit](unauthorizedaccesserror.unauthorizedaccesserror-1.md#stacktracelimit)

### Methods

- [captureStackTrace](unauthorizedaccesserror.unauthorizedaccesserror-1.md#capturestacktrace)
- [getCode](unauthorizedaccesserror.unauthorizedaccesserror-1.md#getcode)
- [getErrorResponse](unauthorizedaccesserror.unauthorizedaccesserror-1.md#geterrorresponse)
- [getExitCode](unauthorizedaccesserror.unauthorizedaccesserror-1.md#getexitcode)
- [getHTTPCode](unauthorizedaccesserror.unauthorizedaccesserror-1.md#gethttpcode)
- [getMessage](unauthorizedaccesserror.unauthorizedaccesserror-1.md#getmessage)
- [getPrivateDetails](unauthorizedaccesserror.unauthorizedaccesserror-1.md#getprivatedetails)
- [getPublicDetails](unauthorizedaccesserror.unauthorizedaccesserror-1.md#getpublicdetails)

## Constructors

### constructor

\+ **new UnauthorizedAccessError**(`userToken`: *string*): [*UnauthorizedAccessError*](unauthorizedaccesserror.unauthorizedaccesserror-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`userToken` | *string* |

**Returns:** [*UnauthorizedAccessError*](unauthorizedaccesserror.unauthorizedaccesserror-1.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/UnauthorizedAccessError.ts:21](https://github.com/breautek/storm/blob/40c8f69/src/UnauthorizedAccessError.ts#L21)

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

Defined in: [src/UnauthorizedAccessError.ts:30](https://github.com/breautek/storm/blob/40c8f69/src/UnauthorizedAccessError.ts#L30)

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

Defined in: [src/UnauthorizedAccessError.ts:34](https://github.com/breautek/storm/blob/40c8f69/src/UnauthorizedAccessError.ts#L34)

___

### getMessage

▸ **getMessage**(): *string*

**Returns:** *string*

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/UnauthorizedAccessError.ts:26](https://github.com/breautek/storm/blob/40c8f69/src/UnauthorizedAccessError.ts#L26)

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
