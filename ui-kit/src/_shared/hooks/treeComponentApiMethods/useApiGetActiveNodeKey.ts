import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';

export const useApiGetActiveNodeKey = (api: {getSelectedKeys: ITreeComponentApi['getSelectedKeys']}): ITreeComponentApi['getActiveNodeKey'] => {
    return singleOnly => {
        const selectedKeys = api.getSelectedKeys();
        if (!selectedKeys?.length) return undefined;
        if (singleOnly) return selectedKeys?.length === 1 ? selectedKeys[0] : undefined;
        return selectedKeys[selectedKeys.length - 1];
    };
};
