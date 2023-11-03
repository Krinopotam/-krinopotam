import {Col, Row, TreeSelect as AntdTreeSelect} from 'antd';
import {DFormModal, IDFormModalProps} from '@src/dFormModal';
import React, {ComponentProps, useEffect, useMemo, useState} from 'react';
import {getUuid, splitObject} from '@krinopotam/js-helpers';
import {TreeSelectRender} from '@src/treeSelect/renders/treeSelectRender';
import {useEditableInit} from '@src/treeSelect/hooks/useEditForm';
import {ITreeSelectApi, useInitApi} from '@src/treeSelect/hooks/api';
import {useGetActualProps} from '@krinopotam/common-hooks';
import {TPromise} from '@krinopotam/service-types';
import {ButtonsRow, IButtonsRowApi, IFormButtons} from '@src/buttonsRow/buttonsRow';
import {useInitButtons} from '@src/treeSelect/hooks/buttons';

//region Types
export interface ITreeSelectNode extends Record<string, unknown> {
    /** Node id */
    id?: string | number;
    /** Node value (same as id, used to avoid antd bug) */
    value?: string | number;
    // defaultValueCallback?: (data: ITreeSelectNode[]) => ITreeSelectNode | ITreeSelectNode[];
    /** Node name */
    title?: string | React.ReactNode;
    /** Selected node name. Property treeNodeLabelProp need to be set */
    label?: string | React.ReactNode;
    /** Children nodes */
    children?: ITreeSelectNode[];
    /** Is node selectable*/
    selectable?: boolean;
    /** Is node disabled*/
    disabled?: boolean;
    /** Is node checkable*/
    checkable?: boolean;
    /** is node checkbox must be disabled*/
    disableCheckbox?: boolean;
    /** Is node is leaf (mustn't have children)*/
    isLeaf?: boolean;
    /** Service rendered title, used if component has title render */
    __title?: string | React.ReactNode;
    /** Service rendered label, used if component has label render */
    __label?: string | React.ReactNode;
}

export type ITreeSelectValue = ITreeSelectNode | ITreeSelectNode[] | null;

interface ITeeSelectFieldNames {
    title?: string;
    value?: string;
    children?: string;
}

//export type IAntTreeSelectProps = Omit<TreeSelectProps, 'treeNodeLabelProp' | 'treeData' | 'onClear' | 'onChange'>;
export type IAntTreeSelectProps = Omit<ComponentProps<typeof AntdTreeSelect>, 'treeNodeLabelProp' | 'treeData' | 'loadData' | 'onClear' | 'onChange'>;

export interface ITreeSelectBaseProps {
    /** A mutable object to merge with these controls api */
    apiRef?: ITreeSelectApi;

    /** Tree TreeSelect id */
    treeSelectId?: string;

    /** Is TreeSelect read only  */
    readOnly?: boolean; //TODO: Make readonly

    /** Value */
    value?: ITreeSelectValue | string;

    /** Value */
    defaultValueCallback?: (data: ITreeSelectNode[]) => ITreeSelectNode | ITreeSelectNode[];

    /**  Title renderer */
    titleRender?: (treeNode: ITreeSelectNode | Record<string, unknown>) => React.ReactNode;

    /**  Label renderer */
    labelRender?: (treeNode: ITreeSelectNode | Record<string, unknown>) => React.ReactNode;

    /**  Custom filter */
    filterTreeNode?: boolean | ((inputValue: string, treeNode: ITreeSelectNode | Record<string, unknown>) => boolean);

    /** Local data set */
    dataSet?: ITreeSelectNode[];

    /**  Start fetching remote data on load control or on use control (example, open dropdown). Default OnLoad */
    fetchMode?: 'onLoad' | 'onUse' | 'onUseForce';

    /**  Loaded data without parameters (like searchString) will not be cached */
    noCacheFetchedData?: boolean;

    /**  Minimum length of search string before fetch data */
    minSearchLength?: number;

    /**  debounce in ms */
    debounce?: number;

    /**Selected value label. Will render as content of select. Default: title */
    selectedLabelProp?: string;

    /** Customize node label, value, children field name */
    fieldNames?: ITeeSelectFieldNames;

    /** Edit item controls props. If not set then component not editable */
    editFormProps?: IDFormModalProps;

    /** Confirm message before node delete */
    nodeDeleteMessage?: React.ReactNode;

    /** Should confirm before delete */
    confirmDelete?: boolean;

    /** Edit buttons*/
    editButtons?: IFormButtons;

    /** --- Callbacks --------------- */

    /** Fires when the component is ready for use (when it fully downloaded all the data, if necessary) */
    onReady?: () => void;

    /** Fires on change selected values */
    onChange?: (value: ITreeSelectValue) => void;

    /** Fires on input value cleared */
    onClear?: () => void;

