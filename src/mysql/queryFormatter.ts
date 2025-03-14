
import * as MySQL from 'mysql';

export function queryFormatter(query: string, values: any): string {
    if (!values) return query;

    return query.replace(/:(\w+)/g, function(this: any, txt: string, key: string): string {
        // eslint-disable-next-line no-prototype-builtins
        if (values.hasOwnProperty(key)) {
            return MySQL.escape(values[key]);
        }
        return txt;
    });
}
