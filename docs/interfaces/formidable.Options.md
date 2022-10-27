[@breautek/storm](../README.md) / [formidable](../modules/formidable.md) / Options

# Interface: Options

[formidable](../modules/formidable.md).Options

## Table of contents

### Properties

- [allowEmptyFiles](formidable.Options.md#allowemptyfiles)
- [enabledPlugins](formidable.Options.md#enabledplugins)
- [encoding](formidable.Options.md#encoding)
- [fileWriteStreamHandler](formidable.Options.md#filewritestreamhandler)
- [hash](formidable.Options.md#hash)
- [keepExtensions](formidable.Options.md#keepextensions)
- [maxFields](formidable.Options.md#maxfields)
- [maxFieldsSize](formidable.Options.md#maxfieldssize)
- [maxFileSize](formidable.Options.md#maxfilesize)
- [minFileSize](formidable.Options.md#minfilesize)
- [multiples](formidable.Options.md#multiples)
- [uploadDir](formidable.Options.md#uploaddir)

## Properties

### allowEmptyFiles

• `Optional` **allowEmptyFiles**: `boolean`

allow upload empty files

**`Default`**

true

#### Defined in

node_modules/@types/formidable/index.d.ts:113

___

### enabledPlugins

• `Optional` **enabledPlugins**: `string`[]

#### Defined in

node_modules/@types/formidable/index.d.ts:173

___

### encoding

• `Optional` **encoding**: [`BufferEncoding`](../modules/formidable.md#bufferencoding)

sets encoding for incoming form fields

**`Default`**

'utf-8'

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

**`Default`**

null

##### Returns

`void`

#### Defined in

node_modules/@types/formidable/index.d.ts:162

___

### hash

• `Optional` **hash**: `string` \| ``false``

include checksums calculated for incoming files, set this to some hash algorithm, see
crypto.createHash for available algorithms

**`Default`**

false

#### Defined in

node_modules/@types/formidable/index.d.ts:149

___

### keepExtensions

• `Optional` **keepExtensions**: `boolean`

to include the extensions of the original files or not

**`Default`**

false

#### Defined in

node_modules/@types/formidable/index.d.ts:106

___

### maxFields

• `Optional` **maxFields**: `number`

limit the number of fields, set 0 for unlimited

**`Default`**

1000

#### Defined in

node_modules/@types/formidable/index.d.ts:134

___

### maxFieldsSize

• `Optional` **maxFieldsSize**: `number`

limit the amount of memory all fields together (except files) can allocate in bytes

**`Default`**

20 * 1024 * 1024

#### Defined in

node_modules/@types/formidable/index.d.ts:141

___

### maxFileSize

• `Optional` **maxFileSize**: `number`

limit the size of uploaded file

**`Default`**

200 * 1024 * 1024

#### Defined in

node_modules/@types/formidable/index.d.ts:127

___

### minFileSize

• `Optional` **minFileSize**: `number`

the minium size of uploaded file

**`Default`**

1

#### Defined in

node_modules/@types/formidable/index.d.ts:120

___

### multiples

• `Optional` **multiples**: `boolean`

when you call the .parse method, the files argument (of the callback) will contain arrays of
files for inputs which submit multiple files using the HTML5 multiple attribute. Also, the
fields argument will contain arrays of values for fields that have names ending with '[]'

**`Default`**

false

#### Defined in

node_modules/@types/formidable/index.d.ts:171

___

### uploadDir

• `Optional` **uploadDir**: `string`

the directory for placing file uploads in. You can move them later by using fs.rename()

**`Default`**

os.tmpdir()

#### Defined in

node_modules/@types/formidable/index.d.ts:99
