// noinspection DuplicatedCode

import React, {useCallback} from 'react';

import {Button} from '@src/button';
import {Modal} from "@src/modal";
import {MessageBox} from "@src/messageBox";

export const Simple = (): React.JSX.Element => {
    const [open, setOpen] = React.useState(false);

    const onClick = useCallback(() => {
        setOpen(true)
    }, []);

    const onMessageClick = useCallback(() => {
        MessageBox.alert({content: 'My message content example', colorType: 'danger'});
    }, [])

    return (
        <>
            {/*Description Start*/}
            <h1>Example of a simple modal</h1>
            <p>By default, a modal has the ability to drag it by its title and resize it</p>
            {/*Description End*/}
            <div style={{maxWidth: 500}}>
                <Button onClick={onClick}>Open form</Button>
                <Modal open={open} title={'My modal title example'} maskClosable onCancel={() => setOpen(false)} style={{minHeight: 200, minWidth: 300}}>
                    <p>Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>
                    <p>Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>

                </Modal>

                <Button onClick={onMessageClick}>Open Message</Button>
            </div>
        </>
    );
};
