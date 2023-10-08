import React, {useCallback} from 'react';

import {Button} from '@src/button';
import {IModalConfirmConfig, MessageBox, useUpdateMessageBoxTheme} from '@src/messageBox';
import {Space} from 'antd';
import {IColorType} from '@src/button/button';

type IComponent = IModalConfirmConfig;

/** MessageBox Confirm component */
export const ConfirmMessageBoxComponent = (props: IComponent): React.JSX.Element => {
    useUpdateMessageBoxTheme(); //set current theme to messageBox

    const onClick = useCallback(
        (colorType?: IColorType) => {
            MessageBox.confirm({
                ...props,
                title: 'Please confirm',
                content: 'Are you sure?',
                colorType: colorType,
            });
        },
        [props]
    );

    return (
        <Space>
            <Button onClick={() => onClick()}>Open confirm</Button>
            <Button type={'primary'} colorType="info" onClick={() => onClick('info')}>
                Open confirm
            </Button>
            <Button type={'primary'} colorType="warning" onClick={() => onClick('warning')}>
                Open confirm
            </Button>
            <Button type={'primary'} colorType="success" onClick={() => onClick('success')}>
                Open confirm
            </Button>
            <Button type={'primary'} colorType="danger" onClick={() => onClick('danger')}>
                Open confirm
            </Button>
        </Space>
    );
};

export default ConfirmMessageBoxComponent;
