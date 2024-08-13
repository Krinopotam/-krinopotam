import React, {useMemo, useRef, useState} from 'react';
import {ITabulatorProps, ITabulator} from '@src/tabulatorBase';
import {IButtonsRowApi} from '@src/buttonsRow/buttonsRow';
import {IDFormModalApi} from '@src/dFormModal';
import {useInitGridApi} from './hooks/api';
import {ContainerRender} from './renders/containerRender';
import {SplitObject} from '@krinopotam/js-helpers';
import {IGridApi, IGridProps, IGridPropsBase, IGridPropsCallbacks} from "@src/tabulatorGrid/types/tabulatorGridTypes";

export const TabulatorGrid = (props: IGridProps): React.JSX.Element => {
    const tabulatorProps = useSplitTabulatorProps(props);
    const tableRef = useRef<ITabulator>();
    const [editFormApi] = useState<IDFormModalApi>((props.editFormProps?.apiRef ?? {}) as IDFormModalApi);
    const [selectionFormApi] = useState<IDFormModalApi>((props.selectionFormProps?.apiRef ?? {}) as IDFormModalApi);
    const [buttonsApi] = useState({} as IButtonsRowApi & {refreshButtons: () => void});
    const [gridApi] = useState((props.apiRef || {}) as IGridApi);

    const [columnsDialog, setColumnsDialog] = useState(false);
    useInitGridApi({gridApi, props, tableRef, editFormApi, selectionFormApi, buttonsApi, setColumnsDialog});

    return <ContainerRender tableRef={tableRef} gridApi={gridApi} gridProps={props} tabulatorProps={tabulatorProps} columnsDialog={columnsDialog} />;
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
            headerLabel:true,
            buttons: true,
            buttonsSize: true,
            buttonsPosition: true,
            buttonsIconsOnly: true,
            readOnly: true,
            editFormProps: true,
            selectionFormProps: true,
            appendSelection:true,
            noHover: true,
            rowDeleteMessage: true,
            confirmDelete: true,
            placeholder: true,
            onMenuVisibilityChanged: true,
            onDataLoading: true,
            onDataLoadError: true,
            onDataLoaded: true,
            onDataChanged: true,
            onDataProcessed:true,
            onDataFetch: true,
            onDataFetching:true,
            onDataFetchResponse: true,
            onSelectionChange: true,
            onDelete: true,
            resizeHeightWithParent: true,
            responsiveBreakpoint: true,
        });

        return result[1];
    }, [props]);
};
