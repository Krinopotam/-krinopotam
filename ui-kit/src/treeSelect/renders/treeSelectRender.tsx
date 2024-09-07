import {TreeSelect as AntdTreeSelect} from 'antd';
import React, {useCallback, useMemo} from 'react';
import {IAntTreeSelectProps, ITreeSelectApi, ITreeSelectProps, ITreeSelectValue} from '@src/treeSelect';
import {useDropdownStyle} from '@src/treeSelect/hooks/dropdownStyle';
import {useDefaultFilter} from '@src/treeSelect/hooks/filter';
import {NotFound} from '@src/treeSelect/renders/dropdownStatus';
import {DefaultOptionType} from 'rc-tree-select/es/TreeSelect';
import {DefaultDropdownRender} from '@src/treeSelect/renders/defaultDropdownRender';
import {usePrepareEditFormProps} from '@src/treeSelect/hooks/prepareEditForm';
import {DFormModal} from '@src/dFormModal';
import {useWhyDidYouUpdate} from 'ahooks';

// For clarity. Antd has labels for a node(1) and for the selected value(2). fieldNames.label property sets the node label(1) and treeNodeLabelProp sets the selected value label(2)
// In order not to get confused, we will consider Node's label is title(1), and Label of the selected value is label(2)
// For the implementation of the capabilities of the Title & Labels  renders, we add to dataSet 2 service fields: __title & __label

export const TreeSelectRender = ({
    treeApi,
    allProps,
    treeSelectProps,
}: {
    treeApi: ITreeSelectApi;
    allProps: ITreeSelectProps;
    treeSelectProps: IAntTreeSelectProps;
}): React.JSX.Element => {
    useWhyDidYouUpdate('treeSelect', {
        treeApi,
        allProps,
        treeSelectProps,
    });
    const editFormProps = usePrepareEditFormProps(treeApi, allProps, false);
    const editGroupFormProps = usePrepareEditFormProps(treeApi, allProps, true);

    const dropdownStyle = useDropdownStyle(allProps.dropdownStyle);
    const defaultDropdownRender = useDefaultDropdownRender({treeApi: treeApi});
    const value = useValue(treeApi);
    const fieldNames = useFieldNames(treeApi);
    const treeNodeLabelProp = useTreeNodeLabelProp(treeApi);
    const expandedKeys = treeApi.getExpandedKeys();
    const onExpand = useOnExpand(treeApi);
    const onClear = useOnClear(treeApi);
    const onChange = useOnChange(treeApi);
    const onDropdownVisibleChange = useOnDropdownVisibleChange(treeApi);
    const onSearch = useOnSearch(treeApi);
    const filterTreeNode = useOnFilterTreeNode(treeApi);
    const plainList = treeApi.isDataPlainList();
    console.log(expandedKeys, treeApi.getIsOpen());
    return (
        <>
            <AntdTreeSelect
                ref={treeApi.treeSelectRef}
                showSearch // shows search field by default
                allowClear // allows to clear the selected value by default
                treeNodeFilterProp={fieldNames.label} //Field to be  used for filtering if filterTreeNode returns true. Default: title (getting from api.fieldNames)
                dropdownRender={defaultDropdownRender}
                notFoundContent={
                    <NotFound fetching={treeApi.getIsFetching()} error={treeApi.getFetchError()} minSymbols={treeApi.getMinSymbols()} plainList={plainList} />
                }
                {...treeSelectProps}
                /************ no override ****************/
                fieldNames={fieldNames}
                treeNodeLabelProp={treeNodeLabelProp} //Selected value label. Will render as content of select. Default: title
                treeData={treeApi.getDataSet()}
                value={value}
                disabled={allProps.disabled || allProps.readOnly} //TODO: implement true readOnly
                //labelInValue // We do not use this mode, as it is useless. In this mode, onChange will return an object containing value and label, but you still can’t build a full node
                treeDefaultExpandAll={allProps.defaultExpandAll}
                treeDefaultExpandedKeys={allProps.defaultExpandedKeys}
                treeExpandedKeys={expandedKeys}
                open={treeApi.getIsOpen()}
                //loadData={onLoadData}
                dropdownStyle={dropdownStyle}
                /** --- Callbacks --------------- */
                filterTreeNode={filterTreeNode}
                onTreeExpand={onExpand}
                onClear={onClear}
                onChange={onChange}
                onDropdownVisibleChange={onDropdownVisibleChange}
                onSearch={onSearch}
            />
            {editFormProps && !allProps.readOnly ? <DFormModal {...editFormProps} apiRef={treeApi.getEditFormApi()} /> : null}
            {editGroupFormProps && !allProps.readOnly ? <DFormModal {...editGroupFormProps} apiRef={treeApi.getEditGroupFormApi()} /> : null}
        </>
    );
};

