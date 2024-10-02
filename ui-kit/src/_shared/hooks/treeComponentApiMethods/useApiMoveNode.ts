import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {CloneObject} from '@krinopotam/js-helpers/helpersObjects/cloneObject';
import {moveNode} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/moveNode';

export const useApiMoveNode = (api: {
    getProps: () => {groupsMode?: boolean,};
    getDataSet: ITreeComponentApi['getDataSet'];
    setDataSet: ITreeComponentApi['setDataSet'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
    ensureNodeVisible: ITreeComponentApi['ensureNodeVisible'];
    selectNode: ITreeComponentApi['selectNode'];
    sortTree: ITreeComponentApi['sortTree'];
}): ITreeComponentApi['moveNode'] => {
    return (source, target, position, opts, extDataSet) => {
        const props = api.getProps();
        let dataSet = extDataSet ?? CloneObject(api.getDataSet() ?? []);

        moveNode(source, target, dataSet, api.getFieldNames(), position, props.groupsMode);
        if (opts?.sortNodes) dataSet = api.sortTree('asc', dataSet)!;

        if (!extDataSet) api.setDataSet(dataSet);

        if (opts?.ensureVisible) api.ensureNodeVisible(source, dataSet);
        if (opts?.select) api.selectNode(source, true);
        return dataSet;
    };
};
