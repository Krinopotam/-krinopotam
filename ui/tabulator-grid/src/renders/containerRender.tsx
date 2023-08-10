import React from 'react';
import {DFormModal} from '@krinopotam/ui-dynamic-form-modal';
import {LoadingContainer} from '@krinopotam/ui-loading-container';
import {IGridApi} from '../hooks/api';
import {usePrepareEditFormProps} from '../hooks/gridEditForm';
import {MenuRow} from './menuRow';
import {GridRender} from "./gridRender";
import {IGridProps} from "../tabulatorGrid";
import {ITabulator} from "@krinopotam/ui-tabulator-react";

export const ContainerRender = ({tableRef, gridApi, gridProps}: {tableRef: React.MutableRefObject<ITabulator | undefined>; gridApi: IGridApi; gridProps:IGridProps}): React.JSX.Element => {
    const editFormProps = usePrepareEditFormProps(gridApi);

    // Even though gridProps can be obtained from gridApi, we still separately pass gridProps to GridRender
    // Since GridRender is memoized, this is done so that the GridRender component is updated when gridProps changes
    return (
        <>
            <LoadingContainer isLoading={gridApi.getIsLoading()} notHideContent={true}>
                <MenuRow gridApi={gridApi} />
                <GridRender tableRef={tableRef} gridApi={gridApi} gridProps={gridProps} />
            </LoadingContainer>
            {editFormProps ? <DFormModal {...editFormProps} apiRef={gridApi.editFormApi} /> : null}
        </>
    );
};
