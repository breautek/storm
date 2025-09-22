
import { IDatabaseConnection } from './IDatabaseConnection';
import {Query} from './Query';

export interface IGetMySQLVersionResult {
    major: number;
    minor: number;
    patch: number;
    version: string;
}

export interface IGetMySQLVersionRow {
    version: string;
}

export class GetMySQLVersion extends Query<void, IGetMySQLVersionRow[], IGetMySQLVersionResult> {
    protected override _getQuery(connection: IDatabaseConnection): string {
        return 'SELECT VERSION() AS version';
    }

    public override async onPostProcess(connection: IDatabaseConnection, resultSet: IGetMySQLVersionRow[]): Promise<IGetMySQLVersionResult> {
        let result: IGetMySQLVersionRow = resultSet[0];
        if (!result) {
            return null;
        }

        let parts: string[] = result.version.split('.');
        let major: number = parseInt(parts[0]);
        let minor: number = parseInt(parts[1]);
        let patch: number = parseInt(parts[2]);

        let out: IGetMySQLVersionResult = {
            major: major,
            minor: minor,
            patch: patch,
            version: result.version
        };

        return out;
    }
}
