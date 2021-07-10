[@breautek/storm](../README.md) / [api](../modules/api.md) / [formidable](../modules/api.formidable.md) / Part

# Interface: Part

[api](../modules/api.md).[formidable](../modules/api.formidable.md).Part

## Hierarchy

- `Stream`

  ↳ **`Part`**

## Table of contents

### Properties

- [filename](api.formidable.part.md#filename)
- [headers](api.formidable.part.md#headers)
- [mime](api.formidable.part.md#mime)
- [name](api.formidable.part.md#name)

### Methods

- [addListener](api.formidable.part.md#addlistener)
- [emit](api.formidable.part.md#emit)
- [eventNames](api.formidable.part.md#eventnames)
- [getMaxListeners](api.formidable.part.md#getmaxlisteners)
- [listenerCount](api.formidable.part.md#listenercount)
- [listeners](api.formidable.part.md#listeners)
- [off](api.formidable.part.md#off)
- [on](api.formidable.part.md#on)
- [once](api.formidable.part.md#once)
- [pipe](api.formidable.part.md#pipe)
- [prependListener](api.formidable.part.md#prependlistener)
- [prependOnceListener](api.formidable.part.md#prependoncelistener)
- [rawListeners](api.formidable.part.md#rawlisteners)
- [removeAllListeners](api.formidable.part.md#removealllisteners)
- [removeListener](api.formidable.part.md#removelistener)
- [setMaxListeners](api.formidable.part.md#setmaxlisteners)

## Properties

### filename

• `Optional` **filename**: `string`

#### Defined in

node_modules/@types/formidable/index.d.ts:184

___

### headers

• **headers**: `Record`<`string`, `string`\>

#### Defined in

node_modules/@types/formidable/index.d.ts:185

___

### mime

• `Optional` **mime**: `string`

#### Defined in

node_modules/@types/formidable/index.d.ts:186

___

### name

• **name**: `string`

#### Defined in

node_modules/@types/formidable/index.d.ts:187

## Methods

### addListener

▸ **addListener**(`event`, `listener`): [`Part`](api.formidable.part.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Part`](api.formidable.part.md)

#### Inherited from

Stream.addListener

#### Defined in

node_modules/@types/node/events.d.ts:72

___

### emit

▸ **emit**(`event`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

Stream.emit

#### Defined in

node_modules/@types/node/events.d.ts:82

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

Stream.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:87

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

Stream.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:79

___

### listenerCount

▸ **listenerCount**(`event`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`number`

#### Inherited from

Stream.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:83

___

### listeners

▸ **listeners**(`event`): `Function`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

Stream.listeners

#### Defined in

node_modules/@types/node/events.d.ts:80

___

### off

▸ **off**(`event`, `listener`): [`Part`](api.formidable.part.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Part`](api.formidable.part.md)

#### Inherited from

Stream.off

#### Defined in

node_modules/@types/node/events.d.ts:76

___

### on

▸ **on**(`event`, `listener`): [`Part`](api.formidable.part.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Part`](api.formidable.part.md)

#### Inherited from

Stream.on

#### Defined in

node_modules/@types/node/events.d.ts:73

___

### once

▸ **once**(`event`, `listener`): [`Part`](api.formidable.part.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Part`](api.formidable.part.md)

#### Inherited from

Stream.once

#### Defined in

node_modules/@types/node/events.d.ts:74

___

### pipe

▸ **pipe**<`T`\>(`destination`, `options?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `WritableStream`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | `T` |
| `options?` | `Object` |
| `options.end?` | `boolean` |

#### Returns

`T`

#### Inherited from

Stream.pipe

#### Defined in

node_modules/@types/node/stream.d.ts:6

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`Part`](api.formidable.part.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Part`](api.formidable.part.md)

#### Inherited from

Stream.prependListener

#### Defined in

node_modules/@types/node/events.d.ts:85

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Part`](api.formidable.part.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Part`](api.formidable.part.md)

#### Inherited from

Stream.prependOnceListener

#### Defined in

node_modules/@types/node/events.d.ts:86

___

### rawListeners

▸ **rawListeners**(`event`): `Function`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

Stream.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:81

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Part`](api.formidable.part.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Part`](api.formidable.part.md)

#### Inherited from

Stream.removeAllListeners

#### Defined in

node_modules/@types/node/events.d.ts:77

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`Part`](api.formidable.part.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Part`](api.formidable.part.md)

#### Inherited from

Stream.removeListener

#### Defined in

node_modules/@types/node/events.d.ts:75

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Part`](api.formidable.part.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Part`](api.formidable.part.md)

#### Inherited from

Stream.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:78
