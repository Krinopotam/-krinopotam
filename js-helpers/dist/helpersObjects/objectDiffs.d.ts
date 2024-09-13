/**
 * Deep compares two JavaScript Objects, including nested structures of arrays and object
 * Uses deep-object-diff
 */
export declare const ObjectDiffs: (obj1: object, obj2: object, mode?: "added" | "deleted" | "updated" | "detailed") => object;
