import{r as s,j as o,D as i}from"./index-7abbb94e.js";import{P as n,C as m,S as l,d,a as p}from"./docco-6bf51e55.js";import{B as c}from"./index-22f8d441.js";import{D as u}from"./dFormModal-d77fb2bf.js";import{I as a}from"./inputField-0673e106.js";import{F as f}from"./buttonsProps-48e806a3.js";import"./index-2daee1bb.js";import"./EyeOutlined-4b705a51.js";import"./SearchOutlined-7a7e5389.js";const t={},h={formId:"Test form",apiRef:t,confirmChanges:!0,fieldsProps:{position:{component:a,label:"Должность"},department:{component:a,label:"Подразделение"}},onDataFetch:()=>new Promise((e,r)=>{setTimeout(()=>{Math.random()<.5?r({message:"Ошибка загрузки данных",code:400}):e({data:{position:"Директор",department:"Главная дирекция"}})},3e3)}),buttons:f(t)},x=()=>{const e=s.useCallback(()=>{t.open("update")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of loading data when opening a form"}),o.jsx("p",{children:"To ensure loading, you need to pass a function to the onDataFetch callback that returns a Promise, which, if the server responds successfully (resolve), returns an object of the form:"}),o.jsx("code",{children:'data:{имя_поля1: "значение", имя_поля2: "значение 2"...}'}),o.jsx("p",{children:"and if there is an error (reject)"}),o.jsx("code",{children:"error:{message: string, code: number}"}),o.jsx("p",{children:"For example, the probability of failure during loading is 50%"}),o.jsx("p",{}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(c,{onClick:e,children:"Open form"}),o.jsx(u,{...h})]})]})},C=e=>{const r=`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField";
import {FormLayoutSwitch} from "../../common/buttonsProps";
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
`;return o.jsxs(n,{children:[o.jsx("div",{children:o.jsx(x,{})}),o.jsx(i,{}),o.jsx("div",{children:o.jsx(m,{items:[{key:1,label:"Show source",children:o.jsx(l,{language:"javascript",style:e.darkMode?d:p,showLineNumbers:!0,children:r})}]})})]})};export{C as Pagef673a7a5a7114ac5aa4d536bc50dd656,C as default};
