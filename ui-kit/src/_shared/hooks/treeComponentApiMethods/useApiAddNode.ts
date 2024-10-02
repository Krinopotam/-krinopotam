import {CloneObject} from '@krinopotam/js-helpers/helpersObjects/cloneObject';
import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {addNodeToTree} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/addNodeToTree';

export const useApiAddNode = (api: {
    getProps: ()=>{groupsMode?:boolean};
    getDataSet: ITreeComponentApi['getDataSet'];
    setDataSet: ITreeComponentApi['setDataSet'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
    ensureNodeVisible: ITreeComponentApi['ensureNodeVisible'];
    selectNode: ITreeComponentApi['selectNode'];
    sortTree: ITreeComponentApi['sortTree'];
}): ITreeComponentApi['addNode'] => {
    return (node, target, position, opts, externalDataset) => {
        const props = api.getProps()
        let dataSet = externalDataset ?? CloneObject(api.getDataSet() ?? []);

        addNodeToTree(node, target, dataSet, api.getFieldNames(), position, props.groupsMode);
        if (opts?.sortNodes) dataSet = api.sortTree('asc', dataSet)!;

        if (!externalDataset) api.setDataSet(dataSet);
        if (opts?.ensureVisible) api.ensureNodeVisible(node, dataSet);
        if (opts?.select) api.selectNode(node, true);
        return dataSet;
    };
};
