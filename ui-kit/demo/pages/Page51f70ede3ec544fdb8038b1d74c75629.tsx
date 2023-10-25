
    import React from 'react';
    import {TabulatorGridChangeDataSet} from '../components/tabulator/tabulatorGridChangeDataSet';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const Page51f70ede3ec544fdb8038b1d74c75629 = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import React, {useCallback, useState} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {TabulatorGrid, ITabulatorProps, IGridProps, IGridApi} from @krinopotam/ui-kit/tabulatorGrid';
import {GenerateDataSet} from "../../data/tabulatorData";
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
export const TabulatorGridChangeDataSet = (): React.JSX.Element => {
    const [dataSet, setDataSet] = useState<IGridProps['dataSet']>(undefined);
    const [gridApi] = useState({} as IGridApi);
    const updateDataViaState = useCallback(() => {
        setDataSet(GenerateDataSet(1000, 'state'));
    }, []);
    const updateDataViaApi = useCallback(() => {
        gridApi.setDataSet(GenerateDataSet(1000, 'api'));
    }, [gridApi]);
    const updateDataViaApiAsync = useCallback(() => {
        gridApi.fetchData(() => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (Math.random() < 0.5) reject({message: 'Ошибка загрузки данных', code: 400});
                        else resolve({data: GenerateDataSet(1000, 'async')});
                    }, 1000);
                })
            }
        );
    }, [gridApi]);
    return (
        <>
            <Button onClick={updateDataViaState}>Обновить DataSet через state</Button> - грид целиком перерендеривается
            <br/>
            <br/>
            <Button onClick={updateDataViaApi}>Обновить dataSet через Api.setDataSet</Button> - dataSet обновляется, но это не вызывает ререндер грида
            <br/>
            <br/>
            <Button onClick={updateDataViaApiAsync}>Обновить dataSet асинхронно через Api.fetchData</Button> - ререндер вызывается, так как закрывается лоадером на время
            загрузки, но используется мемоизированный компонет. Поэтому фактически ререндера нет.
            <TabulatorGrid id={'TabulatorGridSimple'} apiRef={gridApi} columnDefaults={columnDefaults} columns={columns} dataSet={dataSet} height={500} layout={'fitColumns'}/>
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
                    items={[{key: 1, label: 'Show source', children: <SyntaxHighlighter language="javascript" style={props.darkMode ? darcula : docco} showLineNumbers={true}>{source}</SyntaxHighlighter>}]}>
                </Collapse>
            </div>
        </>
    );
};

export default Page51f70ede3ec544fdb8038b1d74c75629;
