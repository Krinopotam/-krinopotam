import { ObjectKeys } from "./objectKeys";
/**  Returns object's keys count */
export const ObjectKeysLength = (val) => {
    const keys = ObjectKeys(val);
    return keys ? keys.length : 0;
};
