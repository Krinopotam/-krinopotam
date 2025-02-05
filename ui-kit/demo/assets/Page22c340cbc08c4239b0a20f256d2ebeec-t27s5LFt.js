const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DJhjoKXt.js","assets/default-highlight-1wZDEzJ6.js","assets/index-B5poLpDm.js"])))=>i.map(i=>d[i]);
import{r,j as e,D as d,_ as u}from"./index-B5poLpDm.js";import{T as p}from"./textAreaField-BNi7HnSs.js";import{b as c}from"./buttonsRow-aX3TQ5bu.js";import{D as b,m as t}from"./dFormModal-C_QqbNS_.js";import{T as f}from"./tabulatorGridField-CReHSRkk.js";import{I as F}from"./inputField-Bxibjdcf.js";import{F as h}from"./buttonsProps-AMpdU5hQ.js";import{T,a as x,b as P}from"./tabulatorData-BmpfO34x.js";import{T as g}from"./tabsField-D3YqzPTF.js";import{P as j,C as D,d as C,c as k}from"./darcula-DszBWugp.js";import"./dForm-vrGhQ6Lh.js";import"./messageBox-1o2XjDyt.js";import"./index-AMqWlYeY.js";import"./index-ldRzAboz.js";import"./SearchOutlined-D8SaSDI5.js";import"./modal-tHBgt86o.js";import"./tabulatorGrid-igE2XdiX.js";import"./defaultButtonsProps-DtqWhfDr.js";import"./PlusOutlined-Bg-hNKo-.js";import"./index--2ky6TFp.js";import"./index-CDQLj6wX.js";const a={},I={formId:"Test form",apiRef:a,confirmChanges:!0,height:500,fieldsProps:{tabs:{component:g,autoHeightResize:!0,onTabDataFetch:(o,s)=>{if(o==="tab2")return new Promise((i,l)=>{setTimeout(()=>{if(Math.random()<.3){l({message:"Random loading data error",code:400});return}const m=s.getModel().getField("users"),n=t(P);m.updateProps({dataSet:n}),i({data:{users:[{id:"1"}],name:"newName"}})},2e3)})},tabs:{tab1:{name:{component:F,label:"Name"},desc:{component:p,label:"Description"}},tab2:{users:{id:"users",component:f,headerLabel:"Users",columnDefaults:t(x),columns:t(T),layout:"fitColumns",selectionMode:!0,autoHeightResize:!0}}}}},width:900,buttons:h(a),onSubmitSuccess:o=>{console.log(o)}},S=()=>{const o=r.useCallback(()=>{a.open("update")},[]);return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Example of a modal form with tabulator in selection mode with async loading tab"}),e.jsxs("div",{style:{maxWidth:500},children:[e.jsx(c,{onClick:o,children:"Open form"}),e.jsx(b,{...I})]})]})},A=r.lazy(()=>u(()=>import("./index-DJhjoKXt.js").then(o=>o.dw),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),Q=o=>e.jsxs(j,{children:[e.jsx("div",{children:e.jsx(S,{})}),e.jsx(d,{}),e.jsx("div",{children:e.jsx(D,{items:[{key:1,label:"Show source",children:e.jsx(r.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(A,{language:"tsx",style:o.darkMode?C:k,showLineNumbers:!0,children:`
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
`})})}]})})]});export{Q as Page22c340cbc08c4239b0a20f256d2ebeec,Q as default};
