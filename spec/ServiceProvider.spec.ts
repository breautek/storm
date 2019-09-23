
import {ServiceProvider} from '../src/ServiceProvider';
import {
    MockApplication
} from './support/TestApplication';
import { ServiceResponse } from '../src/ServiceResponse';

class TestServiceProvider extends ServiceProvider {
    protected _getBase(): string {
        return 'mock';
    }

    protected _getPort(): number {
        return 64321;
    }

    public getDomain(): string {
        return this._getDomain();
    }

    public getProtocol(): string {
        return this._getProtocol();
    }
}

describe('ServiceProvider', () => {
    let app: MockApplication = null;
    let sp: TestServiceProvider = null;
    

    let setup = (done: any) => {
        app = new MockApplication();
        app.on('ready', () => {
            sp = new TestServiceProvider(app);
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

    it('urlSuffix', () => {
        expect(sp.urlSuffix()).toBe('/');
    });

    it('getVersion', () => {
        expect(sp.getVersion()).toBe('v1');
    });

    it('getDomain', () => {
        expect(sp.getDomain()).toBe('127.0.0.1');
    });

    it('getProtocol', () => {
        expect(sp.getProtocol()).toBe('http');
    });

    it('getApp', () => {
        expect(sp.getApp()).toBe(app);
    });

    it('get', (done) => {
        let createUrlSpy: jasmine.Spy = spyOn(<any>sp, '_createURL').and.callThrough();
        
        let data: any = {
            search: 'pizza',
            extraToppings: true
        };

        sp.get('echo', 'accessToken', data).then((sr: ServiceResponse) => {
            expect(sr instanceof ServiceResponse).toBe(true);
            done();
        });

        expect(createUrlSpy).toHaveBeenCalledWith('echo', data);
        expect(createUrlSpy.calls.mostRecent().returnValue).toBe('/api/mock/v1/echo/?search=pizza&extraToppings=true');
    });

    it('post', (done) => {
        let data: any = {
            message: 'test'
        };

        sp.post('echo', 'accessToken', data).then((sr: ServiceResponse) => {
            expect(sr instanceof ServiceResponse).toBe(true);
            expect(sr.getJSON()).toEqual(data);
            done();
        });
    });

    it('put', (done) => {
        let data: any = {
            message: 'test'
        };
        sp.put('echo', 'accessToken', data).then((sr: ServiceResponse) => {
            expect(sr instanceof ServiceResponse).toBe(true);
            expect(sr.getJSON()).toEqual(data);
            done();
        });
    });

    it('delete', (done) => {
        let data: any = {
            message: 'test'
        };
        sp.delete('echo', 'accessToken', data).then((sr: ServiceResponse) => {
            expect(sr instanceof ServiceResponse).toBe(true);
            expect(sr.getUTF8()).toBe('');
            done();
        });
    });
});
