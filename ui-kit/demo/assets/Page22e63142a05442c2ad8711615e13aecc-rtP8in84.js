const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-9FGXM8eG.js","assets/default-highlight-_K3mzjfK.js","assets/index-CObHp3AH.js"])))=>i.map(i=>d[i]);
import{r,i as ve,a1 as Te,E as Le,F as ke,G as De,z as _e,c as z,s as Xe,H as je,I as Ee,J as ze,j as s,_ as Re,D as Ge}from"./index-CObHp3AH.js";import{T as Ae}from"./tabulatorGrid-C-CHviK6.js";import{T as Be}from"./tabsField-CLxRtrIU.js";import{I as R}from"./inputField-CMzynz8s.js";import{B as G,n as A}from"./dForm-DjwSwKfj.js";import{I as He}from"./index-Bcx3LFQ2.js";import{T as Ve}from"./tabulatorGridField-C-PNx9nT.js";import{s as We}from"./dFormModal-BBSecmha.js";import{O as Je,d as Ue,b as $e,c as Ze,D as Ye,T as qe,m as Ke}from"./useShowArrow-DWc_B7kV.js";import{g as Qe}from"./DownOutlined-BYejAm0U.js";import{u as et,g as tt,a as ot}from"./CheckOutlined-ka3l-INf.js";import{u as at}from"./useIcons-Q8Q6Q-7D.js";import{P as it,C as rt,d as lt,c as nt}from"./darcula-D-n55oql.js";import"./modal-BBQwvlDP.js";import"./defaultButtonsProps-DSb7WT6w.js";import"./iconUtil-DejahXk-.js";import"./index-BubinFZA.js";import"./modal-B2hVzaN7.js";import"./index-CVqHkW2e.js";import"./index-ByCva3dC.js";import"./SearchOutlined-DZTAjpNT.js";var st=function(e,o){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&o.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)o.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const B="SECRET_COMBOBOX_MODE_DO_NOT_USE",dt=(e,o)=>{var t;const{prefixCls:a,bordered:i,className:l,rootClassName:n,getPopupContainer:p,popupClassName:S,dropdownClassName:H,listHeight:V=256,placement:C,listItemHeight:g,size:P,disabled:x,notFoundContent:T,status:W,builtinPlacements:J,dropdownMatchSelectWidth:U,popupMatchSelectWidth:w,direction:y,style:$,allowClear:L,variant:Z,dropdownStyle:h,transitionName:Y,tagRender:q,maxCount:K}=e,k=st(e,["prefixCls","bordered","className","rootClassName","getPopupContainer","popupClassName","dropdownClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","builtinPlacements","dropdownMatchSelectWidth","popupMatchSelectWidth","direction","style","allowClear","variant","dropdownStyle","transitionName","tagRender","maxCount"]),{getPopupContainer:Q,getPrefixCls:D,renderEmpty:I,direction:ee,virtual:te,popupMatchSelectWidth:oe,popupOverflow:ae,select:m}=r.useContext(ve),[,O]=Te(),ie=g??(O==null?void 0:O.controlHeight),d=D("select",a),re=D(),u=y??ee,{compactSize:le,compactItemClassnames:ne}=Le(d,u),[se,de]=et("select",Z,i),M=ke(d),[me,_,X]=$e(d,M),f=r.useMemo(()=>{const{mode:b}=e;if(b!=="combobox")return b===B?"combobox":b},[e.mode]),N=f==="multiple"||f==="tags",ue=Ze(e.suffixIcon,e.showArrow),ce=(t=w??U)!==null&&t!==void 0?t:oe,{status:pe,hasFeedback:j,isFormItemInput:be,feedbackIcon:he}=r.useContext(De),fe=ot(pe,W);let F;T!==void 0?F=T:f==="combobox"?F=null:F=(I==null?void 0:I("Select"))||r.createElement(Ye,{componentName:"Select"});const{suffixIcon:Fe,itemIcon:Se,removeIcon:Ce,clearIcon:ge}=at(Object.assign(Object.assign({},k),{multiple:N,hasFeedback:j,feedbackIcon:he,showSuffixIcon:ue,prefixCls:d,componentName:"Select"})),Pe=L===!0?{clearIcon:ge}:L,xe=_e(k,["suffixIcon","itemIcon"]),we=z(S||H,{[`${d}-dropdown-${u}`]:u==="rtl"},n,X,M,_),E=Xe(b=>{var v;return(v=P??le)!==null&&v!==void 0?v:b}),ye=r.useContext(je),Ie=x??ye,Oe=z({[`${d}-lg`]:E==="large",[`${d}-sm`]:E==="small",[`${d}-rtl`]:u==="rtl",[`${d}-${se}`]:de,[`${d}-in-form-item`]:be},tt(d,fe,j),ne,m==null?void 0:m.className,l,n,X,M,_),Me=r.useMemo(()=>C!==void 0?C:u==="rtl"?"bottomRight":"bottomLeft",[C,u]),[Ne]=Ee("SelectLike",h==null?void 0:h.zIndex);return me(r.createElement(qe,Object.assign({ref:o,virtual:te,showSearch:m==null?void 0:m.showSearch},xe,{style:Object.assign(Object.assign({},m==null?void 0:m.style),$),dropdownMatchSelectWidth:ce,transitionName:ze(re,"slide-up",Y),builtinPlacements:Ke(J,ae),listHeight:V,listItemHeight:ie,mode:f,prefixCls:d,placement:Me,direction:u,suffixIcon:Fe,menuItemSelectedIcon:Se,removeIcon:Ce,allowClear:Pe,notFoundContent:F,className:Oe,getPopupContainer:p||Q,dropdownClassName:we,disabled:Ie,dropdownStyle:Object.assign(Object.assign({},h),{zIndex:Ne}),maxCount:N?K:void 0,tagRender:N?q:void 0})))},c=r.forwardRef(dt),mt=Qe(c);c.SECRET_COMBOBOX_MODE_DO_NOT_USE=B;c.Option=Je;c.OptGroup=Ue;c._InternalPanelDoNotUseOrYouWillBeFired=mt;const{TextArea:ut}=He,ct=({field:e})=>{r.useSyncExternalStore(e.subscribe.bind(e),e.getSnapshot.bind(e));const o=e.getName(),t=e.getProps(),a=e.getValue(),i=r.useCallback(S=>{e.isReady()&&(e.setValue(S.target.value),e.setDirty(!0))},[e]),l=r.useCallback(()=>{e.setTouched(!0)},[e]);r.useEffect(()=>{e.setReady(!0)},[e]);let n={};t.width&&(n={width:t.width});const p={...n,...t.style};return s.jsx(ut,{autoFocus:t.autoFocus,autoSize:t.autoSize,cols:t.cols,disabled:e.isDisabled(),maxLength:t.maxLength,name:o,onBlur:l,onChange:i,placeholder:t.placeholder,readOnly:e.isReadOnly(),rows:t.rows,showCount:t.showCount,value:a,wrap:t.wrap,style:p})};class pt extends G{render(){return s.jsx(ct,{field:this})}}const bt=e=>{const o=Ft(e),t=ht(e),a=ft(e,e.value);return s.jsx(c,{...o,options:t,value:a,disabled:e.disabled||e.readOnly,optionFilterProp:e.optionFilterProp??"label",showSearch:e.showSearch!==!1,onSelect:(i,l)=>{var n;return(n=e.onSelect)==null?void 0:n.call(e,i,l)},onDeselect:(i,l)=>{var n;return(n=e.onDeselect)==null?void 0:n.call(e,i,l)},onChange:(i,l)=>{var n;return(n=e.onChange)==null?void 0:n.call(e,i,l)},children:e.children})},ht=e=>r.useMemo(()=>{if(!e.dataSet)return;const o=t=>{const a=[];if(!(!t||!A(t))){for(const i of t){const l={...i};i.id&&(l.value=i.id),i.label&&(l.label=i.label),i.children&&(l.children=o(i.children)),a.push(l)}return a}};return o(e.dataSet)},[e.dataSet]),ft=(e,o)=>r.useMemo(()=>{if(typeof o>"u")return;if(!A(o))return typeof o=="object"?{value:o.id,label:o.label}:o;const t=[];for(const a of o)typeof a=="object"?t.push({value:a.id,label:a.label}):t.push(a);return t},[o]),Ft=e=>r.useMemo(()=>We(e,{dataSet:!0,value:!0,readOnly:!0,onSelect:!0,onDeselect:!0,onChange:!0})[1],[e]),St=({field:e})=>{r.useSyncExternalStore(e.subscribe.bind(e),e.getSnapshot.bind(e));const o=e.getProps(),t=e.getValue(),a=r.useCallback(p=>{e.isReady()&&(e.setValue(p),e.setDirty(!0))},[e]),i=r.useCallback(()=>{e.setTouched(!0)},[e]);r.useEffect(()=>{e.setReady(!0)},[e]);let l={};o.width&&(l={width:o.width});const n={...l,...o.style};return s.jsx(bt,{allowClear:!0,...o,disabled:e.isDisabled(),readOnly:e.isReadOnly(),value:t,style:n,onBlur:i,onChange:a})};class Ct extends G{render(){return s.jsx(St,{field:this})}}const gt=[{field:"num",title:"№",formatter:"rownum",accessor:"rownum",width:50},{field:"name",title:"Наименование",headerFilter:!0,headerFilterFunc:"like"},{field:"format.label",title:"Формат",headerFilter:!0,headerFilterFunc:"like"}],Pt=[{field:"num",title:"№",formatter:"rownum",accessor:"rownum",width:50},{field:"name",title:"Наименование",headerFilter:!0,headerFilterFunc:"like"},{field:"shortName",title:"Краткое наименование",headerFilter:!0,headerFilterFunc:"like"},{field:"code",title:"Код",headerFilter:!0,headerFilterFunc:"like"}],xt=[{id:"01",name:"1С Зарплата и управление персоналом",shortName:"1С ЗиУП",code:"1C_ZIUP",inputs:[{id:"01",name:"Штатная расстановка",format:{id:"01",label:"JSON"}},{id:"02",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"021",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"022",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"023",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"024",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"025",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"026",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"027",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"028",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"029",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"0210",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"0211",name:"Адресная книга",format:{id:"03",label:"XML"}},{id:"0212",name:"Адресная книга",format:{id:"03",label:"XML"}}],outputs:[{id:"04",name:"Товарная накладная",format:{id:"02",label:"PDF"}}]},{id:"02",name:"1С Бухгалтерия",shortName:"1С BuNU",code:"1C_BUNU"},{id:"03",name:"SAP Кадровый модуль",shortName:"SAP HT",code:"SAP_HR"}],wt=[{id:"01",label:"JSON",description:"Файлы в формате JSON"},{id:"02",label:"PDF",description:"Файлы в формате PDF"},{id:"03",label:"XML",description:"Файлы в формате PDF"},{id:"04",label:"PNG",description:"Файлы в формате PNG"},{id:"05",label:"JPEG",description:"Файлы в формате JPEG"}],yt={confirmChanges:!0,height:300,fieldsProps:{name:{component:R,label:"Наименование"},shortName:{component:R,label:"Краткое наименование"},format:{component:Ct,label:"Формат",dataSet:wt,fullItemValue:!0},description:{component:pt,label:"Описание",autoSize:!0}}},It={confirmChanges:!0,height:400,width:600,fieldsProps:{tabs1:{component:Be,autoResize:!0,tabs:{" Входы ":{inputs:{component:Ve,columns:gt,headerFilterHidden:!0,height:"320px",autoResize:!0,layout:"fitColumns",editFormProps:yt}}}}}},Ot=()=>s.jsx(Ae,{columns:Pt,dataSet:xt,layout:"fitColumns",movableColumns:!0,buttonsSize:"middle",editFormProps:It,height:"100%",buttons:{title:{type:"element",title:s.jsx("b",{style:{fontSize:18},children:"Системы"}),position:"left"}}}),Mt=r.lazy(()=>Re(()=>import("./index-9FGXM8eG.js").then(e=>e.ds),__vite__mapDeps([0,1,2])).then(e=>({default:e.Prism}))),Zt=e=>s.jsxs(it,{children:[s.jsx("div",{children:s.jsx(Ot,{})}),s.jsx(Ge,{}),s.jsx("div",{children:s.jsx(rt,{items:[{key:1,label:"Show source",children:s.jsx(r.Suspense,{fallback:s.jsx("div",{children:"Loading source..."}),children:s.jsx(Mt,{language:"tsx",style:e.darkMode?lt:nt,showLineNumbers:!0,children:`
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
`})})}]})})]});export{Zt as Page22e63142a05442c2ad8711615e13aecc,Zt as default};
