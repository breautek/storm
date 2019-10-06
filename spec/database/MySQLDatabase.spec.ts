
import {
    MockApplication,
} from '../support/TestApplication';
import {MySQLDatabase} from '../../src/MySQLDatabase';
import * as MySQL from 'mysql';

describe('MySQLDatabase', () => {
    let app: MockApplication = null;

    let setup = (done: any) => {
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

    it('can construct', () => {
        expect(new MySQLDatabase()).toBeTruthy();
    });

    it('can escape', () => {
        let db: MySQLDatabase = new MySQLDatabase();
        expect(db.escape('SELECT * FROM test --')).toBe('\'SELECT * FROM test --\'');
    });

    it('add master', () => {
        let db: MySQLDatabase = new MySQLDatabase();
        let spy: jasmine.Spy = spyOn((<any>db).cluster, 'add');

        let config: MySQL.PoolConfig = {
            acquireTimeout: 3000
        };

        db.addMaster(config);

        expect(spy).toHaveBeenCalledWith('MASTER', config);
    });

    it('add slave', () => {
        let db: MySQLDatabase = new MySQLDatabase();
        let spy: jasmine.Spy = spyOn((<any>db).cluster, 'add');

        let nodeID: string = 'test';
        let config: MySQL.PoolConfig = {
            acquireTimeout: 3000
        };

        db.addSlave(nodeID, config);

        expect(spy).toHaveBeenCalledWith(jasmine.any(String), config);
    });

    it('remove node', () => {
        let db: MySQLDatabase = new MySQLDatabase();
        let spy: jasmine.Spy = spyOn((<any>db).cluster, 'remove');

        db.removeMaster();

        expect(spy).toHaveBeenCalledWith('MASTER');
    });

    it('get read only connection', () => {
        let db: MySQLDatabase = new MySQLDatabase();
        let spy: jasmine.Spy = spyOn((<any>db).cluster, 'getConnection');

        db.getConnection();

        expect(spy).toHaveBeenCalledWith('SLAVE*', jasmine.any(Function));
    });

    it('get write accessible connection', () => {
        let db: MySQLDatabase = new MySQLDatabase();
        let spy: jasmine.Spy = spyOn((<any>db).cluster, 'getConnection');

        db.getConnection(true);

        expect(spy).toHaveBeenCalledWith('MASTER', jasmine.any(Function));
    });
});
