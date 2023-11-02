// noinspection DuplicatedCode

import React from 'react';
import {IGridProps, TabulatorGrid} from '@src/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorTreeData} from '../../data/tabulatorData';

/*Description Start*/
/*
const data: IGridRowData[] = [
    {
        id: '1',
        name: 'Root',
        age: '12',
        col: 'red',
        dob: '',
        children: [
            {id: '1_1', name: 'Child 1', age: '4', col: 'green', dob: '22/05/20119'},
            {id: '1_2', name: 'Child 2', age: '2', col: 'orange', dob: '01/08/2021'},
        ],
    },
];
*/

/*Description End*/

const props: IGridProps = {
    id: 'TabulatorGridTree',
    columnDefaults: TabulatorBaseColumnsDef,
    columns: TabulatorBaseColumns,
    dataSet: TabulatorTreeData,
    dataTree: true,
    height: 500,
    layout: 'fitColumns',
};
export const Tree = (): React.JSX.Element => {
    return (
        <>
            {/*Description Start*/}
            <h1>Example of a hierarchical grid TabulatorGrid</h1>
            {/*Description End*/}
            <TabulatorGrid {...props} />
        </>
    );
};
