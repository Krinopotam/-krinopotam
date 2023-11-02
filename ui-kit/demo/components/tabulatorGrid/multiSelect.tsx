// noinspection DuplicatedCode

import React from 'react';
import {TabulatorGrid} from '@src/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from "../../data/tabulatorData";

export const MultiSelect = (): React.JSX.Element => {
    return (
        <>
            {/*Description Start*/}
            <h1>Example of a simple TabulatorGrid with multi-line selection</h1>
            <p>To select multiple rows, hold down ctrl key</p>
            {/*Description End*/}
            <TabulatorGrid id={'TabulatorGridSimple'} columnDefaults={TabulatorBaseColumnsDef} columns={TabulatorBaseColumns} dataSet={TabulatorPlainData} multiSelect={true} height={500} layout={'fitColumns'}/>
        </>
    );
};
