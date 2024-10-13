import {Button, IButtonProps} from '@src/button';
import {IModalAlertConfig, MessageBox, MessageBoxApi, useUpdateMessageBoxTheme} from '@src/messageBox';
import {Space} from 'antd';
import React, {useCallback, useRef} from 'react';

type IComponent = IModalAlertConfig;

/** MessageBox Alert component */
export const AlertMessageBoxComponent = (props: IComponent): React.JSX.Element => {
    useUpdateMessageBoxTheme(); //set current theme to messageBox

    const curMessageBox = useRef<MessageBoxApi | null>(null);
    if (curMessageBox.current) curMessageBox.current?.update(props);

    const onClick = useCallback(
        (colorType?: IButtonProps['color']) => {
            curMessageBox.current = MessageBox.alert({...props, colorType: colorType});
        },
        [props]
    );

    return (
        <Space>
            <Button onClick={() => onClick()}>Open alert</Button>
            <Button color="primary" variant="solid" onClick={() => onClick('info')}>
                Open alert
            </Button>
            <Button color="warning" variant="solid" onClick={() => onClick('warning')}>
                Open alert
            </Button>
            <Button color="success" variant="solid" onClick={() => onClick('success')}>
                Open alert
            </Button>
            <Button color="danger" variant="solid" onClick={() => onClick('danger')}>
                Open alert
            </Button>
        </Space>
    );
};

export default AlertMessageBoxComponent;
