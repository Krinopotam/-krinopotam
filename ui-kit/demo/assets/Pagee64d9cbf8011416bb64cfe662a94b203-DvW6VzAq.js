const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-UHTfNfHP.js","assets/default-highlight-BW2eIfdj.js","assets/index-fLDE7RV8.js"])))=>i.map(i=>d[i]);
import{j as e,S as p,a as n,r as c,_ as u,D as m}from"./index-fLDE7RV8.js";import{D as h}from"./dForm-DcZj9aOC.js";import{I as t}from"./inputField-CjWubR6e.js";import{b as s}from"./mergeButtons-5jDhs16v.js";import{P as f,C,d as b,c as k}from"./darcula-BAaai0cd.js";import"./modal-CJqMGIFI.js";import"./index-Dm8OxE-t.js";import"./index-BoVgkjiJ.js";import"./SearchOutlined-bm7ljvup.js";const i={},x={apiRef:i,formId:"Test form",confirmChanges:!0,fieldsProps:{field1:{component:t,label:"Поле 1"},field2:{component:t,label:"Поле 2",autoFocus:!0}},buttons:{ok:{position:"right"}}};let o=0;const g=()=>{o++,i.updateProps({fieldsProps:{field1:{component:t,label:`Поле 1 (${o})`},field2:{component:t,label:`Поле 2 (${o})`,autoFocus:!0}}})},y=()=>{o++,i.updateProps({fieldsProps:{field1:{component:t,label:`Поле 1 (${o})`},field3:{component:t,label:`Поле 3 (${o})`,autoFocus:!0}}})};let a=!1;const F=()=>{a=!a,i.model.getField("field1").setDisabled(a)};let r=!0;const P=()=>{r=!r,i.model.getField("field1").setHidden(!r)};let d=!1;const j=()=>{d=!d,i.updateProps({layout:d?"horizontal":"vertical"})},S=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example of changing form props via Api"}),e.jsx("p",{children:" If the field identifier and the type of its component do not change, then the form retains the set field values and their states (disabled, readOnly, visible)"}),e.jsxs("div",{style:{maxWidth:500},children:[e.jsxs(p,{children:[e.jsx(s,{type:"primary",onClick:g,children:"Набор полей 1"}),e.jsx(s,{type:"primary",onClick:y,children:"Набор полей 2"}),e.jsx(n,{checkedChildren:"Enable",unCheckedChildren:"Disable",defaultChecked:!0,onChange:F}),e.jsx(n,{checkedChildren:"Show",unCheckedChildren:"Hide",defaultChecked:!0,onChange:P}),e.jsx(n,{checkedChildren:"Horizontal",unCheckedChildren:"Vertical",onChange:j})]}),e.jsx(h,{...x,formStyle:{marginTop:15}})]})]}),I=c.lazy(()=>u(()=>import("./index-UHTfNfHP.js").then(l=>l.ds),__vite__mapDeps([0,1,2])).then(l=>({default:l.Prism}))),z=l=>e.jsxs(f,{children:[e.jsx("div",{children:e.jsx(S,{})}),e.jsx(m,{}),e.jsx("div",{children:e.jsx(C,{items:[{key:1,label:"Show source",children:e.jsx(c.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(I,{language:"tsx",style:l.darkMode?b:k,showLineNumbers:!0,children:`
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
`})})}]})})]});export{z as Pagee64d9cbf8011416bb64cfe662a94b203,z as default};
