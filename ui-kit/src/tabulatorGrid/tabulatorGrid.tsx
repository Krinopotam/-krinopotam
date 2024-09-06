import React, {useMemo, useRef, useState} from 'react';
import {ITabulatorProps, ITabulator} from '@src/tabulatorBase';
import {IDFormModalApi} from '@src/dFormModal';
import {useInitGridApi} from './hooks/api';
import {ContainerRender} from './renders/containerRender';
import {SplitObject} from '@krinopotam/js-helpers';
import {IGridApi, IGridProps, IGridPropsBase, IGridPropsCallbacks} from "@src/tabulatorGrid/types/tabulatorGridTypes";
import {useGetActualProps} from "@krinopotam/common-hooks";

export const TabulatorGrid = (props: IGridProps): React.JSX.Element => {
    const [allProps, setAllProps] = useGetActualProps(props); //props can be set both by parent component and via api
    const tabulatorProps = useSplitTabulatorProps(allProps);
    const tableRef = useRef<ITabulator>();
    const [editFormApi] = useState<IDFormModalApi>((allProps.editFormProps?.apiRef ?? {}) as IDFormModalApi);
    const [selectionFormApi] = useState<IDFormModalApi>((allProps.selectionFormProps?.apiRef ?? {}) as IDFormModalApi);
    const [gridApi] = useState((allProps.apiRef || {}) as IGridApi);

    const [columnsDialog, setColumnsDialog] = useState(false);
    useInitGridApi({gridApi, props: allProps, setProps: setAllProps, tableRef, editFormApi, selectionFormApi, setColumnsDialog});

    return <ContainerRender tableRef={tableRef} gridApi={gridApi} gridProps={allProps} tabulatorProps={tabulatorProps} columnsDialog={columnsDialog}/>;
};

export default TabulatorGrid;

const useSplitTabulatorProps = (props: IGridProps) => {
    return useMemo((): ITabulatorProps => {
        const result = SplitObject<IGridPropsBase & IGridPropsCallbacks, ITabulatorProps>(props, {
            apiRef: true,
            id: true,
            gridMode: true,
            dataSet: true,
            className: true,
            headerLabel: true,
            buttons: true,
            buttonsSize: true,
            buttonsPosition: true,
            buttonsIconsOnly: true,
            readOnly: true,
            editFormProps: true,
            selectionFormProps: true,
            appendSelection: true,
            noHover: true,
            rowDeleteMessage: true,
            confirmDelete: true,
            placeholder: true,
            onMenuVisibilityChanged: true,
            onDataLoading: true,
            onDataLoadError: true,
            onDataLoaded: true,
            onDataChanged: true,
            onDataProcessed: true,
            onDataFetch: true,
            onDataFetching: true,
            onDataFetchResponse: true,
            onSelectionChange: true,
            onDelete: true,
            resizeHeightWithParent: true,
            responsiveBreakpoint: true,
            translation: true,
            language: true
        });

        return result[1];
    }, [props]);
};
