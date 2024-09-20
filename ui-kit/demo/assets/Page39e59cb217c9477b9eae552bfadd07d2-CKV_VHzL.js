const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-9FGXM8eG.js","assets/default-highlight-_K3mzjfK.js","assets/index-CObHp3AH.js"])))=>i.map(i=>d[i]);
import{j as e,S as p,a as n,r as c,_ as u,D as m}from"./index-CObHp3AH.js";import{D as h}from"./dForm-DjwSwKfj.js";import{I as t}from"./inputField-CMzynz8s.js";import{B as s}from"./modal-BBQwvlDP.js";import{P as f,C,d as b,c as k}from"./darcula-D-n55oql.js";import"./index-BubinFZA.js";import"./CheckOutlined-ka3l-INf.js";import"./index-Bcx3LFQ2.js";import"./SearchOutlined-DZTAjpNT.js";import"./DownOutlined-BYejAm0U.js";const i={},F={apiRef:i,formId:"Test form",confirmChanges:!0,fieldsProps:{field1:{component:t,label:"Поле 1"},field2:{component:t,label:"Поле 2",autoFocus:!0}},buttons:{ok:{position:"right"}}};let o=0;const x=()=>{o++,i.updateProps({fieldsProps:{field1:{component:t,label:`Поле 1 (${o})`},field2:{component:t,label:`Поле 2 (${o})`,autoFocus:!0}}})},y=()=>{o++,i.updateProps({fieldsProps:{field1:{component:t,label:`Поле 1 (${o})`},field3:{component:t,label:`Поле 3 (${o})`,autoFocus:!0}}})};let r=!1;const g=()=>{r=!r,i.model.getField("field1").setDisabled(r)};let d=!0;const P=()=>{d=!d,i.model.getField("field1").setHidden(!d)};let a=!1;const j=()=>{a=!a,i.updateProps({layout:a?"horizontal":"vertical"})},S=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Пример изменения пропсов формы через Api"}),e.jsx("p",{children:" Если идентификатор поля и тип его компонента не изменяется, то форма сохраняет установленные значения полей, и их состояния (disabled, readOnly, visible)"}),e.jsxs("div",{style:{maxWidth:500},children:[e.jsxs(p,{children:[e.jsx(s,{type:"primary",onClick:x,children:"Набор полей 1"}),e.jsx(s,{type:"primary",onClick:y,children:"Набор полей 2"}),e.jsx(n,{checkedChildren:"Enable",unCheckedChildren:"Disable",defaultChecked:!0,onChange:g}),e.jsx(n,{checkedChildren:"Show",unCheckedChildren:"Hide",defaultChecked:!0,onChange:P}),e.jsx(n,{checkedChildren:"Horizontal",unCheckedChildren:"Vertical",onChange:j})]}),e.jsx(h,{...F,formStyle:{marginTop:15}})]})]}),I=c.lazy(()=>u(()=>import("./index-9FGXM8eG.js").then(l=>l.ds),__vite__mapDeps([0,1,2])).then(l=>({default:l.Prism}))),T=l=>e.jsxs(f,{children:[e.jsx("div",{children:e.jsx(S,{})}),e.jsx(m,{}),e.jsx("div",{children:e.jsx(C,{items:[{key:1,label:"Show source",children:e.jsx(c.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(I,{language:"tsx",style:l.darkMode?b:k,showLineNumbers:!0,children:`
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
export const FormSimple = (): React.JSX.Element => {
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
`})})}]})})]});export{T as Page39e59cb217c9477b9eae552bfadd07d2,T as default};
