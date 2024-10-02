import {IKey} from '@krinopotam/service-types';
import {getGroupsOnly} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getGroupsOnly';
import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';

export const useApiGetGroupsOnly = (api: {
    getDataSet: ITreeComponentApi['getDataSet'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
}): ITreeComponentApi['getGroupsOnly'] => {
    return (removeBranch, extDataSet) => {
        const dataSet = extDataSet ?? api.getDataSet();
        const fieldNames = api.getFieldNames();
        const branchId = typeof removeBranch === 'object' ? (removeBranch[fieldNames.key] as IKey) : removeBranch;
        return getGroupsOnly(dataSet, fieldNames, branchId);
    };
};
