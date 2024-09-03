import {TreeSelect as AntdTreeSelect} from 'antd';
import React, {useCallback, useMemo} from 'react';
import {IAntTreeSelectProps, ITreeSelectApi, ITreeSelectProps, ITreeSelectValues} from '@src/treeSelect';
import {useDropdownStyle} from '@src/treeSelect/hooks/dropdownStyle';
import {useDefaultDropdownRender} from '@src/treeSelect/hooks/defaultDropdownRender';
import {useDefaultFilter} from '@src/treeSelect/hooks/filter';
import {NotFound} from '@src/treeSelect/renders/dropdownStatus';
import {DefaultOptionType} from "rc-tree-select/es/TreeSelect";

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
    const defaultDropdownRender = useDefaultDropdownRender({
        fetchError: api.getFetchError(),
        fetching: api.getIsFetching(),
        minSymbols: api.getMinSymbols(),
        plainList: allProps.plainList,
    });

    const value = useValue(api);
    const onClear = useOnClear(api)
    const onChange = useOnChange(api)
    const onDropdownVisibleChange = useOnDropdownVisibleChange(api)
    const onSearch = useOnSearch(api)
    const filterTreeNode = useOnFilterTreeNode(api)

    return (
        <AntdTreeSelect
            fieldNames={{value: 'id', label: 'title', children: 'children'}}
            showSearch // shows search field by default
            treeDefaultExpandAll // expands all nodes by default
            dropdownRender={defaultDropdownRender}
            treeNodeFilterProp={treeSelectProps.fieldNames?.label ?? 'label'} //Field to be  used for filtering if filterTreeNode returns true. Default: label
            notFoundContent={(<NotFound fetching={api.getIsFetching()} error={api.getFetchError()} minSymbols={api.getMinSymbols()} plainList={allProps.plainList}/>)}

            {...treeSelectProps}
            /************ no override ****************/
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
        const props = api.getProps();
        const values = api.getValues()
        if (!values) return undefined
        console.log(props.multiple ? values : values[0])
        return props.multiple ? values : values[0]

    }, [api])

}

const useOnClear = (api: ITreeSelectApi) => {
    return useCallback(() => {
        api.setValues(undefined);
        const props = api.getProps();
        props.onClear?.();
    }, [api])
}

const useOnChange = (api: ITreeSelectApi) => {
    return useCallback<NonNullable<IAntTreeSelectProps['onChange']>>((value, label, extra) => {
        const props = api.getProps();
        let values: ITreeSelectValues = undefined;
        if (value) values = Array.isArray(value) ? value : [value];
        api.setValues(values);
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

