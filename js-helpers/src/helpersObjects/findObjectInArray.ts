import {IsArray} from "./isArray";

/** Search value in objects array by object property */
export const FindObjectInArray = <T extends object>(objArray: T[], objProperty: keyof T, searchVal: T[keyof T]): T | undefined => {
    if (!IsArray(objArray)) return undefined;

    for (const item of objArray) {
        if (item[objProperty] === searchVal) return item;
    }

    return undefined;
};
