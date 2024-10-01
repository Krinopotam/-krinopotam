// noinspection DuplicatedCode

import React from 'react';
import {DForm, IDFormProps} from '@src/dForm';
import {IInputFieldProps, InputField} from '@src/dForm/fields/input/inputField';
import {Space, Switch} from 'antd';
import {IInlineGroupFieldProps, InlineGroupField} from '@src/dForm/fields/inlineGroup';

export const Example = (): React.JSX.Element => {
    const [horizontal, setHorizontal] = React.useState(false);
    const formProps = useFormProps(horizontal);

    return (
        <div>
            {/*Description Start*/}
            <h1>Form example with inline fields</h1>
            {/*Description End*/}
            <div style={{maxWidth: 1000, border: '1px solid gray', padding: 5}}>
                <Space style={{marginBottom: 30}}>
                    <Switch checkedChildren={'Horizontal'} unCheckedChildren={'Vertical'} onChange={() => setHorizontal(cur => !cur)} />
                </Space>
                <DForm {...formProps} />
            </div>
        </div>
    );
};

const useFormProps = (horizontal: boolean) => {
    return {
        layout: horizontal ? 'horizontal' : 'vertical',
        fieldsProps: {
            inline1: {
                component: InlineGroupField,
                fieldsProps: {
                    field1_1: {component: InputField, label: 'Field1 (width=100)', width: 100} satisfies IInputFieldProps,
                    field1_2: {component: InputField, label: 'Field2 (width not set)', autoFocus: true} satisfies IInputFieldProps,
                    field1_3: {component: InputField, label: 'Field2 (width=50)', width: 50} satisfies IInputFieldProps,
                },
            } satisfies IInlineGroupFieldProps,
            inline2: {
                component: InlineGroupField,
                fieldsProps: {
                    field2_1: {component: InputField, label: 'Field1 (width=30%)', width: '30%'} satisfies IInputFieldProps,
                    field2_2: {component: InputField, label: 'Field2 (width not set)'} satisfies IInputFieldProps,
                    field2_3: {component: InputField, label: 'Field2 (width=10%)', width: '10%'} satisfies IInputFieldProps,
                },
            } satisfies IInlineGroupFieldProps,
        },

        buttons: {ok: {position: 'right'}},
    } satisfies IDFormProps;
};
