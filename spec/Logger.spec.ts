
import {Logger} from '../src/Logger';
import {LogSeverity} from '../src/LogSeverity';
import { ConfigTestApp } from './support/TestApplication';

describe('Logger', () => {
    it('Sets default Log Level', () => {
        var a: Logger = new Logger();
        expect(a.getLogLevel()).toBe(LogSeverity.DEBUG | LogSeverity.INFO | LogSeverity.WARNING | LogSeverity.ERROR | LogSeverity.FATAL);
    });

    it('has default filter', () => {
        var a: Logger = new Logger();
        var filters: Array<RegExp> = a.getFilters();
        expect(filters[0].toString()).toBe('/TokenExpiredError/g');
    });

    it('Can add filter', () => {
        var a: Logger = new Logger();
        var addFilter = /test/;
        a.addFilter(addFilter);
        var filters: Array<RegExp> = a.getFilters();
        var filter: RegExp = filters[filters.length - 1];
        expect(filter).toBe(addFilter);
    });

    it('Can remove filter', () => {
        var a: Logger = new Logger();
        var addFilter = /test/;
        a.addFilter(addFilter);
        var filters: Array<RegExp> = a.getFilters();
        expect(filters.length).toBe(2);
        a.removeFilter(addFilter);
        expect(a.getFilters().length).toBe(1);
    });

    it('Can set filters', () => {
        var a: Logger = new Logger();
        a.setFilters([
            /test1/,
            /test2/,
            /test3/
        ]);
        expect(a.getFilters().length).toBe(3);

        a.setFilters([]);
        expect(a.getFilters().length).toBe(0);

        a.setFilters(null);
        expect(a.getFilters().length).toBe(0);
    });

    it('Can set log level', () => {
        var a: Logger = new Logger();
        a.setLogLevel(LogSeverity.TRACE);
        expect(a.getLogLevel()).toBe(LogSeverity.TRACE);
    });

    it('Can log trace messages', () => {
        var a: Logger = new Logger();
        a.setLogLevel(LogSeverity.TRACE);
        a.trace('This is a trace message');
    });

    it('Can log debug messages', () => {
        var a: Logger = new Logger();
        a.setLogLevel(LogSeverity.DEBUG);
        a.debug('This is a debug message');
    });

    it('Can log info messages', () => {
        var a: Logger = new Logger();
        a.setLogLevel(LogSeverity.INFO);
        a.info('This is a info message');
    });

    it('Can log warning messages', () => {
        var a: Logger = new Logger();
        a.setLogLevel(LogSeverity.WARNING);
        a.warn('This is a warning message');
    });

    it('Can log error messages', () => {
        var a: Logger = new Logger();
        a.setLogLevel(LogSeverity.ERROR);
        a.error('This is a error message');
    });

    it('Can log fatal messages', () => {
        var a: Logger = new Logger();
        a.setLogLevel(LogSeverity.FATAL);
        a.fatal('This is a fatal message');
    });

    it('Invalid severity', () => {
        var a: Logger = new Logger();
        a.log((<any>['invalid severity test']), 123456);  
    });

    it('Can use stdout for errors', () => {
        // TODO: Verify that stderr is actualyl being used.
        var a: Logger = new Logger('', LogSeverity.ERROR, true);
        a.error('stderr test');
    });

    it('Can have a name', () => {
        var a: Logger = new Logger('TestLogger');
        expect(a.getName()).toBe('TestLogger');
    });

    it('it can load log_filters from config', (done) => {
        let a: ConfigTestApp = new ConfigTestApp(JSON.stringify({
            binding_ip: null,
            port: null,
            authentication_header: 'X-BT-AUTH',
            log_level: 'error | fatal',
            backend_authentication_header: 'X-BT-BACKEND-AUTH',
            backend_authentication_secret: null,
            log_filters: [
                '/test1/g',
                '/test2/g'
            ]
        }));

        a.on('ready', () => {
            var logger: Logger = a.getLogger();
            var filters: Array<RegExp> = logger.getFilters();
            expect(filters[0].toString()).toBe('/test1/g');
            expect(filters[1].toString()).toBe('/test2/g');
            done();
        });
    });
});
