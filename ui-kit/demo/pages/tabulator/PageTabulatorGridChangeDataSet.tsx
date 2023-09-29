
    import React from 'react';
    import {TabulatorGridChangeDataSet} from '../../components/tabulator/tabulatorGridChangeDataSet';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const PageTabulatorGridChangeDataSet = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import React, {useCallback, useState} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import TabulatorGrid, {ITabulatorProps, IGridProps, IGridApi, IGridRowData} from @krinopotam/ui-kit/tabulatorGrid';
const columnDefaults: ITabulatorProps['columnDefaults'] = {
    resizable: 'header',
    headerFilter: true,
    headerFilterFunc: 'like'
};
const columns: ITabulatorProps['columns'] = [
    {title: 'Column 1', field: 'col1'},
    {title: 'Column 2', field: 'col2'},
    {title: 'Column 3', field: 'col3'},
];
const generateDataSet = (rows: number, prefix: string):IGridRowData[] => {
    if (!rows) rows = 10;
    const result = [];
    const colRow = prefix + 'Col';
    for (let i = 0; i < rows; i++) {
        result.push({id: i, col1: colRow + '1_' + Math.random(), col2: colRow + '2_' + Math.random(), col3: colRow + '3_' + Math.random()});
    }
    return result as IGridRowData[];
};
export const TabulatorGridChangeDataSet = (): React.JSX.Element => {
    const [dataSet, setDataSet] = useState<IGridProps['dataSet']>(undefined);
    const [gridApi] = useState({} as IGridApi);
    const updateDataViaState = useCallback(() => {
        setDataSet(generateDataSet(100, 'state'));
    }, []);
    const updateDataViaApi = useCallback(() => {
        gridApi.setDataSet(generateDataSet(100, 'api'));
    }, [gridApi]);
    const updateDataViaApiAsync = useCallback(() => {
        gridApi.fetchData(
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve({data: generateDataSet(100, 'async')});
                }, 1000);
            })
        );
    }, [gridApi]);
    return (
        <>
            <Button onClick={updateDataViaState}>Обновить DataSet через state</Button> - грид целиком перерендеривается
            <br />
            <br />
            <Button onClick={updateDataViaApi}>Обновить dataSet через Api</Button> - dataSet обновляется, но это не вызывает ререндер грида
            <br />
            <br />
            <Button onClick={updateDataViaApiAsync}>Обновить dataSet асинхронно через Api</Button> - ререндер вызывается, так как закрывается лоадером на время
            загрузки, но используется мемоизированный компонет. Поэтому фактически ререндера нет.
            <TabulatorGrid id={'TabulatorGridSimple'} apiRef={gridApi} columnDefaults={columnDefaults} columns={columns} dataSet={dataSet} height={500} layout={'fitColumns'} />
        </>
    );
};
`
    return (
        <>
            <div>
                <TabulatorGridChangeDataSet />
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

export default PageTabulatorGridChangeDataSet;
