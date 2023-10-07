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
                    import {IModalAlertConfig, MessageBox} from @krinopotam/ui-kit/messageBox';
                    type IComponent = IModalAlertConfig;
                    /** DynamicForm Custom component */
                    export const AlertMessageBoxComponent = (props: IComponent): React.JSX.Element => {
                        const onClick = useCallback(() => {
                            MessageBox.alert(props);
                        }, [props]);
                        return <Button onClick={onClick}>Open alert</Button>;
                    };
                    export default AlertMessageBoxComponent;
                `
            }
            /* AUTO-SOURCE-INJECT-END */
        },
    },
} satisfies Meta<typeof ConfirmMessageBoxComponent>;

type Story = StoryObj<typeof ConfirmMessageBoxComponent>;


export const Alert: Story = {
    args: {
        content:'Info'
    },
};
