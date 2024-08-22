import{r,g as ve,aA as Me,aP as Te,S as Le,a9 as ke,x as De,c as z,o as Xe,a1 as je,aL as Ee,N as Re,j as s,D as ze}from"./index-OT-fUFlw.js";import{P as Ae,C as _e,h as Ge,d as Ve,a as Be}from"./docco-Dp5WB1My.js";import{T as He}from"./tabulatorGrid-BdayD2VY.js";import{T as We}from"./tabsField-DlX5mBLn.js";import{I as A}from"./inputField-Coz0I3xz.js";import{B as _}from"./dForm-CXdkNth1.js";import{I as Ue}from"./index-BXyp7rr8.js";import{T as Je}from"./tabulatorGridField-BGPBKX2z.js";import{g as $e,f as Ze}from"./messageBox-deXCqDea.js";import{O as Ye,d as qe,b as Ke,c as Qe,D as et,T as tt,m as ot}from"./useShowArrow-C9rEyr0b.js";import{d as at,e as lt,g as rt}from"./index-BzsQSyIK.js";import{u as it}from"./useIcons-BZ-gWI9M.js";import"./dFormModal-Brw-56ya.js";import"./modal-Cu7Nzp09.js";import"./EyeOutlined-BLUlGsNj.js";import"./DeleteOutlined-BFYA2MP_.js";import"./SearchOutlined-q14VqUwO.js";var nt=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(o[a[l]]=e[a[l]]);return o};const G="SECRET_COMBOBOX_MODE_DO_NOT_USE",st=(e,t)=>{var o;const{prefixCls:a,bordered:l,className:i,rootClassName:n,getPopupContainer:p,popupClassName:b,dropdownClassName:V,listHeight:B=256,placement:g,listItemHeight:C,size:P,disabled:x,notFoundContent:T,status:H,builtinPlacements:W,dropdownMatchSelectWidth:U,popupMatchSelectWidth:I,direction:w,style:J,allowClear:L,variant:$,dropdownStyle:f,transitionName:Z,tagRender:Y,maxCount:q}=e,k=nt(e,["prefixCls","bordered","className","rootClassName","getPopupContainer","popupClassName","dropdownClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","builtinPlacements","dropdownMatchSelectWidth","popupMatchSelectWidth","direction","style","allowClear","variant","dropdownStyle","transitionName","tagRender","maxCount"]),{getPopupContainer:K,getPrefixCls:D,renderEmpty:O,direction:Q,virtual:ee,popupMatchSelectWidth:te,popupOverflow:oe,select:m}=r.useContext(ve),[,y]=Me(),ae=C??(y==null?void 0:y.controlHeight),d=D("select",a),le=D(),u=w??Q,{compactSize:re,compactItemClassnames:ie}=Te(d,u),[ne,se]=at($,l),N=Le(d),[de,X,j]=Ke(d,N),F=r.useMemo(()=>{const{mode:h}=e;if(h!=="combobox")return h===G?"combobox":h},[e.mode]),v=F==="multiple"||F==="tags",me=Qe(e.suffixIcon,e.showArrow),ue=(o=I??U)!==null&&o!==void 0?o:te,{status:ce,hasFeedback:E,isFormItemInput:pe,feedbackIcon:be}=r.useContext(ke),he=rt(ce,H);let S;T!==void 0?S=T:F==="combobox"?S=null:S=(O==null?void 0:O("Select"))||r.createElement(et,{componentName:"Select"});const{suffixIcon:fe,itemIcon:Fe,removeIcon:Se,clearIcon:ge}=it(Object.assign(Object.assign({},k),{multiple:v,hasFeedback:E,feedbackIcon:be,showSuffixIcon:me,prefixCls:d,componentName:"Select"})),Ce=L===!0?{clearIcon:ge}:L,Pe=De(k,["suffixIcon","itemIcon"]),xe=z(b||V,{[`${d}-dropdown-${u}`]:u==="rtl"},n,j,N,X),R=Xe(h=>{var M;return(M=P??re)!==null&&M!==void 0?M:h}),Ie=r.useContext(je),we=x??Ie,Oe=z({[`${d}-lg`]:R==="large",[`${d}-sm`]:R==="small",[`${d}-rtl`]:u==="rtl",[`${d}-${ne}`]:se,[`${d}-in-form-item`]:pe},lt(d,he,E),ie,m==null?void 0:m.className,i,n,j,N,X),ye=r.useMemo(()=>g!==void 0?g:u==="rtl"?"bottomRight":"bottomLeft",[g,u]),[Ne]=Ee("SelectLike",f==null?void 0:f.zIndex);return de(r.createElement(tt,Object.assign({ref:t,virtual:ee,showSearch:m==null?void 0:m.showSearch},Pe,{style:Object.assign(Object.assign({},m==null?void 0:m.style),J),dropdownMatchSelectWidth:ue,transitionName:Re(le,"slide-up",Z),builtinPlacements:ot(W,oe),listHeight:B,listItemHeight:ae,mode:F,prefixCls:d,placement:ye,direction:u,suffixIcon:fe,menuItemSelectedIcon:Fe,removeIcon:Se,allowClear:Ce,notFoundContent:S,className:Oe,getPopupContainer:p||K,dropdownClassName:xe,disabled:we,dropdownStyle:Object.assign(Object.assign({},f),{zIndex:Ne}),maxCount:v?q:void 0,tagRender:v?Y:void 0})))},c=r.forwardRef(st),dt=$e(c);c.SECRET_COMBOBOX_MODE_DO_NOT_USE=G;c.Option=Ye;c.OptGroup=qe;c._InternalPanelDoNotUseOrYouWillBeFired=dt;const{TextArea:mt}=Ue,ut=({field:e})=>{r.useSyncExternalStore(e.subscribe.bind(e),e.getSnapshot.bind(e));const t=e.getName(),o=e.getProps(),a=e.getValue(),l=r.useCallback(b=>{e.isReady()&&(e.setValue(b.target.value||null),e.setDirty(!0))},[e]),i=r.useCallback(()=>{e.setTouched(!0)},[e]);r.useEffect(()=>{e.setReady(!0)},[e]);let n={};o.width&&(n={width:o.width});const p={...n,...o.style};return s.jsx(mt,{autoFocus:o.autoFocus,autoSize:o.autoSize,cols:o.cols,disabled:e.isDisabled(),maxLength:o.maxLength,name:t,onBlur:i,onChange:l,placeholder:o.placeholder,readOnly:e.isReadOnly(),rows:o.rows,showCount:o.showCount,value:a,wrap:o.wrap,style:p})};class ct extends _{render(){return s.jsx(ut,{field:this})}}const pt=e=>{const t=ft(e),o=bt(e),a=ht(e,e.value);return s.jsx(c,{...t,options:o,value:a,disabled:e.disabled||e.readOnly,optionFilterProp:e.optionFilterProp??"label",showSearch:e.showSearch!==!1,onSelect:(l,i)=>{var n;return(n=e.onSelect)==null?void 0:n.call(e,l,i)},onDeselect:(l,i)=>{var n;return(n=e.onDeselect)==null?void 0:n.call(e,l,i)},onChange:(l,i)=>{var n;return(n=e.onChange)==null?void 0:n.call(e,l,i)},children:e.children})},bt=e=>r.useMemo(()=>{if(!e.dataSet)return;const t=o=>{const a=[];if(!(!o||!Array.isArray(o))){for(const l of o){const i={...l};l.id&&(i.value=l.id),l.label&&(i.label=l.label),l.children&&(i.children=t(l.children)),a.push(i)}return a}};return t(e.dataSet)},[e.dataSet]),ht=(e,t)=>r.useMemo(()=>{if(typeof t>"u")return;if(!Array.isArray(t))return typeof t=="object"?{value:t.id,label:t.label}:t;const o=[];for(const a of t)typeof a=="object"?o.push({value:a.id,label:a.label}):o.push(a);return o},[t]),ft=e=>r.useMemo(()=>Ze(e,{dataSet:!0,value:!0,readOnly:!0,onSelect:!0,onDeselect:!0,onChange:!0})[1],[e]),Ft=({field:e})=>{r.useSyncExternalStore(e.subscribe.bind(e),e.getSnapshot.bind(e));const t=e.getProps(),o=e.getValue(),a=r.useCallback((p,b)=>{e.isReady()&&(e.setValue(t.fullItemValue?b:p),e.setDirty(!0))},[e,t.fullItemValue]),l=r.useCallback(()=>{e.setTouched(!0)},[e]);r.useEffect(()=>{e.setReady(!0)},[e]);let i={};t.width&&(i={width:t.width});const n={...i,...t.style};return s.jsx(pt,{dataSet:t.dataSet,allowClear:t.allowClear!==!1,autoClearSearchValue:t.autoClearSearchValue,autoFocus:t.autoFocus,defaultActiveFirstOption:t.defaultActiveFirstOption,defaultOpen:t.defaultOpen,disabled:e.isDisabled(),readOnly:e.isReadOnly(),fieldNames:t.fieldNames,filterOption:t.filterOption,filterSort:t.filterSort,labelInValue:t.labelInValue,listHeight:t.listHeight,loading:t.loading,maxTagCount:t.maxTagCount,maxTagPlaceholder:t.maxTagPlaceholder,maxTagTextLength:t.maxTagTextLength,menuItemSelectedIcon:t.menuItemSelectedIcon,mode:t.mode,notFoundContent:t.notFoundContent,optionFilterProp:t.optionFilterProp,optionLabelProp:t.optionLabelProp,placeholder:t.placeholder,placement:t.placement,popupClassName:t.popupClassName,removeIcon:t.removeIcon,showSearch:t.showSearch,suffixIcon:t.suffixIcon,tagRender:t.tagRender,tokenSeparators:t.tokenSeparators,value:o,virtual:t.virtual,style:n,onBlur:l,onChange:a,onSelect:t.onSelect,onDeselect:t.onDeselect})};class St extends _{render(){return s.jsx(Ft,{field:this})}}const gt=[{field:"num",title:"№",formatter:"rownum",accessor:"rownum",width:50},{field:"name",title:"Наименование",headerFilter:!0,headerFilterFunc:"like"},{field:"format.label",title:"Формат",headerFilter:!0,headerFilterFunc:"like"}],Ct=[{field:"num",title:"№",formatter:"rownum",accessor:"rownum",width:50},{field:"name",title:"Наименование",headerFilter:!0,headerFilterFunc:"like"},{field:"shortName",title:"Краткое наименование",headerFilter:!0,headerFilterFunc:"like"},{field:"code",title:"Код",headerFilter:!0,headerFilterFunc:"like"}],Pt=[{id:"01",name:"1С Зарплата и управление персоналом",shortName:"1С ЗиУП",code:"1C_ZIUP",inputs:[{id:"01",name:"Штатная расстановка",format:{id:"01",label:"JSON"}},{id:"02",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"021",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"022",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"023",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"024",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"025",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"026",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"027",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"028",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"029",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"0210",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"0211",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"0212",name:"Адресная книга",format:{id:"03",label:"XML"}}],outputs:[{id:"04",name:"Товарная накладная",format:{id:"02",label:"PDF"}}]},{id:"02",name:"1С Бухгалтерия",shortName:"1С BuNU",code:"1C_BUNU"},{id:"03",name:"SAP Кадровый модуль",shortName:"SAP HT",code:"SAP_HR"}],xt=[{id:"01",label:"JSON",description:"Файлы в формате JSON"},{id:"02",label:"PDF",description:"Файлы в формате PDF"},{id:"03",label:"XML",description:"Файлы в формате PDF"},{id:"04",label:"PNG",description:"Файлы в формате PNG"},{id:"05",label:"JPEG",description:"Файлы в формате JPEG"}],It={confirmChanges:!0,height:300,fieldsProps:{name:{component:A,label:"Наименование"},shortName:{component:A,label:"Краткое наименование"},format:{component:St,label:"Формат",dataSet:xt,fullItemValue:!0},description:{component:ct,label:"Описание",autoSize:!0}}},wt={confirmChanges:!0,height:400,width:600,fieldsProps:{tabs1:{component:We,autoResize:!0,tabs:{" Входы ":{inputs:{component:Je,columns:gt,headerFilterHidden:!0,height:"320px",autoResize:!0,layout:"fitColumns",editFormProps:It}}}}}},Ot=()=>s.jsx(He,{columns:Ct,dataSet:Pt,layout:"fitColumns",movableColumns:!0,buttonsSize:"middle",editFormProps:wt,height:"100%",buttons:{title:{type:"element",title:s.jsx("b",{style:{fontSize:18},children:"Системы"}),position:"left"}}}),Bt=e=>s.jsxs(Ae,{children:[s.jsx("div",{children:s.jsx(Ot,{})}),s.jsx(ze,{}),s.jsx("div",{children:s.jsx(_e,{items:[{key:1,label:"Show source",children:s.jsx(Ge,{language:"javascript",style:e.darkMode?Ve:Be,showLineNumbers:!0,children:`
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
`})}]})})]});export{Bt as Page520e1f9654ef47699d4784775f065dc0,Bt as default};
