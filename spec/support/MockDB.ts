import {Database} from '../../src/Database';
import {MockConnection} from './MockConnection';

export class MockDB extends Database<any, any> {
    public nodes: any;

    constructor() {
        super();
        this.nodes = {};
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    protected _addNode(name: string, config: any): void {
        this.nodes[name] = config;
    }

    protected _removeNode(name: string): void {
        delete this.nodes[name];
    }

    protected _getConnection(query: string, requireWriteAccess: boolean): Promise<MockConnection> {
        return new Promise<MockConnection>((resolve, reject) => {
            resolve(new MockConnection(!requireWriteAccess, new Error().stack));
        });
    }

    public escape(query: string): string {
        return query;
    }
}
