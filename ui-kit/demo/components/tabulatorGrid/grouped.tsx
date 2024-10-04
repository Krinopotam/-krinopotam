// noinspection DuplicatedCode

import React from 'react';
import {IGridProps, TabulatorGrid} from '@src/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../data/tabulatorData';

const props: IGridProps = {
    id: 'TabulatorGridSimple',
    columnDefaults: TabulatorBaseColumnsDef,
    columns: TabulatorBaseColumns,
    groupBy: 'col',
    dataSet: TabulatorPlainData,
    height: 500,
};
export const Simple = (): React.JSX.Element => {
    return (
        <>
            {/*Description Start*/}
            <h1>Example of the TabulatorGrid, grouped by "col" field</h1>
            {/*Description End*/}
            <TabulatorGrid {...props} />
        </>
    );
};
