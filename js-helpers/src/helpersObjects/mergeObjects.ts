import {deepmerge} from "deepmerge-ts";

/**
 * Deep merge objects (clone object)
 * Uses deepmerge-ts
 * Recursively merges own and inherited enumerable properties of source
 * objects into the destination object, skipping source properties that resolve
 * to `undefined`.

 * @example
 *
 * var users1 = {
 *   'data': [{ 'user': 'barney' }]
 * };
 *
 * var users2 = {
 *   'data': [{ 'user': 'fred' }]
 * };
 *
 * _.merge(users1, users2);
 * // => { 'data': [{ 'user': 'barney' }, { 'user': 'fred' }] }
 */

export const MergeObjects = <T1 extends object, T2 extends object>(object: T1, source: T2 | undefined | null): T1 & T2 => {
    return deepmerge(object, source ?? {}) as T1 & T2
}