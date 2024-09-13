/** Search value in objects array by object property */
export declare const FindObjectInArray: <T extends object>(objArray: T[], objProperty: keyof T, searchVal: T[keyof T]) => T | undefined;
