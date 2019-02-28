import {Database} from '../../src/Database';
import {MockConnection} from './MockConnection';

export class MockDB extends Database {
    public nodes: any;

    constructor() {
        super();
        this.nodes = {};
    }

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
}
