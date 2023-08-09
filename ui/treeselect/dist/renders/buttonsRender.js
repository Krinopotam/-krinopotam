import { ButtonsRow } from '@krinopotam/ui-buttons-row';
import React from 'react';
export const ButtonsRender = ({ containerId, buttons, buttonsApi, context }) => {
    if (!buttons || Object.keys(buttons).length === 0)
        return null;
    return React.createElement(ButtonsRow, { formId: containerId, buttons: buttons, apiRef: buttonsApi, context: context, arrowsSelection: false });
};
