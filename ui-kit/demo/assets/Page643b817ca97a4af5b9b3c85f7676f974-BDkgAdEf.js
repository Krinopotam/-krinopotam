const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CGS66BNA.js","assets/default-highlight-CcEIfVOS.js","assets/index-D5qwc_YF.js"])))=>i.map(i=>d[i]);
import{R as r,j as e,S as a,a as s,r as i,_ as p,D as m}from"./index-D5qwc_YF.js";import{D as c}from"./dForm-D9Yj5CGv.js";import{I as o}from"./inputField-CQ70iDwA.js";import{T as f}from"./tabsField-BRHPb8dz.js";import{P as h,C as b,d as u,c as _}from"./darcula-DCElNxcl.js";import"./modal-Ba-Ua4rS.js";import"./index-DfWwWpfW.js";import"./index-C64nsPO3.js";import"./SearchOutlined-C5suFlPC.js";import"./index-BfO4O-gl.js";const F=()=>{const[t,n]=r.useState(!1),l=x(t);return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"An example of a form with fields and tabs whose visibility depends on each other"}),e.jsxs("div",{style:{maxWidth:600},children:[e.jsx(a,{style:{marginBottom:30},children:e.jsx(s,{checkedChildren:"Horizontal",unCheckedChildren:"Vertical",onChange:()=>n(d=>!d)})}),e.jsx(c,{...l})]})]})},x=t=>({formId:"Test form",layout:t?"horizontal":"vertical",confirmChanges:!0,fieldsProps:{field1:{component:o,label:"Field1 (the Field2 depends on it)",placeholder:"Enter something"},field2:{component:o,label:"Field2 (the Field3 depends on it)",placeholder:"Enter something",inlineGroup:"row1",dependsOn:["field1"]},field3:{component:o,label:"Field3 (the Tab1 fields depends on it)",placeholder:"Enter something",inlineGroup:"row1",dependsOn:["field2"]},tabs:{component:f,tabs:{"Tab 1":{tab_1_field1:{component:o,label:"tab_1_field1",dependsOn:["field3"]},tab_1_field2:{component:o,label:"tab_1_field2",dependsOn:["field3"]},tab_1_field3:{component:o,label:"tab_1_field3",inlineGroup:"row2",dependsOn:["field3"]}},"Tab 2 (independent) ":{tab_2_field1:{component:o,label:"tab_2_field1 (independent )",showCount:!0},tab_2_field2:{component:o,label:"tab_2_field2 (independent )"}}}}},buttons:{ok:{position:"right"}}}),g=i.lazy(()=>p(()=>import("./index-CGS66BNA.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),T=t=>e.jsxs(h,{children:[e.jsx("div",{children:e.jsx(F,{})}),e.jsx(m,{}),e.jsx("div",{children:e.jsx(b,{items:[{key:1,label:"Show source",children:e.jsx(i.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(g,{language:"tsx",style:t.darkMode?u:_,showLineNumbers:!0,children:`
import React from 'react';
import {DForm, IDFormProps} from @krinopotam/ui-kit/dForm';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {TabsField} from @krinopotam/ui-kit/dForm/fields/tabs/tabsField';
import {Space, Switch} from 'antd';
export const Example = (): React.JSX.Element => {
    const [horizontal, setHorizontal] = React.useState(false);
    const formProps = useFormProps(horizontal);
    return (
        <>
            <div style={{maxWidth: 600}}>
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
        //disableDepended:true,
        fieldsProps: {
            field1: {component: InputField, label: 'Field1 (the Field2 depends on it)', placeholder:'Enter something'},
            field2: {component: InputField, label: 'Field2 (the Field3 depends on it)', placeholder:'Enter something', inlineGroup:'row1', dependsOn:['field1']},
            field3: {component: InputField, label: 'Field3 (the Tab1 fields depends on it)', placeholder:'Enter something', inlineGroup:'row1', dependsOn:['field2']},
            tabs: {
                component: TabsField,
                tabs: {
                    'Tab 1': {
                        tab_1_field1: {component: InputField, label: 'tab_1_field1', dependsOn:['field3']},
                        tab_1_field2: {component: InputField, label: 'tab_1_field2', dependsOn:['field3']},
                        tab_1_field3: {component: InputField, label: 'tab_1_field3', inlineGroup:'row2', dependsOn:['field3']},
                    },
                    'Tab 2 (independent) ': {
                        tab_2_field1: {component: InputField, label: 'tab_2_field1 (independent )', showCount: true},
                        tab_2_field2: {component: InputField, label: 'tab_2_field2 (independent )'},
                    },
                },
            },
        },
        buttons: {ok: {position: 'right'}},
    } satisfies IDFormProps;
};
`})})}]})})]});export{T as Page643b817ca97a4af5b9b3c85f7676f974,T as default};
