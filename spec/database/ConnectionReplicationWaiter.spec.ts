
import {MockApplication} from '../support/TestApplication';
import {ConnectionReplicationWaiter} from '../../src/private/ConnectionReplicationWaiter';
import {MockConnection} from '../support/MockConnection';
import { TimeoutError } from '../../src/TimeoutError';

describe('ConnectionReplicationWaiter', () => {
    let app: MockApplication = null;

    beforeAll(async () => {
        process.argv = [];
        app = new MockApplication();
        await app.start();
    });

    afterAll(async () => {
        await app.close();
    });

    it('will skip on master connections', async () => {
        let conn: MockConnection = new MockConnection(false, new Error().stack);

        let spy = jest.spyOn(conn, 'isReadOnly');

        let waiter: ConnectionReplicationWaiter = new ConnectionReplicationWaiter(conn);
        await waiter.wait(null);

        expect(spy).toHaveBeenCalled();
    });

    it('will timeout after 1 second', async () => {
        let conn: MockConnection = new MockConnection(true, new Error().stack);
        let waiter: ConnectionReplicationWaiter = new ConnectionReplicationWaiter(conn);
        
        await expect(waiter.wait({
            page: 2,
            position: 1
        }, 1000)).rejects.toBeInstanceOf(TimeoutError);
    });

    it('will sleep for 1 second in between retries', async () => {
        let conn: MockConnection = new MockConnection(true, new Error().stack);
        let waiter: ConnectionReplicationWaiter = new ConnectionReplicationWaiter(conn, 1000);

        let spy = jest.spyOn((waiter as any), '$sleep');

        let p: Promise<void> = waiter.wait({
            page: 2,
            position: 1
        });

        await new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                expect(spy).toHaveBeenCalledWith(1000);
                conn.pos.page++;
                resolve();
            }, 0);
        });

        await p;
    });
});
