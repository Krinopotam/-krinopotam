// noinspection DuplicatedCode

import React, {useCallback} from 'react';
import {Button} from '@src/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from '@src/dFormModal';
import {InputField} from '@src/dForm/fields/input/inputField';
import {DateTimeField} from '@src/dForm/fields/dateTime/dateTimeField';
import {TabsField} from '@src/dForm/fields/tabs/tabsField';
import {FormLayoutSwitch} from '../../common/buttonsProps';
import {IInlineGroupFieldProps, InlineGroupField} from '@src/dForm/fields/inlineGroup';

const formApi = {} as IDFormModalApi;

const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    fieldsProps: {
        tabs1: {
            component: TabsField,
            tabs: {
                ' Входы1 ': {
                    nameIn1: {component: InputField, label: 'Имя входящего'},
                    dateIn1: {component: DateTimeField, label: 'Дата входа'},
                    subTab1: {
                        component: TabsField,
                        tabs: {
                            ' Проходы ': {
                                row1: {
                                    component: InlineGroupField,
                                    fieldsProps: {
                                        subNameIn1: {component: InputField, label: 'Имя проходящего'},
                                        subDateIn1: {component: DateTimeField, label: 'Дата прохода', width: 150},
                                    },
                                } satisfies IInlineGroupFieldProps,
                            },
                            ' Уходы ': {
                                row2: {
                                    component: InlineGroupField,
                                    fieldsProps: {
                                        subNameOut1: {component: InputField, label: 'Имя уходящего'},
                                        subDateOut1: {component: DateTimeField, label: 'Дата ухода', width: 150},
                                    },
                                } satisfies IInlineGroupFieldProps,
                            },
                        },
                    },
                },
                ' Выходы1 ': {
                    nameOut1: {component: InputField, label: 'Имя выходящего'},
                    dateOut1: {component: DateTimeField, label: 'Дата выхода'},
                },
            },
        },
        tabs2: {
            component: TabsField,
            tabs: {
                ' Входы2 ': {
                    nameIn2: {component: InputField, label: 'Имя входящего'},
                    dateIn2: {component: DateTimeField, label: 'Дата входа', width: 150},
                },
                ' Выходы2 ': {
                    nameOut2: {component: InputField, label: 'Имя выходящего'},
                    dateOut2: {component: DateTimeField, label: 'Дата выхода', width: 150},
                },
            },
        },
    },
    height: 250,
    maxWidth: 500,
    maxHeight: 500,
    buttons: FormLayoutSwitch(formApi),
};

export const SeveralTabs = (): React.JSX.Element => {
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
