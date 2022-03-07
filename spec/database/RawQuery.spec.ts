
import {
    MockApplication
} from '../support/TestApplication';
import {RawQuery} from '../../src/RawQuery';
import { MySQLConnection } from '../../src/MySQLConnection';

describe('RawQuery', () => {

    let mockAPI: any = null;
    let conn: MySQLConnection = null;

    let app: MockApplication = null;

    let setup = (done: any) => {
        process.argv = [];
        app = new MockApplication();
        app.on('ready', () => {
            done();
        });
    };

    let deconstruct = (done: any) => {
        app.close().then(() => {
            app = null;
            done();
        });
    };

    beforeAll(setup);
    afterAll(deconstruct);

    beforeEach(() => {
        mockAPI = {
            config: jasmine.createSpy('config'),
            query: jasmine.createSpy('query').and.returnValue({sql: 'test query'}),
            stream: jasmine.createSpy('stream'),
            release: jasmine.createSpy('release')
        };
        conn = new MySQLConnection(mockAPI, 'test stack', true);
    });

    it('RawQuery', async () => {
        let query: RawQuery<any, any> = new RawQuery('SELECT 1');
        expect(query.getQuery(conn)).toBe('SELECT 1');
    });
});
