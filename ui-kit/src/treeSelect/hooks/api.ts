import {ITreeSelectNode, ITreeSelectProps, ITreeSelectValue} from '@src/treeSelect';
import React, {Key, useCallback, useEffect, useRef, useState} from 'react';
import {useIsMountedRef} from '@krinopotam/common-hooks';
import {useDataFetcher} from '@src/treeSelect/hooks/dataFetcher';
import runDebounce from 'lodash.debounce';
import {IButtonsRowApi} from '@src/buttonsRow';
import {GetUuid, IsArray} from '@krinopotam/js-helpers';
import {ITreeSelectApi} from '@src/treeSelect/types/types';
import {usePrepareData} from '@src/treeSelect/hooks/prepareData';
import {IDFormModalApi} from '@src/dFormModal';
import {findNodeIndex} from '@src/_shared/tools/nodesMethods/findNodeIndex';
import {findNextNodeKey, findPrevNodeKey} from '@src/_shared/tools/nodesMethods/findeNextNodeKey';

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
    setProps: (props: ITreeSelectProps) => void;
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
    const [values, setValues] = useValue(props); //value
    const [isDataPlain, setIsDataPlain] = useState(false); //is dataSet plain (without children)
    const [expandedKeys, setExpandedKeys] = useApiExpandedKeys(props); //expanded keys
    const [dataSet, setDataSet] = useDataSet(props, setIsDataPlain, setExpandedKeys); //current dataSet

    api.treeSelectRef = useRef(null);
    api.getId = useApiGetId(componentId);
    api.getButtonsApi = useApiGetButtonsApi(buttonsApi);
    api.getEditFormApi = useApiGetEditFormApi(editFormApi);
    api.getEditGroupFormApi = useApiGetEditGroupFormApi(editGroupFormApi);
    api.isMounted = useApiIsMounted(isMountedRef);
    api.getFieldNames = useApiGetFieldNames(props);
    api.getProps = useApiGetProps(props);
    api.setProps = useApiSetProps(setProps);
    api.updateProps = useApiUpdateProps(props, setProps);
    api.getDataSet = useApiGetDataSet(dataSet);
    api.setDataSet = useApiSetDataSet(setDataSet);
    api.getValue = useApiGetValue(values);
    api.setValue = useApiSetValue(setValues);
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
    api.getSelectedNodes = useApiGetSelectedNodes(api);
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
    api.isDataPlainList = useApiIsDataPlainList(isDataPlain);
    api.getNextNodeKey = useApiGetNextNodeKey(api);
    api.getPrevNodeKey = useApiGetPrevNodeKey(api);
    api.getNextNode = useApiGetNextNode(api);
    api.getPrevNode = useApiGetPrevNode(api);

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

const useValue = (props: ITreeSelectProps): [value: ITreeSelectValue, setValue: React.Dispatch<React.SetStateAction<ITreeSelectValue>>] => {
    const [value, setValue] = useState<ITreeSelectValue>(props.value ?? null);
    /** Set value if props changed*/
    useEffect(() => {
        setValue(props.value ?? null);
    }, [props.value]);

    return [value, setValue];
};

const useDataSet = (
    props: ITreeSelectProps,
    setIsDataPlain: React.Dispatch<React.SetStateAction<boolean>>,
    setExpandedKeys: React.Dispatch<React.SetStateAction<React.Key[] | undefined>>
): [ITreeSelectNode[] | undefined, React.Dispatch<React.SetStateAction<ITreeSelectNode[] | undefined>>] => {
    const prepareData = usePrepareData(props, setIsDataPlain, setExpandedKeys);

    const [dataSet, setDataSet] = useState(prepareData(props.dataSet));
    /** Set dataSet if props changed */
    useEffect(() => {
        setDataSet(prepareData(props.dataSet)); //user can set dataSet in props
    }, [prepareData, props.dataSet]);

    return [dataSet, setDataSet];
};

const useApiIsMounted = (isMountedRef: React.MutableRefObject<boolean>) => {
    return useCallback(() => isMountedRef.current, [isMountedRef]);
};

const useApiGetFieldNames = (props: ITreeSelectProps): ITreeSelectApi['getFieldNames'] => {
    return useCallback(
        () => ({
            key: 'id',
            title: 'title',
            children: 'children',
            ...props.fieldNames,
        }),
        [props.fieldNames]
    );
};

const useApiGetProps = (props: ITreeSelectProps) => {
    return useCallback(() => props, [props]);
};

const useApiSetProps = (setProps: (props: ITreeSelectProps) => void): ITreeSelectApi['setProps'] => {
    return useCallback(
        props => {
            setProps(props);
        },
        [setProps]
    );
};

