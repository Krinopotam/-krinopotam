/** Remove id field from dataSet values */
export const removeIds = <T extends Record<string, unknown>>(data: T[]): T[] => {
    if (!data) return [];
    return data.map(item => {
        delete item.id;
        return item;
    });
};