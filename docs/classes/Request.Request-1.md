[@breautek/storm](../README.md) / [Request](../modules/Request.md) / Request

# Class: Request<TBody, TAuthToken\>

[Request](../modules/Request.md).Request

## Type parameters

| Name | Type |
| :------ | :------ |
| `TBody` | `any` |
| `TAuthToken` | extends [`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md)[`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md) |

## Table of contents

### Constructors

- [constructor](Request.Request-1.md#constructor)

### Methods

- [getAuthenticationToken](Request.Request-1.md#getauthenticationtoken)
- [getBody](Request.Request-1.md#getbody)
- [getForm](Request.Request-1.md#getform)
- [getForwardedIP](Request.Request-1.md#getforwardedip)
- [getHeader](Request.Request-1.md#getheader)
- [getHeaders](Request.Request-1.md#getheaders)
- [getHostname](Request.Request-1.md#gethostname)
- [getIP](Request.Request-1.md#getip)
- [getMethod](Request.Request-1.md#getmethod)
- [getParam](Request.Request-1.md#getparam)
- [getParams](Request.Request-1.md#getparams)
- [getQueryVariables](Request.Request-1.md#getqueryvariables)
- [getRequestSource](Request.Request-1.md#getrequestsource)
- [getURL](Request.Request-1.md#geturl)
- [isSecure](Request.Request-1.md#issecure)
- [pipe](Request.Request-1.md#pipe)
- [unpipe](Request.Request-1.md#unpipe)

## Constructors

### constructor

• **new Request**<`TBody`, `TAuthToken`\>(`request`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBody` | `any` |
| `TAuthToken` | extends [`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md)[`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |

#### Defined in

[src/Request.ts:42](https://github.com/breautek/storm/blob/477d756/src/Request.ts#L42)

## Methods

### getAuthenticationToken

▸ **getAuthenticationToken**(): `Promise`<`TAuthToken`\>

#### Returns

`Promise`<`TAuthToken`\>

#### Defined in

[src/Request.ts:132](https://github.com/breautek/storm/blob/477d756/src/Request.ts#L132)

___

### getBody

▸ **getBody**(): `TBody`

#### Returns

`TBody`

#### Defined in

[src/Request.ts:46](https://github.com/breautek/storm/blob/477d756/src/Request.ts#L46)

___

### getForm

▸ **getForm**(): `Promise`<[`IFormData`](../interfaces/IFormData.IFormData-1.md)\>

#### Returns

`Promise`<[`IFormData`](../interfaces/IFormData.IFormData-1.md)\>

#### Defined in

[src/Request.ts:50](https://github.com/breautek/storm/blob/477d756/src/Request.ts#L50)

___

### getForwardedIP

▸ **getForwardedIP**(): `string`

#### Returns

`string`

#### Defined in

[src/Request.ts:100](https://github.com/breautek/storm/blob/477d756/src/Request.ts#L100)

___

### getHeader

▸ **getHeader**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

[src/Request.ts:74](https://github.com/breautek/storm/blob/477d756/src/Request.ts#L74)

___

### getHeaders

▸ **getHeaders**(): `IncomingHttpHeaders`

#### Returns

`IncomingHttpHeaders`

#### Defined in

[src/Request.ts:70](https://github.com/breautek/storm/blob/477d756/src/Request.ts#L70)

___

### getHostname

▸ **getHostname**(): `string`

#### Returns

`string`

#### Defined in

[src/Request.ts:104](https://github.com/breautek/storm/blob/477d756/src/Request.ts#L104)

___

### getIP

▸ **getIP**(): `string`

#### Returns

`string`

#### Defined in

[src/Request.ts:96](https://github.com/breautek/storm/blob/477d756/src/Request.ts#L96)

___

### getMethod

▸ **getMethod**(): `string`

#### Returns

`string`

#### Defined in

[src/Request.ts:108](https://github.com/breautek/storm/blob/477d756/src/Request.ts#L108)

___

### getParam

▸ **getParam**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

[src/Request.ts:92](https://github.com/breautek/storm/blob/477d756/src/Request.ts#L92)

___

### getParams

▸ **getParams**(): [`IParameterMap`](../interfaces/Request.IParameterMap.md)

#### Returns

[`IParameterMap`](../interfaces/Request.IParameterMap.md)

#### Defined in

[src/Request.ts:88](https://github.com/breautek/storm/blob/477d756/src/Request.ts#L88)

___

### getQueryVariables

▸ **getQueryVariables**(): `any`

#### Returns

`any`

#### Defined in

[src/Request.ts:84](https://github.com/breautek/storm/blob/477d756/src/Request.ts#L84)

___

### getRequestSource

▸ **getRequestSource**(): `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>

#### Returns

`Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>

#### Defined in

[src/Request.ts:128](https://github.com/breautek/storm/blob/477d756/src/Request.ts#L128)

___

### getURL

▸ **getURL**(): `string`

#### Returns

`string`

#### Defined in

[src/Request.ts:112](https://github.com/breautek/storm/blob/477d756/src/Request.ts#L112)

___

### isSecure

▸ **isSecure**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/Request.ts:116](https://github.com/breautek/storm/blob/477d756/src/Request.ts#L116)

___

### pipe

▸ **pipe**(`destination`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | `Writable` |

#### Returns

`any`

#### Defined in

[src/Request.ts:120](https://github.com/breautek/storm/blob/477d756/src/Request.ts#L120)

___

### unpipe

▸ **unpipe**(`source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Writable` |

#### Returns

`void`

#### Defined in

[src/Request.ts:124](https://github.com/breautek/storm/blob/477d756/src/Request.ts#L124)
