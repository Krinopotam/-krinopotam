const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DY4jbcst.js","assets/default-highlight-Dn6Zkl0a.js","assets/index-CtAjfk3U.js"])))=>i.map(i=>d[i]);
import{W as s,j as e,S as a,a as d,D as m,r,_ as p}from"./index-CtAjfk3U.js";import{D as c}from"./isArray-Dq3mFmoY.js";import{I as i}from"./inputField-i3gDy1o8.js";import{P as h,C as f}from"./pageLayout-BYJr8qhp.js";import{d as u,c as F}from"./darcula-BqMdvqtY.js";import"./buttonsRow-DIWV9y5m.js";import"./messageBox-BEJz6LZv.js";import"./index-CQ36vsgA.js";import"./baseField-CLOOMrMa.js";import"./index-tEAOawB8.js";import"./SearchOutlined-BPRhDdUX.js";const x=()=>{const[o,t]=s.useState(!1),l=y(o);return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"An example of a form with fields whose visibility depends on each other"}),e.jsx("p",{children:"While the parent field is empty, dependent fields are hidden"}),e.jsxs("div",{style:{maxWidth:500},children:[e.jsx(a,{style:{marginBottom:30},children:e.jsx(d,{checkedChildren:"Horizontal",unCheckedChildren:"Vertical",onChange:()=>t(n=>!n)})}),e.jsx(c,{...l})]})]})},y=o=>({formId:"Test form",layout:o?"horizontal":"vertical",confirmChanges:!0,fieldsProps:{field1:{component:i,label:"Field 1",placeholder:"While I am empty, other fields are not visible"},field2:{component:i,label:"Field 2 (depends on Field 1)",placeholder:"I can't be seen if Field 1 is empty. Enter something",dependsOn:["field1"]},field3:{component:i,label:"Field 3 (depends on Fields 1 and 2)",placeholder:"I am not visible if fields 1 or 2 are empty",dependsOn:["field1","field2"]}},buttons:{ok:{position:"right"}}}),b=r.lazy(()=>p(()=>import("./index-DY4jbcst.js").then(o=>o.dw),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),w=o=>e.jsxs(h,{children:[e.jsx(x,{}),e.jsx(m,{}),e.jsx("div",{children:e.jsx(f,{items:[{key:1,label:"Show source",children:e.jsx(r.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(b,{language:"tsx",style:o.darkMode?u:F,showLineNumbers:!0,children:`
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {Space, Switch} from 'antd';
export const Example = (): React.JSX.Element => {
    const [horizontal, setHorizontal] = React.useState(false);
    const formProps = useFormProps(horizontal);
    return (
        <>
            <div style={{maxWidth: 500}}>
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
        fieldsProps: {
            field1: {component: InputField, label: 'Field 1', placeholder: 'While I am empty, other fields are not visible'},
            field2: {
                component: InputField,
                label: 'Field 2 (depends on Field 1)',
                placeholder: 'I can't be seen if Field 1 is empty. Enter something',
                dependsOn: ['field1'],
            },
            field3: {
                component: InputField,
                label: 'Field 3 (depends on Fields 1 and 2)',
                placeholder: 'I am not visible if fields 1 or 2 are empty',
                dependsOn: ['field1', 'field2'],
            } ,
        },
        buttons: {ok: {position: 'right'}},
    } satisfies IDFormProps;
};
`})})}]})})]});export{w as Pagea37fe660aff04d4a9a8ef1ae43d3e106,w as default};
