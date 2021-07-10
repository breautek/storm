[@breautek/storm](../README.md) / [api](../modules/api.md) / [formidable](../modules/api.formidable.md) / Options

# Interface: Options

[api](../modules/api.md).[formidable](../modules/api.formidable.md).Options

## Table of contents

### Properties

- [allowEmptyFiles](api.formidable.options.md#allowemptyfiles)
- [enabledPlugins](api.formidable.options.md#enabledplugins)
- [encoding](api.formidable.options.md#encoding)
- [fileWriteStreamHandler](api.formidable.options.md#filewritestreamhandler)
- [hash](api.formidable.options.md#hash)
- [keepExtensions](api.formidable.options.md#keepextensions)
- [maxFields](api.formidable.options.md#maxfields)
- [maxFieldsSize](api.formidable.options.md#maxfieldssize)
- [maxFileSize](api.formidable.options.md#maxfilesize)
- [minFileSize](api.formidable.options.md#minfilesize)
- [multiples](api.formidable.options.md#multiples)
- [uploadDir](api.formidable.options.md#uploaddir)

## Properties

### allowEmptyFiles

• `Optional` **allowEmptyFiles**: `boolean`

allow upload empty files

**`default`** true

#### Defined in

node_modules/@types/formidable/index.d.ts:113

___

### enabledPlugins

• `Optional` **enabledPlugins**: `string`[]

#### Defined in

node_modules/@types/formidable/index.d.ts:173

___

### encoding

• `Optional` **encoding**: [`BufferEncoding`](../modules/api.formidable.md#bufferencoding)

sets encoding for incoming form fields

**`default`** 'utf-8'

#### Defined in

node_modules/@types/formidable/index.d.ts:92

___

### fileWriteStreamHandler

• `Optional` **fileWriteStreamHandler**: () => `void`

#### Type declaration

▸ (): `void`

which by default writes to host machine file system every file parsed; The function should
return an instance of a Writable stream that will receive the uploaded file data. With this
option, you can have any custom behavior regarding where the uploaded file data will be
streamed for. If you are looking to write the file uploaded in other types of cloud storages
(AWS S3, Azure blob storage, Google cloud storage) or private file storage, this is the option
you're looking for. When this option is defined the default behavior of writing the file in the
host machine file system is lost.

##### Returns

`void`

#### Defined in

node_modules/@types/formidable/index.d.ts:162

___

### hash

• `Optional` **hash**: `string` \| ``false``

include checksums calculated for incoming files, set this to some hash algorithm, see
crypto.createHash for available algorithms

**`default`** false

#### Defined in

node_modules/@types/formidable/index.d.ts:149

___

### keepExtensions

• `Optional` **keepExtensions**: `boolean`

to include the extensions of the original files or not

**`default`** false

#### Defined in

node_modules/@types/formidable/index.d.ts:106

___

### maxFields

• `Optional` **maxFields**: `number`

limit the number of fields, set 0 for unlimited

**`default`** 1000

#### Defined in

node_modules/@types/formidable/index.d.ts:134

___

### maxFieldsSize

• `Optional` **maxFieldsSize**: `number`

limit the amount of memory all fields together (except files) can allocate in bytes

**`default`** 20 * 1024 * 1024

#### Defined in

node_modules/@types/formidable/index.d.ts:141

___

### maxFileSize

• `Optional` **maxFileSize**: `number`

limit the size of uploaded file

**`default`** 200 * 1024 * 1024

#### Defined in

node_modules/@types/formidable/index.d.ts:127

___

### minFileSize

• `Optional` **minFileSize**: `number`

the minium size of uploaded file

**`default`** 1

#### Defined in

node_modules/@types/formidable/index.d.ts:120

___

### multiples

• `Optional` **multiples**: `boolean`

when you call the .parse method, the files argument (of the callback) will contain arrays of
files for inputs which submit multiple files using the HTML5 multiple attribute. Also, the
fields argument will contain arrays of values for fields that have names ending with '[]'

**`default`** false

#### Defined in

node_modules/@types/formidable/index.d.ts:171

___

### uploadDir

• `Optional` **uploadDir**: `string`

the directory for placing file uploads in. You can move them later by using fs.rename()

**`default`** os.tmpdir()

#### Defined in

node_modules/@types/formidable/index.d.ts:99
