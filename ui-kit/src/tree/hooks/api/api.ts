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

    api.getFieldNames = useApiGetFieldNames(props);
    const fieldNames = api.getFieldNames();
    const prepareNode = useApiPrepareNode(props);

    const [dataSet, setDataset, isDataPlain, parentKeys] = useDataSetState(props.dataSet, fieldNames, prepareNode); //current dataSet
    const [expandedKeys, setExpandedKeys] = useExpandedKeysState(props.expandedKeys, props.defaultExpandedKeys, props.defaultExpandAll, parentKeys); //expanded keys

    /** Component Api methods*/
    api.getId = useApiGetId(props.id ?? 'tree-' + GetNanoId());
    api.getProps = useApiGetProps(props);
    api.setProps = useApiSetProps(setProps);
    api.updateProps = useApiUpdateProps(props, setProps);
    api.getIsMounted = useApiIsMounted();

    /** Tree component Api methods */
    api.getDataSet = useApiGetDataSet(dataSet);
    api.setDataSet = useApiSetDataset(setDataset, props?.onDataSetChanged);

    api.isDataPlainList = useApiGetIsDataPlain(isDataPlain);
    api.getEditFormApi = useApiGetEditFormApi(editFormApi);
    api.getEditGroupFormApi = useApiGetEditGroupFormApi(editGroupFormApi);
    api.getSelectedKeys = useApiGetSelectedKeys(selectedKeys);
    api.setSelectedKeys = useApiSetSelectedKeys(setSelectedKeys);
    api.getSelectedNodes = useApiGetSelectedNodes(api);
    api.isNodeSelected = useApiIsNodeSelected(api);
    api.selectNode = useApiSelectNode(api, props.multiple);
    api.getActiveNodeKey = useApiGetActiveNodeKey(api);
    api.getActiveNode = useApiGetActiveNode(api);
    api.getExpandedKeys = useApiGetExpandedKeys(expandedKeys);
    api.setExpandedKeys = useApiSetExpandedKeys(setExpandedKeys);
    api.getExpandedNodes = useApiGetExpandedNodes(api);
    api.isNodeExpanded = useApiIsNodeExpanded(api);
    api.expandNode = useApiExpandNode(api);
    api.collapseNode = useApiCollapseNode(api);
    api.toggleNode = useApiToggleNode(api);
    api.expandParentNodes = useApiExpandParentNodes(api);
    api.getNode = useApiGetNode(api);
    api.getNodes = useApiGetNodes(api);
    api.getNextNodeKey = useApiGetNextNodeKey(api);
    api.getPrevNodeKey = useApiGetPrevNodeKey(api);
    api.getNextNode = useApiGetNextNode(api);
    api.getPrevNode = useApiGetPrevNode(api);
    api.getParentNode = useApiGetParentNode(api);
    api.addNode = useApiAddNode(api);
    api.updateNode = useApiUpdateNode(api);
    api.removeNode = useApiRemoveNode(api);
    api.moveNode = useApiMoveNode(api);
    api.ensureNodeVisible = useApiEnsureNodeVisible(api);

    /** Component own api methods */
    api.t = useT(api);
    api.treeRef = useRef(null);
    api.getButtonsApi = useApiGetButtonsApi<IButtonsRowApi & {refreshButtons: () => void}>();
    api.getIsReady = useApiGetIsReady(isReady);
    api.setIsReady = useApiSetIsReady(setIsReady);
    api.getIsLoading = useApiGetIsLoading(isLoading);
    api.setIsLoading = useApiSetIsLoading(setIsLoading);

    return api;
};

