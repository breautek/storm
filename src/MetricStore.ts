
export type TSupportedMetricStoreValues = string | number | boolean;

export class MetricStore {
    private static $instance: MetricStore;

    private $data: Record<string, TSupportedMetricStoreValues>;

    private constructor() {
        this.$data = {};
    }

    public static getInstance(): MetricStore {
        if (!MetricStore.$instance) {
            MetricStore.$instance = new MetricStore();
        }

        return MetricStore.$instance;
    }

    public set(key: string, value: TSupportedMetricStoreValues): void {
        this.$data[key] = value;
    }

    public get(key: string): TSupportedMetricStoreValues | null {
        let value: TSupportedMetricStoreValues = this.$data[key];
        if (value === undefined) return null;
        return value;
    }

    public increment(key: string): void {
        let value: TSupportedMetricStoreValues = this.get(key);
        
        if (!value) {
            value = 0;
        }

        if (typeof value !== 'number') {
            this.set(key, 0);
            return;
        }

        value++;
        this.set(key, value);
    }

    public decrement(key: string): void {
        let value: TSupportedMetricStoreValues = this.get(key);
        if (!value || typeof value !== 'number') {
            this.set(key, 0);
            return;
        }

        value--;
        this.set(key, value);
    }
}
