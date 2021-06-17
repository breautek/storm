
import {ConfigLoader} from '../src/ConfigLoader';
import { MissingConfigError } from '../src/MissingConfigError';
import { MockApplication } from './support/TestApplication';

const TEST_DIR: string = './spec/support/configLoader/';

describe('ConfigLoader', () => {
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

    it('can load', (done) => {
        ConfigLoader.load(TEST_DIR + 'test1/').then((config: any) => {
            // Test the defaults
            expect(config.bind).toBe('0.0.0.0');
            expect(config.port).toBe(8080);
            expect(config.authentication_header).toBe('X-BT-AUTH');
            expect(config.backend_authentication_header).toBe('X-BT-BACKEND-AUTH');
            expect(config.log.level).toBe('info');
            expect(config.log.filters[0]).toBe('/TokenExpiredError/g');

            // Test specific configs
            expect(config.customConfig.test1).toBe(true);
            expect(config.customConfig.test2).toBe(false);
            expect(config.customConfig.data.hello).toBe('world');
            expect(config.customConfig.meta.name).toBe('test');
            expect(config.customConfig.meta.debug).toBe(true);
            expect(config.customConfig.meta.contributors[0]).toBe('norman');

            done();
        });
    });

    it('missing local config', (done) => {
        ConfigLoader.load(TEST_DIR + 'test2/').then((config: any) => {
            expect(config.customConfig.test1).toBe(true);
            expect(config.customConfig.meta.name).toBe('test');
            expect(config.customConfig.meta.debug).toBe(false);
            done();
        });
    });

    it('Missing both configs', async () => {
        await expect(ConfigLoader.load(TEST_DIR + 'test3/')).rejects.toThrowError(MissingConfigError);
    });

    describe('log settings', () => {
        it('defaults to info', async () => {
            jest.spyOn<any, any>(ConfigLoader, '$getMainConfig').mockImplementation(() => {
                return {};
            });
            let config = await ConfigLoader.load('fakepath');
            expect(config.log.level).toBe('info');
        });

        it('defaults to info if undefined', async () => {
            jest.spyOn<any, any>(ConfigLoader, '$getMainConfig').mockImplementation(() => {
                return {
                    log: {
                        level: undefined
                    }
                };
            });
            let config = await ConfigLoader.load('fakepath');
            expect(config.log.level).toBe('info');
        });

        it('defaults to info if null', async () => {
            jest.spyOn<any, any>(ConfigLoader, '$getMainConfig').mockImplementation(() => {
                return {
                    log: {
                        level: null
                    }
                };
            });
            let config = await ConfigLoader.load('fakepath');
            expect(config.log.level).toBe('info');
        });

        let validLevels: Array<string> = [
            'silly',
            'debug',
            'verbose',
            'http',
            'info',
            'warn',
            'error'
        ];

        for (let i: number = 0; i < validLevels.length; i++) {
            let level: string = validLevels[i];
            it(`can be set to ${level}`, async () => {
                jest.spyOn<any, any>(ConfigLoader, '$getMainConfig').mockImplementation(() => {
                    return {
                        log: {
                            level: level
                        }
                    };
                });
                let config = await ConfigLoader.load('fakepath');
                expect(config.log.level).toBe(level);
            });
        }

        it('should error on invalid level', async () => {
            jest.spyOn<any, any>(ConfigLoader, '$getMainConfig').mockImplementation(() => {
                return {
                    log: {
                        level: 'invalidLevel'
                    }
                };
            });
            await expect(ConfigLoader.load('fakepath')).rejects.toThrowError();
        });
    });
});
