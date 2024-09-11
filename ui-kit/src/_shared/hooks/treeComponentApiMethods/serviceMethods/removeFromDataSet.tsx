import {Key} from 'react';
import {findNodeIndex} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/findNodeIndex';

export const removeFromDataSet = (dataSet: Record<string, unknown>[]|undefined, key: Key | undefined, fieldNames: {key: string; children: string}) => {
    if (!key || !dataSet) return;
    const {idx, nodes} = findNodeIndex(dataSet, key, {key: fieldNames.key, children: fieldNames.children, title: 'title', parent: 'parent'});
    nodes?.splice(idx, 1);
};
