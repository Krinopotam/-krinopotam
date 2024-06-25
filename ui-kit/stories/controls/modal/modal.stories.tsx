import type {Meta, StoryObj} from '@storybook/react';
import ModalComponent from './modal';

export default {
    title: 'Controls/Modal',
    component: ModalComponent,
    tags: ['autodocs'],
    parameters: {
        docs: {
            /* AUTO-SOURCE-INJECT-START */
            source: {
                language: 'tsx',
                format: true,
                // language=text
                code: `
                    import React, {useCallback, useState} from 'react';
                    import {Button} from @krinopotam/ui-kit/button';
                    import {Space} from 'antd';
                    import {IColorType} from @krinopotam/ui-kit/button/button';
                    import {IModalProps, Modal} from @krinopotam/ui-kit/modal';
                    import {ButtonsRow} from @krinopotam/ui-kit/buttonsRow';
                    /** Modal component */
                    export const ModalComponent = (props?: IModalProps): React.JSX.Element => {
                        const [open, setOpen] = useState(false);
                        const [colorType, setColorType] = useState<IColorType | undefined>(undefined);
                        const defProps: IModalProps = {
                            modalId: 'testForm',
                            colorType: colorType,
                        };
                        const compProps = {...defProps, ...props};
                        const onClick = useCallback((colorType?: IColorType) => {
                            setOpen(true);
                            setColorType(colorType);
                        }, []);
                        return (
                            <>
                                <Space>
                                    <Button onClick={() => onClick()}>Open modal</Button>
                                    <Button type="primary" onClick={() => onClick('info')} colorType="info">
                                        Open modal
                                    </Button>
                                    <Button type="primary" onClick={() => onClick('success')} colorType="success">
                                        Open modal
                                    </Button>
                                    <Button type="primary" onClick={() => onClick('warning')} colorType="warning">
                                        Open modal
                                    </Button>
                                    <Button type="primary" onClick={() => onClick('danger')} colorType="danger">
                                        Open modal
                                    </Button>
                                </Space>
                                <Modal
                                    {...compProps}
                                    open={open}
                                    onCancel={() => setOpen(false)}
                                    footer={<ButtonsRow colorType={compProps.colorType} buttons={{close: {title: 'Close', active: true, onClick: () => setOpen(false)}}} />}
                                >
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum mattis tempor. Nam a vulputate sem, et hendrerit lectus. Duis nec dictum ipsum, at luctus dui.</p>
                                    <p>
                                        Cras sollicitudin justo magna, eu tincidunt elit aliquet vel. Praesent et dolor et felis auctor rhoncus ut porttitor nisi. Cras ligula nisi, ornare in convallis eu, posuere ut
                                        massa.
                                    </p>
                                    <p>
                                        Vivamus arcu orci, venenatis id semper in, ornare ut metus. Etiam aliquet ligula luctus, dapibus neque vel, consequat lorem. Class aptent taciti sociosqu ad litora torquent per
                                        conubia nostra, per inceptos himenaeos.
                                    </p>
                                </Modal>
                            </>
                        );
                    };
                    export default ModalComponent;
                `,
            },
            /* AUTO-SOURCE-INJECT-END */
        },
    },
} as Meta<typeof ModalComponent>;

type Story = StoryObj<typeof ModalComponent>;

export const Modal: Story = {
    args: {},
};
