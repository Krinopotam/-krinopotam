import{r as p,j as o,D as c}from"./index-0409158c.js";import{P as f,C as b,S as h,d as F,a as T}from"./docco-fa9c9fcc.js";import{B as D}from"./index-da9b0dd9.js";import{D as P}from"./dFormModal-235aed86.js";import{T as a}from"./tabulatorGridField-c42e486a.js";import{I as t}from"./inputField-76b34995.js";import{F as u}from"./buttonsProps-1fa0e94e.js";import{b as i,T as s,a as l}from"./tabulatorData-fbb7c043.js";import{T as g}from"./tabsField-40c53f46.js";import"./tabulatorGrid-22da0f8d.js";import"./EyeOutlined-c44a8289.js";import"./DeleteOutlined-75656d28.js";import"./index-17293d60.js";import"./SearchOutlined-d2aaca99.js";const e={},m={},n={apiRef:m,formId:"formWithGrid",fieldsProps:{name:{component:t,label:"Name"},age:{component:t,label:"Age"},col:{component:t,label:"Favourite Color"},dob:{component:t,label:"Day of Birth"}},confirmChanges:!0,buttons:u(m)},C={formId:"Test form",apiRef:e,confirmChanges:!0,bodyHeight:300,fieldsProps:{tabs:{component:g,autoHeightResize:!0,tabs:{tab1:{users1:{component:a,headerLabel:"Пользователи 1",columnDefaults:s,columns:l,layout:"fitColumns",height:300,editFormProps:n,confirmDelete:!0,autoHeightResize:!0}},tab2:{users2:{component:a,headerLabel:"Пользователи 2",columnDefaults:s,columns:l,layout:"fitColumns",height:300,editFormProps:n,confirmDelete:!0,autoHeightResize:!0}}}}},width:900,buttons:u(e)},I=()=>{const r=p.useCallback(()=>{e.open("update",{users1:i,users2:i})},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Example of a modal form with a several TabulatorGrid fields in tabs"}),o.jsxs("div",{style:{maxWidth:500},children:[o.jsx(D,{onClick:r,children:"Open form"}),o.jsx(P,{...C})]})]})},z=r=>{const d=`
import React, {useCallback} from 'react';
import {Button} from @krinopotam/ui-kit/button';
import {DFormModal, IDFormModalApi, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {ITabulatorGridFieldProps, TabulatorGridField} from @krinopotam/ui-kit/dForm/fields/tabulatorGrid/tabulatorGridField';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {FormLayoutSwitch} from '../../common/buttonsProps';
import {TabulatorBaseColumns, TabulatorBaseColumnsDef, TabulatorPlainData} from '../../data/tabulatorData';
import {ITabsFieldProps, TabsField} from @krinopotam/ui-kit/dForm';
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
`;return o.jsxs(f,{children:[o.jsx("div",{children:o.jsx(I,{})}),o.jsx(c,{}),o.jsx("div",{children:o.jsx(b,{items:[{key:1,label:"Show source",children:o.jsx(h,{language:"javascript",style:r.darkMode?F:T,showLineNumbers:!0,children:d})}]})})]})};export{z as Page17aa235ef7834bbb81cd0d97b721f884,z as default};
