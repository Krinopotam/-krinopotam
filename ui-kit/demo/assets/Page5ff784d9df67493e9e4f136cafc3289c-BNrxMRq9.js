const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BCkY1BI4.js","assets/default-highlight-BkRzspxv.js","assets/index-D4bHa_3o.js"])))=>i.map(i=>d[i]);
import{j as e,r as a,_ as n,D as m}from"./index-D4bHa_3o.js";import{I as d}from"./dForm-3m-O6pho.js";import{P as p}from"./passwordField-BwrDeCTC.js";import{T as u}from"./treeSelectField-BMcCeLPz.js";import{T as c}from"./tabulatorGrid-DeNUCISi.js";import{T as f}from"./tabsField-CHSYaNfS.js";import{I as i}from"./inputField-DGR4oCWc.js";import{T as s}from"./textAreaField-bsrkKAAn.js";import{T as o}from"./tabulatorGridField-oOAvFXnu.js";import{S as F}from"./selectField-1lx3eaiV.js";import{P as b,C as h,d as P,c as I}from"./darcula-DdlBXz-Q.js";import"./modal-Cje67qL2.js";import"./index-BrKQ3NvS.js";import"./index-D0MhsY60.js";import"./SearchOutlined-C-5aAKd9.js";import"./dFormModal-BCjjhs8Y.js";import"./modal-B1kKEzi9.js";import"./defaultButtonsProps-D413j251.js";import"./useApiGetGroupsOnly-T5Kwr76U.js";import"./useShowArrow-DkzcVp1t.js";import"./useIcons-DVS72p3F.js";import"./index-BVoWYqDG.js";import"./index-ohDy-Hm0.js";const l=[{field:"num",title:"№",formatter:"rownum",accessor:"rownum",width:50},{field:"name",title:"Наименование",headerFilter:!0,headerFilterFunc:"like"},{field:"format.label",title:"Формат",headerFilter:!0,headerFilterFunc:"like"}],S=[{field:"num",title:"№",formatter:"rownum",accessor:"rownum",width:50},{field:"name",title:"Наименование",headerFilter:!0,headerFilterFunc:"like"},{field:"shortName",title:"Краткое наименование",headerFilter:!0,headerFilterFunc:"like"},{field:"code",title:"Код",headerFilter:!0,headerFilterFunc:"like"}],T=[{id:"01",name:"1С Зарплата и управление персоналом",shortName:"1С ЗиУП",code:"1C_ZIUP",inputs:[{id:"01",name:"Штатная расстановка",format:{id:"01",label:"JSON"}},{id:"02",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"021",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"022",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"023",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"024",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"025",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"026",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"027",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"028",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"029",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"0210",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"0211",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"0212",name:"Адресная книга",format:{id:"03",label:"XML"}}],outputs:[{id:"04",name:"Товарная накладная",format:{id:"02",label:"PDF"}}]},{id:"02",name:"1С Бухгалтерия",shortName:"1С BuNU",code:"1C_BUNU"},{id:"03",name:"SAP Кадровый модуль",shortName:"SAP HT",code:"SAP_HR"}],g=[{id:"01",label:"JSON",description:"Файлы в формате JSON"},{id:"02",label:"PDF",description:"Файлы в формате PDF"},{id:"03",label:"XML",description:"Файлы в формате PDF"},{id:"04",label:"PNG",description:"Файлы в формате PNG"},{id:"05",label:"JPEG",description:"Файлы в формате JPEG"}],L=[{id:"01",title:"Тег 1"},{id:"02",title:"Тег 2"},{id:"03",title:"Тег 3"},{id:"04",title:"Тег 4"},{id:"05",title:"Тег 5"},{id:"06",title:"Тег 6"},{id:"07",title:"Тег 7"},{id:"08",title:"Тег 8"},{id:"09",title:"Тег 9"},{id:"10",title:"Тег 10"},{id:"11",title:"Тег 11"},{id:"12",title:"Тег 12"},{id:"13",title:"Тег 13"},{id:"14",title:"Тег 14"},{id:"15",title:"Тег 15"},{id:"16",title:"Тег 16"}],r={confirmChanges:!1,height:400,fieldsProps:{inline1:{component:d,fieldsProps:{name:{component:i,label:"Наименование"},format:{component:F,label:"Формат",dataSet:g,fullItemValue:!0}}},description:{component:s,label:"Описание",autoSize:!0}}},k=()=>({confirmChanges:!0,height:500,width:600,fieldsProps:{tabs1:{component:f,autoHeightResize:!0,tabs:{Основные:{inline1:{component:d,fieldsProps:{code:{component:i,label:"Код",width:100},shortName:{component:i,label:"Наименование"}}},name:{component:i,label:"Полное наименование"},tags:{component:u,label:"Теги",multiple:!0,dataSet:L},description:{component:s,label:"Описание",autoSize:!0}},Доступ:{address:{component:i,label:"Адрес"},login:{component:i,label:"Логин"},password:{component:p,label:"Пароль"}},Входы:{inputs:{component:o,columns:l,headerFilterHidden:!0,height:"300px",autoHeightResize:!0,layout:"fitColumns",editFormProps:r}},Выходы:{outputs:{component:o,columns:l,headerFilterHidden:!0,height:"300px",autoHeightResize:!0,layout:"fitColumns",editFormProps:r}}}}}}),x=()=>{const t=k();return e.jsx(c,{columns:S,dataSet:T,layout:"fitColumns",movableColumns:!0,buttonsSize:"middle",editFormProps:t,height:"100%",buttons:{title:{type:"element",title:e.jsx("b",{style:{fontSize:18},children:"Системы"}),position:"left"}}})},M=a.lazy(()=>n(()=>import("./index-BCkY1BI4.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),Q=t=>e.jsxs(b,{children:[e.jsx("div",{children:e.jsx(x,{})}),e.jsx(m,{}),e.jsx("div",{children:e.jsx(h,{items:[{key:1,label:"Show source",children:e.jsx(a.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(M,{language:"tsx",style:t.darkMode?P:I,showLineNumbers:!0,children:`
import {IInlineGroupFieldProps, InlineGroupField} from @krinopotam/ui-kit/dForm/fields/inlineGroup';
import {IPasswordFieldProps, PasswordField} from @krinopotam/ui-kit/dForm/fields/password';
import {ITreeSelectFieldProps, TreeSelectField} from @krinopotam/ui-kit/dForm/fields/treeSelect';
import React from 'react';
import {TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {ITabulatorColumn} from @krinopotam/ui-kit/tabulatorBase';
import {IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {TabsField} from @krinopotam/ui-kit/dForm/fields/tabs/tabsField';
import {IInputFieldProps, InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {ITextAreaFieldProps, TextAreaField} from @krinopotam/ui-kit/dForm/fields/textArea/textAreaField';
import {ITabulatorGridFieldProps, TabulatorGridField} from @krinopotam/ui-kit/dForm/fields/tabulatorGrid/tabulatorGridField';
import {ISelectFieldProps, SelectField} from @krinopotam/ui-kit/dForm/fields/select';
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
const tagsList = [
    {id: '01', title: 'Тег 1'},
    {id: '02', title: 'Тег 2'},
    {id: '03', title: 'Тег 3'},
    {id: '04', title: 'Тег 4'},
    {id: '05', title: 'Тег 5'},
    {id: '06', title: 'Тег 6'},
    {id: '07', title: 'Тег 7'},
    {id: '08', title: 'Тег 8'},
    {id: '09', title: 'Тег 9'},
    {id: '10', title: 'Тег 10'},
    {id: '11', title: 'Тег 11'},
    {id: '12', title: 'Тег 12'},
    {id: '13', title: 'Тег 13'},
    {id: '14', title: 'Тег 14'},
    {id: '15', title: 'Тег 15'},
    {id: '16', title: 'Тег 16'},
];
const inputsFormProps: IDFormModalProps = {
    confirmChanges: false,
    height: 400,
    fieldsProps: {
        inline1: {
            component: InlineGroupField,
            fieldsProps: {
                name: {component: InputField, label: 'Наименование'},
                format: {component: SelectField, label: 'Формат', dataSet: FormatsList, fullItemValue: true} satisfies ISelectFieldProps,
            },
        } satisfies IInlineGroupFieldProps,
        description: {component: TextAreaField, label: 'Описание', autoSize: true},
    },
};
const useEditFormProps = () => {
    return {
        confirmChanges: true,
        height: 500,
        width: 600,
        fieldsProps: {
            tabs1: {
                component: TabsField,
                autoHeightResize: true,
                tabs: {
                    ['Основные']: {
                        inline1: {
                            component: InlineGroupField,
                            fieldsProps: {
                                code: {component: InputField, label: 'Код', width: 100} satisfies IInputFieldProps,
                                shortName: {component: InputField, label: 'Наименование'} satisfies IInputFieldProps,
                            },
                        } satisfies IInlineGroupFieldProps,
                        name: {component: InputField, label: 'Полное наименование'} satisfies IInputFieldProps,
                        tags: {
                            component: TreeSelectField,
                            label: 'Теги',
                            multiple: true,
                            dataSet: tagsList,
                        } satisfies ITreeSelectFieldProps,
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
                            autoHeightResize: true,
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
                            autoHeightResize: true,
                            layout: 'fitColumns',
                            editFormProps: inputsFormProps,
                        } as ITabulatorGridFieldProps,
                    },
                },
            },
        },
    } satisfies IDFormModalProps;
};
export const WithComplexForm = (): React.JSX.Element => {
    const editFormProps = useEditFormProps();
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
`})})}]})})]});export{Q as Page5ff784d9df67493e9e4f136cafc3289c,Q as default};
