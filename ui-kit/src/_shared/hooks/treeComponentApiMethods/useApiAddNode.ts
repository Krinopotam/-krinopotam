import {CloneObject} from '@krinopotam/js-helpers/helpersObjects/cloneObject';
import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {addNodeToTree} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/addNodeToTree';

export const useApiAddNode = (api: {
    getDataSet: ITreeComponentApi['getDataSet'];
    setDataSet: ITreeComponentApi['setDataSet'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
    ensureNodeVisible: ITreeComponentApi['ensureNodeVisible'];
    selectNode: ITreeComponentApi['selectNode'];
}): ITreeComponentApi['addNode'] => {
    return (node, target, position, opts, externalDataset) => {
        const dataSet = externalDataset ?? CloneObject(api.getDataSet() ?? []);
        addNodeToTree(dataSet, node, api.getFieldNames(), target, position, false);

        if (!externalDataset) api.setDataSet(dataSet);
        if (opts?.ensureVisible) api.ensureNodeVisible(node, dataSet);
        if (opts?.select) api.selectNode(node, true);
        return dataSet;
    };
};
