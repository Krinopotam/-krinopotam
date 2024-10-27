// noinspection DuplicatedCode

import React, {useCallback} from 'react';

import {Button} from '@src/button';
import {DFormModal, IDFormModalApi, IDFormModalProps} from '@src/dFormModal';
import {useFormProps} from '../dForm/complex';
import {FormLayoutSwitch} from "../../common/buttonsProps";

const formApi = {} as IDFormModalApi;

export const Example = (): React.JSX.Element => {
    const formProps:IDFormModalProps = useFormProps(false, true)
    const onClick = useCallback(() => {
        formApi.open('create');
    }, []);

    return (
        <>
            {/*Description Start*/}
            <h1>Example of a complex modal form (vertical layout)</h1>
            <p>By default, a modal form has the ability to drag it by its title and resize it</p>
            {/*Description End*/}
            <div style={{maxWidth: 500}}>
                <Button onClick={onClick}>Open form</Button>
                <DFormModal {...formProps} height={550} width={600} apiRef={formApi} buttons={FormLayoutSwitch(formApi)} />
            </div>
        </>
    );
};
