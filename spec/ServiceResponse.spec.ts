

import {ServiceResponse} from '../src/ServiceResponse';

describe('ServiceResponse', () => {
    let sr: ServiceResponse = null;

    beforeEach(() => {
        sr = new ServiceResponse(Buffer.from('test data'), null);
    });

    it('getRaw', () => {
        let raw: Buffer = sr.getRaw();
        expect(raw instanceof Buffer).toBe(true);
        expect(raw.toString('utf8')).toBe('test data');
    });

    it('getUTF8', () => {
        expect(sr.getUTF8()).toBe('test data');
    });
});
