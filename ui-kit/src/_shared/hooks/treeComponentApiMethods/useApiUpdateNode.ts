import {CloneObject} from '@krinopotam/js-helpers/helpersObjects/cloneObject';
import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {updateNodeInTree} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/updateNodeInTree';

export const useApiUpdateNode = (api: {
    getProps: () => {groupsMode?: boolean};
    getFieldNames: ITreeComponentApi['getFieldNames'];
    getDataSet: ITreeComponentApi['getDataSet'];
    setDataSet: ITreeComponentApi['setDataSet'];
    selectNode: ITreeComponentApi['selectNode'];
    ensureNodeVisible: ITreeComponentApi['ensureNodeVisible'];
    sortTree: ITreeComponentApi['sortTree'];
}): ITreeComponentApi['updateNode'] => {
    return (node, target, opts, externalDataset) => {
        const fieldNames = api.getFieldNames();
        const props = api.getProps();

        let dataSet = externalDataset ?? CloneObject(api.getDataSet() ?? []);

        updateNodeInTree(node, target, dataSet, fieldNames, props.groupsMode);
        if (opts?.sortNodes) dataSet = api.sortTree('asc', dataSet)!;

        if (!externalDataset) api.setDataSet(dataSet);
        if (opts?.ensureVisible) api.ensureNodeVisible(node, dataSet);
        if (opts?.select) api.selectNode(node, true);
        return dataSet;
    };
};
