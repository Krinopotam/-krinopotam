// noinspection DuplicatedCode

import React from 'react';
import {DForm, IDFormProps} from '@src/dForm';
import {InputField} from '@src/dForm/fields/input/inputField';
import {TabsField} from '@src/dForm/fields/tabs/tabsField';
import {Space, Switch} from 'antd';
import {IInlineGroupFieldProps, InlineGroupField} from '@src/dForm/fields/inlineGroup';

export const Example = (): React.JSX.Element => {
    const [horizontal, setHorizontal] = React.useState(false);
    const formProps = useFormProps(horizontal);
    return (
        <>
            {/*Description Start*/}
            <h1>An example of a form with fields and tabs whose visibility depends on each other</h1>
            {/*Description End*/}
            <div style={{maxWidth: 600}}>
                <Space style={{marginBottom: 30}}>
                    <Switch checkedChildren={'Horizontal'} unCheckedChildren={'Vertical'} onChange={() => setHorizontal(cur => !cur)} />
                </Space>
                <DForm {...formProps} />
            </div>
        </>
    );
};

const useFormProps = (horizontal: boolean) => {
    return {
        formId: 'Test form',
        layout: horizontal ? 'horizontal' : 'vertical',
        confirmChanges: true,
        //disableDepended:true,
        fieldsProps: {
            field1: {component: InputField, label: 'Field1 (the Field2 depends on it)', placeholder: 'Enter something'},
            row1: {
                component: InlineGroupField,
                fieldsProps: {
                    field2: {component: InputField, label: 'Field2 (the Field3 depends on it)', placeholder: 'Enter something', dependsOn: ['field1']},
                    field3: {component: InputField, label: 'Field3 (the Tab1 fields depends on it)', placeholder: 'Enter something', dependsOn: ['field2']},
                },
            } satisfies IInlineGroupFieldProps,
            tabs: {
                component: TabsField,
                tabs: {
                    'Tab 1': {
                        tab_1_field1: {component: InputField, label: 'tab_1_field1', dependsOn: ['field3']},
                        tab_1_field2: {component: InputField, label: 'tab_1_field2', dependsOn: ['field3']},
                        tab_1_field3: {component: InputField, label: 'tab_1_field3', dependsOn: ['field3']},
                    },
                    'Tab 2 (independent) ': {
                        tab_2_field1: {component: InputField, label: 'tab_2_field1 (independent )', showCount: true},
                        tab_2_field2: {component: InputField, label: 'tab_2_field2 (independent )'},
                    },
                },
            },
        },

        buttons: {ok: {position: 'right'}},
    } satisfies IDFormProps;
};
