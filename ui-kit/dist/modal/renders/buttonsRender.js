import { ButtonsRow } from '../../buttonsRow/buttonsRow';
import React from 'react';
export const ButtonsRender = ({ colorType, buttons, buttonsApi, containerStyle, arrowsSelection, context, }) => {
    if (!buttons || Object.keys(buttons).length === 0)
        return null;
    return (React.createElement("div", { style: containerStyle },
        React.createElement(ButtonsRow, { buttons: buttons, apiRef: buttonsApi, colorType: colorType, arrowsSelection: arrowsSelection, context: context })));
};
