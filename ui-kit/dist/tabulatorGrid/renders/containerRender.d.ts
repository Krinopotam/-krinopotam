import React from 'react';
import { IGridApi } from '../hooks/api';
import { IGridProps } from '../tabulatorGrid';
import { ITabulator, ITabulatorProps } from '../../tabulatorBase';
export declare const ContainerRender: ({ tableRef, gridApi, gridProps, tabulatorProps, columnsDialog, }: {
    tableRef: React.MutableRefObject<ITabulator | undefined>;
    gridApi: IGridApi;
    gridProps: IGridProps;
    tabulatorProps: ITabulatorProps;
    columnsDialog: boolean;
}) => React.JSX.Element;
