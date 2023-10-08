// noinspection DuplicatedCode
import type {Meta, StoryObj} from '@storybook/react';
import ConfirmMessageBoxComponent from "./confirmMessageBox";

export default {
    title: 'Controls/MessageBox/Confirm',
    component: ConfirmMessageBoxComponent,
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
                `
            }
            /* AUTO-SOURCE-INJECT-END */
        },
    },
} satisfies Meta<typeof ConfirmMessageBoxComponent>;

type Story = StoryObj<typeof ConfirmMessageBoxComponent>;


export const Confirm: Story = {
    args: {
        content:'Are you sure?'
    },
};
