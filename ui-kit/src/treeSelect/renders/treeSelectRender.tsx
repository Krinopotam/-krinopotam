import {useAddEventListener} from '@krinopotam/common-hooks';
import {IKey, IKeyboardKey} from '@krinopotam/service-types';
import {IFieldNames} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {DFormModal} from '@src/dFormModal';
import {IAntTreeSelectProps, ITreeSelectApi, ITreeSelectProps} from '@src/treeSelect';
import {TreeSelectContext} from '@src/treeSelect/context/context';
import {useDefaultFilter} from '@src/treeSelect/hooks/useDefaultFilter';
import {useDropdownStyle} from '@src/treeSelect/hooks/useDropdownStyle';
import {useGetEditFormProps} from '@src/treeSelect/hooks/useGetEditFormProps';
import {DropdownRender} from '@src/treeSelect/renders/dropdownRender';
import {NotFound} from '@src/treeSelect/renders/dropdownStatus';
import {ILabeledValue} from '@src/treeSelect/types/types';
import {TreeSelect as AntdTreeSelect} from 'antd';
import {DataNode} from "rc-tree-select/lib/interface";
import React, {useCallback, useContext} from 'react';

// For clarity. Antd has labels for a node(1) and for the selected value(2). fieldNames.label property sets the node label(1) and treeNodeLabelProp sets the selected value label(2)
// In order not to get confused, we will consider Node's label is title(1), and Label of the selected value is label(2)

export const TreeSelectRender = ({
    api,
    allProps,
    treeSelectProps,
}: {
    api: ITreeSelectApi;
    allProps: ITreeSelectProps;
    treeSelectProps: IAntTreeSelectProps;
}): React.JSX.Element => {
    const {ctrlPressedRef, dialogOpenedRef} = useContext(TreeSelectContext);
    useCtrPressed(ctrlPressedRef);

    const editFormProps = useGetEditFormProps(api, allProps, false);
    const editGroupFormProps = useGetEditFormProps(api, allProps, true);

    const dropdownStyle = useDropdownStyle(allProps.dropdownStyle);
    const dropdownRender = useDropdownRender({api: api});
    const value = useValue(api);
    const fieldNames = useFieldNames(api.getFieldNames());
    const expandedKeys = api.getExpandedKeys();
    const onExpand = useOnExpand(api);
    const onClear = useOnClear(api);
    const onChange = useOnChange(api);
    const onDropdownVisibleChange = useOnDropdownVisibleChange(api, ctrlPressedRef, dialogOpenedRef);
    const onSearch = useOnSearch(api);
    const filterTreeNode = useOnFilterTreeNode(api);

    return (
        <>
            <AntdTreeSelect
                ref={api.treeSelectRef}
                treeNodeFilterProp={fieldNames.label} //Field to be  used for filtering if filterTreeNode returns true. Default: title (getting from api.fieldNames)
                notFoundContent={<NotFound api={api} />}
                {...treeSelectProps}
                /************ no override ****************/
                labelInValue
                /** WORKAROUND: treeTitleRender is used to render both list items and the selected value, which is not suitable for us
                 * Using treeTitleRender only for select value label render. To set the rendering for a list item, override treeSelectContext in dropdownRender
                 * In order to render the items title, override treeSelectContext in dropdownRender */
                treeTitleRender={allProps.selectedRender as (node: unknown) => React.ReactNode}
                dropdownRender={!allProps.readOnly ? dropdownRender : EmptyDropdown}
                showSearch={!allProps.readOnly && allProps.showSearch !== false} // shows search field by default
                allowClear={!allProps.readOnly && allProps.allowClear !== false} // allows to clear the selected value by default
                fieldNames={fieldNames}
                treeData={api.getDataSet()}
                value={value}
                disabled={allProps.disabled}
                treeDefaultExpandAll={allProps.defaultExpandAll}
                treeDefaultExpandedKeys={allProps.defaultExpandedKeys}
                treeExpandedKeys={expandedKeys}
                open={api.getIsOpen()}
                dropdownStyle={dropdownStyle}
                /** --- Callbacks --------------- */
                filterTreeNode={filterTreeNode}
                onTreeExpand={onExpand}
                onClear={onClear}
                onChange={onChange}
                onDropdownVisibleChange={onDropdownVisibleChange}
                onSearch={onSearch}
            />
            {!allProps.disabled && editFormProps ? <DFormModal {...editFormProps} apiRef={api.getEditFormApi()} /> : null}
            {!allProps.disabled && editGroupFormProps ? <DFormModal {...editGroupFormProps} apiRef={api.getEditGroupFormApi()} /> : null}
        </>
    );
};

