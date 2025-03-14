
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

import { IDatabaseConnection } from '../IDatabaseConnection';
import { IDatabasePosition } from '../IDatabasePosition';
import { InternalError } from '../InternalError';
import { TimeoutError } from '../TimeoutError';

export class ConnectionReplicationWaiter {
    /**
     * The default retry delay in milliseconds.
     * Defaults to 1 second.
     * 
     * This is the value used in between status query iterations.
     */
    public static readonly DEFAULT_RETRY_DELAY: number = 1000;

    /**
     * The default timeout delay. Defaults to 120 seconds.
     * If the connection could not reach the target position in time,
     * then the wait will timeout
     * 
     * Using `Infinity` will disable the timeout
     */
    public static readonly DEFAULT_TIMEOUT = 120 * 1000; // 120 seconds in ms

    private $conn: IDatabaseConnection;
    private $retryDelay: number;

    public constructor(conn: IDatabaseConnection, retryDelay: number = ConnectionReplicationWaiter.DEFAULT_RETRY_DELAY) {
        this.$conn = conn;
        this.$retryDelay = retryDelay;
    }

    private $sleep(timeout: number): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, timeout);
        });
    }

    public async wait(target: IDatabasePosition, timeout: number = ConnectionReplicationWaiter.DEFAULT_TIMEOUT): Promise<void> {
        if (!this.$conn.isReadOnly()) {
            return;
        }

        let shouldTimeout: boolean = false;
        let didTimeout: boolean = false;

        let timeoutTimer = setTimeout(() => {
            shouldTimeout = true;
        }, timeout);

        while (true) {
            if (shouldTimeout) {
                didTimeout = true;
                break;
            }

            let currentPos: IDatabasePosition = await this.$conn.getCurrentDatabasePosition();

            // TODO: I have no idea what my intent is here, but it's obviously wrong
            // eslint-disable-next-line no-constant-binary-expression
            if (currentPos === null || (currentPos && !currentPos.page === null) || (currentPos && !currentPos.position === null)) {
                throw new InternalError('Database Position not supported');
            }

            // If the current page is greater than the target page,
            // then the position doesn't matter, we are ahead of the
            // desired target position.
            if (currentPos.page > target.page) {
                break;
            }

            // If the pages are equal, we need to check the position
            // and ensure we are at or greater than the target.
            if (currentPos.page === target.page && currentPos.position >= target.position) {
                break;
            }

            // If we made it here, it means the position state checks failed
            // so wait a short while and then re-iterate
            await this.$sleep(this.$retryDelay);
        }

        if (didTimeout) {
            // If the while loop exited due to the timeout,
            // then throw a timeout error
            throw new TimeoutError();
        }

        // Otherwise we are good to go!
        clearTimeout(timeoutTimer);
    }
}

