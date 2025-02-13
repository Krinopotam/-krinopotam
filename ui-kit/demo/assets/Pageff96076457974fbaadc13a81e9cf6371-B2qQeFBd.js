const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DY4jbcst.js","assets/default-highlight-Dn6Zkl0a.js","assets/index-CtAjfk3U.js"])))=>i.map(i=>d[i]);
import{j as i,D as r,r as e,_ as t}from"./index-CtAjfk3U.js";import{E as l}from"./complex-DSxGzYH5.js";import{P as a,C as s}from"./pageLayout-BYJr8qhp.js";import{d,c as p}from"./darcula-BqMdvqtY.js";import"./isArray-Dq3mFmoY.js";import"./buttonsRow-DIWV9y5m.js";import"./messageBox-BEJz6LZv.js";import"./index-CQ36vsgA.js";import"./inputField-i3gDy1o8.js";import"./baseField-CLOOMrMa.js";import"./index-tEAOawB8.js";import"./SearchOutlined-BPRhDdUX.js";import"./inlineGroupField-B-kKho5M.js";import"./tabsField-1LK1nVmL.js";import"./index-CMA59ydq.js";import"./PlusOutlined-CjmZvIFI.js";import"./tabulatorGridField-BMb3oB4p.js";import"./dFormModal-DBrO8yV5.js";import"./modal-CqlI0vXJ.js";import"./tabulatorGrid-Bes3Jt16.js";import"./defaultButtonsProps-BFWSm065.js";import"./index-C2aIs9ND.js";import"./tabulatorData-DSy7h6X7.js";import"./dateTimeField-ToDBlyGl.js";import"./useIcons-BRnDxCLJ.js";import"./switchField-Bm9sKCKt.js";import"./textAreaField-D8MGn02C.js";import"./index-BypK2dcJ.js";import"./selectField-CcZFqXQc.js";import"./useShowArrow-aGotVQ22.js";import"./dividerField-BhGG_biZ.js";const m=e.lazy(()=>t(()=>import("./index-DY4jbcst.js").then(o=>o.dw),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),V=o=>i.jsxs(a,{children:[i.jsx(l,{}),i.jsx(r,{}),i.jsx("div",{children:i.jsx(s,{items:[{key:1,label:"Show source",children:i.jsx(e.Suspense,{fallback:i.jsx("div",{children:"Loading source..."}),children:i.jsx(m,{language:"tsx",style:o.darkMode?d:p,showLineNumbers:!0,children:`
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
`})})}]})})]});export{V as Pageff96076457974fbaadc13a81e9cf6371,V as default};
