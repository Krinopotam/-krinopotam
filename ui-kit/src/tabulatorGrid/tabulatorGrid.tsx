import React, {useMemo, useRef, useState} from 'react';
import {ITabulator, ITabulatorProps} from '@src/tabulatorBase';
import {useInitGridApi} from './hooks/api';
import {ContainerRender} from './renders/containerRender';
import {SplitObject} from '@krinopotam/js-helpers/helpersObjects/splitObject';
import {IGridProps, IGridPropsBase, IGridPropsCallbacks} from '@src/tabulatorGrid/types/tabulatorGridTypes';
import {useGetActualProps} from '@krinopotam/common-hooks';

export const TabulatorGrid = (props: IGridProps): React.JSX.Element => {
    const [allProps, setAllProps] = useGetActualProps(props); //props can be set both by parent component and via api
    const tabulatorProps = useSplitTabulatorProps(allProps);
    const tableRef = useRef<ITabulator>();
    const [columnsDialog, setColumnsDialog] = useState(false);
    const api = useInitGridApi({props: allProps, setProps: setAllProps, tableRef, setColumnsDialog});

    return <ContainerRender tableRef={tableRef} gridApi={api} gridProps={allProps} tabulatorProps={tabulatorProps} columnsDialog={columnsDialog}/>;
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
