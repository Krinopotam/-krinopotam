import { ButtonsRow } from '@krinopotam/ui-buttons-row';
import React from 'react';
export const ButtonsRender = ({ formId, formType, buttons, buttonsApi, containerStyle, arrowsSelection, context, }) => {
    if (!buttons || Object.keys(buttons).length === 0)
        return null;
    return (React.createElement("div", { style: containerStyle },
        React.createElement(ButtonsRow, { formId: formId, buttons: buttons, apiRef: buttonsApi, formType: formType, arrowsSelection: arrowsSelection, context: context })));
};
