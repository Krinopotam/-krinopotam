/**
 * @Button
 * @version 0.0.0.10
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import {Button as AntButton, ButtonProps as AntButtonProps, ConfigProvider, theme} from 'antd';
import React, {Ref} from 'react';

const {useToken} = theme;

export type IColorType = 'neutral' | 'info' | 'success' | 'warning' | 'danger';

export interface IButtonProps extends Omit<AntButtonProps, 'danger'> {
    colorType?: IColorType;
}

export const Button = React.forwardRef(({colorType, ...props}: IButtonProps, ref: Ref<HTMLElement> | undefined) => {
    const {token} = useToken();

    let colorPrimary = token.colorPrimary;
    if (colorType === 'neutral' || colorType === 'info') colorPrimary = token.colorPrimary;
    else if (colorType === 'success') colorPrimary = token.colorSuccess;
    else if (colorType === 'warning') colorPrimary = token.colorWarning;
    else if (colorType === 'danger') colorPrimary = token.colorError;

    return (
        <ConfigProvider theme={{token: {colorPrimary: colorPrimary}}}>
            <AntButton {...props} ref={ref} />
        </ConfigProvider>
    );
});

Button.displayName = 'Button';
