const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Cs1HhVBL.js","assets/default-highlight-PwdVU7L6.js","assets/index-CNGiMTrA.js"])))=>i.map(i=>d[i]);
import{j as e,r as o,_ as r,D as a}from"./index-CNGiMTrA.js";import{T as l}from"./tabulatorGrid-C2BdhVJ6.js";import{T as d}from"./tabsField-BpXq8seB.js";import{I as i}from"./inputField-B4IJanij.js";import{T as m}from"./textAreaField-CfBj1_qv.js";import{T as n}from"./tabulatorGridField-D-R1xypf.js";import{S as s}from"./selectField--lGPIZgT.js";import{P as u,C as p,d as c,c as F}from"./darcula-BjE4oQkF.js";import"./modal-DVHWH6Qh.js";import"./dForm-DmRsT3BS.js";import"./index-u-jxti1R.js";import"./dFormModal-Clfa5FkM.js";import"./modal-BKWxOyv5.js";import"./defaultButtonsProps-YE4_7d0V.js";import"./index-UyGeAaCN.js";import"./index-BYrcsQQ_.js";import"./index-B9vEfmTq.js";import"./SearchOutlined-DGkPMlC6.js";import"./useShowArrow-D-EuJM8o.js";import"./useIcons-B7FuD7ir.js";const f=[{field:"num",title:"№",formatter:"rownum",accessor:"rownum",width:50},{field:"name",title:"Наименование",headerFilter:!0,headerFilterFunc:"like"},{field:"format.label",title:"Формат",headerFilter:!0,headerFilterFunc:"like"}],b=[{field:"num",title:"№",formatter:"rownum",accessor:"rownum",width:50},{field:"name",title:"Наименование",headerFilter:!0,headerFilterFunc:"like"},{field:"shortName",title:"Краткое наименование",headerFilter:!0,headerFilterFunc:"like"},{field:"code",title:"Код",headerFilter:!0,headerFilterFunc:"like"}],h=[{id:"01",name:"1С Зарплата и управление персоналом",shortName:"1С ЗиУП",code:"1C_ZIUP",inputs:[{id:"01",name:"Штатная расстановка",format:{id:"01",label:"JSON"}},{id:"02",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"021",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"022",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"023",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"024",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"025",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"026",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"027",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"028",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"029",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"0210",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"0211",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"0212",name:"Адресная книга",format:{id:"03",label:"XML"}}],outputs:[{id:"04",name:"Товарная накладная",format:{id:"02",label:"PDF"}}]},{id:"02",name:"1С Бухгалтерия",shortName:"1С BuNU",code:"1C_BUNU"},{id:"03",name:"SAP Кадровый модуль",shortName:"SAP HT",code:"SAP_HR"}],P=[{id:"01",label:"JSON",description:"Файлы в формате JSON"},{id:"02",label:"PDF",description:"Файлы в формате PDF"},{id:"03",label:"XML",description:"Файлы в формате PDF"},{id:"04",label:"PNG",description:"Файлы в формате PNG"},{id:"05",label:"JPEG",description:"Файлы в формате JPEG"}],L={confirmChanges:!0,height:300,fieldsProps:{name:{component:i,label:"Наименование"},shortName:{component:i,label:"Краткое наименование"},format:{component:s,label:"Формат",dataSet:P,fullItemValue:!0},description:{component:m,label:"Описание",autoSize:!0}}},M={confirmChanges:!0,height:400,width:600,fieldsProps:{tabs1:{component:d,autoResize:!0,tabs:{" Входы ":{inputs:{component:n,columns:f,headerFilterHidden:!0,height:"320px",autoResize:!0,layout:"fitColumns",editFormProps:L}}}}}},S=()=>e.jsx(l,{columns:b,dataSet:h,layout:"fitColumns",movableColumns:!0,buttonsSize:"middle",editFormProps:M,height:"100%",buttons:{title:{type:"element",title:e.jsx("b",{style:{fontSize:18},children:"Системы"}),position:"left"}}}),T=o.lazy(()=>r(()=>import("./index-Cs1HhVBL.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),O=t=>e.jsxs(u,{children:[e.jsx("div",{children:e.jsx(S,{})}),e.jsx(a,{}),e.jsx("div",{children:e.jsx(p,{items:[{key:1,label:"Show source",children:e.jsx(o.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(T,{language:"tsx",style:t.darkMode?c:F,showLineNumbers:!0,children:`
import React from 'react';
import {TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {ITabulatorColumn} from @krinopotam/ui-kit/tabulatorBase';
import {IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {TabsField} from @krinopotam/ui-kit/dForm/fields/tabs/tabsField';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import { TextAreaField} from @krinopotam/ui-kit/dForm/fields/textArea/textAreaField';
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
    height: 300,
    fieldsProps: {
        name: {component: InputField, label: 'Наименование'},
        shortName: {component: InputField, label: 'Краткое наименование'},
        format: {component: SelectField, label: 'Формат', dataSet: FormatsList, fullItemValue: true},
        description: {component: TextAreaField, label: 'Описание', autoSize: true},
    },
};
const editFormProps: IDFormModalProps = {
    confirmChanges: true,
    height: 400,
    width: 600,
    fieldsProps: {
        tabs1: {
            component: TabsField,
            autoResize:true,
            tabs: {
                /*                " Основные ": {
                                    name: {component: InputField, label: 'Наименование'},
                                    shortName: {component: InputField, label: 'Краткое наименование'},
                                    code: {component: InputField, label: 'Код'},
                                    description: {component: TextAreaField, label: 'Описание', autoSize: true} as ITextAreaFieldProps,
                                },
                                " Доступ ": {
                                    address: {component: InputField, label: 'Адрес'},
                                    login: {component: InputField, label: 'Логин'},
                                    password: {component: PasswordField, label: 'Пароль'},
                                },*/
                ' Входы ': {
                    inputs: {
                        component: TabulatorGridField,
                        columns: TagsColumns,
                        headerFilterHidden: true,
                        height: '320px',
                        autoResize:true,
                        //resizeHeightWithForm: true,
                        layout: 'fitColumns',
                        editFormProps: inputsFormProps,
                        //value: [{id: '111', name: '3232', format: {id: 1, label: '111'}}],
                    } satisfies ITabulatorGridFieldProps,
                },
                /*                " Выходы ": {
                                    outputs: {component: TabulatorGridField, columns: TagsColumns, headerFilterHidden: true, height: '320px', resizeHeightWithForm: true, layout: 'fitColumns',editFormProps: inputsFormProps} as ITabulatorGridFieldProps,
                                }*/
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
`})})}]})})]});export{O as Pagee336005a8fd64c06a8e62585c8869c90,O as default};
