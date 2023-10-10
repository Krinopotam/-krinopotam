// noinspection DuplicatedCode

import React from 'react';
import {DForm, IDFormProps} from '@src/dForm';
import {InputField} from '@src/dForm/fields/input/inputField';
import {TabsField} from '@src/dForm/fields/tabs/tabsField';

const formProps: IDFormProps = {
    formId: 'Test form',
    //layout:'horizontal',
    confirmChanges: true,
    fieldsProps: {
        field1: {component: InputField, label: 'Field1', rules: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}]},
        field2: {
            component: TabsField,
            label: 'Field2',
            tabs: {
                'Tab 1': {
                    field2_1_1: {component: InputField, label: 'Field3', showCount: true},
                    field2_1_2: {component: InputField, label: 'Field4'},
                },
                'Tab 2': {
                    field2_2_1: {component: InputField, label: 'Field5', showCount: true},
                    field2_2_2: {component: TabsField, label: 'Field6', tabs:{
                            'Tab 2_1': {
                                field2_2_1_1: {component: InputField, label: 'Field3', showCount: true},
                                field2_2_1_2: {component: InputField, label: 'Field4'},
                            },
                            'Tab 2_2': {
                                field2_2_2_1: {component: InputField, label: 'Field5', showCount: true},
                                field2_2_2_2: {component: InputField, label: 'Field6'},
                            },
                        }},
                    field2_2_3: {component: InputField, label: 'Field4'},
                },
            },
        },
        field3: {
            component: TabsField,
            label: undefined,
            tabs: {
                'Tab 1': {
                    field3_1_1: {component: InputField, label: 'Field3', showCount: true},
                    field3_1_2: {component: InputField, label: 'Field4'},
                },
                'Tab 2': {
                    field3_2_1: {component: InputField, label: 'Field5', showCount: true},
                    field3_2_2: {component: InputField, label: 'Field6'},
                },
            },
        },
    },

    buttons: {ok: {position: 'right'}},
};

export const NewFormWithTabs = (): React.JSX.Element => {
    return (
        <>
            {/*Description Start*/}
            <h1>Пример простой формы с вертикальным расположением подписей полей1</h1>
            {/*Description End*/}
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
