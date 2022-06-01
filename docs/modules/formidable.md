[@breautek/storm](../README.md) / formidable

# Namespace: formidable

## Table of contents

### Interfaces

- [EmitData](../interfaces/formidable.EmitData.md)
- [EventData](../interfaces/formidable.EventData.md)
- [Fields](../interfaces/formidable.Fields.md)
- [File](../interfaces/formidable.File.md)
- [FileJSON](../interfaces/formidable.FileJSON.md)
- [Files](../interfaces/formidable.Files.md)
- [Options](../interfaces/formidable.Options.md)
- [Part](../interfaces/formidable.Part.md)

### Type Aliases

- [BufferEncoding](formidable.md#bufferencoding)
- [DefaultOptions](formidable.md#defaultoptions)
- [EnabledPlugins](formidable.md#enabledplugins)
- [EventNames](formidable.md#eventnames)
- [MappedParsers](formidable.md#mappedparsers)
- [Plugin](formidable.md#plugin)
- [PluginFunction](formidable.md#pluginfunction)
- [Plugins](formidable.md#plugins)

## Type Aliases

### BufferEncoding

Ƭ **BufferEncoding**: ``"ascii"`` \| ``"base64"`` \| ``"binary"`` \| ``"hex"`` \| ``"latin1"`` \| ``"ucs-2"`` \| ``"ucs2"`` \| ``"utf-8"`` \| ``"utf16le"`` \| ``"utf8"``

#### Defined in

node_modules/@types/formidable/index.d.ts:17

___

### DefaultOptions

Ƭ **DefaultOptions**: `Required`<`Omit`<[`Options`](../interfaces/formidable.Options.md), ``"enabledPlugins"``\>\> & { `enabledPlugins`: [`EnabledPlugins`](formidable.md#enabledplugins)  }

#### Defined in

node_modules/@types/formidable/index.d.ts:272

___

### EnabledPlugins

Ƭ **EnabledPlugins**: { [P in Plugin]: PluginFunction }

#### Defined in

node_modules/@types/formidable/index.d.ts:276

___

### EventNames

Ƭ **EventNames**: ``"aborted"`` \| ``"end"`` \| ``"error"`` \| ``"field"`` \| ``"file"`` \| ``"fileBegin"`` \| ``"headerEnd"`` \| ``"headerField"`` \| ``"headersEnd"`` \| ``"headerValue"`` \| ``"partBegin"`` \| ``"partData"`` \| ``"progress"``

#### Defined in

node_modules/@types/formidable/index.d.ts:29

___

### MappedParsers

Ƭ **MappedParsers**: { [P in keyof typeof parsers]: typeof parsers[P] }

#### Defined in

node_modules/@types/formidable/index.d.ts:264

___

### Plugin

Ƭ **Plugin**: keyof { [K in Plugins[number]]: K }

#### Defined in

node_modules/@types/formidable/index.d.ts:270

___

### PluginFunction

Ƭ **PluginFunction**: (`formidable`: `Formidable`, `options`: `Partial`<[`Options`](../interfaces/formidable.Options.md)\>) => `void`

#### Type declaration

▸ (`formidable`, `options`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `formidable` | `Formidable` |
| `options` | `Partial`<[`Options`](../interfaces/formidable.Options.md)\> |

##### Returns

`void`

#### Defined in

node_modules/@types/formidable/index.d.ts:262

___

### Plugins

Ƭ **Plugins**: [``"octetstream"``, ``"querystring"``, ``"multipart"``, ``"json"``]

#### Defined in

node_modules/@types/formidable/index.d.ts:268
