/** Remove properties from object by type */
export const RemovePropertiesByValue = <TObject>(obj: TObject, targetValue: unknown): TObject => {
    if (typeof obj !== 'object' || obj === null) return obj;

    for (const key in obj) {
        if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;
        const value = obj[key];
        if (value === targetValue) {
            delete obj[key];
            continue
        }

        if (typeof value === 'object' && value !== null && value !== targetValue) {
            obj[key] = RemovePropertiesByValue(value, targetValue);
            if (Object.keys(value).length === 0) delete obj[key];

        }
    }

    return obj;
}