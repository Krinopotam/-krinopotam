import React from 'react';
import { DFormModal } from '@krinopotam/ui-dynamic-form-modal';
import { LoadingContainer } from '@krinopotam/ui-loading-container';
import { usePrepareEditFormProps } from '../hooks/gridEditForm';
import { MenuRow } from './menuRow';
import { GridRender } from "./gridRender";
export const ContainerRender = ({ tableRef, gridApi, gridProps }) => {
    const editFormProps = usePrepareEditFormProps(gridApi);
    return (React.createElement(React.Fragment, null,
        React.createElement(LoadingContainer, { isLoading: gridApi.getIsLoading(), notHideContent: true },
            React.createElement(MenuRow, { gridApi: gridApi }),
            React.createElement(GridRender, { tableRef: tableRef, gridApi: gridApi, gridProps: gridProps })),
        editFormProps ? React.createElement(DFormModal, Object.assign({}, editFormProps, { apiRef: gridApi.editFormApi })) : null));
};
