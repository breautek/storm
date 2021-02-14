[@breautek/storm](../README.md) / [Exports](../modules.md) / [MissingParameterError](../modules/missingparametererror.md) / MissingParameterError

# Class: MissingParameterError

[MissingParameterError](../modules/missingparametererror.md).MissingParameterError

## Hierarchy

* [*StormError*](stormerror.stormerror-1.md)

  ↳ **MissingParameterError**

## Table of contents

### Constructors

- [constructor](missingparametererror.missingparametererror-1.md#constructor)

### Properties

- [message](missingparametererror.missingparametererror-1.md#message)
- [name](missingparametererror.missingparametererror-1.md#name)
- [prepareStackTrace](missingparametererror.missingparametererror-1.md#preparestacktrace)
- [stack](missingparametererror.missingparametererror-1.md#stack)
- [stackTraceLimit](missingparametererror.missingparametererror-1.md#stacktracelimit)

### Methods

- [captureStackTrace](missingparametererror.missingparametererror-1.md#capturestacktrace)
- [getCode](missingparametererror.missingparametererror-1.md#getcode)
- [getErrorResponse](missingparametererror.missingparametererror-1.md#geterrorresponse)
- [getHTTPCode](missingparametererror.missingparametererror-1.md#gethttpcode)
- [getMessage](missingparametererror.missingparametererror-1.md#getmessage)
- [getPrivateDetails](missingparametererror.missingparametererror-1.md#getprivatedetails)
- [getPublicDetails](missingparametererror.missingparametererror-1.md#getpublicdetails)

## Constructors

### constructor

\+ **new MissingParameterError**(`parameter`: *string*): [*MissingParameterError*](missingparametererror.missingparametererror-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`parameter` | *string* |

**Returns:** [*MissingParameterError*](missingparametererror.missingparametererror-1.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/MissingParameterError.ts:21](https://github.com/breautek/storm/blob/0d2af7e/src/MissingParameterError.ts#L21)

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

Defined in: [src/MissingParameterError.ts:30](https://github.com/breautek/storm/blob/0d2af7e/src/MissingParameterError.ts#L30)

___

### getErrorResponse

▸ **getErrorResponse**(): [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)

**Returns:** [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:74](https://github.com/breautek/storm/blob/0d2af7e/src/StormError.ts#L74)

___

### getHTTPCode

▸ **getHTTPCode**(): [*StatusCode*](../enums/statuscode.statuscode-1.md)

**Returns:** [*StatusCode*](../enums/statuscode.statuscode-1.md)

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/MissingParameterError.ts:34](https://github.com/breautek/storm/blob/0d2af7e/src/MissingParameterError.ts#L34)

___

### getMessage

▸ **getMessage**(): *string*

**Returns:** *string*

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/MissingParameterError.ts:26](https://github.com/breautek/storm/blob/0d2af7e/src/MissingParameterError.ts#L26)

___

### getPrivateDetails

▸ **getPrivateDetails**(): *any*

Private details are only logged to the server log.
They are kept secret from the client.

**Returns:** *any*

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:66](https://github.com/breautek/storm/blob/0d2af7e/src/StormError.ts#L66)

___

### getPublicDetails

▸ **getPublicDetails**(): [*IAdditionalErrorDetails*](../interfaces/stormerror.iadditionalerrordetails.md)

Sends details to the client.

**Returns:** [*IAdditionalErrorDetails*](../interfaces/stormerror.iadditionalerrordetails.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:58](https://github.com/breautek/storm/blob/0d2af7e/src/StormError.ts#L58)
