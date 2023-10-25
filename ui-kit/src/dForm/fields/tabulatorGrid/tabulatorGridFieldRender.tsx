import React, {useMemo, useRef, useState, useSyncExternalStore} from 'react';
import {ITabulatorGridFieldPropsBase, ITabulatorGridFieldProps, TabulatorGridField} from '@src/dForm/fields/tabulatorGrid/tabulatorGridField';
import {IGridApi, IGridRowData, ITabulatorProps, TabulatorGrid} from '@src/tabulatorGrid';
import {HelpersObjects} from '@krinopotam/js-helpers';
import {IRequestProps} from '@src/tabulatorBase';
import {IGridPropsCallbacks} from '@src/tabulatorGrid/tabulatorGrid';

export const TabulatorGridFieldRender = ({field}: {field: TabulatorGridField}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const [gridApi] = useState({} as IGridApi);

    const fieldProps = field.getProps();
    const tabulatorProps = useSplitTabulatorProps(fieldProps);

    const value = field.getValue() as IGridRowData[];

    const prevDataSetRef = useRef<IGridRowData[]>();
    const prevValueRef = useRef<IGridRowData[]>();

    // Workaround: it is necessary to ensure that,
    // on the one hand, when changing the rows by the grid itself, the memorized dataSet stay the same and the grid are not re-rendered.
    // On the other hand, if the dataSet is modified by the user, the grid must re-render.
    // So the grid's memorized dataSet stays the same until it's set outside onDataSetChanging.
    if (prevValueRef.current !== value) {
        prevDataSetRef.current = value;
        prevValueRef.current = value;
    }
    const curDataSet =  prevDataSetRef.current;

    const callbacks = usePrepareCallbacks(field, fieldProps, prevValueRef);
    return useMemo(() => {
        return (
            <TabulatorGrid
                {...tabulatorProps}
                {...callbacks}
                apiRef={gridApi}
                dataSet={curDataSet}
                readOnly={fieldProps.readOnly}
                placeholder={fieldProps.placeholder}
                width={fieldProps.width}
                resizeHeightWithParent={fieldProps.resizeHeightWithForm ? '#' + field.getModel().getFormId() : fieldProps.resizeHeightWithParent}
            />
        );
    }, [
        tabulatorProps,
        callbacks,
        gridApi,
        curDataSet,
        fieldProps.readOnly,
        fieldProps.placeholder,
        fieldProps.width,
        fieldProps.resizeHeightWithForm,
        fieldProps.resizeHeightWithParent,
        field,
    ]);
};

const useSplitTabulatorProps = (props: ITabulatorGridFieldProps) => {
    return useMemo((): ITabulatorProps => {
        const result = HelpersObjects.splitObject<ITabulatorGridFieldPropsBase, ITabulatorProps>(props, {
            value: true,
            onMenuVisibilityChanged: true,
            onDataLoading: true,
            onDataLoaded: true,
            onDataLoadError: true,
            onDataChanged: true,
            onDataFetchHandler: true,
            onDataFetchResponse: true,
            onSelectionChange: true,
            onDelete: true,
            readOnly: true,
            onValueChanged: true,
            width: true,
            component: true,
            rules: true,
            onReadyStateChanged: true,
            autoFocus: true,
            dependsOn: true,
            disabled: true,
            helpClass: true,
            hidden: true,
            label: true,
            inlineGroup: true,
            onDirtyStateChanged: true,
            onDisabledStateChanged: true,
            onErrorChanged: true,
            onHiddenStateChanged: true,
            onLabelChanged: true,
            onReadOnlyStateChanged: true,
            placeholder: true,
            onTouchedStateChanged: true,
            onValidated: true,
            requiredMark: true,
            rowStyle: true,
            style: true,
            tooltip: true,
            resizeHeightWithForm: true,
        });

        return result[1];
    }, [props]);
};

const usePrepareCallbacks = (
    field: TabulatorGridField,
    fieldProps: ITabulatorGridFieldProps,
    prevValueRef: React.MutableRefObject<IGridRowData[] | undefined>
) => {
    return useMemo(() => {
        return {
            onDataChanged: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi, field: TabulatorGridField) => {
                if (field.isReady()) {
                    prevValueRef.current = dataSet;
                    field.setValue(dataSet ?? undefined);
                    field.setDirty(true);
                    field.setTouched(true); //TODO: rework field touched
                }
                return fieldProps.onDataChanged?.(dataSet, gridApi, field);
            },
            onDataLoading: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi) => {
                field.setReady(false);
                return fieldProps.onDataLoading?.(dataSet, gridApi, field);
            },

            onDataLoaded: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi) => {
                field.setReady(true);
                return fieldProps.onDataLoaded?.(dataSet, gridApi, field);
            },
            onDataLoadError: (message: string, code: number, gridApi: IGridApi) => {
                field.setReady(false);
                return fieldProps.onDataLoadError?.(message, code, gridApi, field);
            },
            onDataFetch: !fieldProps.onDataFetch
                ? undefined
                : (params: IRequestProps, gridApi: IGridApi) => {
                      return fieldProps.onDataFetch!(params, gridApi, field);
                  },
            onDataFetchResponse: (dataSet, params, gridApi) => fieldProps?.onDataFetchResponse?.(dataSet, params, gridApi, field) ?? dataSet,
            onSelectionChange: (keys, selectedRows, gridApi) => fieldProps?.onSelectionChange?.(keys, selectedRows, gridApi, field),
            onMenuVisibilityChanged: (isVisible, gridApi) => fieldProps?.onMenuVisibilityChanged?.(isVisible, gridApi, field),
            onDelete: (selectedRows, gridApi) => fieldProps?.onDelete?.(selectedRows, gridApi, field),
        } as Required<IGridPropsCallbacks>;
    }, [field, fieldProps, prevValueRef]);
};
