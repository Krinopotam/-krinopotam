import React, {useCallback} from 'react';

import {Button} from '@src/button';
import {IModalConfirmConfig, MessageBox, useUpdateMessageBoxTheme} from '@src/messageBox';
import {Space} from 'antd';
import {IColorType} from '@src/button/button';

type IComponent = IModalConfirmConfig;

/** DynamicForm Custom component */
export const ConfirmMessageBoxComponent = (props: IComponent): React.JSX.Element => {
    useUpdateMessageBoxTheme(); //set current theme to messageBox

    const onClick = useCallback(
        (colorType?: IColorType) => {
            MessageBox.confirm({
                ...props,
                colorType: colorType,
                onOk: () => {
                    alert('OK');
                },
                onCancel: () => {
                    alert('Cancel');
                },
            });
        },
        [props]
    );

    return (
        <Space>
            <Button onClick={() => onClick()}>Open alert</Button>
            <Button type={'primary'} colorType="info" onClick={() => onClick('info')}>
                Open alert
            </Button>
            <Button type={'primary'} colorType="warning" onClick={() => onClick('warning')}>
                Open alert
            </Button>
            <Button type={'primary'} colorType="success" onClick={() => onClick('success')}>
                Open alert
            </Button>
            <Button type={'primary'} colorType="danger" onClick={() => onClick('danger')}>
                Open alert
            </Button>
        </Space>
    );
};

export default ConfirmMessageBoxComponent;
