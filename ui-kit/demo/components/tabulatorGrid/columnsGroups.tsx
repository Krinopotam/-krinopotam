// noinspection DuplicatedCode

import React from 'react';
import {TabulatorGrid, ITabulatorProps} from '@src/tabulatorGrid';
import {DateTimeFormatter} from '@src/tabulatorBase/formatters/dateTime';
import {DateTimeSorter} from '@src/tabulatorBase/sorters/dateTime';
import {TabulatorPlainData} from "../../data/tabulatorData";

const columnDefaults: ITabulatorProps['columnDefaults'] = {
    resizable: 'header',
    headerFilter: true,
    headerFilterFunc: 'like',
};

const columns: ITabulatorProps['columns'] = [
    {title: 'Name', field: 'name'},
    {
        title: 'Info',
        headerFilter:undefined,
        columns: [
            {title: 'Age', field: 'age', hozAlign: 'left', formatter: 'progress'},
            {title: 'Favourite Color', field: 'col'},
        ],
    },
    {
        title: 'Date Of Birth',
        field: 'dob',
        hozAlign: 'center',
        formatter: DateTimeFormatter,
        formatterParams: {inputFormat: 'DD/MM/YYYY', outputFormat: 'DD.MM.YYYY'},
        sorter: DateTimeSorter,
        sorterParams: {format: 'DD/MM/YYYY'},
    },
    {
        title: 'Result',
        headerFilter:undefined,
        columns: [
            {title: 'Rating', field: 'rating', hozAlign: 'center', formatter: 'star', headerFilterFunc: '='},
            {title: 'Passed?', field: 'passed', hozAlign: 'center', formatter: 'tickCross', headerFilterFunc: '='},
        ],
    },
];

export const ColumnsGroups = (): React.JSX.Element => {
    return (
        <>
            {/*Description Start*/}
            <h1>Simple example with grouped columns</h1>
            {/*Description End*/}
            <TabulatorGrid
                id={'TabulatorGridColumnsGroups'}
                columnDefaults={columnDefaults}
                columns={columns}
                dataSet={TabulatorPlainData}
                height={500}
                layout={'fitColumns'}
            />
        </>
    );
};
