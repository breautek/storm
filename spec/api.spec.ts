
import * as api from '../src/api';

describe('Public API', () => {

    it('Application', () => {
        expect(api.Application).toBeTruthy();
    });

    it('ConfigLoader', () => {
        expect(api.ConfigLoader).toBeTruthy();
    });

    it('Database', () => {
        expect(api.Database).toBeTruthy();
    });

    it('DatabaseConnection', () => {
        expect(api.DatabaseConnection).toBeTruthy();
    });

    it('ErrorCode', () => {
        expect(api.ErrorCode).toBeTruthy();
    });

    it('ExpiredTokenError', () => {
        expect(api.ExpiredTokenError).toBeTruthy();
    });

    it('InvalidCredentials', () => {
        expect(api.InvalidCredentialsError).toBeTruthy();
    });

    it('InvalidValueError', () => {
        expect(api.InvalidValueError).toBeTruthy();
    });

    it('ManagedDatabaseConnection', () => {
        expect(api.ManagedDatabaseConnection).toBeTruthy();
    });

    it('MissingParameterError', () => {
        expect(api.MissingParameterError).toBeTruthy();
    });

    it('MySQLConnection', () => {
        expect(api.MySQLConnection).toBeTruthy();
    });

    it('MySQLDatabase', () => {
        expect(api.MySQLDatabase).toBeTruthy();
    });

    it('StormError', () => {
        expect(api.StormError).toBeTruthy();
    });

    it('UnauthorizedAccessError', () => {
        expect(api.UnauthorizedAccessError).toBeTruthy();
    });

    it('Query', () => {
        expect(api.Query).toBeTruthy();
    });
});
