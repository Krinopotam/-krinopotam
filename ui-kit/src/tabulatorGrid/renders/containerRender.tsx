import React from 'react';
import {DFormModal} from '@src/dFormModal';
import {LoadingContainer} from '@src/loadingContainer';
import {IGridApi} from '../hooks/api';
import {usePrepareEditFormProps} from '../hooks/gridEditForm';
import {MenuRow} from './menuRow';
import {GridRender} from './gridRender';
import {IGridProps} from '../tabulatorGrid';
import {ITabulator, ITabulatorProps} from '@src/tabulatorBase';
import {ButtonsRowWrapper} from '@src/buttonsRow';
import {ColumnsDialog} from '@src/tabulatorGrid/renders/columnsDialog';
import {usePrepareSelectionFormProps} from "@src/tabulatorGrid/hooks/gridSelectionForm";

export const ContainerRender = ({
    tableRef,
    gridApi,
    gridProps,
    tabulatorProps,
    columnsDialog,
}: {
    tableRef: React.MutableRefObject<ITabulator | undefined>;
    gridApi: IGridApi;
    gridProps: IGridProps;
    tabulatorProps: ITabulatorProps;
    columnsDialog: boolean;
}): React.JSX.Element => {
    const editFormProps = usePrepareEditFormProps(gridApi);
    const selectionFormProps = usePrepareSelectionFormProps(gridApi);

    // Even though gridProps can be obtained from gridApi, we still separately pass gridProps to GridRender
    // Since GridRender is memoized, this is done so that the GridRender component is updated when gridProps changes
    return (
        <div
            className="tabulator-grid-container"
            style={{height: gridProps.height || undefined, minHeight: gridProps.minHeight, maxHeight: gridProps.maxHeight}}
        >
            <LoadingContainer isLoading={gridApi.getIsLoading()} notHideContent={true} spinStyle={{height: '100%'}}>
                <ButtonsRowWrapper style={{display: 'flex', flexDirection: 'column'}}>
                    <MenuRow gridApi={gridApi} />
                    <GridRender tableRef={tableRef} gridApi={gridApi} gridProps={gridProps} tabulatorProps={tabulatorProps} />
                </ButtonsRowWrapper>
            </LoadingContainer>
            <ColumnsDialog open={columnsDialog} gridApi={gridApi} />
            {editFormProps ? <DFormModal {...editFormProps} apiRef={gridApi.editFormApi} /> : null}
            {selectionFormProps ? <DFormModal {...selectionFormProps} apiRef={gridApi.selectionFormApi} /> : null}
        </div>
    );
};
