[@breautek/storm](../README.md) / [Exports](../modules.md) / [api](../modules/api.md) / [formidable](../modules/api.formidable.md) / Part

# Interface: Part

[api](../modules/api.md).[formidable](../modules/api.formidable.md).Part

## Hierarchy

* *Stream*

  ↳ **Part**

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

• `Optional` **filename**: *string*

Defined in: node_modules/@types/formidable/index.d.ts:43

___

### headers

• **headers**: { [key: string]: *string*;  }

Defined in: node_modules/@types/formidable/index.d.ts:41

___

### mime

• `Optional` **mime**: *string*

Defined in: node_modules/@types/formidable/index.d.ts:44

___

### name

• **name**: *string*

Defined in: node_modules/@types/formidable/index.d.ts:42

## Methods

### addListener

▸ **addListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Part*](api.formidable.part.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Part*](api.formidable.part.md)

Defined in: node_modules/@types/node/events.d.ts:62

___

### emit

▸ **emit**(`event`: *string* \| *symbol*, ...`args`: *any*[]): *boolean*

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`...args` | *any*[] |

**Returns:** *boolean*

Defined in: node_modules/@types/node/events.d.ts:72

___

### eventNames

▸ **eventNames**(): (*string* \| *symbol*)[]

**Returns:** (*string* \| *symbol*)[]

Defined in: node_modules/@types/node/events.d.ts:77

___

### getMaxListeners

▸ **getMaxListeners**(): *number*

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:69

___

### listenerCount

▸ **listenerCount**(`event`: *string* \| *symbol*): *number*

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:73

___

### listeners

▸ **listeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:70

___

### off

▸ **off**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Part*](api.formidable.part.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Part*](api.formidable.part.md)

Defined in: node_modules/@types/node/events.d.ts:66

___

### on

▸ **on**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Part*](api.formidable.part.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Part*](api.formidable.part.md)

Defined in: node_modules/@types/node/events.d.ts:63

___

### once

▸ **once**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Part*](api.formidable.part.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Part*](api.formidable.part.md)

Defined in: node_modules/@types/node/events.d.ts:64

___

### pipe

▸ **pipe**<T\>(`destination`: T, `options?`: { `end?`: *boolean*  }): T

#### Type parameters:

Name | Type |
------ | ------ |
`T` | *WritableStream*<T\> |

#### Parameters:

Name | Type |
------ | ------ |
`destination` | T |
`options?` | { `end?`: *boolean*  } |

**Returns:** T

Defined in: node_modules/@types/node/stream.d.ts:10

___

### prependListener

▸ **prependListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Part*](api.formidable.part.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Part*](api.formidable.part.md)

Defined in: node_modules/@types/node/events.d.ts:75

___

### prependOnceListener

▸ **prependOnceListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Part*](api.formidable.part.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Part*](api.formidable.part.md)

Defined in: node_modules/@types/node/events.d.ts:76

___

### rawListeners

▸ **rawListeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:71

___

### removeAllListeners

▸ **removeAllListeners**(`event?`: *string* \| *symbol*): [*Part*](api.formidable.part.md)

#### Parameters:

Name | Type |
------ | ------ |
`event?` | *string* \| *symbol* |

**Returns:** [*Part*](api.formidable.part.md)

Defined in: node_modules/@types/node/events.d.ts:67

___

### removeListener

▸ **removeListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Part*](api.formidable.part.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Part*](api.formidable.part.md)

Defined in: node_modules/@types/node/events.d.ts:65

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*Part*](api.formidable.part.md)

#### Parameters:

Name | Type |
------ | ------ |
`n` | *number* |

**Returns:** [*Part*](api.formidable.part.md)

Defined in: node_modules/@types/node/events.d.ts:68
