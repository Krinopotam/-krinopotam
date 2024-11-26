import ButtonsRow from '@src/buttonsRow/buttonsRow';
import {useGetButtonsProps} from '@src/treeSelect/hooks/useGetButtonsProps';
import React, {useMemo} from 'react';
import {ITreeSelectApi, ITreeSelectProps} from '@src/treeSelect';
import {theme} from 'antd';

export const MenuRow = ({treeApi, treeProps}: {treeApi: ITreeSelectApi; treeProps: ITreeSelectProps}): React.JSX.Element | null => {
    const buttons = useGetButtonsProps(treeApi, treeProps);

    const {
        token: {colorBorderSecondary},
    } = theme.useToken();

    return useMemo(() => {
        if (!buttons) return null;
        return (
            <ButtonsRow
                buttons={buttons}
                apiRef={treeApi.getButtonsApi()}
                style={{
                    padding: '0 4px 6px 4px',
                    borderBottom: `1px solid ${colorBorderSecondary}`,
                    ...treeProps.buttonsRowStyle,
                }}
                styles={treeProps.buttonsRowStyles}
                context={treeApi}
                iconsOnly={treeProps.buttonsIconsOnly !== false}
            />
        );
    }, [buttons, colorBorderSecondary, treeApi, treeProps.buttonsIconsOnly, treeProps.buttonsRowStyle, treeProps.buttonsRowWrapperStyle]);
};
