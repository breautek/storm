[@breautek/storm](../README.md) / [DuplicateEntryError](../modules/DuplicateEntryError.md) / DuplicateEntryError

# Class: DuplicateEntryError

[DuplicateEntryError](../modules/DuplicateEntryError.md).DuplicateEntryError

## Hierarchy

- [`StormError`](StormError.StormError-1.md)

  ↳ **`DuplicateEntryError`**

## Table of contents

### Constructors

- [constructor](DuplicateEntryError.DuplicateEntryError-1.md#constructor)

### Properties

- [message](DuplicateEntryError.DuplicateEntryError-1.md#message)
- [name](DuplicateEntryError.DuplicateEntryError-1.md#name)
- [stack](DuplicateEntryError.DuplicateEntryError-1.md#stack)
- [prepareStackTrace](DuplicateEntryError.DuplicateEntryError-1.md#preparestacktrace)
- [stackTraceLimit](DuplicateEntryError.DuplicateEntryError-1.md#stacktracelimit)

### Methods

- [getCode](DuplicateEntryError.DuplicateEntryError-1.md#getcode)
- [getErrorResponse](DuplicateEntryError.DuplicateEntryError-1.md#geterrorresponse)
- [getExitCode](DuplicateEntryError.DuplicateEntryError-1.md#getexitcode)
- [getHTTPCode](DuplicateEntryError.DuplicateEntryError-1.md#gethttpcode)
- [getMessage](DuplicateEntryError.DuplicateEntryError-1.md#getmessage)
- [getPrivateDetails](DuplicateEntryError.DuplicateEntryError-1.md#getprivatedetails)
- [getPublicDetails](DuplicateEntryError.DuplicateEntryError-1.md#getpublicdetails)
- [captureStackTrace](DuplicateEntryError.DuplicateEntryError-1.md#capturestacktrace)

## Constructors

### constructor

• **new DuplicateEntryError**(`entity`, `name`, `property?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `entity` | `string` | `undefined` |
| `name` | `string` | `undefined` |
| `property` | `string` | `'name'` |

#### Overrides

[StormError](StormError.StormError-1.md).[constructor](StormError.StormError-1.md#constructor)

#### Defined in

[src/DuplicateEntryError.ts:28](https://github.com/breautek/storm/blob/6ea3887/src/DuplicateEntryError.ts#L28)

## Properties

### message

• **message**: `string`

#### Inherited from

[StormError](StormError.StormError-1.md).[message](StormError.StormError-1.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: `string`

#### Inherited from

[StormError](StormError.StormError-1.md).[name](StormError.StormError-1.md#name)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:973

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[StormError](StormError.StormError-1.md).[stack](StormError.StormError-1.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

Optional override for formatting stack traces

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

[StormError](StormError.StormError-1.md).[prepareStackTrace](StormError.StormError-1.md#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[StormError](StormError.StormError-1.md).[stackTraceLimit](StormError.StormError-1.md#stacktracelimit)

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### getCode

▸ **getCode**(): [`ErrorCode`](../enums/ErrorCode.ErrorCode-1.md)

#### Returns

[`ErrorCode`](../enums/ErrorCode.ErrorCode-1.md)

#### Overrides

[StormError](StormError.StormError-1.md).[getCode](StormError.StormError-1.md#getcode)

#### Defined in

[src/DuplicateEntryError.ts:41](https://github.com/breautek/storm/blob/6ea3887/src/DuplicateEntryError.ts#L41)

___

### getErrorResponse

▸ **getErrorResponse**(): [`IErrorResponse`](../interfaces/StormError.IErrorResponse.md)

#### Returns

[`IErrorResponse`](../interfaces/StormError.IErrorResponse.md)

#### Inherited from

[StormError](StormError.StormError-1.md).[getErrorResponse](StormError.StormError-1.md#geterrorresponse)

#### Defined in

[src/StormError.ts:70](https://github.com/breautek/storm/blob/6ea3887/src/StormError.ts#L70)

___

### getExitCode

▸ **getExitCode**(): [`ExitCode`](../enums/ExitCode.ExitCode-1.md)

#### Returns

[`ExitCode`](../enums/ExitCode.ExitCode-1.md)

#### Inherited from

[StormError](StormError.StormError-1.md).[getExitCode](StormError.StormError-1.md#getexitcode)

#### Defined in

[src/StormError.ts:79](https://github.com/breautek/storm/blob/6ea3887/src/StormError.ts#L79)

___

### getHTTPCode

▸ **getHTTPCode**(): [`StatusCode`](../enums/StatusCode.StatusCode-1.md)

#### Returns

[`StatusCode`](../enums/StatusCode.StatusCode-1.md)

#### Overrides

[StormError](StormError.StormError-1.md).[getHTTPCode](StormError.StormError-1.md#gethttpcode)

#### Defined in

[src/DuplicateEntryError.ts:45](https://github.com/breautek/storm/blob/6ea3887/src/DuplicateEntryError.ts#L45)

___

### getMessage

▸ **getMessage**(): `string`

#### Returns

`string`

#### Overrides

[StormError](StormError.StormError-1.md).[getMessage](StormError.StormError-1.md#getmessage)

#### Defined in

[src/DuplicateEntryError.ts:36](https://github.com/breautek/storm/blob/6ea3887/src/DuplicateEntryError.ts#L36)

___

### getPrivateDetails

▸ **getPrivateDetails**(): `any`

Private details are only logged to the server log.
They are kept secret from the client.

#### Returns

`any`

#### Inherited from

[StormError](StormError.StormError-1.md).[getPrivateDetails](StormError.StormError-1.md#getprivatedetails)

#### Defined in

[src/StormError.ts:62](https://github.com/breautek/storm/blob/6ea3887/src/StormError.ts#L62)

___

### getPublicDetails

▸ **getPublicDetails**(): [`IAdditionalErrorDetails`](../interfaces/StormError.IAdditionalErrorDetails.md)

Sends details to the client.

#### Returns

[`IAdditionalErrorDetails`](../interfaces/StormError.IAdditionalErrorDetails.md)

#### Inherited from

[StormError](StormError.StormError-1.md).[getPublicDetails](StormError.StormError-1.md#getpublicdetails)

#### Defined in

[src/StormError.ts:54](https://github.com/breautek/storm/blob/6ea3887/src/StormError.ts#L54)

___

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

[StormError](StormError.StormError-1.md).[captureStackTrace](StormError.StormError-1.md#capturestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:4
