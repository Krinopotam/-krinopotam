// noinspection DuplicatedCode

import React from 'react';
import {IGridProps, TabulatorGrid} from '@src/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../../data/tabulatorData';

export const AsyncLoading = (): React.JSX.Element => {
    const props: IGridProps = {
        columns: TabulatorBaseColumns,
        columnDefaults: TabulatorBaseColumnsDef,
        height: 500,
        layout: 'fitColumns',
        onDataFetch: (params) => {
            console.log('params', params);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const random = Math.random();
                    if (random < 0.5) reject({message: 'Loading error', code: 400});
                    else resolve({data: TabulatorPlainData});
                }, 2000);
            });
        },
    };

    return (
        <>
            {/*Description Start*/}
            <h1>Asynchronous loading of data into the TabulatorGrid</h1>
            <p style={{color: 'red'}}>To test boot resumption there is a 50/50 chance of error</p>
            {/*Description End*/}
            <TabulatorGrid {...props} />
        </>
    );
};
