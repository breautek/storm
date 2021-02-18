[@breautek/storm](../README.md) / [Application](../modules/application.md) / Application

# Class: Application<TConfig, TAuthToken, TDBConfig, TDBConnectionAPI\>

[Application](../modules/application.md).Application

Main entry point for the Application. Should be extended and have the abstract methods implemented.

## Type parameters

Name | Type | Default |
------ | ------ | ------ |
`TConfig` | [*IConfig*](../interfaces/iconfig.iconfig-1.md) | [*IConfig*](../interfaces/iconfig.iconfig-1.md) |
`TAuthToken` | [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md) | [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md) |
`TDBConfig` | - | *any* |
`TDBConnectionAPI` | - | *any* |

## Hierarchy

* *EventEmitter*

  ↳ **Application**

## Table of contents

### Constructors

- [constructor](application.application-1.md#constructor)

### Properties

- [captureRejectionSymbol](application.application-1.md#capturerejectionsymbol)
- [captureRejections](application.application-1.md#capturerejections)
- [defaultMaxListeners](application.application-1.md#defaultmaxlisteners)
- [errorMonitor](application.application-1.md#errormonitor)

### Methods

- [\_buildArgOptions](application.application-1.md#_buildargoptions)
- [\_initLogger](application.application-1.md#_initlogger)
- [\_initialize](application.application-1.md#_initialize)
- [addListener](application.application-1.md#addlistener)
- [attachHandler](application.application-1.md#attachhandler)
- [attachHandlers](application.application-1.md#attachhandlers)
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
- [initDB](application.application-1.md#initdb)
- [listenerCount](application.application-1.md#listenercount)
- [listeners](application.application-1.md#listeners)
- [loadConfig](application.application-1.md#loadconfig)
- [off](application.application-1.md#off)
- [on](application.application-1.md#on)
- [onBeforeReady](application.application-1.md#onbeforeready)
- [onConfigLoad](application.application-1.md#onconfigload)
- [onReady](application.application-1.md#onready)
- [once](application.application-1.md#once)
- [prependListener](application.application-1.md#prependlistener)
- [prependOnceListener](application.application-1.md#prependoncelistener)
- [rawListeners](application.application-1.md#rawlisteners)
- [removeAllListeners](application.application-1.md#removealllisteners)
- [removeListener](application.application-1.md#removelistener)
- [setMaxListeners](application.application-1.md#setmaxlisteners)
- [setTokenManager](application.application-1.md#settokenmanager)
- [shouldListen](application.application-1.md#shouldlisten)
- [listenerCount](application.application-1.md#listenercount)
- [on](application.application-1.md#on)
- [once](application.application-1.md#once)

## Constructors

### constructor

\+ **new Application**<TConfig, TAuthToken, TDBConfig, TDBConnectionAPI\>(`name`: *string*, `configPath`: *string*): [*Application*](application.application-1.md)<TConfig, TAuthToken, TDBConfig, TDBConnectionAPI\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`TConfig` | [*IConfig*](../interfaces/iconfig.iconfig-1.md) | [*IConfig*](../interfaces/iconfig.iconfig-1.md) |
`TAuthToken` | [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md) | [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md) |
`TDBConfig` | - | *any* |
`TDBConnectionAPI` | - | *any* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | The application name   |
`configPath` | *string* | The directory where bt-config.json and bt-local-config.json can be found. Defaults to current working directory.    |

**Returns:** [*Application*](application.application-1.md)<TConfig, TAuthToken, TDBConfig, TDBConnectionAPI\>

Defined in: [src/Application.ts:57](https://github.com/breautek/storm/blob/0cbae4b/src/Application.ts#L57)

## Properties

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

### \_buildArgOptions

▸ `Protected`**_buildArgOptions**(`program`: *CommanderStatic*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`program` | *CommanderStatic* |

**Returns:** *void*

Defined in: [src/Application.ts:200](https://github.com/breautek/storm/blob/0cbae4b/src/Application.ts#L200)

___

### \_initLogger

▸ `Protected`**_initLogger**(`config`: TConfig): *Logger*

#### Parameters:

Name | Type |
------ | ------ |
`config` | TConfig |

**Returns:** *Logger*

Defined in: [src/Application.ts:165](https://github.com/breautek/storm/blob/0cbae4b/src/Application.ts#L165)

___

### \_initialize

▸ `Protected`**_initialize**(`config`: TConfig): *Promise*<*void*\>

#### Parameters:

Name | Type |
------ | ------ |
`config` | TConfig |

**Returns:** *Promise*<*void*\>

Defined in: [src/Application.ts:161](https://github.com/breautek/storm/blob/0cbae4b/src/Application.ts#L161)

___

### addListener

▸ **addListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Application*](application.application-1.md)<TConfig, TAuthToken, TDBConfig, TDBConnectionAPI\>

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Application*](application.application-1.md)<TConfig, TAuthToken, TDBConfig, TDBConnectionAPI\>

Defined in: node_modules/@types/node/events.d.ts:62

___

### attachHandler

▸ **attachHandler**(`path`: *string*, `HandlerClass`: [*IHandler*](../interfaces/ihandler.ihandler-1.md)): *void*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`path` | *string* | The URL API path. E.g. /api/myService/myCommand/   |
`HandlerClass` | [*IHandler*](../interfaces/ihandler.ihandler-1.md) | The concrete class (not the instance) of Handler to be used for this API.    |

**Returns:** *void*

Defined in: [src/Application.ts:219](https://github.com/breautek/storm/blob/0cbae4b/src/Application.ts#L219)

___

### attachHandlers

▸ `Protected` `Abstract`**attachHandlers**(): *Promise*<*void*\>

Subclasses are expected to attach the API handlers for their service. This will be invoked during application startup.

**Returns:** *Promise*<*void*\>

Promise<void>

Defined in: [src/Application.ts:256](https://github.com/breautek/storm/blob/0cbae4b/src/Application.ts#L256)

___

### close

▸ **close**(): *Promise*<*void*\>

**Returns:** *Promise*<*void*\>

Defined in: [src/Application.ts:239](https://github.com/breautek/storm/blob/0cbae4b/src/Application.ts#L239)

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

### getCmdLineArgs

▸ **getCmdLineArgs**(): TConfig

**Returns:** TConfig

command line arguments

Defined in: [src/Application.ts:336](https://github.com/breautek/storm/blob/0cbae4b/src/Application.ts#L336)

___

### getConfig

▸ **getConfig**(): TConfig

**Returns:** TConfig

the config object.

Defined in: [src/Application.ts:293](https://github.com/breautek/storm/blob/0cbae4b/src/Application.ts#L293)

___

### getDB

▸ **getDB**(): [*Database*](database.database-1.md)<TDBConfig, TDBConnectionAPI\>

**Returns:** [*Database*](database.database-1.md)<TDBConfig, TDBConnectionAPI\>

the database pool. This will need to be casted based on your preferred database dialect.

Defined in: [src/Application.ts:329](https://github.com/breautek/storm/blob/0cbae4b/src/Application.ts#L329)

___

### getLogger

▸ **getLogger**(): *Logger*

**Returns:** *Logger*

Defined in: [src/Application.ts:169](https://github.com/breautek/storm/blob/0cbae4b/src/Application.ts#L169)

___

### getMaxListeners

▸ **getMaxListeners**(): *number*

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:69

___

### getName

▸ **getName**(): *string*

**Returns:** *string*

the application name

Defined in: [src/Application.ts:282](https://github.com/breautek/storm/blob/0cbae4b/src/Application.ts#L282)

___

### getPort

▸ **getPort**(): *number*

**Returns:** *number*

Defined in: [src/Application.ts:173](https://github.com/breautek/storm/blob/0cbae4b/src/Application.ts#L173)

___

### getProgram

▸ **getProgram**(): *CommanderStatic*

**Returns:** *CommanderStatic*

Defined in: [src/Application.ts:202](https://github.com/breautek/storm/blob/0cbae4b/src/Application.ts#L202)

___

### getRequestSizeLimit

▸ **getRequestSizeLimit**(): *number*

The maximum size limit for incoming requests that this service needs to handle.

**Returns:** *number*

Defined in: [src/Application.ts:209](https://github.com/breautek/storm/blob/0cbae4b/src/Application.ts#L209)

___

### getTokenManager

▸ **getTokenManager**(): [*TokenManager*](tokenmanager.tokenmanager-1.md)<TAuthToken\>

**Returns:** [*TokenManager*](tokenmanager.tokenmanager-1.md)<TAuthToken\>

the token manager

Defined in: [src/Application.ts:322](https://github.com/breautek/storm/blob/0cbae4b/src/Application.ts#L322)

___

### initDB

▸ `Protected`**initDB**(`config`: TConfig): *Promise*<[*Database*](database.database-1.md)<TDBConfig, TDBConnectionAPI\>\>

Subclasses are expected to override this to configure their database setup, if the service uses a database.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`config` | TConfig | The bt-config object    |

**Returns:** *Promise*<[*Database*](database.database-1.md)<TDBConfig, TDBConnectionAPI\>\>

Defined in: [src/Application.ts:365](https://github.com/breautek/storm/blob/0cbae4b/src/Application.ts#L365)

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

### loadConfig

▸ **loadConfig**(`path`: *string*): *Promise*<TConfig\>

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`path` | *string* | The directory path that contains bt-config.json and bt-local-config.json    |

**Returns:** *Promise*<TConfig\>

Defined in: [src/Application.ts:262](https://github.com/breautek/storm/blob/0cbae4b/src/Application.ts#L262)

___

### off

▸ **off**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Application*](application.application-1.md)<TConfig, TAuthToken, TDBConfig, TDBConnectionAPI\>

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Application*](application.application-1.md)<TConfig, TAuthToken, TDBConfig, TDBConnectionAPI\>

Defined in: node_modules/@types/node/events.d.ts:66

___

### on

▸ **on**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Application*](application.application-1.md)<TConfig, TAuthToken, TDBConfig, TDBConnectionAPI\>

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Application*](application.application-1.md)<TConfig, TAuthToken, TDBConfig, TDBConnectionAPI\>

Defined in: node_modules/@types/node/events.d.ts:63

___

### onBeforeReady

▸ `Protected`**onBeforeReady**(): *void*

**Returns:** *void*

Defined in: [src/Application.ts:369](https://github.com/breautek/storm/blob/0cbae4b/src/Application.ts#L369)

___

### onConfigLoad

▸ `Protected`**onConfigLoad**(`config`: TConfig): *void*

Invoked once the config has been loaded and ready to be used.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`config` | TConfig | The config object (as defined in bt-config.json/bt-local-config.json)    |

**Returns:** *void*

Defined in: [src/Application.ts:309](https://github.com/breautek/storm/blob/0cbae4b/src/Application.ts#L309)

___

### onReady

▸ `Protected`**onReady**(): *void*

Invoked when the application is considered ready for operation.

**Returns:** *void*

Defined in: [src/Application.ts:374](https://github.com/breautek/storm/blob/0cbae4b/src/Application.ts#L374)

___

### once

▸ **once**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Application*](application.application-1.md)<TConfig, TAuthToken, TDBConfig, TDBConnectionAPI\>

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Application*](application.application-1.md)<TConfig, TAuthToken, TDBConfig, TDBConnectionAPI\>

Defined in: node_modules/@types/node/events.d.ts:64

___

### prependListener

▸ **prependListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Application*](application.application-1.md)<TConfig, TAuthToken, TDBConfig, TDBConnectionAPI\>

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Application*](application.application-1.md)<TConfig, TAuthToken, TDBConfig, TDBConnectionAPI\>

Defined in: node_modules/@types/node/events.d.ts:75

___

### prependOnceListener

▸ **prependOnceListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Application*](application.application-1.md)<TConfig, TAuthToken, TDBConfig, TDBConnectionAPI\>

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Application*](application.application-1.md)<TConfig, TAuthToken, TDBConfig, TDBConnectionAPI\>

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

▸ **removeAllListeners**(`event?`: *string* \| *symbol*): [*Application*](application.application-1.md)<TConfig, TAuthToken, TDBConfig, TDBConnectionAPI\>

#### Parameters:

Name | Type |
------ | ------ |
`event?` | *string* \| *symbol* |

**Returns:** [*Application*](application.application-1.md)<TConfig, TAuthToken, TDBConfig, TDBConnectionAPI\>

Defined in: node_modules/@types/node/events.d.ts:67

___

### removeListener

▸ **removeListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Application*](application.application-1.md)<TConfig, TAuthToken, TDBConfig, TDBConnectionAPI\>

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Application*](application.application-1.md)<TConfig, TAuthToken, TDBConfig, TDBConnectionAPI\>

Defined in: node_modules/@types/node/events.d.ts:65

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*Application*](application.application-1.md)<TConfig, TAuthToken, TDBConfig, TDBConnectionAPI\>

#### Parameters:

Name | Type |
------ | ------ |
`n` | *number* |

**Returns:** [*Application*](application.application-1.md)<TConfig, TAuthToken, TDBConfig, TDBConnectionAPI\>

Defined in: node_modules/@types/node/events.d.ts:68

___

### setTokenManager

▸ **setTokenManager**(`tokenManager`: [*TokenManager*](tokenmanager.tokenmanager-1.md)<TAuthToken\>): *void*

Sets the TokenManager to be used for authentication.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`tokenManager` | [*TokenManager*](tokenmanager.tokenmanager-1.md)<TAuthToken\> |     |

**Returns:** *void*

Defined in: [src/Application.ts:315](https://github.com/breautek/storm/blob/0cbae4b/src/Application.ts#L315)

___

### shouldListen

▸ **shouldListen**(): *boolean*

**Returns:** *boolean*

true if the Application should bind to an IP address

Defined in: [src/Application.ts:300](https://github.com/breautek/storm/blob/0cbae4b/src/Application.ts#L300)

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
