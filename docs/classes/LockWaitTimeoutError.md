[@breautek/storm](../README.md) / LockWaitTimeoutError

# Class: LockWaitTimeoutError

DeadLockError is a DatabaseQueryError but is subclasses for typing purposes.

## Hierarchy

- [`DatabaseQueryError`](DatabaseQueryError.md)

  ↳ **`LockWaitTimeoutError`**

## Table of contents

### Constructors

- [constructor](LockWaitTimeoutError.md#constructor)

### Properties

- [message](LockWaitTimeoutError.md#message)
- [name](LockWaitTimeoutError.md#name)
- [stack](LockWaitTimeoutError.md#stack)
- [prepareStackTrace](LockWaitTimeoutError.md#preparestacktrace)
- [stackTraceLimit](LockWaitTimeoutError.md#stacktracelimit)

### Methods

- [getCode](LockWaitTimeoutError.md#getcode)
- [getErrorResponse](LockWaitTimeoutError.md#geterrorresponse)
- [getExitCode](LockWaitTimeoutError.md#getexitcode)
- [getHTTPCode](LockWaitTimeoutError.md#gethttpcode)
- [getLocaleCode](LockWaitTimeoutError.md#getlocalecode)
- [getLocaleParameters](LockWaitTimeoutError.md#getlocaleparameters)
- [getMessage](LockWaitTimeoutError.md#getmessage)
- [getPrivateDetails](LockWaitTimeoutError.md#getprivatedetails)
- [getPublicDetails](LockWaitTimeoutError.md#getpublicdetails)
- [captureStackTrace](LockWaitTimeoutError.md#capturestacktrace)

## Constructors

### constructor

• **new LockWaitTimeoutError**(`query`, `error`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `error` | `any` |

#### Inherited from

[DatabaseQueryError](DatabaseQueryError.md).[constructor](DatabaseQueryError.md#constructor)

#### Defined in

[src/DatabaseQueryError.ts:25](https://github.com/breautek/storm/blob/d45307d/src/DatabaseQueryError.ts#L25)

## Properties

### message

• **message**: `string`

#### Inherited from

[DatabaseQueryError](DatabaseQueryError.md).[message](DatabaseQueryError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1054

___

### name

• **name**: `string`

#### Inherited from

[DatabaseQueryError](DatabaseQueryError.md).[name](DatabaseQueryError.md#name)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1053

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[DatabaseQueryError](DatabaseQueryError.md).[stack](DatabaseQueryError.md#stack)

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

[DatabaseQueryError](DatabaseQueryError.md).[prepareStackTrace](DatabaseQueryError.md#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[DatabaseQueryError](DatabaseQueryError.md).[stackTraceLimit](DatabaseQueryError.md#stacktracelimit)

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### getCode

▸ **getCode**(): `number`

#### Returns

`number`

#### Inherited from

[DatabaseQueryError](DatabaseQueryError.md).[getCode](DatabaseQueryError.md#getcode)

#### Defined in

[src/DatabaseQueryError.ts:36](https://github.com/breautek/storm/blob/d45307d/src/DatabaseQueryError.ts#L36)

___

### getErrorResponse

▸ **getErrorResponse**(): [`IErrorResponse`](../interfaces/IErrorResponse.md)

#### Returns

[`IErrorResponse`](../interfaces/IErrorResponse.md)

#### Inherited from

[DatabaseQueryError](DatabaseQueryError.md).[getErrorResponse](DatabaseQueryError.md#geterrorresponse)

#### Defined in

[src/StormError.ts:76](https://github.com/breautek/storm/blob/d45307d/src/StormError.ts#L76)

___

### getExitCode

▸ **getExitCode**(): [`ExitCode`](../enums/ExitCode.md)

#### Returns

[`ExitCode`](../enums/ExitCode.md)

#### Inherited from

[DatabaseQueryError](DatabaseQueryError.md).[getExitCode](DatabaseQueryError.md#getexitcode)

#### Defined in

[src/StormError.ts:97](https://github.com/breautek/storm/blob/d45307d/src/StormError.ts#L97)

___

### getHTTPCode

▸ **getHTTPCode**(): [`StatusCode`](../enums/StatusCode.md)

#### Returns

[`StatusCode`](../enums/StatusCode.md)

#### Inherited from

[DatabaseQueryError](DatabaseQueryError.md).[getHTTPCode](DatabaseQueryError.md#gethttpcode)

#### Defined in

[src/DatabaseQueryError.ts:40](https://github.com/breautek/storm/blob/d45307d/src/DatabaseQueryError.ts#L40)

___

### getLocaleCode

▸ **getLocaleCode**(): `string`

#### Returns

`string`

#### Inherited from

[DatabaseQueryError](DatabaseQueryError.md).[getLocaleCode](DatabaseQueryError.md#getlocalecode)

#### Defined in

[src/DatabaseQueryError.ts:44](https://github.com/breautek/storm/blob/d45307d/src/DatabaseQueryError.ts#L44)

___

### getLocaleParameters

▸ **getLocaleParameters**(): `Record`<`string`, `string`\>

#### Returns

`Record`<`string`, `string`\>

#### Inherited from

[DatabaseQueryError](DatabaseQueryError.md).[getLocaleParameters](DatabaseQueryError.md#getlocaleparameters)

#### Defined in

[src/StormError.ts:93](https://github.com/breautek/storm/blob/d45307d/src/StormError.ts#L93)

___

### getMessage

▸ **getMessage**(): `string`

#### Returns

`string`

#### Inherited from

[DatabaseQueryError](DatabaseQueryError.md).[getMessage](DatabaseQueryError.md#getmessage)

#### Defined in

[src/DatabaseQueryError.ts:32](https://github.com/breautek/storm/blob/d45307d/src/DatabaseQueryError.ts#L32)

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

[DatabaseQueryError](DatabaseQueryError.md).[getPrivateDetails](DatabaseQueryError.md#getprivatedetails)

#### Defined in

[src/StormError.ts:68](https://github.com/breautek/storm/blob/d45307d/src/StormError.ts#L68)

___

### getPublicDetails

▸ **getPublicDetails**(): [`IAdditionalErrorDetails`](../interfaces/IAdditionalErrorDetails.md)

Sends details to the client.

#### Returns

[`IAdditionalErrorDetails`](../interfaces/IAdditionalErrorDetails.md)

#### Inherited from

[DatabaseQueryError](DatabaseQueryError.md).[getPublicDetails](DatabaseQueryError.md#getpublicdetails)

#### Defined in

[src/StormError.ts:60](https://github.com/breautek/storm/blob/d45307d/src/StormError.ts#L60)

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

[DatabaseQueryError](DatabaseQueryError.md).[captureStackTrace](DatabaseQueryError.md#capturestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:4
