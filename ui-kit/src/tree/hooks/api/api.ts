// noinspection DuplicatedCode

import {useRef, useState} from 'react';
import {GetNanoId} from '@krinopotam/js-helpers/helpersString/getNanoId';
import {IDFormModalApi} from '@src/dFormModal';
import {useDataSetState} from '@src/_shared/hooks/treeComponentApiMethods/useDataSetState';

import {useApiGetNode} from '@src/_shared/hooks/treeComponentApiMethods/useApiGetNode';
import {useApiAddNode} from '@src/_shared/hooks/treeComponentApiMethods/useApiAddNode';
import {useApiUpdateNode} from '@src/_shared/hooks/treeComponentApiMethods/useApiUpdateNode';
import {useApiGetNodes} from '@src/_shared/hooks/treeComponentApiMethods/useApiGetNodes';
import {useApiGetActiveNodeKey} from '@src/_shared/hooks/treeComponentApiMethods/useApiGetActiveNodeKey';
import {useApiGetActiveNode} from '@src/_shared/hooks/treeComponentApiMethods/useApiGetActiveNode';
import {useApiGetParentNode} from '@src/_shared/hooks/treeComponentApiMethods/useApiGetParentNode';
import {useApiGetNextNodeKey} from '@src/_shared/hooks/treeComponentApiMethods/useApiGetNextNodeKey';
import {useApiGetPrevNodeKey} from '@src/_shared/hooks/treeComponentApiMethods/useApiGetPrevNodeKey';
import {useApiGetNextNode} from '@src/_shared/hooks/treeComponentApiMethods/useApiGetNextNode';
import {useApiGetPrevNode} from '@src/_shared/hooks/treeComponentApiMethods/useApiGetPrevNode';
import {useApiGetFieldNames} from '@src/_shared/hooks/treeComponentApiMethods/useApiGetFieldNames';
import {useApiGetProps} from '@src/_shared/hooks/componentApiMethods/useApiGetProps';
import {useApiSetProps} from '@src/_shared/hooks/componentApiMethods/useApiSetProps';
import {useApiUpdateProps} from '@src/_shared/hooks/componentApiMethods/useApiUpdateProps';
import {useApiEnsureNodeVisible} from '@src/_shared/hooks/treeComponentApiMethods/useApiEnsureNodeVisible';
import {useExpandedKeysState} from '@src/_shared/hooks/treeComponentApiMethods/useExpandedKeysState';
import {useApiGetExpandedKeys} from '@src/_shared/hooks/treeComponentApiMethods/useApiGetExpandedKeys';
import {useApiGetExpandedNodes} from '@src/_shared/hooks/treeComponentApiMethods/useApiGetExpandedNodes';
import {useApiIsNodeExpanded} from '@src/_shared/hooks/treeComponentApiMethods/useApiIsNodeExpanded';
import {useApiExpandNode} from '@src/_shared/hooks/treeComponentApiMethods/useApiExpandNode';
import {useApiCollapseNode} from '@src/_shared/hooks/treeComponentApiMethods/useApiCollapseNode';
import {useApiToggleNode} from '@src/_shared/hooks/treeComponentApiMethods/useApiToggleNode';
import {useApiExpandParentNodes} from '@src/_shared/hooks/treeComponentApiMethods/useApiExpandParentNodes';
import {useApiSetExpandedKeys} from '@src/_shared/hooks/treeComponentApiMethods/useApiSetExpandedKeys';
import {useApiGetIsDataPlain} from '@src/_shared/hooks/treeComponentApiMethods/useApiGetIsDataPlain';
import {useApiSetDataset} from '@src/_shared/hooks/treeComponentApiMethods/useApiSetDataset';
import {useApiGetDataSet} from '@src/_shared/hooks/treeComponentApiMethods/useApiGetDataSet';
import {useApiRemoveNode} from '@src/_shared/hooks/treeComponentApiMethods/useApiRemoveNode';
import {useApiMoveNode} from '@src/_shared/hooks/treeComponentApiMethods/useApiMoveNode';
import {useApiGetId} from '@src/_shared/hooks/componentApiMethods/useApiGetId';
import {useApiIsMounted} from '@src/_shared/hooks/componentApiMethods/useApiIsMointed';
import {useApiGetButtonsApi} from '@src/_shared/hooks/componentApiMethods/useApiGetButtonsApi';
import {IButtonsRowApi} from '@src/buttonsRow';
import {useApiIsNodeSelected} from '@src/_shared/hooks/treeComponentApiMethods/useApiIsNodeSelected';
import {useApiGetIsReady} from '@src/tree/hooks/api/useApiGetIsReady';
import {useApiSetIsReady} from '@src/tree/hooks/api/useApiSetIsReady';
import {useApiGetEditGroupFormApi} from '@src/tree/hooks/api/useApiGetEditGroupFormApi';
import {useApiGetEditFormApi} from '@src/tree/hooks/api/useApiGetEditFormApi';
import {useT} from '@src/tree/hooks/api/useApiT';
import {IExtTreeProps} from '@src/tree';
import {IExtTreeApi} from '@src/tree/types/types';
import {useApiPrepareNode} from '@src/tree/hooks/api/useApiPrepareNode';
import {useApiGetSelectedKeys} from '@src/_shared/hooks/treeComponentApiMethods/useApiGetSelectedKeys';
import {useApiGetSelectedNodes} from '@src/_shared/hooks/treeComponentApiMethods/useApiGetSelectedNodes';
import {useApiSelectNode} from '@src/_shared/hooks/treeComponentApiMethods/useApiSelectNode';
import {useSelectedState} from '@src/_shared/hooks/treeComponentApiMethods/useSelectedState';
import {useApiSetSelectedKeys} from '@src/_shared/hooks/treeComponentApiMethods/useApiSetSelectedKeys';
import {useApiGetIsLoading} from '@src/tree/hooks/api/useApiGetIsLoading';
import {useApiSetIsLoading} from '@src/tree/hooks/api/useApiSetIsLoading';

