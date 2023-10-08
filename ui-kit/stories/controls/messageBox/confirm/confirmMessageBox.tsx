import React, {useCallback, useRef} from 'react';

import {Button} from '@src/button';
import {IModalConfirmConfig, MessageBox, MessageBoxApi, useUpdateMessageBoxTheme} from '@src/messageBox';
import {Space} from 'antd';
import {IColorType} from '@src/button/button';

type IComponent = IModalConfirmConfig;

/** MessageBox Confirm component */
export const ConfirmMessageBoxComponent = (props: IComponent): React.JSX.Element => {
    useUpdateMessageBoxTheme(); //set current theme to messageBox

    const curMessageBox = useRef<MessageBoxApi | null>(null);
    if (curMessageBox.current) curMessageBox.current?.update(props);

    const onClick = useCallback(
        (colorType?: IColorType) => {
            curMessageBox.current = MessageBox.confirm({
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
