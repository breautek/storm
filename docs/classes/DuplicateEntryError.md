[@breautek/storm](../README.md) / DuplicateEntryError

# Class: DuplicateEntryError

## Hierarchy

- [`StormError`](StormError.md)

  ↳ **`DuplicateEntryError`**

## Table of contents

### Constructors

- [constructor](DuplicateEntryError.md#constructor)

### Properties

- [message](DuplicateEntryError.md#message)
- [name](DuplicateEntryError.md#name)
- [stack](DuplicateEntryError.md#stack)
- [prepareStackTrace](DuplicateEntryError.md#preparestacktrace)
- [stackTraceLimit](DuplicateEntryError.md#stacktracelimit)

### Methods

- [getCode](DuplicateEntryError.md#getcode)
- [getErrorResponse](DuplicateEntryError.md#geterrorresponse)
- [getExitCode](DuplicateEntryError.md#getexitcode)
- [getHTTPCode](DuplicateEntryError.md#gethttpcode)
- [getMessage](DuplicateEntryError.md#getmessage)
- [getPrivateDetails](DuplicateEntryError.md#getprivatedetails)
- [getPublicDetails](DuplicateEntryError.md#getpublicdetails)
- [captureStackTrace](DuplicateEntryError.md#capturestacktrace)

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

[StormError](StormError.md).[constructor](StormError.md#constructor)

#### Defined in

[src/DuplicateEntryError.ts:28](https://github.com/breautek/storm/blob/2f08fb3/src/DuplicateEntryError.ts#L28)

## Properties

### message

• **message**: `string`

#### Inherited from

[StormError](StormError.md).[message](StormError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1023

___

### name

• **name**: `string`

#### Inherited from

[StormError](StormError.md).[name](StormError.md#name)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1022

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[StormError](StormError.md).[stack](StormError.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1024

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

[StormError](StormError.md).[prepareStackTrace](StormError.md#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[StormError](StormError.md).[stackTraceLimit](StormError.md#stacktracelimit)

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### getCode

▸ **getCode**(): [`ErrorCode`](../enums/ErrorCode.md)

#### Returns

[`ErrorCode`](../enums/ErrorCode.md)

#### Overrides

[StormError](StormError.md).[getCode](StormError.md#getcode)

#### Defined in

[src/DuplicateEntryError.ts:41](https://github.com/breautek/storm/blob/2f08fb3/src/DuplicateEntryError.ts#L41)

___

### getErrorResponse

▸ **getErrorResponse**(): [`IErrorResponse`](../interfaces/IErrorResponse.md)

#### Returns

[`IErrorResponse`](../interfaces/IErrorResponse.md)

#### Inherited from

[StormError](StormError.md).[getErrorResponse](StormError.md#geterrorresponse)

#### Defined in

[src/StormError.ts:70](https://github.com/breautek/storm/blob/2f08fb3/src/StormError.ts#L70)

___

### getExitCode

▸ **getExitCode**(): [`ExitCode`](../enums/ExitCode.md)

#### Returns

[`ExitCode`](../enums/ExitCode.md)

#### Inherited from

[StormError](StormError.md).[getExitCode](StormError.md#getexitcode)

#### Defined in

[src/StormError.ts:79](https://github.com/breautek/storm/blob/2f08fb3/src/StormError.ts#L79)

___

### getHTTPCode

▸ **getHTTPCode**(): [`StatusCode`](../enums/StatusCode.md)

#### Returns

[`StatusCode`](../enums/StatusCode.md)

#### Overrides

[StormError](StormError.md).[getHTTPCode](StormError.md#gethttpcode)

#### Defined in

[src/DuplicateEntryError.ts:45](https://github.com/breautek/storm/blob/2f08fb3/src/DuplicateEntryError.ts#L45)

___

### getMessage

▸ **getMessage**(): `string`

#### Returns

`string`

#### Overrides

[StormError](StormError.md).[getMessage](StormError.md#getmessage)

#### Defined in

[src/DuplicateEntryError.ts:36](https://github.com/breautek/storm/blob/2f08fb3/src/DuplicateEntryError.ts#L36)

___

### getPrivateDetails

▸ **getPrivateDetails**(): `any`

Private details are only logged to the server log.
They are kept secret from the client.

#### Returns

`any`

#### Inherited from

[StormError](StormError.md).[getPrivateDetails](StormError.md#getprivatedetails)

#### Defined in

[src/StormError.ts:62](https://github.com/breautek/storm/blob/2f08fb3/src/StormError.ts#L62)

___

### getPublicDetails

▸ **getPublicDetails**(): [`IAdditionalErrorDetails`](../interfaces/IAdditionalErrorDetails.md)

Sends details to the client.

#### Returns

[`IAdditionalErrorDetails`](../interfaces/IAdditionalErrorDetails.md)

#### Inherited from

[StormError](StormError.md).[getPublicDetails](StormError.md#getpublicdetails)

#### Defined in

[src/StormError.ts:54](https://github.com/breautek/storm/blob/2f08fb3/src/StormError.ts#L54)

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

[StormError](StormError.md).[captureStackTrace](StormError.md#capturestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:4