import React, {useLayoutEffect, useState} from 'react';
import {HelpersObjects} from "@krinopotam/js-helpers";
import {ButtonsRow} from '../../buttons-row/buttonsRow';
import {useInitButtons} from "../hooks/buttons";
import {IGridApi} from "../hooks/api";


interface IGridMenuProps {
    gridApi:IGridApi
}

export const MenuRow = ({gridApi}: IGridMenuProps): React.JSX.Element | null => {
    const gridProps = gridApi.gridProps;
    const buttons =  useInitButtons(gridApi)

    const [isMenuVisible, setIsMenuVisible] = useState<boolean | undefined>(undefined);

    useLayoutEffect(() => {
        const menuVisible = HelpersObjects.objectKeysLength(buttons) > 0;
        if (typeof isMenuVisible === 'undefined' || isMenuVisible !== menuVisible) {
            setIsMenuVisible(menuVisible);
            gridProps.callbacks?.onMenuVisibilityChanged?.(menuVisible, gridApi);
        }
    }, [buttons, gridApi, gridProps.callbacks, gridProps.callbacks?.onMenuVisibilityChanged, isMenuVisible]);

    if (!buttons) return null;

    return (
        <div style={{width: '100%', paddingBottom: 8, paddingTop: 8}}>
            <ButtonsRow formId={gridApi.getGridId()} buttons={buttons} apiRef={gridApi.buttonsApi} arrowsSelection={false} />
        </div>
    );
};
