const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-UHTfNfHP.js","assets/default-highlight-BW2eIfdj.js","assets/index-fLDE7RV8.js"])))=>i.map(i=>d[i]);
import{r as e,_ as r,j as i,D as t}from"./index-fLDE7RV8.js";import{E as l}from"./complex-xAi50ALL.js";import{P as a,C as s,d,c as p}from"./darcula-BAaai0cd.js";import"./dForm-DcZj9aOC.js";import"./mergeButtons-5jDhs16v.js";import"./modal-CJqMGIFI.js";import"./index-Dm8OxE-t.js";import"./inputField-CjWubR6e.js";import"./index-BoVgkjiJ.js";import"./SearchOutlined-bm7ljvup.js";import"./tabsField-B0v8U2YI.js";import"./index-Bk2xzZot.js";import"./tabulatorGridField-DZZlCS7S.js";import"./dFormModal-BONKQnKH.js";import"./modal-DKiW44iu.js";import"./tabulatorGrid-BJwlOlPS.js";import"./defaultButtonsProps-BRD3xjmK.js";import"./index-CTvaTwjg.js";import"./tabulatorData-DJNiiClm.js";import"./dateTimeField-BiTVac_v.js";import"./useIcons-C467XfOT.js";import"./switchField-CD6iLdxB.js";import"./textAreaField-VgtgLb5F.js";import"./selectField-DduBBaA6.js";import"./useShowArrow-Cn6xTPHQ.js";const n=e.lazy(()=>r(()=>import("./index-UHTfNfHP.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),R=o=>i.jsxs(a,{children:[i.jsx("div",{children:i.jsx(l,{})}),i.jsx(t,{}),i.jsx("div",{children:i.jsx(s,{items:[{key:1,label:"Show source",children:i.jsx(e.Suspense,{fallback:i.jsx("div",{children:"Loading source..."}),children:i.jsx(n,{language:"tsx",style:o.darkMode?d:p,showLineNumbers:!0,children:`
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
            value: TabulatorPlainData,
            layout: 'fitColumns',
            height: !forModal ? 300 : undefined,
            autoHeightResize: !!forModal,
        } satisfies ITabulatorGridFieldProps,
    } satisfies IDFormFieldsProps;
};
`})})}]})})]});export{R as Pagefbcad541fe0b4439a9efe739ca347821,R as default};
