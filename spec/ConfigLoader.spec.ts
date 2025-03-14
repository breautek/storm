
import * as Path from 'path';
import {ConfigLoader} from '../src/ConfigLoader';
import { MissingConfigError } from '../src/MissingConfigError';
import { MockApplication } from './support/TestApplication';

const TEST_DIR: string = './spec/support/configLoader/';

describe('ConfigLoader', () => {
    let app: MockApplication = null;
    let loader: ConfigLoader = null;

    beforeAll(async () => {
        process.argv = [];
        app = new MockApplication();
        await app.start();
        loader = new ConfigLoader(app);
    });
    afterAll(async () => {
        await app.close();
        loader = null;
    });

    it('can load', (done) => {
        loader.load(Path.resolve(TEST_DIR, 'test1/bt-config.json'), Path.resolve(TEST_DIR, 'test1/bt-local-config.json')).then((config: any) => {
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
        }).catch(fail);
    });

    it('missing local config', (done) => {
        loader.load(Path.resolve(TEST_DIR, 'test2/bt-config.json'), Path.resolve(TEST_DIR, 'test2/bt-local-config.json')).then((config: any) => {
            expect(config.customConfig.test1).toBe(true);
            expect(config.customConfig.meta.name).toBe('test');
            expect(config.customConfig.meta.debug).toBe(false);
            done();
        }).catch(fail);
    });

    it('Missing both configs', async () => {
        await expect(
            loader.load(Path.resolve(TEST_DIR, 'test3/bt-config.json'), Path.resolve(TEST_DIR, 'test3/bt-local-config.json'))
        ).rejects.toThrow(MissingConfigError);
    });

    it('can load using alternate names', (done) => {
        loader.load(Path.resolve(TEST_DIR, 'test4/main.json'), Path.resolve(TEST_DIR, 'test4/local.json')).then((config: any) => {
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
        }).catch(fail);
    });

    describe('log settings', () => {
        it('defaults to info', async () => {
            jest.spyOn<any, any>(loader, '$getMainConfig').mockImplementation(() => {
                return {};
            });
            let config = await loader.load('fakepath', 'fakepath');
            expect(config.log.level).toBe('info');
        });

        it('defaults to info if undefined', async () => {
            jest.spyOn<any, any>(loader, '$getMainConfig').mockImplementation(() => {
                return {
                    log: {
                        level: undefined
                    }
                };
            });
            let config = await loader.load('fakepath', 'fakepath');
            expect(config.log.level).toBe('info');
        });

        it('defaults to info if null', async () => {
            jest.spyOn<any, any>(loader, '$getMainConfig').mockImplementation(() => {
                return {
                    log: {
                        level: null
                    }
                };
            });
            let config = await loader.load('fakepath', 'fakepath');
            expect(config.log.level).toBe('info');
        });

        let validLevels: string[] = [
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
                jest.spyOn<any, any>(loader, '$getMainConfig').mockImplementation(() => {
                    return {
                        log: {
                            level: level
                        }
                    };
                });
                let config = await loader.load('fakepath', 'fake');
                expect(config.log.level).toBe(level);
            });
        }

        it('should error on invalid level', async () => {
            jest.spyOn<any, any>(loader, '$getMainConfig').mockImplementation(() => {
                return {
                    log: {
                        level: 'invalidLevel'
                    }
                };
            });
            await expect(loader.load('fakepath', 'fake')).rejects.toThrow();
        });
    });
});
