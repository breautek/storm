[@breautek/storm](../README.md) / [Response](../modules/response.md) / Response

# Class: Response<TResponse, TErrorResponse\>

[Response](../modules/response.md).Response

## Type parameters

Name | Default |
------ | ------ |
`TResponse` | [*SendableData*](../modules/response.md#sendabledata) |
`TErrorResponse` | Error \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md) \| *string* |

## Hierarchy

* **Response**

## Table of contents

### Constructors

- [constructor](response.response-1.md#constructor)

### Methods

- [error](response.response-1.md#error)
- [getStatus](response.response-1.md#getstatus)
- [isHeadersSent](response.response-1.md#isheaderssent)
- [pipe](response.response-1.md#pipe)
- [redirect](response.response-1.md#redirect)
- [send](response.response-1.md#send)
- [setHeader](response.response-1.md#setheader)
- [setHeaders](response.response-1.md#setheaders)
- [setStatus](response.response-1.md#setstatus)
- [success](response.response-1.md#success)

## Constructors

### constructor

\+ **new Response**<TResponse, TErrorResponse\>(`response`: *Response*<*any*, *Record*<*string*, *any*\>\>, `requestURL`: *string*): [*Response*](response.response-1.md)<TResponse, TErrorResponse\>

#### Type parameters:

Name | Default |
------ | ------ |
`TResponse` | *any* |
`TErrorResponse` | *string* \| Error \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md) |

#### Parameters:

Name | Type |
------ | ------ |
`response` | *Response*<*any*, *Record*<*string*, *any*\>\> |
`requestURL` | *string* |

**Returns:** [*Response*](response.response-1.md)<TResponse, TErrorResponse\>

Defined in: [src/Response.ts:35](https://github.com/breautek/storm/blob/34a3167/src/Response.ts#L35)

## Methods

### error

▸ **error**(`error?`: TErrorResponse \| [*ResponseData*](responsedata.responsedata-1.md)<TErrorResponse\>): *void*

#### Parameters:

Name | Type |
------ | ------ |
`error?` | TErrorResponse \| [*ResponseData*](responsedata.responsedata-1.md)<TErrorResponse\> |

**Returns:** *void*

Defined in: [src/Response.ts:101](https://github.com/breautek/storm/blob/34a3167/src/Response.ts#L101)

___

### getStatus

▸ **getStatus**(): [*StatusCode*](../enums/statuscode.statuscode-1.md)

**Returns:** [*StatusCode*](../enums/statuscode.statuscode-1.md)

Defined in: [src/Response.ts:48](https://github.com/breautek/storm/blob/34a3167/src/Response.ts#L48)

___

### isHeadersSent

▸ **isHeadersSent**(): *boolean*

**Returns:** *boolean*

Defined in: [src/Response.ts:97](https://github.com/breautek/storm/blob/34a3167/src/Response.ts#L97)

___

### pipe

▸ **pipe**(`stream`: *ReadableStream*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`stream` | *ReadableStream* |

**Returns:** *void*

Defined in: [src/Response.ts:70](https://github.com/breautek/storm/blob/34a3167/src/Response.ts#L70)

___

### redirect

▸ **redirect**(`url`: *string*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`url` | *string* |

**Returns:** *void*

Defined in: [src/Response.ts:52](https://github.com/breautek/storm/blob/34a3167/src/Response.ts#L52)

___

### send

▸ **send**(`data?`: TResponse \| TErrorResponse \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md) \| [*StormError*](stormerror.stormerror-1.md)<*any*\>): *void*

#### Parameters:

Name | Type |
------ | ------ |
`data?` | TResponse \| TErrorResponse \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md) \| [*StormError*](stormerror.stormerror-1.md)<*any*\> |

**Returns:** *void*

Defined in: [src/Response.ts:56](https://github.com/breautek/storm/blob/34a3167/src/Response.ts#L56)

___

### setHeader

▸ **setHeader**(`key`: *string*, `value`: *string*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |
`value` | *string* |

**Returns:** *void*

Defined in: [src/Response.ts:89](https://github.com/breautek/storm/blob/34a3167/src/Response.ts#L89)

___

### setHeaders

▸ **setHeaders**(`keyValuePair`: [*IHeaderKeyValuePair*](../interfaces/response.iheaderkeyvaluepair.md)): *void*

#### Parameters:

Name | Type |
------ | ------ |
`keyValuePair` | [*IHeaderKeyValuePair*](../interfaces/response.iheaderkeyvaluepair.md) |

**Returns:** *void*

Defined in: [src/Response.ts:93](https://github.com/breautek/storm/blob/34a3167/src/Response.ts#L93)

___

### setStatus

▸ **setStatus**(`status`: [*StatusCode*](../enums/statuscode.statuscode-1.md)): [*Response*](response.response-1.md)<TResponse, TErrorResponse\>

#### Parameters:

Name | Type |
------ | ------ |
`status` | [*StatusCode*](../enums/statuscode.statuscode-1.md) |

**Returns:** [*Response*](response.response-1.md)<TResponse, TErrorResponse\>

Defined in: [src/Response.ts:43](https://github.com/breautek/storm/blob/34a3167/src/Response.ts#L43)

___

### success

▸ **success**(`data?`: TResponse): *void*

#### Parameters:

Name | Type |
------ | ------ |
`data?` | TResponse |

**Returns:** *void*

Defined in: [src/Response.ts:78](https://github.com/breautek/storm/blob/34a3167/src/Response.ts#L78)
