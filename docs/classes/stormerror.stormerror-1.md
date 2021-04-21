[@breautek/storm](../README.md) / [StormError](../modules/stormerror.md) / StormError

# Class: StormError<TErrorDetails\>

[StormError](../modules/stormerror.md).StormError

## Type parameters

| Name | Default |
| :------ | :------ |
| `TErrorDetails` | *any* |

## Hierarchy

* *Error*

  ↳ **StormError**

  ↳↳ [*DatabaseQueryError*](databasequeryerror.databasequeryerror-1.md)

  ↳↳ [*DiskSpaceError*](diskspaceerror.diskspaceerror-1.md)

  ↳↳ [*DuplicateEntryError*](duplicateentryerror.duplicateentryerror-1.md)

  ↳↳ [*EntityNotFoundError*](entitynotfounderror.entitynotfounderror-1.md)

  ↳↳ [*ExpiredTokenError*](expiredtokenerror.expiredtokenerror-1.md)

  ↳↳ [*InternalError*](internalerror.internalerror-1.md)

  ↳↳ [*InvalidConfigError*](invalidconfigerror.invalidconfigerror-1.md)

  ↳↳ [*InvalidCredentialsError*](invalidcredentialserror.invalidcredentialserror-1.md)

  ↳↳ [*InvalidValueError*](invalidvalueerror.invalidvalueerror-1.md)

  ↳↳ [*MissingConfigError*](missingconfigerror.missingconfigerror-1.md)

  ↳↳ [*MissingParameterError*](missingparametererror.missingparametererror-1.md)

  ↳↳ [*UnauthorizedAccessError*](unauthorizedaccesserror.unauthorizedaccesserror-1.md)

## Table of contents

### Constructors

- [constructor](stormerror.stormerror-1.md#constructor)

### Properties

- [message](stormerror.stormerror-1.md#message)
- [name](stormerror.stormerror-1.md#name)
- [stack](stormerror.stormerror-1.md#stack)
- [prepareStackTrace](stormerror.stormerror-1.md#preparestacktrace)
- [stackTraceLimit](stormerror.stormerror-1.md#stacktracelimit)

### Methods

- [getCode](stormerror.stormerror-1.md#getcode)
- [getErrorResponse](stormerror.stormerror-1.md#geterrorresponse)
- [getExitCode](stormerror.stormerror-1.md#getexitcode)
- [getHTTPCode](stormerror.stormerror-1.md#gethttpcode)
- [getMessage](stormerror.stormerror-1.md#getmessage)
- [getPrivateDetails](stormerror.stormerror-1.md#getprivatedetails)
- [getPublicDetails](stormerror.stormerror-1.md#getpublicdetails)
- [captureStackTrace](stormerror.stormerror-1.md#capturestacktrace)

## Constructors

### constructor

\+ **new StormError**<TErrorDetails\>(`details?`: TErrorDetails): [*StormError*](stormerror.stormerror-1.md)<TErrorDetails\>

#### Type parameters:

| Name | Default |
| :------ | :------ |
| `TErrorDetails` | *any* |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `details?` | TErrorDetails |

**Returns:** [*StormError*](stormerror.stormerror-1.md)<TErrorDetails\>

Overrides: Error.constructor

Defined in: [src/StormError.ts:36](https://github.com/breautek/storm/blob/2614a1c/src/StormError.ts#L36)

## Properties

### message

• **message**: *string*

Inherited from: Error.message

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: *string*

Inherited from: Error.name

Defined in: node_modules/typescript/lib/lib.es5.d.ts:973

___

### stack

• `Optional` **stack**: *string*

Inherited from: Error.stack

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

Inherited from: Error.prepareStackTrace

Defined in: node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: *number*

Inherited from: Error.stackTraceLimit

Defined in: node_modules/@types/node/globals.d.ts:13

## Methods

### getCode

▸ `Abstract`**getCode**(): *number*

**Returns:** *number*

Defined in: [src/StormError.ts:49](https://github.com/breautek/storm/blob/2614a1c/src/StormError.ts#L49)

___

### getErrorResponse

▸ **getErrorResponse**(): [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)

**Returns:** [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)

Defined in: [src/StormError.ts:70](https://github.com/breautek/storm/blob/2614a1c/src/StormError.ts#L70)

___

### getExitCode

▸ **getExitCode**(): [*ExitCode*](../enums/exitcode.exitcode-1.md)

**Returns:** [*ExitCode*](../enums/exitcode.exitcode-1.md)

Defined in: [src/StormError.ts:79](https://github.com/breautek/storm/blob/2614a1c/src/StormError.ts#L79)

___

### getHTTPCode

▸ **getHTTPCode**(): [*StatusCode*](../enums/statuscode.statuscode-1.md)

**Returns:** [*StatusCode*](../enums/statuscode.statuscode-1.md)

Defined in: [src/StormError.ts:66](https://github.com/breautek/storm/blob/2614a1c/src/StormError.ts#L66)

___

### getMessage

▸ `Abstract`**getMessage**(): *string*

**Returns:** *string*

Defined in: [src/StormError.ts:48](https://github.com/breautek/storm/blob/2614a1c/src/StormError.ts#L48)

___

### getPrivateDetails

▸ **getPrivateDetails**(): TErrorDetails

Private details are only logged to the server log.
They are kept secret from the client.

**Returns:** TErrorDetails

Defined in: [src/StormError.ts:62](https://github.com/breautek/storm/blob/2614a1c/src/StormError.ts#L62)

___

### getPublicDetails

▸ **getPublicDetails**(): [*IAdditionalErrorDetails*](../interfaces/stormerror.iadditionalerrordetails.md)

Sends details to the client.

**Returns:** [*IAdditionalErrorDetails*](../interfaces/stormerror.iadditionalerrordetails.md)

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

Inherited from: Error.captureStackTrace

Defined in: node_modules/@types/node/globals.d.ts:4
