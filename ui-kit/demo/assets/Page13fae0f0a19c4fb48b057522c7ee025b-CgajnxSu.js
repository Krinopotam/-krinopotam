import{z as w,r as p,j as o,br as D,D as C}from"./index-DhMwsQtd.js";import{P as T,C as v,h as S,d as x,a as I}from"./docco-BR1GjPZn.js";import{b as j,B as P,d as N}from"./dForm-BvND7aMS.js";import{B as L}from"./messageBox-CQECnf8I.js";import{D as G}from"./dFormModal-B9s_VGMc.js";import{I as a}from"./inputField-C-ak15WA.js";import{D as R}from"./dateTimeField-C8UF5naj.js";import{P as A}from"./passwordField-GSFpkRgN.js";import{T as Y}from"./tabulatorGridField-B2ianJVO.js";import{T as O}from"./treeSelectField-Z6N96l17.js";import{T as H}from"./tabsField--4Cr-dat.js";import"./index-DNVFzPvX.js";import"./modal-eXRNn5Q9.js";import"./index-CYDA0FvV.js";import"./EyeOutlined-D8voB2bB.js";import"./SearchOutlined-klO5lwg7.js";import"./useIcons-Cyt_PLs-.js";import"./tabulatorGrid-CVRHT1bL.js";import"./DeleteOutlined-BqcAHwXU.js";import"./useShowArrow-DtPoDbiW.js";var E={exports:{}};(function(e,r){(function(d,l){e.exports=l(j)})(w,function(d){function l(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var u=l(d),h="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),b="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),_="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),y="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),F=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function s(t,n,M){var i,m;return M==="m"?n?"минута":"минуту":t+" "+(i=+t,m={mm:n?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"}[M].split("_"),i%10==1&&i%100!=11?m[0]:i%10>=2&&i%10<=4&&(i%100<10||i%100>=20)?m[1]:m[2])}var c=function(t,n){return F.test(n)?h[t.month()]:b[t.month()]};c.s=b,c.f=h;var f=function(t,n){return F.test(n)?_[t.month()]:y[t.month()]};f.s=y,f.f=_;var g={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:c,monthsShort:f,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:s,mm:s,h:"час",hh:s,d:"день",dd:s,M:"месяц",MM:s,y:"год",yy:s},ordinal:function(t){return t},meridiem:function(t){return t<4?"ночи":t<12?"утра":t<17?"дня":"вечера"}};return u.default.locale(g,null,!0),g})})(E);const V=({field:e})=>{p.useSyncExternalStore(e.subscribe.bind(e),e.getSnapshot.bind(e));const r=e.getProps(),d=e.getValue(),l=p.useCallback(u=>{e.isReady()&&(e.setValue(u||!1),e.setDirty(!0),e.setTouched(!0))},[e]);return p.useEffect(()=>{e.setReady(!0)},[e]),o.jsx(D,{autoFocus:r.autoFocus,checked:d,checkedChildren:r.checkedChildren,disabled:e.isDisabled()||e.isReadOnly(),loading:r.loading,onChange:l,unCheckedChildren:r.unCheckedChildren,style:r.style})};class B extends P{render(){return o.jsx(V,{field:this})}}N.locale("ru");const U={profess:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}],specialty:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}],login:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}],name:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]},J={id:"1",profess:"Программист",specialty:"profess2",departmentName:"Департамент главных",neverField:"neverData"},K=[{id:"0-0",title:"Node1",label:"Label из данных",children:[{id:"0-0-1",title:"Child Node1",other:"OK"},{id:"0-0-2",title:"Child Node2",disabled:!0},{id:"0-0-3",title:"Child Node3"}]},{title:"Node2",id:"0-1"}],k={},W={formId:"TestFormModalConfig",apiRef:k,colorType:"info",title:"Форма редактирования",formMode:"update",validationRules:U,layout:"vertical",contentIndent:12,confirmChanges:!0,bodyHeight:600,bodyMaxHeight:500,bodyMinHeight:200,width:500,minWidth:200,maxWidth:1e3,onSubmit:()=>new Promise((e,r)=>{setTimeout(()=>{Math.random()<.5?r({message:"Ошибка сохранения",code:400}):e({data:{result:"OK"}})},3e3)}),fieldsProps:{tabs:{component:H,tabs:{Tab1:{profess:{component:a,label:"Профессия",showCount:!0,maxLength:50,inlineGroup:"row1"},specialty:{component:a,label:"Специализация",value:"дефолтная специализация",dependsOn:["profess"],inlineGroup:"row1"},assignDate:{component:R,label:"Дата назначения"},name:{component:a,label:"Имя пользователя",value:"дефолтное имя пользователя",dependsOn:["profess"],inlineGroup:"row2"},login:{component:a,label:"Логин",value:"дефолтный логин",dependsOn:["name","specialty"],inlineGroup:"row2"},departments:{component:O,label:"Подразделение",fetchMode:"onUse",noCacheFetchedData:!1,debounce:300,dataSet:K,editFormProps:{formId:"treeViewEditForm",fieldsProps:{title:{component:a,label:"title"}}}}},Tab2:{password:{component:A,label:"Пароль"},isLocked:{component:B,label:"Заблокировано",checkedChildren:"Вкл",unCheckedChildren:"Выкл"}},Tab3:{permissions:{component:Y,label:"Полномочия",confirmDelete:!0,height:300,editFormProps:{formId:"grid_edit_form",fieldsProps:{name:{component:a,label:"Имя"},role:{component:a,label:"Роль"}}},columns:[{title:"Name",field:"name"},{title:"Age",field:"age"},{title:"Address",field:"address"}]}}}}}},z=()=>{const e=p.useCallback(()=>{k.open("update",J)},[]);return o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:"Песочница"}),o.jsx(G,{...W}),o.jsx(L,{type:"primary",onClick:e,children:"Open form"})]})},he=e=>o.jsxs(T,{children:[o.jsx("div",{children:o.jsx(z,{})}),o.jsx(C,{}),o.jsx("div",{children:o.jsx(v,{items:[{key:1,label:"Show source",children:o.jsx(S,{language:"javascript",style:e.darkMode?x:I,showLineNumbers:!0,children:`
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
    bodyHeight: 600,
    bodyMaxHeight: 500,
    bodyMinHeight: 200,
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
        formModalApi.open('update', formData);
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
`})}]})})]});export{he as Page13fae0f0a19c4fb48b057522c7ee025b,he as default};