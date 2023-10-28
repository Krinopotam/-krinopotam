// noinspection DuplicatedCode

import React, {useCallback} from 'react';
import {Button} from '@src/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from '@src/dFormModal';
import {TabsField} from '@src/dForm/fields/tabs/tabsField';
import {InputField} from '@src/dForm/fields/input/inputField';
import {DateTimeField} from '@src/dForm/fields/dateTime/dateTimeField';
import {FormLayoutSwitch} from "../../common/buttonsProps";

const formApi = {} as IDFormModalApi;

const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    fieldsProps: {
        tabs: {
            component: TabsField,
            tabs: {
                ' Посетитель ': {
                    object: {component: InputField, label: 'Объект'},
                    nameIn: {component: InputField, label: 'Имя входящего', inlineGroup: 'row1'},
                    dateIn: {component: DateTimeField, label: 'Дата входа', inlineGroup: 'row1', width: 150},
                    nameOut: {component: InputField, label: 'Имя выходящего', inlineGroup: 'row2'},
                    dateOut: {component: DateTimeField, label: 'Дата выхода', inlineGroup: 'row2', width: 150},
                },
                ' Транспорт ': {
                    vehicle: {component: InputField, label: 'number'},
                    number: {component: InputField, label: 'Номер'},
                },
            },
        },
    },
    bodyHeight: 330,
    buttons: FormLayoutSwitch(formApi),
};

export const ModalFormWithTabsGroups = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        formApi.open('create');
    }, []);

    return (
        <div style={{maxWidth: 500}}>
            <Button onClick={onClick}>Открыть форму</Button>
            <DFormModal {...formProps} />
        </div>
    );
};
