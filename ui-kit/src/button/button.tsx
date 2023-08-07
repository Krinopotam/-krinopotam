/**
 * @CustomButton
 * @version 0.0.0.10
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import {Button as AntButton, ButtonProps as AntButtonProps} from 'antd';

import React from 'react';
import classNames from 'classnames';

export type IButtonProps = AntButtonProps; // & {};

export const Button = ({...props}: IButtonProps): React.JSX.Element => {
    return <AntButton {...props} className={classNames(props.className)} />;
};

