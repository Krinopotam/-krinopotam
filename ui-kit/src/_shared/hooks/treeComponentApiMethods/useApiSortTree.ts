import {AnyType} from '@krinopotam/service-types';
import {sortNodes} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/sortNodes';
import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';

export const useApiSortTree = <T extends Record<string, AnyType> >(
    dataSet:T[] | undefined,
    comparator: (keyof T)[] | ((a: AnyType, b: AnyType) => number) | undefined,
    api: {
        getFieldNames: ITreeComponentApi['getFieldNames'];
        setDataSet: ITreeComponentApi['setDataSet'];
    }
): ITreeComponentApi<T>['sortTree'] => {
    return (order, extDataSet, extComparator) => {
        const fieldNames = api.getFieldNames();
        const data = extDataSet ?? dataSet;
        let compFn = extComparator ?? comparator;
        if (!compFn) compFn = [fieldNames.title]
        const result = sortNodes(data, compFn, order);
        if (!extDataSet) api.setDataSet(result);
        return result;
    };
};
