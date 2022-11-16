[@breautek/storm](../README.md) / InternalError

# Class: InternalError

## Hierarchy

- [`StormError`](StormError.md)<`any`\>

  ↳ **`InternalError`**

## Table of contents

### Constructors

- [constructor](InternalError.md#constructor)

### Properties

- [message](InternalError.md#message)
- [name](InternalError.md#name)
- [stack](InternalError.md#stack)
- [prepareStackTrace](InternalError.md#preparestacktrace)
- [stackTraceLimit](InternalError.md#stacktracelimit)

### Methods

- [getCode](InternalError.md#getcode)
- [getErrorResponse](InternalError.md#geterrorresponse)
- [getExitCode](InternalError.md#getexitcode)
- [getHTTPCode](InternalError.md#gethttpcode)
- [getLocaleCode](InternalError.md#getlocalecode)
- [getLocaleParameters](InternalError.md#getlocaleparameters)
- [getMessage](InternalError.md#getmessage)
- [getPrivateDetails](InternalError.md#getprivatedetails)
- [getPublicDetails](InternalError.md#getpublicdetails)
- [captureStackTrace](InternalError.md#capturestacktrace)

## Constructors

### constructor

• **new InternalError**(`details?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `details?` | `any` |

#### Overrides

[StormError](StormError.md).[constructor](StormError.md#constructor)

#### Defined in

[src/InternalError.ts:23](https://github.com/breautek/storm/blob/4b2254f/src/InternalError.ts#L23)

## Properties

### message

• **message**: `string`

#### Inherited from

[StormError](StormError.md).[message](StormError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1041

___

### name

• **name**: `string`

#### Inherited from

[StormError](StormError.md).[name](StormError.md#name)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1040

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[StormError](StormError.md).[stack](StormError.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1042

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

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

node_modules/@types/node/ts4.8/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[StormError](StormError.md).[stackTraceLimit](StormError.md#stacktracelimit)

#### Defined in

node_modules/@types/node/ts4.8/globals.d.ts:13

## Methods

### getCode

▸ **getCode**(): [`ErrorCode`](../enums/ErrorCode.md)

#### Returns

[`ErrorCode`](../enums/ErrorCode.md)

#### Overrides

[StormError](StormError.md).[getCode](StormError.md#getcode)

#### Defined in

[src/InternalError.ts:31](https://github.com/breautek/storm/blob/4b2254f/src/InternalError.ts#L31)

___

### getErrorResponse

▸ **getErrorResponse**(): [`IErrorResponse`](../interfaces/IErrorResponse.md)

#### Returns

[`IErrorResponse`](../interfaces/IErrorResponse.md)

#### Inherited from

[StormError](StormError.md).[getErrorResponse](StormError.md#geterrorresponse)

#### Defined in

[src/StormError.ts:76](https://github.com/breautek/storm/blob/4b2254f/src/StormError.ts#L76)

___

### getExitCode

▸ **getExitCode**(): [`ExitCode`](../enums/ExitCode.md)

#### Returns

[`ExitCode`](../enums/ExitCode.md)

#### Inherited from

[StormError](StormError.md).[getExitCode](StormError.md#getexitcode)

#### Defined in

[src/StormError.ts:97](https://github.com/breautek/storm/blob/4b2254f/src/StormError.ts#L97)

___

### getHTTPCode

▸ **getHTTPCode**(): [`StatusCode`](../enums/StatusCode.md)

#### Returns

[`StatusCode`](../enums/StatusCode.md)

#### Overrides

[StormError](StormError.md).[getHTTPCode](StormError.md#gethttpcode)

#### Defined in

[src/InternalError.ts:35](https://github.com/breautek/storm/blob/4b2254f/src/InternalError.ts#L35)

___

### getLocaleCode

▸ **getLocaleCode**(): `string`

#### Returns

`string`

#### Overrides

[StormError](StormError.md).[getLocaleCode](StormError.md#getlocalecode)

#### Defined in

[src/InternalError.ts:39](https://github.com/breautek/storm/blob/4b2254f/src/InternalError.ts#L39)

___

### getLocaleParameters

▸ **getLocaleParameters**(): `Record`<`string`, `string`\>

#### Returns

`Record`<`string`, `string`\>

#### Inherited from

[StormError](StormError.md).[getLocaleParameters](StormError.md#getlocaleparameters)

#### Defined in

[src/StormError.ts:93](https://github.com/breautek/storm/blob/4b2254f/src/StormError.ts#L93)

___

### getMessage

▸ **getMessage**(): `string`

#### Returns

`string`

#### Overrides

[StormError](StormError.md).[getMessage](StormError.md#getmessage)

#### Defined in

[src/InternalError.ts:27](https://github.com/breautek/storm/blob/4b2254f/src/InternalError.ts#L27)

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

[src/StormError.ts:68](https://github.com/breautek/storm/blob/4b2254f/src/StormError.ts#L68)

___

### getPublicDetails

▸ **getPublicDetails**(): [`IAdditionalErrorDetails`](../interfaces/IAdditionalErrorDetails.md)

Sends details to the client.

#### Returns

[`IAdditionalErrorDetails`](../interfaces/IAdditionalErrorDetails.md)

#### Inherited from

[StormError](StormError.md).[getPublicDetails](StormError.md#getpublicdetails)

#### Defined in

[src/StormError.ts:60](https://github.com/breautek/storm/blob/4b2254f/src/StormError.ts#L60)

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

node_modules/@types/node/ts4.8/globals.d.ts:4
