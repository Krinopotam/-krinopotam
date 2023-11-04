import React, { useCallback, useState } from 'react';
import { useIsMountedRef } from '@krinopotam/common-hooks';
import { useDataFetcher } from '../../treeSelect/hooks/dataFetcher';
import runDebounce from 'lodash.debounce';
import { usePlainValuesToNodes, useValueConvertor } from '../../treeSelect/hooks/valueConvertor';
import { getUuid, isArray } from "@krinopotam/js-helpers";
import { useDataSet } from "../../treeSelect/hooks/dataSet";
export const useInitApi = ({ api, componentId, treeProps, updateProps, buttonsApi, }) => {
    const isMountedRef = useIsMountedRef();
    const [dataSet, setDataSet] = useDataSet(treeProps.titleRender, treeProps.labelRender, isMountedRef);
    const [isReady, setIsReady] = useState(false);
    const [fetching, setFetching] = React.useState(false);
    const [fetchError, setFetchError] = React.useState('');
    const [allFetched, setAllFetched] = React.useState(false);
    const [minSymbols, setMinSymbols] = React.useState(0);
    const [internalValue, selectedNodesRef, setValue] = useValueConvertor(treeProps.fieldNames, treeProps.labelRender, treeProps.titleRender, treeProps.multiple);
    api.buttonsApi = buttonsApi;
    api.getId = useApiGetId(componentId);
    api.isMounted = useApiIsMounted(isMountedRef);
    api.getProps = useApiGetProps(treeProps);
    api.setProps = useApiSetProps(treeProps, updateProps);
    api.getInternalValue = useApiGetInternalValue(internalValue);
    api.getValues = useApiGetValues(selectedNodesRef);
    api.setValues = useApiSetValue(setValue, api);
    api.getDataSet = useApiGetDataSet(dataSet);
    api.setDataSet = useApiSetDataSet(setDataSet);
    api.plainValueToNodes = usePlainValuesToNodes(api);
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
export const useApiGetId = (componentId) => {
    return useCallback(() => {
        return componentId;
    }, [componentId]);
};
const useApiIsMounted = (isMountedRef) => {
    return useCallback(() => isMountedRef.current, [isMountedRef]);
};
const useApiGetProps = (treeSelectProps) => {
    return useCallback(() => treeSelectProps, [treeSelectProps]);
};
const useApiSetProps = (treeSelectProps, setTreeSelectProps) => {
    return useCallback((props) => {
        setTreeSelectProps(Object.assign(Object.assign({}, treeSelectProps), props));
    }, [treeSelectProps, setTreeSelectProps]);
};
const useApiGetInternalValue = (internalValue) => {
    return useCallback(() => internalValue, [internalValue]);
};
const useApiGetValues = (selectedNodesRef) => {
    return useCallback(() => selectedNodesRef.current, [selectedNodesRef]);
};
const useApiSetValue = (setValue, api) => {
    return useCallback((value) => {
        var _a, _b, _c, _d, _e;
        const treeProps = api.getProps();
        const keyField = (_b = (_a = treeProps.fieldNames) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : 'id';
        let newVal;
        if (typeof value !== 'string')
            newVal = value;
        else {
            newVal = {};
            newVal[keyField] = value;
        }
        setValue(newVal !== null && newVal !== void 0 ? newVal : []);
        if (!newVal) {
            (_c = treeProps === null || treeProps === void 0 ? void 0 : treeProps.onChange) === null || _c === void 0 ? void 0 : _c.call(treeProps, null);
        }
        else if (!treeProps.multiple) {
            (_d = treeProps === null || treeProps === void 0 ? void 0 : treeProps.onChange) === null || _d === void 0 ? void 0 : _d.call(treeProps, isArray(newVal) && newVal.length > 0 ? newVal[0] : newVal);
        }
        else {
            (_e = treeProps === null || treeProps === void 0 ? void 0 : treeProps.onChange) === null || _e === void 0 ? void 0 : _e.call(treeProps, newVal || []);
        }
    }, [api, setValue]);
};
const useApiGetDataSet = (dataSet) => {
    return useCallback(() => dataSet, [dataSet]);
};
const useApiSetDataSet = (setDataSet) => {
    return useCallback((dataSet) => {
        setDataSet(dataSet !== null && dataSet !== void 0 ? dataSet : []);
    }, [setDataSet]);
};
const useApiGetIsReady = (isReady) => {
    return useCallback(() => isReady, [isReady]);
};
const useApiSetIsReady = (setIsReady) => {
    return useCallback((isReady) => {
        setIsReady(isReady);
    }, [setIsReady]);
};
const useApiGetIsFetching = (isFetching) => {
    return useCallback(() => isFetching, [isFetching]);
};
const useApiSetIsFetching = (setIsFetching) => {
    return useCallback((isFetching) => {
        setIsFetching(isFetching);
    }, [setIsFetching]);
};
const useApiGetFetchError = (fetchError) => {
    return useCallback(() => fetchError, [fetchError]);
};
const useApiSetFetchError = (setFetchError) => {
    return useCallback((fetchError) => {
        setFetchError(fetchError !== null && fetchError !== void 0 ? fetchError : '');
    }, [setFetchError]);
};
const useApiGetIsAllFetched = (isAllFetched) => {
    return useCallback(() => isAllFetched, [isAllFetched]);
};
const useApiSetIsAllFetched = (setIsAllFetched) => {
    return useCallback((isAllFetched) => {
        setIsAllFetched(isAllFetched);
    }, [setIsAllFetched]);
};
const useApiGetMinSymbols = (minSymbols) => {
    return useCallback(() => minSymbols, [minSymbols]);
};
const useApiSetMinSymbols = (setMinSymbols) => {
    return useCallback((isAllFetched) => {
        setMinSymbols(isAllFetched);
    }, [setMinSymbols]);
};
const useFetchData = (dataFetcher, api) => {
    return useCallback((search, debounce) => {
        var _a;
        const debounceFetcher = runDebounce(dataFetcher, (_a = api.getProps().debounce) !== null && _a !== void 0 ? _a : 0);
        if (!debounce)
            dataFetcher(search);
        else
            debounceFetcher(search);
    }, [api, dataFetcher]);
};
const useAddNodes = (api) => {
    return useCallback((parentNode, newNodes) => {
        var _a, _b, _c, _d, _e;
        const _newNodes = isArray(newNodes) ? newNodes : [newNodes];
        const treeProps = api.getProps();
        const keyField = (_b = (_a = treeProps.fieldNames) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : 'id';
        const childrenField = (_d = (_c = treeProps.fieldNames) === null || _c === void 0 ? void 0 : _c.children) !== null && _d !== void 0 ? _d : 'children';
        const recursive = (nodes, parent, newNodes) => {
            if (!parent) {
                for (const newNode of newNodes)
                    nodes.push(newNode);
                return;
            }
            for (const node of nodes) {
                if (!node[keyField])
                    continue;
                if (node[keyField] === parent[keyField]) {
                    if (!node.isLeaf) {
                        if (!node[childrenField])
                            node[childrenField] = [];
                        const children = node[childrenField];
                        for (const newNode of newNodes)
                            children.push(newNode);
                    }
                    else {
                        for (const newNode of newNodes)
                            nodes.push(newNode);
                    }
                    return true;
                }
                if (!node[childrenField])
                    continue;
                if (recursive(node[childrenField], parent, newNodes))
                    return true;
            }
        };
        const dataSetClone = [...((_e = api.getDataSet()) !== null && _e !== void 0 ? _e : [])];
        for (const _newNode of _newNodes) {
            if (!_newNode[keyField])
                _newNode[keyField] = getUuid();
        }
        recursive(dataSetClone, parentNode, _newNodes);
        api.setDataSet(dataSetClone);
    }, [api]);
};
const useUpdateNodes = (api) => {
    return useCallback((updatedNodes) => {
        var _a, _b, _c, _d, _e;
        const _updatedNodes = isArray(updatedNodes) ? updatedNodes : [updatedNodes];
        const treeProps = api.getProps();
        const keyField = (_b = (_a = treeProps.fieldNames) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : 'id';
        const childrenField = (_d = (_c = treeProps.fieldNames) === null || _c === void 0 ? void 0 : _c.children) !== null && _d !== void 0 ? _d : 'children';
        const recursive = (nodes, updatedNode) => {
            for (const node of nodes) {
                if (!node[keyField])
                    continue;
                if (node[keyField] === updatedNode[keyField]) {
                    const prevChildren = node[childrenField];
                    for (const key in updatedNode)
                        node[key] = updatedNode[key];
                    node[childrenField] = prevChildren;
                    return true;
                }
                if (!node[childrenField])
                    continue;
                if (recursive(node[childrenField], updatedNode))
                    return true;
            }
        };
        const dataSetClone = [...((_e = api.getDataSet()) !== null && _e !== void 0 ? _e : [])];
        for (const _updatedNode of _updatedNodes) {
            recursive(dataSetClone, _updatedNode);
        }
        api.setDataSet(dataSetClone);
    }, [api]);
};
const useDeleteNodes = (api) => {
    return useCallback((removeNodes) => {
        var _a, _b, _c, _d, _e;
        const _removeNodes = isArray(removeNodes) ? removeNodes : [removeNodes];
        const treeProps = api.getProps();
        const keyField = (_b = (_a = treeProps.fieldNames) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : 'id';
        const childrenField = (_d = (_c = treeProps.fieldNames) === null || _c === void 0 ? void 0 : _c.children) !== null && _d !== void 0 ? _d : 'children';
        const recursive = (nodes, removeNode) => {
            for (let i = nodes.length - 1; i >= 0; i--) {
                const node = nodes[i];
                if (!node[keyField])
                    continue;
                if (node[keyField] === removeNode[keyField]) {
                    nodes.splice(i, 1);
                    return true;
                }
                if (!node[childrenField])
                    continue;
                if (recursive(node[childrenField], removeNode))
                    return true;
            }
        };
        const dataSetClone = [...((_e = api.getDataSet()) !== null && _e !== void 0 ? _e : [])];
        for (const _removeNode of _removeNodes) {
            recursive(dataSetClone, _removeNode);
        }
        api.setDataSet(dataSetClone);
    }, [api]);
};
//# sourceMappingURL=api.js.map