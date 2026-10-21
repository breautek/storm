
jest.mock('prom-client');

import {
    MockApplication
} from '../support/TestApplication';
import {MySQLDatabase} from '../../src/MySQLDatabase';
import * as MySQL from 'mysql2';
import {EventEmitter} from 'events';
import { getInstance } from '../../src/instance';
import { DatabaseConnection } from '../../src/DatabaseConnection';
import { ConnectionReplicationWaiter } from '../../src/private/ConnectionReplicationWaiter';
import { MySQLConnection } from '../../src/MySQLConnection';

describe('MySQLDatabase', () => {
    let app: MockApplication = null;

    beforeAll(async () => {
        process.argv = [];
        app = new MockApplication();
        await app.start();
    });
    afterAll(async () => {
        await app.close();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    beforeEach(() => {
        jest.spyOn((DatabaseConnection.prototype as any), '$armLingerWarning').mockImplementation(() => {});
    });

    it('can construct', () => {
        expect(new MySQLDatabase()).toBeTruthy();
    });

    it('can escape', () => {
        let db: MySQLDatabase = new MySQLDatabase();
        expect(db.escape('SELECT * FROM test --')).toBe('\'SELECT * FROM test --\'');
    });

    it('add master', () => {
        let db: MySQLDatabase = new MySQLDatabase();
        let spy: jest.SpyInstance = jest.spyOn((db as any).$cluster, 'add').mockImplementation(() => {});

        let config: MySQL.PoolOptions = {};

        db.addMaster(config);

        expect(spy).toHaveBeenCalledWith('MASTER', config);
    });

    it('add slave', () => {
        let db: MySQLDatabase = new MySQLDatabase();
        let spy: jest.SpyInstance = jest.spyOn((db as any).$cluster, 'add').mockImplementation(() => {});

        let nodeID: string = 'test';
        let config: MySQL.PoolOptions = {};

        db.addSlave(nodeID, config);

        expect(spy).toHaveBeenCalledWith(expect.any(String), config);
    });

    it('remove node', () => {
        let db: MySQLDatabase = new MySQLDatabase();
        let spy: jest.SpyInstance = jest.spyOn((db as any).$cluster, 'remove').mockImplementation(() => {});

        db.removeMaster();

        expect(spy).toHaveBeenCalledWith('MASTER');
    });

    it('get read only connection', () => {
        let db: MySQLDatabase = new MySQLDatabase();
        let spy: jest.SpyInstance = jest.spyOn((db as any).$cluster, 'getConnection').mockImplementation(() => {});

        void db.getConnection();

        expect(spy).toHaveBeenCalledWith('SLAVE*', expect.any(Function));
    });

    it('get write accessible connection', () => {
        let db: MySQLDatabase = new MySQLDatabase();
        let spy: jest.SpyInstance = jest.spyOn((db as any).$cluster, 'getConnection').mockImplementation(() => {});

        void db.getConnection(true);

        expect(spy).toHaveBeenCalledWith('MASTER', expect.any(Function));
    });

    it('enqueue warns', async () => {
        let db: MySQLDatabase = new MySQLDatabase();
        let spy: jest.SpyInstance = jest.spyOn(getInstance().getLogger(), 'warn').mockImplementation(() => {});

        ((db as any).$cluster as EventEmitter).emit('enqueue');

        expect(spy).toHaveBeenCalled();
    });

    it('will wait for replication lag', async () => {
        let spy = jest.spyOn(ConnectionReplicationWaiter.prototype, 'wait').mockImplementation(() => {
            return Promise.resolve();
        });

        let db: MySQLDatabase = new MySQLDatabase();
        jest.spyOn((db as any), '$getConnectionFromPool').mockImplementation(() => {
            let c: MySQLConnection = new MySQLConnection(({
                config: {}
            } as any), '', true);

            jest.spyOn(c, '__internal_init').mockImplementation(() => {
                return Promise.resolve();
            });

            jest.spyOn(c, 'hasReplicationEnabled').mockImplementation(() => {
                return true;
            });

            jest.spyOn(c, 'isMaster').mockImplementation(() => {
                return false;
            });

            return Promise.resolve(c);
        });

        await db.getConnection(false, null, {
            page: 2,
            position: 2
        });
        
        expect(spy).toHaveBeenCalled();
    });
});
