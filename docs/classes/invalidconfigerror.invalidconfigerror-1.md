[@breautek/storm](../README.md) / [InvalidConfigError](../modules/invalidconfigerror.md) / InvalidConfigError

# Class: InvalidConfigError<TConfig\>

[InvalidConfigError](../modules/invalidconfigerror.md).InvalidConfigError

## Type parameters

Name | Type |
------ | ------ |
`TConfig` | [*IConfig*](../interfaces/iconfig.iconfig-1.md) |

## Hierarchy

* [*StormError*](stormerror.stormerror-1.md)<*IInvalidConfigErrorDetails*<TConfig\>\>

  ↳ **InvalidConfigError**

## Table of contents

### Constructors

- [constructor](invalidconfigerror.invalidconfigerror-1.md#constructor)

### Properties

- [message](invalidconfigerror.invalidconfigerror-1.md#message)
- [name](invalidconfigerror.invalidconfigerror-1.md#name)
- [prepareStackTrace](invalidconfigerror.invalidconfigerror-1.md#preparestacktrace)
- [stack](invalidconfigerror.invalidconfigerror-1.md#stack)
- [stackTraceLimit](invalidconfigerror.invalidconfigerror-1.md#stacktracelimit)

### Methods

- [captureStackTrace](invalidconfigerror.invalidconfigerror-1.md#capturestacktrace)
- [getCode](invalidconfigerror.invalidconfigerror-1.md#getcode)
- [getErrorResponse](invalidconfigerror.invalidconfigerror-1.md#geterrorresponse)
- [getHTTPCode](invalidconfigerror.invalidconfigerror-1.md#gethttpcode)
- [getMessage](invalidconfigerror.invalidconfigerror-1.md#getmessage)
- [getPrivateDetails](invalidconfigerror.invalidconfigerror-1.md#getprivatedetails)
- [getPublicDetails](invalidconfigerror.invalidconfigerror-1.md#getpublicdetails)

## Constructors

### constructor

\+ **new InvalidConfigError**<TConfig\>(`config`: TConfig, `errors`: *ErrorObject*<*string*, *Record*<*string*, *any*\>, *unknown*\>[]): [*InvalidConfigError*](invalidconfigerror.invalidconfigerror-1.md)<TConfig\>

#### Type parameters:

Name | Type |
------ | ------ |
`TConfig` | [*IConfig*](../interfaces/iconfig.iconfig-1.md) |

#### Parameters:

Name | Type |
------ | ------ |
`config` | TConfig |
`errors` | *ErrorObject*<*string*, *Record*<*string*, *any*\>, *unknown*\>[] |

**Returns:** [*InvalidConfigError*](invalidconfigerror.invalidconfigerror-1.md)<TConfig\>

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/InvalidConfigError.ts:28](https://github.com/breautek/storm/blob/d5629c8/src/InvalidConfigError.ts#L28)

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

Defined in: [src/InvalidConfigError.ts:41](https://github.com/breautek/storm/blob/d5629c8/src/InvalidConfigError.ts#L41)

___

### getErrorResponse

▸ **getErrorResponse**(): [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)

**Returns:** [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:74](https://github.com/breautek/storm/blob/d5629c8/src/StormError.ts#L74)

___

### getHTTPCode

▸ **getHTTPCode**(): [*StatusCode*](../enums/statuscode.statuscode-1.md)

**Returns:** [*StatusCode*](../enums/statuscode.statuscode-1.md)

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/InvalidConfigError.ts:45](https://github.com/breautek/storm/blob/d5629c8/src/InvalidConfigError.ts#L45)

___

### getMessage

▸ **getMessage**(): *string*

**Returns:** *string*

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/InvalidConfigError.ts:36](https://github.com/breautek/storm/blob/d5629c8/src/InvalidConfigError.ts#L36)

___

### getPrivateDetails

▸ **getPrivateDetails**(): *IInvalidConfigErrorDetails*<TConfig\>

Private details are only logged to the server log.
They are kept secret from the client.

**Returns:** *IInvalidConfigErrorDetails*<TConfig\>

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:66](https://github.com/breautek/storm/blob/d5629c8/src/StormError.ts#L66)

___

### getPublicDetails

▸ **getPublicDetails**(): [*IAdditionalErrorDetails*](../interfaces/stormerror.iadditionalerrordetails.md)

Sends details to the client.

**Returns:** [*IAdditionalErrorDetails*](../interfaces/stormerror.iadditionalerrordetails.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:58](https://github.com/breautek/storm/blob/d5629c8/src/StormError.ts#L58)
