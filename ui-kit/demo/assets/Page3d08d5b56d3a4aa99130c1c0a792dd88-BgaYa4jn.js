const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-C2SUEjL0.js","assets/default-highlight-BDFjN1OP.js","assets/index-CgBeyb-e.js"])))=>i.map(i=>d[i]);
import{r as i,j as o,_ as c,D as b}from"./index-CgBeyb-e.js";import{B as f}from"./modal-hi51mlNB.js";import{m as r,D as F}from"./dFormModal-B-TtMmSz.js";import{T as l}from"./tabulatorGridField-eanR-mo2.js";import{I as e}from"./inputField-CHbICkKZ.js";import{F as s}from"./buttonsProps-4AZ7BKsV.js";import{T as m,a as n,b as d}from"./tabulatorData-CNf7XRJ4.js";import{T as h}from"./tabsField-DQyzBA6G.js";import{P as C,C as P,d as D,c as g}from"./darcula-Bm4NDPn1.js";import"./dForm-B-6Y2TlM.js";import"./index-Birbnh4n.js";import"./modal-D01YMXTL.js";import"./tabulatorGrid-DAyVcvcb.js";import"./defaultButtonsProps-BjCvvsD6.js";import"./index-blBfG32B.js";import"./index-BmHUbDh_.js";import"./SearchOutlined-DsYktL9I.js";import"./index-bT1kimW8.js";const a={},u={},p={},T={apiRef:u,formId:"formWithGrid",fieldsProps:{name:{component:e,label:"Name"},age:{component:e,label:"Age"},col:{component:e,label:"Favourite Color"},dob:{component:e,label:"Day of Birth"}},confirmChanges:!0,buttons:s(u)},I={apiRef:p,formId:"formWithGrid",fieldsProps:{name:{component:e,label:"Name"},age:{component:e,label:"Age"},col:{component:e,label:"Favourite Color"},dob:{component:e,label:"Day of Birth"}},confirmChanges:!0,buttons:s(p)},j={formId:"Test form",apiRef:a,confirmChanges:!0,height:300,fieldsProps:{tabs:{component:h,autoHeightResize:!0,tabs:{tab1:{users1:{id:"users1",component:l,headerLabel:"Пользователи 1",columnDefaults:r(m),columns:r(n),layout:"fitColumns",height:300,editFormProps:T,confirmDelete:!0,autoHeightResize:!0}},tab2:{users2:{id:"users2",component:l,headerLabel:"Пользователи 2",columnDefaults:r(m),columns:r(n),layout:"fitColumns",height:300,editFormProps:I,confirmDelete:!0,autoHeightResize:!0}}}}},width:900,buttons:s(a)},x=()=>{const t=i.useCallback(()=>{a.open("update",{dataSet:{users1:r(d),users2:r(d)}})},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a several TabulatorGrid fields in tabs"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(f,{onClick:t,children:"Open form"}),o.jsx(F,{...j})]})]})},A=i.lazy(()=>c(()=>import("./index-C2SUEjL0.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),X=t=>o.jsxs(C,{children:[o.jsx("div",{children:o.jsx(x,{})}),o.jsx(b,{}),o.jsx("div",{children:o.jsx(P,{items:[{key:1,label:"Show source",children:o.jsx(i.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(A,{language:"tsx",style:t.darkMode?D:g,showLineNumbers:!0,children:`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {DFormModal, IDFormModalApi, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {ITabulatorGridFieldProps, TabulatorGridField} from @krinopotam/ui-kit/dForm/fields/tabulatorGrid/tabulatorGridField';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {FormLayoutSwitch} from '../../common/buttonsProps';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../data/tabulatorData';
import {ITabsFieldProps, TabsField} from @krinopotam/ui-kit/dForm/fields/tabs';
import {CloneObject} from "@krinopotam/js-helpers/helpersObjects/cloneObject";
const formApi = {} as IDFormModalApi;
const editFormApi = {} as IDFormModalApi;
const editFormApi2 = {} as IDFormModalApi;
/** Tabulator edit form props */
const editFormProps: IDFormModalProps = {
    apiRef: editFormApi,
    formId: 'formWithGrid',
    fieldsProps: {
        name: {component: InputField, label: 'Name'},
        age: {component: InputField, label: 'Age'},
        col: {component: InputField, label: 'Favourite Color'},
        dob: {component: InputField, label: 'Day of Birth'},
    },
    confirmChanges: true,
    buttons: FormLayoutSwitch(editFormApi),
};
const editFormProps2: IDFormModalProps = {
    apiRef: editFormApi2,
    formId: 'formWithGrid',
    fieldsProps: {
        name: {component: InputField, label: 'Name'},
        age: {component: InputField, label: 'Age'},
        col: {component: InputField, label: 'Favourite Color'},
        dob: {component: InputField, label: 'Day of Birth'},
    },
    confirmChanges: true,
    buttons: FormLayoutSwitch(editFormApi2),
};
/** main modal form props */
const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    height:300,
    fieldsProps: {
        tabs: {
            component: TabsField,
            autoHeightResize:true,
            tabs: {
                tab1: {
                    users1: {
                        id:'users1',
                        component: TabulatorGridField,
                        headerLabel: 'Пользователи 1',
                        columnDefaults:CloneObject(TabulatorBaseColumnsDef),
                        columns: CloneObject(TabulatorBaseColumns),
                        layout: 'fitColumns',
                        height: 300,
                        editFormProps: editFormProps,
                        confirmDelete: true,
                        autoHeightResize:true,
                    } as ITabulatorGridFieldProps,
                },
                tab2: {
                    users2: {
                        id:'users2',
                        component: TabulatorGridField,
                        headerLabel: 'Пользователи 2',
                        columnDefaults:CloneObject(TabulatorBaseColumnsDef),
                        columns: CloneObject(TabulatorBaseColumns),
                        layout: 'fitColumns',
                        height: 300,
                        editFormProps: editFormProps2,
                        confirmDelete: true,
                        autoHeightResize:true,
                    } as ITabulatorGridFieldProps,
                },
            },
        } as ITabsFieldProps,
    },
    width: 900,
    buttons: FormLayoutSwitch(formApi),
};
export const FormWithGridInTabs = (): React.JSX.Element => {
    const onClick = useCallback(() => {
        formApi.open('update', {dataSet: {users1: CloneObject(TabulatorPlainData), users2: CloneObject(TabulatorPlainData)}});
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
`})})}]})})]});export{X as Page3d08d5b56d3a4aa99130c1c0a792dd88,X as default};
