
# Overview

This document describes high overview of breaking changes in between major versions. View the [CHANGELOG.md](./CHANGELOG.md) for more granular changes at the commit level.

# 8.x -> 9.x

## Attaching Handlers

Attach handler now accepts an instance, not a class definition.

```typescript
// Old way
this.attachHandler('/api/section/v1/paging/sections/list/iri/', GetIRIByPage);

// New way
this.attachHandler('/api/section/v1/paging/sections/list/iri/', new GetIRIByPage(this));
```

## Handler Request/Response types

The types are now more restricted to things that can be serialized over the wire.
The types were also adjusted so that type `T` can be declared and you can either return `T` directly, or wrap it in a `ResponseData<T>`.

You don't need to explicitly declare that `ResponseData<T>` will be returned.

## IServiceHeaders

This interface has been removed it can replaced by Node's own `OutgoingHeaders` type, found inside the `http` package.

## Middlewares

The Storm middleware system is deprecated, but still supported for the time being.
Middlewares now need an instance of the `Application` class passed in.

## Transient dependency updates

- `@types/jsonwebtoken` was updated and included some breaking changes in types, which shouldn't affect application projects, but may affect library projects.
- `commander` was updated, no known breaking changes, but projects that uses the Commander API extensively may yield behaviour differences.

# 7.x -> 8.x

## Formidable

Formidable, the underlying library that Storm uses to handle form data, has a severe vulnerability allowing executing arbitrary code by crafting special filenames.

Storm has updated this package to a version that solves this vulnerability, but we are also moving across breaking changes. These breaking changes are exposed through our breaking API since Storm users will receive Formidable's `IFormData` object.

## NodeJS

Minimum NodeJS was previously set to 14.x and now is set to 20, the current LTS at the time of release.

# 5.x -> 6.x

## Application bootstrapping

Application now doesn't auto bootstrap during the constructor.
This created for an awkward API because during construction, asynchronous APIs were being done, and the constructor isn't
an async function.

Now there is a async `start` method to begin bootstrapping the application.

## Logger

`@arashi/logger` version 4.x is now needed which revamps how logging is done.

`Logger` has been renamed to `BaseLogger` and there is a new `Logger` class in it's place that behaves similar to the old logger.
`BaseLogger` is now a stream, which operates in object mode. Writable streams in object mode can piped to `BaseLogger` which will receive
an `ILogObject`. The new `Logger` is simply just a class that attaches a `ConsoleStream`, which takes the `ILogObject`, formats them for
console print.

`BaseLogger` no longer accepts a directory and no longer writes to a file on disk by default. However, a transform stream can be created
to convert the `ILogObject` into a buffer/string for a file stream.

Settings introduces a `cloudwatch` object that allows you to configure cloudwatch credentials, region, and log group and stream names.
If configured, a `CloudWatchStream` will be attached and will push log events directly into cloudwatch.

# 4.x -> 5.x

`DatabaseConnection` no longer accept strings for Queries. New `IQueryably` interface has been added and is what `DatabaseConnection` now accepts. The `Query` class implements `IQueryable` so if you have already refactored the code to use `Query` classes, then this change shouldn't affect you much.

Use `RawQuery` if you want to use a one-off artibrary query that you do not care to unit test.

NodeJS 14.x is now required.

# 3.x -> 4.x

My apologies, I forget about this document and I no longer remember the specific details surrouding the breaking change.

# 2.x -> 3.x

## Generic Handlers
​
Handlers are now genericized.
​
```typescript
class Handler<
	TApplication,
	TGetBody,
	TGetResponse,
	TPostBody,
	TPostResults,
	...
> {}
```
​
There is a generic type for each HTTP method, but we generally only use `GET` and `POST`.
By default, the types are a union type that accepts many things including strings, streams, `Error` / `StormError`, `ResponseData`, etc.

_Note_: Currently these types aren't that enforced and is used more as a self-documenting guide of the author's intent.

## Response object
​
The `Response` object is no longer exposed to handlers. There are a number of ways to control the response.
Below is a list of common paths and the new way of acheiving the same result.

Firstly, I'd recommend making the handler method an `async` method and all the new examples will assume the method is marked as `async`.
If not, then you'll need to convert it to the equivilant `Promise` calls.
​

|   Old Call   | New Call   |
|--------------|--------------|
|`response.success();` | `return;` |
|`response.success(obj);`|`return obj;`|
|`response.send(error);`|`throw error;`|
|`response.send(stream);`|`return stream;`|
|`response.setStatus(405);`| `let rdata: ResponseData();`<br />`rdata.setStatus(405);`<br />`return rdata;`|
|`response.setHeader('header', value);`|`let rdata: ResponseData();`<br />`rdata.setHeader('header', value);`<br />`return rdata;`|

Basically, now to turn data, you simply return the data as a promise result. If the data is relatively simple (such as a JSON serializable type) then it will be passed through to the response body.

If you want to stream a response from a source such as a secondary network request, database, or from the filesystem, simply return a readable stream.

If an error should be raised, simply throw/reject the `StormError`. If an error is thrown that is not a `StormError`, it will be wrapped around an `InternalError`, just like how the old `response.error` worked.

If you require more granular control over the response, then return a configured `ResponseData` object, which allows you to set the status, data, headers, etc. Anything that you can return can be set on the `ResponseData` object, including `StormError`.

## Application

Several internal hook methods intended to be used by the concrete class only were previously public. The following methods now are `protected` and been renamed accordingly.

|   Original Method | Renamed method    |
|-------------------|-------------------|
|  onConfigLoad     | _onConfigLoad     |
| initDB            | _initDB           |
| attachHandlers    | _attachHandlers   |
| onBeforeReadyAsync| _onBeforeReadyAsync|
| onReady           | _onReady          |
