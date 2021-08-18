[@breautek/storm](../README.md) / [InvalidConfigError](../modules/InvalidConfigError.md) / InvalidConfigError

# Class: InvalidConfigError<TConfig\>

[InvalidConfigError](../modules/InvalidConfigError.md).InvalidConfigError

## Type parameters

| Name | Type |
| :------ | :------ |
| `TConfig` | extends [`IConfig`](../interfaces/IConfig.IConfig-1.md) |

## Hierarchy

- [`StormError`](StormError.StormError-1.md)<`IInvalidConfigErrorDetails`<`TConfig`\>\>

  ↳ **`InvalidConfigError`**

## Table of contents

### Constructors

- [constructor](InvalidConfigError.InvalidConfigError-1.md#constructor)

### Properties

- [message](InvalidConfigError.InvalidConfigError-1.md#message)
- [name](InvalidConfigError.InvalidConfigError-1.md#name)
- [stack](InvalidConfigError.InvalidConfigError-1.md#stack)
- [prepareStackTrace](InvalidConfigError.InvalidConfigError-1.md#preparestacktrace)
- [stackTraceLimit](InvalidConfigError.InvalidConfigError-1.md#stacktracelimit)

### Methods

- [getCode](InvalidConfigError.InvalidConfigError-1.md#getcode)
- [getErrorResponse](InvalidConfigError.InvalidConfigError-1.md#geterrorresponse)
- [getExitCode](InvalidConfigError.InvalidConfigError-1.md#getexitcode)
- [getHTTPCode](InvalidConfigError.InvalidConfigError-1.md#gethttpcode)
- [getMessage](InvalidConfigError.InvalidConfigError-1.md#getmessage)
- [getPrivateDetails](InvalidConfigError.InvalidConfigError-1.md#getprivatedetails)
- [getPublicDetails](InvalidConfigError.InvalidConfigError-1.md#getpublicdetails)
- [captureStackTrace](InvalidConfigError.InvalidConfigError-1.md#capturestacktrace)

## Constructors

### constructor

• **new InvalidConfigError**<`TConfig`\>(`config`, `errors`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TConfig` | extends [`IConfig`](../interfaces/IConfig.IConfig-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `TConfig` |
| `errors` | `ErrorObject`<`string`, `Record`<`string`, `any`\>, `unknown`\>[] |

#### Overrides

[StormError](StormError.StormError-1.md).[constructor](StormError.StormError-1.md#constructor)

#### Defined in

[src/InvalidConfigError.ts:30](https://github.com/breautek/storm/blob/3807444/src/InvalidConfigError.ts#L30)

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

[src/InvalidConfigError.ts:42](https://github.com/breautek/storm/blob/3807444/src/InvalidConfigError.ts#L42)

___

### getErrorResponse

▸ **getErrorResponse**(): [`IErrorResponse`](../interfaces/StormError.IErrorResponse.md)

#### Returns

[`IErrorResponse`](../interfaces/StormError.IErrorResponse.md)

#### Inherited from

[StormError](StormError.StormError-1.md).[getErrorResponse](StormError.StormError-1.md#geterrorresponse)

#### Defined in

[src/StormError.ts:70](https://github.com/breautek/storm/blob/3807444/src/StormError.ts#L70)

___

### getExitCode

▸ **getExitCode**(): [`ExitCode`](../enums/ExitCode.ExitCode-1.md)

#### Returns

[`ExitCode`](../enums/ExitCode.ExitCode-1.md)

#### Overrides

[StormError](StormError.StormError-1.md).[getExitCode](StormError.StormError-1.md#getexitcode)

#### Defined in

[src/InvalidConfigError.ts:50](https://github.com/breautek/storm/blob/3807444/src/InvalidConfigError.ts#L50)

___

### getHTTPCode

▸ **getHTTPCode**(): [`StatusCode`](../enums/StatusCode.StatusCode-1.md)

#### Returns

[`StatusCode`](../enums/StatusCode.StatusCode-1.md)

#### Overrides

[StormError](StormError.StormError-1.md).[getHTTPCode](StormError.StormError-1.md#gethttpcode)

#### Defined in

[src/InvalidConfigError.ts:46](https://github.com/breautek/storm/blob/3807444/src/InvalidConfigError.ts#L46)

___

### getMessage

▸ **getMessage**(): `string`

#### Returns

`string`

#### Overrides

[StormError](StormError.StormError-1.md).[getMessage](StormError.StormError-1.md#getmessage)

#### Defined in

[src/InvalidConfigError.ts:37](https://github.com/breautek/storm/blob/3807444/src/InvalidConfigError.ts#L37)

___

### getPrivateDetails

▸ **getPrivateDetails**(): `IInvalidConfigErrorDetails`<`TConfig`\>

Private details are only logged to the server log.
They are kept secret from the client.

#### Returns

`IInvalidConfigErrorDetails`<`TConfig`\>

#### Inherited from

[StormError](StormError.StormError-1.md).[getPrivateDetails](StormError.StormError-1.md#getprivatedetails)

#### Defined in

[src/StormError.ts:62](https://github.com/breautek/storm/blob/3807444/src/StormError.ts#L62)

___

### getPublicDetails

▸ **getPublicDetails**(): [`IAdditionalErrorDetails`](../interfaces/StormError.IAdditionalErrorDetails.md)

Sends details to the client.

#### Returns

[`IAdditionalErrorDetails`](../interfaces/StormError.IAdditionalErrorDetails.md)

#### Inherited from

[StormError](StormError.StormError-1.md).[getPublicDetails](StormError.StormError-1.md#getpublicdetails)

#### Defined in

[src/StormError.ts:54](https://github.com/breautek/storm/blob/3807444/src/StormError.ts#L54)

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
