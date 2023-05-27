
import {ApplicationEvent} from '../src/ApplicationEvent';

describe('ApplicationEvent', () => {
    it('CONFIG_LOADED', () => {
        expect(ApplicationEvent.CONFIG_LOADED).toBe('config_loaded');
    })
});
