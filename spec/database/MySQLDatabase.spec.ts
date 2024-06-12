
import {
    MockApplication
} from '../support/TestApplication';
import {MySQLDatabase} from '../../src/MySQLDatabase';
import * as MySQL from 'mysql';
import {EventEmitter} from 'events';
import { getInstance } from '../../src/instance';
import { IDatabaseConnection } from '../../src/IDatabaseConnection';
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

    beforeEach(() => {
        jest.spyOn(<any>DatabaseConnection.prototype, '$armLingerWarning').mockImplementation(() => {});
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
        let spy: jasmine.Spy = spyOn((<any>db).$cluster, 'add');

        let config: MySQL.PoolConfig = {
            acquireTimeout: 3000
        };

        db.addMaster(config);

        expect(spy).toHaveBeenCalledWith('MASTER', config);
    });

    it('add slave', () => {
        let db: MySQLDatabase = new MySQLDatabase();
        let spy: jasmine.Spy = spyOn((<any>db).$cluster, 'add');

        let nodeID: string = 'test';
        let config: MySQL.PoolConfig = {
            acquireTimeout: 3000
        };

        db.addSlave(nodeID, config);

        expect(spy).toHaveBeenCalledWith(jasmine.any(String), config);
    });

    it('remove node', () => {
        let db: MySQLDatabase = new MySQLDatabase();
        let spy: jasmine.Spy = spyOn((<any>db).$cluster, 'remove');

        db.removeMaster();

        expect(spy).toHaveBeenCalledWith('MASTER');
    });

    it('get read only connection', () => {
        let db: MySQLDatabase = new MySQLDatabase();
        let spy: jasmine.Spy = spyOn((<any>db).$cluster, 'getConnection');

        db.getConnection();

        expect(spy).toHaveBeenCalledWith('SLAVE*', jasmine.any(Function));
    });

    it('get write accessible connection', () => {
        let db: MySQLDatabase = new MySQLDatabase();
        let spy: jasmine.Spy = spyOn((<any>db).$cluster, 'getConnection');

        db.getConnection(true).then((connection: IDatabaseConnection) => {
            connection.close();
        });

        expect(spy).toHaveBeenCalledWith('MASTER', jasmine.any(Function));
    });

    it('enqueue warns', async () => {
        let db: MySQLDatabase = new MySQLDatabase();
        let spy: jasmine.Spy = spyOn(getInstance().getLogger(), 'warn');

        (<EventEmitter>(<any>db).$cluster).emit('enqueue');

        expect(spy).toHaveBeenCalled();
    });

    it('will wait for replication lag', async () => {
        let spy = jest.spyOn(ConnectionReplicationWaiter.prototype, 'wait').mockImplementation(() => {
            return Promise.resolve();
        });

        let db: MySQLDatabase = new MySQLDatabase();
        jest.spyOn(<any>db, '$getConnectionFromPool').mockImplementation(() => {
            return Promise.resolve(new MySQLConnection(<any>{
                config: {}
            }, '', true))
        });

        await db.getConnection(false, null, {
            page: 2,
            position: 2
        });
        
        expect(spy).toHaveBeenCalled();
    });
});
