// noinspection DuplicatedCode

import React, {useCallback} from 'react';
import {Button} from '@src/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from '@src/dFormModal';
import {InputField} from '@src/dForm/fields/input/inputField';
import {DateTimeField} from '@src/dForm/fields/dateTime/dateTimeField';
import {FormLayoutSwitch} from '../../common/buttonsProps';
import {IInlineGroupFieldProps, InlineGroupField} from '@src/dForm/fields/inlineGroup';

const formApi = {} as IDFormModalApi;

const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    fieldsProps: {
        row1: {
            component: InlineGroupField,
            fieldsProps: {
                nameIn: {component: InputField, label: 'Имя входящего'},
                dateIn: {component: DateTimeField, label: 'Дата входа', width: 150},
            },
        } satisfies IInlineGroupFieldProps,
        row2: {
            component: InlineGroupField,
            fieldsProps: {
                nameOut: {component: InputField, label: 'Имя выходящего'},
                dateOut: {component: DateTimeField, label: 'Дата выхода', width: 150},
            },
        } satisfies IInlineGroupFieldProps,
    },
    buttons: FormLayoutSwitch(formApi),
};

export const ModalFormWithGroups = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        formApi.open('create');
    }, []);

    return (
        <div style={{maxWidth: 500}}>
            <Button onClick={onClick}>Open form</Button>
            <DFormModal {...formProps} />
        </div>
    );
};
