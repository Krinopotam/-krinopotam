import {TreeSelect as AntdTreeSelect} from 'antd';
import React, {useCallback, useMemo} from 'react';
import {IAntTreeSelectProps, ITreeSelectApi, ITreeSelectProps, ITreeSelectValue} from '@src/treeSelect';
import {useDropdownStyle} from '@src/treeSelect/hooks/dropdownStyle';
import {useDefaultDropdownRender} from '@src/treeSelect/hooks/defaultDropdownRender';
import {useDefaultFilter} from '@src/treeSelect/hooks/filter';
import {NotFound} from '@src/treeSelect/renders/dropdownStatus';
import {DefaultOptionType} from "rc-tree-select/es/TreeSelect";

// For clarity. Antd has labels for a node(1) and for the selected value(2). fieldNames.label property sets the node label(1) and treeNodeLabelProp sets the selected value label(2)
// In order not to get confused, we will consider Node's label is title(1), and Label of the selected value is label(2)
// For the implementation of the capabilities of the Title & Labels  renders, we add to dataSet 2 service fields: __title & __label

export const TreeSelectRender = ({
                                     api,
                                     allProps,
                                     treeSelectProps,
                                 }: {
    api: ITreeSelectApi;
    allProps: ITreeSelectProps;
    treeSelectProps: IAntTreeSelectProps;
}): React.JSX.Element => {

    const dropdownStyle = useDropdownStyle(allProps.dropdownStyle);
    const defaultDropdownRender = useDefaultDropdownRender({api});
    const value = useValue(api);
    const fieldNames = useFieldNames(api);
    const treeNodeLabelProp = useTreeNodeLabelProp(api);
    const onClear = useOnClear(api)
    const onChange = useOnChange(api)
    const onDropdownVisibleChange = useOnDropdownVisibleChange(api)
    const onSearch = useOnSearch(api)
    const filterTreeNode = useOnFilterTreeNode(api)

    return (
        <AntdTreeSelect
            showSearch // shows search field by default
            treeDefaultExpandAll // expands all nodes by default
            treeNodeFilterProp={fieldNames.label} //Field to be  used for filtering if filterTreeNode returns true. Default: title (getting from api.fieldNames)
            dropdownRender={defaultDropdownRender}
            notFoundContent={(
                <NotFound fetching={api.getIsFetching()} error={api.getFetchError()} minSymbols={api.getMinSymbols()}
                          plainList={allProps.plainList}/>)}

            {...treeSelectProps}
            /************ no override ****************/
            fieldNames={fieldNames}
            treeNodeLabelProp={treeNodeLabelProp} //Selected value label. Will render as content of select. Default: title
            treeData={api.getDataSet()}
            value={value}
            disabled={allProps.disabled || allProps.readOnly} //TODO: implement true readOnly
            //labelInValue // We do not use this mode, as it is useless. In this mode, onChange will return an object containing value and label, but you still can’t build a full node

            //loadData={onLoadData}
            dropdownStyle={dropdownStyle}

            /** --- Callbacks --------------- */
            filterTreeNode={filterTreeNode}
            onClear={onClear}
            onChange={onChange}
            onDropdownVisibleChange={onDropdownVisibleChange}
            onSearch={onSearch}
        />
    );
};

const useValue = (api: ITreeSelectApi) => {
    return useMemo(() => {
        return api.getValue()
    }, [api])

}

const useOnClear = (api: ITreeSelectApi) => {
    return useCallback(() => {
        api.setValue(undefined);
        const props = api.getProps();
        props.onClear?.();
    }, [api])
}

const useOnChange = (api: ITreeSelectApi) => {
    return useCallback<NonNullable<IAntTreeSelectProps['onChange']>>((value, label, extra) => {
        const props = api.getProps();
        let values: ITreeSelectValue = undefined;
        if (value) values = Array.isArray(value) ? value : [value];
        api.setValue(values);
        props.onChange?.(value, label, extra);
    }, [api])
}

const useOnDropdownVisibleChange = (api: ITreeSelectApi) => {
    return useCallback<NonNullable<IAntTreeSelectProps['onDropdownVisibleChange']>>((open) => {
        const props = api.getProps();
        if (open && (props.fetchMode === 'onUse' || props.fetchMode === 'onUseForce')) api.fetchData('');
        props.onDropdownVisibleChange?.(open);
    }, [api])
}

const useOnSearch = (api: ITreeSelectApi) => {
    return useCallback<NonNullable<IAntTreeSelectProps['onSearch']>>((searchStr) => {
        api.fetchData(searchStr, true);
        const props = api.getProps();
        props.onSearch?.(searchStr);
    }, [api])
}

const useOnFilterTreeNode = (api: ITreeSelectApi) => {
    const defaultFilter = useDefaultFilter(api);
    return useCallback<(inputValue: string, treeNode: DefaultOptionType) => boolean>((inputValue, treeNode) => {
        //Whether to filter treeNodes by input value. The value of treeNodeFilterProp is used for filtering by default
        if (!api.getIsAllFetched()) return true; //Data filtration when requested from the server is carried out by a server
        const props = api.getProps();
        if (!props.filterTreeNode) return defaultFilter(inputValue, treeNode);

        if (typeof props.filterTreeNode === 'function') return props.filterTreeNode(inputValue, treeNode);
        else return props.filterTreeNode;
    }, [api, defaultFilter])
}

const useFieldNames = (api: ITreeSelectApi) => {
    return useMemo(() => {
        const props = api.getProps()
        const fieldNames = api.getFieldNames()
        const value = fieldNames.key
        const label = props.titleRender ? '__title' : fieldNames.title;
        const children = fieldNames.children
        return {value, label, children}
    }, [api])

}

const useTreeNodeLabelProp = (api: ITreeSelectApi) => {
    return useMemo(() => {
        const props = api.getProps()
        const fieldNames = api.getFieldNames()
        if (props.treeNodeLabelProp) return props.treeNodeLabelProp
        return props.labelRender ? '__label' : fieldNames.title
    }, [api])

}
