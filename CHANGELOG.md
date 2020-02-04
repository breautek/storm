
# Changelog

## 1.2.0
- feat: `Handler` generics for defining request & response types.
- feat: `ManagedDatabaseConnection will now accept `IDatabaseConnection` objects instead of strictly `DatabaseConnection` objects.
- Dev-Dep: `nyc@14.1.1` to `nyc@15.0.0`
- Dev-Dep: `ts-node@8.4.1` to `ts-node@8.5.4`
- Dev-Dep: `typescript@3.6.3` to `typescript@3.7.4`
- Dev-Dep: `eslint@6.5.1` to `eslint@6.8.0`
- Dev-Dep: `@typescript-eslint/eslint-plugin@2.3.2` to `@typescript-eslint/eslint-plugin@2.15.0`
- Dev-Dep: `@typescript-eslint/parser@2.3.2` to `@typescript-eslint/parser@2.15.0`
- Dev-Dep: `@types/jasmine@3.4.2` to `@types/jasmine@3.5.0`
- Dep: `@types/jsonwebtoken@8.3.4` to `@types/jsonwebtoken@8.3.5`
- Dep: `@types/express@4.17.1` to `@types/express@4.17.2`
- Dep: `@types/mysql@2.15.6` to `@types/mysql@2.15.8`
- Dep: `@types/uuid@3.4.4` to `@types/uuid@3.4.6`
- Dep: Reset `package-lock` so sub-dependencies can be updated for vulnerability fixes.
- Deprecation: `Response.badRequest` is now marked as deprecated. Use the appropriate `StormError` object or `ResponseData` object.
- Deprecation: `Response.unauthorized` is now marked as deprecated. Use the appropriate `StormError` object or `ResponseData` object.
- Deprecation: `Response.forbidden` is now marked as deprecated. Use the appropriate `StormError` object or `ResponseData` object.
- Deprecation: `Response.conflict` is now marked as deprecated. Use the appropriate `StormError` object or `ResponseData` object.
- Deprecation: `Response.notFound` is now marked as deprecated. Use the appropriate `StormError` object or `ResponseData` object.
- Deprecation: `Response.internalError` is now marked as deprecated. Use the appropriate `StormError` object or `ResponseData` object.

## 1.1.3 (Jan 7, 2020)
- `DuplicateEntryError` slightly more customizable, allowing you to change the "name" part of the error message.

## 1.1.2 (November 3, 2019)
- `ManagedDatabaseConnection` now accepts `Query` objects.
- `IDatabaseConnection` now correctly accepts `Query` objects.

## 1.1.1 (November 2, 2019)
- Fixed `Query` class to allow for better future support

## 1.1.0 (October 29, 2019)
- Added `Logger.deprecateParameterType` method
- Added `Query` class.
- `DatabaseConnection.query(string) is now deprecated, and `DatabaseConnection.query(string, params)` is also deprecated. Instead, pass in an instance of `Query`. e.g: `DatabaseConnection.query(query)`

## 1.0.1 (October 11, 2019)
- Changed Database instantation stack to not have `Error` in the text.

## 1.0.0 (October 6, 2019)
#### BREAKING CHANGES
- `Application.getRequestSizeLimit` should not be overrided anymore. Use `request_size_limit` configuration property instead.
- `Handler.get/post/delete/put` APIs now should return `Promie<void>`.
- Several `StormError` classes have been renamed to always include `Error` in their name. Ie. `InvalidCredentials` is now `InvalidCredentialsError`.
- `Middleware` has been rewritten

#### Other notable changes
- `DatabaseConnection` improved error handling on `rollback`/`commit`/`startTransaction` APIs.
- Improved deprecation notices
- More than 80% unit test coverage has been written
- Improved documentation
- Improved lint

## 0.21.2 (September 22, 2019)
- Added `Logger.deprecateClass` method.
- Deprecated `MissingParameter` class. Use `MissingParameterError` instead.

## 0.21.1 (September 9, 2019)
- Removed usages of deprecated `StormError` APIs.

## 0.21.0 (September 5, 2019)
- Added `name` attribute to `IErrorResponse` interface.

## 0.20.1 (September 4, 2019)
- Added missing `LogSeverity` text tag

