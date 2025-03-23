/** Add id field to dataSet values */
export const addIds = <T extends Record<string, unknown>>(data: T[]): T[] => {
    let index = 0;
    if (!data) return [];
    return data.map(item => {
        return {...item, id: item.id ?? index++};
    });
};