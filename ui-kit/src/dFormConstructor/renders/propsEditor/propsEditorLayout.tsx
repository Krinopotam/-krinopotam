import {theme} from 'antd';
import React from 'react';

export const PropsEditorLayout = (): React.JSX.Element => {
    const {
        token: {colorBgContainer, colorBorder},
    } = theme.useToken();
    return (
        <div
            style={{
                minWidth: 300,
                background: colorBgContainer,
                borderLeft: 'solid 1px ' + colorBorder,
                display: 'flex',
                flexDirection: 'column',
                minHeight: 0,
            }}
        ></div>
    );
};