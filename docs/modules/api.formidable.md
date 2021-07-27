[@breautek/storm](../README.md) / [api](api.md) / formidable

# Namespace: formidable

[api](api.md).formidable

## Table of contents

### Interfaces

- [EmitData](../interfaces/api.formidable.EmitData.md)
- [EventData](../interfaces/api.formidable.EventData.md)
- [Fields](../interfaces/api.formidable.Fields.md)
- [File](../interfaces/api.formidable.File.md)
- [FileJSON](../interfaces/api.formidable.FileJSON.md)
- [Files](../interfaces/api.formidable.Files.md)
- [Options](../interfaces/api.formidable.Options.md)
- [Part](../interfaces/api.formidable.Part.md)

### Type aliases

- [BufferEncoding](api.formidable.md#bufferencoding)
- [DefaultOptions](api.formidable.md#defaultoptions)
- [EnabledPlugins](api.formidable.md#enabledplugins)
- [EventNames](api.formidable.md#eventnames)
- [MappedParsers](api.formidable.md#mappedparsers)
- [Plugin](api.formidable.md#plugin)
- [PluginFunction](api.formidable.md#pluginfunction)
- [Plugins](api.formidable.md#plugins)

## Type aliases

### BufferEncoding

Ƭ **BufferEncoding**: ``"ascii"`` \| ``"base64"`` \| ``"binary"`` \| ``"hex"`` \| ``"latin1"`` \| ``"ucs-2"`` \| ``"ucs2"`` \| ``"utf-8"`` \| ``"utf16le"`` \| ``"utf8"``

#### Defined in

node_modules/@types/formidable/index.d.ts:17

___

### DefaultOptions

Ƭ **DefaultOptions**: `Required`<`Omit`<[`Options`](../interfaces/api.formidable.Options.md), ``"enabledPlugins"``\>\> & { `enabledPlugins`: [`EnabledPlugins`](api.formidable.md#enabledplugins)  }

#### Defined in

node_modules/@types/formidable/index.d.ts:272

___

### EnabledPlugins

Ƭ **EnabledPlugins**: { [P in Plugin]: PluginFunction}

#### Defined in

node_modules/@types/formidable/index.d.ts:276

___

### EventNames

Ƭ **EventNames**: ``"aborted"`` \| ``"end"`` \| ``"error"`` \| ``"field"`` \| ``"file"`` \| ``"fileBegin"`` \| ``"headerEnd"`` \| ``"headerField"`` \| ``"headersEnd"`` \| ``"headerValue"`` \| ``"partBegin"`` \| ``"partData"`` \| ``"progress"``

#### Defined in

node_modules/@types/formidable/index.d.ts:29

___

### MappedParsers

Ƭ **MappedParsers**: { [P in keyof typeof parsers]: typeof parsers[P]}

#### Defined in

node_modules/@types/formidable/index.d.ts:264

___

### Plugin

Ƭ **Plugin**: keyof { [K in Plugins[number]]: K}

#### Defined in

node_modules/@types/formidable/index.d.ts:270

___

### PluginFunction

Ƭ **PluginFunction**: (`formidable`: `Formidable`, `options`: `Partial`<[`Options`](../interfaces/api.formidable.Options.md)\>) => `void`

#### Type declaration

▸ (`formidable`, `options`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `formidable` | `Formidable` |
| `options` | `Partial`<[`Options`](../interfaces/api.formidable.Options.md)\> |

##### Returns

`void`

#### Defined in

node_modules/@types/formidable/index.d.ts:262

___

### Plugins

Ƭ **Plugins**: [``"octetstream"``, ``"querystring"``, ``"multipart"``, ``"json"``]

#### Defined in

node_modules/@types/formidable/index.d.ts:268
