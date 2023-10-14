// noinspection DuplicatedCode

import React from 'react';
import {DForm, IDFormProps} from '@src/dForm';
import {InputField} from '@src/dForm/fields/input/inputField';
import {TabsField} from "@src/dForm/fields/tabs/tabsField";

const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    //disableDepended:true,
    //layout:'horizontal',
    fieldsProps: {
        //field1: {component: InputField, label: 'Field1'},
        //field2: {component: InputField, label: 'Field2', dependsOn:['field1']},
        field3: {component: InputField, label: 'Field3'},
        field4: {component: InputField, label: 'Field4', inlineGroup:'row1', dependsOn:['field3']},
        field5: {component: InputField, label: 'Field5', inlineGroup:'row1', dependsOn:['field4']},
        tabs: {
            component: TabsField,
            tabs: {
                'Tab 1': {
                    field1_1: {component: InputField, label: 'Field3', dependsOn:['field3']},
                    field1_2: {component: InputField, label: 'Field4', dependsOn:['field3']},
                    field1_3: {component: InputField, label: 'Field4', inlineGroup:'row2', dependsOn:['field1_1', 'field1_2']},
                },
                'Tab 2': {
                    field2_1: {component: InputField, label: 'Field5', showCount: true},
                    field2_2: {component: InputField, label: 'Field6'},
                },
            },
        },
        /*        group1: {
                    component:InlineGroupField, fieldsProps: {
                        field1: {component: InputField, label: 'Field1' ,inlineGroup:'row1', rules: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}]} ,
                        field2: {component: InputField, label: 'Field2',inlineGroup:'row1'},
                    },//label:'group1'
                },*/
    },

    buttons: {ok: {position: 'right'}},
};

export const DependedFields = (): React.JSX.Element => {
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
