import {AnyType} from "@krinopotam/service-types";

export const useApiGetDataSet = <T extends Record<string, AnyType>>(dataSet: T[] | undefined): (() => T[] | undefined) => {
    return () => dataSet;
};
