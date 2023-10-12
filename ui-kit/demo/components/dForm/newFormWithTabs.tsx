// noinspection DuplicatedCode

import React from 'react';
import {DForm, IDFormApi, IDFormProps} from '@src/dForm';
import {InputField} from '@src/dForm/fields/input/inputField';
import {TabsField} from '@src/dForm/fields/tabs/tabsField';

const api = {} as IDFormApi;
const formProps: IDFormProps = {
    apiRef: api,
    formId: 'Test form',
    layout:'horizontal',
    confirmChanges: true,
    fieldsProps: {
        field1: {component: InputField, label: 'Field1', rules: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}]},
        field1a: {component: InputField, label: 'Field1a', dependsOn: ['field1']},
        field1b: {component: InputField, label: 'Field1b', dependsOn: ['field1a']},
        field2: {
            component: TabsField,
            label: 'Field2',
            tabs: {
                'Tab 1': {
                    field2_1_1: {component: InputField, label: 'Field3', inlineGroup: 'row1', showCount: true},
                    field2_1_2: {component: InputField, label: 'Field4', inlineGroup: 'row1'},
                },
                'Tab 2': {
                    field2_2_1: {component: InputField, label: 'Field5', showCount: true},
                    field2_2_2: {
                        component: TabsField,
                        label: 'Field6',
                        tabs: {
                            'Tab 2_1': {
                                field2_2_1_1: {component: InputField, label: 'Field3', showCount: true},
                                field2_2_1_2: {component: InputField, label: 'Field4'},
                            },
                            'Tab 2_2': {
                                field2_2_2_1: {component: InputField, label: 'Field5', showCount: true},
                                field2_2_2_2: {component: InputField, label: 'Field6'},
                            },
                        },
                    },
                    field2_2_3: {component: InputField, label: 'Field4'},
                },
            },
        },
    },

    buttons: {
        ok: {position: 'right'},
        rerenderTab1: {
            position: 'left',
            onClick: () => {
                const tabField = api.model.getField('field2') as TabsField;
                tabField.emitTabRender('Tab 1')
            },
        },
        rerenderTabField: {
            position: 'left',
            onClick: () => {
                const tabField = api.model.getField('field2') as TabsField;
                tabField.emitRender();
            },
        },
        rerenderForm: {
            position: 'left',
            onClick: () => {
                api.model.emitFormRender();
            },
        },
    },
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
