[@breautek/storm](../README.md) / [BackendAuthenticationMiddleware](../modules/backendauthenticationmiddleware.md) / BackendAuthenticationMiddleware

# Class: BackendAuthenticationMiddleware

[BackendAuthenticationMiddleware](../modules/backendauthenticationmiddleware.md).BackendAuthenticationMiddleware

A base authentication strategy that handles 90% of the authentication process.
This will verify that the token hasn't been manipulated or tainted.
The authenticate API must be implemented by subclasses to further validate the token data
for their specific use cases.

## Hierarchy

* **BackendAuthenticationMiddleware**

## Table of contents

### Constructors

- [constructor](backendauthenticationmiddleware.backendauthenticationmiddleware-1.md#constructor)

### Methods

- [execute](backendauthenticationmiddleware.backendauthenticationmiddleware-1.md#execute)

## Constructors

### constructor

\+ **new BackendAuthenticationMiddleware**(): [*BackendAuthenticationMiddleware*](backendauthenticationmiddleware.backendauthenticationmiddleware-1.md)

**Returns:** [*BackendAuthenticationMiddleware*](backendauthenticationmiddleware.backendauthenticationmiddleware-1.md)

Defined in: [src/BackendAuthenticationMiddleware.ts:34](https://github.com/breautek/storm/blob/af5cad8/src/BackendAuthenticationMiddleware.ts#L34)

## Methods

### execute

▸ **execute**(`request`: [*Request*](request.request-1.md)<*any*, [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md)\>, `response`: [*Response*](response.response-1.md)<*any*, *string* \| Error \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)\>, `options?`: *any*): *Promise*<*any*\>

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`request` | [*Request*](request.request-1.md)<*any*, [*IAuthTokenData*](../interfaces/iauthtokendata.iauthtokendata-1.md)\> |  |
`response` | [*Response*](response.response-1.md)<*any*, *string* \| Error \| [*IErrorResponse*](../interfaces/stormerror.ierrorresponse.md)\> |  |
`options?` | *any* | Arbituary object containing any relevant information used for authentication.    |

**Returns:** *Promise*<*any*\>

Defined in: [src/BackendAuthenticationMiddleware.ts:47](https://github.com/breautek/storm/blob/af5cad8/src/BackendAuthenticationMiddleware.ts#L47)