const useApiUpdateProps = (curProps: ITreeSelectProps, setProps: (props: ITreeSelectProps) => void): ITreeSelectApi['updateProps'] => {
    return useCallback(
        props => {
            setProps({...curProps, ...props});
        },
        [curProps, setProps]
    );
};

const useApiGetDataSet = (dataSet: ITreeSelectNode[] | undefined): ITreeSelectApi['getDataSet'] => {
    return useCallback(() => dataSet, [dataSet]);
};

const useApiSetDataSet = (setDataSet: (newDataSet: ITreeSelectNode[] | undefined) => void): ITreeSelectApi['setDataSet'] => {
    return useCallback(
        dataSet => {
            setDataSet(dataSet ?? []);
        },
        [setDataSet]
    );
};

export const useApiPrepareNode = (treeProps: ITreeSelectProps): ITreeSelectApi['prepareNode'] => {
    return useCallback(
        node => {
            let mutatedNode = {...node};
            if (treeProps.titleRender) mutatedNode.__title = treeProps.titleRender(mutatedNode);
            if (treeProps.labelRender) mutatedNode.__label = treeProps.labelRender(mutatedNode);
            if (treeProps.dataMutator) mutatedNode = treeProps.dataMutator(mutatedNode);
            mutatedNode.originalData = node;
            return mutatedNode;
        },
        [treeProps]
    );
};

const useApiGetValue = (value: ITreeSelectValue): ITreeSelectApi['getValue'] => {
    return useCallback(() => value, [value]);
};

const useApiSetValue = (setValue: (value: ITreeSelectValue) => void): ITreeSelectApi['setValue'] => {
    return useCallback(
        value => {
            setValue(value);
        },
        [setValue]
    );
};

const useApiExpandedKeys = (props: ITreeSelectProps): [React.Key[] | undefined,  React.Dispatch<React.SetStateAction<React.Key[] | undefined>>] => {
    const [expandedKeys, setExpandedKeys] = useState(props.treeExpandedKeys ?? props.treeDefaultExpandedKeys);
    useEffect(() => {
        setExpandedKeys(props.treeExpandedKeys); //user can set treeExpandedKeys in props
    }, [props.treeExpandedKeys]);
    return [expandedKeys, setExpandedKeys];
};


const useApiGetExpandedKeys = (expandedKeys: ITreeSelectProps['treeExpandedKeys']): ITreeSelectApi['getExpandedKeys'] => {
    return useCallback(() => expandedKeys, [expandedKeys]);
};

const useApiSetExpandedKeys = (setExpandedKeys: React.Dispatch<React.SetStateAction<ITreeSelectProps['treeExpandedKeys']>>): ITreeSelectApi['setExpandedKeys'] => {
    return useCallback(
        keys => {
            setExpandedKeys(keys);
        },
        [setExpandedKeys]
    );
};

const useApiGetExpandedNodes = (api: ITreeSelectApi): ITreeSelectApi['getExpandedNodes'] => {
    return useCallback(() => {
        const expandedKeys = api.getExpandedKeys();
        if (!expandedKeys) return undefined;

        const result: ITreeSelectNode[] = [];
        for (const key of expandedKeys) {
            const foundNode = api.getNode(key);
            if (foundNode) result.push(foundNode);
        }
        return result;
    }, [api]);
};

const useApiIsNodeExpanded = (api: ITreeSelectApi): ITreeSelectApi['isNodeExpanded'] => {
    return useCallback((key: Key) => api.getExpandedKeys()?.includes(key) ?? false, [api]);
};

const useApiExpandNode = (api: ITreeSelectApi): ITreeSelectApi['expandNode'] => {
    return useCallback(
        key => {
            const expandedKeys = api.getExpandedKeys();
            if (expandedKeys?.includes(key)) return;
            api.setExpandedKeys([...(expandedKeys ?? []), key]);
        },
        [api]
    );
};

const useApiCollapseNode = (api: ITreeSelectApi): ITreeSelectApi['collapseNode'] => {
    return useCallback(
        key => {
            const expandedKeys = api.getExpandedKeys();
            if (!expandedKeys?.includes(key)) return;
            api.setExpandedKeys(expandedKeys?.filter(curKey => curKey !== key));
        },
        [api]
    );
};

const useApiToggleNode = (api: ITreeSelectApi): ITreeSelectApi['toggleNode'] => {
    return useCallback(
        key => {
            const expandedKeys = api.getExpandedKeys();
            if (expandedKeys?.includes(key)) api.setExpandedKeys(expandedKeys?.filter(curKey => curKey !== key));
            else api.setExpandedKeys([...(expandedKeys ?? []), key]);
        },
        [api]
    );
};


