import {TreeSelect as AntdTreeSelect} from 'antd';
import React, {useCallback, useContext, useMemo} from 'react';
import {IAntTreeSelectProps, ITreeSelectApi, ITreeSelectProps} from '@src/treeSelect';
import {useDropdownStyle} from '@src/treeSelect/hooks/dropdownStyle';
import {useDefaultFilter} from '@src/treeSelect/hooks/filter';
import {NotFound} from '@src/treeSelect/renders/dropdownStatus';
import {DefaultOptionType} from 'rc-tree-select/es/TreeSelect';
import {usePrepareEditFormProps} from '@src/treeSelect/hooks/prepareEditForm';
import {DFormModal} from '@src/dFormModal';
import {ILabeledValue} from '@src/treeSelect/types/types';
import {IKey, IKeyboardKey} from '@krinopotam/service-types';
import {TreeSelectContext} from '@src/treeSelect/context/context';
import {useAddEventListener} from '@krinopotam/common-hooks';
import {DropdownRender} from '@src/treeSelect/renders/dropdownRender';
import {IFieldNames} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';

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

    const editFormProps = usePrepareEditFormProps(api, allProps, false);
    const editGroupFormProps = usePrepareEditFormProps(api, allProps, true);

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
    const plainList = api.isDataPlainList();

    return (
        <>
            <AntdTreeSelect
                ref={api.treeSelectRef}
                treeNodeFilterProp={fieldNames.label} //Field to be  used for filtering if filterTreeNode returns true. Default: title (getting from api.fieldNames)
                notFoundContent={
                    <NotFound
                        treeProps={allProps}
                        fetching={api.getIsFetching()}
                        error={api.getFetchError()}
                        minSymbols={api.getMinSymbols()}
                        plainList={plainList}
                    />
                }
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
            {!allProps.readOnly && editFormProps ? <DFormModal {...editFormProps} apiRef={api.getEditFormApi()} /> : null}
            {!allProps.readOnly && editGroupFormProps ? <DFormModal {...editGroupFormProps} apiRef={api.getEditGroupFormApi()} /> : null}
        </>
    );
};

const EmptyDropdown = (): React.JSX.Element => <></>;

const useCtrPressed = (ctrlPressedRef: React.MutableRefObject<boolean>) => {
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
    return useCallback(() => {
        api.setValues(undefined);
        const props = api.getProps();
        props.onClear?.();
    }, [api]);
};

const useOnChange = (api: ITreeSelectApi) => {
    return useCallback<(value: unknown) => void>(
        value => {
            const val = value as ILabeledValue | ILabeledValue[];
            api.setValues(val);
            const props = api.getProps();
            const keys = api.getSelectedKeys(val) ?? [];
            const nodes = api.getSelectedNodes(undefined, val) ?? [];
            props.onChange?.(value as ILabeledValue | ILabeledValue[], keys, nodes);
        },
        [api]
    );
};

const useOnDropdownVisibleChange = (api: ITreeSelectApi, ctrlPressedRef: React.MutableRefObject<boolean>, dialogOpenedRef: React.MutableRefObject<boolean>) => {
    return useCallback<NonNullable<IAntTreeSelectProps['onDropdownVisibleChange']>>(
        open => {
            const props = api.getProps();
            if (props.readOnly) {
                api.setIsOpen(false);
                return;
            }

            if (ctrlPressedRef.current || dialogOpenedRef.current) api.setIsOpen(true);
            else api.setIsOpen(open);

            if (open && (props.fetchMode === 'onUse' || props.fetchMode === 'onUseForce')) api.fetchData();
            props.onDropdownVisibleChange?.(open);
        },
        [api, ctrlPressedRef, dialogOpenedRef]
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

const useFieldNames = (fieldNames: IFieldNames) => {
    return useMemo(() => {
        const value = fieldNames.key;
        const label = fieldNames.title;
        const children = fieldNames.children;
        return {value, label, children};
    }, [fieldNames.children, fieldNames.key, fieldNames.title]);
};

const useOnExpand = (treeApi: ITreeSelectApi) => {
    return useCallback<NonNullable<ITreeSelectProps['onTreeExpand']>>(
        keys => {
            const props = treeApi.getProps();
            treeApi.setExpandedKeys(keys as IKey[]);
            props.onTreeExpand?.(keys);
        },
        [treeApi]
    );
};
