import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {CloneObject} from '@krinopotam/js-helpers/helpersObjects/cloneObject';
import {moveNode} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/moveNode';

export const useApiMoveNode = (api: {
    getProps: () => {groupsMode?: boolean};
    getDataSet: ITreeComponentApi['getDataSet'];
    setDataSet: ITreeComponentApi['setDataSet'];
    getFieldNames: ITreeComponentApi['getFieldNames'];
    ensureNodeVisible: ITreeComponentApi['ensureNodeVisible'];
    selectNode: ITreeComponentApi['selectNode'];
}): ITreeComponentApi['moveNode'] => {
    return (source, target, position, opts, externalDataSet) => {
        const props = api.getProps();
        const dataSet = externalDataSet ?? CloneObject(api.getDataSet() ?? []);

        moveNode(source, target, dataSet, api.getFieldNames(), position, props.groupsMode);

        if (!externalDataSet) api.setDataSet(dataSet);

        if (opts?.ensureVisible) api.ensureNodeVisible(source, dataSet);
        if (opts?.select) api.selectNode(source, true);
        return dataSet;
    };
};
