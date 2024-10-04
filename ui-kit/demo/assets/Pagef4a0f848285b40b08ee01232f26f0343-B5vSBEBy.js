const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BCkY1BI4.js","assets/default-highlight-BkRzspxv.js","assets/index-D4bHa_3o.js"])))=>i.map(i=>d[i]);
import{r as i,j as o,_ as c,D as f}from"./index-D4bHa_3o.js";import{B as b}from"./modal-Cje67qL2.js";import{m as r,D as F}from"./dFormModal-BCjjhs8Y.js";import{T as l}from"./tabulatorGridField-oOAvFXnu.js";import{I as e}from"./inputField-DGR4oCWc.js";import{F as s}from"./buttonsProps-DqS9-gaB.js";import{T as m,a as n,b as u}from"./tabulatorData-rU-MgCHl.js";import{T as h}from"./tabsField-CHSYaNfS.js";import{P as C,C as P,d as D,c as g}from"./darcula-DdlBXz-Q.js";import"./dForm-3m-O6pho.js";import"./index-BrKQ3NvS.js";import"./modal-B1kKEzi9.js";import"./tabulatorGrid-DeNUCISi.js";import"./defaultButtonsProps-D413j251.js";import"./index-BVoWYqDG.js";import"./index-D0MhsY60.js";import"./SearchOutlined-C-5aAKd9.js";import"./index-ohDy-Hm0.js";const a={},d={},p={},T={apiRef:d,formId:"formWithGrid",fieldsProps:{name:{component:e,label:"Name"},age:{component:e,label:"Age"},col:{component:e,label:"Favourite Color"},dob:{component:e,label:"Day of Birth"}},confirmChanges:!0,buttons:s(d)},I={apiRef:p,formId:"formWithGrid",fieldsProps:{name:{component:e,label:"Name"},age:{component:e,label:"Age"},col:{component:e,label:"Favourite Color"},dob:{component:e,label:"Day of Birth"}},confirmChanges:!0,buttons:s(p)},j={formId:"Test form",apiRef:a,confirmChanges:!0,height:300,fieldsProps:{tabs:{component:h,autoHeightResize:!0,tabs:{tab1:{users1:{id:"users1",component:l,headerLabel:"Пользователи 1",columnDefaults:r(m),columns:r(n),layout:"fitColumns",height:300,editFormProps:T,confirmDelete:!0,autoHeightResize:!0}},tab2:{users2:{id:"users2",component:l,headerLabel:"Пользователи 2",columnDefaults:r(m),columns:r(n),layout:"fitColumns",height:300,editFormProps:I,confirmDelete:!0,autoHeightResize:!0}}}}},width:900,buttons:s(a)},x=()=>{const t=i.useCallback(()=>{a.open("update",{dataSet:{users1:r(u),users2:r(u)}})},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a several TabulatorGrid fields in tabs"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(b,{onClick:t,children:"Open form"}),o.jsx(F,{...j})]})]})},A=i.lazy(()=>c(()=>import("./index-BCkY1BI4.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),X=t=>o.jsxs(C,{children:[o.jsx("div",{children:o.jsx(x,{})}),o.jsx(f,{}),o.jsx("div",{children:o.jsx(P,{items:[{key:1,label:"Show source",children:o.jsx(i.Suspense,{fallback:o.jsx("div",{children:"Loading source..."}),children:o.jsx(A,{language:"tsx",style:t.darkMode?D:g,showLineNumbers:!0,children:`
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
`})})}]})})]});export{X as Pagef4a0f848285b40b08ee01232f26f0343,X as default};
