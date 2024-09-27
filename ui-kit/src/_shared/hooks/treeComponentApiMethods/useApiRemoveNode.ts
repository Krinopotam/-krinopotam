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
        if (!dataSet?.length) return;

        const prevKey = api.getPrevNodeKey(key, {defaultToBoundary: false}, dataSet);

        api.selectNode(key, false, true, dataSet); //deselect removing node and it children nodes
        removeFromTree(key, dataSet, fieldNames);

        let selectKey: IKey | undefined = undefined;
        if (opts?.select === 'next') selectKey = api.getNextNodeKey(prevKey, undefined, dataSet);
        else if (opts?.select === 'prev') {
            if (prevKey) selectKey = prevKey;
            else selectKey = api.getNextNodeKey(undefined, undefined, dataSet);
        }

        if (selectKey) {
            /** WORKAROUND: forced to use setTimeout since api.selectNode is used twice and due to the specificity of useState the state overwrites each other*/
            setTimeout(() => {
                api.selectNode(selectKey, true);
            }, 0);
        }

        if (!externalDataSet) api.setDataSet(dataSet);
        return dataSet;
    };
};
