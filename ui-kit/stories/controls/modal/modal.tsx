// noinspection DuplicatedCode

import {Button, IButtonProps} from '@src/button';
import {ButtonsRow} from '@src/buttonsRow';
import {IExtendedModalProps} from '@src/modal';
import {Modal} from '@src/modal/modal';
import {Space} from 'antd';
import React, {useCallback, useState} from 'react';

/** Modal component */
export const ModalComponent = (props?: IExtendedModalProps): React.JSX.Element => {
    const [open, setOpen] = useState(false);
    const [colorType, setColorType] = useState<IButtonProps['color'] | undefined>(undefined);

    const defProps: IExtendedModalProps = {
        modalId: 'testForm',
        colorType: colorType,
    };

    const compProps = {...defProps, ...props};

    const onClick = useCallback((colorType?: IButtonProps['color']) => {
        setOpen(true);
        setColorType(colorType);
    }, []);

    return (
        <>
            <Space>
                <Button onClick={() => onClick()}>Open modal</Button>
                <Button color="info" variant="solid"  onClick={() => onClick('info')}>
                    Open modal
                </Button>
                <Button color="success" variant="solid"   onClick={() => onClick('success')}>
                    Open modal
                </Button>
                <Button color="warning" variant="solid"   onClick={() => onClick('warning')}>
                    Open modal
                </Button>
                <Button color="danger" variant="solid"  onClick={() => onClick('danger')}>
                    Open modal
                </Button>
            </Space>

            <Modal
                {...compProps}
                open={open}
                onCancel={() => setOpen(false)}
                footer={<ButtonsRow color={compProps.colorType} buttons={{close: {title: 'Close', active: true, onClick: () => setOpen(false)}}} />}
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
