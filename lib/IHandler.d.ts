import { Application } from './Application';
import { Handler } from './Handler';
export interface IHandler {
    new (app: Application): Handler;
}
