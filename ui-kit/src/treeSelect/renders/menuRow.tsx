import ButtonsRow from '@src/buttonsRow/buttonsRow';
import {useInitButtons} from '@src/treeSelect/hooks/buttons';
import React, {useMemo} from 'react';
import {ITreeSelectApi, ITreeSelectProps} from '@src/treeSelect';
import {theme} from 'antd';

export const MenuRow = ({treeApi, treeProps}: {treeApi: ITreeSelectApi; treeProps: ITreeSelectProps}): React.JSX.Element | null => {
    const buttons = useInitButtons(treeApi, treeProps);

    const {
        token: {colorBorderSecondary},
    } = theme.useToken();

    return useMemo(() => {
        if (!buttons) return null;
        return (
            <div
                style={{
                    padding: '0 4px 6px 4px',
                    borderBottom: `1px solid ${colorBorderSecondary}`,
                    ...treeProps.buttonsRowWrapperStyle,
                }}
            >
                <ButtonsRow
                    buttons={buttons}
                    apiRef={treeApi.getButtonsApi()}
                    style={treeProps.buttonsRowStyle}
                    context={treeApi}
                    iconsOnly={treeProps.buttonsIconsOnly !== false}
                />
            </div>
        );
    }, [buttons, colorBorderSecondary, treeApi, treeProps.buttonsIconsOnly, treeProps.buttonsRowStyle, treeProps.buttonsRowWrapperStyle]);
};
