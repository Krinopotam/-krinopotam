import {TreeSelect as AntdTreeSelect} from 'antd';
import React, {useCallback, useContext, useMemo} from 'react';
import {IAntTreeSelectProps, ITreeSelectApi, ITreeSelectProps} from '@src/treeSelect';
import {useDropdownStyle} from '@src/treeSelect/hooks/dropdownStyle';
import {useDefaultFilter} from '@src/treeSelect/hooks/filter';
import {NotFound} from '@src/treeSelect/renders/dropdownStatus';
import {DefaultOptionType} from 'rc-tree-select/es/TreeSelect';
import {DefaultDropdownRender} from '@src/treeSelect/renders/defaultDropdownRender';
import {usePrepareEditFormProps} from '@src/treeSelect/hooks/prepareEditForm';
import {DFormModal} from '@src/dFormModal';
import {ILabeledValue} from '@src/treeSelect/types/types';
import {useApiGetSelectedNodes} from '@src/treeSelect/hooks/api/useApiGetSelectedNodes';
import {useApiGetSelectedKeys} from '@src/treeSelect/hooks/api/useApiGetSelectedKeys';
import {IKeyboardKey} from '@krinopotam/service-types';
import {TreeSelectContext} from '@src/treeSelect/context/context';
import {useAddEventListener} from '@krinopotam/common-hooks';

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
    const {ctrlPressedRef, editFormOpenedRef} = useContext(TreeSelectContext);
    useCtrPressed(api, ctrlPressedRef, editFormOpenedRef);

    const editFormProps = usePrepareEditFormProps(api, allProps, false);
    const editGroupFormProps = usePrepareEditFormProps(api, allProps, true);

    const dropdownStyle = useDropdownStyle(allProps.dropdownStyle);
    const defaultDropdownRender = useDefaultDropdownRender({api: api});
    const value = useValue(api);
    const fieldNames = useFieldNames(api);
    const treeNodeLabelProp = useTreeNodeLabelProp(api);
    const expandedKeys = api.getExpandedKeys();
    const onExpand = useOnExpand(api);
    const onClear = useOnClear(api);
    const onChange = useOnChange(api, ctrlPressedRef);
    const onDropdownVisibleChange = useOnDropdownVisibleChange(api, ctrlPressedRef);
    const onSearch = useOnSearch(api);
    const filterTreeNode = useOnFilterTreeNode(api);
    const plainList = api.isDataPlainList();
    console.log(expandedKeys, api.getIsOpen());
    return (
        <>
            <AntdTreeSelect
                ref={api.treeSelectRef}
                showSearch // shows search field by default
                allowClear // allows to clear the selected value by default
                treeNodeFilterProp={fieldNames.label} //Field to be  used for filtering if filterTreeNode returns true. Default: title (getting from api.fieldNames)
                dropdownRender={defaultDropdownRender}
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
                fieldNames={fieldNames}
                treeNodeLabelProp={treeNodeLabelProp} //Selected value label. Will render as content of select. Default: title
                treeData={api.getDataSet()}
                value={value}
                disabled={allProps.disabled || allProps.readOnly} //TODO: implement true readOnly
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
            {editFormProps && !allProps.readOnly ? <DFormModal {...editFormProps} apiRef={api.getEditFormApi()} /> : null}
            {editGroupFormProps && !allProps.readOnly ? <DFormModal {...editGroupFormProps} apiRef={api.getEditGroupFormApi()} /> : null}
        </>
    );
};

const useCtrPressed = (api: ITreeSelectApi, ctrlPressedRef: React.MutableRefObject<boolean>, editFormOpenedRef: React.MutableRefObject<boolean>) => {
    useAddEventListener('keydown', e => {
        if ((e.key as IKeyboardKey) === 'Control') ctrlPressedRef.current = true;
    });

    useAddEventListener('keyup', e => {
        if ((e.key as IKeyboardKey) === 'Control') {
            ctrlPressedRef.current = false;
            if (!editFormOpenedRef.current) api.setIsOpen(undefined);
        }
    });
};

const useValue = (api: ITreeSelectApi) => {
    const vals = api.getValues();
    const props = api.getProps();
    if (props.multiple) return vals ?? undefined;
    else return vals?.[0] ?? undefined;
};

const useDefaultDropdownRender = ({api}: {api: ITreeSelectApi}) => {
    return useCallback((menu: React.ReactNode) => <DefaultDropdownRender api={api}>{menu}</DefaultDropdownRender>, [api]);
};

const useOnClear = (api: ITreeSelectApi) => {
    return useCallback(() => {
        api.setValues(undefined);
        const props = api.getProps();
        props.onClear?.();
    }, [api]);
};

const useOnChange = (api: ITreeSelectApi, ctrlPressedRef: React.MutableRefObject<boolean>) => {
    const valueToNodes = useApiGetSelectedNodes(api);
    const valueToKeys = useApiGetSelectedKeys();
    return useCallback<(value: unknown) => void>(
        value => {
            const val = value as ILabeledValue | ILabeledValue[];
            api.setValues(val);
            const props = api.getProps();
            props.onChange?.(value as ILabeledValue | ILabeledValue[], valueToKeys(val) ?? [], valueToNodes(undefined, val) ?? []);

            /*            if (ctrlPressedRef.current)                 api.setIsOpen(()=>true);
                        else api.setIsOpen(undefined);*/
        },
        [api, ctrlPressedRef, valueToKeys, valueToNodes]
    );
};

const useOnDropdownVisibleChange = (api: ITreeSelectApi, ctrlPressedRef: React.MutableRefObject<boolean>) => {
    return useCallback<NonNullable<IAntTreeSelectProps['onDropdownVisibleChange']>>(
        open => {
            if (ctrlPressedRef.current) api.setIsOpen(true);
            else api.setIsOpen(open);

            const props = api.getProps();
            if (open && (props.fetchMode === 'onUse' || props.fetchMode === 'onUseForce')) api.fetchData();
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
