[@breautek/storm](../README.md) / [EntityNotFoundError](../modules/entitynotfounderror.md) / EntityNotFoundError

# Class: EntityNotFoundError

[EntityNotFoundError](../modules/entitynotfounderror.md).EntityNotFoundError

## Hierarchy

* [*StormError*](stormerror.stormerror-1.md)

  ↳ **EntityNotFoundError**

## Table of contents

### Constructors

- [constructor](entitynotfounderror.entitynotfounderror-1.md#constructor)

### Properties

- [message](entitynotfounderror.entitynotfounderror-1.md#message)
- [name](entitynotfounderror.entitynotfounderror-1.md#name)
- [prepareStackTrace](entitynotfounderror.entitynotfounderror-1.md#preparestacktrace)
- [stack](entitynotfounderror.entitynotfounderror-1.md#stack)
- [stackTraceLimit](entitynotfounderror.entitynotfounderror-1.md#stacktracelimit)

### Methods

- [captureStackTrace](entitynotfounderror.entitynotfounderror-1.md#capturestacktrace)
- [getCode](entitynotfounderror.entitynotfounderror-1.md#getcode)
- [getErrorResponse](entitynotfounderror.entitynotfounderror-1.md#geterrorresponse)
- [getHTTPCode](entitynotfounderror.entitynotfounderror-1.md#gethttpcode)
- [getMessage](entitynotfounderror.entitynotfounderror-1.md#getmessage)
- [getPrivateDetails](entitynotfounderror.entitynotfounderror-1.md#getprivatedetails)
- [getPublicDetails](entitynotfounderror.entitynotfounderror-1.md#getpublicdetails)

## Constructors

### constructor

\+ **new EntityNotFoundError**(`name`: *string*): [*EntityNotFoundError*](entitynotfounderror.entitynotfounderror-1.md)

#### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |

**Returns:** [*EntityNotFoundError*](entitynotfounderror.entitynotfounderror-1.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/EntityNotFoundError.ts:21](https://github.com/breautek/storm/blob/d383af9/src/EntityNotFoundError.ts#L21)

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

Defined in: [src/EntityNotFoundError.ts:30](https://github.com/breautek/storm/blob/d383af9/src/EntityNotFoundError.ts#L30)

___

### getErrorResponse

▸ **getErrorResponse**(): [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)

**Returns:** [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:74](https://github.com/breautek/storm/blob/d383af9/src/StormError.ts#L74)

___

### getHTTPCode

▸ **getHTTPCode**(): [*StatusCode*](../enums/statuscode.statuscode-1.md)

**Returns:** [*StatusCode*](../enums/statuscode.statuscode-1.md)

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/EntityNotFoundError.ts:34](https://github.com/breautek/storm/blob/d383af9/src/EntityNotFoundError.ts#L34)

___

### getMessage

▸ **getMessage**(): *string*

**Returns:** *string*

Overrides: [StormError](stormerror.stormerror-1.md)

Defined in: [src/EntityNotFoundError.ts:26](https://github.com/breautek/storm/blob/d383af9/src/EntityNotFoundError.ts#L26)

___

### getPrivateDetails

▸ **getPrivateDetails**(): *any*

Private details are only logged to the server log.
They are kept secret from the client.

**Returns:** *any*

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:66](https://github.com/breautek/storm/blob/d383af9/src/StormError.ts#L66)

___

### getPublicDetails

▸ **getPublicDetails**(): [*IAdditionalErrorDetails*](../interfaces/stormerror.iadditionalerrordetails.md)

Sends details to the client.

**Returns:** [*IAdditionalErrorDetails*](../interfaces/stormerror.iadditionalerrordetails.md)

Inherited from: [StormError](stormerror.stormerror-1.md)

Defined in: [src/StormError.ts:58](https://github.com/breautek/storm/blob/d383af9/src/StormError.ts#L58)
