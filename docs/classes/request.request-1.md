[@breautek/storm](../README.md) / [Request](../modules/request.md) / Request

# Class: Request<TBody, TAuthToken\>

[Request](../modules/request.md).Request

## Type parameters

| Name | Type |
| :------ | :------ |
| `TBody` | `any` |
| `TAuthToken` | extends [`IAuthTokenData`](../interfaces/iauthtokendata.iauthtokendata-1.md)[`IAuthTokenData`](../interfaces/iauthtokendata.iauthtokendata-1.md) |

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

• **new Request**<`TBody`, `TAuthToken`\>(`request`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBody` | `any` |
| `TAuthToken` | extends [`IAuthTokenData`](../interfaces/iauthtokendata.iauthtokendata-1.md)[`IAuthTokenData`](../interfaces/iauthtokendata.iauthtokendata-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |

#### Defined in

[src/Request.ts:40](https://github.com/breautek/storm/blob/fff2ea4/src/Request.ts#L40)

## Methods

### getAuthenticationToken

▸ **getAuthenticationToken**(): `Promise`<`TAuthToken`\>

#### Returns

`Promise`<`TAuthToken`\>

#### Defined in

[src/Request.ts:132](https://github.com/breautek/storm/blob/fff2ea4/src/Request.ts#L132)

___

### getBody

▸ **getBody**(): `TBody`

#### Returns

`TBody`

#### Defined in

[src/Request.ts:46](https://github.com/breautek/storm/blob/fff2ea4/src/Request.ts#L46)

___

### getForm

▸ **getForm**(): `Promise`<[`IFormData`](../interfaces/iformdata.iformdata-1.md)\>

#### Returns

`Promise`<[`IFormData`](../interfaces/iformdata.iformdata-1.md)\>

#### Defined in

[src/Request.ts:50](https://github.com/breautek/storm/blob/fff2ea4/src/Request.ts#L50)

___

### getForwardedIP

▸ **getForwardedIP**(): `string`

#### Returns

`string`

#### Defined in

[src/Request.ts:100](https://github.com/breautek/storm/blob/fff2ea4/src/Request.ts#L100)

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

[src/Request.ts:74](https://github.com/breautek/storm/blob/fff2ea4/src/Request.ts#L74)

___

### getHeaders

▸ **getHeaders**(): `IncomingHttpHeaders`

#### Returns

`IncomingHttpHeaders`

#### Defined in

[src/Request.ts:70](https://github.com/breautek/storm/blob/fff2ea4/src/Request.ts#L70)

___

### getHostname

▸ **getHostname**(): `string`

#### Returns

`string`

#### Defined in

[src/Request.ts:104](https://github.com/breautek/storm/blob/fff2ea4/src/Request.ts#L104)

___

### getIP

▸ **getIP**(): `string`

#### Returns

`string`

#### Defined in

[src/Request.ts:96](https://github.com/breautek/storm/blob/fff2ea4/src/Request.ts#L96)

___

### getMethod

▸ **getMethod**(): `string`

#### Returns

`string`

#### Defined in

[src/Request.ts:108](https://github.com/breautek/storm/blob/fff2ea4/src/Request.ts#L108)

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

[src/Request.ts:92](https://github.com/breautek/storm/blob/fff2ea4/src/Request.ts#L92)

___

### getParams

▸ **getParams**(): [`IParameterMap`](../interfaces/request.iparametermap.md)

#### Returns

[`IParameterMap`](../interfaces/request.iparametermap.md)

#### Defined in

[src/Request.ts:88](https://github.com/breautek/storm/blob/fff2ea4/src/Request.ts#L88)

___

### getQueryVariables

▸ **getQueryVariables**(): `any`

#### Returns

`any`

#### Defined in

[src/Request.ts:84](https://github.com/breautek/storm/blob/fff2ea4/src/Request.ts#L84)

___

### getRequestSource

▸ **getRequestSource**(): `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>

#### Returns

`Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>

#### Defined in

[src/Request.ts:128](https://github.com/breautek/storm/blob/fff2ea4/src/Request.ts#L128)

___

### getURL

▸ **getURL**(): `string`

#### Returns

`string`

#### Defined in

[src/Request.ts:112](https://github.com/breautek/storm/blob/fff2ea4/src/Request.ts#L112)

___

### isSecure

▸ **isSecure**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/Request.ts:116](https://github.com/breautek/storm/blob/fff2ea4/src/Request.ts#L116)

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

[src/Request.ts:120](https://github.com/breautek/storm/blob/fff2ea4/src/Request.ts#L120)

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

[src/Request.ts:124](https://github.com/breautek/storm/blob/fff2ea4/src/Request.ts#L124)
