/*
   Copyright 2017-2021 Norman Breau

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

import { Readable } from 'stream';
import { IQueryable } from './IQueryable';
import { IsolationLevel } from './IsolationLevel';
import { IDatabasePosition } from './IDatabasePosition';

export interface IDatabaseConnection {
    setInstantiationStack(stack: string): void;
    getInstantiationStack(): string;
    getAPI(): any;
    isReadOnly(): boolean;
    setTimeout(timeout: number): void;
    getTimeout(): number;
    query(query: IQueryable<any>, params?: any): Promise<any>;
    stream(query: IQueryable<any>, params?: any, streamOptions?: any): Readable;
    close(forceClose?: boolean): Promise<void>;
    isClosed(): boolean;
    startTransaction(level?: IsolationLevel): Promise<void>;
    isTransaction(): boolean;
    commit(): Promise<void>;
    rollback(): Promise<void>;

    /**
     * @since 8.1.0
     */
    getCurrentDatabasePosition(): Promise<IDatabasePosition>;
}
