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

import {IOKPacket} from './IOKPacket';

/**
 * @since 7.1.0
 * 
 * @remarks
 * 
 * Symbol introduced in 7.1.0 but did not accurately represent the actual call
 * result. Symbol was (breakingly) changed in 7.1.1 to fix this issue.
 */
export type IStoredProcedureResult<T extends unknown[] = unknown[]> = [...T, IOKPacket];