## 0.20.0 (September 4, 2019)
- Added `Logger.deprecate` method
- Deprecate `StormError.getDetails`, use `StormError.getPrivateDetails` instead.
- Deprecate `StormError.getAdditionalDetails`, use `StormError.getPublicDetails` instead.

## 0.19.4 (August 27, 2019)
- Updated dependency for vulnerability patches
- Stricter ESLint rules
- Updated UUID package

## 0.19.3 (July 19, 2019)
- Added "types" declaration in package.json

## 0.19.2 (July 17, 2019)
- Fixed forceClose optional parameter in IDatabaseConnection interface.

## 0.19.1 (July 17, 2019)
- Made ManagedDatabaseConnection contruction parameter optional.

## 0.19.0 (July 17, 2019)
- Added managed connections
- Migrated from TSLint to ESLint

## 0.18.4 (July 10, 2019)
- made Logger.log protected
- Ensure generated JWT tokens will be unique.

## 0.18.3 (July 8, 2019)
- Added setLogger method to Application

## 0.18.2 (July 4, 2019)
- Fixed 0.18.1 didn't build against the latest sources.

## 0.18.1 (July 4, 2019) - Broken
- Moved database timeout to be controlled via bt config

## 0.18.0 (June 28, 2019)
- Added options to TokenManager.verify

## 0.17.1 (June 22, 2019)
- Removed uncommon HTTP methods from Handler. This was never fully implemented to begin with.
- Fixed improper ExitCode from being passed on ConfigLoader error
- Several more tests have been added

## 0.17.0 (June 20, 2019)
- Added Stream support to DatabaseConnection

## 0.16.1 (June 19, 2019)
- Cleaned lib as 0.16.0 included old artifacts that is still importable

## 0.16.0 (June 19, 2019)
#### Breaking Changes
- All interfaces are now prefixed with an "I"... example "Config.ts" is now "IConfig.ts".
- The project is now lintified to enforce these rules.
- Some unit tests have been added, but still is a work in progress.
- Reason we are stil in version "0" is because I still consider this project in an alpha stage. The disclaimer of breaking changes may apply at anytime applies here.

#### Other notable changes
- Added an API to Application to close/stop listening.
- Several classes has been reworked so that they can be unit testable.

## 0.15.0
- Added optional forceClose flag to DatabaseConnection.close()

## 0.14.0 (May 23, 2019)
- Source Map support

## 0.13.0 (May 22, 2019)
- DatabaseQueryError added
- MySQLConnection will now reject using a DatabaseQueryError

## 0.12.5 (May 16, 2019)
- Fixed JsonWebTokenError handling

## 0.12.4 (April 25, 2019)
- Added onBeforeReady hook to Application, that fires just before the application starts listening for connections.

## 0.12.3 (April 10, 2019)
- Fixed regression bug

## 0.12.2 (April 10, 2019)
- Added shouldListen(): boolean hook to Application, allowing you to decide whether to bind to the IP address on startup, regardless of configuration. Defaults to true.

## 0.12.0 (February 22, 2019)
#### Breaking Changes
- Changed Response.error to do ResponseData/StormError check and otherwise wrap the error in an InternalError.
- Added Response.badRequest API, which is what Response.error used to be.

## 0.11.0 (January 31, 2019)
- Added isTransaction(): boolean as an abstract function to DatabaseConnection. Note that MySQLConnection already has this method implemented.

## 0.10.2 (January 15, 2019)
- Fixed regression bug from 0.10.1 where JWT verify would not return the proper status code back to the user.

## 0.10.1 (January 14, 2019)
- Fixed propagated errors via AuthenticationMiddleware.validate. Rejected errors if they should be presented to the user, should be a StormError, or ResponseData type. Otherwise the error will now be wrapped inside an InternalError and the error message will be logged, but not displayed to the client.

## 0.10.0 (January 8, 2019)
- Removed args package for Commander as a replacement

## 0.9.2 (January 7, 2019)
- Fixed nullable argv

## 0.8.3 (October 4, 2018)
- Added User Agent string to network logging

## 0.8.2 (October 4, 2018)
- Changed EntityNotFound error to return status code 404 instead of 400.

## 0.8.1 (September 24, 2018)
- Docs rebuild

## 0.8.0 (September 19, 2018)
- Added Config interface
- Added ServiceProvider
- Added Handler.getAccessToken(Request)

## 0.7.2
- Initial creation of CHANGELOG
