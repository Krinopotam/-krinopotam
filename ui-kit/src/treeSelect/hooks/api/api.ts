// noinspection DuplicatedCode

import {ITreeSelectProps} from '@src/treeSelect';
import {useRef, useState} from 'react';
import {useDataFetcher} from '@src/treeSelect/hooks/useDataFetcher';
import {GetNanoId} from '@krinopotam/js-helpers/helpersString/getNanoId';
import {ITreeSelectApi} from '@src/treeSelect/types/types';
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
import {useValuesState} from '@src/treeSelect/hooks/api/useValuesState';
import {useApiGetValues} from '@src/treeSelect/hooks/api/useApiGetValues';
import {useApiSetValues} from '@src/treeSelect/hooks/api/useApiSetValues';
import {useApiGetSelectedKeys} from '@src/treeSelect/hooks/api/useApiGetSelectedKeys';
import {useApiGetSelectedNodes} from '@src/treeSelect/hooks/api/useApiGetSelectedNodes';
import {useApiSelectNode} from '@src/treeSelect/hooks/api/useApiSelectNode';
import {useApiT} from '@src/treeSelect/hooks/api/useApiT';

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
    const [fetchError, setFetchError] = useState<string | undefined>(); //has fetching error
    const [allFetched, setAllFetched] = useState(false); //is all fetched
    const [minSymbols, setMinSymbols] = useState(0); //show min symbols error
    //const [selectedKeys, setSelectedKeys] = useSelectedState(props);
    const [open, setOpen] = useOpenState(props);

    const fieldNames = useApiGetFieldNames(props)();
    const prepareNode = useApiPrepareNode(props);

    const [value, setValue] = useValuesState(props, fieldNames);
    const [dataSet, setDataset, isDataPlain, parentKeys] = useDataSetState(props.dataSet, fieldNames, prepareNode); //current dataSet
    const [expandedKeys, setExpandedKeys] = useExpandedKeysState(props.expandedKeys, props.defaultExpandedKeys, props.defaultExpandAll, parentKeys); //expanded keys

    const dataFetcher = useDataFetcher(api);
    const apiMethods: ITreeSelectApi = {
        /** Component Api methods*/
        getId: useApiGetId(props.componentId ?? 'treeSelect-' + GetNanoId()),
        getProps: useApiGetProps(props),
        setProps: useApiSetProps(setProps),
        updateProps: useApiUpdateProps(props, setProps),
        getIsMounted: useApiIsMounted(),

        /** Tree component Api methods */
        getFieldNames: useApiGetFieldNames(props),
        getDataSet: useApiGetDataSet(dataSet),
        setDataSet: useApiSetDataset(setDataset, props?.onDataSetChanged),
        getValues: useApiGetValues(value),
        setValues: useApiSetValues(setValue, fieldNames),
        isDataPlainList: useApiGetIsDataPlain(isDataPlain),
        getEditFormApi: useApiGetEditFormApi(editFormApi),
        getEditGroupFormApi: useApiGetEditGroupFormApi(editGroupFormApi),
        getSelectedKeys: useApiGetSelectedKeys(value),
        getSelectedNodes: useApiGetSelectedNodes(api, value),
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
        t: useApiT(props),
        treeSelectRef: useRef(null),
        getButtonsApi: useApiGetButtonsApi<IButtonsRowApi & {refreshButtons: () => void}>(),
        getIsReady: useApiGetIsReady(isReady),
        setIsReady: useApiSetIsReady(setIsReady),
        getIsOpen: useApiGetIsOpen(open),
        setIsOpen: useApiSetIsOpen(setOpen),
        getIsFetching: useApiGetIsFetching(fetching),
        setIsFetching: useApiSetIsFetching(setFetching),
        getFetchError: useApiGetFetchError(fetchError),
        setFetchError: useApiSetFetchError(setFetchError),
        getIsAllFetched: useApiGetIsAllFetched(allFetched),
        setIsAllFetched: useApiSetIsAllFetched(setAllFetched),
        getMinSymbols: useApiGetMinSymbols(minSymbols),
        setMinSymbols: useApiSetMinSymbols(setMinSymbols),

        fetchData: useApiFetchData(dataFetcher, api),
    };

    Object.assign(api, apiMethods);

    return api;
};
