// noinspection DuplicatedCode

import React from 'react';
import {TabulatorGrid} from '@src/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from "../../data/tabulatorData";

export const TabulatorGridSimple = (): React.JSX.Element => {
    return (
        <>
            {/*Description Start*/}
            <h1>Пример простого грида Tabulator</h1>
            {/*Description End*/}
            <TabulatorGrid id={'TabulatorGridSimple'} columnDefaults={TabulatorBaseColumnsDef} columns={TabulatorBaseColumns} dataSet={TabulatorPlainData} height={500} layout={'fitColumns'}/>
        </>
    );
};