const useApiGetNode = (api: ITreeSelectApi): ITreeSelectApi['getNode'] => {
    return useCallback(
        (key, externalDataset) => {
            const fieldNames = api.getFieldNames();
            if (!key) return undefined;
            const data = externalDataset ?? api.getDataSet();
            const {idx, nodes} = findNodeIndex(data, key, fieldNames.key, fieldNames.children);
            return idx > -1 ? nodes![idx] : undefined;
        },
        [api]
    );
};

const useApiGetNodes = (api: ITreeSelectApi): ITreeSelectApi['getNodes'] => {
    return useCallback(
        (keys, externalDataset) => {
            if (!keys) return undefined;
            if (!Array.isArray(keys)) keys = [keys];
            const result = [] as ITreeSelectNode[];
            for (const key of keys) {
                const node = api.getNode(key, externalDataset);
                if (node) result.push(node);
            }

            return result;
        },
        [api]
    );
};

const useApiGetSelectedNodes = (api: ITreeSelectApi): ITreeSelectApi['getSelectedNodes'] => {
    return useCallback(
        externalDataset => {
            let keys = api.getValue();
            if (!keys) return undefined;
            if (!Array.isArray(keys)) keys = [keys];

            const fieldNames = api.getFieldNames();
            const data = externalDataset ?? api.getDataSet();

            const result = [] as ITreeSelectNode[];
            for (const key of keys) {
                const {idx, nodes} = findNodeIndex(data, key, fieldNames.key, fieldNames.children);
                if (idx > -1) result.push(nodes![idx]);
            }

            return result;
        },
        [api]
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

const useApiIsDataPlainList = (isDataPlain: boolean) => {
    return useCallback(() => isDataPlain, [isDataPlain]);
};

const useApiExpandParentNodes = (api: ITreeSelectApi): ITreeSelectApi['expandParentNodes'] => {
    return useCallback(
        (key, externalDataset) => {
            const recursive = (nodes: ITreeSelectNode[]) => {
                for (const node of nodes) {
                    if (node[keyField] === key) return true;

                    if (node[childrenField]) {
                        const founded = recursive(node[childrenField] as ITreeSelectNode[]);

                        if (founded) {
                            api.expandNode(node[keyField] as Key);
                            return true;
                        }
                    }
                }
            };

            const fieldNames = api.getFieldNames();
            const keyField = fieldNames.key;
            const childrenField = fieldNames.children;
            const dataSet = externalDataset ?? api.getDataSet();

            if (!dataSet) return;
            recursive(dataSet);
        },
        [api]
    );
};

const useApiGetNextNodeKey = (api: ITreeSelectApi): ITreeSelectApi['getNextNodeKey'] => {
    return useCallback(
        (key, opts, externalDataset) => {
            const fieldNames = api.getFieldNames();
            const keyField = fieldNames.key;
            const childrenField = fieldNames.children;
            return findNextNodeKey(externalDataset ?? api.getDataSet(), key, api.getExpandedKeys(), keyField, childrenField, opts);
        },
        [api]
    );
};

const useApiGetPrevNodeKey = (api: ITreeSelectApi): ITreeSelectApi['getPrevNodeKey'] => {
    return useCallback(
        (key, opts, externalDataset) => {
            const fieldNames = api.getFieldNames();
            const keyField = fieldNames.key;
            const childrenField = fieldNames.children;
            return findPrevNodeKey(externalDataset ?? api.getDataSet(), key, api.getExpandedKeys(), keyField, childrenField, opts);
        },
        [api]
    );
};

const useApiGetNextNode = (api: ITreeSelectApi): ITreeSelectApi['getNextNode'] => {
    return useCallback(
        (node, opts, externalDataset) => {
            const fieldNames = api.getFieldNames();
            const keyField = fieldNames.key;
            const childrenField = fieldNames.children;
            const nextKey = findNextNodeKey(externalDataset ?? api.getDataSet(), node[keyField] as Key, api.getExpandedKeys(), keyField, childrenField, opts);
            return nextKey ? api.getNode(nextKey, externalDataset) : undefined;
        },
        [api]
    );
};

const useApiGetPrevNode = (api: ITreeSelectApi): ITreeSelectApi['getPrevNode'] => {
    return useCallback(
        (node, opts, externalDataset) => {
            const fieldNames = api.getFieldNames();
            const keyField = fieldNames.key;
            const childrenField = fieldNames.children;
            const prevKey = findPrevNodeKey(externalDataset ?? api.getDataSet(), node[keyField] as Key, api.getExpandedKeys(), keyField, childrenField, opts);
            return prevKey ? api.getNode(prevKey, externalDataset) : undefined;
        },
        [api]
    );
};
