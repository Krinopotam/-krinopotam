const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CyxzPzPK.js","assets/default-highlight-BA4pzhEA.js","assets/index-Cpuh8Ebd.js"])))=>i.map(i=>d[i]);
import{r as e,_ as r,j as i,D as t}from"./index-Cpuh8Ebd.js";import{E as l}from"./complex-DjvRrqsd.js";import{P as a,C as s,d,c as p}from"./darcula-hcLbMwDB.js";import"./dForm-t1Ccos62.js";import"./buttonsRow-MpDC2SN8.js";import"./modal-g5li7x1J.js";import"./index-DNdv76Wr.js";import"./inputField-DrHpZyP5.js";import"./index-B7DtBnw9.js";import"./SearchOutlined-mv_WcC67.js";import"./tabsField-CtzcurYq.js";import"./index-_1IkvjzU.js";import"./PlusOutlined-BTCZ_JD0.js";import"./tabulatorGridField-1FlYJ5im.js";import"./dFormModal-iIvnEeWS.js";import"./modal-DJlUd0AK.js";import"./tabulatorGrid-Da6sMqw5.js";import"./defaultButtonsProps-D12Yt--i.js";import"./index-D9n8SM2Y.js";import"./tabulatorData-BJFebvAp.js";import"./dateTimeField-DMD1m-to.js";import"./useIcons-BgIqUolS.js";import"./switchField-DJULnj6-.js";import"./textAreaField-JPwCrcs0.js";import"./selectField-E6buzf6g.js";import"./useShowArrow-CyhrQEeE.js";const n=e.lazy(()=>r(()=>import("./index-CyxzPzPK.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),H=o=>i.jsxs(a,{children:[i.jsx("div",{children:i.jsx(l,{})}),i.jsx(t,{}),i.jsx("div",{children:i.jsx(s,{items:[{key:1,label:"Show source",children:i.jsx(e.Suspense,{fallback:i.jsx("div",{children:"Loading source..."}),children:i.jsx(n,{language:"tsx",style:o.darkMode?d:p,showLineNumbers:!0,children:`
import React from 'react';
import {DForm, IDFormFieldsProps, IDFormProps} from @krinopotam/ui-kit/dForm';
import {IInputFieldProps, InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {Space, Switch} from 'antd';
import {IInlineGroupFieldProps, InlineGroupField} from @krinopotam/ui-kit/dForm/fields/inlineGroup';
import {ITabsFieldProps, TabsField} from @krinopotam/ui-kit/dForm/fields/tabs';
import {ITabulatorGridFieldProps, TabulatorGridField} from @krinopotam/ui-kit/dForm/fields/tabulatorGrid';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../data/tabulatorData';
import {DateTimeField, IDateTimeFieldProps} from @krinopotam/ui-kit/dForm/fields/dateTime';
import {ISwitchFieldProps, SwitchField} from @krinopotam/ui-kit/dForm/fields/switch';
import {ITextAreaFieldProps, TextAreaField} from @krinopotam/ui-kit/dForm/fields/textArea';
import {IQuillEditorFieldProps, QuillEditorField} from @krinopotam/ui-kit/dForm/fields/quillEditor';
import {ISelectFieldProps, SelectField} from @krinopotam/ui-kit/dForm/fields/select';
import {DividerField, IDividerFieldProps} from @krinopotam/ui-kit/dForm/fields/divider';
export const Example = (): React.JSX.Element => {
    const [horizontal, setHorizontal] = React.useState(false);
    const formProps = useFormProps(horizontal);
    return (
        <div>
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
                field3: {component: SelectField, label: 'Type', placeholder: 'Type', width:100} satisfies ISelectFieldProps,
                field4: {component: SwitchField, label: 'Active', dependsOn: ['field2']} satisfies ISwitchFieldProps,
            },
        } satisfies IInlineGroupFieldProps,
        field5: {component: TextAreaField, label: 'Notes', autoSize: true} satisfies ITextAreaFieldProps,
        divider: {component: DividerField, label: 'Optional part', autoSize: true, dependsOn: ['field5']} satisfies IDividerFieldProps,
        field6: {component: QuillEditorField, label: 'Comments', dependsOn: ['field5']} satisfies IQuillEditorFieldProps,
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
`})})}]})})]});export{H as Page16667f8640404a6dbc99868031f2d5da,H as default};
