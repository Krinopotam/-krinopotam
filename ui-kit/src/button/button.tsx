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

export interface IButtonProps extends Omit<AntButtonProps, 'danger' | 'color'> {
    /** button must be just square (length and width are the same) */
    squareSize?: boolean;

    /** Button color */
    color?: AntButtonProps['color'] | 'info' | 'success' | 'warning';
}

export const Button = React.forwardRef(({color, variant, children, squareSize, ...props}: IButtonProps, ref: Ref<HTMLButtonElement> | undefined) => {
    const {token} = useToken();

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

    if (!variant) {
        if (props.type === 'dashed') variant = 'dashed';
        else if (props.type === 'link') variant = 'link';
        else if (props.type === 'text') variant = 'text';
        else variant = 'outlined';
    }

    if (!color || color === 'default' || color === 'primary' || color === 'danger') {
        return (
            <AntButton {...props} color={color} variant={variant} style={style} ref={ref}>
                {children}
            </AntButton>
        );
    }

    let colorPrimary = token.colorPrimary;
    if (color === 'success') colorPrimary = token.colorSuccess;
    else if (color === 'warning') colorPrimary = token.colorWarning;
    else if (color === 'info') colorPrimary = token.colorInfoHover;

    return (
        <ConfigProvider theme={{token: {colorPrimary: colorPrimary}}}>
            <AntButton {...props} color={'primary'} variant={variant} style={style} ref={ref}>
                {children}
            </AntButton>
        </ConfigProvider>
    );
});

Button.displayName = 'Button';
