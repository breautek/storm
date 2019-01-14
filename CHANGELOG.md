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
