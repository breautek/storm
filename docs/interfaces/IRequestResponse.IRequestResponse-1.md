[@breautek/storm](../README.md) / [IRequestResponse](../modules/IRequestResponse.md) / IRequestResponse

# Interface: IRequestResponse<TRequest, TResponse\>

[IRequestResponse](../modules/IRequestResponse.md).IRequestResponse

## Type parameters

| Name | Type |
| :------ | :------ |
| `TRequest` | `any` |
| `TResponse` | `any` |

## Table of contents

### Properties

- [request](IRequestResponse.IRequestResponse-1.md#request)
- [response](IRequestResponse.IRequestResponse-1.md#response)

## Properties

### request

• **request**: [`Request`](../classes/Request.Request-1.md)<`TRequest`, [`IAuthTokenData`](IAuthTokenData.IAuthTokenData-1.md)\>

#### Defined in

[src/IRequestResponse.ts:21](https://github.com/breautek/storm/blob/7b25240/src/IRequestResponse.ts#L21)

___

### response

• **response**: [`Response`](../classes/Response.Response-1.md)<`TResponse`, `string` \| `Error` \| [`IErrorResponse`](StormError.IErrorResponse.md)\>

#### Defined in

[src/IRequestResponse.ts:22](https://github.com/breautek/storm/blob/7b25240/src/IRequestResponse.ts#L22)
