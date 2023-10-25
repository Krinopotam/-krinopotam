// noinspection DuplicatedCode

import React from 'react';
import {TabulatorGrid} from '@src/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from "../../data/tabulatorData";

export const TabulatorGridMultiSelect = (): React.JSX.Element => {
    return (
        <>
            {/*Description Start*/}
            <h1>Пример простого Tabulator с возможностью выбора нескольких строк</h1>
            {/*Description End*/}
            <TabulatorGrid id={'TabulatorGridSimple'} columnDefaults={TabulatorBaseColumnsDef} columns={TabulatorBaseColumns} dataSet={TabulatorPlainData} multiSelect={true} height={500} layout={'fitColumns'}/>
        </>
    );
};
