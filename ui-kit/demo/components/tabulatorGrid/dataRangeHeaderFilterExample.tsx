// noinspection DuplicatedCode

import React from 'react';
import {IGridProps, ITabulatorProps, TabulatorGrid} from '@src/tabulatorGrid';
import { TabulatorBaseColumnsDef, TabulatorPlainData} from '../../data/tabulatorData';
import {DateTimeFormatter, DateTimeRangeHeaderFilterFunc, DateTimeSorter} from "@src/tabulatorBase";
import {DateTimeRangeHeaderFilter} from "@src/tabulatorBase/filters/dateTimeRangeHeaderFilter";

const columns :ITabulatorProps['columns'] = [
    {
        title: 'Date Of Birth',
        field: 'dob',
        hozAlign: 'center',
        headerFilter:DateTimeRangeHeaderFilter,
        headerFilterFunc: DateTimeRangeHeaderFilterFunc,
        headerFilterFuncParams: {filterType: 'date', valuesFormat:'DD/MM/YYYY'},
        formatter: DateTimeFormatter,
        formatterParams: {inputFormat: 'DD/MM/YYYY', outputFormat: 'DD.MM.YYYY'},
        sorter: DateTimeSorter,
        sorterParams: {format: 'DD/MM/YYYY'},
    },
];

const props: IGridProps = {
    id: 'TabulatorGridSimple',
    columnDefaults: TabulatorBaseColumnsDef,
    columns: columns,
    dataSet: TabulatorPlainData,
    height: 500,
};

export const DateTimeRangeHeaderFilterExample = (): React.JSX.Element => {
    return (
        <>
            {/*Description Start*/}
            <h1>The Tabulator DataRangeHeaderFilter example</h1>
            {/*Description End*/}
            <TabulatorGrid {...props} />
        </>
    );
};
