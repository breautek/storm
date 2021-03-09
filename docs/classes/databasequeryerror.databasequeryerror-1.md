[@breautek/storm](../README.md) / [DatabaseQueryError](../modules/databasequeryerror.md) / DatabaseQueryError

# Class: DatabaseQueryError

[DatabaseQueryError](../modules/databasequeryerror.md).DatabaseQueryError

## Hierarchy

* [*StormError*](stormerror.stormerror-1.md)<{ `error`: *any* ; `query`: *string*  }\>

  ↳ **DatabaseQueryError**

## Table of contents

### Constructors

- [constructor](databasequeryerror.databasequeryerror-1.md#constructor)

### Properties

- [message](databasequeryerror.databasequeryerror-1.md#message)
- [name](databasequeryerror.databasequeryerror-1.md#name)
- [stack](databasequeryerror.databasequeryerror-1.md#stack)
- [prepareStackTrace](databasequeryerror.databasequeryerror-1.md#preparestacktrace)
- [stackTraceLimit](databasequeryerror.databasequeryerror-1.md#stacktracelimit)

### Methods

- [getCode](databasequeryerror.databasequeryerror-1.md#getcode)
- [getErrorResponse](databasequeryerror.databasequeryerror-1.md#geterrorresponse)
- [getExitCode](databasequeryerror.databasequeryerror-1.md#getexitcode)
- [getHTTPCode](databasequeryerror.databasequeryerror-1.md#gethttpcode)
- [getMessage](databasequeryerror.databasequeryerror-1.md#getmessage)
- [getPrivateDetails](databasequeryerror.databasequeryerror-1.md#getprivatedetails)
- [getPublicDetails](databasequeryerror.databasequeryerror-1.md#getpublicdetails)
- [captureStackTrace](databasequeryerror.databasequeryerror-1.md#capturestacktrace)

## Constructors

### constructor

\+ **new DatabaseQueryError**(`query`: *string*, `error`: *any*): [*DatabaseQueryError*](databasequeryerror.databasequeryerror-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`query` | *string* |
`error` | *any* |

**Returns:** [*DatabaseQueryError*](databasequeryerror.databasequeryerror-1.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/DatabaseQueryError.ts:23](https://github.com/breautek/storm/blob/40c8f69/src/DatabaseQueryError.ts#L23)

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

▪ `Optional` `Static` **prepareStackTrace**: (`err`: Error, `stackTraces`: CallSite[]) => *any*

Optional override for formatting stack traces

**`see`** https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

Defined in: node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: *number*

Defined in: node_modules/@types/node/globals.d.ts:13

## Methods

### getCode

▸ **getCode**(): *number*

**Returns:** *number*

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/DatabaseQueryError.ts:36](https://github.com/breautek/storm/blob/40c8f69/src/DatabaseQueryError.ts#L36)

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

Defined in: [src/DatabaseQueryError.ts:40](https://github.com/breautek/storm/blob/40c8f69/src/DatabaseQueryError.ts#L40)

___

### getMessage

▸ **getMessage**(): *string*

**Returns:** *string*

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/DatabaseQueryError.ts:32](https://github.com/breautek/storm/blob/40c8f69/src/DatabaseQueryError.ts#L32)

___

### getPrivateDetails

▸ **getPrivateDetails**(): *object*

Private details are only logged to the server log.
They are kept secret from the client.

**Returns:** *object*

Name | Type |
------ | ------ |
`error` | *any* |
`query` | *string* |

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:62](https://github.com/breautek/storm/blob/40c8f69/src/StormError.ts#L62)

___

### getPublicDetails

▸ **getPublicDetails**(): [*IAdditionalErrorDetails*](../interfaces/stormerror.iadditionalerrordetails.md)

Sends details to the client.

**Returns:** [*IAdditionalErrorDetails*](../interfaces/stormerror.iadditionalerrordetails.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:54](https://github.com/breautek/storm/blob/40c8f69/src/StormError.ts#L54)

___

### captureStackTrace

▸ `Static`**captureStackTrace**(`targetObject`: *object*, `constructorOpt?`: Function): *void*

Create .stack property on a target object

#### Parameters:

Name | Type |
------ | ------ |
`targetObject` | *object* |
`constructorOpt?` | Function |

**Returns:** *void*

Defined in: node_modules/@types/node/globals.d.ts:4
