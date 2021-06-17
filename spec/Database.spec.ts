
import {
    MockApplication
} from './support/TestApplication';
import { DatabaseConnection } from '../src/DatabaseConnection';

describe('Database', () => {
    let app: MockApplication = null;

    beforeAll((done) => {
        process.argv = [];
        app = new MockApplication();
        app.on('ready', () => {
            done();
        });
    });

    afterAll((done) => {
        app.close().then(() => {
            app = null;
            done();
        });
    });

    it('has timeout', (done) => {
        app.getDB().getConnection().then((connection: DatabaseConnection<any>) => {
            expect(connection.getTimeout()).toBe(3600000);
            connection.close();
            done();
        }).catch((error: any) => {
            fail(error);
        });
    });
});
