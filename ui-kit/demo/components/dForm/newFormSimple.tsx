// noinspection DuplicatedCode

import React from 'react';
import {DForm, IDFormProps} from '@src/dForm';
import {InputField} from '@src/dForm/fields/input/inputField';
import {DateTimeField} from '@src/dForm/fields/dateTime/dateTimeField';

const formProps: IDFormProps = {
    formId: 'Test form',
    confirmChanges: true,
    //layout:'horizontal',
    fieldsProps: {
        field1: {
            component: DateTimeField,
            label: 'Field1',
            inlineGroup: 'row1',
            rules: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}],
        },
        field2: {component: InputField, label: 'Field2', inlineGroup: 'row1'},
        field3: {component: InputField, label: 'Field3'},
        /*        group1: {
                    component:InlineGroupField, fieldsProps: {
                        field1: {component: InputField, label: 'Field1' ,inlineGroup:'row1', rules: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}]} ,
                        field2: {component: InputField, label: 'Field2',inlineGroup:'row1'},
                    },//label:'group1'
                },*/
        field4: {component: InputField, label: 'Field4'},
    },
    onFormValuesChanged: (fieldName, values) => console.log(`${fieldName} changed:`, values[fieldName]),
    buttons: {ok: {position: 'right'}},
};

export const NewFormSimple = (): React.JSX.Element => {
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
