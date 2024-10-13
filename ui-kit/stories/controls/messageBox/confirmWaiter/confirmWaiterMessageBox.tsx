import {Button, IButtonProps} from '@src/button';
import {IModalConfirmConfig, MessageBox, MessageBoxApi, useUpdateMessageBoxTheme} from '@src/messageBox';
import {Space} from 'antd';
import React, {useCallback, useRef} from 'react';

type IComponent = IModalConfirmConfig;

/** MessageBox Confirm Wait component */
export const ConfirmWaiterMessageBoxComponent = (props: IComponent): React.JSX.Element => {
    useUpdateMessageBoxTheme(); //set current theme to messageBox

    const curMessageBox = useRef<MessageBoxApi | null>(null);
    if (curMessageBox.current) curMessageBox.current?.update(props);

    const onClick = useCallback(
        (colorType?: IButtonProps['color']) => {
            curMessageBox.current = MessageBox.confirmWaiter({
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
            <Button color="info" variant="solid" onClick={() => onClick('info')}>
                Open confirm waiter
            </Button>
            <Button color="warning" variant="solid" onClick={() => onClick('warning')}>
                Open confirm waiter
            </Button>
            <Button color="success" variant="solid" onClick={() => onClick('success')}>
                Open confirm waiter
            </Button>
            <Button color="danger" variant="solid" onClick={() => onClick('danger')}>
                Open confirm waiter
            </Button>
        </Space>
    );
};

export default ConfirmWaiterMessageBoxComponent;
