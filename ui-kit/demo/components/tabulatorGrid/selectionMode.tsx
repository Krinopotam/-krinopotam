// noinspection DuplicatedCode

import React from 'react';
import {TabulatorGrid} from '@src/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../data/tabulatorData';
import {ITabulatorColumn} from '@src/tabulatorBase';

const columns: ITabulatorColumn[] = [...TabulatorBaseColumns];

export const SelectionMode = (): React.JSX.Element => {
    return (
        <>
            {/*Description Start*/}
            <h1>Example Tabulator Grid in selectionMode</h1>
            {/*Description End*/}
            <TabulatorGrid
                id={'TabulatorGridSimple'}
                columnDefaults={TabulatorBaseColumnsDef}
                columns={columns}
                dataSet={TabulatorPlainData}
                height={500}
                selectionMode={true}
                layout={'fitColumns'}
            />
        </>
    );
};
