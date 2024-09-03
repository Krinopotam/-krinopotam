import { IsArray } from "./isArray";
export const FindObjectInArray = (objArray, objProperty, searchVal) => {
    if (!IsArray(objArray))
        return undefined;
    for (const item of objArray) {
        if (item[objProperty] === searchVal)
            return item;
    }
    return undefined;
};