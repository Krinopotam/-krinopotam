import {AnyType, IKey} from '@krinopotam/service-types';
import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {getGroupsOnly} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getGroupsOnly';

export const useApiGetGroupsOnly = <T extends Record<string, AnyType>>(
    dataSet: T[] | undefined,
    api: {getFieldNames: ITreeComponentApi['getFieldNames']}
): ITreeComponentApi['getGroupsOnly'] => {
    return (removeBranch) => {
        const fieldNames = api.getFieldNames();
        const branchId = typeof removeBranch === 'object' ? (removeBranch[fieldNames.key] as IKey) : removeBranch;
        return getGroupsOnly(dataSet, fieldNames, branchId);
    }
};
