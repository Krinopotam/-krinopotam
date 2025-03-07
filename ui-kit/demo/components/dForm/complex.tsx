// noinspection DuplicatedCode

import React from 'react';
import {DForm, IDFormFieldsProps, IDFormProps} from '@src/dForm';
import {IInputFieldProps, InputField} from '@src/dForm/fields/input/inputField';
import {Space, Switch} from 'antd';
import {IInlineGroupFieldProps, InlineGroupField} from '@src/dForm/fields/inlineGroup';
import {ITabsFieldProps, TabsField} from '@src/dForm/fields/tabs';
import {ITabulatorGridFieldProps, TabulatorGridField} from '@src/dForm/fields/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../data/tabulatorData';
import {DateTimeField, IDateTimeFieldProps} from '@src/dForm/fields/dateTime';
import {ISwitchFieldProps, SwitchField} from '@src/dForm/fields/switch';
import {ITextAreaFieldProps, TextAreaField} from '@src/dForm/fields/textArea';
import {IQuillEditorFieldProps, QuillEditorField} from '@src/dForm/fields/quillEditor';
import {ISelectFieldProps, SelectField} from '@src/dForm/fields/select';
import {DividerField, IDividerFieldProps} from '@src/dForm/fields/divider';
import {INumberFieldProps, NumberField} from "@src/dForm/fields/number";

export const Example = (): React.JSX.Element => {
    const [horizontal, setHorizontal] = React.useState(false);
    const formProps = useFormProps(horizontal);

    return (
        <div>
            {/*Description Start*/}
            <h1>Complex form example</h1>
            {/*Description End*/}
            <div style={{maxWidth: 1000, height: 500, border: '1px solid gray', padding: 5}}>
                <Space style={{marginBottom: 30}}>
                    <Switch checkedChildren={'Horizontal'} unCheckedChildren={'Vertical'} onChange={() => setHorizontal(cur => !cur)} />
                </Space>
                <DForm {...formProps} />
            </div>
        </div>
    );
};

export const useFormProps = (horizontal: boolean, forModal?: boolean) => {
    const configTab = useConfigTab();
    const gridTab = useGridTab(forModal);
    return {
        layout: horizontal ? 'horizontal' : 'vertical',
        fieldsProps: {
            tabs: {
                component: TabsField,
                tabs: {
                    ['Config']: configTab,
                    ['Grid']: gridTab,
                },
                autoHeightResize: true,
            } satisfies ITabsFieldProps,
        },

        buttons: {ok: {position: 'right'}},
    } satisfies IDFormProps;
};

const useConfigTab = () => {
    return {
        inline1: {
            component: InlineGroupField,
            fieldsProps: {
                field1: {component: DateTimeField, label: 'Date', placeholder: 'Date', width: 150} satisfies IDateTimeFieldProps,
                field2: {component: InputField, label: 'Operation', placeholder: 'Operation name'} satisfies IInputFieldProps,
                field3: {component: NumberField, label: 'Code', placeholder: 'Code'} satisfies INumberFieldProps,
                field4: {component: SelectField, label: 'Type', placeholder: 'Type', width:100} satisfies ISelectFieldProps,
                field5: {component: SwitchField, label: 'Active', dependsOn: ['field2']} satisfies ISwitchFieldProps,
            },
        } satisfies IInlineGroupFieldProps,
        field6: {component: TextAreaField, label: 'Notes', autoSize: true} satisfies ITextAreaFieldProps,
        divider: {component: DividerField, label: 'Optional part', autoSize: true, dependsOn: ['field5']} satisfies IDividerFieldProps,
        field7: {component: QuillEditorField, label: 'Comments', dependsOn: ['field5']} satisfies IQuillEditorFieldProps,
    } satisfies IDFormFieldsProps;
};

const useGridTab = (forModal?: boolean) => {
    return {
        Grid1: {
            component: TabulatorGridField,
            label: 'Users',
            columnDefaults: TabulatorBaseColumnsDef,
            columns: TabulatorBaseColumns,
            defaultValue: TabulatorPlainData,
            layout: 'fitColumns',
            height: !forModal ? 300 : undefined,
            autoHeightResize: !!forModal,
        } satisfies ITabulatorGridFieldProps,
    } satisfies IDFormFieldsProps;
};
