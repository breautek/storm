[@breautek/storm](../README.md) / Request

# Class: Request<TBody, TAuthToken\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TBody` | `any` |
| `TAuthToken` | extends [`IAuthTokenData`](../interfaces/IAuthTokenData.md) = [`IAuthTokenData`](../interfaces/IAuthTokenData.md) |

## Table of contents

### Constructors

- [constructor](Request.md#constructor)

### Methods

- [getAuthenticationToken](Request.md#getauthenticationtoken)
- [getBody](Request.md#getbody)
- [getForm](Request.md#getform)
- [getForwardedIP](Request.md#getforwardedip)
- [getHeader](Request.md#getheader)
- [getHeaders](Request.md#getheaders)
- [getHostname](Request.md#gethostname)
- [getIP](Request.md#getip)
- [getMethod](Request.md#getmethod)
- [getParam](Request.md#getparam)
- [getParams](Request.md#getparams)
- [getQueryVariables](Request.md#getqueryvariables)
- [getRequestSource](Request.md#getrequestsource)
- [getURL](Request.md#geturl)
- [isSecure](Request.md#issecure)
- [pipe](Request.md#pipe)
- [unpipe](Request.md#unpipe)

## Constructors

### constructor

• **new Request**<`TBody`, `TAuthToken`\>(`request`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBody` | `any` |
| `TAuthToken` | extends [`IAuthTokenData`](../interfaces/IAuthTokenData.md) = [`IAuthTokenData`](../interfaces/IAuthTokenData.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |

#### Defined in

[src/Request.ts:42](https://github.com/breautek/storm/blob/cf7306d/src/Request.ts#L42)

## Methods

### getAuthenticationToken

▸ **getAuthenticationToken**(): `Promise`<`TAuthToken`\>

#### Returns

`Promise`<`TAuthToken`\>

#### Defined in

[src/Request.ts:132](https://github.com/breautek/storm/blob/cf7306d/src/Request.ts#L132)

___

### getBody

▸ **getBody**(): `TBody`

#### Returns

`TBody`

#### Defined in

[src/Request.ts:46](https://github.com/breautek/storm/blob/cf7306d/src/Request.ts#L46)

___

### getForm

▸ **getForm**(): `Promise`<[`IFormData`](../interfaces/IFormData.md)\>

#### Returns

`Promise`<[`IFormData`](../interfaces/IFormData.md)\>

#### Defined in

[src/Request.ts:50](https://github.com/breautek/storm/blob/cf7306d/src/Request.ts#L50)

___

### getForwardedIP

▸ **getForwardedIP**(): `string`

#### Returns

`string`

#### Defined in

[src/Request.ts:100](https://github.com/breautek/storm/blob/cf7306d/src/Request.ts#L100)

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

[src/Request.ts:74](https://github.com/breautek/storm/blob/cf7306d/src/Request.ts#L74)

___

### getHeaders

▸ **getHeaders**(): `IncomingHttpHeaders`

#### Returns

`IncomingHttpHeaders`

#### Defined in

[src/Request.ts:70](https://github.com/breautek/storm/blob/cf7306d/src/Request.ts#L70)

___

### getHostname

▸ **getHostname**(): `string`

#### Returns

`string`

#### Defined in

[src/Request.ts:104](https://github.com/breautek/storm/blob/cf7306d/src/Request.ts#L104)

___

### getIP

▸ **getIP**(): `string`

#### Returns

`string`

#### Defined in

[src/Request.ts:96](https://github.com/breautek/storm/blob/cf7306d/src/Request.ts#L96)

___

### getMethod

▸ **getMethod**(): `string`

#### Returns

`string`

#### Defined in

[src/Request.ts:108](https://github.com/breautek/storm/blob/cf7306d/src/Request.ts#L108)

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

[src/Request.ts:92](https://github.com/breautek/storm/blob/cf7306d/src/Request.ts#L92)

___

### getParams

▸ **getParams**(): [`IParameterMap`](../interfaces/IParameterMap.md)

#### Returns

[`IParameterMap`](../interfaces/IParameterMap.md)

#### Defined in

[src/Request.ts:88](https://github.com/breautek/storm/blob/cf7306d/src/Request.ts#L88)

___

### getQueryVariables

▸ **getQueryVariables**(): `any`

#### Returns

`any`

#### Defined in

[src/Request.ts:84](https://github.com/breautek/storm/blob/cf7306d/src/Request.ts#L84)

___

### getRequestSource

▸ **getRequestSource**(): `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>

#### Returns

`Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>

#### Defined in

[src/Request.ts:128](https://github.com/breautek/storm/blob/cf7306d/src/Request.ts#L128)

___

### getURL

▸ **getURL**(): `string`

#### Returns

`string`

#### Defined in

[src/Request.ts:112](https://github.com/breautek/storm/blob/cf7306d/src/Request.ts#L112)

___

### isSecure

▸ **isSecure**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/Request.ts:116](https://github.com/breautek/storm/blob/cf7306d/src/Request.ts#L116)

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

[src/Request.ts:120](https://github.com/breautek/storm/blob/cf7306d/src/Request.ts#L120)

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

[src/Request.ts:124](https://github.com/breautek/storm/blob/cf7306d/src/Request.ts#L124)
