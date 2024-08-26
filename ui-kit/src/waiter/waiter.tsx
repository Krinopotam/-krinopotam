import React, {PropsWithChildren} from 'react';
import {Spin, theme} from 'antd';

export interface IWaiterProps {
    show: boolean;
    fullScreen?: boolean;
    showChildren?: boolean;
    showSpinner?: boolean;
    style?: React.CSSProperties;
}

export const Waiter = (props: PropsWithChildren<IWaiterProps>) => {
    const {
        token: {colorBgBase},
    } = theme.useToken();

    const isDarkMode = colorBgBase === '#000';

    const style: React.CSSProperties = {
        position: props.fullScreen ? 'fixed' : 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
        transition: 'all 0.2s',
        backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
        ...props.style
    };

    return (
        <>
            {props.show && <div style={style}>{props.showSpinner !== false && <Spin/>}</div>}
            {props.show ? props.showChildren && props.children : props.children}
        </>
    );
};
