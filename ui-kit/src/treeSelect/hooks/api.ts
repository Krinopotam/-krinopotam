import {ITreeSelectNode, ITreeSelectProps, ITreeSelectValue} from '@src/treeSelect';
import React, {Key, useCallback, useEffect, useRef, useState} from 'react';
import {useIsMountedRef} from '@krinopotam/common-hooks';
import {useDataFetcher} from '@src/treeSelect/hooks/dataFetcher';
import runDebounce from 'lodash.debounce';
import {IButtonsRowApi} from '@src/buttonsRow';
import {GetNanoId, GetUuid, IsArray} from '@krinopotam/js-helpers';
import {ITreeSelectApi} from '@src/treeSelect/types/types';
import {IDFormModalApi} from '@src/dFormModal';
import {useApiDataSetState} from '@src/_shared/hooks/treeComponentApiMethods/useApiDataSetState';

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
import {useApiExpandedKeysState} from '@src/_shared/hooks/treeComponentApiMethods/useApiExpandedKeysState';
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

export const useInitApi = ({
    api,
    props,
    setProps,
}: {
    api: ITreeSelectApi;
    props: ITreeSelectProps;
    setProps: (props: ITreeSelectProps | ((prevValue: ITreeSelectProps) => ITreeSelectProps)) => void;
}) => {
    const isMountedRef = useIsMountedRef();
    const [componentId] = useState(props.componentId ?? 'treeSelect-' + GetNanoId());
    const [buttonsApi] = useState({} as IButtonsRowApi & {refreshButtons: () => void});
    const [editFormApi] = useState((props.editFormProps?.apiRef ?? {}) as IDFormModalApi);
    const [editGroupFormApi] = useState((props.editGroupFormProps?.apiRef ?? {}) as IDFormModalApi);
    const [isReady, setIsReady] = useState(false);
    const [fetching, setFetching] = useState(false); //is fetching now
    const [fetchError, setFetchError] = useState(''); //has fetching error
    const [allFetched, setAllFetched] = useState(false); //is all fetched
    const [minSymbols, setMinSymbols] = useState(0); //show min symbols error
    const [selectedKeys, setSelectedKeys] = useSelected(props);

    api.getFieldNames = useApiGetFieldNames(props.fieldNames);
    const fieldNames = api.getFieldNames();
    const prepareNode = usePrepareNode(props);

    const [dataSet, setDataset, isDataPlain, parentKeys] = useApiDataSetState(props.dataSet, fieldNames, prepareNode); //current dataSet
    const [expandedKeys, setExpandedKeys] = useApiExpandedKeysState(props.expandedKeys, props.treeDefaultExpandedKeys, props.defaultExpandAll, parentKeys); //expanded keys

    api.treeSelectRef = useRef(null);
    api.getId = useApiGetId(componentId);
    api.getProps = useApiGetProps(props);
    api.setProps = useApiSetProps(setProps);
    api.getDataSet = useApiGetDataSet(dataSet);
    api.setDataSet = useApiSetDataset(setDataset);
    api.isDataPlainList = useApiGetIsDataPlain(isDataPlain);
    api.updateProps = useApiUpdateProps(props, setProps);
    api.prepareNode = usePrepareNode(props);
    api.getButtonsApi = useApiGetButtonsApi(buttonsApi);
    api.getEditFormApi = useApiGetEditFormApi(editFormApi);
    api.getEditGroupFormApi = useApiGetEditGroupFormApi(editGroupFormApi);
    api.getIsMounted = useApiIsMounted(isMountedRef);
    api.getSelectedKeys = useApiGetSelectedKeys(selectedKeys);
    api.setSelectedKeys = useApiSetSelectedKeys(setSelectedKeys);
    api.getSelectedNodes = useApiGetSelectedNodes(api);
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
    //api.deleteNode = useApiDeleteNode(api);
    api.ensureNodeVisible = useApiEnsureNodeVisible(api);

    api.getIsReady = useApiGetIsReady(isReady);
    api.setIsReady = useApiSetIsReady(setIsReady);
    api.getIsFetching = useApiGetIsFetching(fetching);
    api.setIsFetching = useApiSetIsFetching(setFetching);
    api.getFetchError = useApiGetFetchError(fetchError);
    api.setSetFetchError = useApiSetFetchError(setFetchError);
    api.getIsAllFetched = useApiGetIsAllFetched(allFetched);
    api.setIsAllFetched = useApiSetIsAllFetched(setAllFetched);
    api.getMinSymbols = useApiGetMinSymbols(minSymbols);
    api.setSetMynSymbols = useApiSetMinSymbols(setMinSymbols);

    const dataFetcher = useDataFetcher(api);
    api.fetchData = useFetchData(dataFetcher, api);

    api.addNodes = useAddNodes(api);
    api.updateNodes = useUpdateNodes(api);
    api.deleteNodes = useDeleteNodes(api);
};

