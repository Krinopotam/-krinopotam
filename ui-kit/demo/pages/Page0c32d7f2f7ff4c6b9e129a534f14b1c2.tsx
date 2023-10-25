
    import React from 'react';
    import {TabulatorGridColumnsGroups} from '../components/tabulator/tabulatorGridColumnsGroups';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const Page0c32d7f2f7ff4c6b9e129a534f14b1c2 = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import React from 'react';
import {TabulatorGrid, ITabulatorProps} from @krinopotam/ui-kit/tabulatorGrid';
import {DateTimeFormatter} from @krinopotam/ui-kit/tabulatorBase/formatters/dateTime';
import {DateTimeSorter} from @krinopotam/ui-kit/tabulatorBase/sorters/dateTime';
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
export const TabulatorGridColumnsGroups = (): React.JSX.Element => {
    return (
        <>
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
`
    return (
        <>
            <div>
                <TabulatorGridColumnsGroups />
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

export default Page0c32d7f2f7ff4c6b9e129a534f14b1c2;
