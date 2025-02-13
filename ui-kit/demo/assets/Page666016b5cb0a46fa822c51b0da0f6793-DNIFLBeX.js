const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DY4jbcst.js","assets/default-highlight-Dn6Zkl0a.js","assets/index-CtAjfk3U.js"])))=>i.map(i=>d[i]);
import{r as c,j as t,D as v,_ as P}from"./index-CtAjfk3U.js";import{g as T,d as S}from"./isArray-Dq3mFmoY.js";import{b as x}from"./buttonsRow-DIWV9y5m.js";import{D as C}from"./dFormModal-DBrO8yV5.js";import{I as i}from"./inputField-i3gDy1o8.js";import{D as N}from"./dateTimeField-ToDBlyGl.js";import{P as j}from"./passwordField-BIusE14l.js";import{T as L}from"./tabulatorGridField-BMb3oB4p.js";import{T as A}from"./treeSelectField-n2q6sRnM.js";import{S as R}from"./switchField-Bm9sKCKt.js";import{T as G}from"./tabsField-1LK1nVmL.js";import{I as k}from"./inlineGroupField-B-kKho5M.js";import{P as Y,C as O}from"./pageLayout-BYJr8qhp.js";import{d as H,c as E}from"./darcula-BqMdvqtY.js";import"./messageBox-BEJz6LZv.js";import"./index-CQ36vsgA.js";import"./modal-CqlI0vXJ.js";import"./baseField-CLOOMrMa.js";import"./index-tEAOawB8.js";import"./SearchOutlined-BPRhDdUX.js";import"./useIcons-BRnDxCLJ.js";import"./tabulatorGrid-Bes3Jt16.js";import"./defaultButtonsProps-BFWSm065.js";import"./PlusOutlined-CjmZvIFI.js";import"./index-C2aIs9ND.js";import"./useApiGetGroupsOnly-Bxa2nsTp.js";import"./index-BypK2dcJ.js";import"./useShowArrow-aGotVQ22.js";import"./index-CMA59ydq.js";var n={exports:{}},V=n.exports,I;function U(){return I||(I=1,function(o,d){(function(f,m){o.exports=m(T())})(V,function(f){function m(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var w=m(f),h="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),_="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),F="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),b="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),y=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function a(e,s,M){var r,l;return M==="m"?s?"минута":"минуту":e+" "+(r=+e,l={mm:s?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"}[M].split("_"),r%10==1&&r%100!=11?l[0]:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?l[1]:l[2])}var p=function(e,s){return y.test(s)?h[e.month()]:_[e.month()]};p.s=_,p.f=h;var u=function(e,s){return y.test(s)?F[e.month()]:b[e.month()]};u.s=b,u.f=F;var g={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:p,monthsShort:u,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:a,mm:a,h:"час",hh:a,d:"день",dd:a,M:"месяц",MM:a,y:"год",yy:a},ordinal:function(e){return e},meridiem:function(e){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"}};return w.default.locale(g,null,!0),g})}(n)),n.exports}U();S.locale("ru");const B={profess:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}],specialty:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}],login:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}],name:[{type:"string",rule:"not-empty",message:"Поле не должно быть пустым"}]},J={id:"1",profess:"Программист",specialty:"profess2",departmentName:"Департамент главных",neverField:"neverData"},K=[{id:"0-0",title:"Node1",label:"Label из данных",children:[{id:"0-0-1",title:"Child Node1",other:"OK"},{id:"0-0-2",title:"Child Node2",disabled:!0},{id:"0-0-3",title:"Child Node3"}]},{title:"Node2",id:"0-1"}],D={},W={formId:"TestFormModalConfig",apiRef:D,colorType:"info",title:"Форма редактирования",formMode:"update",validationRules:B,layout:"vertical",contentIndent:12,confirmChanges:!0,height:600,maxHeight:500,minHeight:200,width:500,minWidth:200,maxWidth:1e3,onSubmit:()=>new Promise((o,d)=>{setTimeout(()=>{Math.random()<.5?d({message:"Ошибка сохранения",code:400}):o({data:{result:"OK"}})},3e3)}),fieldsProps:{tabs:{component:G,tabs:{Tab1:{row1:{component:k,fieldsProps:{profess:{component:i,label:"Профессия",showCount:!0,maxLength:50},specialty:{component:i,label:"Специализация",value:"дефолтная специализация",dependsOn:["profess"]}}},assignDate:{component:N,label:"Дата назначения"},row2:{component:k,fieldsProps:{name:{component:i,label:"Имя пользователя",value:"дефолтное имя пользователя",dependsOn:["profess"]},login:{component:i,label:"Логин",value:"дефолтный логин",dependsOn:["name","specialty"]}}},departments:{component:A,label:"Подразделение",fetchMode:"onUse",noCacheFetchedData:!1,debounce:300,dataSet:K,editFormProps:{formId:"treeViewEditForm",fieldsProps:{title:{component:i,label:"title"}}}}},Tab2:{password:{component:j,label:"Пароль"},isLocked:{component:R,label:"Заблокировано",checkedChildren:"Вкл",unCheckedChildren:"Выкл"}},Tab3:{permissions:{component:L,label:"Полномочия",confirmDelete:!0,height:300,editFormProps:{formId:"grid_edit_form",fieldsProps:{name:{component:i,label:"Имя"},role:{component:i,label:"Роль"}}},columns:[{title:"Name",field:"name"},{title:"Age",field:"age"},{title:"Address",field:"address"}]}}}}}},q=()=>{const o=c.useCallback(()=>{D.open("update",{dataSet:J})},[]);return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Песочница"}),t.jsx(C,{...W}),t.jsx(x,{type:"primary",onClick:o,children:"Open form"})]})},z=c.lazy(()=>P(()=>import("./index-DY4jbcst.js").then(o=>o.dw),__vite__mapDeps([0,1,2])).then(o=>({default:o.Prism}))),we=o=>t.jsxs(Y,{children:[t.jsx(q,{}),t.jsx(v,{}),t.jsx("div",{children:t.jsx(O,{items:[{key:1,label:"Show source",children:t.jsx(c.Suspense,{fallback:t.jsx("div",{children:"Loading source..."}),children:t.jsx(z,{language:"tsx",style:o.darkMode?H:E,showLineNumbers:!0,children:`
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
import {IInlineGroupFieldProps, InlineGroupField} from @krinopotam/ui-kit/dForm/fields/inlineGroup';
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
                    row1: {
                        component: InlineGroupField,
                        fieldsProps: {
                            profess: {component: InputField, label: 'Профессия', showCount: true, maxLength: 50},
                            specialty: {component: InputField, label: 'Специализация', value: 'дефолтная специализация', dependsOn: ['profess']},
                        },
                    } satisfies IInlineGroupFieldProps,
                    assignDate: {component: DateTimeField, label: 'Дата назначения'},
                    row2: {
                        component: InlineGroupField,
                        fieldsProps: {
                            name: {component: InputField, label: 'Имя пользователя', value: 'дефолтное имя пользователя', dependsOn: ['profess']},
                            login: {component: InputField, label: 'Логин', value: 'дефолтный логин', dependsOn: ['name', 'specialty']},
                        },
                    } satisfies IInlineGroupFieldProps,
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
`})})}]})})]});export{we as Page666016b5cb0a46fa822c51b0da0f6793,we as default};