export const useInitApi = ({
    props,
    setProps,
}: {
    props: IExtTreeProps;
    setProps: (props: IExtTreeProps | ((prevValue: IExtTreeProps) => IExtTreeProps)) => void;
}) => {
    const [api] = useState((props.apiRef ?? {}) as IExtTreeApi);
    const [editFormApi] = useState((props.editFormProps?.apiRef ?? {}) as IDFormModalApi);
    const [editGroupFormApi] = useState((props.editGroupFormProps?.apiRef ?? {}) as IDFormModalApi);
    const [isReady, setIsReady] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedKeys, setSelectedKeys] = useSelectedState(props.selectedKeys);

    const fieldNames = useApiGetFieldNames(props)();
    const prepareNode = useApiPrepareNode(props);

    const [dataSet, setDataset, isDataPlain, parentKeys] = useDataSetState(props.dataSet, fieldNames, prepareNode); //current dataSet
    const [expandedKeys, setExpandedKeys] = useExpandedKeysState(props.expandedKeys, props.defaultExpandedKeys, props.defaultExpandAll, parentKeys); //expanded keys

    const apiMethods: IExtTreeApi = {
        /** Component Api methods*/
        getId: useApiGetId(props.id ?? 'tree-' + GetNanoId()),
        getProps: useApiGetProps(props),
        setProps: useApiSetProps(setProps),
        updateProps: useApiUpdateProps(props, setProps),
        getIsMounted: useApiIsMounted(),

        /** Tree component Api methods */
        getFieldNames: useApiGetFieldNames(props),
        getDataSet: useApiGetDataSet(dataSet),
        setDataSet: useApiSetDataset(setDataset, props?.onDataSetChanged),
        isDataPlainList: useApiGetIsDataPlain(isDataPlain),
        getEditFormApi: useApiGetEditFormApi(editFormApi),
        getEditGroupFormApi: useApiGetEditGroupFormApi(editGroupFormApi),
        getSelectedKeys: useApiGetSelectedKeys(selectedKeys),
        setSelectedKeys: useApiSetSelectedKeys(setSelectedKeys),
        getSelectedNodes: useApiGetSelectedNodes(api),
        isNodeSelected: useApiIsNodeSelected(api),
        selectNode: useApiSelectNode(api, props.multiple),
        getActiveNodeKey: useApiGetActiveNodeKey(api),
        getActiveNode: useApiGetActiveNode(api),
        getExpandedKeys: useApiGetExpandedKeys(expandedKeys),
        setExpandedKeys: useApiSetExpandedKeys(setExpandedKeys),
        getExpandedNodes: useApiGetExpandedNodes(api),
        isNodeExpanded: useApiIsNodeExpanded(api),
        expandNode: useApiExpandNode(api),
        collapseNode: useApiCollapseNode(api),
        toggleNode: useApiToggleNode(api),
        expandParentNodes: useApiExpandParentNodes(api),
        getNode: useApiGetNode(api),
        getNodes: useApiGetNodes(api),
        getNextNodeKey: useApiGetNextNodeKey(api),
        getPrevNodeKey: useApiGetPrevNodeKey(api),
        getNextNode: useApiGetNextNode(api),
        getPrevNode: useApiGetPrevNode(api),
        getParentNode: useApiGetParentNode(api),
        addNode: useApiAddNode(api),
        updateNode: useApiUpdateNode(api),
        removeNode: useApiRemoveNode(api),
        moveNode: useApiMoveNode(api),
        ensureNodeVisible: useApiEnsureNodeVisible(api),

        /** Component own api methods */
        t: useT(api),
        treeRef: useRef(null),
        getButtonsApi: useApiGetButtonsApi<IButtonsRowApi & {refreshButtons: () => void}>(),
        getIsReady: useApiGetIsReady(isReady),
        setIsReady: useApiSetIsReady(setIsReady),
        getIsLoading: useApiGetIsLoading(isLoading),
        setIsLoading: useApiSetIsLoading(setIsLoading),
    };
    return Object.assign(api, apiMethods);
};
