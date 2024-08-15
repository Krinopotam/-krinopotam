// noinspection DuplicatedCode

import React, {useCallback} from 'react';

import {Button} from '@src/button';
import {IModalProps, Modal} from "@src/modal2";

const modalProps: IModalProps = {

}

export const Simple = (): React.JSX.Element => {
    const [open, setOpen] = React.useState(false);

    const onClick = useCallback(() => {
        setOpen(true)
    }, []);

    return (
        <>
            {/*Description Start*/}
            <h1>Example of a simple modal</h1>
            <p>By default, a modal has the ability to drag it by its title and resize it</p>
            {/*Description End*/}
            <div style={{maxWidth: 500}}>
                <Button onClick={onClick}>Open form</Button>
                <Modal {...modalProps} open={open} title={<p>WeryWeryLongLongLongLongTytle</p>}>
                    <p>Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>
                    <p>Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>

                </Modal>
            </div>
        </>
    );
};
