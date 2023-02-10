
# Overview

This document describes high overview of breaking changes in between major versions. View the [CHANGELOG.md](./CHANGELOG.md) for more granular changes at the commit level.

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
