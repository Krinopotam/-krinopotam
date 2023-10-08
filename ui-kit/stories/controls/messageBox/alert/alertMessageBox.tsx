import React, {useCallback, useRef} from 'react';

import {Button} from '@src/button';
import {IModalAlertConfig, MessageBox, MessageBoxApi, useUpdateMessageBoxTheme} from '@src/messageBox';
import {Space} from 'antd';
import {IColorType} from '@src/button/button';

type IComponent = IModalAlertConfig;

/** MessageBox Alert component */
export const AlertMessageBoxComponent = (props: IComponent): React.JSX.Element => {
    useUpdateMessageBoxTheme(); //set current theme to messageBox

    const curMessageBox = useRef<MessageBoxApi|null>(null);
    if (curMessageBox.current) curMessageBox.current?.update(props)

    const onClick = useCallback(
        (colorType?: IColorType) => {
            curMessageBox.current = MessageBox.alert({...props, colorType: colorType});
        },
        [props]
    );

    return (
        <Space>
            <Button onClick={() => onClick()}>
                Open alert
            </Button>
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

export default AlertMessageBoxComponent;
