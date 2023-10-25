
    import React from 'react';
    import {TabulatorGridCellFormat} from '../components/tabulator/tabulatorGridCellFormat';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const Page84aff8ad839944ac86f6f70b89c2d869 = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import React from 'react';
import {ColumnDefinition} from 'tabulator-tables';
import {TabulatorGrid, ITabulatorProps, IGridProps} from @krinopotam/ui-kit/tabulatorGrid";
import {DateTimeSorter} from @krinopotam/ui-kit/tabulatorBase/sorters/dateTime";
import {TabulatorNamesPlainData} from "../../data/tabulatorData";
const fioFormatter: ColumnDefinition['formatter'] = (cell) => {
    //cell - the cell component
    //formatterParams - parameters set for the column
    //onRendered - function to call when the formatter has been rendered
    const row = cell.getRow();
    const rowData = row.getData();
    return \`<span>\${rowData['surname']} \${rowData['name']} \${rowData['patronymic']}</span><br/><small style="color:#808080;">\${rowData['email']}</small>\`; //return the contents of the cell;
};
const fioFilter: ColumnDefinition['headerFilterFunc'] = (headerValue, _rowValue, rowData) => {
    //headerValue - the value of the header filter element
    //rowValue - the value of the column in this row
    //rowData - the data for the row being filtered
    //filterParams - params object passed to the headerFilterFuncParams property
    //must return a boolean, true if it passes the filter.
    const rowString = \`\${rowData['surname']} \${rowData['name']} \${rowData['patronymic']} (\${rowData['email']})\`.toLowerCase();
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
    const valA = \`\${rowDataA['surname']} \${rowDataA['name']} \${rowDataA['patronymic']} (\${rowDataA['email']})\`;
    const valB = \`\${rowDataB['surname']} \${rowDataB['name']} \${rowDataB['patronymic']} (\${rowDataB['email']})\`;
    if (valA === valB) return 0;
    return valA > valB ? 1 : -1; //you must return the difference between the two values
};
const columnDefaults: ITabulatorProps['columnDefaults'] = {
    resizable: 'header',
    headerFilter: true,
    headerFilterFunc: 'like'
};
const columns: ITabulatorProps['columns'] = [
    {
        title: 'ФИО',
        field: 'fio',
        formatter: fioFormatter,
        headerFilterFunc: fioFilter,
        sorter: fioSorter,
        headerFilter: undefined
    },
    {
        title: 'День рождения',
        field: 'birthday',
        sorter: DateTimeSorter,
        //sorterParams:{format:'DD.MM.YYYY'} - you can set custom format. Default DD.MM.YYYY
        headerFilter: undefined
    },
];
export const TabulatorGridCellFormat = (): React.JSX.Element => {
    const props: IGridProps = {
        id: 'TabulatorGridCellFormat',
        columnDefaults: columnDefaults,
        columns: columns,
        dataSet: TabulatorNamesPlainData,
        height: 500,
    }
    return (
        <>
            <TabulatorGrid {...props}/>
        </>
    );
};
`
    return (
        <>
            <div>
                <TabulatorGridCellFormat />
            </div>
            <Divider />
            <div>
                <Collapse 
                    items={[{key: 1, label: 'Show source', children: <SyntaxHighlighter language="javascript" style={props.darkMode ? darcula : docco} showLineNumbers={true}>{source}</SyntaxHighlighter>}]}>
                </Collapse>
            </div>
        </>
    );
};

export default Page84aff8ad839944ac86f6f70b89c2d869;
