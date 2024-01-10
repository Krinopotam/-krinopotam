import React, {useMemo, useRef, useState, useSyncExternalStore} from 'react';
import {
    ITabulatorGridFieldProps,
    ITabulatorGridFieldPropsBase,
    ITabulatorGridFieldPropsCallbacks,
    TabulatorGridField,
} from '@src/dForm/fields/tabulatorGrid/tabulatorGridField';
import {IGridApi, IGridPropsCallbacks, IGridRowData, ITabulatorProps, TabulatorGrid} from '@src/tabulatorGrid';
import {SplitObject} from '@krinopotam/js-helpers';
import {IRequestProps} from '@src/tabulatorBase';

export const TabulatorGridFieldRender = ({field, gridApi: gridApiBase}: {field: TabulatorGridField; gridApi: IGridApi}): React.JSX.Element => {
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const fieldProps = field.getProps();
    const [gridApi] = useState(gridApiBase as IGridApi);

    const tabulatorProps = useSplitTabulatorProps(fieldProps);

    const value = field.getValue() as IGridRowData[];

    const curDataSetRef = useRef<IGridRowData[] | undefined>();

    /** On the form we use a memoized TabulatorGrid, therefore the dataSet passed to the Grid should not change after the first initialization to avoid grid rerender
     * All changes to grid data must be made by internal grid methods without component rerendering  */
    if (typeof curDataSetRef.current === 'undefined') {
        if (!fieldProps.selectionMode) curDataSetRef.current = value;
        else curDataSetRef.current = fieldProps.dataSet;
    }

    const callbacks = usePrepareCallbacks(field, fieldProps);

    let height = fieldProps.height;

    if (fieldProps.autoHeightResize) height = '100%';

    const containerStyle = useMemo((): React.CSSProperties => {
        return fieldProps.autoHeightResize
            ? {
                  position: 'absolute',
                  inset: 0,
              }
            : {};
    }, [fieldProps.autoHeightResize]);

    return (
        <div style={containerStyle}>
            <TabulatorGrid
                {...tabulatorProps}
                {...callbacks}
                apiRef={gridApi}
                dataSet={curDataSetRef.current}
                readOnly={fieldProps.readOnly}
                placeholder={fieldProps.placeholder}
                width={fieldProps.width}
                height={height}
                resizeHeightWithParent={fieldProps.resizeHeightWithForm ? '#' + field.getModel().getFormId() : fieldProps.resizeHeightWithParent}
            />
        </div>
    );
};

const useSplitTabulatorProps = (props: ITabulatorGridFieldProps) => {
    return useMemo((): ITabulatorProps => {
        const result = SplitObject<ITabulatorGridFieldPropsBase & ITabulatorGridFieldPropsCallbacks, ITabulatorProps>(props, {
            value: true,
            dataSet: true,
            onMenuVisibilityChanged: true,
            onDataLoading: true,
            onDataLoaded: true,
            onDataProcessed: true,
            onDataLoadError: true,
            onDataChanged: true,
            onDataFetch: true,
            onDataFetchResponse: true,
            onDataFetching: true,
            fetchInCreateMode: true,
            onSelectionChange: true,
            onDelete: true,
            readOnly: true,
            onValueChanged: true,
            width: true,
            autoHeightResize: true,
            component: true,
            rules: true,
            onReadyStateChanged: true,
            autoFocus: true,
            dependsOn: true,
            disabled: true,
            helpClass: true,
            hidden: true,
            label: true,
            nonEditable:true,
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

const usePrepareCallbacks = (field: TabulatorGridField, fieldProps: ITabulatorGridFieldProps) => {
    return useMemo(() => {
        const model = field.getModel();
        const formMode = model.getFormMode();
        return {
            onDataChanged: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi) => {
                if (field.isReady()) {
                    if (!fieldProps.selectionMode) {
                        field.setValue(dataSet ?? [], false, true, true);
                        field.setDirty(true);
                    }
                }
                return fieldProps.onDataChanged?.(dataSet, gridApi, field);
            },
            onSelectionChange: (selectedData, rows, selectedRows, deselectedRows, gridApi: IGridApi) => {
                if (field.isReady()) {
                    if (fieldProps.selectionMode) {
                        field.setValue(selectedData ?? [], false, true, true);
                        field.setDirty(true);
                    }

                    field.setTouched(true);
                }
                return fieldProps.onSelectionChange?.(selectedData, rows, selectedRows, deselectedRows, gridApi, field);
            },
            onDataLoading: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi) => {
                field.setReady(false);
                return fieldProps.onDataLoading?.(dataSet, gridApi, field);
            },

            onDataLoaded: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi) => {
                field.setReady(true);
                const fieldProps = field.getProps();
                if (!fieldProps.selectionMode) field.setValue(dataSet ?? [], false, true, true);
                return fieldProps.onDataLoaded?.(dataSet, gridApi, field);
            },
            onDataProcessed: (dataSet: IGridRowData[] | undefined, gridApi: IGridApi) => {
                const fieldProps = field.getProps();
                if (fieldProps.selectionMode) gridApi.setSelectedRows(field.getValue() as IGridRowData[]);
                return fieldProps.onDataProcessed?.(dataSet, gridApi, field);
            },
            onDataLoadError: (message: string, code: number, gridApi: IGridApi) => {
                field.setReady(false);
                return fieldProps.onDataLoadError?.(message, code, gridApi, field);
            },
            onDataFetch:
                !fieldProps.onDataFetch || (formMode === 'create' && !fieldProps.fetchInCreateMode)
                    ? undefined
                    : (params: IRequestProps, gridApi: IGridApi) => {
                          return fieldProps.onDataFetch!(params, gridApi, field);
                      },
            onDataFetching: !fieldProps.onDataFetching
                ? undefined
                : (url, params: IRequestProps, gridApi: IGridApi) => {
                      return fieldProps.onDataFetching!(url, params, gridApi, field);
                  },
            onDataFetchResponse: !fieldProps.onDataFetchResponse
                ? undefined
                : (dataSet, params, gridApi) => fieldProps?.onDataFetchResponse?.(dataSet, params, gridApi, field) ?? dataSet,
            onMenuVisibilityChanged: !fieldProps.onMenuVisibilityChanged
                ? undefined
                : (isVisible, gridApi) => fieldProps?.onMenuVisibilityChanged?.(isVisible, gridApi, field),
            onDelete: !fieldProps.onDelete ? undefined : (selectedRows, gridApi) => fieldProps?.onDelete?.(selectedRows, gridApi, field),
        } as Required<IGridPropsCallbacks>;
    }, [fieldProps, field]);
};
