import React, {useCallback} from 'react';

import {Button} from '@src/button';
import {IModalConfirmConfig, MessageBox, useUpdateMessageBoxTheme} from '@src/messageBox';
import {Space} from 'antd';
import {IColorType} from '@src/button/button';

type IComponent = IModalConfirmConfig;

/** MessageBox Confirm Wait component */
export const ConfirmWaiterMessageBoxComponent = (props: IComponent): React.JSX.Element => {
    useUpdateMessageBoxTheme(); //set current theme to messageBox

    const onClick = useCallback(
        (colorType?: IColorType) => {
            MessageBox.confirmWaiter({
                ...props,
                title: 'Please confirm',
                content: 'Are you sure?',
                waitContent: 'Please wait',
                waitTitle: 'Processing',
                colorType: colorType,
                onOk: messageBox => {
                    setTimeout(() => {
                        messageBox.destroy();
                    }, 3000);
                },
            });
        },
        [props]
    );

    return (
        <Space>
            <Button onClick={() => onClick()}>Open confirm waiter</Button>
            <Button type={'primary'} colorType="info" onClick={() => onClick('info')}>
                Open confirm waiter
            </Button>
            <Button type={'primary'} colorType="warning" onClick={() => onClick('warning')}>
                Open confirm waiter
            </Button>
            <Button type={'primary'} colorType="success" onClick={() => onClick('success')}>
                Open confirm waiter
            </Button>
            <Button type={'primary'} colorType="danger" onClick={() => onClick('danger')}>
                Open confirm waiter
            </Button>
        </Space>
    );
};

export default ConfirmWaiterMessageBoxComponent;
