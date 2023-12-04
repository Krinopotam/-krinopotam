import{r as l,A as H,_ as G,R as F,n as se,s as we,a as re,l as U,bL as ce,O as De,j as h,bM as xe}from"./index-bd83bb7b.js";import{G as ae,I as K,m as A,q as Ce,b as pe,c as Re,M as Pe,P as Se,O as ke,d as le,L as Fe,t as Oe,v as Ke,e as ge}from"./index-70b17d15.js";import{M as Ee,D as ee}from"./dFormModal-65650ab1.js";import{E as Ne}from"./EyeOutlined-9bf5471e.js";import{m as Te,E as je}from"./docco-5da19923.js";import{u as Me,T as Ie,S as Be,f as ue,F as Le,a as He,d as Ge,e as ze,C as _e,P as $e,D as Ve}from"./DeleteOutlined-cdccffb7.js";var Ue={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"}}]},name:"folder-open",theme:"outlined"};const We=Ue;var qe=function(t,o){return l.createElement(H,G({},t,{ref:o,icon:We}))};const Xe=l.forwardRef(qe);var Je={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z"}}]},name:"holder",theme:"outlined"};const Qe=Je;var Ye=function(t,o){return l.createElement(H,G({},t,{ref:o,icon:Qe}))};const Ze=l.forwardRef(Ye),te=4;function Ae(e){const{dropPosition:t,dropLevelOffset:o,prefixCls:n,indent:s,direction:r="ltr"}=e,c=r==="ltr"?"left":"right",a=r==="ltr"?"right":"left",u={[c]:-o*s+te,[a]:0};switch(t){case-1:u.top=-3;break;case 1:u.bottom=-3;break;default:u.bottom=-3,u[c]=s+te;break}return F.createElement("div",{style:u,className:`${n}-drop-indicator`})}const et=F.forwardRef((e,t)=>{const{getPrefixCls:o,direction:n,virtual:s,tree:r}=F.useContext(se),{prefixCls:c,className:a,showIcon:u=!1,showLine:i,switcherIcon:d,blockNode:f=!1,children:b,checkable:v=!1,selectable:C=!0,draggable:w,motion:k,style:j}=e,y=o("tree",c),g=o(),E=k??Object.assign(Object.assign({},we(g)),{motionAppear:!1}),D=Object.assign(Object.assign({},e),{checkable:v,selectable:C,showIcon:u,motion:E,blockNode:f,showLine:!!i,dropIndicatorRender:Ae}),[N,_]=Me(y),R=F.useMemo(()=>{if(!w)return!1;let m={};switch(typeof w){case"function":m.nodeDraggable=w;break;case"object":m=Object.assign({},w);break}return m.icon!==!1&&(m.icon=m.icon||F.createElement(Ze,null)),m},[w]),x=m=>F.createElement(Be,{prefixCls:y,switcherIcon:d,treeNodeProps:m,showLine:i});return N(F.createElement(Ie,Object.assign({itemHeight:20,ref:t,virtual:s},D,{style:Object.assign(Object.assign({},r==null?void 0:r.style),j),prefixCls:y,className:re({[`${y}-icon-hide`]:!u,[`${y}-block-node`]:f,[`${y}-unselectable`]:!C,[`${y}-rtl`]:n==="rtl"},r==null?void 0:r.className,a,_),direction:n,checkable:v&&F.createElement("span",{className:`${y}-checkbox-inner`}),selectable:C,switcherIcon:x,draggable:R}),b))}),ie=et;var S;(function(e){e[e.None=0]="None",e[e.Start=1]="Start",e[e.End=2]="End"})(S||(S={}));function W(e,t,o){const{key:n,children:s}=o;function r(c){const a=c[n],u=c[s];t(a,c)!==!1&&W(u||[],t,o)}e.forEach(r)}function tt(e){let{treeData:t,expandedKeys:o,startKey:n,endKey:s,fieldNames:r}=e;const c=[];let a=S.None;if(n&&n===s)return[n];if(!n||!s)return[];function u(i){return i===n||i===s}return W(t,i=>{if(a===S.End)return!1;if(u(i)){if(c.push(i),a===S.None)a=S.Start;else if(a===S.Start)return a=S.End,!1}else a===S.Start&&c.push(i);return o.includes(i)},ue(r)),c}function $(e,t,o){const n=U(t),s=[];return W(e,(r,c)=>{const a=n.indexOf(r);return a!==-1&&(s.push(c),n.splice(a,1)),!!n.length},ue(o)),s}var ne=globalThis&&globalThis.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(o[n[s]]=e[n[s]]);return o};function nt(e){const{isLeaf:t,expanded:o}=e;return t?l.createElement(Le,null):o?l.createElement(Xe,null):l.createElement(ce,null)}function oe(e){let{treeData:t,children:o}=e;return t||ze(o)}const ot=(e,t)=>{var{defaultExpandAll:o,defaultExpandParent:n,defaultExpandedKeys:s}=e,r=ne(e,["defaultExpandAll","defaultExpandParent","defaultExpandedKeys"]);const c=l.useRef(),a=l.useRef(),u=()=>{const{keyEntities:R}=He(oe(r));let x;return o?x=Object.keys(R):n?x=Ge(r.expandedKeys||s||[],R):x=r.expandedKeys||s,x},[i,d]=l.useState(r.selectedKeys||r.defaultSelectedKeys||[]),[f,b]=l.useState(()=>u());l.useEffect(()=>{"selectedKeys"in r&&d(r.selectedKeys)},[r.selectedKeys]),l.useEffect(()=>{"expandedKeys"in r&&b(r.expandedKeys)},[r.expandedKeys]);const v=(R,x)=>{var m;return"expandedKeys"in r||b(R),(m=r.onExpand)===null||m===void 0?void 0:m.call(r,R,x)},C=(R,x)=>{var m;const{multiple:Z,fieldNames:M}=r,{node:me,nativeEvent:P}=x,{key:I=""}=me,B=oe(r),L=Object.assign(Object.assign({},x),{selected:!0}),ye=(P==null?void 0:P.ctrlKey)||(P==null?void 0:P.metaKey),ve=P==null?void 0:P.shiftKey;let p;Z&&ye?(p=R,c.current=I,a.current=p,L.selectedNodes=$(B,p,M)):Z&&ve?(p=Array.from(new Set([].concat(U(a.current||[]),U(tt({treeData:B,expandedKeys:f,startKey:I,endKey:c.current,fieldNames:M}))))),L.selectedNodes=$(B,p,M)):(p=[I],c.current=I,a.current=p,L.selectedNodes=$(B,p,M)),(m=r.onSelect)===null||m===void 0||m.call(r,p,L),"selectedKeys"in r||d(p)},{getPrefixCls:w,direction:k}=l.useContext(se),{prefixCls:j,className:y,showIcon:g=!0,expandAction:E="click"}=r,D=ne(r,["prefixCls","className","showIcon","expandAction"]),N=w("tree",j),_=re(`${N}-directory`,{[`${N}-directory-rtl`]:k==="rtl"},y);return l.createElement(ie,Object.assign({icon:nt,ref:t,blockNode:!0},D,{showIcon:g,expandAction:E,prefixCls:N,className:_,expandedKeys:f,selectedKeys:i,onSelect:C,onExpand:v}))},st=l.forwardRef(ot),rt=st,q=ie;q.DirectoryTree=rt;q.TreeNode=_e;const ct=q;var at={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z"}}]},name:"filter",theme:"outlined"};const lt=at;var ut=function(t,o){return l.createElement(H,G({},t,{ref:o,icon:lt}))};const it=l.forwardRef(ut);var dt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]},name:"menu",theme:"outlined"};const ft=dt;var ht=function(t,o){return l.createElement(H,G({},t,{ref:o,icon:ft}))};const bt=l.forwardRef(ht);var de={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=l,o=function(){var r=(0,t.useRef)(!1);return(0,t.useEffect)(function(){return r.current=!1,function(){r.current=!0}},[]),r},n=o;e.default=n})(de);const mt=De(de),yt=({gridApi:e,props:t,tableRef:o,editFormApi:n,selectionFormApi:s,buttonsApi:r,setColumnsDialog:c})=>{const a=l.useRef(void 0),u=l.useRef(),i=l.useRef(),[d,f]=l.useState(!1),b=mt();return vt(a,t.dataSet),e.gridProps=t,e.tableApi=o.current,e.editFormApi=n,e.selectionFormApi=s,e.buttonsApi=r,e.getIsMounted=Dt(b),e.getId=wt(e),e.getDataSet=xt(a),e.setDataSet=Ct(a,e),e.getIsLoading=pt(d),e.setIsLoading=Rt(f),e.setActiveRowKey=Pt(e),e.getActiveRowKey=St(e),e.getActiveNode=kt(e),e.getActiveRow=Ft(e),e.getNextRowKey=Ot(e),e.getPrevRowKey=Kt(e),e.getSelectedRowKeys=gt(e),e.getSelectedNodes=Tt(e),e.getSelectedRows=jt(e),e.setSelectedRowKeys=Et(e),e.setSelectedRows=Nt(e),e.getNodeByKey=Mt(e),e.getRowByKey=It(e),e.insertRows=Bt(a,e),e.updateRows=Lt(a,e),e.removeRowsByKeys=zt(a,e),e.removeRows=_t(e),e.deleteRows=$t(e),e.fetchData=Vt(e),e.retryFetchData=qt(e),e.setCurrentDataFetchHandler=Ut(u,i),e.getCurrentDataFetchHandler=Wt(u,i),e.getRowData=Xt(e),e.openColumnDialog=Jt(e,c),e},vt=(e,t)=>{const o=l.useRef(void 0);o.current!==t&&(o.current=t,e.current=t)},wt=e=>{const[t]=l.useState(e.gridProps.id??"grid-"+ae());return l.useCallback(()=>t,[t])},Dt=e=>l.useCallback(()=>!e.current,[e]),xt=e=>l.useCallback(()=>e.current??void 0,[e]),Ct=(e,t)=>l.useCallback(o=>{var n,s,r,c,a;t.tableApi&&(e.current=o??void 0,(n=t.tableApi)==null||n.deselectRow(),(s=t.tableApi)==null||s.clearData(),(r=t.tableApi)==null||r.setData(e.current),(a=(c=t.gridProps).onDataChanged)==null||a.call(c,e.current,t))},[e,t]),pt=e=>l.useCallback(()=>e,[e]),Rt=e=>l.useCallback(t=>{e(t)},[e]),Pt=e=>l.useCallback((t,o,n)=>{e.tableApi&&e.tableApi.setActiveRowByKey(t,o,n)},[e]),St=e=>l.useCallback(()=>{var t,o;return(o=(t=e.tableApi)==null?void 0:t.getActiveRowKey)==null?void 0:o.call(t)},[e]),kt=e=>l.useCallback(()=>{var t,o;return(o=(t=e.tableApi)==null?void 0:t.getActiveRow)==null?void 0:o.call(t)},[e]),Ft=e=>l.useCallback(()=>{var t;return(t=e.getActiveNode())==null?void 0:t.getData()},[e]),Ot=e=>l.useCallback((t,o)=>{var s;if(!e.tableApi||!t)return;o||(o=1);let n=(s=e.tableApi)==null?void 0:s.getRow(t);if(n){for(let r=0;r<o;r++){const c=n==null?void 0:n.getNextRow();if(!c)return n.getData().id;n=c}return n.getData().id}},[e.tableApi]),Kt=e=>l.useCallback((t,o)=>{var s;if(!e.tableApi||!t)return;o||(o=1);let n=(s=e.tableApi)==null?void 0:s.getRow(t);if(n){for(let r=0;r<o;r++){const c=n==null?void 0:n.getPrevRow();if(!c)return n.getData().id;n=c}return n.getData().id}},[e.tableApi]),gt=e=>{const t=l.useRef([]);return l.useCallback(()=>{if(!e.tableApi)return t.current;const o=e.tableApi.getSelectedData(),n=[];for(const s of o)n.push(s.id);return n},[e])},Et=e=>l.useCallback((t,o)=>{var s,r;if(!e.tableApi)return;(!t||o)&&((s=e.tableApi)==null||s.deselectRow());const n=K(t)?t:[t];(r=e.tableApi)==null||r.selectRow(n)},[e]),Nt=e=>l.useCallback((t,o)=>{if(!e.tableApi)return;if(!t)return e.setSelectedRowKeys(void 0,o);const n=[];for(const s of t)n.push(s.id);e.setSelectedRowKeys(n,o)},[e]),Tt=e=>l.useCallback(()=>{var t,o;return((o=(t=e.tableApi)==null?void 0:t.getSelectedRows)==null?void 0:o.call(t))??[]},[e]),jt=e=>l.useCallback(()=>{var t,o;return((o=(t=e.tableApi)==null?void 0:t.getSelectedData)==null?void 0:o.call(t))??[]},[e]),Mt=e=>l.useCallback(t=>{var o;if(!(!t||!e.tableApi))return(o=e.tableApi)==null?void 0:o.getRow(t)},[e]),It=e=>l.useCallback(t=>{var o;return(o=e.getNodeByKey(t))==null?void 0:o.getData()},[e]),Bt=(e,t)=>l.useCallback((o,n,s,r)=>{var d,f;const c=t.tableApi;if(!c)return;const a=t.gridProps.dataTree,u=n==="above",i=K(o)?[...o]:[o];for(const b of i)a?Ht(t,[b],n,s):c.addData([b],u,s).then();e.current=c.getData()||[],(f=(d=t.gridProps).onDataChanged)==null||f.call(d,e.current,t),r&&i[0]&&t.setActiveRowKey(i[0].id,!0,"center"),c.setTableBodyFocus()},[e,t]),Lt=(e,t)=>l.useCallback((o,n)=>{var c,a,u;if(!t.tableApi)return;const s=t.gridProps.dataTree,r=K(o)?[...o]:[o];for(const i of r)s?Gt(t,i):t.tableApi.updateData([i]).then();e.current=((c=t.tableApi)==null?void 0:c.getData())||[],(u=(a=t.gridProps).onDataChanged)==null||u.call(a,e.current,t),n&&r[0]&&t.setActiveRowKey(r[0].id,!0,"center"),t.tableApi.setTableBodyFocus()},[e,t]),fe=(e,t)=>{if(!e.tableApi)return;const o=e.tableApi.options.dataTreeParentField,n=e.tableApi.options.index;if(!n||!o||!t[o])return;let s;if(typeof t[o]=="string"||typeof t[o]=="number"?s=t[o]:typeof t[o]=="object"&&(s=t[o][n]),!!s)return e.tableApi.getRow(s)||void 0},Ht=(e,t,o,n)=>{var c;if(!e.tableApi)return;if(!e.gridProps.dataTree){console.warn("TreeData mode is disabled. Tree row updating not available");return}const s=o==="above",r=K(t)?[...t]:[t];for(const a of r){const u=fe(e,a);u?(u.addTreeChild(a),X(u),u.reformat()):(c=e.tableApi)==null||c.addData([a],s,n)}},Gt=(e,t)=>{if(!e.tableApi)return;if(!e.gridProps.dataTree){console.warn("TreeData mode is disabled. Tree row updating not available");return}const o=e.tableApi.options.index,n=e.tableApi.options.dataTreeChildField;if(!o||!n)return;const s=K(t)?[...t]:[t];for(const r of s){const c=r[o],a=e.tableApi.getRow(c);if(!a){e.tableApi.addData([r]).then();continue}const u=a.getTreeParent(),i=fe(e,r);if(!u&&!i||u&&i&&u.getData()[o]===i.getData()[o]){e.tableApi.updateData([r]).then();continue}if(r[n]=a.getData()[n],e.tableApi.deselectRow(a),e.tableApi.deleteRow(c),u&&u.reformat(),!i){e.tableApi.addData([r]).then();continue}i.addTreeChild(r),X(i),i.reformat()}},X=e=>{if(!e)return;const t=e.getTreeParent();X(t),e.isTreeExpanded()||e.treeExpand()},zt=(e,t)=>l.useCallback(o=>{var u,i;const n=t.tableApi;if(!n)return;const s=n.options.index,r=K(o)?[...o]:[o];let c=!1,a=!1;for(const d of r){const f=n.getRow(d);if(!f)continue;c&&f===c&&(c=!1),a=f.getNextRow()||f.getPrevRow(),a&&(c=a);const b=n.options.dataTree?f.getTreeParent():!1;n.deselectRow(f),n.deleteRow(d),b&&b.reformat()}c&&s&&(c=n.getRow(c.getData()[s])),n.setActiveRow(c||null,!0,"bottom"),e.current=(n==null?void 0:n.getData())??[],(i=(u=t.gridProps).onDataChanged)==null||i.call(u,e.current,t),n.setTableBodyFocus()},[e,t]),_t=e=>l.useCallback(t=>{const o=K(t)?[...t]:[t],n=[];for(const s of o)n.push(s.id);e.removeRowsByKeys(n)},[e]),$t=e=>l.useCallback(t=>{if(!t)return;const o=Array.isArray(t)?t:[t],n=e.gridProps;let s;const r=()=>{var a;const c=(a=n==null?void 0:n.onDelete)==null?void 0:a.call(n,o,e);if(pe(c)){n.confirmDelete||e.setIsLoading(!0),c.then(()=>{e.getIsMounted()&&(e.removeRows(o),n.confirmDelete?s==null||s.destroy():e.setIsLoading(!1))}).catch(i=>{e.getIsMounted()&&(n.confirmDelete?s==null||s.destroy():e.setIsLoading(!1),A.alert({content:h.jsxs(h.Fragment,{children:[h.jsx("p",{children:h.jsx("b",{children:i.message})}),i.stack&&Re()?h.jsx("p",{children:i.stack}):""]}),colorType:"danger"}))});return}e.removeRows(o),s&&s.destroy()};n.confirmDelete?s=A.confirmWaiter({content:n.rowDeleteMessage??"Удалить выбранные строки?",onOk:r}):r()},[e]),Vt=e=>l.useCallback((t,o)=>{const n=e.tableApi;n&&(n.modules.page.dataChanging=!0,n.modules.ajax.setUrl("-"),t&&(n.modules.ajax.loaderPromise=Ce(e,t,o)),n.setData(void 0,o).then())},[e]),Ut=(e,t)=>l.useCallback((o,n)=>{e.current=o,t.current=n},[e,t]),Wt=(e,t)=>l.useCallback(()=>[e.current,t.current],[e,t]),qt=e=>l.useCallback(()=>{const[t,o]=e.getCurrentDataFetchHandler();t&&e.fetchData(t,o)},[e]),Xt=e=>l.useCallback((t,o,n,s,r)=>{const c=e.tableApi;if(!c||!t)return{};const a=s?{}:{...t.getData()};if(!c.options.dataTree)return a;const u=c.options.dataTreeParentField,i=c.options.dataTreeChildField;if(!r&&i&&delete a[i],!u||typeof a[u]<"u")return a;const d=n?t:t.getTreeParent();if(!d)return a;const f=d.getData();return!r&&i&&delete f[i],a[u]=d.getData(),a},[e]),Jt=(e,t)=>l.useCallback(o=>{t(o)},[t]),Qt=e=>l.useMemo(()=>{var s;const t=(s=e.gridProps)==null?void 0:s.editFormProps;if(!t)return;const o={...t},n=t==null?void 0:t.onSubmitSuccess;return o.onSubmitSuccess=(r,c,a)=>{if(n&&n(r,c,a)===!1)return!1;const u={...a.model.getFormDataSet(),...c},i=a.model.getFormMode();if(i==="create"||i==="clone"){u.id||(u.id=ae());const d=e.getActiveRowKey();e.insertRows(u,"below",d??void 0,!0)}else i==="update"&&e.updateRows(u,!0)},o},[e]),Yt=e=>{const[,t]=l.useState({}),o=e.gridProps.buttons,n=e.gridProps.buttonsSize??"small",s=e.gridProps.buttonsPosition??"right",r=e.gridProps.buttonsIconsOnly,c=e.getActiveRow(),a=e.getSelectedRows();e.buttonsApi.refreshButtons=Zt(t);const u=At(e),i=en(e,c,a),d=tn(e),f=nn(e,c,a),b=on(e,c,a),v=rn(e,a),C=sn(e),w=cn(e,e.tableApi),k=an(e);return l.useMemo(()=>{var g;const y=Pe({headerLabel:u,view:i,create:d,clone:f,update:b,select:C,delete:v,filterToggle:w,system:k},o);for(const E in y){const D=y[E];!D||E==="headerLabel"||(D.size=D.size??n,D.position=D.position??s,r&&(D.tooltip=D.tooltip??((g=D.title)==null?void 0:g.toString()),D.title=void 0))}return y},[o,s,n,f,d,v,w,r,u,C,k,b,i])},Zt=e=>l.useCallback(()=>{e({})},[e]),At=e=>l.useMemo(()=>{const t=e.gridProps;if(t.headerLabel)return{weight:1,title:t.headerLabel,type:"element",position:"left"}},[e]),en=(e,t,o)=>l.useMemo(()=>{var r;const n=e.gridProps,s=e.editFormApi;if(!(!n.editFormProps||!n.readOnly||((r=n.buttons)==null?void 0:r.view)===null))return{weight:100,title:"Просмотреть",tooltip:"Просмотреть запись",icon:h.jsx(Ne,{}),position:"right",disabled:!t||o.length!==1,hotKeys:[{key:"Enter"}],onClick:()=>{if(!e.getActiveRow())return;const c=z(e,!1);s.open("view",c)}}},[t,e,o.length]),tn=e=>l.useMemo(()=>{var n;const t=e.gridProps,o=e.editFormApi;if(!(!t.editFormProps||t.readOnly||((n=t.buttons)==null?void 0:n.create)===null))return{weight:110,title:"Создать",tooltip:"Создать новую запись",icon:h.jsx(Se,{}),position:"right",hotKeys:[{key:"Insert"}],onClick:()=>{const s=z(e,!0,!0);o.open("create",s)}}},[e]),nn=(e,t,o)=>l.useMemo(()=>{var r;const n=e.gridProps,s=e.editFormApi;if(!(!n.editFormProps||n.readOnly||((r=n.buttons)==null?void 0:r.clone)===null))return{weight:120,title:"Клонировать",tooltip:"Клонировать запись",icon:h.jsx(Te,{}),position:"right",disabled:!t||o.length!==1,hotKeys:[{key:"F9"}],onClick:()=>{if(!e.getActiveRow())return;const c=z(e,!1);s.open("clone",c)}}},[t,e,o.length]),on=(e,t,o)=>l.useMemo(()=>{var r;const n=e.gridProps,s=e.editFormApi;if(!(!n.editFormProps||n.readOnly||((r=n.buttons)==null?void 0:r.update)===null))return{weight:130,title:"Редактировать",tooltip:"Редактировать запись",icon:h.jsx(je,{}),position:"right",disabled:!t||o.length!==1,hotKeys:[{key:"Enter"},{key:"F2"}],onClick:()=>{if(!e.getActiveRow())return;const c=z(e,!1);s.open("update",c)}}},[t,e,o.length]),sn=e=>l.useMemo(()=>{var n;const t=e.gridProps,o=e.selectionFormApi;if(!(!t.selectionFormProps||t.readOnly||((n=t.buttons)==null?void 0:n.select)===null))return{weight:130,title:"Выбрать",tooltip:"Выбрать записи",icon:h.jsx($e,{}),position:"right",hotKeys:[{key:"Insert"}],onClick:()=>{const s=e.getDataSet();o.open("update",{select:s})}}},[e]),rn=(e,t)=>l.useMemo(()=>{var n;const o=e.gridProps;if(!(!o.editFormProps&&!o.selectionFormProps||o.readOnly||((n=o.buttons)==null?void 0:n.delete)===null))return{weight:140,title:"Удалить",tooltip:"Удалить запись",icon:h.jsx(Ve,{}),position:"right",colorType:"danger",disabled:!t||t.length===0,hotKeys:[{key:"Delete",ctrl:!0}],onClick:()=>{const s=e.getSelectedRows();e.deleteRows(s)}}},[e,t]),cn=(e,t)=>l.useMemo(()=>{var n,s;if(((n=e.gridProps.buttons)==null?void 0:n.filterToggle)!==null&&t!=null&&t.isHeaderFilterAvailable())return{weight:1e3,icon:h.jsx(it,{}),position:"right",active:(s=e.tableApi)==null?void 0:s.isHeaderFilterVisible(),tooltip:"Фильтр",onClick:()=>{const r=t==null?void 0:t.toggleHeaderFilter();e.buttonsApi.updateButtons({filterToggle:{active:r}})}}},[e.buttonsApi,e.gridProps,e.tableApi,t]),z=(e,t,o)=>{const n=e.getActiveNode();return e.getRowData(n,!0,t,o)},an=e=>l.useMemo(()=>{var o;if(((o=e.gridProps.buttons)==null?void 0:o.filterToggle)!==null)return{weight:2e3,expandIcon:h.jsx(bt,{}),position:"right",children:{toXlsx:{title:"Экспорт в Excel",onClick:()=>{xe(()=>import("./xlsx-5c181179.js"),[]).then(s=>{var r;window.XLSX=s,(r=e.tableApi)==null||r.download("xlsx","table.xlsx")})}},columns:{title:"Настройки столбцов",onClick:()=>{e.openColumnDialog(!0)}}}}},[e]),ln=({gridApi:e})=>{const t=e.gridProps,o=Yt(e),[n,s]=l.useState(void 0);return l.useLayoutEffect(()=>{var c;const r=ke(o)>0;(typeof n>"u"||n!==r)&&(s(r),(c=t==null?void 0:t.onMenuVisibilityChanged)==null||c.call(t,r,e))},[o,e,t,t==null?void 0:t.onMenuVisibilityChanged,n]),o?h.jsx("div",{style:{width:"100%",paddingBottom:8,paddingTop:8},children:h.jsx(le,{buttons:o,apiRef:e.buttonsApi})}):null},un=e=>{const[t]=l.useState({});return h.jsx(Ee,{title:"Столбцы",destroyOnClose:!0,centered:!0,open:e.open,onCancel:()=>e.gridApi.openColumnDialog(!1),footer:h.jsx(fn,{formProps:e,dialogApi:t}),children:e.open&&h.jsx(dn,{dialogProps:e,dialogApi:t})})},dn=({dialogProps:e,dialogApi:t})=>{const o=e.gridApi.tableApi,[n,s]=l.useState([]),[r,c]=l.useState([]),[a,u]=l.useState([]);t.gridApi=e.gridApi,t.setNodes=u,t.setChecked=s,t.setExpanded=c,l.useEffect(()=>{const b=be(o.getColumns(!0));he(t,b),hn(t)},[]);const i=xn(t,s),d=Dn(t),f=wn(t);return h.jsx(ct,{draggable:!0,blockNode:!0,showIcon:!0,defaultExpandAll:!0,checkable:!0,expandedKeys:r,checkedKeys:n,treeData:a,selectable:!1,onCheck:i,allowDrop:f,onDrop:d,onExpand:b=>{c(b)}})},fn=({formProps:e,dialogApi:t})=>h.jsx(le,{arrowsSelection:!0,buttons:{ok:{title:"OK",position:"right",active:!0,onClick:()=>Cn(e,t)},cancel:{title:"Отмена",position:"right",onClick:()=>{e.gridApi.openColumnDialog(!1)}},default:{title:"По умолчанию",position:"left",onClick:()=>pn(e,t)}}}),he=(e,t)=>{e.columnsDefsMap={};const o=(r,c)=>{var i;c||(c={val:0});let a=[];const u=[];for(const d of r){c.val++;const f=c.val.toString(),b={key:f,title:d.title};let v=d.visible!==!1;if((i=d.columns)!=null&&i.length){b.icon=h.jsx(ce,{});const[C,w]=o(d.columns,c);b.children=C,a=[...a,...w],w.length<d.columns.length&&(v=!1)}u.push(b),v&&a.push(f),e.columnsDefsMap[f]=d}return[u,a]},[n,s]=o(t);e.nodes=n,e.checked=s,e.setNodes(n),e.setChecked(s)},hn=e=>{const t=[];for(const o in e.columnsDefsMap)t.push(o);e.setExpanded(t)},bn=e=>{const t=n=>{var c;const s=[];let r=!1;for(const a of n){const u=e.columnsDefsMap[a.key.toString()];if(u.visible=e.checked.indexOf(a.key)>-1,(c=a.children)!=null&&c.length){const[i,d]=t(a.children);u.columns=i,d&&(u.visible=!0)}else delete u.columns;u.visible&&(r=!0),s.push(u)}return[s,r]},[o]=t(e.nodes);return o},be=e=>{const t=[];for(const o of e){const n={...o.getDefinition()};n.visible=o.isVisible(),n.width=o.getWidth();const s=o.getSubColumns();s!=null&&s.length&&(n.columns=be(s)),t.push(n)}return t},mn=e=>{const t=(o,n)=>{var r;const s=[];for(const c of o){const a={...n,...c};a.visible=a.visible!==!1,a.width||(a.width=0),(r=a.columns)!=null&&r.length&&(a.columns=t(a.columns,n)),s.push(a)}return s};return t(e.columns,e.columnDefaults??{})},yn=(e,t)=>{if(t.default&&e.gridApi.gridProps.persistence){const s=e.gridApi.gridProps.persistenceID??e.gridApi.getId();localStorage.removeItem(`tabulator-${s}-columns`)}const o=bn(t),n=t.gridApi.tableApi;n==null||n.setColumnLayout(o),n!=null&&n.isHeaderFilterVisible()||n==null||n.toggleHeaderFilter(!1)},T=(e,t)=>{var o;for(const n of e){if(n.key===t)return n;if(!((o=n.children)!=null&&o.length))continue;const s=T(n.children,t);if(s)return s}},J=(e,t)=>{var n;let o=0;for(const s of e){if(s.key===t)return e.splice(o,1),!0;(n=s.children)!=null&&n.length&&J(s.children,t),o++}},O=(e,t,o)=>{var n;for(const s of e){if(s.key===t.key)return o;if(!((n=s.children)!=null&&n.length))continue;const r=O(s.children,t,s);if(r)return r}},Q=(e,t,o)=>{const n=e,s=O(o.nodes,e);if((s==null?void 0:s.key)===(t==null?void 0:t.key))return n;if(s)return Q(s,t,o)},Y=e=>{var o,n;if(!((o=e.children)!=null&&o.length))return e;const t=e.children[e.children.length-1];return(n=t.children)!=null&&n.length?Y(t):t},vn=(e,t,o)=>{var s;if(!(t!=null&&t.children))return!1;const n=O(o.nodes,e);return t.key===(n==null?void 0:n.key)?(J(o.nodes,e.key),(s=t.children)==null||s.unshift(e),!0):(console.warn("Drop on the content: target is another group"),!1)},V=(e,t,o,n)=>{if(!t)return!1;const s=O(n.nodes,e),r=O(n.nodes,t);if(!s&&r||s&&!r||(s==null?void 0:s.key)!==(r==null?void 0:r.key))return console.warn("Node and target node have different parents"),!1;let c=[];if(!s&&!r)c=n.nodes;else if((s==null?void 0:s.key)===(r==null?void 0:r.key))c=r.children;else return!1;J(n.nodes,e.key);const a=c.indexOf(t);return a<0?!1:(c.splice(a+(o==="below"?1:0),0,e),!0)},wn=e=>{const t=o=>{const n=T(e.nodes,o.dragNode.key),s=T(e.nodes,o.dropNode.key);if(!n||!s)return!1;const r=O(e.nodes,n),c=O(e.nodes,s);if(o.dropPosition===-1)return r===c;if(o.dropPosition===0||o.dropPosition===1){if(!s.children&&r===c||s.children&&r===s)return!0;const a=Q(s,r,e);if(!a)return!1;if(s===Y(a))return!0}return!1};return l.useCallback(t,[e])},Dn=e=>{const t=o=>{const n=T(e.nodes,o.dragNode.key),s=T(e.nodes,o.node.key);if(!s||!n)return;const r=O(e.nodes,n);if(o.node.dragOverGapTop)V(n,s,"above",e);else{const c=Q(s,r,e);c&&s===Y(c)?V(n,c,"below",e):s.children?vn(n,s,e):V(n,s,"below",e)}e.setNodes([...e.nodes])};return l.useCallback(t,[e])},xn=(e,t)=>l.useCallback(o=>{let n;Array.isArray(o)?n=o:n=[...o.checked,...o.halfChecked],e.checked=n,t(n)},[e,t]),Cn=(e,t)=>{yn(e,t),e.gridApi.openColumnDialog(!1)},pn=(e,t)=>{const o=mn(e.gridApi.gridProps);t.default=!0,he(t,o)},Rn=e=>l.useMemo(()=>{var s;const t=(s=e.gridProps)==null?void 0:s.selectionFormProps;if(!t)return;const o={...t},n=t==null?void 0:t.onSubmitSuccess;return o.onSubmitSuccess=(r,c,a)=>{if(n&&n(r,c,a)===!1)return!1;const u={...a.model.getFormDataSet(),...c},i=e.gridProps,d=u.select??[];if(!i.appendSelection)return e.setDataSet(d);const f=e.getDataSet()??[];for(const b of d)f.find(v=>v.id===b.id)||e.insertRows(b)},o},[e]),Pn=({tableRef:e,gridApi:t,gridProps:o,tabulatorProps:n,columnsDialog:s})=>{const r=Qt(t),c=Rn(t);return h.jsxs("div",{className:"tabulator-grid-container",style:{height:o.height||void 0,minHeight:o.minHeight,maxHeight:o.maxHeight},children:[h.jsx(Fe,{isLoading:t.getIsLoading(),notHideContent:!0,spinStyle:{height:"100%"},children:h.jsxs(Oe,{style:{display:"flex",flexDirection:"column"},children:[h.jsx(ln,{gridApi:t}),h.jsx(Ke,{tableRef:e,gridApi:t,gridProps:o,tabulatorProps:n})]})}),h.jsx(un,{open:s,gridApi:t}),r?h.jsx(ee,{...r,apiRef:t.editFormApi}):null,c?h.jsx(ee,{...c,apiRef:t.selectionFormApi}):null]})},Nn=e=>{var i,d;const t=Sn(e),o=l.useRef(),[n]=l.useState(((i=e.editFormProps)==null?void 0:i.apiRef)??{}),[s]=l.useState(((d=e.selectionFormProps)==null?void 0:d.apiRef)??{}),[r]=l.useState({}),[c]=l.useState(e.apiRef||{}),[a,u]=l.useState(!1);return yt({gridApi:c,props:e,tableRef:o,editFormApi:n,selectionFormApi:s,buttonsApi:r,setColumnsDialog:u}),h.jsx(Pn,{tableRef:o,gridApi:c,gridProps:e,tabulatorProps:t,columnsDialog:a})},Sn=e=>l.useMemo(()=>ge(e,{apiRef:!0,id:!0,gridMode:!0,dataSet:!0,className:!0,headerLabel:!0,buttons:!0,buttonsSize:!0,buttonsPosition:!0,buttonsIconsOnly:!0,readOnly:!0,editFormProps:!0,selectionFormProps:!0,appendSelection:!0,noHover:!0,rowDeleteMessage:!0,confirmDelete:!0,placeholder:!0,onMenuVisibilityChanged:!0,onDataLoading:!0,onDataLoadError:!0,onDataLoaded:!0,onDataChanged:!0,onDataProcessed:!0,onDataFetch:!0,onDataFetching:!0,onDataFetchResponse:!0,onSelectionChange:!0,onDelete:!0,resizeHeightWithParent:!0})[1],[e]);export{Nn as T};
