import {CloneObject} from '@krinopotam/js-helpers';
import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {IKey} from '@krinopotam/service-types';
import {removeFromTree} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/removeFromTree';

export const useApiRemoveNode = (api: {
    getDataSet: ITreeComponentApi['getDataSet'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
    getNextNodeKey: ITreeComponentApi['getNextNodeKey'];
    getPrevNodeKey: ITreeComponentApi['getPrevNodeKey'];
    selectNode: ITreeComponentApi['selectNode'];
    setDataSet: ITreeComponentApi['setDataSet'];
}): ITreeComponentApi['removeNode'] => {
    return (node, opts, externalDataSet) => {
        const fieldNames = api.getFieldNames();
        const key: IKey = typeof node === 'object' ? (node[fieldNames.key] as IKey) : node;

        const dataSet = externalDataSet ?? CloneObject(api.getDataSet());
        if (!dataSet) return;

        const prevKey = api.getPrevNodeKey(key, {defaultToBoundary: false}, dataSet);

        removeFromTree(key, dataSet, fieldNames);

        if (!externalDataSet) api.setDataSet(dataSet);

        let selectKey: IKey | undefined = undefined;
        if (opts?.select === 'next') selectKey = api.getNextNodeKey(prevKey, undefined, dataSet);
        else if (opts?.select === 'prev') {
            if (prevKey) selectKey = prevKey;
            else selectKey = api.getNextNodeKey(undefined, undefined, dataSet);
        }

        if (opts?.select !== 'keep') api.selectNode(key, false);

        if (selectKey) api.selectNode(selectKey, true);

        return dataSet;
    };
};
