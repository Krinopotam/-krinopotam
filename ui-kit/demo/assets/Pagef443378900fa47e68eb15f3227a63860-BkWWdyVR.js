const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-l9Wg9Pc0.js","assets/default-highlight-B7lEcFzY.js","assets/index-DM4KduW8.js"])))=>i.map(i=>d[i]);
import{r as t,j as o,_ as n,D as a}from"./index-DM4KduW8.js";import{B as m}from"./modal-CrAyaDCA.js";import{D as l}from"./dFormModal-mDojMLr5.js";import{I as i}from"./inputField-CNhjASo3.js";import{F as d}from"./buttonsProps-ChSvUGWm.js";import{P as p,C as c,d as u,c as f}from"./darcula-B-kkYBo3.js";import"./dForm-DnIX3jkH.js";import"./index-B_-TuVyw.js";import"./modal-DPQg-moX.js";import"./index-7b3wGf9w.js";import"./SearchOutlined-CrE_nQO8.js";const r={},h={formId:"Test form",apiRef:r,confirmChanges:!0,fieldsProps:{position:{component:i,label:"Должность"},department:{component:i,label:"Подразделение"}},onDataFetch:()=>new Promise((e,s)=>{setTimeout(()=>{Math.random()<.5?s({message:"Ошибка загрузки данных",code:400}):e({data:{position:"Директор",department:"Главная дирекция"}})},3e3)}),buttons:d(r)},x=()=>{const e=t.useCallback(()=>{r.open("update")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of loading data when opening a form"}),o.jsx("p",{children:"To ensure loading, you need to pass a function to the onDataFetch callback that returns a Promise, which, if the server responds successfully (resolve), returns an object of the form:"}),o.jsx("code",{children:'data:{имя_поля1: "значение", имя_поля2: "значение 2"...}'}),o.jsx("p",{children:"and if there is an error (reject)"}),o.jsx("code",{children:"error:{message: string, code: number}"}),o.jsx("p",{children:"For example, the probability of failure during loading is 50%"}),o.jsx("p",{}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(m,{onClick:e,children:"Open form"}),o.jsx(l,{...h})]})]})},F=t.lazy(()=>n(()=>import("./index-l9Wg9Pc0.js").then(e=>e.ds),__vite__mapDeps([0,1,2])).then(e=>({default:e.Prism}))),_=e=>o.jsxs(p,{children:[o.jsx("div",{children:o.jsx(x,{})}),o.jsx(a,{}),o.jsx("div",{children:o.jsx(c,{items:[{key:1,label:"Show source",children:o.jsx(t.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(F,{language:"tsx",style:e.darkMode?u:f,showLineNumbers:!0,children:`
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
`})})}]})})]});export{_ as Pagef443378900fa47e68eb15f3227a63860,_ as default};