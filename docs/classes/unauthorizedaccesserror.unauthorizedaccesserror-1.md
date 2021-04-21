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
- [stack](unauthorizedaccesserror.unauthorizedaccesserror-1.md#stack)
- [prepareStackTrace](unauthorizedaccesserror.unauthorizedaccesserror-1.md#preparestacktrace)
- [stackTraceLimit](unauthorizedaccesserror.unauthorizedaccesserror-1.md#stacktracelimit)

### Methods

- [getCode](unauthorizedaccesserror.unauthorizedaccesserror-1.md#getcode)
- [getErrorResponse](unauthorizedaccesserror.unauthorizedaccesserror-1.md#geterrorresponse)
- [getExitCode](unauthorizedaccesserror.unauthorizedaccesserror-1.md#getexitcode)
- [getHTTPCode](unauthorizedaccesserror.unauthorizedaccesserror-1.md#gethttpcode)
- [getMessage](unauthorizedaccesserror.unauthorizedaccesserror-1.md#getmessage)
- [getPrivateDetails](unauthorizedaccesserror.unauthorizedaccesserror-1.md#getprivatedetails)
- [getPublicDetails](unauthorizedaccesserror.unauthorizedaccesserror-1.md#getpublicdetails)
- [captureStackTrace](unauthorizedaccesserror.unauthorizedaccesserror-1.md#capturestacktrace)

## Constructors

### constructor

\+ **new UnauthorizedAccessError**(`userToken`: *string*): [*UnauthorizedAccessError*](unauthorizedaccesserror.unauthorizedaccesserror-1.md)

#### Parameters:

| Name | Type |
| :------ | :------ |
| `userToken` | *string* |

**Returns:** [*UnauthorizedAccessError*](unauthorizedaccesserror.unauthorizedaccesserror-1.md)

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/UnauthorizedAccessError.ts:21](https://github.com/breautek/storm/blob/2614a1c/src/UnauthorizedAccessError.ts#L21)

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

### stack

• `Optional` **stack**: *string*

Inherited from: [StormError](stormerror.stormerror-1.md).[stack](stormerror.stormerror-1.md#stack)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:975

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: Error, `stackTraces`: CallSite[]) => *any*

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration:

▸ (`err`: Error, `stackTraces`: CallSite[]): *any*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `err` | Error |
| `stackTraces` | CallSite[] |

**Returns:** *any*

Defined in: node_modules/@types/node/globals.d.ts:11

Inherited from: [StormError](stormerror.stormerror-1.md).[prepareStackTrace](stormerror.stormerror-1.md#preparestacktrace)

Defined in: node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: *number*

Inherited from: [StormError](stormerror.stormerror-1.md).[stackTraceLimit](stormerror.stormerror-1.md#stacktracelimit)

Defined in: node_modules/@types/node/globals.d.ts:13

## Methods

### getCode

▸ **getCode**(): [*ErrorCode*](../enums/errorcode.errorcode-1.md)

**Returns:** [*ErrorCode*](../enums/errorcode.errorcode-1.md)

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/UnauthorizedAccessError.ts:30](https://github.com/breautek/storm/blob/2614a1c/src/UnauthorizedAccessError.ts#L30)

___

### getErrorResponse

▸ **getErrorResponse**(): [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)

**Returns:** [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:70](https://github.com/breautek/storm/blob/2614a1c/src/StormError.ts#L70)

___

### getExitCode

▸ **getExitCode**(): [*ExitCode*](../enums/exitcode.exitcode-1.md)

**Returns:** [*ExitCode*](../enums/exitcode.exitcode-1.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:79](https://github.com/breautek/storm/blob/2614a1c/src/StormError.ts#L79)

___

### getHTTPCode

▸ **getHTTPCode**(): [*StatusCode*](../enums/statuscode.statuscode-1.md)

**Returns:** [*StatusCode*](../enums/statuscode.statuscode-1.md)

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/UnauthorizedAccessError.ts:34](https://github.com/breautek/storm/blob/2614a1c/src/UnauthorizedAccessError.ts#L34)

___

### getMessage

▸ **getMessage**(): *string*

**Returns:** *string*

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/UnauthorizedAccessError.ts:26](https://github.com/breautek/storm/blob/2614a1c/src/UnauthorizedAccessError.ts#L26)

___

### getPrivateDetails

▸ **getPrivateDetails**(): *any*

Private details are only logged to the server log.
They are kept secret from the client.

**Returns:** *any*

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:62](https://github.com/breautek/storm/blob/2614a1c/src/StormError.ts#L62)

___

### getPublicDetails

▸ **getPublicDetails**(): [*IAdditionalErrorDetails*](../interfaces/stormerror.iadditionalerrordetails.md)

Sends details to the client.

**Returns:** [*IAdditionalErrorDetails*](../interfaces/stormerror.iadditionalerrordetails.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:54](https://github.com/breautek/storm/blob/2614a1c/src/StormError.ts#L54)

___

### captureStackTrace

▸ `Static`**captureStackTrace**(`targetObject`: *object*, `constructorOpt?`: Function): *void*

Create .stack property on a target object

#### Parameters:

| Name | Type |
| :------ | :------ |
| `targetObject` | *object* |
| `constructorOpt?` | Function |

**Returns:** *void*

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: node_modules/@types/node/globals.d.ts:4
