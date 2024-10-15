// noinspection DuplicatedCode

import React from 'react';
import {ButtonsRow, IFormButtons} from '@src/buttonsRow';
import {IButtonColorType} from "@src/button";

export const Example = (): React.JSX.Element => {
    const buttonsDefault = useButtons1('default');
    const buttonsPrimary = useButtons1('primary');
    const buttonsDanger = useButtons1('danger');
    const buttonsInfo = useButtons1('info');
    const buttonsWarning = useButtons1('warning');
    const buttonsSuccess = useButtons1('success');
    return (
        <>
            {/*Description Start*/}
            <h1>Example of a buttons variants</h1>
            {/*Description End*/}
            <div style={{maxWidth: '900px', border: '1px solid grey', padding: '10px'}}>
                <ButtonsRow buttons={buttonsDefault} style={{margin: '10px'}}/>
                <ButtonsRow buttons={buttonsPrimary} style={{margin: '10px'}} />
                <ButtonsRow buttons={buttonsDanger} style={{margin: '10px'}} />
                <ButtonsRow buttons={buttonsInfo} style={{margin: '10px'}} />
                <ButtonsRow buttons={buttonsWarning} style={{margin: '10px'}} />
                <ButtonsRow buttons={buttonsSuccess} style={{margin: '10px'}} />
            </div>
        </>
    );
};

const useButtons1 = (color:IButtonColorType): IFormButtons => {
    return {
        button1: {
            type: 'button',
            color: color,
            variant: 'solid',
            title: 'solid',
            position: 'left',
        },

        button2: {
            type: 'button',
            color: color,
            variant: 'outlined',
            title: 'outlined',
            position: 'left',
        },

        button3: {
            type: 'button',
            color: color,
            variant: 'dashed',
            title: 'dashed',
            position: 'left',
        },

        button4: {
            type: 'button',
            color: color,
            variant: 'filled',
            title: 'filled',
            position: 'left',
        },

        button5: {
            type: 'button',
            color: color,
            variant: 'link',
            title: 'link',
            position: 'left',
        },
        button6: {
            type: 'button',
            color: color,
            variant: 'text',
            title: 'text',
            position: 'left',
        },
    };
};
