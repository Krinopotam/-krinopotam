import React, { useLayoutEffect, useState } from 'react';
import { HelpersObjects } from "@krinopotam/js-helpers";
import { ButtonsRow } from '@krinopotam/ui-buttons-row';
import { useInitButtons } from "../hooks/buttons";
export const MenuRow = ({ gridApi }) => {
    var _a;
    const gridProps = gridApi.gridProps;
    const buttons = useInitButtons(gridApi);
    const [isMenuVisible, setIsMenuVisible] = useState(undefined);
    useLayoutEffect(() => {
        var _a, _b;
        const menuVisible = HelpersObjects.objectKeysLength(buttons) > 0;
        if (typeof isMenuVisible === 'undefined' || isMenuVisible !== menuVisible) {
            setIsMenuVisible(menuVisible);
            (_b = (_a = gridProps.callbacks) === null || _a === void 0 ? void 0 : _a.onMenuVisibilityChanged) === null || _b === void 0 ? void 0 : _b.call(_a, menuVisible, gridApi);
        }
    }, [buttons, gridApi, gridProps.callbacks, (_a = gridProps.callbacks) === null || _a === void 0 ? void 0 : _a.onMenuVisibilityChanged, isMenuVisible]);
    if (!buttons)
        return null;
    return (React.createElement("div", { style: { width: '100%', paddingBottom: 8, paddingTop: 8 } },
        React.createElement(ButtonsRow, { formId: gridApi.getGridId(), buttons: buttons, apiRef: gridApi.buttonsApi, arrowsSelection: false })));
};
