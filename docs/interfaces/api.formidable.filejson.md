[@breautek/storm](../README.md) / [api](../modules/api.md) / [formidable](../modules/api.formidable.md) / FileJSON

# Interface: FileJSON

[api](../modules/api.md).[formidable](../modules/api.formidable.md).FileJSON

**`link`** https://github.com/node-formidable/formidable#file

## Hierarchy

- `Pick`<[`File`](api.formidable.file.md), ``"size"`` \| ``"path"`` \| ``"name"`` \| ``"type"`` \| ``"hash"``\>

  ↳ **`FileJSON`**

## Table of contents

### Properties

- [filename](api.formidable.filejson.md#filename)
- [hash](api.formidable.filejson.md#hash)
- [length](api.formidable.filejson.md#length)
- [mime](api.formidable.filejson.md#mime)
- [mtime](api.formidable.filejson.md#mtime)
- [name](api.formidable.filejson.md#name)
- [path](api.formidable.filejson.md#path)
- [size](api.formidable.filejson.md#size)
- [type](api.formidable.filejson.md#type)

## Properties

### filename

• **filename**: `string`

#### Defined in

node_modules/@types/formidable/index.d.ts:194

___

### hash

• `Optional` **hash**: `string`

If `options.hash` calculation was set, you can read the hex digest out of this var.

#### Inherited from

Pick.hash

#### Defined in

node_modules/@types/formidable/index.d.ts:232

___

### length

• **length**: `number`

#### Defined in

node_modules/@types/formidable/index.d.ts:195

___

### mime

• **mime**: `string`

#### Defined in

node_modules/@types/formidable/index.d.ts:196

___

### mtime

• **mtime**: `Date`

#### Defined in

node_modules/@types/formidable/index.d.ts:197

___

### name

• **name**: `string`

The name this file had according to the uploading client.

#### Inherited from

Pick.name

#### Defined in

node_modules/@types/formidable/index.d.ts:216

___

### path

• **path**: `string`

The path this file is being written to. You can modify this in the `'fileBegin'` event in case
you are unhappy with the way formidable generates a temporary path for your files.

#### Inherited from

Pick.path

#### Defined in

node_modules/@types/formidable/index.d.ts:211

___

### size

• **size**: `number`

The size of the uploaded file in bytes. If the file is still being uploaded (see `'fileBegin'`
event), this property says how many bytes of the file have been written to disk yet.

#### Inherited from

Pick.size

#### Defined in

node_modules/@types/formidable/index.d.ts:205

___

### type

• **type**: `string`

The mime type of this file, according to the uploading client.

#### Inherited from

Pick.type

#### Defined in

node_modules/@types/formidable/index.d.ts:221
