const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-aRU0KM20.js","assets/default-highlight-Kf2sMSRd.js","assets/index-BEbJdilr.js"])))=>i.map(i=>d[i]);
import{r as o,_ as r,j as e,D as t}from"./index-BEbJdilr.js";import{E as l}from"./inlineFields-B6Denljp.js";import{P as s,C as d,d as p,c as n}from"./darcula-DUU8WC9V.js";import"./dForm-BUs8TQbJ.js";import"./modal-DZ70cJBI.js";import"./index-DJAh43lQ.js";import"./inputField-CHnFv8h3.js";import"./index-C0ukGqzI.js";import"./SearchOutlined-CqkiXlgD.js";import"./defaultButtonsProps-BuloFMuY.js";import"./passwordField-BZL91Zof.js";import"./numberField-DUBNUrBL.js";import"./treeSelectField-1yWgJPJB.js";import"./dFormModal-DVM0pNWI.js";import"./modal-CKnotMHS.js";import"./useApiGetGroupsOnly-B8IoRGb1.js";import"./useShowArrow-Co7GTLtH.js";import"./useIcons-go0WpEcA.js";import"./selectField-Dvkzbn_6.js";const a=o.lazy(()=>r(()=>import("./index-aRU0KM20.js").then(i=>i.ds),__vite__mapDeps([0,1,2])).then(i=>({default:i.Prism}))),G=i=>e.jsxs(s,{children:[e.jsx("div",{children:e.jsx(l,{})}),e.jsx(t,{}),e.jsx("div",{children:e.jsx(d,{items:[{key:1,label:"Show source",children:e.jsx(o.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(a,{language:"tsx",style:i.darkMode?p:n,showLineNumbers:!0,children:`
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
`})})}]})})]});export{G as Pageac53f4e71e3d44d5b3dbe8e3d3240d5c,G as default};