const EmptyDropdown = (): React.JSX.Element => <></>;

const useCtrPressed = (ctrlPressedRef: React.RefObject<boolean>) => {
    useAddEventListener('keydown', e => {
        if ((e.key as IKeyboardKey) === 'Control') ctrlPressedRef.current = true;
    });

    useAddEventListener('keyup', e => {
        if ((e.key as IKeyboardKey) === 'Control') ctrlPressedRef.current = false;
    });
};

const useValue = (api: ITreeSelectApi) => {
    const vals = api.getValues();
    const props = api.getProps();
    if (props.multiple) return vals ?? undefined;
    else return vals?.[0] ?? undefined;
};

const useDropdownRender = ({api}: {api: ITreeSelectApi}) => {
    return useCallback((menu: React.ReactElement) => <DropdownRender api={api}>{menu}</DropdownRender>, [api]);
};

const useOnClear = (api: ITreeSelectApi) => {
    return () => {
        api.setValues(null);
        const props = api.getProps();
        props.onClear?.();
    };
};

const useOnChange = (api: ITreeSelectApi): ((value: unknown) => void) => {
    return value => {
        const val = value as ILabeledValue | ILabeledValue[];
        api.setValues(val ?? null);
        const props = api.getProps();
        const keys = !val ? [] : (api.getSelectedKeys(val) ?? []);
        const nodes = !val ? [] : (api.getSelectedNodes(undefined, val) ?? []);
        props.onChange?.(value as ILabeledValue | ILabeledValue[], keys, nodes);
    };
};

const useOnDropdownVisibleChange = (
    api: ITreeSelectApi,
    ctrlPressedRef: React.RefObject<boolean>,
    dialogOpenedRef: React.RefObject<boolean>
): IAntTreeSelectProps['onDropdownVisibleChange'] => {
    return open => {
        const props = api.getProps();
        if (props.readOnly) {
            api.setIsOpen(false);
            return;
        }

        if (ctrlPressedRef.current || dialogOpenedRef.current) api.setIsOpen(true);
        else api.setIsOpen(open);

        if (open && (props.fetchMode === 'onUse' || props.fetchMode === 'onUseForce')) api.fetchData();
        props.onDropdownVisibleChange?.(open);
    };
};

const useOnSearch = (api: ITreeSelectApi): IAntTreeSelectProps['onSearch'] => {
    return searchStr => {
        api.fetchData(searchStr, true);
        const props = api.getProps();
        props.onSearch?.(searchStr);
    };
};

const useOnFilterTreeNode = (api: ITreeSelectApi) => {
    const defaultFilter = useDefaultFilter(api);
    return (inputValue: string, treeNode: DataNode) => {
        //Whether to filter treeNodes by input value. The value of treeNodeFilterProp is used for filtering by default
        if (!api.getIsAllFetched()) return true; //Data filtration when requested from the server is carried out by a server
        const props = api.getProps();
        if (!props.filterTreeNode) return defaultFilter(inputValue, treeNode);

        if (typeof props.filterTreeNode === 'function') return props.filterTreeNode(inputValue, treeNode);
        else return props.filterTreeNode;
    };
};

const useFieldNames = (fieldNames: IFieldNames) => {
    return {
        value: fieldNames.key,
        label: fieldNames.title,
        children: fieldNames.children,
    };
};

const useOnExpand = (treeApi: ITreeSelectApi): ITreeSelectProps['onTreeExpand'] => {
    return keys => {
        const props = treeApi.getProps();
        treeApi.setExpandedKeys(keys as IKey[]);
        props.onTreeExpand?.(keys);
    };
};
