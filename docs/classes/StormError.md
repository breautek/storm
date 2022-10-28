[@breautek/storm](../README.md) / StormError

# Class: StormError<TErrorDetails\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TErrorDetails` | `any` |

## Hierarchy

- `Error`

  ↳ **`StormError`**

  ↳↳ [`RawError`](RawError.md)

  ↳↳ [`MissingParameterError`](MissingParameterError.md)

  ↳↳ [`InvalidCredentialsError`](InvalidCredentialsError.md)

  ↳↳ [`InternalError`](InternalError.md)

  ↳↳ [`ExpiredTokenError`](ExpiredTokenError.md)

  ↳↳ [`InvalidValueError`](InvalidValueError.md)

  ↳↳ [`UnauthorizedAccessError`](UnauthorizedAccessError.md)

  ↳↳ [`EntityNotFoundError`](EntityNotFoundError.md)

  ↳↳ [`DiskSpaceError`](DiskSpaceError.md)

  ↳↳ [`DuplicateEntryError`](DuplicateEntryError.md)

  ↳↳ [`MissingConfigError`](MissingConfigError.md)

  ↳↳ [`DatabaseQueryError`](DatabaseQueryError.md)

  ↳↳ [`NotImplementedError`](NotImplementedError.md)

## Table of contents

### Constructors

- [constructor](StormError.md#constructor)

### Properties

- [message](StormError.md#message)
- [name](StormError.md#name)
- [stack](StormError.md#stack)
- [prepareStackTrace](StormError.md#preparestacktrace)
- [stackTraceLimit](StormError.md#stacktracelimit)

### Methods

- [getCode](StormError.md#getcode)
- [getErrorResponse](StormError.md#geterrorresponse)
- [getExitCode](StormError.md#getexitcode)
- [getHTTPCode](StormError.md#gethttpcode)
- [getLocaleCode](StormError.md#getlocalecode)
- [getLocaleParameters](StormError.md#getlocaleparameters)
- [getMessage](StormError.md#getmessage)
- [getPrivateDetails](StormError.md#getprivatedetails)
- [getPublicDetails](StormError.md#getpublicdetails)
- [captureStackTrace](StormError.md#capturestacktrace)

## Constructors

### constructor

• **new StormError**<`TErrorDetails`\>(`details?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TErrorDetails` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `details?` | `TErrorDetails` |

#### Overrides

Error.constructor

#### Defined in

[src/StormError.ts:44](https://github.com/breautek/storm/blob/cf7306d/src/StormError.ts#L44)

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1041

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1040

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

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

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/ts4.8/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/ts4.8/globals.d.ts:13

## Methods

### getCode

▸ `Abstract` **getCode**(): `number`

#### Returns

`number`

#### Defined in

[src/StormError.ts:55](https://github.com/breautek/storm/blob/cf7306d/src/StormError.ts#L55)

___

### getErrorResponse

▸ **getErrorResponse**(): [`IErrorResponse`](../interfaces/IErrorResponse.md)

#### Returns

[`IErrorResponse`](../interfaces/IErrorResponse.md)

#### Defined in

[src/StormError.ts:76](https://github.com/breautek/storm/blob/cf7306d/src/StormError.ts#L76)

___

### getExitCode

▸ **getExitCode**(): [`ExitCode`](../enums/ExitCode.md)

#### Returns

[`ExitCode`](../enums/ExitCode.md)

#### Defined in

[src/StormError.ts:97](https://github.com/breautek/storm/blob/cf7306d/src/StormError.ts#L97)

___

### getHTTPCode

▸ **getHTTPCode**(): [`StatusCode`](../enums/StatusCode.md)

#### Returns

[`StatusCode`](../enums/StatusCode.md)

#### Defined in

[src/StormError.ts:72](https://github.com/breautek/storm/blob/cf7306d/src/StormError.ts#L72)

___

### getLocaleCode

▸ **getLocaleCode**(): `string`

#### Returns

`string`

#### Defined in

[src/StormError.ts:89](https://github.com/breautek/storm/blob/cf7306d/src/StormError.ts#L89)

___

### getLocaleParameters

▸ **getLocaleParameters**(): `Record`<`string`, `string`\>

#### Returns

`Record`<`string`, `string`\>

#### Defined in

[src/StormError.ts:93](https://github.com/breautek/storm/blob/cf7306d/src/StormError.ts#L93)

___

### getMessage

▸ `Abstract` **getMessage**(): `string`

#### Returns

`string`

#### Defined in

[src/StormError.ts:54](https://github.com/breautek/storm/blob/cf7306d/src/StormError.ts#L54)

___

### getPrivateDetails

▸ **getPrivateDetails**(): `TErrorDetails`

Private details are only logged to the server log.
They are kept secret from the client.

#### Returns

`TErrorDetails`

#### Defined in

[src/StormError.ts:68](https://github.com/breautek/storm/blob/cf7306d/src/StormError.ts#L68)

___

### getPublicDetails

▸ **getPublicDetails**(): [`IAdditionalErrorDetails`](../interfaces/IAdditionalErrorDetails.md)

Sends details to the client.

#### Returns

[`IAdditionalErrorDetails`](../interfaces/IAdditionalErrorDetails.md)

#### Defined in

[src/StormError.ts:60](https://github.com/breautek/storm/blob/cf7306d/src/StormError.ts#L60)

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

Error.captureStackTrace

#### Defined in

node_modules/@types/node/ts4.8/globals.d.ts:4
