import React from 'react';
import { IGridApi } from '../../tabulatorGrid';
export interface IColumnsDialogProps {
    open?: boolean;
    gridApi: IGridApi;
}
export declare const ColumnsDialog: (props: IColumnsDialogProps) => React.JSX.Element;
