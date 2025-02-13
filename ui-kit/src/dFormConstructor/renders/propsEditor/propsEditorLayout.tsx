import {theme, Typography} from 'antd';
import React from 'react';
import {PropsEditor} from '@src/dFormConstructor/renders/propsEditor/propsEditor';

export const PropsEditorLayout = (): React.JSX.Element => {
    const {
        token: {colorBgContainer, colorBorder},
    } = theme.useToken();
    console.log('PropsEditorLayout');
    return (
        <div
            style={{
                minWidth: 300,
                background: colorBgContainer,
                borderLeft: 'solid 1px ' + colorBorder,
                paddingLeft:20,
                display: 'flex',
                flexDirection: 'column',
                minHeight: 0,
            }}
        >
            <Typography.Title level={4} style={{marginBottom: 10, marginTop: 0}}>
                Props editor
            </Typography.Title>
            <PropsEditor />
        </div>
    );
};
