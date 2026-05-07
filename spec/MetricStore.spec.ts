
import { MetricStore, IMetricCounter, IMetricGauge, IMetricHistogram } from '../src/MetricStore';
import * as prom from 'prom-client';

jest.mock('prom-client', () => ({
    collectDefaultMetrics: jest.fn(),
    register: {
        setDefaultLabels: jest.fn(),
        metrics: jest.fn().mockResolvedValue(''),
        contentType: 'text/plain; version=0.0.4; charset=utf-8'
    },
    Counter: jest.fn().mockImplementation(() => ({ inc: jest.fn() })),
    Gauge: jest.fn().mockImplementation(() => ({ set: jest.fn(), inc: jest.fn(), dec: jest.fn() })),
    Histogram: jest.fn().mockImplementation(() => ({ observe: jest.fn(), startTimer: jest.fn() }))
}));

// eslint-disable-next-line @typescript-eslint/naming-convention
let MockCounter = prom.Counter as jest.MockedClass<typeof prom.Counter>;
// eslint-disable-next-line @typescript-eslint/naming-convention
let MockGauge = prom.Gauge as jest.MockedClass<typeof prom.Gauge>;
// eslint-disable-next-line @typescript-eslint/naming-convention
let MockHistogram = prom.Histogram as jest.MockedClass<typeof prom.Histogram>;

describe('MetricStore', () => {
    let store: MetricStore;

    beforeEach(() => {
        jest.clearAllMocks();
        store = MetricStore.getInstance();
    });

    describe('getMetrics', () => {
        it('returns content type and metrics string', async () => {
            let result = await store.getMetrics();
            expect(result.type).toMatch(/^(text\/plain|application\/openmetrics-text)/);
            expect(typeof result.content).toBe('string');
        });
    });

    describe('setDefaultLabels', () => {
        it('delegates to prom register', () => {
            let labels = { environment: 'test' };
            store.setDefaultLabels(labels);
            expect(prom.register.setDefaultLabels).toHaveBeenCalledWith(labels);
        });
    });

    describe('createCounter', () => {
        let counter: IMetricCounter;
        let mockInc: jest.Mock;

        beforeEach(() => {
            counter = store.createCounter({ name: 'test_counter', help: 'test help', labelNames: ['method'] });
            mockInc = (MockCounter.mock.results[0].value as any).inc;
        });

        it('constructs prom Counter with config', () => {
            expect(MockCounter).toHaveBeenCalledWith({ name: 'test_counter', help: 'test help', labelNames: ['method'] });
        });

        it('inc() with no args delegates', () => {
            counter.inc();
            expect(mockInc).toHaveBeenCalledWith();
        });

        it('inc(value) delegates', () => {
            counter.inc(5);
            expect(mockInc).toHaveBeenCalledWith(5);
        });

        it('inc(labels, value) delegates', () => {
            counter.inc({ method: 'GET' }, 2);
            expect(mockInc).toHaveBeenCalledWith({ method: 'GET' }, 2);
        });
    });

    describe('createGauge', () => {
        let gauge: IMetricGauge;
        let mockSet: jest.Mock;
        let mockInc: jest.Mock;
        let mockDec: jest.Mock;

        beforeEach(() => {
            gauge = store.createGauge({ name: 'test_gauge', help: 'test help' });
            let instance = MockGauge.mock.results[0].value as any;
            mockSet = instance.set;
            mockInc = instance.inc;
            mockDec = instance.dec;
        });

        it('constructs prom Gauge with config', () => {
            expect(MockGauge).toHaveBeenCalledWith({ name: 'test_gauge', help: 'test help', labelNames: [] });
        });

        it('set(value) delegates', () => {
            gauge.set(42);
            expect(mockSet).toHaveBeenCalledWith(42);
        });

        it('set(labels, value) delegates', () => {
            gauge.set({ node: 'a' }, 42);
            expect(mockSet).toHaveBeenCalledWith({ node: 'a' }, 42);
        });

        it('inc() with no args delegates', () => {
            gauge.inc();
            expect(mockInc).toHaveBeenCalledWith();
        });

        it('inc(value) delegates', () => {
            gauge.inc(3);
            expect(mockInc).toHaveBeenCalledWith(3);
        });

        it('inc(labels, value) delegates', () => {
            gauge.inc({ node: 'a' }, 3);
            expect(mockInc).toHaveBeenCalledWith({ node: 'a' }, 3);
        });

        it('dec() with no args delegates', () => {
            gauge.dec();
            expect(mockDec).toHaveBeenCalledWith();
        });

        it('dec(value) delegates', () => {
            gauge.dec(3);
            expect(mockDec).toHaveBeenCalledWith(3);
        });

        it('dec(labels, value) delegates', () => {
            gauge.dec({ node: 'a' }, 3);
            expect(mockDec).toHaveBeenCalledWith({ node: 'a' }, 3);
        });
    });

    describe('createHistogram', () => {
        let histogram: IMetricHistogram;
        let mockObserve: jest.Mock;
        let mockStartTimer: jest.Mock;

        beforeEach(() => {
            histogram = store.createHistogram({ name: 'test_histogram', help: 'test help', buckets: [0.1, 0.5, 1] });
            let instance = MockHistogram.mock.results[0].value as any;
            mockObserve = instance.observe;
            mockStartTimer = instance.startTimer;
        });

        it('constructs prom Histogram with config', () => {
            expect(MockHistogram).toHaveBeenCalledWith({ name: 'test_histogram', help: 'test help', labelNames: [], buckets: [0.1, 0.5, 1] });
        });

        it('observe(value) delegates', () => {
            histogram.observe(0.42);
            expect(mockObserve).toHaveBeenCalledWith(0.42);
        });

        it('observe(labels, value) delegates', () => {
            histogram.observe({ route: '/api' }, 0.42);
            expect(mockObserve).toHaveBeenCalledWith({ route: '/api' }, 0.42);
        });

        it('startTimer(labels) delegates', () => {
            histogram.startTimer({ route: '/api' });
            expect(mockStartTimer).toHaveBeenCalledWith({ route: '/api' });
        });
    });
});
