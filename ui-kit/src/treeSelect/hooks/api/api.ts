import {ITreeSelectNode, ITreeSelectProps} from '@src/treeSelect';
import {useCallback, useRef, useState} from 'react';
import {useDataFetcher} from '@src/treeSelect/hooks/dataFetcher';
import {GetNanoId, GetUuid, IsArray} from '@krinopotam/js-helpers';
import {ITreeSelectApi} from '@src/treeSelect/types/types';
import {IDFormModalApi} from '@src/dFormModal';
import {useDataSetState} from '@src/_shared/hooks/treeComponentApiMethods/useDataSetState';

import {useApiGetNode} from '@src/_shared/hooks/treeComponentApiMethods/useApiGetNode';
import {useApiAddNode} from '@src/_shared/hooks/treeComponentApiMethods/useApiAddNode';
import {useApiUpdateNode} from '@src/_shared/hooks/treeComponentApiMethods/useApiUpdateNode';
import {useApiGetNodes} from '@src/_shared/hooks/treeComponentApiMethods/useApiGetNodes';
import {useApiGetActiveNodeKey} from '@src/_shared/hooks/treeComponentApiMethods/useApiGetActiveNodeKey';
import {useApiGetActiveNode} from '@src/_shared/hooks/treeComponentApiMethods/useApiGetActiveNode';
import {useApiGetParentNode} from '@src/_shared/hooks/treeComponentApiMethods/ueApiGetParentNode';
import {useApiGetNextNodeKey} from '@src/_shared/hooks/treeComponentApiMethods/useApiGetNextNodeKey';
import {useApiGetPrevNodeKey} from '@src/_shared/hooks/treeComponentApiMethods/useApiGetPrevNodeKey';
import {useApiGetNextNode} from '@src/_shared/hooks/treeComponentApiMethods/useApiGetNextNode';
import {useApiGetPrevNode} from '@src/_shared/hooks/treeComponentApiMethods/useApiGetPrevNode';
import {useApiGetFieldNames} from '@src/_shared/hooks/treeComponentApiMethods/useApiGetFieldNames';
import {useApiGetSelectedKeys} from '@src/_shared/hooks/treeComponentApiMethods/useApiGetSelectedKeys';
import {useApiSetSelectedKeys} from '@src/_shared/hooks/treeComponentApiMethods/useApiSetSelectedKeys';
import {useApiGetSelectedNodes} from '@src/_shared/hooks/treeComponentApiMethods/useApiGetSelectedNodes';
import {useApiSelectNode} from '@src/_shared/hooks/treeComponentApiMethods/useApiSelectNode';
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
import {useSelectedState} from '@src/treeSelect/hooks/api/useSelectedState';
import {useOpenState} from '@src/treeSelect/hooks/api/useOpenState';
import {useApiGetIsOpen} from '@src/treeSelect/hooks/api/useApiGetIsOpen';
import {useApiSetIsOpen} from '@src/treeSelect/hooks/api/useApiSetIsOpen';
import {useApiPrepareNode} from '@src/treeSelect/hooks/api/useApiPrepareNode';
import {useApiGetIsReady} from '@src/treeSelect/hooks/api/useApiGetIsReady';
import {useApiSetIsReady} from '@src/treeSelect/hooks/api/useApiSetIsReady';
import {useApiGetEditGroupFormApi} from '@src/treeSelect/hooks/api/useApiGetEditGroupFormApi';
import {useApiGetEditFormApi} from '@src/treeSelect/hooks/api/useApiGetEditFormApi';
import {useApiGetIsFetching} from '@src/treeSelect/hooks/api/useApiGetIsFetching';
import {useApiSetIsFetching} from '@src/treeSelect/hooks/api/useApiSetIsFetching';
import {useApiGetFetchError} from '@src/treeSelect/hooks/api/useApiGetFetchError';
import {useApiSetFetchError} from '@src/treeSelect/hooks/api/useApiSetFetchError';
import {useApiGetIsAllFetched} from '@src/treeSelect/hooks/api/useApiGetIsAllFetched';
import {useApiSetIsAllFetched} from '@src/treeSelect/hooks/api/useApiSetIsAllFetched';
import {useApiGetMinSymbols} from '@src/treeSelect/hooks/api/useApiGetMinSymbols';
import {useApiSetMinSymbols} from '@src/treeSelect/hooks/api/useApiSetMinSymbols';
import {useApiFetchData} from '@src/treeSelect/hooks/api/useApiFetchData';
import {useApiDeleteNode} from '@src/treeSelect/hooks/api/useApiDeleteNode';

