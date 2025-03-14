import {
    TestApplication
} from './support/TestApplication';
import {
    LogLevel
} from '@arashi/interfaces'
import {
    ConfigLoader
} from '../src/api';

describe('Configurations', () => {
    let clSpy: jest.SpyInstance = null;
    
    beforeEach(() => {
        clSpy = jest.spyOn(ConfigLoader.prototype, 'load');
    });

    it('should skip cloudwatch configuration', async () => {
        clSpy.mockReturnValue(Promise.resolve({
            bind: null,
            port: null,
            log: {
                level: LogLevel.SILLY
            }
        }));

        let app: TestApplication = new TestApplication();

        let spy: jest.SpyInstance = jest.spyOn((app as any), '$connectCW');
        
        await app.start();

        expect(spy).not.toHaveBeenCalled();

        await app.close();
    });

    it('should configure cloudwatch stream', async () => {

        clSpy.mockReturnValue(Promise.resolve({
            bind: null,
            port: null,
            log: {
                level: LogLevel.INFO,
                cloudwatch: {
                    region: 'us-test-1',
                    credentials: {
                        accessKeyId: 'access',
                        secretAccessKey: 'secret'
                    },
                    stream: {
                        group: 'log-group',
                        name: 'stream-name'
                    }
                }
            }
        }));

        let app: TestApplication = new TestApplication();
        let connectCWSpy: jest.SpyInstance = jest.spyOn((app as any), '$connectCW').mockImplementation(() => {});

        await app.start();

        expect(connectCWSpy).toHaveBeenCalled();

        await app.close();
    });

    it('should warn if region is missing', async () => {
        clSpy.mockReturnValue(Promise.resolve({
            bind: null,
            port: null,
            log: {
                level: LogLevel.INFO,
                cloudwatch: {
                    credentials: {
                        accessKeyId: 'access',
                        secretAccessKey: 'secret'
                    },
                    stream: {
                        group: 'log-group',
                        name: 'stream-name'
                    }
                }
            }
        }));

        let app: TestApplication = new TestApplication();
        let validateSpy: jest.SpyInstance = jest.spyOn((app as any), '$validateCWConfig');

        await app.start();

        expect(validateSpy).toHaveReturnedWith('missing $.log.cloudwatch.region');

        await app.close();
    });

    it('should warn if credentials is missing', async () => {
        clSpy.mockReturnValue(Promise.resolve({
            bind: null,
            port: null,
            log: {
                level: LogLevel.INFO,
                cloudwatch: {
                    region: 'us-test-1',
                    stream: {
                        group: 'log-group',
                        name: 'stream-name'
                    }
                }
            }
        }));

        let app: TestApplication = new TestApplication();
        let validateSpy: jest.SpyInstance = jest.spyOn((app as any), '$validateCWConfig');

        await app.start();

        expect(validateSpy).toHaveReturnedWith('missing $.log.cloudwatch.credentials');

        await app.close();
    });

    it('should warn if accessKeyId is missing', async () => {
        clSpy.mockReturnValue(Promise.resolve({
            bind: null,
            port: null,
            log: {
                level: LogLevel.INFO,
                cloudwatch: {
                    region: 'us-test-1',
                    credentials: {
                        secretAccessKey: 'secret'
                    },
                    stream: {
                        group: 'log-group',
                        name: 'stream-name'
                    }
                }
            }
        }));

        let app: TestApplication = new TestApplication();
        let validateSpy: jest.SpyInstance = jest.spyOn((app as any), '$validateCWConfig');

        await app.start();

        expect(validateSpy).toHaveReturnedWith('missing $.log.cloudwatch.credentials.accessKeyId');

        await app.close();
    });

    it('should warn if secretAccesKey is missing', async () => {
        clSpy.mockReturnValue(Promise.resolve({
            bind: null,
            port: null,
            log: {
                level: LogLevel.INFO,
                cloudwatch: {
                    region: 'us-test-1',
                    credentials: {
                        accessKeyId: 'access'
                    },
                    stream: {
                        group: 'log-group',
                        name: 'stream-name'
                    }
                }
            }
        }));

        let app: TestApplication = new TestApplication();
        let validateSpy: jest.SpyInstance = jest.spyOn((app as any), '$validateCWConfig');

        await app.start();

        expect(validateSpy).toHaveReturnedWith('missing $.log.cloudwatch.credentials.secretAccessKey');

        await app.close();
    });

    it('should warn if stream is missing', async () => {
        clSpy.mockReturnValue(Promise.resolve({
            bind: null,
            port: null,
            log: {
                level: LogLevel.INFO,
                cloudwatch: {
                    region: 'us-test-1',
                    credentials: {
                        accessKeyId: 'access',
                        secretAccessKey: 'secret'
                    }
                }
            }
        }));

        let app: TestApplication = new TestApplication();
        let validateSpy: jest.SpyInstance = jest.spyOn((app as any), '$validateCWConfig');

        await app.start();

        expect(validateSpy).toHaveReturnedWith('missing $.log.cloudwatch.stream');

        await app.close();
    });

    it('should warn if group is missing', async () => {
        clSpy.mockReturnValue(Promise.resolve({
            bind: null,
            port: null,
            log: {
                level: LogLevel.INFO,
                cloudwatch: {
                    region: 'us-test-1',
                    credentials: {
                        accessKeyId: 'access',
                        secretAccessKey: 'secret'
                    },
                    stream: {
                        name: 'stream-name'
                    }
                }
            }
        }));

        let app: TestApplication = new TestApplication();
        let validateSpy: jest.SpyInstance = jest.spyOn((app as any), '$validateCWConfig');

        await app.start();

        expect(validateSpy).toHaveReturnedWith('missing $.log.cloudwatch.stream.group');

        await app.close();
    });

    it('should warn if name is missing', async () => {
        clSpy.mockReturnValue(Promise.resolve({
            bind: null,
            port: null,
            log: {
                level: LogLevel.INFO,
                cloudwatch: {
                    region: 'us-test-1',
                    credentials: {
                        accessKeyId: 'access',
                        secretAccessKey: 'secret'
                    },
                    stream: {
                        group: 'log-group'
                    }
                }
            }
        }));

        let app: TestApplication = new TestApplication();
        let validateSpy: jest.SpyInstance = jest.spyOn((app as any), '$validateCWConfig');

        await app.start();

        expect(validateSpy).toHaveReturnedWith('missing $.log.cloudwatch.stream.name');

        await app.close();
    });
});
