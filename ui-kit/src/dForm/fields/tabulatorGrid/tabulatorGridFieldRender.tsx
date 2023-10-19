import React, {useCallback, useMemo, useRef, useState, useSyncExternalStore} from 'react';
import {ITabulatorGridFieldOnlyProps, ITabulatorGridFieldProps, TabulatorGridField} from '@src/dForm/fields/tabulatorGrid/tabulatorGridField';
import TabulatorGrid, {IGridApi, IGridRowData, ITabulatorProps} from '@src/tabulatorGrid';
import {HelpersObjects} from '@krinopotam/js-helpers';

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
    // So the grid's memorized dataSet stays the same until it's set outside onDataSetChange.
    if (prevValueRef.current !== value) {
        prevDataSetRef.current = value;
        prevValueRef.current = value;
    }
    const curDataSet = prevDataSetRef.current;

    const onDataSetChange = useCallback(
        (dataSet: IGridRowData[] | undefined, gridApi: IGridApi, field: TabulatorGridField) => {
            if (field.isReady()) {
                prevValueRef.current = dataSet;
                field.setValue(dataSet ?? undefined);
                field.setDirty(true);
                field.setTouched(true); //TODO: rework field touched
            }
            return fieldProps?.onDataSetChange?.(dataSet, gridApi, field);
        },
        [fieldProps]
    );

    const onDataFetch = useCallback(
        (gridApi: IGridApi, field: TabulatorGridField) => {
            field.setReady(false);
            return fieldProps?.onDataFetch?.(gridApi, field);
        },
        [fieldProps]
    );

    const onDataFetchSuccess = useCallback(
        (dataSet: IGridRowData[] | undefined, gridApi: IGridApi, field: TabulatorGridField) => {
            field.setReady(true);
            return fieldProps?.onDataFetchSuccess?.(dataSet, gridApi, field);
        },
        [fieldProps]
    );

    return useMemo(() => {
        return (
            <TabulatorGrid
                {...tabulatorProps}
                apiRef={gridApi}
                dataSet={curDataSet}
                readOnly={fieldProps.readOnly}
                placeholder={fieldProps.placeholder}
                width={fieldProps.width}
                resizeHeightWithParent={fieldProps.resizeHeightWithForm ? '#' + field.getModel().getFormId() : fieldProps.resizeHeightWithParent}
                /** Callbacks*/
                onMenuVisibilityChanged={(isVisible: boolean, gridApi: IGridApi) => fieldProps?.onMenuVisibilityChanged?.(isVisible, gridApi, field)}
                onDataSetChange={(dataSet: IGridRowData[] | undefined, gridApi: IGridApi) => onDataSetChange?.(dataSet, gridApi, field)}
                onDataFetch={(gridApi: IGridApi) => onDataFetch?.(gridApi, field)}
                onDataFetchSuccess={(dataSet: IGridRowData[] | undefined, gridApi: IGridApi) => onDataFetchSuccess?.(dataSet, gridApi, field)}
                onDataFetchError={(message: string, code: number, gridApi: IGridApi) => fieldProps?.onDataFetchError?.(message, code, gridApi, field)}
                onDataFetchCompleted={(gridApi: IGridApi) => fieldProps?.onDataFetchCompleted?.(gridApi, field)}
                onSelectionChange={(keys: string[], selectedRows: IGridRowData[], gridApi: IGridApi) =>
                    fieldProps?.onSelectionChange?.(keys, selectedRows, gridApi, field)
                }
                onDelete={(selectedRows: IGridRowData[], gridApi: IGridApi) => fieldProps?.onDelete?.(selectedRows, gridApi, field)}
            />
        );
    }, [tabulatorProps, gridApi, curDataSet, fieldProps, field, onDataSetChange, onDataFetch, onDataFetchSuccess]);
};

const useSplitTabulatorProps = (props: ITabulatorGridFieldProps) => {
    return useMemo((): ITabulatorProps => {
        const result = HelpersObjects.splitObject<ITabulatorGridFieldOnlyProps, ITabulatorProps>(props, {
            value: true,
            onMenuVisibilityChanged: true,
            onDataSetChange: true,
            onDataFetch: true,
            onDataFetchSuccess: true,
            onDataFetchError: true,
            onDataFetchCompleted: true,
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