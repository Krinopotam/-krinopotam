import React, {useMemo} from 'react';
import {IExtTreeApi, IExtTreeProps} from '@src/tree/types/types';
import {ButtonsRow} from '@src/buttonsRow/buttonsRow';
import {useGetButtonsProps} from '@src/tree/hooks/useGetButtonsProps';

export const MenuRow = ({api, treeProps}: {api: IExtTreeApi; treeProps: IExtTreeProps}): React.JSX.Element | null => {
    const buttons = useGetButtonsProps(api, treeProps);

    return useMemo(() => {
        if (!buttons) return null;

        return (
            <ButtonsRow
                buttons={buttons}
                apiRef={api.getButtonsApi()}
                style={{padding: '8px', ...treeProps.buttonsRowStyle}}
                styles={treeProps.buttonsRowStyles}
                context={api}
                responsiveBreakpoint={treeProps.responsiveBreakpoint}
                iconsOnly={treeProps.buttonsIconsOnly}
            />
        );
    }, [buttons, api, treeProps.buttonsRowStyle, treeProps.buttonsRowStyles, treeProps.responsiveBreakpoint, treeProps.buttonsIconsOnly]);
};
