export const useApiGetDataSet = <T extends Record<string, unknown>>(dataSet: T[] | undefined): (() => T[] | undefined) => {
    return () => dataSet;
};
