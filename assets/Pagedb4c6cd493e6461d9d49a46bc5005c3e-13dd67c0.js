import{r,n as ge,B as Ce,F as Pe,v as xe,a as L,q as Ie,E as we,av as ye,aF as Oe,j as s,D as Ne}from"./index-c797af55.js";import{g as Te,e as Me,P as ve,C as ke,S as Le,d as De,a as Xe}from"./docco-e40295f3.js";import{T as je}from"./tabulatorGrid-31aae25d.js";import{T as Ae}from"./tabsField-5f255af3.js";import{I as D}from"./inputField-d14c5b2b.js";import{g as Ee,e as _e,a as X}from"./index-8c229de7.js";import{I as Re}from"./index-e62611d6.js";import{T as ze}from"./tabulatorGridField-a09f3641.js";import{O as Ge,f as He,b as Be,c as Ve,D as We,d as Ue,e as Je,T as $e}from"./useShowArrow-a7f16987.js";import"./dFormModal-cedb0440.js";import"./EyeOutlined-8bcb47e2.js";import"./DeleteOutlined-bba666a5.js";import"./SearchOutlined-f62686db.js";var Ze=globalThis&&globalThis.__rest||function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(o[a[l]]=e[a[l]]);return o};const j="SECRET_COMBOBOX_MODE_DO_NOT_USE",qe=(e,t)=>{var o,a,{prefixCls:l,bordered:i=!0,className:n,rootClassName:p,getPopupContainer:f,popupClassName:A,dropdownClassName:E,listHeight:_=256,placement:g,listItemHeight:R=24,size:C,disabled:P,notFoundContent:O,status:z,builtinPlacements:G,dropdownMatchSelectWidth:H,popupMatchSelectWidth:x,direction:I,style:B,allowClear:N}=e,d=Ze(e,["prefixCls","bordered","className","rootClassName","getPopupContainer","popupClassName","dropdownClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","builtinPlacements","dropdownMatchSelectWidth","popupMatchSelectWidth","direction","style","allowClear"]);const{getPopupContainer:V,getPrefixCls:T,renderEmpty:w,direction:W,virtual:U,popupMatchSelectWidth:J,popupOverflow:$,select:u}=r.useContext(ge),m=T("select",l),Z=T(),c=I??W,{compactSize:q,compactItemClassnames:Y}=Ce(m,c),[K,M]=Be(m),F=r.useMemo(()=>{const{mode:h}=d;if(h!=="combobox")return h===j?"combobox":h},[d.mode]),Q=F==="multiple"||F==="tags",ee=Ve(d.suffixIcon,d.showArrow),te=(o=x??H)!==null&&o!==void 0?o:J,{status:oe,hasFeedback:v,isFormItemInput:ae,feedbackIcon:le}=r.useContext(Pe),re=Me(oe,z);let S;O!==void 0?S=O:F==="combobox"?S=null:S=(w==null?void 0:w("Select"))||r.createElement(We,{componentName:"Select"});const{suffixIcon:ie,itemIcon:ne,removeIcon:se,clearIcon:de}=Ue(Object.assign(Object.assign({},d),{multiple:Q,hasFeedback:v,feedbackIcon:le,showSuffixIcon:ee,prefixCls:m,showArrow:d.showArrow,componentName:"Select"})),me=N===!0?{clearIcon:de}:N,ue=xe(d,["suffixIcon","itemIcon"]),ce=L(A||E,{[`${m}-dropdown-${c}`]:c==="rtl"},p,M),k=Ie(h=>{var y;return(y=C??q)!==null&&y!==void 0?y:h}),pe=r.useContext(we),be=P??pe,fe=L({[`${m}-lg`]:k==="large",[`${m}-sm`]:k==="small",[`${m}-rtl`]:c==="rtl",[`${m}-borderless`]:!i,[`${m}-in-form-item`]:ae},Te(m,re,v),Y,u==null?void 0:u.className,n,p,M),he=r.useMemo(()=>g!==void 0?g:c==="rtl"?"bottomRight":"bottomLeft",[g,c]),Fe=Je(G,$),[Se]=ye("SelectLike",(a=d.dropdownStyle)===null||a===void 0?void 0:a.zIndex);return K(r.createElement($e,Object.assign({ref:t,virtual:U,showSearch:u==null?void 0:u.showSearch},ue,{style:Object.assign(Object.assign({},u==null?void 0:u.style),B),dropdownMatchSelectWidth:te,builtinPlacements:Fe,transitionName:Oe(Z,"slide-up",d.transitionName),listHeight:_,listItemHeight:R,mode:F,prefixCls:m,placement:he,direction:c,suffixIcon:ie,menuItemSelectedIcon:ne,removeIcon:se,allowClear:me,notFoundContent:S,className:fe,getPopupContainer:f||V,dropdownClassName:ce,disabled:be,dropdownStyle:Object.assign(Object.assign({},d==null?void 0:d.dropdownStyle),{zIndex:Se})})))},b=r.forwardRef(qe),Ye=Ee(b);b.SECRET_COMBOBOX_MODE_DO_NOT_USE=j;b.Option=Ge;b.OptGroup=He;b._InternalPanelDoNotUseOrYouWillBeFired=Ye;const Ke=b,Qe=e=>{const t=ot(e),o=et(e),a=tt(e,e.value);return s.jsx(Ke,{...t,options:o,value:a,disabled:e.disabled||e.readOnly,optionFilterProp:e.optionFilterProp??"label",showSearch:e.showSearch!==!1,onSelect:(l,i)=>{var n;return(n=e.onSelect)==null?void 0:n.call(e,l,i)},onDeselect:(l,i)=>{var n;return(n=e.onDeselect)==null?void 0:n.call(e,l,i)},onChange:(l,i)=>{var n;return(n=e.onChange)==null?void 0:n.call(e,l,i)},children:e.children})},et=e=>r.useMemo(()=>{if(!e.dataSet)return;const t=o=>{const a=[];if(!(!o||!Array.isArray(o))){for(const l of o){const i={...l};l.id&&(i.value=l.id),l.label&&(i.label=l.label),l.children&&(i.children=t(l.children)),a.push(i)}return a}};return t(e.dataSet)},[e.dataSet]),tt=(e,t)=>r.useMemo(()=>{if(typeof t>"u")return;if(!Array.isArray(t))return typeof t=="object"?{value:t.id,label:t.label}:t;const o=[];for(const a of t)typeof a=="object"?o.push({value:a.id,label:a.label}):o.push(a);return o},[t]),ot=e=>r.useMemo(()=>_e(e,{dataSet:!0,value:!0,readOnly:!0,onSelect:!0,onDeselect:!0,onChange:!0})[1],[e]),at=({field:e})=>{r.useSyncExternalStore(e.subscribe.bind(e),e.getSnapshot.bind(e));const t=e.getProps(),o=e.getValue(),a=r.useCallback((p,f)=>{e.isReady()&&(e.setValue(t.fullItemValue?f:p),e.setDirty(!0))},[e,t.fullItemValue]),l=r.useCallback(()=>{e.setTouched(!0)},[e]);r.useEffect(()=>{e.setReady(!0)},[e]);let i={};t.width&&(i={width:t.width});const n={...i,...t.style};return s.jsx(Qe,{dataSet:t.dataSet,allowClear:t.allowClear!==!1,autoClearSearchValue:t.autoClearSearchValue,autoFocus:t.autoFocus,defaultActiveFirstOption:t.defaultActiveFirstOption,defaultOpen:t.defaultOpen,disabled:e.isDisabled(),readOnly:e.isReadOnly(),fieldNames:t.fieldNames,filterOption:t.filterOption,filterSort:t.filterSort,labelInValue:t.labelInValue,listHeight:t.listHeight,loading:t.loading,maxTagCount:t.maxTagCount,maxTagPlaceholder:t.maxTagPlaceholder,maxTagTextLength:t.maxTagTextLength,menuItemSelectedIcon:t.menuItemSelectedIcon,mode:t.mode,notFoundContent:t.notFoundContent,optionFilterProp:t.optionFilterProp,optionLabelProp:t.optionLabelProp,placeholder:t.placeholder,placement:t.placement,popupClassName:t.popupClassName,removeIcon:t.removeIcon,showSearch:t.showSearch,suffixIcon:t.suffixIcon,tagRender:t.tagRender,tokenSeparators:t.tokenSeparators,value:o,virtual:t.virtual,style:n,onBlur:l,onChange:a,onSelect:t.onSelect,onDeselect:t.onDeselect})};class lt extends X{render(){return s.jsx(at,{field:this})}}const{TextArea:rt}=Re,it=({field:e})=>{r.useSyncExternalStore(e.subscribe.bind(e),e.getSnapshot.bind(e));const t=e.getName(),o=e.getProps(),a=e.getValue(),l=r.useCallback(f=>{e.isReady()&&(e.setValue(f.target.value||null),e.setDirty(!0))},[e]),i=r.useCallback(()=>{e.setTouched(!0)},[e]);r.useEffect(()=>{e.setReady(!0)},[e]);let n={};o.width&&(n={width:o.width});const p={...n,...o.style};return s.jsx(rt,{autoFocus:o.autoFocus,autoSize:o.autoSize,cols:o.cols,disabled:e.isDisabled(),maxLength:o.maxLength,name:t,onBlur:i,onChange:l,placeholder:o.placeholder,readOnly:e.isReadOnly(),rows:o.rows,showCount:o.showCount,value:a,wrap:o.wrap,style:p})};class nt extends X{render(){return s.jsx(it,{field:this})}}const st=[{field:"num",title:"№",formatter:"rownum",width:50},{field:"name",title:"Наименование",headerFilter:!0,headerFilterFunc:"like"},{field:"format.label",title:"Формат",headerFilter:!0,headerFilterFunc:"like"}],dt=[{field:"num",title:"№",formatter:"rownum",width:50},{field:"name",title:"Наименование",headerFilter:!0,headerFilterFunc:"like"},{field:"shortName",title:"Краткое наименование",headerFilter:!0,headerFilterFunc:"like"},{field:"code",title:"Код",headerFilter:!0,headerFilterFunc:"like"}],mt=[{id:"01",name:"1С Зарплата и управление персоналом",shortName:"1С ЗиУП",code:"1C_ZIUP",inputs:[{id:"01",name:"Штатная расстановка",format:{id:"01",label:"JSON"}},{id:"02",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"021",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"022",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"023",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"024",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"025",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"026",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"027",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"028",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"029",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"0210",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"0211",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"0212",name:"Адресная книга",format:{id:"03",label:"XML"}}],outputs:[{id:"04",name:"Товарная накладная",format:{id:"02",label:"PDF"}}]},{id:"02",name:"1С Бухгалтерия",shortName:"1С BuNU",code:"1C_BUNU"},{id:"03",name:"SAP Кадровый модуль",shortName:"SAP HT",code:"SAP_HR"}],ut=[{id:"01",label:"JSON",description:"Файлы в формате JSON"},{id:"02",label:"PDF",description:"Файлы в формате PDF"},{id:"03",label:"XML",description:"Файлы в формате PDF"},{id:"04",label:"PNG",description:"Файлы в формате PNG"},{id:"05",label:"JPEG",description:"Файлы в формате JPEG"}],ct={confirmChanges:!0,bodyHeight:300,fieldsProps:{name:{component:D,label:"Наименование"},shortName:{component:D,label:"Краткое наименование"},format:{component:lt,label:"Формат",dataSet:ut,fullItemValue:!0},description:{component:nt,label:"Описание",autoSize:!0}}},pt={confirmChanges:!0,bodyHeight:400,width:600,fieldsProps:{tabs1:{component:Ae,autoResize:!0,tabs:{" Входы ":{inputs:{component:ze,columns:st,headerFilterHidden:!0,height:"320px",autoResize:!0,layout:"fitColumns",editFormProps:ct}}}}}},bt=()=>s.jsx(je,{columns:dt,dataSet:mt,layout:"fitColumns",movableColumns:!0,buttonsSize:"middle",editFormProps:pt,height:"100%",buttons:{title:{type:"element",title:s.jsx("b",{style:{fontSize:18},children:"Системы"}),position:"left"}}}),Tt=e=>{const t=`
import React from 'react';
import {TabulatorGrid} from @krinopotam/ui-kit/tabulatorGrid';
import {ITabulatorColumn} from @krinopotam/ui-kit/tabulatorBase';
import {IDFormModalProps} from @krinopotam/ui-kit/dFormModal';
import {TabsField} from @krinopotam/ui-kit/dForm/fields/tabs/tabsField';
import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField';
import {PasswordField} from @krinopotam/ui-kit/dForm/fields/password/passwordField';
import {ITextAreaFieldProps, TextAreaField} from @krinopotam/ui-kit/dForm/fields/textArea/textAreaField';
import {ITabulatorGridFieldProps, TabulatorGridField} from @krinopotam/ui-kit/dForm/fields/tabulatorGrid/tabulatorGridField';
import {ISelectNode} from @krinopotam/ui-kit/select';
import {SelectField} from @krinopotam/ui-kit/dForm';
export const TagsColumns: ITabulatorColumn[] = [
    {field: 'num', title: '№', formatter: 'rownum', width: 50},
    {field: 'name', title: 'Наименование', headerFilter: true, headerFilterFunc: 'like'},
    {field: 'format.label', title: 'Формат', headerFilter: true, headerFilterFunc: 'like'},
];
const columns: ITabulatorColumn[] = [
    {field: 'num', title: '№', formatter: 'rownum', width: 50},
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
    bodyHeight: 300,
    fieldsProps: {
        name: {component: InputField, label: 'Наименование'},
        shortName: {component: InputField, label: 'Краткое наименование'},
        format: {component: SelectField, label: 'Формат', dataSet: FormatsList, fullItemValue: true},
        description: {component: TextAreaField, label: 'Описание', autoSize: true},
    },
};
const editFormProps: IDFormModalProps = {
    confirmChanges: true,
    bodyHeight: 400,
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
`;return s.jsxs(ve,{children:[s.jsx("div",{children:s.jsx(bt,{})}),s.jsx(Ne,{}),s.jsx("div",{children:s.jsx(ke,{items:[{key:1,label:"Show source",children:s.jsx(Le,{language:"javascript",style:e.darkMode?De:Xe,showLineNumbers:!0,children:t})}]})})]})};export{Tt as Pagedb4c6cd493e6461d9d49a46bc5005c3e,Tt as default};
