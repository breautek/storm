[@breautek/storm](../README.md) / [Response](../modules/Response.md) / Response

# Class: Response<TResponse, TErrorResponse\>

[Response](../modules/Response.md).Response

## Type parameters

| Name | Type |
| :------ | :------ |
| `TResponse` | [`SendableData`](../modules/Response.md#sendabledata) |
| `TErrorResponse` | `Error` \| [`IErrorResponse`](../interfaces/StormError.IErrorResponse.md) \| `string` |

## Table of contents

### Constructors

- [constructor](Response.Response-1.md#constructor)

### Methods

- [error](Response.Response-1.md#error)
- [getStatus](Response.Response-1.md#getstatus)
- [isHeadersSent](Response.Response-1.md#isheaderssent)
- [pipe](Response.Response-1.md#pipe)
- [redirect](Response.Response-1.md#redirect)
- [send](Response.Response-1.md#send)
- [setHeader](Response.Response-1.md#setheader)
- [setHeaders](Response.Response-1.md#setheaders)
- [setStatus](Response.Response-1.md#setstatus)
- [success](Response.Response-1.md#success)

## Constructors

### constructor

• **new Response**<`TResponse`, `TErrorResponse`\>(`response`, `requestURL`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResponse` | `any` |
| `TErrorResponse` | `string` \| `Error` \| [`IErrorResponse`](../interfaces/StormError.IErrorResponse.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response`<`any`, `Record`<`string`, `any`\>\> |
| `requestURL` | `string` |

#### Defined in

[src/Response.ts:38](https://github.com/breautek/storm/blob/80c9dfb/src/Response.ts#L38)

## Methods

### error

▸ **error**(`error?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error?` | `TErrorResponse` \| [`ResponseData`](ResponseData.ResponseData-1.md)<`TErrorResponse`\> |

#### Returns

`void`

#### Defined in

[src/Response.ts:130](https://github.com/breautek/storm/blob/80c9dfb/src/Response.ts#L130)

___

### getStatus

▸ **getStatus**(): [`StatusCode`](../enums/StatusCode.StatusCode-1.md)

#### Returns

[`StatusCode`](../enums/StatusCode.StatusCode-1.md)

#### Defined in

[src/Response.ts:49](https://github.com/breautek/storm/blob/80c9dfb/src/Response.ts#L49)

___

### isHeadersSent

▸ **isHeadersSent**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/Response.ts:126](https://github.com/breautek/storm/blob/80c9dfb/src/Response.ts#L126)

___

### pipe

▸ **pipe**(`stream`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `ReadableStream` |

#### Returns

`void`

#### Defined in

[src/Response.ts:99](https://github.com/breautek/storm/blob/80c9dfb/src/Response.ts#L99)

___

### redirect

▸ **redirect**(`url`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`void`

#### Defined in

[src/Response.ts:53](https://github.com/breautek/storm/blob/80c9dfb/src/Response.ts#L53)

___

### send

▸ **send**(`data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `TResponse` \| `TErrorResponse` \| [`IErrorResponse`](../interfaces/StormError.IErrorResponse.md) \| `Buffer` \| [`StormError`](StormError.StormError-1.md)<`any`\> |

#### Returns

`void`

#### Defined in

[src/Response.ts:94](https://github.com/breautek/storm/blob/80c9dfb/src/Response.ts#L94)

___

### setHeader

▸ **setHeader**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/Response.ts:118](https://github.com/breautek/storm/blob/80c9dfb/src/Response.ts#L118)

___

### setHeaders

▸ **setHeaders**(`keyValuePair`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyValuePair` | [`IHeaderKeyValuePair`](../interfaces/Response.IHeaderKeyValuePair.md) |

#### Returns

`void`

#### Defined in

[src/Response.ts:122](https://github.com/breautek/storm/blob/80c9dfb/src/Response.ts#L122)

___

### setStatus

▸ **setStatus**(`status`): [`Response`](Response.Response-1.md)<`TResponse`, `TErrorResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`StatusCode`](../enums/StatusCode.StatusCode-1.md) |

#### Returns

[`Response`](Response.Response-1.md)<`TResponse`, `TErrorResponse`\>

#### Defined in

[src/Response.ts:44](https://github.com/breautek/storm/blob/80c9dfb/src/Response.ts#L44)

___

### success

▸ **success**(`data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `TResponse` |

#### Returns

`void`

#### Defined in

[src/Response.ts:107](https://github.com/breautek/storm/blob/80c9dfb/src/Response.ts#L107)
