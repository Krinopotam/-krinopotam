const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-UHTfNfHP.js","assets/default-highlight-BW2eIfdj.js","assets/index-fLDE7RV8.js"])))=>i.map(i=>d[i]);
import{j as e,r as a,_ as s,D as m}from"./index-fLDE7RV8.js";import{I as d}from"./dForm-DcZj9aOC.js";import{P as p}from"./passwordField-CmCtHx2T.js";import{T as u}from"./treeSelectField-BrPQtOSY.js";import{T as c}from"./tabulatorGrid-BJwlOlPS.js";import{T as F}from"./tabsField-B0v8U2YI.js";import{I as i}from"./inputField-CjWubR6e.js";import{T as n}from"./textAreaField-VgtgLb5F.js";import{T as o}from"./tabulatorGridField-DZZlCS7S.js";import{S as f}from"./selectField-DduBBaA6.js";import{P as b,C as h,d as P,c as I}from"./darcula-BAaai0cd.js";import"./mergeButtons-5jDhs16v.js";import"./modal-CJqMGIFI.js";import"./index-Dm8OxE-t.js";import"./index-BoVgkjiJ.js";import"./SearchOutlined-bm7ljvup.js";import"./dFormModal-BONKQnKH.js";import"./modal-DKiW44iu.js";import"./defaultButtonsProps-BRD3xjmK.js";import"./useApiGetGroupsOnly-DmM5f8UP.js";import"./useShowArrow-Cn6xTPHQ.js";import"./useIcons-C467XfOT.js";import"./index-CTvaTwjg.js";import"./index-Bk2xzZot.js";const l=[{field:"num",title:"№",formatter:"rownum",accessor:"rownum",width:50},{field:"name",title:"Наименование",headerFilter:!0,headerFilterFunc:"like"},{field:"format.label",title:"Формат",headerFilter:!0,headerFilterFunc:"like"}],S=[{field:"num",title:"№",formatter:"rownum",accessor:"rownum",width:50,vertAlign:"middle"},{field:"name",title:"Наименование",headerFilter:!0,headerFilterFunc:"like",vertAlign:"middle"},{field:"shortName",title:"Краткое наименование",headerFilter:!0,headerFilterFunc:"like",vertAlign:"middle"},{field:"code",title:"Код",headerFilter:!0,headerFilterFunc:"like",vertAlign:"middle"}],g=[{id:"01",name:"1С Зарплата и управление персоналом",shortName:"1С ЗиУП",code:"1C_ZIUP",inputs:[{id:"01",name:"Штатная расстановка",format:{id:"01",label:"JSON"}},{id:"02",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"021",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"022",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"023",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"024",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"025",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"026",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"027",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"028",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"029",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"0210",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"0211",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"0212",name:"Адресная книга",format:{id:"03",label:"XML"}}],outputs:[{id:"04",name:"Товарная накладная",format:{id:"02",label:"PDF"}}]},{id:"02",name:"1С Бухгалтерия",shortName:"1С BuNU",code:"1C_BUNU"},{id:"03",name:"SAP Кадровый модуль",shortName:"SAP HT",code:"SAP_HR"},{id:"04",name:"Галактика",shortName:"Galaxy",code:"GAL"},{id:"05",name:"Босс кадровик",shortName:"BOSS",code:"BOSS"}],L=[{id:"01",label:"JSON",description:"Файлы в формате JSON"},{id:"02",label:"PDF",description:"Файлы в формате PDF"},{id:"03",label:"XML",description:"Файлы в формате PDF"},{id:"04",label:"PNG",description:"Файлы в формате PNG"},{id:"05",label:"JPEG",description:"Файлы в формате JPEG"}],T=[{id:"01",title:"Тег 1"},{id:"02",title:"Тег 2"},{id:"03",title:"Тег 3"},{id:"04",title:"Тег 4"},{id:"05",title:"Тег 5"},{id:"06",title:"Тег 6"},{id:"07",title:"Тег 7"},{id:"08",title:"Тег 8"},{id:"09",title:"Тег 9"},{id:"10",title:"Тег 10"},{id:"11",title:"Тег 11"},{id:"12",title:"Тег 12"},{id:"13",title:"Тег 13"},{id:"14",title:"Тег 14"},{id:"15",title:"Тег 15"},{id:"16",title:"Тег 16"}],r={confirmChanges:!1,height:400,fieldsProps:{inline1:{component:d,fieldsProps:{name:{component:i,label:"Наименование"},format:{component:f,label:"Формат",dataSet:L,fullItemValue:!0}}},description:{component:n,label:"Описание",autoSize:!0}}},k=()=>({confirmChanges:!0,height:500,width:600,fieldsProps:{tabs1:{component:F,autoHeightResize:!0,tabs:{Основные:{inline1:{component:d,fieldsProps:{code:{component:i,label:"Код",width:100},shortName:{component:i,label:"Наименование"}}},name:{component:i,label:"Полное наименование"},tags:{component:u,label:"Теги",multiple:!0,dataSet:T},description:{component:n,label:"Описание",autoSize:!0}},Доступ:{address:{component:i,label:"Адрес",dependsOn:["name"]},login:{component:i,label:"Логин",dependsOn:["name"]},password:{component:p,label:"Пароль",dependsOn:["name"]}},Входы:{inputs:{component:o,columns:l,headerFilterHidden:!0,height:"300px",autoHeightResize:!0,layout:"fitColumns",editFormProps:r,onDelete:()=>{}}},Выходы:{outputs:{component:o,columns:l,headerFilterHidden:!0,height:"300px",autoHeightResize:!0,layout:"fitColumns",editFormProps:r,onDelete:()=>{}}}}}}}),x=()=>{const t=k();return e.jsx(c,{columns:S,dataSet:g,layout:"fitColumns",movableColumns:!0,buttonsSize:"middle",editFormProps:t,onDelete:()=>{},height:"100%",rowHeight:50,confirmDelete:!0,buttons:{title:{type:"element",title:e.jsx("b",{style:{fontSize:18},children:"Системы"}),position:"left"}}})},G=a.lazy(()=>s(()=>import("./index-UHTfNfHP.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),Y=t=>e.jsxs(b,{children:[e.jsx("div",{children:e.jsx(x,{})}),e.jsx(m,{}),e.jsx("div",{children:e.jsx(h,{items:[{key:1,label:"Show source",children:e.jsx(a.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(G,{language:"tsx",style:t.darkMode?P:I,showLineNumbers:!0,children:`
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
    {field: 'num', title: '№', formatter: 'rownum', accessor: 'rownum', width: 50, vertAlign: 'middle'},
    {field: 'name', title: 'Наименование', headerFilter: true, headerFilterFunc: 'like', vertAlign: 'middle'},
    {field: 'shortName', title: 'Краткое наименование', headerFilter: true, headerFilterFunc: 'like', vertAlign: 'middle'},
    {field: 'code', title: 'Код', headerFilter: true, headerFilterFunc: 'like', vertAlign: 'middle'},
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
    {id: '04', name: 'Галактика', shortName: 'Galaxy', code: 'GAL'},
    {id: '05', name: 'Босс кадровик', shortName: 'BOSS', code: 'BOSS'},
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
                        address: {component: InputField, label: 'Адрес', dependsOn:['name']} satisfies IInputFieldProps,
                        login: {component: InputField, label: 'Логин', dependsOn:['name']} satisfies IInputFieldProps,
                        password: {component: PasswordField, label: 'Пароль', dependsOn:['name']} satisfies IPasswordFieldProps,
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
                            onDelete: () => {},
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
                            onDelete: () => {},
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
            onDelete={ () => {}}
            height={'100%'}
            rowHeight={50}
            confirmDelete={true}
            buttons={{title: {type: 'element', title: <b style={{fontSize: 18}}>Системы</b>, position: 'left'}}}
        />
    );
};
`})})}]})})]});export{Y as Page2328230e9a2940e2b8083ac83f4d55b8,Y as default};
