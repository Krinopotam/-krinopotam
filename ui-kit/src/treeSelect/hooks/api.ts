import {ITreeSelectNode, ITreeSelectProps, ITreeSelectValues} from '@src/treeSelect';
import React, {Key, useCallback, useEffect, useState} from 'react';
import {useIsMountedRef} from '@krinopotam/common-hooks';
import {useDataFetcher} from '@src/treeSelect/hooks/dataFetcher';
import runDebounce from 'lodash.debounce';
import {IButtonsRowApi} from '@src/buttonsRow';
import {GetUuid, IsArray} from "@krinopotam/js-helpers";
import {IFieldNames, ITreeSelectApi} from "@src/treeSelect/types/types";
import {usePrepareData} from "@src/treeSelect/hooks/prepareData";

export const useInitApi = ({
                               api,
                               componentId,
                               props,
                               setProps,
                               buttonsApi,
                           }: {
    api: ITreeSelectApi;
    componentId: string;
    props: ITreeSelectProps;
    setProps: (props: ITreeSelectProps) => void;
    buttonsApi: IButtonsRowApi;
}) => {
    const isMountedRef = useIsMountedRef();
    const [isReady, setIsReady] = useState(false);
    const [fetching, setFetching] = useState(false); //is fetching now
    const [fetchError, setFetchError] = useState(''); //has fetching error
    const [allFetched, setAllFetched] = useState(false); //is all fetched
    const [minSymbols, setMinSymbols] = useState(0); //show min symbols error
    const dataMutator = usePrepareData(props);

    const [values, setValues] = useState<ITreeSelectValues>(undefined);
    /** Set value if props changed*/
    useEffect(() => {
        let values = undefined;
        if (props.value) values = Array.isArray(props.value) ? props.value : [props.value];
        api.setValues(values);
    }, [api, props.value]);

    const [dataSet, setDataSet] = useState(dataMutator(props.dataSet));
    /** Set dataSet if props changed */
    useEffect(() => {
        setDataSet(dataMutator(props.dataSet)); //user can set dataSet in props
    }, [dataMutator, props.dataSet]);

    api.buttonsApi = buttonsApi;
    api.getId = useApiGetId(componentId);
    api.isMounted = useApiIsMounted(isMountedRef);
    api.getFieldNames = useApiGetFieldNames(props);
    api.getProps = useApiGetProps(props);
    api.setProps = useApiSetProps(setProps);
    api.updateProps = useApiUpdateProps(props, setProps);
    api.getDataSet = useApiGetDataSet(dataSet);
    api.setDataSet = useApiSetDataSet(setDataSet);
    api.getValues = useApiGetValues(values);
    api.setValues = useApiSetValue(setValues);
    api.getNode = useApiGetNode(api);
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

    const dataFetcher = useDataFetcher(api);
    api.fetchData = useFetchData(dataFetcher, api);

    api.addNodes = useAddNodes(api);
    api.updateNodes = useUpdateNodes(api);
    api.deleteNodes = useDeleteNodes(api);
};

/** Get the current TreeSelect id */
export const useApiGetId = (componentId: string) => {
    return useCallback(() => {
        return componentId;
    }, [componentId]);
};

const useApiIsMounted = (isMountedRef: React.MutableRefObject<boolean>) => {
    return useCallback(() => isMountedRef.current, [isMountedRef]);
};

const useApiGetFieldNames = (props: ITreeSelectProps): ITreeSelectApi['getFieldNames'] => {
    return useCallback(() => ({value: 'value', label: 'label', children: 'children', ...props.fieldNames}), [props.fieldNames]);
};

const useApiGetProps = (props: ITreeSelectProps) => {
    return useCallback(() => props, [props]);
};

const useApiSetProps = (setProps: (props: ITreeSelectProps) => void): ITreeSelectApi['setProps'] => {
    return useCallback(
        (props) => {
            setProps(props);
        },
        [setProps]
    );
};

const useApiUpdateProps = (curProps: ITreeSelectProps, setProps: (props: ITreeSelectProps) => void): ITreeSelectApi['updateProps'] => {
    return useCallback(
        (props) => {
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
        (dataSet) => {
            setDataSet(dataSet ?? []);
        },
        [setDataSet]
    );
};

export const useApiPrepareNode = (treeProps: ITreeSelectProps): ITreeSelectApi['prepareNode'] => {
    return useCallback(
        node => {
            let mutatedNode = {...node};
            if (treeProps.dataMutator) mutatedNode = treeProps.dataMutator(mutatedNode);
            return mutatedNode;
        },
        [treeProps]
    );
};


const useApiGetValues = (values: ITreeSelectValues): ITreeSelectApi['getValues'] => {
    return useCallback(() => values, [values]);
};

const useApiSetValue = (setValue: (value: ITreeSelectValues) => void): ITreeSelectApi['setValues'] => {
    return useCallback(
        (value) => {
            setValue(value);
        },
        [setValue]
    );
};

const useApiGetNode = (api: ITreeSelectApi): ITreeSelectApi['getNode'] => {
    return useCallback(
        (key, externalDataset) => {
            const fieldNames = api.getFieldNames();
            if (!key) return undefined;
            const data = externalDataset ?? api.getDataSet();
            const {idx, nodes} = findNodeIndex(data, key, fieldNames);
            return idx > -1 ? nodes![idx] : undefined;
        },
        [api]
    );
};

const useApiGetSelectedNodes = (api: ITreeSelectApi): ITreeSelectApi['getSelectedNodes'] => {
    return useCallback(
        (externalDataset) => {
            const keys = api.getValues();
            if (!keys) return undefined;
            const fieldNames = api.getFieldNames();
            const data = externalDataset ?? api.getDataSet();

            const result = [] as ITreeSelectNode[];
            for (const key of keys) {
                const {idx, nodes} = findNodeIndex(data, key, fieldNames);
                if (idx > -1) result.push(nodes![idx]);
            }

            return result

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
            const treeProps = api.getProps();
            const keyField = treeProps.fieldNames?.value ?? 'id';
            const childrenField = treeProps.fieldNames?.children ?? 'children';
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
            const treeProps = api.getProps();
            const keyField = treeProps.fieldNames?.value ?? 'id';
            const childrenField = treeProps.fieldNames?.children ?? 'children';
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
            const treeProps = api.getProps();
            const keyField = treeProps.fieldNames?.value ?? 'id';
            const childrenField = treeProps.fieldNames?.children ?? 'children';
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

//region Service methods
const findNodeIndex = (
    dataSet: ITreeSelectNode['dataSet'],
    key: Key,
    fieldNames: IFieldNames
): {
    idx: number;
    nodes: ITreeSelectNode['dataSet'];
} => {
    const valueField = fieldNames.value;
    const recursive = (nodes: ITreeSelectNode['dataSet']): { idx: number; nodes: ITreeSelectProps['dataSet'] } => {
        if (!nodes || !key) return {idx: -1, nodes: undefined};
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if (node[valueField] === key) return {idx: i, nodes};

            const childInfo = recursive(node.children);
            if (childInfo.idx > -1) return childInfo;
        }

        return {idx: -1, nodes: undefined};
    };

    return recursive(dataSet);
};
//endregion