import{r as i,o as ve,al as Te,H as Me,G as ke,L as Le,A as De,a as R,v as je,J as Xe,aA as Ae,aK as Ee,j as s,D as Re}from"./index-CEW5Pw51.js";import{f as ze,j as _e,g as Ge,P as He,C as Ve,h as Be,d as We,a as Je}from"./docco-BDmKSriJ.js";import{T as Ue}from"./tabulatorGrid-D_Dw4JJ8.js";import{T as $e}from"./tabsField-B4ZuVTs-.js";import{I as z}from"./inputField-BWxo0HQm.js";import{g as Ze,f as Ke,a as _}from"./index-XDwG7I6Z.js";import{I as Ye}from"./index-Csn6HTCS.js";import{T as qe}from"./tabulatorGridField-BVSkdCaP.js";import{O as Qe,d as et,b as tt,c as ot,D as at,T as lt,m as it}from"./useShowArrow-ITxIezjc.js";import{u as rt}from"./useIcons-C2JgOeKM.js";import"./dFormModal-CQxmvlme.js";import"./EyeOutlined-CTrlI0WT.js";import"./DeleteOutlined-DC7B5UxI.js";import"./SearchOutlined-3RvbUWh0.js";var nt=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(o[a[l]]=e[a[l]]);return o};const G="SECRET_COMBOBOX_MODE_DO_NOT_USE",st=(e,t)=>{var o;const{prefixCls:a,bordered:l,className:r,rootClassName:n,getPopupContainer:p,popupClassName:b,dropdownClassName:H,listHeight:V=256,placement:g,listItemHeight:C,size:P,disabled:x,notFoundContent:M,status:B,builtinPlacements:W,dropdownMatchSelectWidth:J,popupMatchSelectWidth:I,direction:y,style:U,allowClear:k,variant:$,dropdownStyle:f,transitionName:Z,tagRender:K,maxCount:Y}=e,L=nt(e,["prefixCls","bordered","className","rootClassName","getPopupContainer","popupClassName","dropdownClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","builtinPlacements","dropdownMatchSelectWidth","popupMatchSelectWidth","direction","style","allowClear","variant","dropdownStyle","transitionName","tagRender","maxCount"]),{getPopupContainer:q,getPrefixCls:D,renderEmpty:w,direction:Q,virtual:ee,popupMatchSelectWidth:te,popupOverflow:oe,select:m}=i.useContext(ve),[,O]=Te(),ae=C??(O==null?void 0:O.controlHeight),d=D("select",a),le=D(),u=y??Q,{compactSize:ie,compactItemClassnames:re}=Me(d,u),[ne,se]=ze($,l),N=ke(d),[de,j,X]=tt(d,N),F=i.useMemo(()=>{const{mode:h}=e;if(h!=="combobox")return h===G?"combobox":h},[e.mode]),v=F==="multiple"||F==="tags",me=ot(e.suffixIcon,e.showArrow),ue=(o=I??J)!==null&&o!==void 0?o:te,{status:ce,hasFeedback:A,isFormItemInput:pe,feedbackIcon:be}=i.useContext(Le),he=Ge(ce,B);let S;M!==void 0?S=M:F==="combobox"?S=null:S=(w==null?void 0:w("Select"))||i.createElement(at,{componentName:"Select"});const{suffixIcon:fe,itemIcon:Fe,removeIcon:Se,clearIcon:ge}=rt(Object.assign(Object.assign({},L),{multiple:v,hasFeedback:A,feedbackIcon:be,showSuffixIcon:me,prefixCls:d,componentName:"Select"})),Ce=k===!0?{clearIcon:ge}:k,Pe=De(L,["suffixIcon","itemIcon"]),xe=R(b||H,{[`${d}-dropdown-${u}`]:u==="rtl"},n,X,N,j),E=je(h=>{var T;return(T=P??ie)!==null&&T!==void 0?T:h}),Ie=i.useContext(Xe),ye=x??Ie,we=R({[`${d}-lg`]:E==="large",[`${d}-sm`]:E==="small",[`${d}-rtl`]:u==="rtl",[`${d}-${ne}`]:se,[`${d}-in-form-item`]:pe},_e(d,he,A),re,m==null?void 0:m.className,r,n,X,N,j),Oe=i.useMemo(()=>g!==void 0?g:u==="rtl"?"bottomRight":"bottomLeft",[g,u]),[Ne]=Ae("SelectLike",f==null?void 0:f.zIndex);return de(i.createElement(lt,Object.assign({ref:t,virtual:ee,showSearch:m==null?void 0:m.showSearch},Pe,{style:Object.assign(Object.assign({},m==null?void 0:m.style),U),dropdownMatchSelectWidth:ue,transitionName:Ee(le,"slide-up",Z),builtinPlacements:it(W,oe),listHeight:V,listItemHeight:ae,mode:F,prefixCls:d,placement:Oe,direction:u,suffixIcon:fe,menuItemSelectedIcon:Fe,removeIcon:Se,allowClear:Ce,notFoundContent:S,className:we,getPopupContainer:p||q,dropdownClassName:xe,disabled:ye,dropdownStyle:Object.assign(Object.assign({},f),{zIndex:Ne}),maxCount:v?Y:void 0,tagRender:v?K:void 0})))},c=i.forwardRef(st),dt=Ze(c);c.SECRET_COMBOBOX_MODE_DO_NOT_USE=G;c.Option=Qe;c.OptGroup=et;c._InternalPanelDoNotUseOrYouWillBeFired=dt;const mt=e=>{const t=pt(e),o=ut(e),a=ct(e,e.value);return s.jsx(c,{...t,options:o,value:a,disabled:e.disabled||e.readOnly,optionFilterProp:e.optionFilterProp??"label",showSearch:e.showSearch!==!1,onSelect:(l,r)=>{var n;return(n=e.onSelect)==null?void 0:n.call(e,l,r)},onDeselect:(l,r)=>{var n;return(n=e.onDeselect)==null?void 0:n.call(e,l,r)},onChange:(l,r)=>{var n;return(n=e.onChange)==null?void 0:n.call(e,l,r)},children:e.children})},ut=e=>i.useMemo(()=>{if(!e.dataSet)return;const t=o=>{const a=[];if(!(!o||!Array.isArray(o))){for(const l of o){const r={...l};l.id&&(r.value=l.id),l.label&&(r.label=l.label),l.children&&(r.children=t(l.children)),a.push(r)}return a}};return t(e.dataSet)},[e.dataSet]),ct=(e,t)=>i.useMemo(()=>{if(typeof t>"u")return;if(!Array.isArray(t))return typeof t=="object"?{value:t.id,label:t.label}:t;const o=[];for(const a of t)typeof a=="object"?o.push({value:a.id,label:a.label}):o.push(a);return o},[t]),pt=e=>i.useMemo(()=>Ke(e,{dataSet:!0,value:!0,readOnly:!0,onSelect:!0,onDeselect:!0,onChange:!0})[1],[e]),bt=({field:e})=>{i.useSyncExternalStore(e.subscribe.bind(e),e.getSnapshot.bind(e));const t=e.getProps(),o=e.getValue(),a=i.useCallback((p,b)=>{e.isReady()&&(e.setValue(t.fullItemValue?b:p),e.setDirty(!0))},[e,t.fullItemValue]),l=i.useCallback(()=>{e.setTouched(!0)},[e]);i.useEffect(()=>{e.setReady(!0)},[e]);let r={};t.width&&(r={width:t.width});const n={...r,...t.style};return s.jsx(mt,{dataSet:t.dataSet,allowClear:t.allowClear!==!1,autoClearSearchValue:t.autoClearSearchValue,autoFocus:t.autoFocus,defaultActiveFirstOption:t.defaultActiveFirstOption,defaultOpen:t.defaultOpen,disabled:e.isDisabled(),readOnly:e.isReadOnly(),fieldNames:t.fieldNames,filterOption:t.filterOption,filterSort:t.filterSort,labelInValue:t.labelInValue,listHeight:t.listHeight,loading:t.loading,maxTagCount:t.maxTagCount,maxTagPlaceholder:t.maxTagPlaceholder,maxTagTextLength:t.maxTagTextLength,menuItemSelectedIcon:t.menuItemSelectedIcon,mode:t.mode,notFoundContent:t.notFoundContent,optionFilterProp:t.optionFilterProp,optionLabelProp:t.optionLabelProp,placeholder:t.placeholder,placement:t.placement,popupClassName:t.popupClassName,removeIcon:t.removeIcon,showSearch:t.showSearch,suffixIcon:t.suffixIcon,tagRender:t.tagRender,tokenSeparators:t.tokenSeparators,value:o,virtual:t.virtual,style:n,onBlur:l,onChange:a,onSelect:t.onSelect,onDeselect:t.onDeselect})};class ht extends _{render(){return s.jsx(bt,{field:this})}}const{TextArea:ft}=Ye,Ft=({field:e})=>{i.useSyncExternalStore(e.subscribe.bind(e),e.getSnapshot.bind(e));const t=e.getName(),o=e.getProps(),a=e.getValue(),l=i.useCallback(b=>{e.isReady()&&(e.setValue(b.target.value||null),e.setDirty(!0))},[e]),r=i.useCallback(()=>{e.setTouched(!0)},[e]);i.useEffect(()=>{e.setReady(!0)},[e]);let n={};o.width&&(n={width:o.width});const p={...n,...o.style};return s.jsx(ft,{autoFocus:o.autoFocus,autoSize:o.autoSize,cols:o.cols,disabled:e.isDisabled(),maxLength:o.maxLength,name:t,onBlur:r,onChange:l,placeholder:o.placeholder,readOnly:e.isReadOnly(),rows:o.rows,showCount:o.showCount,value:a,wrap:o.wrap,style:p})};class St extends _{render(){return s.jsx(Ft,{field:this})}}const gt=[{field:"num",title:"№",formatter:"rownum",width:50},{field:"name",title:"Наименование",headerFilter:!0,headerFilterFunc:"like"},{field:"format.label",title:"Формат",headerFilter:!0,headerFilterFunc:"like"}],Ct=[{field:"num",title:"№",formatter:"rownum",width:50},{field:"name",title:"Наименование",headerFilter:!0,headerFilterFunc:"like"},{field:"shortName",title:"Краткое наименование",headerFilter:!0,headerFilterFunc:"like"},{field:"code",title:"Код",headerFilter:!0,headerFilterFunc:"like"}],Pt=[{id:"01",name:"1С Зарплата и управление персоналом",shortName:"1С ЗиУП",code:"1C_ZIUP",inputs:[{id:"01",name:"Штатная расстановка",format:{id:"01",label:"JSON"}},{id:"02",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"021",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"022",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"023",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"024",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"025",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"026",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"027",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"028",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"029",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"0210",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"0211",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"0212",name:"Адресная книга",format:{id:"03",label:"XML"}}],outputs:[{id:"04",name:"Товарная накладная",format:{id:"02",label:"PDF"}}]},{id:"02",name:"1С Бухгалтерия",shortName:"1С BuNU",code:"1C_BUNU"},{id:"03",name:"SAP Кадровый модуль",shortName:"SAP HT",code:"SAP_HR"}],xt=[{id:"01",label:"JSON",description:"Файлы в формате JSON"},{id:"02",label:"PDF",description:"Файлы в формате PDF"},{id:"03",label:"XML",description:"Файлы в формате PDF"},{id:"04",label:"PNG",description:"Файлы в формате PNG"},{id:"05",label:"JPEG",description:"Файлы в формате JPEG"}],It={confirmChanges:!0,bodyHeight:300,fieldsProps:{name:{component:z,label:"Наименование"},shortName:{component:z,label:"Краткое наименование"},format:{component:ht,label:"Формат",dataSet:xt,fullItemValue:!0},description:{component:St,label:"Описание",autoSize:!0}}},yt={confirmChanges:!0,bodyHeight:400,width:600,fieldsProps:{tabs1:{component:$e,autoResize:!0,tabs:{" Входы ":{inputs:{component:qe,columns:gt,headerFilterHidden:!0,height:"320px",autoResize:!0,layout:"fitColumns",editFormProps:It}}}}}},wt=()=>s.jsx(Ue,{columns:Ct,dataSet:Pt,layout:"fitColumns",movableColumns:!0,buttonsSize:"middle",editFormProps:yt,height:"100%",buttons:{title:{type:"element",title:s.jsx("b",{style:{fontSize:18},children:"Системы"}),position:"left"}}}),_t=e=>s.jsxs(He,{children:[s.jsx("div",{children:s.jsx(wt,{})}),s.jsx(Re,{}),s.jsx("div",{children:s.jsx(Ve,{items:[{key:1,label:"Show source",children:s.jsx(Be,{language:"javascript",style:e.darkMode?We:Je,showLineNumbers:!0,children:`
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
`})}]})})]});export{_t as Page81b0c3e0698b4ef68c0c2dba3a481a2a,_t as default};
