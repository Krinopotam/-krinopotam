const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CGS66BNA.js","assets/default-highlight-CcEIfVOS.js","assets/index-D5qwc_YF.js"])))=>i.map(i=>d[i]);
import{R as s,j as e,S as d,a,r,_ as p,D as m}from"./index-D5qwc_YF.js";import{D as c}from"./dForm-D9Yj5CGv.js";import{I as i}from"./inputField-CQ70iDwA.js";import{P as h,C as f,d as u,c as F}from"./darcula-DCElNxcl.js";import"./modal-Ba-Ua4rS.js";import"./index-DfWwWpfW.js";import"./index-C64nsPO3.js";import"./SearchOutlined-C5suFlPC.js";const x=()=>{const[o,t]=s.useState(!1),l=y(o);return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"An example of a form with fields whose visibility depends on each other"}),e.jsx("p",{children:"While the parent field is empty, dependent fields are hidden"}),e.jsxs("div",{style:{maxWidth:500},children:[e.jsx(d,{style:{marginBottom:30},children:e.jsx(a,{checkedChildren:"Horizontal",unCheckedChildren:"Vertical",onChange:()=>t(n=>!n)})}),e.jsx(c,{...l})]})]})},y=o=>({formId:"Test form",layout:o?"horizontal":"vertical",confirmChanges:!0,fieldsProps:{field1:{component:i,label:"Field 1",placeholder:"While I am empty, other fields are not visible"},field2:{component:i,label:"Field 2 (depends on Field 1)",placeholder:"I can't be seen if Field 1 is empty. Enter something",dependsOn:["field1"]},field3:{component:i,label:"Field 3 (depends on Fields 1 and 2)",placeholder:"I am not visible if fields 1 or 2 are empty",dependsOn:["field1","field2"]}},buttons:{ok:{position:"right"}}}),b=r.lazy(()=>p(()=>import("./index-CGS66BNA.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),C=o=>e.jsxs(h,{children:[e.jsx("div",{children:e.jsx(x,{})}),e.jsx(m,{}),e.jsx("div",{children:e.jsx(f,{items:[{key:1,label:"Show source",children:e.jsx(r.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(b,{language:"tsx",style:o.darkMode?u:F,showLineNumbers:!0,children:`
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
`})})}]})})]});export{C as Paged299a20d447644aa88d7c51d41ea6a3a,C as default};
