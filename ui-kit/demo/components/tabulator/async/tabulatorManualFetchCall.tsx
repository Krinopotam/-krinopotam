// noinspection DuplicatedCode

import React, {useCallback, useState} from 'react';

import {Button} from '@src/button';
import {TabulatorGrid, ITabulatorProps, IGridProps, IGridApi} from '@src/tabulatorGrid';
import {GenerateDataSet} from '../../../data/tabulatorData';

const columnDefaults: ITabulatorProps['columnDefaults'] = {
    resizable: 'header',
    headerFilter: true,
    headerFilterFunc: 'like',
};

const columns: ITabulatorProps['columns'] = [
    {title: 'Column 1', field: 'col1'},
    {title: 'Column 2', field: 'col2'},
    {title: 'Column 3', field: 'col3'},
];

export const TabulatorManualFetchCall = (): React.JSX.Element => {
    const [gridApi] = useState({} as IGridApi);

    const updateDataViaApiAsync = useCallback(() => {
        gridApi.fetchData(params => {
            console.log('params', params);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const random = Math.random();
                    if (random < 0.5) reject({message: 'Loading error', code: 400});
                    else resolve({data: GenerateDataSet(100, 'async')});
                }, 1000);
            });
        }, {extraParam:'extraValue'});
    }, [gridApi]);

    const props: IGridProps = {
        id: 'TabulatorGridSimple',
        apiRef: gridApi,
        columnDefaults: columnDefaults,
        columns: columns,
        height: 500,
    };
    return (
        <>
            {/*Description Start*/}
            <h1>Force asynchronous update of TabulatorGrid dataset</h1>
            <p style={{color: 'red'}}>To test boot resumption there is a 50/50 chance of error</p>
            {/*Description End*/}
            <Button onClick={updateDataViaApiAsync}>Update dataSet asynchronously via Api.fetchData</Button>
            <TabulatorGrid {...props} />
        </>
    );
};
