import React, {useMemo} from 'react';
import {IExtTreeApi, IExtTreeProps} from '@src/tree/types/types';
import {ButtonsRow} from '@src/buttonsRow/buttonsRow';
import {useInitButtons} from '@src/tree/hooks/buttons';

export const MenuRow = ({treeApi, treeProps}: {treeApi: IExtTreeApi; treeProps: IExtTreeProps}): React.JSX.Element | null => {
    const buttons = useInitButtons(treeApi, treeProps);

    return useMemo(() => {
        if (!buttons) return null;

        return (
            <div style={{width: '100%', padding: '8px'}}>
                <ButtonsRow
                    buttons={buttons}
                    apiRef={treeApi.buttonsApi}
                    style={treeProps.buttonsRowStyle}
                    context={treeApi}
                    responsiveBreakpoint={treeProps.responsiveBreakpoint}
                    iconsOnly={treeProps.buttonsIconsOnly}
                />
            </div>
        );
    }, [buttons, treeApi, treeProps.buttonsIconsOnly, treeProps.buttonsRowStyle, treeProps.responsiveBreakpoint]);
};
