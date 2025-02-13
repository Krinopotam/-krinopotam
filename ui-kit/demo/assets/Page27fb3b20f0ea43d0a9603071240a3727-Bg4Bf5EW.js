const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DY4jbcst.js","assets/default-highlight-Dn6Zkl0a.js","assets/index-CtAjfk3U.js"])))=>i.map(i=>d[i]);
import{r,j as o,D as d,_ as u}from"./index-CtAjfk3U.js";import{T as p}from"./textAreaField-D8MGn02C.js";import{b as c}from"./buttonsRow-DIWV9y5m.js";import{D as b,d as t}from"./dFormModal-DBrO8yV5.js";import{T as f}from"./tabulatorGridField-BMb3oB4p.js";import{I as F}from"./inputField-i3gDy1o8.js";import{F as h}from"./buttonsProps-TJQ2MYKB.js";import{T,a as x,b as P}from"./tabulatorData-DSy7h6X7.js";import{T as g}from"./tabsField-1LK1nVmL.js";import{P as j,C as D}from"./pageLayout-BYJr8qhp.js";import{d as C,c as k}from"./darcula-BqMdvqtY.js";import"./baseField-CLOOMrMa.js";import"./isArray-Dq3mFmoY.js";import"./messageBox-BEJz6LZv.js";import"./index-CQ36vsgA.js";import"./index-tEAOawB8.js";import"./SearchOutlined-BPRhDdUX.js";import"./modal-CqlI0vXJ.js";import"./tabulatorGrid-Bes3Jt16.js";import"./defaultButtonsProps-BFWSm065.js";import"./PlusOutlined-CjmZvIFI.js";import"./index-C2aIs9ND.js";import"./index-CMA59ydq.js";const a={},I={formId:"Test form",apiRef:a,confirmChanges:!0,height:500,fieldsProps:{tabs:{component:g,autoHeightResize:!0,onTabDataFetch:(e,s)=>{if(e==="tab2")return new Promise((i,l)=>{setTimeout(()=>{if(Math.random()<.3){l({message:"Random loading data error",code:400});return}const m=s.getModel().getField("users"),n=t(P);m.updateProps({dataSet:n}),i({data:{users:[{id:"1"}],name:"newName"}})},2e3)})},tabs:{tab1:{name:{component:F,label:"Name"},desc:{component:p,label:"Description"}},tab2:{users:{id:"users",component:f,headerLabel:"Users",columnDefaults:t(x),columns:t(T),layout:"fitColumns",selectionMode:!0,autoHeightResize:!0}}}}},width:900,buttons:h(a),onSubmitSuccess:e=>{console.log(e)}},S=()=>{const e=r.useCallback(()=>{a.open("update")},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with tabulator in selection mode with async loading tab"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(c,{onClick:e,children:"Open form"}),o.jsx(b,{...I})]})]})},A=r.lazy(()=>u(()=>import("./index-DY4jbcst.js").then(e=>e.dw),__vite__mapDeps([0,1,2])).then(e=>({default:e.Prism}))),Z=e=>o.jsxs(j,{children:[o.jsx(S,{}),o.jsx(d,{}),o.jsx("div",{children:o.jsx(D,{items:[{key:1,label:"Show source",children:o.jsx(r.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(A,{language:"tsx",style:e.darkMode?C:k,showLineNumbers:!0,children:`
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
                        resolve({data: {users: [{id: '1'}], name:'newName'}});
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
`})})}]})})]});export{Z as Page27fb3b20f0ea43d0a9603071240a3727,Z as default};
