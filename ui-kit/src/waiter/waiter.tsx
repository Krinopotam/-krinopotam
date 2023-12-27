import React, {PropsWithChildren} from 'react';
import {Spin} from 'antd';

export interface IWaiterProps {
    show: boolean;
    fullScreen?: boolean;
    showChildren?: boolean;
    showSpinner?: boolean;
}

export const Waiter = (props: PropsWithChildren<IWaiterProps>) => {
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
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
    };

    return (
        <>
            {props.show && <div style={style}>{props.showSpinner !== false && <Spin/>}</div>}
            {props.showChildren && props.children}
        </>
    );
};
