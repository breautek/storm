[@breautek/storm](../README.md) / Response

# Class: Response<TResponse, TErrorResponse\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TResponse` | `SendableData` |
| `TErrorResponse` | `Error` \| [`IErrorResponse`](../interfaces/IErrorResponse.md) \| `string` |

## Table of contents

### Constructors

- [constructor](Response.md#constructor)

### Methods

- [error](Response.md#error)
- [getStatus](Response.md#getstatus)
- [isHeadersSent](Response.md#isheaderssent)
- [pipe](Response.md#pipe)
- [redirect](Response.md#redirect)
- [send](Response.md#send)
- [setHeader](Response.md#setheader)
- [setHeaders](Response.md#setheaders)
- [setStatus](Response.md#setstatus)
- [success](Response.md#success)

## Constructors

### constructor

• **new Response**<`TResponse`, `TErrorResponse`\>(`response`, `requestURL`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResponse` | `any` |
| `TErrorResponse` | `string` \| `Error` \| [`IErrorResponse`](../interfaces/IErrorResponse.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response`<`any`, `Record`<`string`, `any`\>\> |
| `requestURL` | `string` |

#### Defined in

[src/Response.ts:38](https://github.com/breautek/storm/blob/d45307d/src/Response.ts#L38)

## Methods

### error

▸ **error**(`error?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error?` | `TErrorResponse` \| [`ResponseData`](ResponseData.md)<`TErrorResponse`\> |

#### Returns

`void`

#### Defined in

[src/Response.ts:131](https://github.com/breautek/storm/blob/d45307d/src/Response.ts#L131)

___

### getStatus

▸ **getStatus**(): [`StatusCode`](../enums/StatusCode.md)

#### Returns

[`StatusCode`](../enums/StatusCode.md)

#### Defined in

[src/Response.ts:49](https://github.com/breautek/storm/blob/d45307d/src/Response.ts#L49)

___

### isHeadersSent

▸ **isHeadersSent**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/Response.ts:127](https://github.com/breautek/storm/blob/d45307d/src/Response.ts#L127)

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

[src/Response.ts:100](https://github.com/breautek/storm/blob/d45307d/src/Response.ts#L100)

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

[src/Response.ts:53](https://github.com/breautek/storm/blob/d45307d/src/Response.ts#L53)

___

### send

▸ **send**(`data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Buffer` \| [`IErrorResponse`](../interfaces/IErrorResponse.md) \| [`StormError`](StormError.md)<`any`\> \| `TResponse` \| `TErrorResponse` |

#### Returns

`void`

#### Defined in

[src/Response.ts:95](https://github.com/breautek/storm/blob/d45307d/src/Response.ts#L95)

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

[src/Response.ts:119](https://github.com/breautek/storm/blob/d45307d/src/Response.ts#L119)

___

### setHeaders

▸ **setHeaders**(`keyValuePair`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyValuePair` | `IHeaderKeyValuePair` |

#### Returns

`void`

#### Defined in

[src/Response.ts:123](https://github.com/breautek/storm/blob/d45307d/src/Response.ts#L123)

___

### setStatus

▸ **setStatus**(`status`): [`Response`](Response.md)<`TResponse`, `TErrorResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`StatusCode`](../enums/StatusCode.md) |

#### Returns

[`Response`](Response.md)<`TResponse`, `TErrorResponse`\>

#### Defined in

[src/Response.ts:44](https://github.com/breautek/storm/blob/d45307d/src/Response.ts#L44)

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

[src/Response.ts:108](https://github.com/breautek/storm/blob/d45307d/src/Response.ts#L108)
