// noinspection DuplicatedCode

import React from 'react';
import {ButtonsRow, IFormButtons} from '@src/buttonsRow';

export const Example = (): React.JSX.Element => {
    const buttons = useButtons();
    return (
        <>
            {/*Description Start*/}
            <h1>Example of a simple buttons row</h1>
            {/*Description End*/}
            <div style={{maxWidth: '900px', border: '1px solid grey', padding: '10px'}}>
                <ButtonsRow
                    buttons={buttons}
                    styles={{
                        leftBlockStyle: {border: '1px dashed grey'},
                        centerBlockStyle: {border: '1px dashed grey'},
                        rightBlockStyle: {border: '1px dashed grey'},
                    }}
                />
            </div>
        </>
    );
};

const useButtons = (): IFormButtons => {
    return {
        buttonLeft: {
            type: 'button',
            variant: 'solid',
            title: 'Left',
            position: 'left',
        },
        buttonCenter: {
            type: 'button',
            variant: 'solid',
            title: 'Center',
            position: 'center',
        },

        buttonRight: {
            type: 'button',
            variant: 'solid',
            title: 'Right',
            position: 'right',
        },
    };
};
