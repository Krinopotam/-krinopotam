// noinspection DuplicatedCode

import React from 'react';
import {DForm, IDFormProps} from '@src/dForm';
import {IInputFieldProps, InputField} from '@src/dForm/fields/input/inputField';
import {Space, Switch} from 'antd';
import {IInlineGroupFieldProps, InlineGroupField} from '@src/dForm/fields/inlineGroup';
import {CheckboxField, ICheckboxFieldProps} from "@src/dForm/fields/checkbox";
import {IPasswordFieldProps, PasswordField} from "@src/dForm/fields/password";
import {INumberFieldProps, NumberField} from "@src/dForm/fields/number";
import {ITreeSelectFieldProps, TreeSelectField} from "@src/dForm/fields/treeSelect";
import {ISelectFieldProps, SelectField} from "@src/dForm/fields/select";
import {ILinkFieldProps, LinkField} from "@src/dForm/fields/link";

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

export const useFormProps = (horizontal: boolean) => {
    return {
        layout: horizontal ? 'horizontal' : 'vertical',
        fieldsProps: {
            inline1: {
                component: InlineGroupField,
                fieldsProps: {
                    field1_1: {component: InputField, label: 'Field1_1', placeholder: '200px', width: 200} satisfies IInputFieldProps,
                    field1_2: {component: PasswordField, label: 'Field1_2', placeholder: 'auto (not set)', autoFocus: true} satisfies IPasswordFieldProps,
                    field1_3: {component: NumberField, label: 'Field1_3', placeholder: '100px', width: 100} satisfies INumberFieldProps,
                },
            } satisfies IInlineGroupFieldProps,
            inline2: {
                component: InlineGroupField,
                fieldsProps: {
                    field2_1: {component: TreeSelectField, label: 'Field2_1', placeholder: '50%', width: '50%'} satisfies ITreeSelectFieldProps,
                    field2_2: {component: SelectField, label: 'Field2_2', placeholder: 'auto (not set)'} satisfies ISelectFieldProps,
                    field2_3: {component: LinkField, label: 'Field2_3', href: 'https://test.ru/link', title:'https://test.ru/link', placeholder: '20%', width: '20%'} satisfies ILinkFieldProps,
                },
            } satisfies IInlineGroupFieldProps,
            inline3: {
                component: InlineGroupField,
                fieldsProps: {
                    field3_1: {component: InputField, label: 'Field3_1', placeholder: 'auto (not set)'} satisfies IInputFieldProps,
                    field3_2: {component: InputField, label: 'Field3_2', placeholder: '100px', width: '100px'} satisfies IInputFieldProps,
                    field3_3: {component: CheckboxField, label: 'Field3_3', width:50} satisfies ICheckboxFieldProps,
                },
            } satisfies IInlineGroupFieldProps,
        },

        buttons: {ok: {position: 'right'}},
    } satisfies IDFormProps;
};
