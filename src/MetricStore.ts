
import * as prom from 'prom-client';

export interface IMetricConfig {
    name: string;
    help: string;
    labelNames?: string[];
}

export interface IMetricData {
    type: string;
    content: string;
}

export interface IHistogramConfig extends IMetricConfig {
    buckets?: number[];
}

export interface IMetricCounter {
    inc(value?: number): void;
    inc(labels: Record<string, string | number>, value?: number): void;
}

export interface IMetricGauge {
    set(value: number): void;
    set(labels: Record<string, string | number>, value: number): void;
    inc(value?: number): void;
    inc(labels: Record<string, string | number>, value?: number): void;
    dec(value?: number): void;
    dec(labels: Record<string, string | number>, value?: number): void;
}

export interface IMetricHistogram {
    observe(value: number): void;
    observe(labels: Record<string, string | number>, value: number): void;
    startTimer(labels?: Record<string, string | number>): (labels?: Record<string, string | number>) => number;
}

class CounterWrapper implements IMetricCounter {
    private $inner: prom.Counter;
    public constructor(config: IMetricConfig) {
        this.$inner = new prom.Counter({
            name: config.name,
            help: config.help,
            labelNames: config.labelNames ?? []
        });
    }
    public inc(labelsOrValue?: Record<string, string | number> | number, value?: number): void {
        if (typeof labelsOrValue === 'number') {
            this.$inner.inc(labelsOrValue);
        }
        else if (labelsOrValue !== undefined) {
            this.$inner.inc(labelsOrValue, value);
        }
        else {
            this.$inner.inc();
        }
    }
}

class GaugeWrapper implements IMetricGauge {
    private $inner: prom.Gauge;
    public constructor(config: IMetricConfig) {
        this.$inner = new prom.Gauge({
            name: config.name,
            help: config.help,
            labelNames: config.labelNames ?? []
        });
    }
    public set(labelsOrValue: Record<string, string | number> | number, value?: number): void {
        if (typeof labelsOrValue === 'number') {
            this.$inner.set(labelsOrValue);
        }
        else {
            this.$inner.set(labelsOrValue, value);
        }
    }
    public inc(labelsOrValue?: Record<string, string | number> | number, value?: number): void {
        if (typeof labelsOrValue === 'number') {
            this.$inner.inc(labelsOrValue);
        }
        else if (labelsOrValue !== undefined) {
            this.$inner.inc(labelsOrValue, value);
        }
        else {
            this.$inner.inc();
        }
    }
    public dec(labelsOrValue?: Record<string, string | number> | number, value?: number): void {
        if (typeof labelsOrValue === 'number') {
            this.$inner.dec(labelsOrValue);
        }
        else if (labelsOrValue !== undefined) {
            this.$inner.dec(labelsOrValue, value);
        }
        else {
            this.$inner.dec();
        }
    }
}

class HistogramWrapper implements IMetricHistogram {
    private $inner: prom.Histogram;
    public constructor(config: IHistogramConfig) {
        this.$inner = new prom.Histogram({
            name: config.name,
            help: config.help,
            labelNames: config.labelNames ?? [],
            ...(config.buckets !== undefined ? { buckets: config.buckets } : {})
        });
    }
    public observe(labelsOrValue: Record<string, string | number> | number, value?: number): void {
        if (typeof labelsOrValue === 'number') {
            this.$inner.observe(labelsOrValue);
        }
        else {
            this.$inner.observe(labelsOrValue, value);
        }
    }
    public startTimer(labels?: Record<string, string | number>): (labels?: Record<string, string | number>) => number {
        return this.$inner.startTimer(labels);
    }
}

export class MetricStore {
    private static $instance: MetricStore;

    private constructor() {
        prom.collectDefaultMetrics();
    }

    public static getInstance(): MetricStore {
        if (!MetricStore.$instance) {
            MetricStore.$instance = new MetricStore();
        }
        return MetricStore.$instance;
    }

    public setDefaultLabels(labels: Record<string, string>): void {
        prom.register.setDefaultLabels(labels);
    }

    public createCounter(config: IMetricConfig): IMetricCounter {
        return new CounterWrapper(config);
    }

    public createGauge(config: IMetricConfig): IMetricGauge {
        return new GaugeWrapper(config);
    }

    public createHistogram(config: IHistogramConfig): IMetricHistogram {
        return new HistogramWrapper(config);
    }

    public async getMetrics(): Promise<IMetricData> {
        return {
            type: prom.register.contentType,
            content: await prom.register.metrics()
        };
    }
}
