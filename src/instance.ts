import {Application} from './Application';

var instance: Application;

var setInstance = (app: Application): void => {
    if (instance) {
        //warn
    }
    instance = app;
}

var getInstance = (): Application => {
    return instance;
}

export {
    setInstance,
    getInstance
}