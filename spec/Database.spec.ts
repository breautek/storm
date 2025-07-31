
import {
    MockApplication
} from './support/TestApplication';
import { DatabaseConnection } from '../src/DatabaseConnection';

describe('Database', () => {
    let app: MockApplication = null;

    beforeAll(async () => {
        process.argv = [];
        app = new MockApplication();
        await app.start();
    });

    afterAll(async () => {
        await app.close();
    });

    it('has timeout', (done) => {
        app.getDB().getConnection().then((connection: DatabaseConnection<any>) => {
            expect(connection.getTimeout()).toBe(3600000);
            void connection.close();
            done();
        }).catch((error: any) => {
            fail(error);
        });
    });
});
