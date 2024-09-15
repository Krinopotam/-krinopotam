import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {IKey} from '@krinopotam/service-types';

export const useApiSelectNode = (
    api: {
        getSelectedKeys: ITreeComponentApi['getSelectedKeys'];
        setSelectedKeys: ITreeComponentApi['setSelectedKeys'];
        getFieldNames: ITreeComponentApi['getFieldNames'];
    },
    multiple: boolean | undefined
): ITreeComponentApi['selectNode'] => {
    return (node, isSelect = true) => {
        const fieldNames = api.getFieldNames();
        const key: IKey = typeof node === 'object' ? (node[fieldNames.key] as IKey) : node;

        const selectedKeys = api.getSelectedKeys();
        if (isSelect) {
            if (selectedKeys?.includes(key)) return;
            if (multiple) api.setSelectedKeys([...(selectedKeys ?? []), key]);
            else api.setSelectedKeys([key]);
        } else {
            if (!selectedKeys?.includes(key)) return;
            if (multiple) api.setSelectedKeys(selectedKeys?.filter(curKey => curKey !== key));
            else api.setSelectedKeys([]);
        }
    };
};
