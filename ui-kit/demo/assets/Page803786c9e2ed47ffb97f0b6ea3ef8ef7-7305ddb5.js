import{r,o as Pe,F as xe,E as Ie,H as we,x as ye,a as X,s as Oe,G as Ne,ax as Te,aH as Me,j as s,D as ve}from"./index-353109d5.js";import{g as ke,e as Le,P as De,C as Xe,S as je,d as Ae,a as Ee}from"./docco-60b84056.js";import{T as _e}from"./tabulatorGrid-ac104063.js";import{T as ze}from"./tabsField-e87693c4.js";import{I as j}from"./inputField-8da0b016.js";import{g as Ge,e as Re,a as A}from"./index-1664f5a0.js";import{I as He}from"./index-9c270dd6.js";import{T as Be}from"./tabulatorGridField-386ba558.js";import{O as Ve,f as We,b as Ue,c as Je,D as $e,d as Ze,e as Ye,T as qe}from"./useShowArrow-8a590839.js";import"./dFormModal-cd36bfcf.js";import"./EyeOutlined-da2ead67.js";import"./DeleteOutlined-c8bbeae5.js";import"./SearchOutlined-52a0f6fd.js";var Ke=globalThis&&globalThis.__rest||function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(o[a[l]]=e[a[l]]);return o};const E="SECRET_COMBOBOX_MODE_DO_NOT_USE",Qe=(e,t)=>{var o,a,{prefixCls:l,bordered:i=!0,className:n,rootClassName:p,getPopupContainer:f,popupClassName:_,dropdownClassName:z,listHeight:G=256,placement:g,listItemHeight:R=24,size:C,disabled:P,notFoundContent:N,status:H,builtinPlacements:B,dropdownMatchSelectWidth:V,popupMatchSelectWidth:x,direction:I,style:W,allowClear:T}=e,d=Ke(e,["prefixCls","bordered","className","rootClassName","getPopupContainer","popupClassName","dropdownClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","builtinPlacements","dropdownMatchSelectWidth","popupMatchSelectWidth","direction","style","allowClear"]);const{getPopupContainer:U,getPrefixCls:M,renderEmpty:w,direction:J,virtual:$,popupMatchSelectWidth:Z,popupOverflow:Y,select:u}=r.useContext(Pe),m=M("select",l),q=M(),c=I??J,{compactSize:K,compactItemClassnames:Q}=xe(m,c),y=Ie(m),[ee,v,k]=Ue(m,y),F=r.useMemo(()=>{const{mode:h}=d;if(h!=="combobox")return h===E?"combobox":h},[d.mode]),te=F==="multiple"||F==="tags",oe=Je(d.suffixIcon,d.showArrow),ae=(o=x??V)!==null&&o!==void 0?o:Z,{status:le,hasFeedback:L,isFormItemInput:re,feedbackIcon:ie}=r.useContext(we),ne=Le(le,H);let S;N!==void 0?S=N:F==="combobox"?S=null:S=(w==null?void 0:w("Select"))||r.createElement($e,{componentName:"Select"});const{suffixIcon:se,itemIcon:de,removeIcon:me,clearIcon:ue}=Ze(Object.assign(Object.assign({},d),{multiple:te,hasFeedback:L,feedbackIcon:ie,showSuffixIcon:oe,prefixCls:m,showArrow:d.showArrow,componentName:"Select"})),ce=T===!0?{clearIcon:ue}:T,pe=ye(d,["suffixIcon","itemIcon"]),be=X(_||z,{[`${m}-dropdown-${c}`]:c==="rtl"},p,k,y,v),D=Oe(h=>{var O;return(O=C??K)!==null&&O!==void 0?O:h}),fe=r.useContext(Ne),he=P??fe,Fe=X({[`${m}-lg`]:D==="large",[`${m}-sm`]:D==="small",[`${m}-rtl`]:c==="rtl",[`${m}-borderless`]:!i,[`${m}-in-form-item`]:re},ke(m,ne,L),Q,u==null?void 0:u.className,n,p,k,y,v),Se=r.useMemo(()=>g!==void 0?g:c==="rtl"?"bottomRight":"bottomLeft",[g,c]),ge=Ye(B,Y),[Ce]=Te("SelectLike",(a=d.dropdownStyle)===null||a===void 0?void 0:a.zIndex);return ee(r.createElement(qe,Object.assign({ref:t,virtual:$,showSearch:u==null?void 0:u.showSearch},pe,{style:Object.assign(Object.assign({},u==null?void 0:u.style),W),dropdownMatchSelectWidth:ae,builtinPlacements:ge,transitionName:Me(q,"slide-up",d.transitionName),listHeight:G,listItemHeight:R,mode:F,prefixCls:m,placement:Se,direction:c,suffixIcon:se,menuItemSelectedIcon:de,removeIcon:me,allowClear:ce,notFoundContent:S,className:Fe,getPopupContainer:f||U,dropdownClassName:be,disabled:he,dropdownStyle:Object.assign(Object.assign({},d==null?void 0:d.dropdownStyle),{zIndex:Ce})})))},b=r.forwardRef(Qe),et=Ge(b);b.SECRET_COMBOBOX_MODE_DO_NOT_USE=E;b.Option=Ve;b.OptGroup=We;b._InternalPanelDoNotUseOrYouWillBeFired=et;const tt=b,ot=e=>{const t=rt(e),o=at(e),a=lt(e,e.value);return s.jsx(tt,{...t,options:o,value:a,disabled:e.disabled||e.readOnly,optionFilterProp:e.optionFilterProp??"label",showSearch:e.showSearch!==!1,onSelect:(l,i)=>{var n;return(n=e.onSelect)==null?void 0:n.call(e,l,i)},onDeselect:(l,i)=>{var n;return(n=e.onDeselect)==null?void 0:n.call(e,l,i)},onChange:(l,i)=>{var n;return(n=e.onChange)==null?void 0:n.call(e,l,i)},children:e.children})},at=e=>r.useMemo(()=>{if(!e.dataSet)return;const t=o=>{const a=[];if(!(!o||!Array.isArray(o))){for(const l of o){const i={...l};l.id&&(i.value=l.id),l.label&&(i.label=l.label),l.children&&(i.children=t(l.children)),a.push(i)}return a}};return t(e.dataSet)},[e.dataSet]),lt=(e,t)=>r.useMemo(()=>{if(typeof t>"u")return;if(!Array.isArray(t))return typeof t=="object"?{value:t.id,label:t.label}:t;const o=[];for(const a of t)typeof a=="object"?o.push({value:a.id,label:a.label}):o.push(a);return o},[t]),rt=e=>r.useMemo(()=>Re(e,{dataSet:!0,value:!0,readOnly:!0,onSelect:!0,onDeselect:!0,onChange:!0})[1],[e]),it=({field:e})=>{r.useSyncExternalStore(e.subscribe.bind(e),e.getSnapshot.bind(e));const t=e.getProps(),o=e.getValue(),a=r.useCallback((p,f)=>{e.isReady()&&(e.setValue(t.fullItemValue?f:p),e.setDirty(!0))},[e,t.fullItemValue]),l=r.useCallback(()=>{e.setTouched(!0)},[e]);r.useEffect(()=>{e.setReady(!0)},[e]);let i={};t.width&&(i={width:t.width});const n={...i,...t.style};return s.jsx(ot,{dataSet:t.dataSet,allowClear:t.allowClear!==!1,autoClearSearchValue:t.autoClearSearchValue,autoFocus:t.autoFocus,defaultActiveFirstOption:t.defaultActiveFirstOption,defaultOpen:t.defaultOpen,disabled:e.isDisabled(),readOnly:e.isReadOnly(),fieldNames:t.fieldNames,filterOption:t.filterOption,filterSort:t.filterSort,labelInValue:t.labelInValue,listHeight:t.listHeight,loading:t.loading,maxTagCount:t.maxTagCount,maxTagPlaceholder:t.maxTagPlaceholder,maxTagTextLength:t.maxTagTextLength,menuItemSelectedIcon:t.menuItemSelectedIcon,mode:t.mode,notFoundContent:t.notFoundContent,optionFilterProp:t.optionFilterProp,optionLabelProp:t.optionLabelProp,placeholder:t.placeholder,placement:t.placement,popupClassName:t.popupClassName,removeIcon:t.removeIcon,showSearch:t.showSearch,suffixIcon:t.suffixIcon,tagRender:t.tagRender,tokenSeparators:t.tokenSeparators,value:o,virtual:t.virtual,style:n,onBlur:l,onChange:a,onSelect:t.onSelect,onDeselect:t.onDeselect})};class nt extends A{render(){return s.jsx(it,{field:this})}}const{TextArea:st}=He,dt=({field:e})=>{r.useSyncExternalStore(e.subscribe.bind(e),e.getSnapshot.bind(e));const t=e.getName(),o=e.getProps(),a=e.getValue(),l=r.useCallback(f=>{e.isReady()&&(e.setValue(f.target.value||null),e.setDirty(!0))},[e]),i=r.useCallback(()=>{e.setTouched(!0)},[e]);r.useEffect(()=>{e.setReady(!0)},[e]);let n={};o.width&&(n={width:o.width});const p={...n,...o.style};return s.jsx(st,{autoFocus:o.autoFocus,autoSize:o.autoSize,cols:o.cols,disabled:e.isDisabled(),maxLength:o.maxLength,name:t,onBlur:i,onChange:l,placeholder:o.placeholder,readOnly:e.isReadOnly(),rows:o.rows,showCount:o.showCount,value:a,wrap:o.wrap,style:p})};class mt extends A{render(){return s.jsx(dt,{field:this})}}const ut=[{field:"num",title:"№",formatter:"rownum",width:50},{field:"name",title:"Наименование",headerFilter:!0,headerFilterFunc:"like"},{field:"format.label",title:"Формат",headerFilter:!0,headerFilterFunc:"like"}],ct=[{field:"num",title:"№",formatter:"rownum",width:50},{field:"name",title:"Наименование",headerFilter:!0,headerFilterFunc:"like"},{field:"shortName",title:"Краткое наименование",headerFilter:!0,headerFilterFunc:"like"},{field:"code",title:"Код",headerFilter:!0,headerFilterFunc:"like"}],pt=[{id:"01",name:"1С Зарплата и управление персоналом",shortName:"1С ЗиУП",code:"1C_ZIUP",inputs:[{id:"01",name:"Штатная расстановка",format:{id:"01",label:"JSON"}},{id:"02",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"021",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"022",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"023",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"024",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"025",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"026",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"027",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"028",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"029",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"0210",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"0211",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"0212",name:"Адресная книга",format:{id:"03",label:"XML"}}],outputs:[{id:"04",name:"Товарная накладная",format:{id:"02",label:"PDF"}}]},{id:"02",name:"1С Бухгалтерия",shortName:"1С BuNU",code:"1C_BUNU"},{id:"03",name:"SAP Кадровый модуль",shortName:"SAP HT",code:"SAP_HR"}],bt=[{id:"01",label:"JSON",description:"Файлы в формате JSON"},{id:"02",label:"PDF",description:"Файлы в формате PDF"},{id:"03",label:"XML",description:"Файлы в формате PDF"},{id:"04",label:"PNG",description:"Файлы в формате PNG"},{id:"05",label:"JPEG",description:"Файлы в формате JPEG"}],ft={confirmChanges:!0,bodyHeight:300,fieldsProps:{name:{component:j,label:"Наименование"},shortName:{component:j,label:"Краткое наименование"},format:{component:nt,label:"Формат",dataSet:bt,fullItemValue:!0},description:{component:mt,label:"Описание",autoSize:!0}}},ht={confirmChanges:!0,bodyHeight:400,width:600,fieldsProps:{tabs1:{component:ze,autoResize:!0,tabs:{" Входы ":{inputs:{component:Be,columns:ut,headerFilterHidden:!0,height:"320px",autoResize:!0,layout:"fitColumns",editFormProps:ft}}}}}},Ft=()=>s.jsx(_e,{columns:ct,dataSet:pt,layout:"fitColumns",movableColumns:!0,buttonsSize:"middle",editFormProps:ht,height:"100%",buttons:{title:{type:"element",title:s.jsx("b",{style:{fontSize:18},children:"Системы"}),position:"left"}}}),kt=e=>{const t=`
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
`;return s.jsxs(De,{children:[s.jsx("div",{children:s.jsx(Ft,{})}),s.jsx(ve,{}),s.jsx("div",{children:s.jsx(Xe,{items:[{key:1,label:"Show source",children:s.jsx(je,{language:"javascript",style:e.darkMode?Ae:Ee,showLineNumbers:!0,children:t})}]})})]})};export{kt as Page803786c9e2ed47ffb97f0b6ea3ef8ef7,kt as default};
