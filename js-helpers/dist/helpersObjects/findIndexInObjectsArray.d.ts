/** Search index in objects array with specified object property */
export declare const FindIndexInObjectsArray: <T extends Record<string, unknown>>(objArray: T[], objProperty: keyof T, searchVal: T[keyof T]) => number;