/** Get the current TreeSelect id */
const useApiGetId = (componentId: string) => {
    return useCallback(() => {
        return componentId;
    }, [componentId]);
};

/** Get the buttonsApi */
const useApiGetButtonsApi = (buttonsApi: IButtonsRowApi & {refreshButtons: () => void}) => {
    return useCallback(() => buttonsApi, [buttonsApi]);
};

/** Get the editFormApi */
const useApiGetEditFormApi = (editFormApi: IDFormModalApi) => {
    return useCallback(() => editFormApi, [editFormApi]);
};

/** Get the editGroupFormApi */
const useApiGetEditGroupFormApi = (editGroupFormApi: IDFormModalApi) => {
    return useCallback(() => editGroupFormApi, [editGroupFormApi]);
};

const useSelected = (props: ITreeSelectProps): [selectedKeys: Key[] | undefined, setSelectedKeys: React.Dispatch<React.SetStateAction<Key[] | undefined>>] => {
    const [selectedKeys, setSelectedKeys] = useState(valueToArray(props.value));
    /** Set selectedKeys if props changed*/
    useEffect(() => {
        setSelectedKeys(valueToArray(props.value));
    }, [props.value]);

    return [selectedKeys, setSelectedKeys];
};

const valueToArray = (value: ITreeSelectValue | undefined) => {
    if (!value) return undefined;
    if (!Array.isArray(value)) return [value];
    return value;
};

const useApiIsMounted = (isMountedRef: React.MutableRefObject<boolean>) => {
    return useCallback(() => isMountedRef.current, [isMountedRef]);
};

const usePrepareNode = (props: ITreeSelectProps) => {
    return useCallback(
        (node: ITreeSelectNode) => {
            let nodeClone = {...node};
            if (props.titleRender) nodeClone.__title = props.titleRender(nodeClone);
            if (props.labelRender) nodeClone.__label = props.labelRender(nodeClone);
            if (props.dataMutator) nodeClone = props.dataMutator(nodeClone);
            nodeClone.originalData = node;
            return nodeClone;
        },
        [props]
    );
};

const useApiGetIsReady = (isReady: boolean) => {
    return useCallback(() => isReady, [isReady]);
};

const useApiSetIsReady = (setIsReady: (value: boolean) => void) => {
    return useCallback(
        (isReady: boolean) => {
            setIsReady(isReady);
        },
        [setIsReady]
    );
};

const useApiGetIsFetching = (isFetching: boolean) => {
    return useCallback(() => isFetching, [isFetching]);
};

const useApiSetIsFetching = (setIsFetching: (value: boolean) => void) => {
    return useCallback(
        (isFetching: boolean) => {
            setIsFetching(isFetching);
        },
        [setIsFetching]
    );
};

const useApiGetFetchError = (fetchError: string) => {
    return useCallback(() => fetchError, [fetchError]);
};

const useApiSetFetchError = (setFetchError: (value: string) => void) => {
    return useCallback(
        (fetchError: string | null) => {
            setFetchError(fetchError ?? '');
        },
        [setFetchError]
    );
};

const useApiGetIsAllFetched = (isAllFetched: boolean) => {
    return useCallback(() => isAllFetched, [isAllFetched]);
};

const useApiSetIsAllFetched = (setIsAllFetched: (value: boolean) => void) => {
    return useCallback(
        (isAllFetched: boolean) => {
            setIsAllFetched(isAllFetched);
        },
        [setIsAllFetched]
    );
};

const useApiGetMinSymbols = (minSymbols: number) => {
    return useCallback(() => minSymbols, [minSymbols]);
};

const useApiSetMinSymbols = (setMinSymbols: (value: number) => void) => {
    return useCallback(
        (isAllFetched: number) => {
            setMinSymbols(isAllFetched);
        },
        [setMinSymbols]
    );
};

const useFetchData = (dataFetcher: (searchString: string) => void, api: ITreeSelectApi) => {
    return useCallback(
        (search: string, debounce?: boolean) => {
            const debounceFetcher = runDebounce(dataFetcher, api.getProps().debounce ?? 0);
            if (!debounce) dataFetcher(search);
            else debounceFetcher(search);
        },
        [api, dataFetcher]
    );
};

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
