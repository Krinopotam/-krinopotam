import React, { useLayoutEffect, useState } from 'react';
import { ObjectKeysLength } from "@krinopotam/js-helpers";
import { ButtonsRow } from '../../buttonsRow/buttonsRow';
import { useInitButtons } from "../hooks/buttons";
export const MenuRow = ({ gridApi }) => {
    const gridProps = gridApi.gridProps;
    const buttons = useInitButtons(gridApi);
    const [isMenuVisible, setIsMenuVisible] = useState(undefined);
    useLayoutEffect(() => {
        var _a;
        const menuVisible = ObjectKeysLength(buttons) > 0;
        if (typeof isMenuVisible === 'undefined' || isMenuVisible !== menuVisible) {
            setIsMenuVisible(menuVisible);
            (_a = gridProps === null || gridProps === void 0 ? void 0 : gridProps.onMenuVisibilityChanged) === null || _a === void 0 ? void 0 : _a.call(gridProps, menuVisible, gridApi);
        }
    }, [buttons, gridApi, gridProps, gridProps === null || gridProps === void 0 ? void 0 : gridProps.onMenuVisibilityChanged, isMenuVisible]);
    if (!buttons)
        return null;
    return (React.createElement("div", { style: { width: '100%', paddingBottom: 8, paddingTop: 8 } },
        React.createElement(ButtonsRow, { buttons: buttons, apiRef: gridApi.buttonsApi })));
};
//# sourceMappingURL=menuRow.js.map