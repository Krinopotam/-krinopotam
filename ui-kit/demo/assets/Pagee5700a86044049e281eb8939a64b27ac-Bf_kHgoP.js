const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-HHVvrn9L.js","assets/default-highlight-Bg-yw1Xy.js","assets/index-C4KfxKt0.js"])))=>i.map(i=>d[i]);
import{j as e,r as l,_ as m,D as n}from"./index-C4KfxKt0.js";import{P as s}from"./passwordField-NHDAhQx4.js";import{T as u}from"./tabulatorGrid-CPBHSndK.js";import{T as p}from"./tabsField-PfHP7riO.js";import{I as t}from"./inputField-DP4apb2P.js";import{T as d}from"./textAreaField-b0aPx7Gd.js";import{T as o}from"./tabulatorGridField-Cj8FLCet.js";import{S as c}from"./selectField-B8p9NJUs.js";import{P as F,C as f,d as b,c as h}from"./darcula-Dn2EXRAk.js";import"./dForm-DkkmO2de.js";import"./modal-B9kdAnYE.js";import"./index-kYmYzKiJ.js";import"./index-DguPym-O.js";import"./SearchOutlined-1XjRaxWd.js";import"./dFormModal-NILuEzR7.js";import"./modal-DhSU9O67.js";import"./defaultButtonsProps-DB_b1JyB.js";import"./index-BK8ljC1v.js";import"./index-CJiopV48.js";import"./useShowArrow-Bin-bzmW.js";import"./useIcons-Dh6q2bL1.js";const r=[{field:"num",title:"№",formatter:"rownum",accessor:"rownum",width:50},{field:"name",title:"Наименование",headerFilter:!0,headerFilterFunc:"like"},{field:"format.label",title:"Формат",headerFilter:!0,headerFilterFunc:"like"}],P=[{field:"num",title:"№",formatter:"rownum",accessor:"rownum",width:50},{field:"name",title:"Наименование",headerFilter:!0,headerFilterFunc:"like"},{field:"shortName",title:"Краткое наименование",headerFilter:!0,headerFilterFunc:"like"},{field:"code",title:"Код",headerFilter:!0,headerFilterFunc:"like"}],I=[{id:"01",name:"1С Зарплата и управление персоналом",shortName:"1С ЗиУП",code:"1C_ZIUP",inputs:[{id:"01",name:"Штатная расстановка",format:{id:"01",label:"JSON"}},{id:"02",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"021",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"022",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"023",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"024",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"025",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"026",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"027",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"028",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"029",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"0210",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"0211",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"0212",name:"Адресная книга",format:{id:"03",label:"XML"}}],outputs:[{id:"04",name:"Товарная накладная",format:{id:"02",label:"PDF"}}]},{id:"02",name:"1С Бухгалтерия",shortName:"1С BuNU",code:"1C_BUNU"},{id:"03",name:"SAP Кадровый модуль",shortName:"SAP HT",code:"SAP_HR"}],L=[{id:"01",label:"JSON",description:"Файлы в формате JSON"},{id:"02",label:"PDF",description:"Файлы в формате PDF"},{id:"03",label:"XML",description:"Файлы в формате PDF"},{id:"04",label:"PNG",description:"Файлы в формате PNG"},{id:"05",label:"JPEG",description:"Файлы в формате JPEG"}],a={confirmChanges:!0,height:400,fieldsProps:{name:{component:t,label:"Наименование"},shortName:{component:t,label:"Краткое наименование"},format:{component:c,label:"Формат",dataSet:L,fullItemValue:!0},description:{component:d,label:"Описание",autoSize:!0}}},S={confirmChanges:!0,height:500,width:600,fieldsProps:{tabs1:{component:p,autoHeightResize:!0,tabs:{Основные:{name:{component:t,label:"Наименование"},shortName:{component:t,label:"Краткое наименование"},code:{component:t,label:"Код"},description:{component:d,label:"Описание",autoSize:!0}},Доступ:{address:{component:t,label:"Адрес"},login:{component:t,label:"Логин"},password:{component:s,label:"Пароль"}},Входы:{inputs:{component:o,columns:r,headerFilterHidden:!0,height:"300px",autoHeightResize:!0,layout:"fitColumns",editFormProps:a}},Выходы:{outputs:{component:o,columns:r,headerFilterHidden:!0,height:"300px",autoHeightResize:!0,layout:"fitColumns",editFormProps:a}}}}}},g=()=>e.jsx(u,{columns:P,dataSet:I,layout:"fitColumns",movableColumns:!0,buttonsSize:"middle",editFormProps:S,height:"100%",buttons:{title:{type:"element",title:e.jsx("b",{style:{fontSize:18},children:"Системы"}),position:"left"}}}),x=l.lazy(()=>m(()=>import("./index-HHVvrn9L.js").then(i=>i.ds),__vite__mapDeps([0,1,2])).then(i=>({default:i.Prism}))),V=i=>e.jsxs(F,{children:[e.jsx("div",{children:e.jsx(g,{})}),e.jsx(n,{}),e.jsx("div",{children:e.jsx(f,{items:[{key:1,label:"Show source",children:e.jsx(l.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(x,{language:"tsx",style:i.darkMode?b:h,showLineNumbers:!0,children:`
import {IPasswordFieldProps, PasswordField} from @krinopotam/ui-kit/dForm/fields/password';
import React from 'react';
import {TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {ITabulatorColumn} from @krinopotam/ui-kit/tabulatorBase';
import {IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {TabsField} from @krinopotam/ui-kit/dForm/fields/tabs/tabsField';
import {IInputFieldProps, InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {ITextAreaFieldProps, TextAreaField} from @krinopotam/ui-kit/dForm/fields/textArea/textAreaField';
import {ITabulatorGridFieldProps, TabulatorGridField} from @krinopotam/ui-kit/dForm/fields/tabulatorGrid/tabulatorGridField';
import {SelectField} from @krinopotam/ui-kit/dForm/fields/select';
export const TagsColumns: ITabulatorColumn[] = [
    {field: 'num', title: '№', formatter: 'rownum', accessor: 'rownum', width: 50},
    {field: 'name', title: 'Наименование', headerFilter: true, headerFilterFunc: 'like'},
    {field: 'format.label', title: 'Формат', headerFilter: true, headerFilterFunc: 'like'},
];
const columns: ITabulatorColumn[] = [
    {field: 'num', title: '№', formatter: 'rownum', accessor: 'rownum', width: 50},
    {field: 'name', title: 'Наименование', headerFilter: true, headerFilterFunc: 'like'},
    {field: 'shortName', title: 'Краткое наименование', headerFilter: true, headerFilterFunc: 'like'},
    {field: 'code', title: 'Код', headerFilter: true, headerFilterFunc: 'like'},
];
const dataSet = [
    {
        id: '01',
        name: '1С Зарплата и управление персоналом',
        shortName: '1С ЗиУП',
        code: '1C_ZIUP',
        inputs: [
            {id: '01', name: 'Штатная расстановка', format: {id: '01', label: 'JSON'}},
            {id: '02', name: 'Адресная книга', format: {id: '03', label: 'XML'}},
            {id: '021', name: 'Адресная книга', format: {id: '03', label: 'XML'}},
            {id: '022', name: 'Адресная книга', format: {id: '03', label: 'XML'}},
            {id: '023', name: 'Адресная книга', format: {id: '03', label: 'XML'}},
            {id: '024', name: 'Адресная книга', format: {id: '03', label: 'XML'}},
            {id: '025', name: 'Адресная книга', format: {id: '03', label: 'XML'}},
            {id: '026', name: 'Адресная книга', format: {id: '03', label: 'XML'}},
            {id: '027', name: 'Адресная книга', format: {id: '03', label: 'XML'}},
            {id: '028', name: 'Адресная книга', format: {id: '03', label: 'XML'}},
            {id: '029', name: 'Адресная книга', format: {id: '03', label: 'XML'}},
            {id: '0210', name: 'Адресная книга', format: {id: '03', label: 'XML'}},
            {id: '0211', name: 'Адресная книга', format: {id: '03', label: 'XML'}},
            {id: '0212', name: 'Адресная книга', format: {id: '03', label: 'XML'}},
        ],
        outputs: [{id: '04', name: 'Товарная накладная', format: {id: '02', label: 'PDF'}}],
    },
    {id: '02', name: '1С Бухгалтерия', shortName: '1С BuNU', code: '1C_BUNU'},
    {id: '03', name: 'SAP Кадровый модуль', shortName: 'SAP HT', code: 'SAP_HR'},
];
const FormatsList = [
    {id: '01', label: 'JSON', description: 'Файлы в формате JSON'},
    {id: '02', label: 'PDF', description: 'Файлы в формате PDF'},
    {id: '03', label: 'XML', description: 'Файлы в формате PDF'},
    {id: '04', label: 'PNG', description: 'Файлы в формате PNG'},
    {id: '05', label: 'JPEG', description: 'Файлы в формате JPEG'},
];
const inputsFormProps: IDFormModalProps = {
    confirmChanges: true,
    height: 400,
    fieldsProps: {
        name: {component: InputField, label: 'Наименование'},
        shortName: {component: InputField, label: 'Краткое наименование'},
        format: {component: SelectField, label: 'Формат', dataSet: FormatsList, fullItemValue: true},
        description: {component: TextAreaField, label: 'Описание', autoSize: true},
    },
};
const editFormProps: IDFormModalProps = {
    confirmChanges: true,
    height: 500,
    width: 600,
    fieldsProps: {
        tabs1: {
            component: TabsField,
            autoHeightResize:true,
            tabs: {
                ['Основные']: {
                    name: {component: InputField, label: 'Наименование'} satisfies IInputFieldProps,
                    shortName: {component: InputField, label: 'Краткое наименование'} satisfies IInputFieldProps,
                    code: {component: InputField, label: 'Код'} satisfies IInputFieldProps,
                    description: {
                        component: TextAreaField,
                        label: 'Описание',
                        autoSize: true,
                    } satisfies ITextAreaFieldProps,
                },
                ['Доступ']: {
                    address: {component: InputField, label: 'Адрес'} satisfies IInputFieldProps,
                    login: {component: InputField, label: 'Логин'} satisfies IInputFieldProps,
                    password: {component: PasswordField, label: 'Пароль'} satisfies IPasswordFieldProps,
                },
                ['Входы']: {
                    inputs: {
                        component: TabulatorGridField,
                        columns: TagsColumns,
                        headerFilterHidden: true,
                        height: '300px',
                        autoHeightResize:true,
                        layout: 'fitColumns',
                        editFormProps: inputsFormProps,
                        //value: [{id: '111', name: '3232', format: {id: 1, label: '111'}}],
                    } satisfies ITabulatorGridFieldProps,
                },
                ['Выходы']: {
                    outputs: {
                        component: TabulatorGridField,
                        columns: TagsColumns,
                        headerFilterHidden: true,
                        height: '300px',
                        autoHeightResize:true,
                        layout: 'fitColumns',
                        editFormProps: inputsFormProps,
                    } as ITabulatorGridFieldProps,
                },
            },
        },
    },
};
export const WithComplexForm = (): React.JSX.Element => {
    return (
        <TabulatorGrid
            columns={columns}
            dataSet={dataSet}
            layout={'fitColumns'}
            movableColumns
            buttonsSize={'middle'}
            editFormProps={editFormProps}
            height={'100%'}
            buttons={{title: {type: 'element', title: <b style={{fontSize: 18}}>Системы</b>, position: 'left'}}}
        />
    );
};
`})})}]})})]});export{V as Pagee5700a86044049e281eb8939a64b27ac,V as default};
