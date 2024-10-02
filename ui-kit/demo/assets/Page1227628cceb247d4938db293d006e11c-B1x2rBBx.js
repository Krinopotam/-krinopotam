const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-C2SUEjL0.js","assets/default-highlight-BDFjN1OP.js","assets/index-CgBeyb-e.js"])))=>i.map(i=>d[i]);
import{c as w,r as u,j as t,_ as D,D as T}from"./index-CgBeyb-e.js";import{h as v,d as S}from"./dForm-B-6Y2TlM.js";import{B as x}from"./modal-hi51mlNB.js";import{D as I}from"./dFormModal-B-TtMmSz.js";import{I as i}from"./inputField-CHbICkKZ.js";import{D as C}from"./dateTimeField-BTOByRuu.js";import{P}from"./passwordField-8CWLnCWf.js";import{T as j}from"./tabulatorGridField-eanR-mo2.js";import{T as N}from"./treeSelectField-BDs--LXV.js";import{S as L}from"./switchField-BHVpFQes.js";import{T as A}from"./tabsField-DQyzBA6G.js";import{P as G,C as Y,d as O,c as R}from"./darcula-Bm4NDPn1.js";import"./index-Birbnh4n.js";import"./modal-D01YMXTL.js";import"./index-BmHUbDh_.js";import"./SearchOutlined-DsYktL9I.js";import"./useIcons-tPNZCeWw.js";import"./tabulatorGrid-DAyVcvcb.js";import"./defaultButtonsProps-BjCvvsD6.js";import"./index-blBfG32B.js";import"./useShowArrow-DhNUwsya.js";import"./useApiGetGroupsOnly-BzYeVIfm.js";import"./index-bT1kimW8.js";var H={exports:{}};(function(o,n){(function(c,d){o.exports=d(v)})(w,function(c){function d(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var k=d(c),f="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),h="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),_="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),b="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),F=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function a(e,l,g){var r,s;return g==="m"?l?"минута":"минуту":e+" "+(r=+e,s={mm:l?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"}[g].split("_"),r%10==1&&r%100!=11?s[0]:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?s[1]:s[2])}var m=function(e,l){return F.test(l)?f[e.month()]:h[e.month()]};m.s=h,m.f=f;var p=function(e,l){return F.test(l)?_[e.month()]:b[e.month()]};p.s=b,p.f=_;var y={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:m,monthsShort:p,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:a,mm:a,h:"час",hh:a,d:"день",dd:a,M:"месяц",MM:a,y:"год",yy:a},ordinal:function(e){return e},meridiem:function(e){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"}};return k.default.locale(y,null,!0),y})})(H);S.locale("ru");const E={profess:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}],specialty:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}],login:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}],name:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]},V={id:"1",profess:"Программист",specialty:"profess2",departmentName:"Департамент главных",neverField:"neverData"},U=[{id:"0-0",title:"Node1",label:"Label из данных",children:[{id:"0-0-1",title:"Child Node1",other:"OK"},{id:"0-0-2",title:"Child Node2",disabled:!0},{id:"0-0-3",title:"Child Node3"}]},{title:"Node2",id:"0-1"}],M={},B={formId:"TestFormModalConfig",apiRef:M,colorType:"info",title:"Форма редактирования",formMode:"update",validationRules:E,layout:"vertical",contentIndent:12,confirmChanges:!0,height:600,maxHeight:500,minHeight:200,width:500,minWidth:200,maxWidth:1e3,onSubmit:()=>new Promise((o,n)=>{setTimeout(()=>{Math.random()<.5?n({message:"Ошибка сохранения",code:400}):o({data:{result:"OK"}})},3e3)}),fieldsProps:{tabs:{component:A,tabs:{Tab1:{profess:{component:i,label:"Профессия",showCount:!0,maxLength:50,inlineGroup:"row1"},specialty:{component:i,label:"Специализация",value:"дефолтная специализация",dependsOn:["profess"],inlineGroup:"row1"},assignDate:{component:C,label:"Дата назначения"},name:{component:i,label:"Имя пользователя",value:"дефолтное имя пользователя",dependsOn:["profess"],inlineGroup:"row2"},login:{component:i,label:"Логин",value:"дефолтный логин",dependsOn:["name","specialty"],inlineGroup:"row2"},departments:{component:N,label:"Подразделение",fetchMode:"onUse",noCacheFetchedData:!1,debounce:300,dataSet:U,editFormProps:{formId:"treeViewEditForm",fieldsProps:{title:{component:i,label:"title"}}}}},Tab2:{password:{component:P,label:"Пароль"},isLocked:{component:L,label:"Заблокировано",checkedChildren:"Вкл",unCheckedChildren:"Выкл"}},Tab3:{permissions:{component:j,label:"Полномочия",confirmDelete:!0,height:300,editFormProps:{formId:"grid_edit_form",fieldsProps:{name:{component:i,label:"Имя"},role:{component:i,label:"Роль"}}},columns:[{title:"Name",field:"name"},{title:"Age",field:"age"},{title:"Address",field:"address"}]}}}}}},J=()=>{const o=u.useCallback(()=>{M.open("update",{dataSet:V})},[]);return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Песочница"}),t.jsx(I,{...B}),t.jsx(x,{type:"primary",onClick:o,children:"Open form"})]})},K=u.lazy(()=>D(()=>import("./index-C2SUEjL0.js").then(o=>o.ds),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),_e=o=>t.jsxs(G,{children:[t.jsx("div",{children:t.jsx(J,{})}),t.jsx(T,{}),t.jsx("div",{children:t.jsx(Y,{items:[{key:1,label:"Show source",children:t.jsx(u.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(K,{language:"tsx",style:o.darkMode?O:R,showLineNumbers:!0,children:`
import 'dayjs/locale/ru';
import React, {useCallback} from 'react';
import dayjs from 'dayjs';
import {Button} from @krinopotam/ui-kit/button';
import {IDFormModalApi, DFormModal, IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {DateTimeField} from @krinopotam/ui-kit/dForm/fields/dateTime/dateTimeField';
import {PasswordField} from @krinopotam/ui-kit/dForm/fields/password/passwordField';
import {TabulatorGridField} from @krinopotam/ui-kit/dForm/fields/tabulatorGrid/tabulatorGridField';
import {TreeSelectField} from @krinopotam/ui-kit/dForm/fields/treeSelect/treeSelectField';
import {SwitchField} from @krinopotam/ui-kit/dForm/fields/switch/switchField';
import {ITreeSelectNode} from @krinopotam/ui-kit/treeSelect';
import {IDFormValidationRules} from @krinopotam/ui-kit/dForm';
import {TabsField} from @krinopotam/ui-kit/dForm/fields/tabs/tabsField';
dayjs.locale('ru');
const validationRules: IDFormValidationRules = {
    //password: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}],
    profess: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}],
    specialty: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}],
    login: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}],
    name: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}],
    //departments: [{type: 'object', rule: 'not-empty', message: 'Поле не должно быть пустым'}],
    //permissions: [{type: 'string', rule: 'not-empty', message: 'Поле не должно быть пустым'}],
};
const formData = {
    id: '1',
    profess: 'Программист',
    specialty: 'profess2',
    //departments: {value: '0-0-1', label: 'Начальные данные'},
    //departments: '0-0-1',
    //departments: '12345',
    departmentName: 'Департамент главных',
    neverField: 'neverData',
};
const treeDataSet: ITreeSelectNode[] = [
    {
        id: '0-0',
        title: 'Node1',
        label: 'Label из данных',
        children: [
            {id: '0-0-1', title: 'Child Node1', other: 'OK'},
            {id: '0-0-2', title: 'Child Node2', disabled: true},
            {id: '0-0-3', title: 'Child Node3'},
        ],
    },
    {title: 'Node2', id: '0-1'},
];
const formModalApi: IDFormModalApi = {} as IDFormModalApi;
const formProps: IDFormModalProps = {
    formId: 'TestFormModalConfig',
    apiRef: formModalApi,
    colorType: 'info',
    title: 'Форма редактирования',
    formMode: 'update',
    validationRules: validationRules,
    layout: 'vertical',
    contentIndent: 12,
    confirmChanges: true,
    height: 600,
    maxHeight: 500,
    minHeight: 200,
    width: 500,
    minWidth: 200,
    maxWidth: 1000,
    /*onDataFetch: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < 0.5) reject({message: 'Ошибка загрузки данных', code: 400});
                else resolve({data: {profess: 'Загружено Профессия', specialty: 'Загружено специализация'}});
            }, 3000);
        });
    },*/
    onSubmit: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < 0.5) reject({message: 'Ошибка сохранения', code: 400});
                else resolve({data: {result: 'OK'}});
            }, 3000);
        });
    },
    fieldsProps: {
        tabs: {
            component: TabsField,
            tabs: {
                Tab1: {
                    profess: {component: InputField, label: 'Профессия', showCount: true, maxLength: 50, inlineGroup: 'row1'},
                    specialty: {component: InputField, label: 'Специализация', value: 'дефолтная специализация', dependsOn: ['profess'], inlineGroup: 'row1'},
                    assignDate: {component: DateTimeField, label: 'Дата назначения'},
                    name: {component: InputField, label: 'Имя пользователя', value: 'дефолтное имя пользователя', dependsOn: ['profess'], inlineGroup: 'row2'},
                    login: {component: InputField, label: 'Логин', value: 'дефолтный логин', dependsOn: ['name', 'specialty'], inlineGroup: 'row2'},
                    departments: {
                        component: TreeSelectField,
                        label: 'Подразделение',
                        fetchMode: 'onUse',
                        noCacheFetchedData: false,
                        debounce: 300,
                        // minSearchLength: 1,
                        // value: {label: 'default value', id: 'id-01'},
                        // multiple: true,
                        // treeCheckable: true,
                        // dataSource: GetApiAppUsersSelect('', {search: '', limit: 0}),
                        // dataSource: {
                        //     url: 'http://127.0.0.1:8081/api/do',
                        //     parameters: {action: 'app/users', method: 'List', data: {limit: 100}},
                        // },
                        dataSet: treeDataSet,
                        editFormProps: {formId: 'treeViewEditForm', fieldsProps: {title: {component: InputField, label: 'title'}}},
                        // titleRender: (treeNode: IApiJUser) => {
                        //     return (
                        //         <>
                        //             {treeNode.fio}
                        //             <br /> {treeNode.email}
                        //         </>
                        //     );
                        // },
                        // labelRender: (treeNode: IApiJUser) => {
                        //     return (
                        //         <>
                        //             {treeNode.fio}
                        //             <br /> {treeNode.email}
                        //         </>
                        //     );
                        // },
                        // filterTreeNode: (inputValue, treeNode: IApiJUser) => {
                        //     return (treeNode.fio + ' ' + treeNode.email).toLowerCase().indexOf(inputValue.toLowerCase()) >= 0;
                        // }
                    },
                },
                Tab2: {
                    password: {component: PasswordField, label: 'Пароль'},
                    isLocked: {component: SwitchField, label: 'Заблокировано', checkedChildren: 'Вкл', unCheckedChildren: 'Выкл'},
                },
                Tab3: {
                    permissions: {
                        component: TabulatorGridField,
                        label: 'Полномочия',
                        confirmDelete: true,
                        height: 300,
                        editFormProps: {
                            formId: 'grid_edit_form',
                            fieldsProps: {
                                name: {component: InputField, label: 'Имя'},
                                role: {component: InputField, label: 'Роль'},
                            },
                        },
                        columns: [
                            {
                                title: 'Name',
                                field: 'name',
                            },
                            {
                                title: 'Age',
                                field: 'age',
                            },
                            {
                                title: 'Address',
                                field: 'address',
                            },
                        ],
                    },
                },
            },
        },
    },
};
export const PlayGround = (): React.JSX.Element => {
    const showModal = useCallback(() => {
        formModalApi.open('update', {dataSet: formData});
    }, []);
    return (
        <>
            <DFormModal {...formProps} />
            <Button type="primary" onClick={showModal}>
                Open form
            </Button>
        </>
    );
};
`})})}]})})]});export{_e as Page1227628cceb247d4938db293d006e11c,_e as default};
