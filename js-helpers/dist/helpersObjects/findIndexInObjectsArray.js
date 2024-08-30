import { IsArray } from "./isArray";
export const FindIndexInObjectsArray = (objArray, objProperty, searchVal) => {
    if (!IsArray(objArray))
        return -1;
    for (let i = 0; i < objArray.length; i++) {
        if (objArray[i][objProperty] === searchVal)
            return i;
    }
    return -1;
};
