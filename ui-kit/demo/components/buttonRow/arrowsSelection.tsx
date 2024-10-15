// noinspection DuplicatedCode

import React, {useRef} from 'react';
import {ButtonsRow, ButtonsRowWrapper, IFormButtons} from '@src/buttonsRow';

export const Example = (): React.JSX.Element => {
    const ref = useRef<HTMLDivElement>(null);
    const buttons = useButtons();
    return (
        <>
            {/*Description Start*/}
            <h1>Example of button selection by arrows keys</h1>
            <p>Buttons row must be wrapped by ButtonsRowWrapper</p>
            <p>Disabled buttons, links, dividers are not selectable</p>
            {/*Description End*/}
            <div style={{maxWidth: '900px', border: '1px solid grey', padding: '10px'}}>
                <ButtonsRowWrapper ref={ref}>
                    <ButtonsRow
                        buttons={buttons}
                        arrowsSelection={true}
                        styles={{
                            leftBlockStyle: {border: '1px dashed grey'},
                            centerBlockStyle: {border: '1px dashed grey'},
                            rightBlockStyle: {border: '1px dashed grey'},
                        }}
                    />
                </ButtonsRowWrapper>
            </div>
        </>
    );
};

const useButtons = (): IFormButtons => {
    return {
        buttonLeft1: {
            type: 'button',
            title: 'button',
            active: true,
            position: 'left',
            onClick:()=>alert('Button is clicked'),
        },
        buttonLeft2: {
            type: 'link',
            title: 'link',
            position: 'left',
            onClick:()=>alert('Button is clicked'),
        },
        buttonLeft3: {
            type: 'button',
            title: 'disabled',
            disabled: true,
            position: 'left',
            onClick:()=>alert('Button is clicked'),
        },
        buttonLeft4: {
            type: 'button',
            title: 'button',
            position: 'left',
            onClick:()=>alert('Button is clicked'),
        },
        buttonCenter1: {
            type: 'button',
            title: 'button',
            position: 'center',
            onClick:()=>alert('Button is clicked'),
        },
        buttonCenter2: {
            type: 'button',
            title: 'button',
            position: 'center',
            onClick:()=>alert('Button is clicked'),
        },

        buttonRight: {
            type: 'button',
            title: 'button',
            position: 'right',
            onClick:()=>alert('Button is clicked'),
        },
    };
};
