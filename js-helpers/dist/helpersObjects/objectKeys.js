export const ObjectKeys = (val) => {
    if (!val || typeof val !== 'object')
        return undefined;
    return Object.keys(val);
};
