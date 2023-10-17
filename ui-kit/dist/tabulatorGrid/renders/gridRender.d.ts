import React from 'react';
import { ITabulator, ITabulatorProps } from '../../tabulatorBase';
import { IGridApi } from '../hooks/api';
import { IGridProps } from '../tabulatorGrid';
export declare const GridRender: React.MemoExoticComponent<({ tableRef, gridApi, gridProps, tabulatorProps, }: {
    tableRef: React.MutableRefObject<ITabulator | undefined>;
    gridApi: IGridApi;
    gridProps: IGridProps;
    tabulatorProps: ITabulatorProps;
}) => React.JSX.Element>;
