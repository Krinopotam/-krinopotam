// noinspection DuplicatedCode

import React from 'react';
import {ColumnDefinition} from 'tabulator-tables';
import {IGridProps, ITabulatorProps, TabulatorGrid} from '@src/tabulatorGrid';
import {DateTimeSorter} from '@src/tabulatorBase/sorters/dateTime';
import {TabulatorBaseColumnsDef, TabulatorNamesTreeData} from '../../data/tabulatorData';

const fioFormatter: ColumnDefinition['formatter'] = cell => {
    //cell - the cell component
    //formatterParams - parameters set for the column
    //onRendered - function to call when the formatter has been rendered
    const row = cell.getRow();
    const rowData = row.getData();
    return `<span>${rowData['surname']} ${rowData['name']} ${rowData['patronymic']}</span><br/><small style="color:#808080;">${rowData['email']}</small>`; //return the contents of the cell;
};

const fioFilter: ColumnDefinition['headerFilterFunc'] = (headerValue, _rowValue, rowData) => {
    //headerValue - the value of the header filter element
    //rowValue - the value of the column in this row
    //rowData - the data for the row being filtered
    //filterParams - params object passed to the headerFilterFuncParams property

    //must return a boolean, true if it passes the filter.
    const rowString = `${rowData['surname']} ${rowData['name']} ${rowData['patronymic']} (${rowData['email']})`.toLowerCase();
    return rowString.indexOf(headerValue.toLowerCase()) >= 0;
};

const fioSorter: ColumnDefinition['sorter'] = (_a, _b, aRow, bRow): number => {
    //a, b - the two values being compared
    //aRow, bRow - the row components for the values being compared (useful if you need to access additional fields in the row data for the sort)
    //column - the column component for the column being sorted
    //dir - the direction of the sort ("asc" or "desc")
    //sorterParams - sorterParams object from column definition array
    const rowDataA = aRow.getData();
    const rowDataB = bRow.getData();
    const valA = `${rowDataA['surname']} ${rowDataA['name']} ${rowDataA['patronymic']} (${rowDataA['email']})`;
    const valB = `${rowDataB['surname']} ${rowDataB['name']} ${rowDataB['patronymic']} (${rowDataB['email']})`;

    if (valA === valB) return 0;
    return valA > valB ? 1 : -1; //you must return the difference between the two values
};

const columns: ITabulatorProps['columns'] = [
    {
        title: 'ФИО',
        field: 'fio',
        formatter: fioFormatter,
        headerFilterFunc: fioFilter,
        sorter: fioSorter,
    },
    {
        title: 'День рождения',
        field: 'birthday',
        sorter: DateTimeSorter,
    },
];

const props: IGridProps = {
    id: 'TabulatorGridTreeCellFormat',
    columnDefaults: TabulatorBaseColumnsDef,
    columns: columns,
    dataSet: TabulatorNamesTreeData,
    dataTree: true,
    height: 500,
    layout: 'fitColumns',
};
export const TreeCellFormat = (): React.JSX.Element => {
    return (
        <>
            {/*Description Start*/}
            <h1>Example of a hierarchical Tabulator grid with customizable cell display</h1>
            <p>In this example, the cell in the full name column displays data from the fields surname, name, patronymic and email</p>
            <p>Filter and sort are calculated for each of these fields</p>
            {/*Description End*/}
            <TabulatorGrid {...props} />
        </>
    );
};
