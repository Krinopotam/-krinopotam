import React from 'react';
import { ITabulator } from '../reactTabulator/reactTabulator';
import { IGridApi } from '../hooks/api';
import { IGridProps } from '../tabulatorGrid';
export declare const GridRender: React.MemoExoticComponent<({ tableRef, gridApi, gridProps, }: {
    tableRef: React.MutableRefObject<ITabulator | undefined>;
    gridApi: IGridApi;
    gridProps: IGridProps;
}) => React.JSX.Element>;
