const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-PpfmoLrq.js","assets/default-highlight-CWL5sYcU.js","assets/index-DLyGJszd.js"])))=>i.map(i=>d[i]);
import{r as t,j as o,_ as n,D as a}from"./index-DLyGJszd.js";import{b as m}from"./mergeButtons-OmCcH4N9.js";import{D as l}from"./dFormModal-L6NStncr.js";import{I as s}from"./inputField-CrUAS0Ct.js";import{F as d}from"./buttonsProps-CVwH8epV.js";import{P as c,C as p,d as u,c as f}from"./darcula-BfEmJZ6D.js";import"./dForm-8o49JMOI.js";import"./modal-CjmvIDqE.js";import"./index-CGhTEYKp.js";import"./modal-BEhuKh3S.js";import"./index-DlQkoOxi.js";import"./SearchOutlined-B4yj2tsd.js";const r={},h={formId:"Test form",apiRef:r,confirmChanges:!0,fieldsProps:{position:{component:s,label:"Должность"},department:{component:s,label:"Подразделение"}},onDataFetch:()=>new Promise((e,i)=>{setTimeout(()=>{Math.random()<.5?i({message:"Ошибка загрузки данных",code:400}):e({data:{position:"Директор",department:"Главная дирекция"}})},3e3)}),buttons:d(r)},x=()=>{const e=t.useCallback(()=>{r.open("update")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of loading data when opening a form"}),o.jsx("p",{children:"To ensure loading, you need to pass a function to the onDataFetch callback that returns a Promise, which, if the server responds successfully (resolve), returns an object of the form:"}),o.jsx("code",{children:'data:{имя_поля1: "значение", имя_поля2: "значение 2"...}'}),o.jsx("p",{children:"and if there is an error (reject)"}),o.jsx("code",{children:"error:{message: string, code: number}"}),o.jsx("p",{children:"For example, the probability of failure during loading is 50%"}),o.jsx("p",{}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(m,{onClick:e,children:"Open form"}),o.jsx(l,{...h})]})]})},F=t.lazy(()=>n(()=>import("./index-PpfmoLrq.js").then(e=>e.ds),__vite__mapDeps([0,1,2])).then(e=>({default:e.Prism}))),w=e=>o.jsxs(c,{children:[o.jsx("div",{children:o.jsx(x,{})}),o.jsx(a,{}),o.jsx("div",{children:o.jsx(p,{items:[{key:1,label:"Show source",children:o.jsx(t.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(F,{language:"tsx",style:e.darkMode?u:f,showLineNumbers:!0,children:`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField";
import {FormLayoutSwitch} from "../../../common/buttonsProps";
const formApi = {} as IDFormModalApi;
const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    fieldsProps: {
        position: {component: InputField, label: 'Должность'},
        department: {component: InputField, label: 'Подразделение'},
    },
    onDataFetch: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < 0.5) reject({message: 'Ошибка загрузки данных', code: 400});
                else resolve({data: {position: 'Директор', department: 'Главная дирекция'}});
            }, 3000);
        });
    },
    buttons: FormLayoutSwitch(formApi),
}
export const FormFetching = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        formApi.open('update');
    }, []);
    return (
        <>
            <div style={{maxWidth: 500}}>
                <Button onClick={onClick}>Open form</Button>
                <DFormModal {...formProps} />
            </div>
        </>
    );
};
`})})}]})})]});export{w as Page4e83c26b5b5c4f33ac5ad7e740f708ab,w as default};
