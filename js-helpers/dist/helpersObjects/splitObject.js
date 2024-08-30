export const SplitObject = (obj, propNames) => {
    const obj1 = {};
    const obj2 = {};
    for (const key in obj) {
        if (propNames[key])
            obj1[key] = obj[key];
        else
            obj2[key] = obj[key];
    }
    return [obj1, obj2];
};