const useValue = (api: ITreeSelectApi) => {
    const props = api.getProps();
    const keys = api.getSelectedKeys();
    if (props.multiple) return keys ?? null;
    else return keys?.[0] ?? null;
};

const useDefaultDropdownRender = ({treeApi}: {treeApi: ITreeSelectApi}) => {
    return useCallback((menu: React.ReactNode) => <DefaultDropdownRender treeApi={treeApi}>{menu}</DefaultDropdownRender>, [treeApi]);
};

const useOnClear = (api: ITreeSelectApi) => {
    return useCallback(() => {
        api.setSelectedKeys(undefined);
        const props = api.getProps();
        props.onClear?.();
    }, [api]);
};

const useOnChange = (api: ITreeSelectApi) => {
    return useCallback<NonNullable<IAntTreeSelectProps['onChange']>>(
        (value, label, extra) => {
            const props = api.getProps();
            api.setSelectedKeys((value as ITreeSelectValue) ?? undefined);
            props.onChange?.(value, label, extra);
        },
        [api]
    );
};

const useOnDropdownVisibleChange = (api: ITreeSelectApi) => {
    return useCallback<NonNullable<IAntTreeSelectProps['onDropdownVisibleChange']>>(
        open => {
            const props = api.getProps();
            if (open && (props.fetchMode === 'onUse' || props.fetchMode === 'onUseForce')) api.fetchData('');
            props.onDropdownVisibleChange?.(open);
        },
        [api]
    );
};

const useOnSearch = (api: ITreeSelectApi) => {
    return useCallback<NonNullable<IAntTreeSelectProps['onSearch']>>(
        searchStr => {
            api.fetchData(searchStr, true);
            const props = api.getProps();
            props.onSearch?.(searchStr);
        },
        [api]
    );
};

const useOnFilterTreeNode = (api: ITreeSelectApi) => {
    const defaultFilter = useDefaultFilter(api);
    return useCallback<(inputValue: string, treeNode: DefaultOptionType) => boolean>(
        (inputValue, treeNode) => {
            //Whether to filter treeNodes by input value. The value of treeNodeFilterProp is used for filtering by default
            if (!api.getIsAllFetched()) return true; //Data filtration when requested from the server is carried out by a server
            const props = api.getProps();
            if (!props.filterTreeNode) return defaultFilter(inputValue, treeNode);

            if (typeof props.filterTreeNode === 'function') return props.filterTreeNode(inputValue, treeNode);
            else return props.filterTreeNode;
        },
        [api, defaultFilter]
    );
};

const useFieldNames = (api: ITreeSelectApi) => {
    return useMemo(() => {
        const props = api.getProps();
        const fieldNames = api.getFieldNames();
        const value = fieldNames.key;
        const label = !props.treeTitleRender && props.titleRender ? '__title' : fieldNames.title;
        const children = fieldNames.children;
        return {value, label, children};
    }, [api]);
};

const useTreeNodeLabelProp = (api: ITreeSelectApi) => {
    return useMemo(() => {
        const props = api.getProps();
        const fieldNames = api.getFieldNames();
        if (props.treeNodeLabelProp) return props.treeNodeLabelProp;
        return !props.treeTitleRender && props.labelRender ? '__label' : fieldNames.title;
    }, [api]);
};

const useOnExpand = (treeApi: ITreeSelectApi) => {
    return useCallback<NonNullable<ITreeSelectProps['onTreeExpand']>>(
        keys => {
            const props = treeApi.getProps();
            treeApi.setExpandedKeys(keys);
            props.onTreeExpand?.(keys);
        },
        [treeApi]
    );
};
