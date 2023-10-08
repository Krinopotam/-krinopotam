// noinspection DuplicatedCode
import type {Meta, StoryObj} from '@storybook/react';
import ConfirmWaiterMessageBoxComponent from "./confirmWaiterMessageBox";

export default {
    title: 'Controls/MessageBox/ConfirmWaiter',
    component: ConfirmWaiterMessageBoxComponent,
    tags: ['autodocs'],
    parameters: {
        docs: {
            /* AUTO-SOURCE-INJECT-START */
            source: {
                language: 'tsx',
                format: true,
                // language=text
                code: `
                    import React, {useCallback} from 'react';
                    import {Button} from @krinopotam/ui-kit/button';
                    import {IModalConfirmConfig, MessageBox, useUpdateMessageBoxTheme} from @krinopotam/ui-kit/messageBox';
                    import {Space} from 'antd';
                    import {IColorType} from @krinopotam/ui-kit/button/button';
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
                `
            }
            /* AUTO-SOURCE-INJECT-END */
        },
    },
} satisfies Meta<typeof ConfirmWaiterMessageBoxComponent>;

type Story = StoryObj<typeof ConfirmWaiterMessageBoxComponent>;


export const ConfirmWaiter: Story = {
    args: {
        content:'Info'
    },
};
