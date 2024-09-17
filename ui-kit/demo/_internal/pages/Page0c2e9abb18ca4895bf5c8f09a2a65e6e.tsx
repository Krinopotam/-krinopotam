
    import React from 'react';
    import {PageLayout} from '../layouts/pageLayout';
    import {ChangeDataSet} from '../../components/tabulatorGrid/changeDataSet';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const Page0c2e9abb18ca4895bf5c8f09a2a65e6e = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import React, {useCallback, useState} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {IGridApi, IGridProps, ITabulatorProps, TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {GenerateDataSet, TabulatorBaseColumnsDef} from '../../data/tabulatorData';
const columns: ITabulatorProps['columns'] = [
    {title: 'Column 1', field: 'col1'},
    {title: 'Column 2', field: 'col2'},
    {title: 'Column 3', field: 'col3'},
];
export const ChangeDataSet = (): React.JSX.Element => {
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
                    if (Math.random() < 0.1) reject({message: 'Ошибка загрузки данных', code: 400});
                    else resolve({data: GenerateDataSet(1000, 'async')});
                }, 1000);
            });
        });
    }, [gridApi]);
    return (
        <>
            <Button onClick={updateDataViaState}>Update DataSet via setState</Button> - the entire grid is re-rendered
            <br />
            <br />
            <Button onClick={updateDataViaApi}>Update dataSet via Api.setDataSet</Button> - dataSet is updated, but this does not cause the grid to rerender
            <br />
            <br />
            <Button onClick={updateDataViaApiAsync}>Update dataSet asynchronously via Api.fetchData</Button> - the rerender is called because it is closed by the loader
            during loading, but a memoized component is used. Therefore, there is actually no rerender.
            <TabulatorGrid
                id={'TabulatorGridSimple'}
                apiRef={gridApi}
                columnDefaults={TabulatorBaseColumnsDef}
                columns={columns}
                dataSet={dataSet}
                height={500}
                layout={'fitColumns'}
            />
        </>
    );
};
`
    return (
        <PageLayout>
            <div>
                <ChangeDataSet />
            </div>
            <Divider />
            <div>
                <Collapse 
                    items={[{key: 1, label: 'Show source', children: <SyntaxHighlighter language="javascript" style={props.darkMode ? darcula : docco} showLineNumbers={true}>{source}</SyntaxHighlighter>}]}>
                </Collapse>
            </div>
        </PageLayout>
    );
};

export default Page0c2e9abb18ca4895bf5c8f09a2a65e6e;