export const useInitApi = ({
    props,
    setProps,
}: {
    props: ITreeSelectProps;
    setProps: (props: ITreeSelectProps | ((prevValue: ITreeSelectProps) => ITreeSelectProps)) => void;
}) => {
    const [api] = useState((props.apiRef ?? {}) as ITreeSelectApi);
    const [editFormApi] = useState((props.editFormProps?.apiRef ?? {}) as IDFormModalApi);
    const [editGroupFormApi] = useState((props.editGroupFormProps?.apiRef ?? {}) as IDFormModalApi);
    const [isReady, setIsReady] = useState(false);
    const [fetching, setFetching] = useState(false); //is fetching now
    const [fetchError, setFetchError] = useState(''); //has fetching error
    const [allFetched, setAllFetched] = useState(false); //is all fetched
    const [minSymbols, setMinSymbols] = useState(0); //show min symbols error
    const [selectedKeys, setSelectedKeys] = useSelectedState(props);
    const [open, setOpen] = useOpenState(props);

    api.getFieldNames = useApiGetFieldNames(props.fieldNames);
    const fieldNames = api.getFieldNames();
    const prepareNode = useApiPrepareNode(props);

    const [dataSet, setDataset, isDataPlain, parentKeys] = useDataSetState(props.dataSet, fieldNames, prepareNode); //current dataSet
    const [expandedKeys, setExpandedKeys] = useExpandedKeysState(props.expandedKeys, props.defaultExpandedKeys, props.defaultExpandAll, parentKeys); //expanded keys

    /** Component Api methods*/
    api.getId = useApiGetId(props.componentId ?? 'treeSelect-' + GetNanoId());
    api.getProps = useApiGetProps(props);
    api.setProps = useApiSetProps(setProps);
    api.updateProps = useApiUpdateProps(props, setProps);
    api.getIsMounted = useApiIsMounted();

    /** Tree component Api methods */
    api.getDataSet = useApiGetDataSet(dataSet);
    api.setDataSet = useApiSetDataset(setDataset);
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

    api.deleteNode = useApiDeleteNode(api);

    /** Component own api methods */
    api.treeSelectRef = useRef(null);
    api.getButtonsApi = useApiGetButtonsApi<IButtonsRowApi & {refreshButtons: () => void}>();
    api.getIsReady = useApiGetIsReady(isReady);
    api.setIsReady = useApiSetIsReady(setIsReady);
    api.getIsOpen = useApiGetIsOpen(open);
    api.setIsOpen = useApiSetIsOpen(setOpen);
    api.getIsFetching = useApiGetIsFetching(fetching);
    api.setIsFetching = useApiSetIsFetching(setFetching);
    api.getFetchError = useApiGetFetchError(fetchError);
    api.setSetFetchError = useApiSetFetchError(setFetchError);
    api.getIsAllFetched = useApiGetIsAllFetched(allFetched);
    api.setIsAllFetched = useApiSetIsAllFetched(setAllFetched);
    api.getMinSymbols = useApiGetMinSymbols(minSymbols);
    api.setSetMynSymbols = useApiSetMinSymbols(setMinSymbols);

    const dataFetcher = useDataFetcher(api);
    api.fetchData = useApiFetchData(dataFetcher, api);

    api.addNodes = useAddNodes(api);
    api.updateNodes = useUpdateNodes(api);
    api.deleteNodes = useDeleteNodes(api);

    return api;
};

