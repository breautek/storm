[@breautek/storm](../README.md) / [Exports](../modules.md) / [api](../modules/api.md) / [formidable](../modules/api.formidable.md) / IncomingForm

# Class: IncomingForm

[api](../modules/api.md).[formidable](../modules/api.formidable.md).IncomingForm

## Hierarchy

* *EventEmitter*

  ↳ **IncomingForm**

## Table of contents

### Constructors

- [constructor](api.formidable.incomingform.md#constructor)

### Properties

- [bytesExpected](api.formidable.incomingform.md#bytesexpected)
- [bytesReceived](api.formidable.incomingform.md#bytesreceived)
- [encoding](api.formidable.incomingform.md#encoding)
- [hash](api.formidable.incomingform.md#hash)
- [keepExtensions](api.formidable.incomingform.md#keepextensions)
- [maxFields](api.formidable.incomingform.md#maxfields)
- [maxFieldsSize](api.formidable.incomingform.md#maxfieldssize)
- [maxFileSize](api.formidable.incomingform.md#maxfilesize)
- [multiples](api.formidable.incomingform.md#multiples)
- [onPart](api.formidable.incomingform.md#onpart)
- [type](api.formidable.incomingform.md#type)
- [uploadDir](api.formidable.incomingform.md#uploaddir)
- [captureRejectionSymbol](api.formidable.incomingform.md#capturerejectionsymbol)
- [captureRejections](api.formidable.incomingform.md#capturerejections)
- [defaultMaxListeners](api.formidable.incomingform.md#defaultmaxlisteners)
- [errorMonitor](api.formidable.incomingform.md#errormonitor)

### Methods

- [addListener](api.formidable.incomingform.md#addlistener)
- [emit](api.formidable.incomingform.md#emit)
- [eventNames](api.formidable.incomingform.md#eventnames)
- [getMaxListeners](api.formidable.incomingform.md#getmaxlisteners)
- [handlePart](api.formidable.incomingform.md#handlepart)
- [listenerCount](api.formidable.incomingform.md#listenercount)
- [listeners](api.formidable.incomingform.md#listeners)
- [off](api.formidable.incomingform.md#off)
- [on](api.formidable.incomingform.md#on)
- [once](api.formidable.incomingform.md#once)
- [parse](api.formidable.incomingform.md#parse)
- [prependListener](api.formidable.incomingform.md#prependlistener)
- [prependOnceListener](api.formidable.incomingform.md#prependoncelistener)
- [rawListeners](api.formidable.incomingform.md#rawlisteners)
- [removeAllListeners](api.formidable.incomingform.md#removealllisteners)
- [removeListener](api.formidable.incomingform.md#removelistener)
- [setMaxListeners](api.formidable.incomingform.md#setmaxlisteners)
- [listenerCount](api.formidable.incomingform.md#listenercount)
- [on](api.formidable.incomingform.md#on)
- [once](api.formidable.incomingform.md#once)

## Constructors

### constructor

\+ **new IncomingForm**(`options?`: EventEmitterOptions): [*IncomingForm*](api.formidable.incomingform.md)

#### Parameters:

Name | Type |
------ | ------ |
`options?` | EventEmitterOptions |

**Returns:** [*IncomingForm*](api.formidable.incomingform.md)

Defined in: node_modules/@types/node/events.d.ts:23

## Properties

### bytesExpected

• **bytesExpected**: *number*

Defined in: node_modules/@types/formidable/index.d.ts:24

___

### bytesReceived

• **bytesReceived**: *number*

Defined in: node_modules/@types/formidable/index.d.ts:23

___

### encoding

• **encoding**: *string*

Defined in: node_modules/@types/formidable/index.d.ts:14

___

### hash

• **hash**: *string* \| *boolean*

Defined in: node_modules/@types/formidable/index.d.ts:20

___

### keepExtensions

• **keepExtensions**: *boolean*

Defined in: node_modules/@types/formidable/index.d.ts:16

___

### maxFields

• **maxFields**: *number*

Defined in: node_modules/@types/formidable/index.d.ts:19

___

### maxFieldsSize

• **maxFieldsSize**: *number*

Defined in: node_modules/@types/formidable/index.d.ts:18

___

### maxFileSize

• **maxFileSize**: *number*

Defined in: node_modules/@types/formidable/index.d.ts:17

___

### multiples

• **multiples**: *boolean*

Defined in: node_modules/@types/formidable/index.d.ts:21

___

### onPart

• **onPart**: (`part`: [*Part*](../interfaces/api.formidable.part.md)) => *void*

Defined in: node_modules/@types/formidable/index.d.ts:26

___

### type

• **type**: *string*

Defined in: node_modules/@types/formidable/index.d.ts:22

___

### uploadDir

• **uploadDir**: *string*

Defined in: node_modules/@types/formidable/index.d.ts:15

___

### captureRejectionSymbol

▪ `Readonly` `Static` **captureRejectionSymbol**: *typeof* [*captureRejectionSymbol*](application.application-1.md#capturerejectionsymbol)

Defined in: node_modules/@types/node/events.d.ts:43

___

### captureRejections

▪ `Static` **captureRejections**: *boolean*

Sets or gets the default captureRejection value for all emitters.

Defined in: node_modules/@types/node/events.d.ts:49

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: *number*

Defined in: node_modules/@types/node/events.d.ts:50

___

### errorMonitor

▪ `Readonly` `Static` **errorMonitor**: *typeof* [*errorMonitor*](application.application-1.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

Defined in: node_modules/@types/node/events.d.ts:42

## Methods

### addListener

▸ **addListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*IncomingForm*](api.formidable.incomingform.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*IncomingForm*](api.formidable.incomingform.md)

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

### handlePart

▸ **handlePart**(`part`: [*Part*](../interfaces/api.formidable.part.md)): *void*

#### Parameters:

Name | Type |
------ | ------ |
`part` | [*Part*](../interfaces/api.formidable.part.md) |

**Returns:** *void*

Defined in: node_modules/@types/formidable/index.d.ts:28

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

▸ **off**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*IncomingForm*](api.formidable.incomingform.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*IncomingForm*](api.formidable.incomingform.md)

Defined in: node_modules/@types/node/events.d.ts:66

___

### on

▸ **on**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*IncomingForm*](api.formidable.incomingform.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*IncomingForm*](api.formidable.incomingform.md)

Defined in: node_modules/@types/node/events.d.ts:63

___

### once

▸ **once**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*IncomingForm*](api.formidable.incomingform.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*IncomingForm*](api.formidable.incomingform.md)

Defined in: node_modules/@types/node/events.d.ts:64

___

### parse

▸ **parse**(`req`: *IncomingMessage*, `callback?`: (`err`: *any*, `fields`: [*Fields*](../interfaces/api.formidable.fields.md), `files`: [*Files*](../interfaces/api.formidable.files.md)) => *any*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`req` | *IncomingMessage* |
`callback?` | (`err`: *any*, `fields`: [*Fields*](../interfaces/api.formidable.fields.md), `files`: [*Files*](../interfaces/api.formidable.files.md)) => *any* |

**Returns:** *void*

Defined in: node_modules/@types/formidable/index.d.ts:29

___

### prependListener

▸ **prependListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*IncomingForm*](api.formidable.incomingform.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*IncomingForm*](api.formidable.incomingform.md)

Defined in: node_modules/@types/node/events.d.ts:75

___

### prependOnceListener

▸ **prependOnceListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*IncomingForm*](api.formidable.incomingform.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*IncomingForm*](api.formidable.incomingform.md)

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

▸ **removeAllListeners**(`event?`: *string* \| *symbol*): [*IncomingForm*](api.formidable.incomingform.md)

#### Parameters:

Name | Type |
------ | ------ |
`event?` | *string* \| *symbol* |

**Returns:** [*IncomingForm*](api.formidable.incomingform.md)

Defined in: node_modules/@types/node/events.d.ts:67

___

### removeListener

▸ **removeListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*IncomingForm*](api.formidable.incomingform.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*IncomingForm*](api.formidable.incomingform.md)

Defined in: node_modules/@types/node/events.d.ts:65

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*IncomingForm*](api.formidable.incomingform.md)

#### Parameters:

Name | Type |
------ | ------ |
`n` | *number* |

**Returns:** [*IncomingForm*](api.formidable.incomingform.md)

Defined in: node_modules/@types/node/events.d.ts:68

___

### listenerCount

▸ `Static`**listenerCount**(`emitter`: *EventEmitter*, `event`: *string* \| *symbol*): *number*

**`deprecated`** since v4.0.0

#### Parameters:

Name | Type |
------ | ------ |
`emitter` | *EventEmitter* |
`event` | *string* \| *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:31

___

### on

▸ `Static`**on**(`emitter`: *EventEmitter*, `event`: *string*): *AsyncIterableIterator*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`emitter` | *EventEmitter* |
`event` | *string* |

**Returns:** *AsyncIterableIterator*<*any*\>

Defined in: node_modules/@types/node/events.d.ts:28

___

### once

▸ `Static`**once**(`emitter`: *NodeEventTarget*, `event`: *string* \| *symbol*): *Promise*<*any*[]\>

#### Parameters:

Name | Type |
------ | ------ |
`emitter` | *NodeEventTarget* |
`event` | *string* \| *symbol* |

**Returns:** *Promise*<*any*[]\>

Defined in: node_modules/@types/node/events.d.ts:26

▸ `Static`**once**(`emitter`: DOMEventTarget, `event`: *string*): *Promise*<*any*[]\>

#### Parameters:

Name | Type |
------ | ------ |
`emitter` | DOMEventTarget |
`event` | *string* |

**Returns:** *Promise*<*any*[]\>

Defined in: node_modules/@types/node/events.d.ts:27
