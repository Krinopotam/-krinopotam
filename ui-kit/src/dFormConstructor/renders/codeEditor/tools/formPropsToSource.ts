import {getFieldInfoByClassName} from '@src/dFormConstructor/renders/fieldsTree/tools/getFieldInfoByClassName';

/**
 * 
 * @param obj
 * @param indent
 * @param ts - typescript or js
 */
export function formPropsToSource(obj: unknown, indent = 2, ts: boolean = true): string {
    const seen = new WeakSet();

    function serialize(value: unknown, depth: number): string {
        if (value === null) return 'null';
        if (value === undefined) return 'undefined';
        if (typeof value === 'string') return `"${value.replace(/"/g, '\\"')}"`;
        if (typeof value === 'number' || typeof value === 'boolean') return String(value);
        if (typeof value === 'bigint') return `${value}n`;
        if (typeof value === 'symbol') return `Symbol(${value.description ?? ''})`;
        if (value instanceof Date) return `new Date(${value.getTime()})`;
        if (value instanceof RegExp) return value.toString();
        if (typeof value === 'function') return value.name;

        if (typeof value !== 'object') return 'undefined';

        if (seen.has(value)) return '/* [Circular] */';
        seen.add(value);

        const pad = ' '.repeat(depth * indent);
        const nextPad = ' '.repeat((depth + 1) * indent);

        if (Array.isArray(value)) {
            const items = value.map(v => serialize(v, depth + 1)).join(', ');
            return `[\n${nextPad}${items}\n${pad}]`;
        }

        if (value instanceof Set) {
            const items = [...value].map(v => serialize(v, depth + 1)).join(', ');
            return `new Set([\n${nextPad}${items}\n${pad}])`;
        }

        if (value instanceof Map) {
            const entries = [...value.entries()].map(([k, v]) => `[${serialize(k, depth + 1)}, ${serialize(v, depth + 1)}]`).join(', ');
            return `new Map([\n${nextPad}${entries}\n${pad}])`;
        }

        let fieldTypeName: string | undefined = '';
        const entries = Object.entries(value)
            .map(([key, val]) => {
                if (ts && key === 'component') {
                    const fieldInfoClassName = typeof val === 'function' ? val.name : undefined;
                    const fieldInfo = getFieldInfoByClassName(fieldInfoClassName);
                    fieldTypeName = fieldInfo?.INTERFACE_NAME;
                }

                const safeKey = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(key) ? key : `"${key}"`;
                return `${safeKey}: ${serialize(val, depth + 1)}`;
            })
            .join(',\n' + nextPad);

        return `{\n${nextPad}${entries}\n${pad}}${fieldTypeName ? ' satisfies ' + fieldTypeName : ''}`;
    }

    return serialize(obj, 0);
}
