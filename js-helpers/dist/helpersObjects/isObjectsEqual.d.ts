/**
 * Uses lodash isEqual
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are **not** supported.
 * @param obj1 The value to compare.
 * @param obj2 The other value to compare.
 * @returns Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var obj1 = { 'user': 'fred' };
 * var obj2 = { 'user': 'fred' };
 *
 * _.isEqual(object, other);
 * // => true
 * */
export declare const IsObjectsEqual: <TObject, TSource>(obj1: TObject, obj2: TSource) => boolean;
