//import merge from "lodash.merge";

import deepmerge from "deepmerge";

/**
 * Deep merge objects (mutate object)
 * Uses lodash.merge
 * Recursively merges own and inherited enumerable properties of source
 * objects into the destination object, skipping source properties that resolve
 * to `undefined`. Array and plain object properties are merged recursively.
 * Other objects and value types are overridden by assignment. Source objects
 * are applied from left to right. Subsequent sources overwrite property
 * assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @category Object
 * @param object The destination object.
 * @param source The source objects.
 * @returns Returns `object`.
 * @example
 *
 * var users = {
 *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
 * };
 *
 * var ages = {
 *   'data': [{ 'age': 36 }, { 'age': 40 }]
 * };
 *
 * _.merge(users, ages);
 * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
 */
//export const MergeObjects = <TObject, TSource>(object: TObject, source: TSource): TObject & TSource => merge(object, source);

export const MergeObjects = <T1 extends object, T2 extends object >(object:T1, source:T2 | undefined, opt?:deepmerge.Options):T1 & T2=>{
    return deepmerge(object, source ?? {}, opt) as T1 & T2
}