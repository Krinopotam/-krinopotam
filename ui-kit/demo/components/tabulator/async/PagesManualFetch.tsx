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

const dataSet = GenerateDataSet(10000, 'async');
export const PagesManualFetch = (): React.JSX.Element => {
    const [gridApi] = useState({} as IGridApi);

    const updateDataViaApiAsync = useCallback(() => {
        gridApi.fetchData(
            params => {
                console.log('params', params);
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        const random = Math.random();
                        if (random < 0.5) reject({message: 'Loading error', code: 400});
                        const page = params?.page ?? 1;
                        const size = params?.size ?? gridApi.gridProps.paginationSize ?? 10;
                        const lastPage = Math.ceil(dataSet.length / size);
                        const slicedDataSet = dataSet.slice((page - 1) * size, page * size); //remote fetch imitation
                        resolve({data: slicedDataSet, last_page: lastPage});
                    }, 1000);
                });
            },
            {manualParam: 'manualValue'}
        );
    }, [gridApi]);

    const props: IGridProps = {
        apiRef: gridApi,
        columnDefaults: columnDefaults,
        columns: columns,
        height: 500,
        pagination: true,
        paginationSize: 10,
        paginationSizeSelector: [5, 10, 50, 100],
        paginationCounter: 'rows',
        paginationMode: 'remote',
        filterMode: 'remote',
        sortMode: 'remote',
        onDataFetch: (params, gridApi) => {
            console.log('params', params);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const random = Math.random();
                    if (random < 0.5) reject({message: 'Loading error', code: 400});
                    const page = params?.page ?? 1;
                    const size = params?.size ?? gridApi.gridProps.paginationSize ?? 10;
                    const lastPage = Math.ceil(dataSet.length / size);
                    const slicedDataSet = dataSet.slice((page - 1) * size, page * size); //remote fetch imitation
                    resolve({data: slicedDataSet, last_page: lastPage});
                }, 1000);
            });
        },
        ajaxParams: {extraKey1: 'extraValue1', extraKey2: 'extraValue2'}, //any additional params (you can pass a callback)
    };
    return (
        <>
            {/*Description Start*/}
            <h1>Force asynchronous update of the TabulatorGrid dataset in the page mode</h1>
            <p style={{color: 'red'}}>To test boot resumption there is a 50/50 chance of error</p>
            {/*Description End*/}
            <Button onClick={updateDataViaApiAsync}>Update dataSet asynchronously via Api.fetchData</Button>
            <TabulatorGrid {...props} />
        </>
    );
};
