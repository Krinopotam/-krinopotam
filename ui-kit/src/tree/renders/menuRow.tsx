import React, {useMemo} from 'react';
import {IExtTreeApi, IExtTreeProps} from '@src/tree/types/types';
import {ButtonsRow} from '@src/buttonsRow/buttonsRow';
import {useInitButtons} from '@src/tree/hooks/buttons';

export const MenuRow = ({api, treeProps}: {api: IExtTreeApi; treeProps: IExtTreeProps}): React.JSX.Element | null => {
    const buttons = useInitButtons(api, treeProps);

    return useMemo(() => {
        if (!buttons) return null;

        return (
            <div style={{width: '100%', padding: '8px'}}>
                <ButtonsRow
                    buttons={buttons}
                    apiRef={api.getButtonsApi()}
                    style={treeProps.buttonsRowStyle}
                    context={api}
                    responsiveBreakpoint={treeProps.responsiveBreakpoint}
                    iconsOnly={treeProps.buttonsIconsOnly}
                />
            </div>
        );
    }, [buttons, api, treeProps.buttonsIconsOnly, treeProps.buttonsRowStyle, treeProps.responsiveBreakpoint]);
};
