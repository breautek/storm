/*
   Copyright 2017-2024 Norman Breau

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

import { GetBinLogPositionQuery } from './GetBinLogPositionQuery';

interface IStatus {
    Relay_Source_Log_File: string;
    Exec_Source_Log_Pos: string;
}

export class GetSlavePositionQuery extends GetBinLogPositionQuery<IStatus> {

    protected override _getQuery(): string {
        return 'SHOW REPLICA STATUS';
    }

    protected override _getFile(row: IStatus): string {
        return row.Relay_Source_Log_File;
    }

    protected override _getPosition(row: IStatus): string {
        return row.Exec_Source_Log_Pos;
    }
}
