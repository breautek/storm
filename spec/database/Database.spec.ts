
import {MockDB} from '../support/MockDB';
import {
    MockApplication
} from '../support/TestApplication';

const MASTER: string = 'MASTER';

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

    it('Can add master', () => {
        let db: MockDB = new MockDB();

        let spy: jasmine.Spy = spyOn((db as any), '_addNode');

        db.addMaster({test:true});

        expect(spy).toHaveBeenCalledWith(MASTER, {test:true});
    });

    it('Can only have 1 master', () => {
        let db: MockDB = new MockDB();

        spyOn((db as any), '_addNode');
        db.addMaster({test:true});

        expect(() => {
            db.addMaster({test:true})
        }).toThrowError(`Node "${MASTER}" already exists.`);
    });

    it('Can remove master', () => {
        let db: MockDB = new MockDB();

        spyOn((db as any), '_addNode');
        let spy: jasmine.Spy = spyOn((db as any), '_removeNode');

        db.addMaster({test:true});
        db.removeMaster();

        expect(spy).toHaveBeenCalledWith(MASTER);
    });

    it('Can add slave', () => {
        let db: MockDB = new MockDB();

        let spy: jasmine.Spy = spyOn((db as any), '_addNode');
        let id: string = db.addSlave('test', {test:true});
        
        expect(id.indexOf('test')).toBeGreaterThan(-1);
        expect(spy).toHaveBeenCalledWith(id, {test:true});
    });

    it('Can remove slave', () => {
        let db: MockDB = new MockDB();

        let spy: jasmine.Spy = spyOn((db as any), '_removeNode');
        spyOn((db as any), '_addNode');
        let id: string = db.addSlave('test', {test:true});
        db.removeSlave(id);
        
        expect(spy).toHaveBeenCalledWith(id);
    });

    it('Canot remove an unexisting slave', () => {
        let db: MockDB = new MockDB();

        let spy: jasmine.Spy = spyOn((db as any), '_removeNode');
        db.removeSlave('test');
        
        expect(spy).not.toHaveBeenCalled();
    });

    it('Can get read connection', () => {
        let db: MockDB = new MockDB();

        let spy: jasmine.Spy = spyOn((db as any), '_getConnection');
        db.getConnection();
        
        expect(spy).toHaveBeenCalledWith('SLAVE*', false, undefined);
    });

    it('Can get connection via custom query', () => {
        let db: MockDB = new MockDB();

        let spy: jasmine.Spy = spyOn((db as any), '_getConnection');
        db.getConnection(false, 'test');
        
        expect(spy).toHaveBeenCalledWith('test', false, undefined);
    });

    it('can get write connection', () => {
        let db: MockDB = new MockDB();

        let spy: jasmine.Spy = spyOn((db as any), '_getConnection');
        db.getConnection(true);
        
        expect(spy).toHaveBeenCalledWith(MASTER, true, undefined);
    });
});
