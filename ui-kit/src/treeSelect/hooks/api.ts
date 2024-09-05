import {ITreeSelectNode, ITreeSelectProps, ITreeSelectValue} from '@src/treeSelect';
import React, {Key, useCallback, useEffect, useRef, useState} from 'react';
import {useIsMountedRef} from '@krinopotam/common-hooks';
import {useDataFetcher} from '@src/treeSelect/hooks/dataFetcher';
import runDebounce from 'lodash.debounce';
import {IButtonsRowApi} from '@src/buttonsRow';
import {GetUuid, IsArray} from '@krinopotam/js-helpers';
import {ITreeSelectApi} from '@src/treeSelect/types/types';
import {IDFormModalApi} from '@src/dFormModal';
import {useFieldNames, useGetFieldNames} from '@src/_shared/hooks/treeComponentApiMethods/useGetFieldNames';
import {useDataSet, useGetDataSet, useIsDataPlainList, useSetDataSet} from '@src/_shared/hooks/treeComponentApiMethods/useDataSet';
import {
    useCollapseNode,
    useExpandedKeys,
    useExpandNode,
    useExpandParentNodes,
    useGetExpandedKeys,
    useGetExpandedNodes,
    useIsNodeExpanded,
    useSetExpandedKeys,
    useToggleNode,
} from '@src/_shared/hooks/treeComponentApiMethods/useExpand';
import {useGetNode, useGetNodes} from '@src/_shared/hooks/treeComponentApiMethods/useGetNode';
import {useGetProps, useSetProps, useUpdateProps} from '@src/_shared/hooks/componentApiMethods/useProps';
import {useGetNextNode, useGetNextNodeKey, useGetPrevNode, useGetPrevNodeKey} from '@src/_shared/hooks/treeComponentApiMethods/useGetNextNode';
import {useGetParentNode} from '@src/_shared/hooks/treeComponentApiMethods/getParentNode';
import {useGetSelectedKeys, useGetSelectedNodes, useSelectNode, useSetSelectedKeys} from '@src/_shared/hooks/treeComponentApiMethods/useSelected';
import {useAddNode} from '@src/_shared/hooks/treeComponentApiMethods/addNode';
import {useGetActiveNode, useGetActiveNodeKey} from '@src/_shared/hooks/treeComponentApiMethods/useActiveNode';

export const useInitApi = ({
    api,
    componentId,
    props,
    setProps,
    buttonsApi,
    editFormApi,
    editGroupFormApi,
}: {
    api: ITreeSelectApi;
    componentId: string;
    props: ITreeSelectProps;
    setProps: (props: ITreeSelectProps | ((prevValue: ITreeSelectProps) => ITreeSelectProps)) => void;
    buttonsApi: IButtonsRowApi & {refreshButtons: () => void};
    editFormApi: IDFormModalApi;
    editGroupFormApi: IDFormModalApi;
}) => {
    const isMountedRef = useIsMountedRef();
    const [isReady, setIsReady] = useState(false);
    const [fetching, setFetching] = useState(false); //is fetching now
    const [fetchError, setFetchError] = useState(''); //has fetching error
    const [allFetched, setAllFetched] = useState(false); //is all fetched
    const [minSymbols, setMinSymbols] = useState(0); //show min symbols error
    const [selectedKeys, setSelectedKeys] = useSelected(props);
    const [isDataPlain, setIsDataPlain] = useState(false); //is dataSet plain (without children)
    const [expandedKeys, setExpandedKeys] = useExpandedKeys(props); //expanded keys
    const [dataSet, setDataSet] = useDataSet(props, setIsDataPlain, setExpandedKeys, prepareNode); //current dataSet
    const fieldNames = useFieldNames(props);

    api.treeSelectRef = useRef(null);
    api.getFieldNames = useGetFieldNames(props);

    api.getId = useApiGetId(componentId);
    api.getButtonsApi = useApiGetButtonsApi(buttonsApi);
    api.getEditFormApi = useApiGetEditFormApi(editFormApi);
    api.getEditGroupFormApi = useApiGetEditGroupFormApi(editGroupFormApi);
    api.isMounted = useApiIsMounted(isMountedRef);

    api.getSelectedKeys = useGetSelectedKeys(selectedKeys);
    api.setSelectedKeys = useSetSelectedKeys(setSelectedKeys);
    api.getSelectedNodes = useGetSelectedNodes(dataSet, fieldNames, selectedKeys);
    api.selectNode = useSelectNode(selectedKeys, setSelectedKeys, props.multiple);
    api.getActiveNodeKey = useGetActiveNodeKey(selectedKeys);
    api.getActiveNode = useGetActiveNode(dataSet, fieldNames, selectedKeys);
    api.getProps = useGetProps(props);
    api.setProps = useSetProps(setProps);
    api.updateProps = useUpdateProps(props, setProps);
    api.getDataSet = useGetDataSet(dataSet);
    api.setDataSet = useSetDataSet(setDataSet);
    api.getExpandedKeys = useGetExpandedKeys(expandedKeys);
    api.setExpandedKeys = useSetExpandedKeys(setExpandedKeys);
    api.getExpandedNodes = useGetExpandedNodes(dataSet, expandedKeys, fieldNames);
    api.isNodeExpanded = useIsNodeExpanded(expandedKeys);
    api.expandNode = useExpandNode(expandedKeys, setExpandedKeys);
    api.collapseNode = useCollapseNode(expandedKeys, setExpandedKeys);
    api.toggleNode = useToggleNode(expandedKeys, setExpandedKeys);
    api.expandParentNodes = useExpandParentNodes(dataSet, fieldNames, expandedKeys, setExpandedKeys);
    api.getNode = useGetNode(dataSet, fieldNames);
    api.getNodes = useGetNodes(dataSet, fieldNames);
    api.getNextNodeKey = useGetNextNodeKey(dataSet, fieldNames, expandedKeys);
    api.getPrevNodeKey = useGetPrevNodeKey(dataSet, fieldNames, expandedKeys);
    api.getNextNode = useGetNextNode(dataSet, fieldNames, expandedKeys);
    api.getPrevNode = useGetPrevNode(dataSet, fieldNames, expandedKeys);
    api.getParentNode = useGetParentNode(dataSet, fieldNames);

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
    api.isDataPlainList = useIsDataPlainList(isDataPlain);

    const dataFetcher = useDataFetcher(api);
    api.fetchData = useFetchData(dataFetcher, api);

    api.addNode = useAddNode({
        dataSet,
        fieldNames,
        props,
        setDataSet,
        selectedKeys,
        setSelectedKeys,
        expandedKeys,
        setExpandedKeys,
        prepareNodeFn: prepareNode,
    });

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

const prepareNode = (node: ITreeSelectNode, treeProps: ITreeSelectProps) => {
    let nodeClone = {...node};
    if (treeProps.titleRender) nodeClone.__title = treeProps.titleRender(nodeClone);
    if (treeProps.labelRender) nodeClone.__label = treeProps.labelRender(nodeClone);
    if (treeProps.dataMutator) nodeClone = treeProps.dataMutator(nodeClone);
    nodeClone.originalData = node;
    return nodeClone;
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
