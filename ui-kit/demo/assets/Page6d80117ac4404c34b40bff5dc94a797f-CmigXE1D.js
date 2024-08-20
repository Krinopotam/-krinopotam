import{r as d,j as o,D as p}from"./index-C88KkuCB.js";import{P as c,C as f,h as b,d as h,a as F}from"./docco-ByJX3Scg.js";import{B as T}from"./messageBox-DwID5iMj.js";import{D}from"./dFormModal-BPcYJqc1.js";import{T as a}from"./tabulatorGridField-DArsD8Rw.js";import{I as t}from"./inputField-lf7PiFAE.js";import{F as u}from"./buttonsProps-DHm11dm9.js";import{a as i,b as s,T as l}from"./tabulatorData-CkYiJt45.js";import{T as P}from"./tabsField-Dky1JXa2.js";import"./dForm-Dv7JeuEm.js";import"./index-BuXson94.js";import"./modal-mTGTPhaP.js";import"./tabulatorGrid-DKkDsMvF.js";import"./EyeOutlined-RPGYlChj.js";import"./DeleteOutlined-D2DZven6.js";import"./index-CCZkxA_l.js";import"./SearchOutlined-B0z9pdPP.js";const e={},m={},n={apiRef:m,formId:"formWithGrid",fieldsProps:{name:{component:t,label:"Name"},age:{component:t,label:"Age"},col:{component:t,label:"Favourite Color"},dob:{component:t,label:"Day of Birth"}},confirmChanges:!0,buttons:u(m)},g={formId:"Test form",apiRef:e,confirmChanges:!0,bodyHeight:300,fieldsProps:{tabs:{component:P,autoHeightResize:!0,tabs:{tab1:{users1:{component:a,headerLabel:"Пользователи 1",columnDefaults:s,columns:l,layout:"fitColumns",height:300,editFormProps:n,confirmDelete:!0,autoHeightResize:!0}},tab2:{users2:{component:a,headerLabel:"Пользователи 2",columnDefaults:s,columns:l,layout:"fitColumns",height:300,editFormProps:n,confirmDelete:!0,autoHeightResize:!0}}}}},width:900,buttons:u(e)},C=()=>{const r=d.useCallback(()=>{e.open("update",{users1:i,users2:i})},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a several TabulatorGrid fields in tabs"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(T,{onClick:r,children:"Open form"}),o.jsx(D,{...g})]})]})},N=r=>o.jsxs(c,{children:[o.jsx("div",{children:o.jsx(C,{})}),o.jsx(p,{}),o.jsx("div",{children:o.jsx(f,{items:[{key:1,label:"Show source",children:o.jsx(b,{language:"javascript",style:r.darkMode?h:F,showLineNumbers:!0,children:`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {DFormModal, IDFormModalApi, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {ITabulatorGridFieldProps, TabulatorGridField} from @krinopotam/ui-kit/dForm/fields/tabulatorGrid/tabulatorGridField';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {FormLayoutSwitch} from '../../common/buttonsProps';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../data/tabulatorData';
import {ITabsFieldProps, TabsField} from @krinopotam/ui-kit/dForm/fields/tabs';
const formApi = {} as IDFormModalApi;
const editFormApi = {} as IDFormModalApi;
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
/** main modal form props */
const formProps: IDFormModalProps = {
    formId: 'Test form',
    apiRef: formApi,
    confirmChanges: true,
    bodyHeight:300,
    fieldsProps: {
        tabs: {
            component: TabsField,
            autoHeightResize:true,
            tabs: {
                tab1: {
                    users1: {
                        component: TabulatorGridField,
                        headerLabel: 'Пользователи 1',
                        columnDefaults:TabulatorBaseColumnsDef,
                        columns: TabulatorBaseColumns,
                        layout: 'fitColumns',
                        height: 300,
                        editFormProps: editFormProps,
                        confirmDelete: true,
                        autoHeightResize:true,
                    } as ITabulatorGridFieldProps,
                },
                tab2: {
                    users2: {
                        component: TabulatorGridField,
                        headerLabel: 'Пользователи 2',
                        columnDefaults:TabulatorBaseColumnsDef,
                        columns: TabulatorBaseColumns,
                        layout: 'fitColumns',
                        height: 300,
                        editFormProps: editFormProps,
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
        formApi.open('update', {users1: TabulatorPlainData, users2: TabulatorPlainData});
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
`})}]})})]});export{N as Page6d80117ac4404c34b40bff5dc94a797f,N as default};
