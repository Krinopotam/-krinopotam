
    import React from 'react';
    import {TabulatorGridPaginationRemote} from '../../components/tabulator/tabulatorGridPaginationRemote';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const PageTabulatorGridPaginationRemote = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import React from 'react';
import TabulatorGrid, {ITabulatorProps, IGridRowData} from @krinopotam/ui-kit/tabulatorGrid';
import {dateTimeFormatter} from @krinopotam/ui-kit/tabulatorBase/formatters/dateTime';
import {dateTimeSorter} from @krinopotam/ui-kit/tabulatorBase/sorters/dateTime';
const columnDefaults: ITabulatorProps['columnDefaults'] = {
    resizable: 'header',
    headerFilter: true,
    headerFilterFunc: 'like',
};
const columns: ITabulatorProps['columns'] = [
    {title: 'Name', field: 'name'},
    {title: 'Age', field: 'age', hozAlign: 'left', formatter: 'progress'},
    {title: 'Favourite Color', field: 'col'},
    {
        title: 'Date Of Birth',
        field: 'dob',
        hozAlign: 'center',
        formatter: dateTimeFormatter,
        formatterParams: {inputFormat: 'DD/MM/YYYY', outputFormat: 'DD.MM.YYYY'},
        sorter: dateTimeSorter,
        sorterParams: {format: 'DD/MM/YYYY'},
    },
    {title: 'Rating', field: 'rating', hozAlign: 'center', formatter: 'star', headerFilterFunc: '='},
    {title: 'Passed?', field: 'passed', hozAlign: 'center', formatter: 'tickCross', headerFilterFunc: '='},
];
const dataSet: IGridRowData[] = [
    {id: '1', name: 'Oli Bob1', age: '12', col: 'red', dob: '', rating: 1, passed: false},
    {id: '2', name: 'Mary May1', age: '1', col: 'blue', dob: '14/05/1982', rating: 2, passed: false},
    {id: '3', name: 'Christine Lobowski1', age: '42', col: 'green', dob: '22/05/1982', rating: 5, passed: true},
    {id: '4', name: 'Brendon Philips1', age: '125', col: 'orange', dob: '01/08/1980', rating: 4, passed: true},
    {id: '5', name: 'Margret Marmajuke1', age: '16', col: 'yellow', dob: '31/01/1999', rating: 3, passed: true},
    {id: '6', name: 'Oli Bob2', age: '12', col: 'red', dob: '', rating: 5, passed: true},
    {id: '7', name: 'Mary May2', age: '1', col: 'blue', dob: '14/05/1982', rating: 2, passed: false},
    {id: '8', name: 'Christine Lobowski2', age: '42', col: 'green', dob: '22/05/1982', rating: 3, passed: true},
    {id: '9', name: 'Brendon Philips2', age: '125', col: 'orange', dob: '01/08/1980', rating: 3, passed: true},
    {id: '10', name: 'Margret Marmajuke2', age: '16', col: 'yellow', dob: '31/01/1999', rating: 2, passed: false},
    {id: '11', name: 'Oli Bob3', age: '12', col: 'red', dob: '', rating: 1, passed: false},
    {id: '12', name: 'Mary May3', age: '1', col: 'blue', dob: '14/05/1982', rating: 4, passed: true},
    {id: '13', name: 'Christine Lobowski3', age: '42', col: 'green', dob: '22/05/1982', rating: 1, passed: false},
    {id: '14', name: 'Brendon Philips3', age: '125', col: 'orange', dob: '01/08/1980', rating: 5, passed: true},
    {id: '15', name: 'Margret Marmajuke3', age: '16', col: 'yellow', dob: '31/01/1999', rating: 1, passed: false},
    {id: '16', name: 'Oli Bob4', age: '12', col: 'red', dob: '', rating: 5, passed: true},
    {id: '17', name: 'Mary May4', age: '1', col: 'blue', dob: '14/05/1982', rating: 2, passed: false},
    {id: '18', name: 'Christine Lobowski4', age: '42', col: 'green', dob: '22/05/1982', rating: 3, passed: true},
    {id: '19', name: 'Brendon Philips4', age: '125', col: 'orange', dob: '01/08/1980', rating: 4, passed: true},
    {id: '20', name: 'Margret Marmajuke4', age: '16', col: 'yellow', dob: '31/01/1999', rating: 1, passed: false},
];
export const TabulatorGridPaginationRemote = (): React.JSX.Element => {
    return (
        <>
            <TabulatorGrid
                id={'TabulatorGridPaginationRemote'}
                columnDefaults={columnDefaults}
                columns={columns}
                layout={'fitColumns'}
                height={undefined}
                pagination={true}
                paginationSize={5}
                paginationSizeSelector={[5, 10, 50, 100]}
                paginationCounter={'rows'}
                paginationMode={'remote'}
                filterMode={'remote'}
                sortMode={'remote'}
                onDataFetch={(gridApi, params) => {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            //make any remote fetch
                            const page = params?.page ?? 1;
                            const size = params?.size ?? gridApi.gridProps.paginationSize ?? 5;
                            const lastPage = Math.ceil(dataSet.length/size)
                            const slicedDataSet = dataSet.slice((page - 1) * size, page * size); //remote fetch imitation
                            resolve({data: slicedDataSet, last_page: lastPage });
                            //reject({message:'34242424234234', code:300})
                        }, 1000);
                    });
                }}
                ajaxParams={{key1: 'value1', key2: 'value2'}} //any additional params (you can pass a callback)
            />
        </>
    );
};
`
    return (
        <>
            <div>
                <TabulatorGridPaginationRemote />
            </div>
            <Divider />
            <div>
                <Collapse 
                    items={[{key: 1, label: 'Show source', children: <SyntaxHighlighter language="javascript" style={props.darkMode ? darcula : docco}>{source}</SyntaxHighlighter>}]}>
                </Collapse>
            </div>
        </>
    );
};

export default PageTabulatorGridPaginationRemote;
