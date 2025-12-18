import {FieldsTree} from '@src/dFormConstructor/renders/fieldsTree/fieldsTree';
import {theme} from 'antd';
import React from 'react';

export const FieldsTreeLayout = (): React.JSX.Element => {
    const {
        token: {colorBgContainer, colorBorder},
    } = theme.useToken();

    return (
        <div
            style={{
                minWidth: 300,
                background: colorBgContainer,
                borderRight: 'solid 1px ' + colorBorder,
                display: 'flex',
                flexDirection: 'column',
                minHeight: 0,
            }}
        >
            <FieldsTree/>
        </div>
    );
};