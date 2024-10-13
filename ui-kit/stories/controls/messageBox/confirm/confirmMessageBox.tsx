import {Button, IButtonProps} from '@src/button';
import {IModalConfirmConfig, MessageBox, MessageBoxApi, useUpdateMessageBoxTheme} from '@src/messageBox';
import {Space} from 'antd';
import React, {useCallback, useRef} from 'react';

type IComponent = IModalConfirmConfig;

/** MessageBox Confirm component */
export const ConfirmMessageBoxComponent = (props: IComponent): React.JSX.Element => {
    useUpdateMessageBoxTheme(); //set current theme to messageBox

    const curMessageBox = useRef<MessageBoxApi | null>(null);
    if (curMessageBox.current) curMessageBox.current?.update(props);

    const onClick = useCallback(
        (colorType?: IButtonProps['color']) => {
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
            <Button color="info" variant="solid" onClick={() => onClick('info')}>
                Open confirm
            </Button>
            <Button color="warning" variant="solid" onClick={() => onClick('warning')}>
                Open confirm
            </Button>
            <Button color="success" variant="solid" onClick={() => onClick('success')}>
                Open confirm
            </Button>
            <Button color="danger" variant="solid" onClick={() => onClick('danger')}>
                Open confirm
            </Button>
        </Space>
    );
};

export default ConfirmMessageBoxComponent;
