# 0.17.1 (June 22, 2019)
- Removed uncommon HTTP methods from Handler. This was never fully implemented to begin with.
- Fixed improper ExitCode from being passed on ConfigLoader error
- Several more tests have been added

# 0.17.0 (June 20, 2019)
- Added Stream support to DatabaseConnection

# 0.16.1 (June 19, 2019)
- Cleaned lib as 0.16.0 included old artifacts that is still importable

# 0.16.0 (June 19, 2019)
## Breaking Changes
- All interfaces are now prefixed with an "I"... example "Config.ts" is now "IConfig.ts".
- The project is now lintified to enforce these rules.
- Some unit tests have been added, but still is a work in progress.
- Reason we are stil in version "0" is because I still consider this project in an alpha stage. The disclaimer of breaking changes may apply at anytime applies here.

## Other notable changes
- Added an API to Application to close/stop listening.
- Several classes has been reworked so that they can be unit testable.

# 0.15.0
- Added optional forceClose flag to DatabaseConnection.close()

# 0.14.0 (May 23, 2019)
- Source Map support

# 0.13.0 (May 22, 2019)
- DatabaseQueryError added
- MySQLConnection will now reject using a DatabaseQueryError

# 0.12.5 (May 16, 2019)
- Fixed JsonWebTokenError handling

# 0.12.4 (April 25, 2019)
- Added onBeforeReady hook to Application, that fires just before the application starts listening for connections.

# 0.12.3 (April 10, 2019)
- Fixed regression bug

# 0.12.2 (April 10, 2019)
- Added shouldListen(): boolean hook to Application, allowing you to decide whether to bind to the IP address on startup, regardless of configuration. Defaults to true.

# 0.12.0 (February 22, 2019)
## Breaking Changes
- Changed Response.error to do ResponseData/StormError check and otherwise wrap the error in an InternalError.
- Added Response.badRequest API, which is what Response.error used to be.

# 0.11.0 (January 31, 2019)
- Added isTransaction(): boolean as an abstract function to DatabaseConnection. Note that MySQLConnection already has this method implemented.

# 0.10.2 (January 15, 2019)
- Fixed regression bug from 0.10.1 where JWT verify would not return the proper status code back to the user.

# 0.10.1 (January 14, 2019)
- Fixed propagated errors via AuthenticationMiddleware.validate. Rejected errors if they should be presented to the user, should be a StormError, or ResponseData type. Otherwise the error will now be wrapped inside an InternalError and the error message will be logged, but not displayed to the client.

# 0.10.0 (January 8, 2019)
- Removed args package for Commander as a replacement

# 0.9.2 (January 7, 2019)
- Fixed nullable argv

# 0.8.3 (October 4, 2018)
- Added User Agent string to network logging

# 0.8.2 (October 4, 2018)
- Changed EntityNotFound error to return status code 404 instead of 400.

# 0.8.1 (September 24, 2018)
- Docs rebuild

# 0.8.0 (September 19, 2018)
- Added Config interface
- Added ServiceProvider
- Added Handler.getAccessToken(Request)

# 0.7.2
- Initial creation of CHANGELOG
