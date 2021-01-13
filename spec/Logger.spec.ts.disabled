
// import {Logger} from '../src/Logger';
// import {ConfigTestApp} from './support/TestApplication';
// import {MockLogger} from './support/MockLogger';

// describe('Logger', () => {
//     it('Sets default Log Level', () => {
//         let a: Logger = new MockLogger();
//         expect(a.getLogLevel()).toBe(LogSeverity.DEBUG | LogSeverity.INFO | LogSeverity.WARNING | LogSeverity.ERROR | LogSeverity.FATAL);
//     });

//     it('has default filter', () => {
//         let a: Logger = new MockLogger();
//         let filters: Array<RegExp> = a.getFilters();
//         expect(filters[0].toString()).toBe('/TokenExpiredError/g');
//     });

//     it('Can add filter', () => {
//         let a: Logger = new MockLogger();
//         let addFilter = /test/;
//         a.addFilter(addFilter);
//         let filters: Array<RegExp> = a.getFilters();
//         let filter: RegExp = filters[filters.length - 1];
//         expect(filter).toBe(addFilter);
//     });

//     it('Can remove filter', () => {
//         let a: Logger = new MockLogger();
//         let addFilter = /test/;
//         a.addFilter(addFilter);
//         let filters: Array<RegExp> = a.getFilters();
//         expect(filters.length).toBe(2);
//         a.removeFilter(addFilter);
//         expect(a.getFilters().length).toBe(1);
//     });

//     it('Can set filters', () => {
//         let a: Logger = new MockLogger();
//         a.setFilters([
//             /test1/,
//             /test2/,
//             /test3/
//         ]);
//         expect(a.getFilters().length).toBe(3);

//         a.setFilters([]);
//         expect(a.getFilters().length).toBe(0);

//         a.setFilters(null);
//         expect(a.getFilters().length).toBe(0);
//     });

//     it('Can set log level', () => {
//         let a: Logger = new MockLogger();
//         a.setLogLevel(LogSeverity.TRACE);
//         expect(a.getLogLevel()).toBe(LogSeverity.TRACE);
//     });

//     it('Can log trace messages', () => {
//         let a: Logger = new MockLogger();
//         a.setLogLevel(LogSeverity.TRACE);
//         a.trace('This is a trace message');
//     });

//     it('Can log debug messages', () => {
//         let a: Logger = new MockLogger();
//         a.setLogLevel(LogSeverity.DEBUG);
//         a.debug('This is a debug message');
//     });

//     it('Can log info messages', () => {
//         let a: Logger = new MockLogger();
//         a.setLogLevel(LogSeverity.INFO);
//         a.info('This is a info message');
//     });

//     it('Can log warning messages', () => {
//         let a: Logger = new MockLogger();
//         a.setLogLevel(LogSeverity.WARNING);
//         a.warn('This is a warning message');
//     });

//     it('Can log error messages', () => {
//         let a: Logger = new MockLogger();
//         a.setLogLevel(LogSeverity.ERROR);
//         a.error('This is a error message');
//     });

//     it('Can log fatal messages', () => {
//         let a: Logger = new MockLogger();
//         a.setLogLevel(LogSeverity.FATAL);
//         a.fatal('This is a fatal message');
//     });

//     it('Invalid severity', () => {
//         let a: MockLogger = new MockLogger();
//         a.mockLog((<any>[ 'invalid severity test' ]), 123456);
//     });

//     it('Can use stdout for errors', () => {
//         // TODO: Verify that stderr is actualyl being used.
//         let a: Logger = new MockLogger('', LogSeverity.ERROR, true);
//         a.error('stderr test');
//     });

//     it('Can have a name', () => {
//         let a: Logger = new MockLogger('TestLogger');
//         expect(a.getName()).toBe('TestLogger');
//     });

//     it('it can load log_filters from config', (done) => {
//         let a: ConfigTestApp = new ConfigTestApp(JSON.stringify({
//             binding_ip: null,
//             port: null,
//             authentication_header: 'X-BT-AUTH',
//             log_level: 'error | fatal',
//             backend_authentication_header: 'X-BT-BACKEND-AUTH',
//             backend_authentication_secret: null,
//             log_filters: [ '/test1/g', '/test2/g' ]
//         }));

