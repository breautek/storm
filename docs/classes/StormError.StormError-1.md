[@breautek/storm](../README.md) / [StormError](../modules/StormError.md) / StormError

# Class: StormError<TErrorDetails\>

[StormError](../modules/StormError.md).StormError

## Type parameters

| Name | Type |
| :------ | :------ |
| `TErrorDetails` | `any` |

## Hierarchy

- `Error`

  ↳ **`StormError`**

  ↳↳ [`DatabaseQueryError`](DatabaseQueryError.DatabaseQueryError-1.md)

  ↳↳ [`DiskSpaceError`](DiskSpaceError.DiskSpaceError-1.md)

  ↳↳ [`DuplicateEntryError`](DuplicateEntryError.DuplicateEntryError-1.md)

  ↳↳ [`EntityNotFoundError`](EntityNotFoundError.EntityNotFoundError-1.md)

  ↳↳ [`ExpiredTokenError`](ExpiredTokenError.ExpiredTokenError-1.md)

  ↳↳ [`InternalError`](InternalError.InternalError-1.md)

  ↳↳ [`InvalidConfigError`](InvalidConfigError.InvalidConfigError-1.md)

  ↳↳ [`InvalidCredentialsError`](InvalidCredentialsError.InvalidCredentialsError-1.md)

  ↳↳ [`InvalidValueError`](InvalidValueError.InvalidValueError-1.md)

  ↳↳ [`MissingConfigError`](MissingConfigError.MissingConfigError-1.md)

  ↳↳ [`MissingParameterError`](MissingParameterError.MissingParameterError-1.md)

  ↳↳ [`UnauthorizedAccessError`](UnauthorizedAccessError.UnauthorizedAccessError-1.md)

## Table of contents

### Constructors

- [constructor](StormError.StormError-1.md#constructor)

### Properties

- [message](StormError.StormError-1.md#message)
- [name](StormError.StormError-1.md#name)
- [stack](StormError.StormError-1.md#stack)
- [prepareStackTrace](StormError.StormError-1.md#preparestacktrace)
- [stackTraceLimit](StormError.StormError-1.md#stacktracelimit)

### Methods

- [getCode](StormError.StormError-1.md#getcode)
- [getErrorResponse](StormError.StormError-1.md#geterrorresponse)
- [getExitCode](StormError.StormError-1.md#getexitcode)
- [getHTTPCode](StormError.StormError-1.md#gethttpcode)
- [getMessage](StormError.StormError-1.md#getmessage)
- [getPrivateDetails](StormError.StormError-1.md#getprivatedetails)
- [getPublicDetails](StormError.StormError-1.md#getpublicdetails)
- [captureStackTrace](StormError.StormError-1.md#capturestacktrace)

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

[src/StormError.ts:38](https://github.com/breautek/storm/blob/477d756/src/StormError.ts#L38)

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:973

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

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

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### getCode

▸ `Abstract` **getCode**(): `number`

#### Returns

`number`

#### Defined in

[src/StormError.ts:49](https://github.com/breautek/storm/blob/477d756/src/StormError.ts#L49)

___

### getErrorResponse

▸ **getErrorResponse**(): [`IErrorResponse`](../interfaces/StormError.IErrorResponse.md)

#### Returns

[`IErrorResponse`](../interfaces/StormError.IErrorResponse.md)

#### Defined in

[src/StormError.ts:70](https://github.com/breautek/storm/blob/477d756/src/StormError.ts#L70)

___

### getExitCode

▸ **getExitCode**(): [`ExitCode`](../enums/ExitCode.ExitCode-1.md)

#### Returns

[`ExitCode`](../enums/ExitCode.ExitCode-1.md)

#### Defined in

[src/StormError.ts:79](https://github.com/breautek/storm/blob/477d756/src/StormError.ts#L79)

___

### getHTTPCode

▸ **getHTTPCode**(): [`StatusCode`](../enums/StatusCode.StatusCode-1.md)

#### Returns

[`StatusCode`](../enums/StatusCode.StatusCode-1.md)

#### Defined in

[src/StormError.ts:66](https://github.com/breautek/storm/blob/477d756/src/StormError.ts#L66)

___

### getMessage

▸ `Abstract` **getMessage**(): `string`

#### Returns

`string`

#### Defined in

[src/StormError.ts:48](https://github.com/breautek/storm/blob/477d756/src/StormError.ts#L48)

___

### getPrivateDetails

▸ **getPrivateDetails**(): `TErrorDetails`

Private details are only logged to the server log.
They are kept secret from the client.

#### Returns

`TErrorDetails`

#### Defined in

[src/StormError.ts:62](https://github.com/breautek/storm/blob/477d756/src/StormError.ts#L62)

___

### getPublicDetails

▸ **getPublicDetails**(): [`IAdditionalErrorDetails`](../interfaces/StormError.IAdditionalErrorDetails.md)

Sends details to the client.

#### Returns

[`IAdditionalErrorDetails`](../interfaces/StormError.IAdditionalErrorDetails.md)

#### Defined in

[src/StormError.ts:54](https://github.com/breautek/storm/blob/477d756/src/StormError.ts#L54)

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

node_modules/@types/node/globals.d.ts:4
