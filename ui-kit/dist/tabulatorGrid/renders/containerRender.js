import React from 'react';
import { DFormModal } from '../../dFormModal';
import { LoadingContainer } from '../../loadingContainer';
import { usePrepareEditFormProps } from '../hooks/gridEditForm';
import { MenuRow } from './menuRow';
import { GridRender } from './gridRender';
import { ButtonsRowWrapper } from '../../buttonsRow';
import { ColumnsDialog } from '../../tabulatorGrid/renders/columnsDialog';
import { usePrepareSelectionFormProps } from "../../tabulatorGrid/hooks/gridSelectionForm";
export const ContainerRender = ({ tableRef, gridApi, gridProps, tabulatorProps, columnsDialog, }) => {
    const editFormProps = usePrepareEditFormProps(gridApi);
    const selectionFormProps = usePrepareSelectionFormProps(gridApi);
    return (React.createElement("div", { className: "tabulator-grid-container", style: { height: gridProps.height || undefined, minHeight: gridProps.minHeight, maxHeight: gridProps.maxHeight } },
        React.createElement(LoadingContainer, { isLoading: gridApi.getIsLoading(), notHideContent: true, spinStyle: { height: '100%' } },
            React.createElement(ButtonsRowWrapper, { style: { display: 'flex', flexDirection: 'column' } },
                React.createElement(MenuRow, { gridApi: gridApi }),
                React.createElement(GridRender, { tableRef: tableRef, gridApi: gridApi, gridProps: gridProps, tabulatorProps: tabulatorProps }))),
        React.createElement(ColumnsDialog, { open: columnsDialog, gridApi: gridApi }),
        editFormProps ? React.createElement(DFormModal, Object.assign({}, editFormProps, { apiRef: gridApi.editFormApi })) : null,
        selectionFormProps ? React.createElement(DFormModal, Object.assign({}, selectionFormProps, { apiRef: gridApi.selectionFormApi })) : null));
};
//# sourceMappingURL=containerRender.js.map