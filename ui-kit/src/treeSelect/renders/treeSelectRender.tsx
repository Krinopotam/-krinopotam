import {TreeSelect as AntdTreeSelect} from 'antd';
import React, {useMemo} from 'react';
import {ITreeSelectProps, IAntTreeSelectProps, ITreeSelectPlainValue} from '@src/treeSelect';
import {useDropdownStyle} from '@src/treeSelect/hooks/dropdownStyle';
import {NotFound} from '@src/treeSelect/renders/notFound';
import {useDefaultDropdownRender} from '@src/treeSelect/hooks/defaultDropdownRender';
import {ITreeSelectApi} from '@src/treeSelect';
import {useDefaultFilter} from "@src/treeSelect/hooks/filter";
import {HelpersObjects} from "@krinopotam/js-helpers";

// For clarity. Antd has labels for a node(1) and for the selected value(2). fieldNames.label property sets the node label(1) and treeNodeLabelProp sets the selected value label(2)
// In order not to get confused, we will consider Node's label is title(1), and Label of the selected value is label(2)
// For the implementation of the capabilities of the Title & Labels  renders, we add to dataSet 2 service fields: __title & __label
export const TreeSelectRender = (
    {
        api,
        treeSelectProps,
    }: {
        api: ITreeSelectApi;
        treeSelectProps: ITreeSelectProps;
    }): React.JSX.Element => {

    const _dropdownStyle = useDropdownStyle(treeSelectProps.dropdownStyle);
    const defaultDropdownRender = useDefaultDropdownRender({
        fetchError: api.getFetchError(),
        fetching: api.getIsFetching(),
        minSymbols: api.getMinSymbols()
    });
    const defaultFilter = useDefaultFilter(api);

    const baseProps = useGetAntTreeSelectProps(treeSelectProps);

    return (
        <AntdTreeSelect
            {...baseProps}

            treeData={api.getDataSet()}

            showSearch={treeSelectProps.showSearch !== false}

            treeDefaultExpandAll={treeSelectProps.treeDefaultExpandAll !== false}

            disabled={treeSelectProps.disabled ?? treeSelectProps.readOnly} //TODO: implement true readOnly

            //labelInValue // We do not use this mode, as it is useless. In this mode, onChange will return an object containing value and label, but you still can’t build a full node

            //loadData={onLoadData}

            dropdownStyle={_dropdownStyle}

            fieldNames={{
                //Customize node label, value, children field name. __title - special service field to show rendered node label
                label: !treeSelectProps.titleRender ? treeSelectProps.fieldNames?.title ?? 'title' : '__title',
                value: treeSelectProps.fieldNames?.value ? treeSelectProps.fieldNames.value : 'id',
                children: treeSelectProps.fieldNames?.children ? treeSelectProps.fieldNames.children : 'children',
            }}

            treeNodeLabelProp={
                treeSelectProps.selectedLabelProp ? treeSelectProps.selectedLabelProp : treeSelectProps.labelRender ? '__label' : treeSelectProps.fieldNames?.title ?? 'title'
            } //Selected value label. Will render as content of select. Default: title

            treeNodeFilterProp={treeSelectProps.titleRender ? '__title' : treeSelectProps.fieldNames?.title ?? 'title'} //Field to be  used for filtering if filterTreeNode returns true. Default: title

            filterTreeNode={(inputValue, treeNode) => {
                //Whether to filter treeNodes by input value. The value of treeNodeFilterProp is used for filtering by default
                if (!api.getIsAllFetched()) return true; //Data filtration when requested from the server is carried out by a server
                if (!treeSelectProps.filterTreeNode) return defaultFilter(inputValue, treeNode);

                if (typeof treeSelectProps.filterTreeNode === 'function') return treeSelectProps.filterTreeNode(inputValue, treeNode);
                else return treeSelectProps.filterTreeNode;
            }}

            value={api.getInternalValue()}

            notFoundContent={
                treeSelectProps.notFoundContent ??
                <NotFound fetching={api.getIsFetching()} error={api.getFetchError()} minSymbols={api.getMinSymbols()}/>
            }
            dropdownRender={treeSelectProps.dropdownRender ?? defaultDropdownRender}

            /** --- Callbacks --------------- */

            onClear={() => {
                treeSelectProps.onClear?.();
                api.setValues(null);
                treeSelectProps.onClear?.();
            }}
            onChange={(value) => {
                const selectedNodes = api.plainValueToNodes(value as (ITreeSelectPlainValue | ITreeSelectPlainValue[] | null | undefined));
                api.setValues(selectedNodes ?? null);
                treeSelectProps.onChange?.(selectedNodes ?? null)
            }}
            onDropdownVisibleChange={(open: boolean) => {
                if (open && (treeSelectProps.fetchMode === 'onUse' || treeSelectProps.fetchMode === 'onUseForce')) api.fetchData('');
                treeSelectProps.onDropdownVisibleChange?.(open)
            }}
            onSearch={(searchString) => {
                api.fetchData(searchString, true);
                treeSelectProps.onSearch?.(searchString)
            }}
        />
    );
};

const useGetAntTreeSelectProps = (props: ITreeSelectProps) => {
    return useMemo((): IAntTreeSelectProps => {
        const result = HelpersObjects.splitObject(props, [
            'apiRef',
            'treeSelectId',
            'readOnly',
            'value',
            'defaultValueCallback',
            'titleRender',
            'labelRender',
            'filterTreeNode',
            'dataSet',
            'fetchMode',
            'noCacheFetchedData',
            'minSearchLength',
            'debounce',
            'selectedLabelProp',
            'fieldNames',
            'editFormProps',
            'nodeDeleteMessage',
            'confirmDelete',
            'editButtons',
            'onReady',
            'onChange',
            'onClear',
            'onDataFetch',
            'onDataFetchSuccess',
            'onDataFetchError',
            'onDataFetchComplete',
            'onDelete'
        ]);

        return result[1] as IAntTreeSelectProps;
    }, [props]);
};