//todo remove
const useAddNodes = (api: ITreeSelectApi) => {
    return useCallback(
        (parentNode: ITreeSelectNode | undefined, newNodes: ITreeSelectNode | ITreeSelectNode[]) => {
            const _newNodes = IsArray(newNodes) ? (newNodes as ITreeSelectNode[]) : [newNodes as ITreeSelectNode];
            const fieldNames = api.getFieldNames();
            const keyField = fieldNames.key;
            const childrenField = fieldNames.children;
            const recursive = (nodes: ITreeSelectNode[], parent: ITreeSelectNode | undefined, newNodes: ITreeSelectNode[]) => {
                if (!parent) {
                    for (const newNode of newNodes) nodes.push(newNode);
                    return;
                }

                for (const node of nodes) {
                    if (!node[keyField]) continue;
                    if (node[keyField] === parent[keyField]) {
                        if (!node.isLeaf) {
                            if (!node[childrenField]) node[childrenField] = [];
                            const children = node[childrenField] as ITreeSelectNode[];
                            for (const newNode of newNodes) children.push(newNode);
                        } else {
                            for (const newNode of newNodes) nodes.push(newNode);
                        }
                        return true;
                    }

                    if (!node[childrenField]) continue;
                    if (recursive(node[childrenField] as ITreeSelectNode[], parent, newNodes)) return true;
                }
            };
            const dataSetClone = [...(api.getDataSet() ?? [])];

            for (const _newNode of _newNodes) {
                if (!_newNode[keyField]) _newNode[keyField] = GetUuid();
            }

            recursive(dataSetClone, parentNode, _newNodes);
            api.setDataSet(dataSetClone);
        },
        [api]
    );
};

const useUpdateNodes = (api: ITreeSelectApi) => {
    return useCallback(
        (updatedNodes: ITreeSelectNode | ITreeSelectNode[]) => {
            const _updatedNodes = IsArray(updatedNodes) ? (updatedNodes as ITreeSelectNode[]) : [updatedNodes as ITreeSelectNode];
            const fieldNames = api.getFieldNames();
            const keyField = fieldNames.key;
            const childrenField = fieldNames.children;
            const recursive = (nodes: ITreeSelectNode[], updatedNode: ITreeSelectNode) => {
                for (const node of nodes) {
                    if (!node[keyField]) continue;
                    if (node[keyField] === updatedNode[keyField]) {
                        const prevChildren = node[childrenField];
                        for (const key in updatedNode) node[key] = updatedNode[key];
                        node[childrenField] = prevChildren;
                        return true;
                    }

                    if (!node[childrenField]) continue;
                    if (recursive(node[childrenField] as ITreeSelectNode[], updatedNode)) return true;
                }
            };

            const dataSetClone = [...(api.getDataSet() ?? [])];
            for (const _updatedNode of _updatedNodes) {
                recursive(dataSetClone, _updatedNode);
            }
            api.setDataSet(dataSetClone);
        },
        [api]
    );
};

const useDeleteNodes = (api: ITreeSelectApi) => {
    return useCallback(
        (removeNodes: ITreeSelectNode | ITreeSelectNode[]) => {
            const _removeNodes = IsArray(removeNodes) ? (removeNodes as ITreeSelectNode[]) : [removeNodes as ITreeSelectNode];
            const fieldNames = api.getFieldNames();
            const keyField = fieldNames.key;
            const childrenField = fieldNames.children;
            const recursive = (nodes: ITreeSelectNode[], removeNode: ITreeSelectNode) => {
                for (let i = nodes.length - 1; i >= 0; i--) {
                    const node = nodes[i];
                    if (!node[keyField]) continue;
                    if (node[keyField] === removeNode[keyField]) {
                        nodes.splice(i, 1);
                        return true;
                    }
                    if (!node[childrenField]) continue;
                    if (recursive(node[childrenField] as ITreeSelectNode[], removeNode)) return true;
                }
            };

            const dataSetClone = [...(api.getDataSet() ?? [])];
            for (const _removeNode of _removeNodes) {
                recursive(dataSetClone, _removeNode);
            }
            api.setDataSet(dataSetClone);
        },
        [api]
    );
};
