[@breautek/storm](../README.md) / [Request](../modules/request.md) / Request

# Class: Request<TBody, TAuthToken\>

[Request](../modules/request.md).Request

## Type parameters

Name | Type | Default |
------ | ------ | ------ |
`TBody` | - | *any* |
`TAuthToken` | [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md) | [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md) |

## Hierarchy

* **Request**

## Table of contents

### Constructors

- [constructor](request.request-1.md#constructor)

### Methods

- [getAuthenticationToken](request.request-1.md#getauthenticationtoken)
- [getBody](request.request-1.md#getbody)
- [getForm](request.request-1.md#getform)
- [getForwardedIP](request.request-1.md#getforwardedip)
- [getHeader](request.request-1.md#getheader)
- [getHeaders](request.request-1.md#getheaders)
- [getHostname](request.request-1.md#gethostname)
- [getIP](request.request-1.md#getip)
- [getMethod](request.request-1.md#getmethod)
- [getParam](request.request-1.md#getparam)
- [getParams](request.request-1.md#getparams)
- [getQueryVariables](request.request-1.md#getqueryvariables)
- [getRequestSource](request.request-1.md#getrequestsource)
- [getURL](request.request-1.md#geturl)
- [isSecure](request.request-1.md#issecure)
- [pipe](request.request-1.md#pipe)
- [unpipe](request.request-1.md#unpipe)

## Constructors

### constructor

\+ **new Request**<TBody, TAuthToken\>(`request`: *Request*<ParamsDictionary, *any*, *any*, ParsedQs, *Record*<*string*, *any*\>\>): [*Request*](request.request-1.md)<TBody, TAuthToken\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`TBody` | - | *any* |
`TAuthToken` | [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md) | [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md) |

#### Parameters:

Name | Type |
------ | ------ |
`request` | *Request*<ParamsDictionary, *any*, *any*, ParsedQs, *Record*<*string*, *any*\>\> |

**Returns:** [*Request*](request.request-1.md)<TBody, TAuthToken\>

Defined in: [src/Request.ts:35](https://github.com/breautek/storm/blob/0cbae4b/src/Request.ts#L35)

## Methods

### getAuthenticationToken

▸ **getAuthenticationToken**(): *Promise*<TAuthToken\>

**Returns:** *Promise*<TAuthToken\>

Defined in: [src/Request.ts:126](https://github.com/breautek/storm/blob/0cbae4b/src/Request.ts#L126)

___

### getBody

▸ **getBody**(): TBody

**Returns:** TBody

Defined in: [src/Request.ts:41](https://github.com/breautek/storm/blob/0cbae4b/src/Request.ts#L41)

___

### getForm

▸ **getForm**(): *Promise*<[*IFormData*](../interfaces/iformdata.iformdata-1.md)\>

**Returns:** *Promise*<[*IFormData*](../interfaces/iformdata.iformdata-1.md)\>

Defined in: [src/Request.ts:45](https://github.com/breautek/storm/blob/0cbae4b/src/Request.ts#L45)

___

### getForwardedIP

▸ **getForwardedIP**(): *string*

**Returns:** *string*

Defined in: [src/Request.ts:94](https://github.com/breautek/storm/blob/0cbae4b/src/Request.ts#L94)

___

### getHeader

▸ **getHeader**(`name`: *string*): *string*

#### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |

**Returns:** *string*

Defined in: [src/Request.ts:68](https://github.com/breautek/storm/blob/0cbae4b/src/Request.ts#L68)

___

### getHeaders

▸ **getHeaders**(): *IncomingHttpHeaders*

**Returns:** *IncomingHttpHeaders*

Defined in: [src/Request.ts:64](https://github.com/breautek/storm/blob/0cbae4b/src/Request.ts#L64)

___

### getHostname

▸ **getHostname**(): *string*

**Returns:** *string*

Defined in: [src/Request.ts:98](https://github.com/breautek/storm/blob/0cbae4b/src/Request.ts#L98)

___

### getIP

▸ **getIP**(): *string*

**Returns:** *string*

Defined in: [src/Request.ts:90](https://github.com/breautek/storm/blob/0cbae4b/src/Request.ts#L90)

___

### getMethod

▸ **getMethod**(): *string*

**Returns:** *string*

Defined in: [src/Request.ts:102](https://github.com/breautek/storm/blob/0cbae4b/src/Request.ts#L102)

___

### getParam

▸ **getParam**(`name`: *string*): *string*

#### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |

**Returns:** *string*

Defined in: [src/Request.ts:86](https://github.com/breautek/storm/blob/0cbae4b/src/Request.ts#L86)

___

### getParams

▸ **getParams**(): [*IParameterMap*](../interfaces/request.iparametermap.md)

**Returns:** [*IParameterMap*](../interfaces/request.iparametermap.md)

Defined in: [src/Request.ts:82](https://github.com/breautek/storm/blob/0cbae4b/src/Request.ts#L82)

___

### getQueryVariables

▸ **getQueryVariables**(): *any*

**Returns:** *any*

Defined in: [src/Request.ts:78](https://github.com/breautek/storm/blob/0cbae4b/src/Request.ts#L78)

___

### getRequestSource

▸ **getRequestSource**(): *Request*<ParamsDictionary, *any*, *any*, ParsedQs, *Record*<*string*, *any*\>\>

**Returns:** *Request*<ParamsDictionary, *any*, *any*, ParsedQs, *Record*<*string*, *any*\>\>

Defined in: [src/Request.ts:122](https://github.com/breautek/storm/blob/0cbae4b/src/Request.ts#L122)

___

### getURL

▸ **getURL**(): *string*

**Returns:** *string*

Defined in: [src/Request.ts:106](https://github.com/breautek/storm/blob/0cbae4b/src/Request.ts#L106)

___

### isSecure

▸ **isSecure**(): *boolean*

**Returns:** *boolean*

Defined in: [src/Request.ts:110](https://github.com/breautek/storm/blob/0cbae4b/src/Request.ts#L110)

___

### pipe

▸ **pipe**(`destination`: *Writable*): *any*

#### Parameters:

Name | Type |
------ | ------ |
`destination` | *Writable* |

**Returns:** *any*

Defined in: [src/Request.ts:114](https://github.com/breautek/storm/blob/0cbae4b/src/Request.ts#L114)

___

### unpipe

▸ **unpipe**(`source`: *Writable*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`source` | *Writable* |

**Returns:** *void*

Defined in: [src/Request.ts:118](https://github.com/breautek/storm/blob/0cbae4b/src/Request.ts#L118)
