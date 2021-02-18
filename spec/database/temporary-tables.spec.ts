import { Query } from "../../src/api";
import {
    MockApplication
} from '../support/TestApplication';
import {TemporaryTableQuery} from '../../src/TemporaryTableQuery';
import {DropTemporaryTableQuery} from '../../src/DropTemporaryTableQuery';

const TEMP_TABLE_QUERY_EXPECTATION: string =
`
            CREATE TEMPORARY TABLE \`my_temp_table\`
            SELECT :name
        `;

const TEMP_TABLE_DROP_QUERY_EXPECTATION: string =
`
            DROP TEMPORARY TABLE \`my_temp_table\`
        `;

describe('Temporary Tables', () => {
    interface ITestSelectQueryParams {
        name: string;
    }

    class TestSelectQuery extends Query<ITestSelectQueryParams> {
        protected _getQuery(): string {
            return 'SELECT :name';
        }
    }

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

    // let mockAPI: any = null;
    // let conn: MySQLConnection = null;

    // beforeEach(() => {
    //     mockAPI = {
    //         config: jasmine.createSpy('config'),
    //         query: jasmine.createSpy('query').and.returnValue({sql: 'test query'}),
    //         stream: jasmine.createSpy('stream'),
    //         release: jasmine.createSpy('release')
    //     };
    //     // conn = new MySQLConnection(mockAPI, 'test stack');
    // });

    it('can create temp table', () => {
        let mockSelect: TestSelectQuery = new TestSelectQuery({
            name: 'testing'
        });

        let tempTable: TemporaryTableQuery = new TemporaryTableQuery({
            tableName: 'my_temp_table',
            selectQuery: mockSelect
        });

        jest.spyOn(mockSelect, 'getParametersForQuery');

        expect(tempTable.getQuery()).toBe(TEMP_TABLE_QUERY_EXPECTATION);
        expect(tempTable.getParametersForQuery()).toEqual({
            tableName: 'my_temp_table',
            name: 'testing'
        });
        expect(mockSelect.getParametersForQuery).toHaveBeenCalled();
    });

    it('can drop temp table', () => {
        let query: DropTemporaryTableQuery = new DropTemporaryTableQuery({
            tableName: 'my_temp_table'
        });

        expect(query.getQuery()).toBe(TEMP_TABLE_DROP_QUERY_EXPECTATION);
        expect(query.getParameters()).toEqual({
            tableName: 'my_temp_table'
        });
    });
});
