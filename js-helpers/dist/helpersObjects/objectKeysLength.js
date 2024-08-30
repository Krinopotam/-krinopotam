import { ObjectKeys } from "./objectKeys";
export const ObjectKeysLength = (val) => {
    const keys = ObjectKeys(val);
    return keys ? keys.length : 0;
};
