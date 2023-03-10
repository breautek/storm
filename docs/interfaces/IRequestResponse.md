[@breautek/storm](../README.md) / IRequestResponse

# Interface: IRequestResponse<TRequest, TResponse\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TRequest` | `any` |
| `TResponse` | `any` |

## Table of contents

### Properties

- [request](IRequestResponse.md#request)
- [response](IRequestResponse.md#response)

## Properties

### request

• **request**: [`Request`](../classes/Request.md)<`TRequest`, [`IAuthTokenData`](IAuthTokenData.md)\>

#### Defined in

[src/IRequestResponse.ts:21](https://github.com/breautek/storm/blob/d45307d/src/IRequestResponse.ts#L21)

___

### response

• **response**: [`Response`](../classes/Response.md)<`TResponse`, `string` \| `Error` \| [`IErrorResponse`](IErrorResponse.md)\>

#### Defined in

[src/IRequestResponse.ts:22](https://github.com/breautek/storm/blob/d45307d/src/IRequestResponse.ts#L22)
