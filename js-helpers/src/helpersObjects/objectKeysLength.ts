import {ObjectKeys} from "./objectKeys";

/**  Returns object's keys count */
export const ObjectKeysLength = (val: object | null | undefined): number => {
    const keys = ObjectKeys(val);
    return keys ? keys.length : 0;
};