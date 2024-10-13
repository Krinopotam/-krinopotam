// noinspection DuplicatedCode

import React from 'react';
import {IGridProps, TabulatorGrid} from '@src/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../data/tabulatorData';


const props: IGridProps = {
    id: 'TabulatorGridButtons',
    columnDefaults: TabulatorBaseColumnsDef,
    columns: TabulatorBaseColumns,
    dataSet: TabulatorPlainData,
    height: 500,
    buttonsPosition: 'left',
    buttons: {
        button1: {
            title: 'Button 1',
            onClick: () => {
                alert('Button 1 clicked');
            },
        },
        button2: {
            title: 'Row name',
            active: true,
            onClick: (_buttonName, button) => {
                alert(`${button.title} clicked`);
            },
            onActiveRowChanged: (_buttonName, button, row, gridApi) => {
                const buttonsApi = gridApi.getButtonsApi();
                buttonsApi.updateButtons({
                    button2: {
                        title: row.getData().name,
                    },
                })
            }
        }
    }
};
export const Simple = (): React.JSX.Element => {
    return (
        <>
            {/*Description Start*/}
            <h1>Example of a TabulatorGrid with custom buttons</h1>
            {/*Description End*/}
            <TabulatorGrid {...props} />
        </>
    );
};
