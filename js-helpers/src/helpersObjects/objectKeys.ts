/** Returns object's keys list as string array */
export const ObjectKeys = <T extends object | undefined | null>(val: T): Array<keyof T> | undefined => {
    if (!val || typeof val !== 'object') return undefined;
    return Object.keys(val) as Array<keyof T>;
};
