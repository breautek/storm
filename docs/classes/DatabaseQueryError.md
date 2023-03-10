[@breautek/storm](../README.md) / DatabaseQueryError

# Class: DatabaseQueryError

## Hierarchy

- [`StormError`](StormError.md)<{ `error`: `any` ; `query`: `string`  }\>

  ↳ **`DatabaseQueryError`**

  ↳↳ [`DeadLockError`](DeadLockError.md)

  ↳↳ [`LockWaitTimeoutError`](LockWaitTimeoutError.md)

## Table of contents

### Constructors

- [constructor](DatabaseQueryError.md#constructor)

### Properties

- [message](DatabaseQueryError.md#message)
- [name](DatabaseQueryError.md#name)
- [stack](DatabaseQueryError.md#stack)
- [prepareStackTrace](DatabaseQueryError.md#preparestacktrace)
- [stackTraceLimit](DatabaseQueryError.md#stacktracelimit)

### Methods

- [getCode](DatabaseQueryError.md#getcode)
- [getErrorResponse](DatabaseQueryError.md#geterrorresponse)
- [getExitCode](DatabaseQueryError.md#getexitcode)
- [getHTTPCode](DatabaseQueryError.md#gethttpcode)
- [getLocaleCode](DatabaseQueryError.md#getlocalecode)
- [getLocaleParameters](DatabaseQueryError.md#getlocaleparameters)
- [getMessage](DatabaseQueryError.md#getmessage)
- [getPrivateDetails](DatabaseQueryError.md#getprivatedetails)
- [getPublicDetails](DatabaseQueryError.md#getpublicdetails)
- [captureStackTrace](DatabaseQueryError.md#capturestacktrace)

## Constructors

### constructor

• **new DatabaseQueryError**(`query`, `error`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `error` | `any` |

#### Overrides

[StormError](StormError.md).[constructor](StormError.md#constructor)

#### Defined in

[src/DatabaseQueryError.ts:25](https://github.com/breautek/storm/blob/eca48f5/src/DatabaseQueryError.ts#L25)

## Properties

### message

• **message**: `string`

#### Inherited from

[StormError](StormError.md).[message](StormError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1054

___

### name

• **name**: `string`

#### Inherited from

[StormError](StormError.md).[name](StormError.md#name)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1053

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[StormError](StormError.md).[stack](StormError.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1055

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

▸ **getCode**(): `number`

#### Returns

`number`

#### Overrides

[StormError](StormError.md).[getCode](StormError.md#getcode)

#### Defined in

[src/DatabaseQueryError.ts:36](https://github.com/breautek/storm/blob/eca48f5/src/DatabaseQueryError.ts#L36)

___

### getErrorResponse

▸ **getErrorResponse**(): [`IErrorResponse`](../interfaces/IErrorResponse.md)

#### Returns

[`IErrorResponse`](../interfaces/IErrorResponse.md)

#### Inherited from

[StormError](StormError.md).[getErrorResponse](StormError.md#geterrorresponse)

#### Defined in

[src/StormError.ts:76](https://github.com/breautek/storm/blob/eca48f5/src/StormError.ts#L76)

___

### getExitCode

▸ **getExitCode**(): [`ExitCode`](../enums/ExitCode.md)

#### Returns

[`ExitCode`](../enums/ExitCode.md)

#### Inherited from

[StormError](StormError.md).[getExitCode](StormError.md#getexitcode)

#### Defined in

[src/StormError.ts:97](https://github.com/breautek/storm/blob/eca48f5/src/StormError.ts#L97)

___

### getHTTPCode

▸ **getHTTPCode**(): [`StatusCode`](../enums/StatusCode.md)

#### Returns

[`StatusCode`](../enums/StatusCode.md)

#### Overrides

[StormError](StormError.md).[getHTTPCode](StormError.md#gethttpcode)

#### Defined in

[src/DatabaseQueryError.ts:40](https://github.com/breautek/storm/blob/eca48f5/src/DatabaseQueryError.ts#L40)

___

### getLocaleCode

▸ **getLocaleCode**(): `string`

#### Returns

`string`

#### Overrides

[StormError](StormError.md).[getLocaleCode](StormError.md#getlocalecode)

#### Defined in

[src/DatabaseQueryError.ts:44](https://github.com/breautek/storm/blob/eca48f5/src/DatabaseQueryError.ts#L44)

___

### getLocaleParameters

▸ **getLocaleParameters**(): `Record`<`string`, `string`\>

#### Returns

`Record`<`string`, `string`\>

#### Inherited from

[StormError](StormError.md).[getLocaleParameters](StormError.md#getlocaleparameters)

#### Defined in

[src/StormError.ts:93](https://github.com/breautek/storm/blob/eca48f5/src/StormError.ts#L93)

___

### getMessage

▸ **getMessage**(): `string`

#### Returns

`string`

#### Overrides

[StormError](StormError.md).[getMessage](StormError.md#getmessage)

#### Defined in

[src/DatabaseQueryError.ts:32](https://github.com/breautek/storm/blob/eca48f5/src/DatabaseQueryError.ts#L32)

___

### getPrivateDetails

▸ **getPrivateDetails**(): `Object`

Private details are only logged to the server log.
They are kept secret from the client.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `any` |
| `query` | `string` |

#### Inherited from

[StormError](StormError.md).[getPrivateDetails](StormError.md#getprivatedetails)

#### Defined in

[src/StormError.ts:68](https://github.com/breautek/storm/blob/eca48f5/src/StormError.ts#L68)

___

### getPublicDetails

▸ **getPublicDetails**(): [`IAdditionalErrorDetails`](../interfaces/IAdditionalErrorDetails.md)

Sends details to the client.

#### Returns

[`IAdditionalErrorDetails`](../interfaces/IAdditionalErrorDetails.md)

#### Inherited from

[StormError](StormError.md).[getPublicDetails](StormError.md#getpublicdetails)

#### Defined in

[src/StormError.ts:60](https://github.com/breautek/storm/blob/eca48f5/src/StormError.ts#L60)

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
