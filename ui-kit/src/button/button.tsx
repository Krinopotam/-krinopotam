/**
 * @CustomButton
 * @version 0.0.0.10
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import {Button as AntButton, ButtonProps as AntButtonProps} from 'antd';

import React, {Ref} from 'react';
import classNames from 'classnames';

export type IButtonProps = AntButtonProps; // & {};

export const Button = React.forwardRef(({...props}:IButtonProps, ref:Ref<HTMLElement> | undefined)=>
    <AntButton {...props} ref={ref} className={classNames(props.className)} />
);
Button.displayName='Button'