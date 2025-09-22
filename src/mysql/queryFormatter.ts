
import * as MySQL from 'mysql2';

/**
 * Formats a query by resolving named parameters.
 * 
 * With older `mysql` driver, this was used to facilitate actual named parameters.
 * @since 9.2.0 - this is now only used for logging/debugging purposes, as `mysql2`
 * driver has built-in named parameter support.
 * 
 * @param query 
 * @param values 
 * @returns 
 */
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
