const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CGS66BNA.js","assets/default-highlight-CcEIfVOS.js","assets/index-D5qwc_YF.js"])))=>i.map(i=>d[i]);
import{j as e,S as p,a as n,r as c,_ as u,D as m}from"./index-D5qwc_YF.js";import{D as h}from"./dForm-D9Yj5CGv.js";import{I as t}from"./inputField-CQ70iDwA.js";import{B as s}from"./modal-Ba-Ua4rS.js";import{P as f,C,d as k,c as b}from"./darcula-DCElNxcl.js";import"./index-DfWwWpfW.js";import"./index-C64nsPO3.js";import"./SearchOutlined-C5suFlPC.js";const i={},x={apiRef:i,formId:"Test form",confirmChanges:!0,fieldsProps:{field1:{component:t,label:"Поле 1"},field2:{component:t,label:"Поле 2",autoFocus:!0}},buttons:{ok:{position:"right"}}};let o=0;const g=()=>{o++,i.updateProps({fieldsProps:{field1:{component:t,label:`Поле 1 (${o})`},field2:{component:t,label:`Поле 2 (${o})`,autoFocus:!0}}})},y=()=>{o++,i.updateProps({fieldsProps:{field1:{component:t,label:`Поле 1 (${o})`},field3:{component:t,label:`Поле 3 (${o})`,autoFocus:!0}}})};let a=!1;const F=()=>{a=!a,i.model.getField("field1").setDisabled(a)};let d=!0;const P=()=>{d=!d,i.model.getField("field1").setHidden(!d)};let r=!1;const j=()=>{r=!r,i.updateProps({layout:r?"horizontal":"vertical"})},S=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example of changing form props via Api"}),e.jsx("p",{children:" If the field identifier and the type of its component do not change, then the form retains the set field values and their states (disabled, readOnly, visible)"}),e.jsxs("div",{style:{maxWidth:500},children:[e.jsxs(p,{children:[e.jsx(s,{type:"primary",onClick:g,children:"Набор полей 1"}),e.jsx(s,{type:"primary",onClick:y,children:"Набор полей 2"}),e.jsx(n,{checkedChildren:"Enable",unCheckedChildren:"Disable",defaultChecked:!0,onChange:F}),e.jsx(n,{checkedChildren:"Show",unCheckedChildren:"Hide",defaultChecked:!0,onChange:P}),e.jsx(n,{checkedChildren:"Horizontal",unCheckedChildren:"Vertical",onChange:j})]}),e.jsx(h,{...x,formStyle:{marginTop:15}})]})]}),I=c.lazy(()=>u(()=>import("./index-CGS66BNA.js").then(l=>l.ds),__vite__mapDeps([0,1,2])).then(l=>({default:l.Prism}))),R=l=>e.jsxs(f,{children:[e.jsx("div",{children:e.jsx(S,{})}),e.jsx(m,{}),e.jsx("div",{children:e.jsx(C,{items:[{key:1,label:"Show source",children:e.jsx(c.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(I,{language:"tsx",style:l.darkMode?k:b,showLineNumbers:!0,children:`
import React from 'react';
import {DForm, IDFormApi, IDFormProps} from @krinopotam/ui-kit/dForm';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField";
import {Button} from @krinopotam/ui-kit/button";
import {Space, Switch} from "antd";
const api = {} as IDFormApi
const formProps: IDFormProps = {
    apiRef: api,
    formId: 'Test form',
    confirmChanges: true,
    fieldsProps: {
        field1: {component: InputField, label: 'Поле 1'},
        field2: {component: InputField, label: 'Поле 2', autoFocus: true},
    },
    buttons: {ok: {position: 'right'}},
};
let num = 0
const onClick1 = () => {
    num++
    api.updateProps({
        fieldsProps: {
            field1: {component: InputField, label: \`Поле 1 (\${num})\`},
            field2: {component: InputField, label: \`Поле 2 (\${num})\`, autoFocus: true},
        }
    })
}
const onClick2 = () => {
    num++
    api.updateProps({
        fieldsProps: {
            field1: {component: InputField, label: \`Поле 1 (\${num})\`},
            field3: {component: InputField, label: \`Поле 3 (\${num})\`, autoFocus: true},
        }
    })
}
let disabled = false
const disableHandle = () => {
    disabled=!disabled
    api.model.getField('field1').setDisabled(disabled)
}
let show = true
const hideHandle = () => {
    show=!show
    api.model.getField('field1').setHidden(!show)
}
let layout = false
const changeLayout = () => {
    layout = !layout
    api.updateProps({
        layout: !layout ? 'vertical' : 'horizontal',
    })
}
export const Example = (): React.JSX.Element => {
    return (
        <>
            <div style={{maxWidth: 500}}>
                <Space>
                    <Button type="primary" onClick={onClick1}>Набор полей 1</Button>
                    <Button type="primary" onClick={onClick2}>Набор полей 2</Button>
                    <Switch checkedChildren={'Enable'} unCheckedChildren={'Disable'} defaultChecked onChange={disableHandle}/>
                    <Switch checkedChildren={'Show'} unCheckedChildren={'Hide'} defaultChecked onChange={hideHandle}/>
                    <Switch checkedChildren={'Horizontal'} unCheckedChildren={'Vertical'} onChange={changeLayout}/>
                </Space>
                <DForm {...formProps} formStyle={{marginTop: 15}}/>
            </div>
        </>
    );
};
`})})}]})})]});export{R as Page520f9add2e41441695f8fd678088a0b5,R as default};
