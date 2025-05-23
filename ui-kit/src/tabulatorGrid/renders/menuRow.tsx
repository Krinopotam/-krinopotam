import React, {useLayoutEffect, useMemo, useState} from 'react';
import {ObjectKeysLength} from '@krinopotam/js-helpers/helpersObjects/objectKeysLength';
import {ButtonsRow} from '@src/buttonsRow/buttonsRow';
import {useInitButtons} from '../hooks/useGetButtonsProps';
import {IGridApi} from '@src/tabulatorGrid';

interface IGridMenuProps {
    gridApi: IGridApi;
}

export const MenuRow = ({gridApi}: IGridMenuProps): React.JSX.Element | null => {
    const gridProps = gridApi.getProps();
    const buttons = useInitButtons(gridApi);

    const [isMenuVisible, setIsMenuVisible] = useState<boolean | undefined>(undefined);

    useLayoutEffect(() => {
        const menuVisible = ObjectKeysLength(buttons) > 0;
        if (typeof isMenuVisible === 'undefined' || isMenuVisible !== menuVisible) {
            setIsMenuVisible(menuVisible);
            gridProps?.onMenuVisibilityChanged?.(menuVisible, gridApi);
        }
    }, [buttons, gridApi, gridProps, gridProps?.onMenuVisibilityChanged, isMenuVisible]);

    return useMemo(() => {
        if (!buttons) return null;

        return (
            <ButtonsRow
                buttons={buttons}
                apiRef={gridApi.getButtonsApi()}
                context={gridApi}
                responsiveBreakpoint={gridProps.responsiveBreakpoint}
                iconsOnly={gridProps.buttonsIconsOnly}
                style={{paddingBottom: 8, paddingTop: 8, ...gridProps.buttonsRowStyle}}
                styles={gridProps.buttonsRowStyles}
            />
        );
    }, [buttons, gridApi, gridProps.buttonsIconsOnly, gridProps.buttonsRowStyle, gridProps.buttonsRowStyles, gridProps.responsiveBreakpoint]);
};
