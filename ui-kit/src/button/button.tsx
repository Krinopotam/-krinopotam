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

    /** button must be just square (length and width are the same) */
    squareSize?: boolean;
}

export const Button = React.forwardRef(({colorType, children, squareSize, ...props}: IButtonProps, ref: Ref<HTMLElement> | undefined) => {
    const {token} = useToken();

    let colorPrimary = token.colorPrimary;
    if (colorType === 'neutral' || colorType === 'info') colorPrimary = token.colorPrimary;
    else if (colorType === 'success') colorPrimary = token.colorSuccess;
    else if (colorType === 'warning') colorPrimary = token.colorWarning;
    else if (colorType === 'danger') colorPrimary = token.colorError;

    let emptyWidth = 32;
    if (props.size === 'small') emptyWidth = 24;
    else if (props.size === 'large') emptyWidth = 40;

    const style = !squareSize
        ? props.style
        : {
              width: emptyWidth,
              padding: 0,
              ...props.style,
          };

    return (
        <ConfigProvider theme={{token: {colorPrimary: colorPrimary}}}>
            <AntButton {...props} style={style} ref={ref}>
                {children}
            </AntButton>
        </ConfigProvider>
    );
});

Button.displayName = 'Button';
