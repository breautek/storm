[@breautek/storm](../README.md) / [api](../modules/api.md) / [formidable](../modules/api.formidable.md) / File

# Interface: File

[api](../modules/api.md).[formidable](../modules/api.formidable.md).File

## Table of contents

### Properties

- [hash](api.formidable.file.md#hash)
- [lastModifiedDate](api.formidable.file.md#lastmodifieddate)
- [name](api.formidable.file.md#name)
- [path](api.formidable.file.md#path)
- [size](api.formidable.file.md#size)
- [type](api.formidable.file.md#type)

### Methods

- [toJSON](api.formidable.file.md#tojson)
- [toString](api.formidable.file.md#tostring)

## Properties

### hash

• `Optional` **hash**: `string`

If `options.hash` calculation was set, you can read the hex digest out of this var.

#### Defined in

node_modules/@types/formidable/index.d.ts:232

___

### lastModifiedDate

• `Optional` **lastModifiedDate**: `Date`

A Date object (or `null`) containing the time this file was last written to. Mostly here for
compatibility with the [W3C File API Draft](http://dev.w3.org/2006/webapi/FileAPI/).

#### Defined in

node_modules/@types/formidable/index.d.ts:227

___

### name

• **name**: `string`

The name this file had according to the uploading client.

#### Defined in

node_modules/@types/formidable/index.d.ts:216

___

### path

• **path**: `string`

The path this file is being written to. You can modify this in the `'fileBegin'` event in case
you are unhappy with the way formidable generates a temporary path for your files.

#### Defined in

node_modules/@types/formidable/index.d.ts:211

___

### size

• **size**: `number`

The size of the uploaded file in bytes. If the file is still being uploaded (see `'fileBegin'`
event), this property says how many bytes of the file have been written to disk yet.

#### Defined in

node_modules/@types/formidable/index.d.ts:205

___

### type

• **type**: `string`

The mime type of this file, according to the uploading client.

#### Defined in

node_modules/@types/formidable/index.d.ts:221

## Methods

### toJSON

▸ **toJSON**(): [`FileJSON`](api.formidable.filejson.md)

This method returns a JSON-representation of the file, allowing you to JSON.stringify() the
file which is useful for logging and responding to requests.

**`link`** https://github.com/node-formidable/formidable#filetojson

#### Returns

[`FileJSON`](api.formidable.filejson.md)

#### Defined in

node_modules/@types/formidable/index.d.ts:240

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@types/formidable/index.d.ts:242
