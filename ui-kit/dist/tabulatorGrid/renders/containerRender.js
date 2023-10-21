import React from 'react';
import { DFormModal } from '../../dFormModal';
import { LoadingContainer } from '../../loadingContainer';
import { usePrepareEditFormProps } from '../hooks/gridEditForm';
import { MenuRow } from './menuRow';
import { GridRender } from './gridRender';
import { ButtonsRowWrapper } from '../../buttonsRow';
export const ContainerRender = ({ tableRef, gridApi, gridProps, tabulatorProps, }) => {
    const editFormProps = usePrepareEditFormProps(gridApi);
    return (React.createElement("div", { className: 'tabulator-grid-container', style: { height: gridProps.height || undefined, minHeight: gridProps.minHeight, maxHeight: gridProps.maxHeight } },
        React.createElement(LoadingContainer, { isLoading: gridApi.getIsLoading(), notHideContent: true, spinStyle: { height: '100%' } },
            React.createElement(ButtonsRowWrapper, { style: { display: 'flex', flexDirection: 'column' } },
                React.createElement(MenuRow, { gridApi: gridApi }),
                React.createElement(GridRender, { tableRef: tableRef, gridApi: gridApi, gridProps: gridProps, tabulatorProps: tabulatorProps }))),
        editFormProps ? React.createElement(DFormModal, Object.assign({}, editFormProps, { apiRef: gridApi.editFormApi })) : null));
};