//         a.on('ready', () => {
//             let logger: Logger = a.getLogger();
//             let filters: Array<RegExp> = logger.getFilters();
//             expect(filters[0].toString()).toBe('/test1/g');
//             expect(filters[1].toString()).toBe('/test2/g');
//             done();
//         });
//     });

//     it('FormatText handles logging unknown severity', () => {
//         let mock: MockLogger = new MockLogger();
//         expect(mock.formatString([ 'test', '123' ], 123123).indexOf('test 123')).toBeGreaterThan(-1);
//     });

//     it('FormatText handles logging objects', () => {
//         let mock: MockLogger = new MockLogger();
//         expect(mock.formatString([ {a: true, b: 123, c: 'test'} ], LogSeverity.INFO).indexOf(`{ a: true, b: 123, c: 'test' }`)).toBeGreaterThan(-1);
//     });

//     it('FormatText handles logging errors', () => {
//         let mock: MockLogger = new MockLogger();
//         expect(mock.formatString([ new Error('test error') ], LogSeverity.INFO).indexOf(`test error`)).toBeGreaterThan(-1);
//     });

//     it('can setLogStream', () => {
//         let mock: MockLogger = new MockLogger();
//         mock.setLogStream(process.stdout);
//         expect(mock.getLogStream()).toBe(process.stdout);
//     });

//     it('can setErrorStream', () => {
//         let mock: MockLogger = new MockLogger();
//         mock.setErrorStream(process.stdout);
//         expect(mock.getErrorStream()).toBe(process.stdout);
//     });

//     describe('Deprecation', () => {
//         let mock: MockLogger = new MockLogger();
//         class Deprecation {
//             public deprecationWithNoAlternative(): void {
//                 mock.deprecate();
//             }

//             public deprecationWithAlternative(): void {
//                 mock.deprecate('properMethod');
//             }
//         }

//         class DeprecatedClass {
//             constructor() {
//                 mock.deprecate();
//             }
//         }

//         class DeprecatedClassWithAlternative {
//             constructor() {
//                 mock.deprecate('NonDeprecatedClass');
//             }
//         }

//         let deprecation: Deprecation = new Deprecation();
//         let methodMessageSpy: jasmine.Spy = null;
//         let alternativeMessageSpy: jasmine.Spy = null;

//         beforeEach(() => {
//             methodMessageSpy = spyOn<any>(mock, '_getDeprecatedMethodMessage');
//             alternativeMessageSpy = spyOn<any>(mock, '_getDeprecatedAlternativeMessage');
//             methodMessageSpy.and.callThrough();
//             alternativeMessageSpy.and.callThrough();
//         });

//         it('deprecation with no alternative', () => {
//             deprecation.deprecationWithNoAlternative();
//             expect(methodMessageSpy).toHaveBeenCalled();
//             expect(methodMessageSpy.calls.mostRecent().returnValue).toBe('Method Deprecation.deprecationWithNoAlternative is deprecated.');
//             expect(alternativeMessageSpy).not.toHaveBeenCalled();
//         });

//         it('deprecation with alternative', () => {
//             deprecation.deprecationWithAlternative();
//             expect(methodMessageSpy).toHaveBeenCalled();
//             expect(methodMessageSpy.calls.mostRecent().returnValue).toBe('Method Deprecation.deprecationWithAlternative is deprecated.');
//             expect(alternativeMessageSpy).toHaveBeenCalledWith('properMethod');
//             expect(alternativeMessageSpy.calls.mostRecent().returnValue).toBe('Use properMethod instead.');
//         });

//         it('deprecation class with no alternative', () => {
//             new DeprecatedClass();
//             expect(methodMessageSpy).toHaveBeenCalled();
//             expect(methodMessageSpy.calls.mostRecent().returnValue).toBe('Class DeprecatedClass is deprecated.');
//             expect(alternativeMessageSpy).not.toHaveBeenCalled();
//         });

//         it('deprecation class with alternative', () => {
//             new DeprecatedClassWithAlternative();
//             expect(methodMessageSpy).toHaveBeenCalled();
//             expect(methodMessageSpy.calls.mostRecent().returnValue).toBe('Class DeprecatedClassWithAlternative is deprecated.');
//             expect(alternativeMessageSpy).toHaveBeenCalledWith('NonDeprecatedClass');
//             expect(alternativeMessageSpy.calls.mostRecent().returnValue).toBe('Use NonDeprecatedClass instead.');
//         });
//     });
// });
