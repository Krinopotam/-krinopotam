import React from 'react';
import { IGridApi } from '../hooks/api';
import { IGridProps } from "../tabulatorGrid";
import { ITabulator } from "@krinopotam/ui-tabulator-react";
export declare const ContainerRender: ({ tableRef, gridApi, gridProps }: {
    tableRef: React.MutableRefObject<ITabulator | undefined>;
    gridApi: IGridApi;
    gridProps: IGridProps;
}) => React.JSX.Element;