    /** fires when the TreeSelect trying to fetch data */
    onDataFetch?: (search: string, api: ITreeSelectApi) => ITreeSelectSourcePromise | undefined;

    /** fires when the TreeSelect fetch success */
    onDataFetchSuccess?: (result: {data: ITreeSelectNode[]}, api: ITreeSelectApi) => boolean | void;

    /** fires when the TreeSelect fetch failed */
    onDataFetchError?: (message: string, code: number, api: ITreeSelectApi) => boolean | void;

    /** fires after the completion of fetching the data, regardless of the result */
    onDataFetchComplete?: (api: ITreeSelectApi) => boolean | void;

    /** Callback executed when selected node delete */
    onDelete?: (selectedNodes: ITreeSelectNode[], api: ITreeSelectApi) => ITreeSelectDeletePromise | void | undefined;
}

export type ITreeSelectProps = ITreeSelectBaseProps & IAntTreeSelectProps;

export type ITreeSelectSourcePromise = TPromise<{data: ITreeSelectNode[]}, {message: string; code: number}>;
export type ITreeSelectDeletePromise = TPromise<{data: Record<string, unknown>}, {message: string; code: number}>;

export type ITreeSelectPlainValue = string | number;

//endregion

export const TreeSelect = (props: ITreeSelectProps): React.JSX.Element => {
    const [treeProps, updateProps] = useGetActualProps(props); //props can be set both by parent component and via api
    const [componentId] = useState(treeProps.treeSelectId ?? 'treeSelect-' + getUuid());
    const [api] = useState((treeProps.apiRef ?? {}) as ITreeSelectApi);
    const [buttonsApi] = useState({} as IButtonsRowApi);
    useInitApi({api, componentId, treeProps, updateProps, buttonsApi});
    const [editFormProps, formApi] = useEditableInit(api);
    const buttons = useInitButtons(api, formApi); //init buttons

    const antdTreeSelectProps = useSplitAntTreeSelectProps(props);

    useEffect(() => {
        api.setIsAllFetched(false);
        api.setDataSet(undefined);
        api.setValues(null);
    }, [api]);

    /** Set dataSet if props changed*/
    useEffect(() => {
        api.setDataSet(treeProps.dataSet);
    }, [api.setDataSet, api, treeProps.dataSet]);

    /** Set data value if props changed*/
    useEffect(() => {
        api.setValues(treeProps.value ?? null);
    }, [api, treeProps.value]);

    /** Fetch on load */
    useEffect(() => {
        if ((!treeProps.fetchMode || treeProps.fetchMode === 'onLoad') && !treeProps.minSearchLength) {
            api.fetchData('');
            return;
        }

        if (!api.getIsReady()) treeProps?.onReady?.();
    }, [api, treeProps, treeProps.fetchMode, treeProps.minSearchLength]);

    /*
    useEffect(() => {
        if ((treeProps.dataSet !== undefined && internalValue == null) || (treeProps.dataSet !== undefined && internalValue?.value === undefined)) {
            const defValue = defaultValueCallback?.(treeProps.dataSet);

            if (typeof defaultValueCallback == 'function' && defValue !== undefined) {
                setValue(defValue);
                treeProps.callbacks?.onChange?.(defValue);
            }
        }
    }, [defaultValueCallback, internalValue, treeProps.callbacks, setValue, treeProps.dataSet]);

    */

    if (!editFormProps || treeProps.readOnly || treeProps.disabled) return <TreeSelectRender api={api} treeSelectProps={props} antdTreeSelectProps={antdTreeSelectProps} />;

    return (
        <Row wrap={false}>
            {/*<Col flex="auto">{treeSelect}</Col> */}
            <TreeSelectRender api={api} treeSelectProps={props} antdTreeSelectProps={antdTreeSelectProps} />
            <Col>
                <ButtonsRow buttons={buttons} apiRef={buttonsApi} context={api} />
            </Col>
            <DFormModal {...editFormProps} />
        </Row>
    );
};

const useSplitAntTreeSelectProps = (props: ITreeSelectProps) => {
    return useMemo((): IAntTreeSelectProps => {
        const result = splitObject<ITreeSelectBaseProps, IAntTreeSelectProps>(props, {
            apiRef: true,
            treeSelectId: true,
            readOnly: true,
            value: true,
            defaultValueCallback: true,
            titleRender: true,
            labelRender: true,
            filterTreeNode: true,
            dataSet: true,
            fetchMode: true,
            noCacheFetchedData: true,
            minSearchLength: true,
            debounce: true,
            selectedLabelProp: true,
            fieldNames: true,
            editFormProps: true,
            nodeDeleteMessage: true,
            confirmDelete: true,
            editButtons: true,
            onReady: true,
            onChange: true,
            onClear: true,
            onDataFetch: true,
            onDataFetchSuccess: true,
            onDataFetchError: true,
            onDataFetchComplete: true,
            onDelete: true,
        });

        return result[1];
    }, [props]);
};

