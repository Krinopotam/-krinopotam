// noinspection DuplicatedCode

import React from 'react';
import {IGridProps, TabulatorGrid} from '@src/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../../data/tabulatorData';

export const AsyncPages = (): React.JSX.Element => {
    const props: IGridProps = {
        columnDefaults: TabulatorBaseColumnsDef,
        columns: TabulatorBaseColumns,
        layout: 'fitColumns',
        height: undefined,
        pagination: true,
        paginationSize: 5,
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
                    const size = params?.size ?? gridApi.gridProps.paginationSize ?? 5;
                    const lastPage = Math.ceil(TabulatorPlainData.length / size);
                    const slicedDataSet = TabulatorPlainData.slice((page - 1) * size, page * size); //remote fetch imitation
                    resolve({data: slicedDataSet, last_page: lastPage});
                }, 1000);
            });
        },
        ajaxParams: {extraKey1: 'extraValue1', extraKey2: 'extraValue2'}, //any additional params (you can pass a callback)
    };

    return (
        <>
            {/*Description Start*/}
            <h1>Asynchronous data loading to the TabulatorGrid in the page mode</h1>
            <p style={{color:'red'}}>To test boot resumption there is a 50/50 chance of error</p>
            {/*Description End*/}

            <TabulatorGrid {...props} />
        </>
    );
};
