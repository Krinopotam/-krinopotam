// noinspection DuplicatedCode

import React from 'react';
import {DForm, IDFormApi, IDFormProps} from '@src/dForm';
import {InputField} from '@src/dForm/fields/input/inputField';
import {TabsField} from '@src/dForm/fields/tabs/tabsField';
import {Space, Switch} from 'antd';
import {IInlineGroupFieldProps, InlineGroupField} from "@src/dForm/fields/inlineGroup";

export const Example = (): React.JSX.Element => {
    const [horizontal, setHorizontal] = React.useState(false);
    const formProps = useFormProps(horizontal);
    return (
        <div>
            {/*Description Start*/}
            <h1>Example of a form with nested tabs</h1>
            {/*Description End*/}
            <div style={{maxWidth: 500}}>
                <Space style={{marginBottom: 30}}>
                    <Switch checkedChildren={'Horizontal'} unCheckedChildren={'Vertical'} onChange={() => setHorizontal(cur => !cur)} />
                </Space>
                <DForm {...formProps} />
            </div>
        </div>
    );
};

const api = {} as IDFormApi;

const useFormProps = (horizontal: boolean) => {
    return {
        apiRef: api,
        formId: 'Test form',
        layout: horizontal ? 'horizontal' : 'vertical',
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
                        row1: {
                            component: InlineGroupField,
                            fieldsProps: {
                                field2_1_1: {component: InputField, label: 'Field3', showCount: true},
                                field2_1_2: {component: InputField, label: 'Field4'},
                            },
                        } satisfies IInlineGroupFieldProps,
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
                        //field2_2_3: {component: InputField, label: 'Field4'},
                    },
                    'Tab 3': {
                        field3_2_1: {component: InputField, label: 'Field5', showCount: true},
                        field3_2_2: {
                            component: TabsField,
                            label: 'Field6',
                            tabs: {
                                'Tab 3_1': {
                                    field3_2_1_1: {component: InputField, label: 'Field3', showCount: true},
                                    field3_2_1_2: {component: InputField, label: 'Field4'},
                                },
                                'Tab 3_2': {
                                    field3_2_2_1: {component: InputField, label: 'Field5', showCount: true},
                                    field3_2_2_2: {component: InputField, label: 'Field6'},
                                },
                            },
                        },
                        //field2_2_3: {component: InputField, label: 'Field4'},
                    },
                },
            },
        },

        buttons: {
            ok: {position: 'right'},
            rerenderTabField: {
                position: 'left',
                title: 'Rerender Tabs field',
                onClick: () => {
                    const tabField = api.model.getField('field2') as TabsField;
                    tabField.emitRender();
                },
            },
            rerenderTab1: {
                position: 'left',
                title: 'Rerender Tab 1 content',
                onClick: () => {
                    const tabField = api.model.getField('field2') as TabsField;
                    tabField.emitTabRender('Tab 1');
                },
            },
            rerenderForm: {
                position: 'left',
                title: 'Rerender Form',
                onClick: () => {
                    api.model.emitFormRender();
                },
            },
        },
    } satisfies IDFormProps;
};
