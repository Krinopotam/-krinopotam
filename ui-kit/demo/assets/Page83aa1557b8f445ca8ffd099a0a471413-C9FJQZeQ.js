const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CaEZq3o6.js","assets/default-highlight-Co1BbaV1.js","assets/index-CzYOWtY3.js"])))=>i.map(i=>d[i]);
import{r,j as o,_ as d,D as u}from"./index-CzYOWtY3.js";import{T as p}from"./textAreaField-qJgffvq9.js";import{b as c}from"./buttonsRow-NOziNv-G.js";import{m as t,D as b}from"./dFormModal-6yYFB7nU.js";import{T as f}from"./tabulatorGridField-PJ_t9CPq.js";import{I as F}from"./inputField-JsxEKsAN.js";import{F as h}from"./buttonsProps-DOMeKhty.js";import{T,a as x,b as P}from"./tabulatorData-A6MdMGe-.js";import{T as g}from"./tabsField-D0bNtp8c.js";import{P as j,C as D,d as C,c as k}from"./darcula-fwW_2Y8a.js";import"./dForm-oEAd0w94.js";import"./modal-BG6C0-ZR.js";import"./index-DX1MZAsy.js";import"./index-BQhEJFnB.js";import"./SearchOutlined-C3qLh6j9.js";import"./modal-Bv76__XP.js";import"./tabulatorGrid-CHQlxMIO.js";import"./defaultButtonsProps-DlxVY7Az.js";import"./PlusOutlined-BAR0uPLn.js";import"./index-CCx_ORm0.js";import"./index-Dcm2_Qro.js";const a={},I={formId:"Test form",apiRef:a,confirmChanges:!0,height:500,fieldsProps:{tabs:{component:g,autoHeightResize:!0,onTabDataFetch:(e,s)=>{if(e==="tab2")return new Promise((i,l)=>{setTimeout(()=>{if(Math.random()<.3){l({message:"Random loading data error",code:400});return}const m=s.getModel().getField("users"),n=t(T);m.updateProps({dataSet:n}),i({data:{users:[{id:"1"}]}})},2e3)})},tabs:{tab1:{name:{component:F,label:"Name"},desc:{component:p,label:"Description"}},tab2:{users:{id:"users",component:f,headerLabel:"Users",columnDefaults:t(x),columns:t(P),layout:"fitColumns",selectionMode:!0,autoHeightResize:!0}}}}},width:900,buttons:h(a),onSubmitSuccess:e=>{console.log(e)}},S=()=>{const e=r.useCallback(()=>{a.open("update")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with tabulator in selection mode with async loading tab"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(c,{onClick:e,children:"Open form"}),o.jsx(b,{...I})]})]})},A=r.lazy(()=>d(()=>import("./index-CaEZq3o6.js").then(e=>e.ds),__vite__mapDeps([0,1,2])).then(e=>({default:e.Prism}))),Q=e=>o.jsxs(j,{children:[o.jsx("div",{children:o.jsx(S,{})}),o.jsx(u,{}),o.jsx("div",{children:o.jsx(D,{items:[{key:1,label:"Show source",children:o.jsx(r.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(A,{language:"tsx",style:e.darkMode?C:k,showLineNumbers:!0,children:`
import {ITextAreaFieldProps, TextAreaField} from @krinopotam/ui-kit/dForm/fields/textArea";
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {DFormModal, IDFormModalApi, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {ITabulatorGridFieldProps, TabulatorGridField} from @krinopotam/ui-kit/dForm/fields/tabulatorGrid/tabulatorGridField';
import {IInputFieldProps, InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {FormLayoutSwitch} from '../../../common/buttonsProps';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../../data/tabulatorData';
import {ITabsFieldProps, TabsField} from @krinopotam/ui-kit/dForm/fields/tabs';
import {CloneObject} from '@krinopotam/js-helpers/helpersObjects/cloneObject';
const formApi = {} as IDFormModalApi;
/** main modal form props */
const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    height: 500,
    fieldsProps: {
        tabs: {
            component: TabsField,
            autoHeightResize: true,
            onTabDataFetch: (tabName, field) => {
                if (tabName !== 'tab2') return;
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (Math.random() < 0.3) {
                            reject({message: 'Random loading data error', code: 400});
                            return
                        }
                        const usersField = field.getModel().getField('users');
                        const dataSet = CloneObject(TabulatorPlainData);
                        usersField.updateProps({dataSet: dataSet});
                        resolve({data: {users: [{id: '1'}]}});
                    }, 2000);
                });
            },
            tabs: {
                tab1: {
                    name: {component: InputField, label: 'Name'} as IInputFieldProps,
                    desc: {component: TextAreaField, label: 'Description'} as ITextAreaFieldProps,
                },
                tab2: {
                    users: {
                        id: 'users',
                        component: TabulatorGridField,
                        headerLabel: 'Users',
                        columnDefaults: CloneObject(TabulatorBaseColumnsDef),
                        columns: CloneObject(TabulatorBaseColumns),
                        layout: 'fitColumns',
                        selectionMode: true,
                        autoHeightResize: true,
                    } as ITabulatorGridFieldProps,
                },
            },
        } as ITabsFieldProps,
    },
    width: 900,
    buttons: FormLayoutSwitch(formApi),
    onSubmitSuccess: values => {
        console.log(values);
    },
};
export const Example = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        //formApi.open('update', {dataSet: {users1: CloneObject(TabulatorPlainData)}});
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
`})})}]})})]});export{Q as Page83aa1557b8f445ca8ffd099a0a471413,Q as default};
