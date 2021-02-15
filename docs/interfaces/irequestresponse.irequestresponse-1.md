[@breautek/storm](../README.md) / [IRequestResponse](../modules/irequestresponse.md) / IRequestResponse

# Interface: IRequestResponse<TRequest, TResponse\>

[IRequestResponse](../modules/irequestresponse.md).IRequestResponse

## Type parameters

Name | Default |
------ | ------ |
`TRequest` | *any* |
`TResponse` | *any* |

## Hierarchy

* **IRequestResponse**

## Table of contents

### Properties

- [request](irequestresponse.irequestresponse-1.md#request)
- [response](irequestresponse.irequestresponse-1.md#response)

## Properties

### request

• **request**: [*Request*](../classes/request.request-1.md)<TRequest, [*IAuthTokenData*](iauthtokendata.iauthtokendata-1.md)\>

Defined in: [src/IRequestResponse.ts:21](https://github.com/breautek/storm/blob/e9f4a60/src/IRequestResponse.ts#L21)

___

### response

• **response**: [*Response*](../classes/response.response-1.md)<TResponse, *string* \| Error \| [*IErrorResponse*](stormerror.ierrorresponse.md)\>

Defined in: [src/IRequestResponse.ts:22](https://github.com/breautek/storm/blob/e9f4a60/src/IRequestResponse.ts#L22)
