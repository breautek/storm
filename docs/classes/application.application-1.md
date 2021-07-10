[@breautek/storm](../README.md) / [Application](../modules/application.md) / Application

# Class: Application<TConfig, TAuthToken, TDBConfig, TDBConnectionAPI\>

[Application](../modules/application.md).Application

Main entry point for the Application. Should be extended and have the abstract methods implemented.

## Type parameters

| Name | Type |
| :------ | :------ |
| `TConfig` | extends [`IConfig`](../interfaces/iconfig.iconfig-1.md)[`IConfig`](../interfaces/iconfig.iconfig-1.md) |
| `TAuthToken` | extends [`IAuthTokenData`](../interfaces/iauthtokendata.iauthtokendata-1.md)[`IAuthTokenData`](../interfaces/iauthtokendata.iauthtokendata-1.md) |
| `TDBConfig` | `any` |
| `TDBConnectionAPI` | `any` |

## Hierarchy

- `EventEmitter`

  ↳ **`Application`**

## Table of contents

### Constructors

- [constructor](application.application-1.md#constructor)

### Properties

- [captureRejectionSymbol](application.application-1.md#capturerejectionsymbol)
- [captureRejections](application.application-1.md#capturerejections)
- [defaultMaxListeners](application.application-1.md#defaultmaxlisteners)
- [errorMonitor](application.application-1.md#errormonitor)

### Methods

- [\_attachHandlers](application.application-1.md#_attachhandlers)
- [\_buildArgOptions](application.application-1.md#_buildargoptions)
- [\_initDB](application.application-1.md#_initdb)
- [\_initLogger](application.application-1.md#_initlogger)
- [\_initialize](application.application-1.md#_initialize)
- [\_onBeforeReadyAsync](application.application-1.md#_onbeforereadyasync)
- [\_onConfigLoad](application.application-1.md#_onconfigload)
- [\_onReady](application.application-1.md#_onready)
- [addListener](application.application-1.md#addlistener)
- [attachHandler](application.application-1.md#attachhandler)
- [close](application.application-1.md#close)
- [emit](application.application-1.md#emit)
- [eventNames](application.application-1.md#eventnames)
- [getCmdLineArgs](application.application-1.md#getcmdlineargs)
- [getConfig](application.application-1.md#getconfig)
- [getDB](application.application-1.md#getdb)
- [getLogger](application.application-1.md#getlogger)
- [getMaxListeners](application.application-1.md#getmaxlisteners)
- [getName](application.application-1.md#getname)
- [getPort](application.application-1.md#getport)
- [getProgram](application.application-1.md#getprogram)
- [getRequestSizeLimit](application.application-1.md#getrequestsizelimit)
- [getTokenManager](application.application-1.md#gettokenmanager)
- [listenerCount](application.application-1.md#listenercount)
- [listeners](application.application-1.md#listeners)
- [loadConfig](application.application-1.md#loadconfig)
- [off](application.application-1.md#off)
- [on](application.application-1.md#on)
- [once](application.application-1.md#once)
- [prependListener](application.application-1.md#prependlistener)
- [prependOnceListener](application.application-1.md#prependoncelistener)
- [rawListeners](application.application-1.md#rawlisteners)
- [removeAllListeners](application.application-1.md#removealllisteners)
- [removeListener](application.application-1.md#removelistener)
- [setMaxListeners](application.application-1.md#setmaxlisteners)
- [setTokenManager](application.application-1.md#settokenmanager)
- [shouldListen](application.application-1.md#shouldlisten)
- [getEventListener](application.application-1.md#geteventlistener)
- [listenerCount](application.application-1.md#listenercount)
- [on](application.application-1.md#on)
- [once](application.application-1.md#once)

## Constructors

### constructor

• **new Application**<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>(`name`, `configPath`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TConfig` | extends [`IConfig`](../interfaces/iconfig.iconfig-1.md)[`IConfig`](../interfaces/iconfig.iconfig-1.md) |
| `TAuthToken` | extends [`IAuthTokenData`](../interfaces/iauthtokendata.iauthtokendata-1.md)[`IAuthTokenData`](../interfaces/iauthtokendata.iauthtokendata-1.md) |
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

[src/Application.ts:57](https://github.com/breautek/storm/blob/fff2ea4/src/Application.ts#L57)

## Properties

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](application.application-1.md#capturerejectionsymbol)

#### Inherited from

EventEmitter.captureRejectionSymbol

#### Defined in

node_modules/@types/node/events.d.ts:46

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

EventEmitter.captureRejections

#### Defined in

node_modules/@types/node/events.d.ts:52

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

EventEmitter.defaultMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:53

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](application.application-1.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

EventEmitter.errorMonitor

#### Defined in

node_modules/@types/node/events.d.ts:45

## Methods

### \_attachHandlers

▸ `Protected` `Abstract` **_attachHandlers**(): `Promise`<`void`\>

Subclasses are expected to attach the API handlers for their service. This will be invoked during application startup.

#### Returns

`Promise`<`void`\>

Promise<void>

#### Defined in

[src/Application.ts:258](https://github.com/breautek/storm/blob/fff2ea4/src/Application.ts#L258)

___

### \_buildArgOptions

▸ `Protected` **_buildArgOptions**(`program`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | `CommanderStatic` |

#### Returns

`void`

#### Defined in

[src/Application.ts:202](https://github.com/breautek/storm/blob/fff2ea4/src/Application.ts#L202)

___

### \_initDB

▸ `Protected` **_initDB**(`config`): `Promise`<[`Database`](database.database-1.md)<`TDBConfig`, `TDBConnectionAPI`\>\>

Subclasses are expected to override this to configure their database setup, if the service uses a database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | `TConfig` | The bt-config object |

#### Returns

`Promise`<[`Database`](database.database-1.md)<`TDBConfig`, `TDBConnectionAPI`\>\>

#### Defined in

[src/Application.ts:367](https://github.com/breautek/storm/blob/fff2ea4/src/Application.ts#L367)

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

[src/Application.ts:165](https://github.com/breautek/storm/blob/fff2ea4/src/Application.ts#L165)

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

[src/Application.ts:161](https://github.com/breautek/storm/blob/fff2ea4/src/Application.ts#L161)

___

### \_onBeforeReadyAsync

▸ `Protected` **_onBeforeReadyAsync**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/Application.ts:371](https://github.com/breautek/storm/blob/fff2ea4/src/Application.ts#L371)

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

[src/Application.ts:311](https://github.com/breautek/storm/blob/fff2ea4/src/Application.ts#L311)

___

### \_onReady

▸ `Protected` **_onReady**(): `void`

Invoked when the application is considered ready for operation.

#### Returns

`void`

#### Defined in

[src/Application.ts:376](https://github.com/breautek/storm/blob/fff2ea4/src/Application.ts#L376)

___

### addListener

▸ **addListener**(`event`, `listener`): [`Application`](application.application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Application`](application.application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

#### Inherited from

EventEmitter.addListener

#### Defined in

node_modules/@types/node/events.d.ts:72

___

### attachHandler

▸ **attachHandler**(`path`, `HandlerClass`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The URL API path. E.g. /api/myService/myCommand/ |
| `HandlerClass` | [`IHandler`](../interfaces/ihandler.ihandler-1.md)<[`Application`](application.application-1.md)<[`IConfig`](../interfaces/iconfig.iconfig-1.md), [`IAuthTokenData`](../interfaces/iauthtokendata.iauthtokendata-1.md), `any`, `any`\>\> | The concrete class (not the instance) of Handler to be used for this API. |

#### Returns

`void`

#### Defined in

[src/Application.ts:221](https://github.com/breautek/storm/blob/fff2ea4/src/Application.ts#L221)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/Application.ts:241](https://github.com/breautek/storm/blob/fff2ea4/src/Application.ts#L241)

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

EventEmitter.emit

#### Defined in

node_modules/@types/node/events.d.ts:82

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

EventEmitter.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:87

___

### getCmdLineArgs

▸ **getCmdLineArgs**(): `TConfig`

#### Returns

`TConfig`

command line arguments

#### Defined in

[src/Application.ts:338](https://github.com/breautek/storm/blob/fff2ea4/src/Application.ts#L338)

___

### getConfig

▸ **getConfig**(): `TConfig`

#### Returns

`TConfig`

the config object.

#### Defined in

[src/Application.ts:295](https://github.com/breautek/storm/blob/fff2ea4/src/Application.ts#L295)

___

### getDB

▸ **getDB**(): [`Database`](database.database-1.md)<`TDBConfig`, `TDBConnectionAPI`\>

#### Returns

[`Database`](database.database-1.md)<`TDBConfig`, `TDBConnectionAPI`\>

the database pool. This will need to be casted based on your preferred database dialect.

#### Defined in

[src/Application.ts:331](https://github.com/breautek/storm/blob/fff2ea4/src/Application.ts#L331)

___

### getLogger

▸ **getLogger**(): `Logger`

#### Returns

`Logger`

#### Defined in

[src/Application.ts:169](https://github.com/breautek/storm/blob/fff2ea4/src/Application.ts#L169)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

EventEmitter.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:79

___

### getName

▸ **getName**(): `string`

#### Returns

`string`

the application name

#### Defined in

[src/Application.ts:284](https://github.com/breautek/storm/blob/fff2ea4/src/Application.ts#L284)

___

### getPort

▸ **getPort**(): `number`

#### Returns

`number`

#### Defined in

[src/Application.ts:173](https://github.com/breautek/storm/blob/fff2ea4/src/Application.ts#L173)

___

### getProgram

▸ **getProgram**(): `CommanderStatic`

#### Returns

`CommanderStatic`

#### Defined in

[src/Application.ts:204](https://github.com/breautek/storm/blob/fff2ea4/src/Application.ts#L204)

___

### getRequestSizeLimit

▸ **getRequestSizeLimit**(): `number`

The maximum size limit for incoming requests that this service needs to handle.

#### Returns

`number`

#### Defined in

[src/Application.ts:211](https://github.com/breautek/storm/blob/fff2ea4/src/Application.ts#L211)

___

### getTokenManager

▸ **getTokenManager**(): [`TokenManager`](tokenmanager.tokenmanager-1.md)<`TAuthToken`\>

#### Returns

[`TokenManager`](tokenmanager.tokenmanager-1.md)<`TAuthToken`\>

the token manager

#### Defined in

[src/Application.ts:324](https://github.com/breautek/storm/blob/fff2ea4/src/Application.ts#L324)

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

EventEmitter.listenerCount

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

EventEmitter.listeners

#### Defined in

node_modules/@types/node/events.d.ts:80

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

[src/Application.ts:264](https://github.com/breautek/storm/blob/fff2ea4/src/Application.ts#L264)

___

### off

▸ **off**(`event`, `listener`): [`Application`](application.application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Application`](application.application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

#### Inherited from

EventEmitter.off

#### Defined in

node_modules/@types/node/events.d.ts:76

___

### on

▸ **on**(`event`, `listener`): [`Application`](application.application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Application`](application.application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/@types/node/events.d.ts:73

___

### once

▸ **once**(`event`, `listener`): [`Application`](application.application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Application`](application.application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:74

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`Application`](application.application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Application`](application.application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

#### Inherited from

EventEmitter.prependListener

#### Defined in

node_modules/@types/node/events.d.ts:85

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Application`](application.application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Application`](application.application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

#### Inherited from

EventEmitter.prependOnceListener

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

EventEmitter.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:81

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Application`](application.application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Application`](application.application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

#### Inherited from

EventEmitter.removeAllListeners

#### Defined in

node_modules/@types/node/events.d.ts:77

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`Application`](application.application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Application`](application.application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

#### Inherited from

EventEmitter.removeListener

#### Defined in

node_modules/@types/node/events.d.ts:75

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Application`](application.application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Application`](application.application-1.md)<`TConfig`, `TAuthToken`, `TDBConfig`, `TDBConnectionAPI`\>

#### Inherited from

EventEmitter.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:78

___

### setTokenManager

▸ **setTokenManager**(`tokenManager`): `void`

Sets the TokenManager to be used for authentication.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenManager` | [`TokenManager`](tokenmanager.tokenmanager-1.md)<`TAuthToken`\> |

#### Returns

`void`

#### Defined in

[src/Application.ts:317](https://github.com/breautek/storm/blob/fff2ea4/src/Application.ts#L317)

___

### shouldListen

▸ **shouldListen**(): `boolean`

#### Returns

`boolean`

true if the Application should bind to an IP address

#### Defined in

[src/Application.ts:302](https://github.com/breautek/storm/blob/fff2ea4/src/Application.ts#L302)

___

### getEventListener

▸ `Static` **getEventListener**(`emitter`, `name`): `Function`[]

Returns a list listener for a specific emitter event name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` \| `EventEmitter` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventEmitter.getEventListener

#### Defined in

node_modules/@types/node/events.d.ts:34

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `event`): `number`

**`deprecated`** since v4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` |
| `event` | `string` \| `symbol` |

#### Returns

`number`

#### Inherited from

EventEmitter.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:30

___

### on

▸ `Static` **on**(`emitter`, `event`, `options?`): `AsyncIterableIterator`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` |
| `event` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`AsyncIterableIterator`<`any`\>

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/@types/node/events.d.ts:27

___

### once

▸ `Static` **once**(`emitter`, `event`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `NodeEventTarget` |
| `event` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:25

▸ `Static` **once**(`emitter`, `event`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` |
| `event` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:26
