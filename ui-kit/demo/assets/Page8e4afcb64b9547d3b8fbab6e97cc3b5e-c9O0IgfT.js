const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Co9PZaPl.js","assets/default-highlight-DvtBkdhg.js","assets/index-Dv3qFdjW.js"])))=>i.map(i=>d[i]);
import{r as o,_ as r,j as e,D as t}from"./index-Dv3qFdjW.js";import{E as l}from"./inlineFields-C99xTyqN.js";import{P as s,C as d,d as p,c as n}from"./darcula-MphVyLu8.js";import"./dForm-QxcKLYQQ.js";import"./modal-Bp_ASPGm.js";import"./index-8gx4Y1o-.js";import"./inputField-C4gwpQCw.js";import"./index-qOGxHuln.js";import"./SearchOutlined-DCaoIkCx.js";import"./defaultButtonsProps-DchoBAIh.js";import"./passwordField-CyViNrHw.js";import"./numberField-J6EDWD1M.js";import"./treeSelectField-BUD0w8Bo.js";import"./dFormModal-BUbiUSeF.js";import"./modal-DoluWT5v.js";import"./useShowArrow-CHTHTBiw.js";import"./useIcons-CEssDIMU.js";import"./useApiIsNodeSelected-CouYiEi1.js";import"./selectField-DZ0FHcKr.js";const a=o.lazy(()=>r(()=>import("./index-Co9PZaPl.js").then(i=>i.ds),__vite__mapDeps([0,1,2])).then(i=>({default:i.Prism}))),G=i=>e.jsxs(s,{children:[e.jsx("div",{children:e.jsx(l,{})}),e.jsx(t,{}),e.jsx("div",{children:e.jsx(d,{items:[{key:1,label:"Show source",children:e.jsx(o.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(a,{language:"tsx",style:i.darkMode?p:n,showLineNumbers:!0,children:`
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {IInputFieldProps, InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {Space, Switch} from 'antd';
import {IInlineGroupFieldProps, InlineGroupField} from @krinopotam/ui-kit/dForm/fields/inlineGroup';
import {CheckboxField, ICheckboxFieldProps} from @krinopotam/ui-kit/dForm/fields/checkbox";
import {IPasswordFieldProps, PasswordField} from @krinopotam/ui-kit/dForm/fields/password";
import {INumberFieldProps, NumberField} from @krinopotam/ui-kit/dForm/fields/number";
import {ITreeSelectFieldProps, TreeSelectField} from @krinopotam/ui-kit/dForm/fields/treeSelect";
import {ISelectFieldProps, SelectField} from @krinopotam/ui-kit/dForm/fields/select";
import {ILinkFieldProps, LinkField} from @krinopotam/ui-kit/dForm/fields/link";
export const Example = (): React.JSX.Element => {
    const [horizontal, setHorizontal] = React.useState(false);
    const formProps = useFormProps(horizontal);
    return (
        <div>
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
                    field2_3: {component: LinkField, label: 'Field2_3', href: 'https://test.ru/link', value:'https://test.ru/link', placeholder: '20%', width: '20%'} satisfies ILinkFieldProps,
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
`})})}]})})]});export{G as Page8e4afcb64b9547d3b8fbab6e97cc3b5e,G as default};
