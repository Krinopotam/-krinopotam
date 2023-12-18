import React, {useLayoutEffect, useState} from 'react';
import {ObjectKeysLength} from "@krinopotam/js-helpers";
import {ButtonsRow} from '@src/buttonsRow/buttonsRow';
import {useInitButtons} from "../hooks/buttons";
import {IGridApi} from "@src/tabulatorGrid";

interface IGridMenuProps {
    gridApi:IGridApi
}

export const MenuRow = ({gridApi}: IGridMenuProps): React.JSX.Element | null => {
    const gridProps = gridApi.gridProps;
    const buttons =  useInitButtons(gridApi)

    const [isMenuVisible, setIsMenuVisible] = useState<boolean | undefined>(undefined);

    useLayoutEffect(() => {
        const menuVisible = ObjectKeysLength(buttons) > 0;
        if (typeof isMenuVisible === 'undefined' || isMenuVisible !== menuVisible) {
            setIsMenuVisible(menuVisible);
            gridProps?.onMenuVisibilityChanged?.(menuVisible, gridApi);
        }
    }, [buttons, gridApi, gridProps, gridProps?.onMenuVisibilityChanged, isMenuVisible]);

    if (!buttons) return null;

    return (
        <div style={{width: '100%', paddingBottom: 8, paddingTop: 8}}>
            <ButtonsRow buttons={buttons} apiRef={gridApi.buttonsApi} context={gridApi} />
        </div>
    );
};
