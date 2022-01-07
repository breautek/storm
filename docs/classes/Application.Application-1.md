[@breautek/storm](../README.md) / [Application](../modules/Application.md) / Application

# Class: Application<TConfig, TAuthToken, TDBConfig, TDBConnectionAPI\>

[Application](../modules/Application.md).Application

Main entry point for the Application. Should be extended and have the abstract methods implemented.

## Type parameters

| Name | Type |
| :------ | :------ |
| `TConfig` | extends [`IConfig`](../interfaces/IConfig.IConfig-1.md)[`IConfig`](../interfaces/IConfig.IConfig-1.md) |
| `TAuthToken` | extends [`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md)[`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md) |
| `TDBConfig` | `any` |
| `TDBConnectionAPI` | `any` |

## Hierarchy

- `EventEmitter`

  ↳ **`Application`**

## Table of contents

### Constructors

- [constructor](Application.Application-1.md#constructor)

### Properties

- [captureRejectionSymbol](Application.Application-1.md#capturerejectionsymbol)
- [captureRejections](Application.Application-1.md#capturerejections)
- [defaultMaxListeners](Application.Application-1.md#defaultmaxlisteners)
- [errorMonitor](Application.Application-1.md#errormonitor)

### Methods

- [\_attachHandlers](Application.Application-1.md#_attachhandlers)
- [\_buildArgOptions](Application.Application-1.md#_buildargoptions)
- [\_closeDatabase](Application.Application-1.md#_closedatabase)
- [\_closeSocket](Application.Application-1.md#_closesocket)
- [\_initDB](Application.Application-1.md#_initdb)
- [\_initLogger](Application.Application-1.md#_initlogger)
- [\_initialize](Application.Application-1.md#_initialize)
- [\_onBeforeReadyAsync](Application.Application-1.md#_onbeforereadyasync)
- [\_onConfigLoad](Application.Application-1.md#_onconfigload)
- [\_onReady](Application.Application-1.md#_onready)
- [addListener](Application.Application-1.md#addlistener)
- [attachHandler](Application.Application-1.md#attachhandler)
- [attachHandlerInstance](Application.Application-1.md#attachhandlerinstance)
- [close](Application.Application-1.md#close)
- [emit](Application.Application-1.md#emit)
- [eventNames](Application.Application-1.md#eventnames)
- [getCmdLineArgs](Application.Application-1.md#getcmdlineargs)
- [getConfig](Application.Application-1.md#getconfig)
- [getDB](Application.Application-1.md#getdb)
- [getLogger](Application.Application-1.md#getlogger)
- [getMaxListeners](Application.Application-1.md#getmaxlisteners)
- [getName](Application.Application-1.md#getname)
- [getPort](Application.Application-1.md#getport)
- [getProgram](Application.Application-1.md#getprogram)
- [getRequestSizeLimit](Application.Application-1.md#getrequestsizelimit)
- [getTokenManager](Application.Application-1.md#gettokenmanager)
- [listenerCount](Application.Application-1.md#listenercount)
- [listeners](Application.Application-1.md#listeners)
- [loadConfig](Application.Application-1.md#loadconfig)
- [off](Application.Application-1.md#off)
- [on](Application.Application-1.md#on)
- [once](Application.Application-1.md#once)
- [prependListener](Application.Application-1.md#prependlistener)
- [prependOnceListener](Application.Application-1.md#prependoncelistener)
- [rawListeners](Application.Application-1.md#rawlisteners)
- [removeAllListeners](Application.Application-1.md#removealllisteners)
- [removeListener](Application.Application-1.md#removelistener)
- [setMaxListeners](Application.Application-1.md#setmaxlisteners)
- [setTokenManager](Application.Application-1.md#settokenmanager)
- [shouldListen](Application.Application-1.md#shouldlisten)
- [getEventListeners](Application.Application-1.md#geteventlisteners)
- [listenerCount](Application.Application-1.md#listenercount)
- [on](Application.Application-1.md#on)
- [once](Application.Application-1.md#once)

## Constructors

### constructor

• **new Application**<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>(`name`, `configPath`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TConfig` | extends [`IConfig`](../interfaces/IConfig.IConfig-1.md)[`IConfig`](../interfaces/IConfig.IConfig-1.md) |
| `TAuthToken` | extends [`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md)[`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md) |
| `TDBConfig` | `any` |
| `TDBConnectionAPI` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The application name |
| `configPath` | `string` | The directory where bt-config.json and bt-local-config.json can be found. Defaults to current working directory. |

#### Overrides

EventEmitter.constructor

#### Defined in

[src/Application.ts:64](https://github.com/breautek/storm/blob/8c3a317/src/Application.ts#L64)

## Properties

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](Application.Application-1.md#capturerejectionsymbol)

#### Inherited from

EventEmitter.captureRejectionSymbol

#### Defined in

node_modules/@types/node/events.d.ts:273

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

EventEmitter.captureRejections

#### Defined in

node_modules/@types/node/events.d.ts:278

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

EventEmitter.defaultMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:279

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](Application.Application-1.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

EventEmitter.errorMonitor

#### Defined in

node_modules/@types/node/events.d.ts:272

## Methods

### \_attachHandlers

▸ `Protected` `Abstract` **_attachHandlers**(): `Promise`<`void`\>

Subclasses are expected to attach the API handlers for their service. This will be invoked during application startup.

#### Returns

`Promise`<`void`\>

Promise<void>

#### Defined in

[src/Application.ts:272](https://github.com/breautek/storm/blob/8c3a317/src/Application.ts#L272)

___

### \_buildArgOptions

▸ `Protected` **_buildArgOptions**(`program`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | `Command` |

#### Returns

`void`

#### Defined in

[src/Application.ts:202](https://github.com/breautek/storm/blob/8c3a317/src/Application.ts#L202)

___

### \_closeDatabase

▸ `Protected` **_closeDatabase**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/Application.ts:249](https://github.com/breautek/storm/blob/8c3a317/src/Application.ts#L249)

___

### \_closeSocket

▸ `Protected` **_closeSocket**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/Application.ts:255](https://github.com/breautek/storm/blob/8c3a317/src/Application.ts#L255)

___

### \_initDB

▸ `Protected` **_initDB**(`config`): `Promise`<[`Database`](Database.Database-1.md)<`TDBConfig`, `TDBConnectionAPI`\>\>

Subclasses are expected to override this to configure their database setup, if the service uses a database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | `TConfig` | The bt-config object |

#### Returns

`Promise`<[`Database`](Database.Database-1.md)<`TDBConfig`, `TDBConnectionAPI`\>\>

#### Defined in

[src/Application.ts:381](https://github.com/breautek/storm/blob/8c3a317/src/Application.ts#L381)

___

### \_initLogger

▸ `Protected` **_initLogger**(`config`): `Logger`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `TConfig` |

#### Returns

`Logger`

#### Defined in

[src/Application.ts:165](https://github.com/breautek/storm/blob/8c3a317/src/Application.ts#L165)

___

### \_initialize

▸ `Protected` **_initialize**(`config`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `TConfig` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/Application.ts:161](https://github.com/breautek/storm/blob/8c3a317/src/Application.ts#L161)

___

### \_onBeforeReadyAsync

▸ `Protected` **_onBeforeReadyAsync**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/Application.ts:385](https://github.com/breautek/storm/blob/8c3a317/src/Application.ts#L385)

___

### \_onConfigLoad

▸ `Protected` **_onConfigLoad**(`config`): `void`

Invoked once the config has been loaded and ready to be used.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | `TConfig` | The config object (as defined in bt-config.json/bt-local-config.json) |

#### Returns

`void`

#### Defined in

[src/Application.ts:325](https://github.com/breautek/storm/blob/8c3a317/src/Application.ts#L325)

___

### \_onReady

▸ `Protected` **_onReady**(): `void`

Invoked when the application is considered ready for operation.

#### Returns

`void`

#### Defined in

[src/Application.ts:390](https://github.com/breautek/storm/blob/8c3a317/src/Application.ts#L390)

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`Application`](Application.Application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

Alias for `emitter.on(eventName, listener)`.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Application`](Application.Application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

#### Inherited from

EventEmitter.addListener

#### Defined in

node_modules/@types/node/events.d.ts:299

___

### attachHandler

▸ **attachHandler**(`path`, `HandlerClass`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The URL API path. E.g. /api/myService/myCommand/ |
| `HandlerClass` | [`IHandler`](../interfaces/IHandler.IHandler-1.md)<[`Application`](Application.Application-1.md)<[`IConfig`](../interfaces/IConfig.IConfig-1.md), [`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md), `any`, `any`\>\> | The concrete class (not the instance) of Handler to be used for this API. |

#### Returns

`void`

#### Defined in

[src/Application.ts:221](https://github.com/breautek/storm/blob/8c3a317/src/Application.ts#L221)

___

### attachHandlerInstance

▸ **attachHandlerInstance**(`path`, `handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `handler` | [`Handler`](Handler.Handler-1.md)<[`Application`](Application.Application-1.md)<[`IConfig`](../interfaces/IConfig.IConfig-1.md), [`IAuthTokenData`](../interfaces/IAuthTokenData.IAuthTokenData-1.md), `any`, `any`\>, `any`, `any`, `any`, `any`, `any`, `any`, `any`, `any`\> |

#### Returns

`void`

#### Defined in

[src/Application.ts:226](https://github.com/breautek/storm/blob/8c3a317/src/Application.ts#L226)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/Application.ts:245](https://github.com/breautek/storm/blob/8c3a317/src/Application.ts#L245)

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

EventEmitter.emit

#### Defined in

node_modules/@types/node/events.d.ts:555

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`since`** v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

EventEmitter.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:614

___

### getCmdLineArgs

▸ **getCmdLineArgs**(): `TConfig`

#### Returns

`TConfig`

command line arguments

#### Defined in

[src/Application.ts:352](https://github.com/breautek/storm/blob/8c3a317/src/Application.ts#L352)

___

### getConfig

▸ **getConfig**(): `TConfig`

#### Returns

`TConfig`

the config object.

#### Defined in

[src/Application.ts:309](https://github.com/breautek/storm/blob/8c3a317/src/Application.ts#L309)

___

### getDB

▸ **getDB**(): [`Database`](Database.Database-1.md)<`TDBConfig`, `TDBConnectionAPI`\>

#### Returns

[`Database`](Database.Database-1.md)<`TDBConfig`, `TDBConnectionAPI`\>

the database pool. This will need to be casted based on your preferred database dialect.

#### Defined in

[src/Application.ts:345](https://github.com/breautek/storm/blob/8c3a317/src/Application.ts#L345)

___

### getLogger

▸ **getLogger**(): `Logger`

#### Returns

`Logger`

#### Defined in

[src/Application.ts:169](https://github.com/breautek/storm/blob/8c3a317/src/Application.ts#L169)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](Application.Application-1.md#defaultmaxlisteners).

**`since`** v1.0.0

#### Returns

`number`

#### Inherited from

EventEmitter.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:471

___

### getName

▸ **getName**(): `string`

#### Returns

`string`

the application name

#### Defined in

[src/Application.ts:298](https://github.com/breautek/storm/blob/8c3a317/src/Application.ts#L298)

___

### getPort

▸ **getPort**(): `number`

#### Returns

`number`

#### Defined in

[src/Application.ts:173](https://github.com/breautek/storm/blob/8c3a317/src/Application.ts#L173)

___

### getProgram

▸ **getProgram**(): `Command`

#### Returns

`Command`

#### Defined in

[src/Application.ts:204](https://github.com/breautek/storm/blob/8c3a317/src/Application.ts#L204)

___

### getRequestSizeLimit

▸ **getRequestSizeLimit**(): `number`

The maximum size limit for incoming requests that this service needs to handle.

#### Returns

`number`

#### Defined in

[src/Application.ts:211](https://github.com/breautek/storm/blob/8c3a317/src/Application.ts#L211)

___

### getTokenManager

▸ **getTokenManager**(): [`TokenManager`](TokenManager.TokenManager-1.md)<`TAuthToken`\>

#### Returns

[`TokenManager`](TokenManager.TokenManager-1.md)<`TAuthToken`\>

the token manager

#### Defined in

[src/Application.ts:338](https://github.com/breautek/storm/blob/8c3a317/src/Application.ts#L338)

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

**`since`** v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Inherited from

EventEmitter.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:561

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventEmitter.listeners

#### Defined in

node_modules/@types/node/events.d.ts:484

___

### loadConfig

▸ **loadConfig**(`path`): `Promise`<`TConfig`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The directory path that contains bt-config.json and bt-local-config.json |

#### Returns

`Promise`<`TConfig`\>

#### Defined in

[src/Application.ts:278](https://github.com/breautek/storm/blob/8c3a317/src/Application.ts#L278)

___

### off

▸ **off**(`eventName`, `listener`): [`Application`](Application.Application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

Alias for `emitter.removeListener()`.

**`since`** v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Application`](Application.Application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

#### Inherited from

EventEmitter.off

#### Defined in

node_modules/@types/node/events.d.ts:444

___

### on

▸ **on**(`eventName`, `listener`): [`Application`](Application.Application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`since`** v0.1.101

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Application`](Application.Application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/@types/node/events.d.ts:330

___

### once

▸ **once**(`eventName`, `listener`): [`Application`](Application.Application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`since`** v0.3.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Application`](Application.Application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:359

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`Application`](Application.Application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Application`](Application.Application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

#### Inherited from

EventEmitter.prependListener

#### Defined in

node_modules/@types/node/events.d.ts:579

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`Application`](Application.Application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

Adds a **one-time**`listener` function for the event named `eventName` to the_beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Application`](Application.Application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

#### Inherited from

EventEmitter.prependOnceListener

#### Defined in

node_modules/@types/node/events.d.ts:595

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`since`** v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventEmitter.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:514

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Application`](Application.Application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Application`](Application.Application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

#### Inherited from

EventEmitter.removeAllListeners

#### Defined in

node_modules/@types/node/events.d.ts:455

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`Application`](Application.Application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and_before_ the last listener finishes execution will
not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Application`](Application.Application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

#### Inherited from

EventEmitter.removeListener

#### Defined in

node_modules/@types/node/events.d.ts:439

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Application`](Application.Application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Application`](Application.Application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

#### Inherited from

EventEmitter.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:465

___

### setTokenManager

▸ **setTokenManager**(`tokenManager`): `void`

Sets the TokenManager to be used for authentication.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenManager` | [`TokenManager`](TokenManager.TokenManager-1.md)<`TAuthToken`\> |

#### Returns

`void`

#### Defined in

[src/Application.ts:331](https://github.com/breautek/storm/blob/8c3a317/src/Application.ts#L331)

___

### shouldListen

▸ **shouldListen**(): `boolean`

#### Returns

`boolean`

true if the Application should bind to an IP address

#### Defined in

[src/Application.ts:316](https://github.com/breautek/storm/blob/8c3a317/src/Application.ts#L316)

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

**`since`** v15.2.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` \| `EventEmitter` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventEmitter.getEventListeners

#### Defined in

node_modules/@types/node/events.d.ts:262

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

**`since`** v0.9.12

**`deprecated`** Since v3.2.0 - Use `listenerCount` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

#### Inherited from

EventEmitter.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:234

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

```js
const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events');
const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

**`since`** v13.6.0, v12.16.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/@types/node/events.d.ts:217

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
const { once, EventEmitter } = require('events');

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  const [value] = await once(ee, 'myevent');
  console.log(value);

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

**`since`** v11.13.0, v10.16.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:157

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:158
