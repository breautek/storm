
import {
    MockApplication
} from '../support/TestApplication';
import {RawQuery} from '../../src/RawQuery';
import { MySQLConnection } from '../../src/MySQLConnection';

describe('RawQuery', () => {

    let mockAPI: any = null;
    let conn: MySQLConnection = null;

    let app: MockApplication = null;

    beforeAll(async () => {
        process.argv = [];
        app = new MockApplication();
        await app.start();
    });
    afterAll(async () => {
        await app.close();
    });

    beforeEach(() => {
        mockAPI = {
            config: jest.fn(),
            query: jest.fn().mockReturnValue({sql: 'test query'}),
            stream: jest.fn(),
            release: jest.fn()
        };
        conn = new MySQLConnection(mockAPI, 'test stack', true);
    });

    it('RawQuery', async () => {
        let query: RawQuery<any, any> = new RawQuery('SELECT 1');
        expect(query.getQuery(conn)).toBe('SELECT 1');
    });
});
