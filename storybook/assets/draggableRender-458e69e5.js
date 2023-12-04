var Be=Object.defineProperty;var Ye=(e,t,n)=>t in e?Be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var j=(e,t,n)=>(Ye(e,typeof t!="symbol"?t+"":t,n),n);import{j as S}from"./useToken-268f632d.js";import{r as p,a as De,R as Xe}from"./index-5819ae2c.js";import{t as Ce}from"./index-e0a25a8d.js";import{I as Ae}from"./InfoCircleOutlined-14b312e0.js";import{_ as ae}from"./isNativeReflectConstruct-2f1897fe.js";import{d as $e,c as _e,A as se}from"./compact-item-e0eb0d02.js";import{S as Le}from"./button-ec5b8345.js";import"./index-092ccb3f.js";import{G as ge}from"./helpersString-59da762c.js";import{a as je,C as ze,F as Ue,P as Ge,r as Ke,O as Je,u as Qe,c as $,w as Ze,b as et,d as tt,e as nt,f as ye,m as rt,g as ot}from"./index-ba109c1e.js";import{w as at}from"./PurePanel-a66be90d.js";import{a as st,B as it,I as lt}from"./buttonsRow-55ffb0a1.js";import{a as ut,g as dt}from"./_commonjsHelpers-de833af9.js";import{p as xe}from"./index-9d475cdf.js";var ct=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const ft=e=>{const{prefixCls:t,className:n,closeIcon:r,closable:o,type:a,title:i,children:c}=e,f=ct(e,["prefixCls","className","closeIcon","closable","type","title","children"]),{getPrefixCls:g}=p.useContext($e),w=g(),_=t||g("modal"),[,m]=je(_),y=`${_}-confirm`;let v={};return a?v={closable:o??!1,title:"",footer:"",children:p.createElement(ze,Object.assign({},e,{prefixCls:_,confirmPrefixCls:y,rootPrefixCls:w,content:c}))}:v={closable:o??!0,title:i,footer:e.footer===void 0?p.createElement(Ue,Object.assign({},e)):e.footer,children:c},p.createElement(Ge,Object.assign({prefixCls:_,className:_e(m,`${_}-pure-panel`,a&&y,a&&`${y}-${a}`,n)},f,{closeIcon:Ke(_,r),closable:o},v))},mt=at(ft);function Pe(e){return $(ot(e))}const R=Je;R.useModal=Qe;R.info=function(t){return $(Ze(t))};R.success=function(t){return $(et(t))};R.error=function(t){return $(tt(t))};R.warning=Pe;R.warn=Pe;R.confirm=function(t){return $(nt(t))};R.destroyAll=function(){for(;ye.length;){const t=ye.pop();t&&t()}};R.config=rt;R._InternalPanelDoNotUseOrYouWillBeFired=mt;const pt=R;const{useToken:ht}=Ce,ne=({onMouseResize:e,resizable:t,children:n,style:r,colorType:o})=>{const{token:a}=ht(),i=yt(a,o);return S.jsxs("div",{children:[S.jsx("div",{style:{borderTopWidth:1,borderTopStyle:"solid",borderTopColor:i,...r},children:n}),t?S.jsx(gt,{onMouseDown:e}):null]})},gt=e=>S.jsx("div",{className:"resize-handle",...e,children:S.jsx("div",{className:"resize-handle-inner"})}),yt=(e,t)=>{let n=e.colorFillSecondary;return t==="info"?n=e.colorInfoHover:t==="success"?n=e.colorSuccessHover:t==="warning"?n=e.colorWarningHover:t==="danger"&&(n=e.colorErrorHover),n};try{ne.displayName="FooterRender",ne.__docgenInfo={description:"",displayName:"FooterRender",props:{onMouseResize:{defaultValue:null,description:"",name:"onMouseResize",required:!0,type:{name:"MouseEventHandler<HTMLDivElement> | undefined"}},resizable:{defaultValue:null,description:"",name:"resizable",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},colorType:{defaultValue:null,description:"",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}}}}}catch{}var vt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"check-circle",theme:"outlined"};const bt=vt;var St=function(t,n){return p.createElement(se,ae({},t,{ref:n,icon:bt}))};const wt=p.forwardRef(St);var Dt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"}}]},name:"exclamation-circle",theme:"outlined"};const Ct=Dt;var _t=function(t,n){return p.createElement(se,ae({},t,{ref:n,icon:Ct}))};const xt=p.forwardRef(_t);var Pt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z"}}]},name:"stop",theme:"outlined"};const Tt=Pt;var Mt=function(t,n){return p.createElement(se,ae({},t,{ref:n,icon:Tt}))};const Nt=p.forwardRef(Mt),{useToken:Ot}=Ce,re=e=>{const{token:t}=Ot();let n=t.colorFillSecondary,r=t.colorText,o;e.colorType==="info"?(n=t.colorInfoHover,r=t.colorWhite,o=e.icon??S.jsx(Ae,{})):e.colorType==="success"?(n=t.colorSuccessHover,r=t.colorWhite,o=e.icon??S.jsx(wt,{})):e.colorType==="warning"?(n=t.colorWarningHover,r=t.colorWhite,o=e.icon??S.jsx(xt,{})):e.colorType==="danger"?(n=t.colorErrorHover,r=t.colorWhite,o=e.icon??S.jsx(Nt,{})):o=e.icon??void 0;const i={...{display:"block",backgroundColor:n,color:r,borderTopLeftRadius:t.borderRadius,borderTopRightRadius:t.borderRadius,minHeight:27},...e.style};return S.jsx("div",{id:e.draggableId,style:i,children:S.jsxs(Le,{children:[o,e.title]})})};try{re.displayName="HeaderRender",re.__docgenInfo={description:"",displayName:"HeaderRender",props:{draggableId:{defaultValue:null,description:"",name:"draggableId",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},colorType:{defaultValue:null,description:"",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}}}}}catch{}const Et=(e,t,n)=>S.jsx(oe,{node:S.jsx(st,{remoteCallbacksRef:n,children:e}),targetId:t});/**
 * @FormsDispatcher
 * @description The form dispatcher stores information about open forms and their order
 * @version 0.0.28.35
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */class Te{constructor(){j(this,"_formsStack");j(this,"_activeFormId");this._formsStack=[],this._activeFormId=""}static get Instance(){return this._instance||(this._instance=new this)}pushToStack(t){this._activeFormId!==t&&(this._formsStack.push(t),this._activeFormId=t)}removeFromStack(t){const n=this._formsStack.indexOf(t);n>-1&&this._formsStack.splice(n,1),this._activeFormId=this._formsStack.length?this._formsStack[this._formsStack.length-1]:""}getActive(){return this._activeFormId}isActive(t){return this._activeFormId===t}}j(Te,"_instance");const Q=Te.Instance;/**
 * @Modal
 * @version 0.0.0.3
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */const Rt=(e,t)=>{p.useEffect(()=>(t?Q.pushToStack(e):Q.removeFromStack(e),()=>{Q.removeFromStack(e)}),[t,e])},Vt=(e,t,n,r,o,a,i)=>{const[c,f]=p.useState(!1),[g,w]=p.useState({initWidth:0,initBodyHeight:0,mouseDownX:0,mouseDownY:0}),_=p.useCallback(m=>{var y;if(m.preventDefault(),!t&&m.target instanceof HTMLElement){const v=(y=m.target.closest(".custom-antd-modal"))==null?void 0:y.querySelector(".ant-modal-body");v&&(t=v.clientHeight)}if(!e&&m.target instanceof HTMLElement){const v=m.target.closest(".custom-antd-modal");v&&(e=v.clientWidth)}w({initWidth:e,initBodyHeight:t,mouseDownX:m.clientX,mouseDownY:m.clientY}),f(!0)},[e,t,f,w]);return p.useEffect(()=>{const m=y=>{if(c){const{initWidth:v,mouseDownX:P,initBodyHeight:I,mouseDownY:O}=g,s=y.clientX-P,l=y.clientY-O;let d=v+s*2;o&&d>o&&(d=o),r&&d<r&&(d=r);let u=I+l*2;return i&&u>i&&(u=i),a&&u<a&&(u=a),n({width:d,bodyHeight:u})}};return window.addEventListener("mousemove",m,{passive:!0}),()=>window.removeEventListener("mousemove",m)},[g,c,n,r,o,a,i]),p.useEffect(()=>{const m=()=>{f(!1)};return window.addEventListener("mouseup",m),()=>window.removeEventListener("mouseup",m)},[f]),_},ve=({resizable:e=!0,headerStyle:t,footerStyle:n,...r})=>{const[o]=p.useState(r.modalId??"modal-"+ge());Rt(o,!!r.open);const a=p.useRef({}),i=p.useRef();p.useEffect(()=>{r.open&&(i.current=document.activeElement)},[r.open]);const c=p.useCallback(O=>{var s,l,d,u;O?(l=(s=a.current)==null?void 0:s.onParentComponentRendered)==null||l.call(s):(d=i.current)==null||d.focus(),(u=r.onAfterOpenChange)==null||u.call(r,O)},[r]),[f,g]=p.useState({width:r.width??0,bodyHeight:r.bodyHeight??0}),w=Vt(f.width,f.bodyHeight,g,r.minWidth??200,r.maxWidth??5e3,r.bodyMinHeight??50,r.bodyMaxHeight??5e3),_=qt({bodyStyle:r.bodyStyle,bodyHeight:f.bodyHeight,bodyMaxHeight:r.bodyMaxHeight,bodyMinHeight:r.bodyMinHeight,notScrollable:r.notScrollable}),m=24,y=24,v={paddingLeft:m,paddingRight:y,paddingTop:5,paddingBottom:5,...t},P={paddingTop:20,paddingLeft:m,paddingRight:y,paddingBottom:20,...n},[I]=p.useState("draggable-"+ge());return S.jsx(pt,{...r,width:f.width||void 0,styles:{body:_,footer:{margin:0}},className:_e("custom-antd-modal",r.className),modalRender:O=>Et(O,I,a),title:S.jsx(re,{draggableId:I,icon:r.headerIcon,title:r.title,colorType:r.colorType,style:v}),footer:S.jsx(ne,{onMouseResize:w,resizable:e,style:P,colorType:r.colorType,children:r.footer}),afterOpenChange:c})},qt=({bodyStyle:e,bodyHeight:t,bodyMaxHeight:n,bodyMinHeight:r,notScrollable:o})=>{const a={...e,padding:"0 24px 0 24px",overflowY:o?"hidden":"auto"};return t&&(a.height=t),n&&(a.maxHeight=n),r&&(a.minHeight=r),a};try{ve.displayName="Modal",ve.__docgenInfo={description:"",displayName:"Modal",props:{modalId:{defaultValue:null,description:"the modal ID for form dispatcher",name:"modalId",required:!1,type:{name:"string"}},bodyHeight:{defaultValue:null,description:"The form body initial height",name:"bodyHeight",required:!1,type:{name:"number"}},bodyMinHeight:{defaultValue:null,description:"The form body min height",name:"bodyMinHeight",required:!1,type:{name:"number"}},bodyMaxHeight:{defaultValue:null,description:"The form body max height",name:"bodyMaxHeight",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"The form initial width",name:"width",required:!1,type:{name:"number"}},minWidth:{defaultValue:null,description:"The form min width",name:"minWidth",required:!1,type:{name:"number"}},maxWidth:{defaultValue:null,description:"The form max width",name:"maxWidth",required:!1,type:{name:"number"}},notScrollable:{defaultValue:null,description:"Is the form body not scrollable",name:"notScrollable",required:!1,type:{name:"boolean"}},resizable:{defaultValue:{value:"true"},description:"Is the for can be resized (show the resize handler). Default: true",name:"resizable",required:!1,type:{name:"boolean"}},colorType:{defaultValue:null,description:"Form color type",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}},headerStyle:{defaultValue:null,description:"Form header style",name:"headerStyle",required:!1,type:{name:"CSSProperties"}},headerIcon:{defaultValue:null,description:"Form header icon",name:"headerIcon",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"Footer content",name:"footer",required:!1,type:{name:"ReactNode"}},footerStyle:{defaultValue:null,description:"Form footer style",name:"footerStyle",required:!1,type:{name:"CSSProperties"}},onAfterOpenChange:{defaultValue:null,description:"Callback when the animation ends when Modal is turned on and off",name:"onAfterOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},open:{defaultValue:null,description:"Whether the modal dialog is visible or not",name:"open",required:!1,type:{name:"boolean"}},confirmLoading:{defaultValue:null,description:"Whether to apply loading visual effect for OK button or not",name:"confirmLoading",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"The modal dialog's title",name:"title",required:!1,type:{name:"ReactNode"}},closable:{defaultValue:null,description:"Whether a close (x) button is visible on top right of the modal dialog or not. Recommend to use closeIcon instead.",name:"closable",required:!1,type:{name:"boolean"}},onCancel:{defaultValue:null,description:"Specify a function that will be called when a user clicks mask, close button on top right or Cancel button",name:"onCancel",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},afterClose:{defaultValue:null,description:"",name:"afterClose",required:!1,type:{name:"(() => void)"}},centered:{defaultValue:null,description:"Centered Modal",name:"centered",required:!1,type:{name:"boolean"}},maskClosable:{defaultValue:null,description:"Whether to close the modal dialog when the mask (area outside the modal) is clicked",name:"maskClosable",required:!1,type:{name:"boolean"}},forceRender:{defaultValue:null,description:"Force render Modal",name:"forceRender",required:!1,type:{name:"boolean"}},destroyOnClose:{defaultValue:null,description:"",name:"destroyOnClose",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},wrapClassName:{defaultValue:null,description:"",name:"wrapClassName",required:!1,type:{name:"string"}},maskTransitionName:{defaultValue:null,description:"",name:"maskTransitionName",required:!1,type:{name:"string"}},transitionName:{defaultValue:null,description:"",name:"transitionName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},rootClassName:{defaultValue:null,description:"",name:"rootClassName",required:!1,type:{name:"string"}},classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:'Omit<ModalClassNames, "wrapper">'}},getContainer:{defaultValue:null,description:"",name:"getContainer",required:!1,type:{name:"string | false | HTMLElement | getContainerFunc"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}},bodyStyle:{defaultValue:null,description:"@deprecated Please use `styles.body` instead",name:"bodyStyle",required:!1,type:{name:"CSSProperties"}},maskStyle:{defaultValue:null,description:"@deprecated Please use `styles.mask` instead",name:"maskStyle",required:!1,type:{name:"CSSProperties"}},mask:{defaultValue:null,description:"",name:"mask",required:!1,type:{name:"boolean"}},keyboard:{defaultValue:null,description:"",name:"keyboard",required:!1,type:{name:"boolean"}},wrapProps:{defaultValue:null,description:"",name:"wrapProps",required:!1,type:{name:"any"}},prefixCls:{defaultValue:null,description:"",name:"prefixCls",required:!1,type:{name:"string"}},closeIcon:{defaultValue:null,description:"",name:"closeIcon",required:!1,type:{name:"ReactNode"}},modalRender:{defaultValue:null,description:"",name:"modalRender",required:!1,type:{name:"((node: ReactNode) => ReactNode)"}},focusTriggerAfterClose:{defaultValue:null,description:"",name:"focusTriggerAfterClose",required:!1,type:{name:"boolean"}},mousePosition:{defaultValue:null,description:"",name:"mousePosition",required:!1,type:{name:"MousePosition"}},visible:{defaultValue:null,description:"@deprecated Please use `open` instead.",name:"visible",required:!1,type:{name:"boolean"}},styles:{defaultValue:null,description:"",name:"styles",required:!1,type:{name:'Omit<ModalStyles, "wrapper">'}}}}}catch{}const be=({colorType:e,buttons:t,buttonsApi:n,containerStyle:r,arrowsSelection:o,context:a})=>!t||Object.keys(t).length===0?null:S.jsx("div",{style:r,children:S.jsx(it,{buttons:t,apiRef:n,colorType:e,arrowsSelection:o,context:a})});try{be.displayName="ButtonsRender",be.__docgenInfo={description:"",displayName:"ButtonsRender",props:{buttons:{defaultValue:null,description:"form buttons collection",name:"buttons",required:!1,type:{name:"IFormButtons"}},buttonsApi:{defaultValue:null,description:"Form buttons api",name:"buttonsApi",required:!1,type:{name:"IButtonsRowApi"}},colorType:{defaultValue:null,description:"form type",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}},containerStyle:{defaultValue:null,description:"buttons container style",name:"containerStyle",required:!1,type:{name:"CSSProperties"}},arrowsSelection:{defaultValue:null,description:"allow select buttons using arrows keys",name:"arrowsSelection",required:!1,type:{name:"boolean"}},context:{defaultValue:null,description:"Any context. Will use in buttons callbacks",name:"context",required:!1,type:{name:"unknown"}}}}}catch{}var U={exports:{}},Me={};function Ne(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Ne(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Se(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Ne(e))&&(r&&(r+=" "),r+=t);return r}const It=Object.freeze(Object.defineProperty({__proto__:null,clsx:Se,default:Se},Symbol.toStringTag,{value:"Module"})),Ft=ut(It);var b={},V={};Object.defineProperty(V,"__esModule",{value:!0});V.dontSetMe=Yt;V.findInArray=kt;V.int=Bt;V.isFunction=Wt;V.isNum=Ht;function kt(e,t){for(let n=0,r=e.length;n<r;n++)if(t.apply(t,[e[n],n,e]))return e[n]}function Wt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Function]"}function Ht(e){return typeof e=="number"&&!isNaN(e)}function Bt(e){return parseInt(e,10)}function Yt(e,t,n){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(n," - do not set this, set it on the child."))}var H={};Object.defineProperty(H,"__esModule",{value:!0});H.browserPrefixToKey=Ee;H.browserPrefixToStyle=Xt;H.default=void 0;H.getPrefix=Oe;const Z=["Moz","Webkit","O","ms"];function Oe(){var e;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";const n=(e=window.document)===null||e===void 0||(e=e.documentElement)===null||e===void 0?void 0:e.style;if(!n||t in n)return"";for(let r=0;r<Z.length;r++)if(Ee(t,Z[r])in n)return Z[r];return""}function Ee(e,t){return t?"".concat(t).concat(At(e)):e}function Xt(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e}function At(e){let t="",n=!0;for(let r=0;r<e.length;r++)n?(t+=e[r].toUpperCase(),n=!1):e[r]==="-"?n=!0:t+=e[r];return t}H.default=Oe();Object.defineProperty(b,"__esModule",{value:!0});b.addClassName=qe;b.addEvent=jt;b.addUserSelectStyles=rn;b.createCSSTransform=Zt;b.createSVGTransform=en;b.getTouch=tn;b.getTouchIdentifier=nn;b.getTranslation=ie;b.innerHeight=Kt;b.innerWidth=Jt;b.matchesSelector=Ve;b.matchesSelectorAndParentsTo=Lt;b.offsetXYFromParent=Qt;b.outerHeight=Ut;b.outerWidth=Gt;b.removeClassName=Ie;b.removeEvent=zt;b.removeUserSelectStyles=on;var N=V,we=$t(H);function Re(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(Re=function(r){return r?n:t})(e)}function $t(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=Re(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}let z="";function Ve(e,t){return z||(z=(0,N.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(n){return(0,N.isFunction)(e[n])})),(0,N.isFunction)(e[z])?e[z](t):!1}function Lt(e,t,n){let r=e;do{if(Ve(r,t))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1}function jt(e,t,n,r){if(!e)return;const o={capture:!0,...r};e.addEventListener?e.addEventListener(t,n,o):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n}function zt(e,t,n,r){if(!e)return;const o={capture:!0,...r};e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null}function Ut(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,N.int)(n.borderTopWidth),t+=(0,N.int)(n.borderBottomWidth),t}function Gt(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,N.int)(n.borderLeftWidth),t+=(0,N.int)(n.borderRightWidth),t}function Kt(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,N.int)(n.paddingTop),t-=(0,N.int)(n.paddingBottom),t}function Jt(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,N.int)(n.paddingLeft),t-=(0,N.int)(n.paddingRight),t}function Qt(e,t,n){const o=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect(),a=(e.clientX+t.scrollLeft-o.left)/n,i=(e.clientY+t.scrollTop-o.top)/n;return{x:a,y:i}}function Zt(e,t){const n=ie(e,t,"px");return{[(0,we.browserPrefixToKey)("transform",we.default)]:n}}function en(e,t){return ie(e,t,"")}function ie(e,t,n){let{x:r,y:o}=e,a="translate(".concat(r).concat(n,",").concat(o).concat(n,")");if(t){const i="".concat(typeof t.x=="string"?t.x:t.x+n),c="".concat(typeof t.y=="string"?t.y:t.y+n);a="translate(".concat(i,", ").concat(c,")")+a}return a}function tn(e,t){return e.targetTouches&&(0,N.findInArray)(e.targetTouches,n=>t===n.identifier)||e.changedTouches&&(0,N.findInArray)(e.changedTouches,n=>t===n.identifier)}function nn(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier}function rn(e){if(!e)return;let t=e.getElementById("react-draggable-style-el");t||(t=e.createElement("style"),t.type="text/css",t.id="react-draggable-style-el",t.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,t.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,e.getElementsByTagName("head")[0].appendChild(t)),e.body&&qe(e.body,"react-draggable-transparent-selection")}function on(e){if(e)try{if(e.body&&Ie(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{const t=(e.defaultView||window).getSelection();t&&t.type!=="Caret"&&t.removeAllRanges()}}catch{}}function qe(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function Ie(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}var q={};Object.defineProperty(q,"__esModule",{value:!0});q.canDragX=ln;q.canDragY=un;q.createCoreData=cn;q.createDraggableData=fn;q.getBoundPosition=an;q.getControlPosition=dn;q.snapToGrid=sn;var M=V,Y=b;function an(e,t,n){if(!e.props.bounds)return[t,n];let{bounds:r}=e.props;r=typeof r=="string"?r:mn(r);const o=le(e);if(typeof r=="string"){const{ownerDocument:a}=o,i=a.defaultView;let c;if(r==="parent"?c=o.parentNode:c=a.querySelector(r),!(c instanceof i.HTMLElement))throw new Error('Bounds selector "'+r+'" could not find an element.');const f=c,g=i.getComputedStyle(o),w=i.getComputedStyle(f);r={left:-o.offsetLeft+(0,M.int)(w.paddingLeft)+(0,M.int)(g.marginLeft),top:-o.offsetTop+(0,M.int)(w.paddingTop)+(0,M.int)(g.marginTop),right:(0,Y.innerWidth)(f)-(0,Y.outerWidth)(o)-o.offsetLeft+(0,M.int)(w.paddingRight)-(0,M.int)(g.marginRight),bottom:(0,Y.innerHeight)(f)-(0,Y.outerHeight)(o)-o.offsetTop+(0,M.int)(w.paddingBottom)-(0,M.int)(g.marginBottom)}}return(0,M.isNum)(r.right)&&(t=Math.min(t,r.right)),(0,M.isNum)(r.bottom)&&(n=Math.min(n,r.bottom)),(0,M.isNum)(r.left)&&(t=Math.max(t,r.left)),(0,M.isNum)(r.top)&&(n=Math.max(n,r.top)),[t,n]}function sn(e,t,n){const r=Math.round(t/e[0])*e[0],o=Math.round(n/e[1])*e[1];return[r,o]}function ln(e){return e.props.axis==="both"||e.props.axis==="x"}function un(e){return e.props.axis==="both"||e.props.axis==="y"}function dn(e,t,n){const r=typeof t=="number"?(0,Y.getTouch)(e,t):null;if(typeof t=="number"&&!r)return null;const o=le(n),a=n.props.offsetParent||o.offsetParent||o.ownerDocument.body;return(0,Y.offsetXYFromParent)(r||e,a,n.props.scale)}function cn(e,t,n){const r=!(0,M.isNum)(e.lastX),o=le(e);return r?{node:o,deltaX:0,deltaY:0,lastX:t,lastY:n,x:t,y:n}:{node:o,deltaX:t-e.lastX,deltaY:n-e.lastY,lastX:e.lastX,lastY:e.lastY,x:t,y:n}}function fn(e,t){const n=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/n,y:e.state.y+t.deltaY/n,deltaX:t.deltaX/n,deltaY:t.deltaY/n,lastX:e.state.x,lastY:e.state.y}}function mn(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}function le(e){const t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}var G={},K={};Object.defineProperty(K,"__esModule",{value:!0});K.default=pn;function pn(){}Object.defineProperty(G,"__esModule",{value:!0});G.default=void 0;var ee=gn(p),T=ue(xe),hn=ue(De),C=b,k=q,te=V,A=ue(K);function ue(e){return e&&e.__esModule?e:{default:e}}function Fe(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(Fe=function(r){return r?n:t})(e)}function gn(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=Fe(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}function x(e,t,n){return t=yn(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function yn(e){var t=vn(e,"string");return typeof t=="symbol"?t:String(t)}function vn(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const E={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let W=E.mouse,J=class extends ee.Component{constructor(){super(...arguments),x(this,"dragging",!1),x(this,"lastX",NaN),x(this,"lastY",NaN),x(this,"touchIdentifier",null),x(this,"mounted",!1),x(this,"handleDragStart",t=>{if(this.props.onMouseDown(t),!this.props.allowAnyClick&&typeof t.button=="number"&&t.button!==0)return!1;const n=this.findDOMNode();if(!n||!n.ownerDocument||!n.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:r}=n;if(this.props.disabled||!(t.target instanceof r.defaultView.Node)||this.props.handle&&!(0,C.matchesSelectorAndParentsTo)(t.target,this.props.handle,n)||this.props.cancel&&(0,C.matchesSelectorAndParentsTo)(t.target,this.props.cancel,n))return;t.type==="touchstart"&&t.preventDefault();const o=(0,C.getTouchIdentifier)(t);this.touchIdentifier=o;const a=(0,k.getControlPosition)(t,o,this);if(a==null)return;const{x:i,y:c}=a,f=(0,k.createCoreData)(this,i,c);(0,A.default)("DraggableCore: handleDragStart: %j",f),(0,A.default)("calling",this.props.onStart),!(this.props.onStart(t,f)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,C.addUserSelectStyles)(r),this.dragging=!0,this.lastX=i,this.lastY=c,(0,C.addEvent)(r,W.move,this.handleDrag),(0,C.addEvent)(r,W.stop,this.handleDragStop))}),x(this,"handleDrag",t=>{const n=(0,k.getControlPosition)(t,this.touchIdentifier,this);if(n==null)return;let{x:r,y:o}=n;if(Array.isArray(this.props.grid)){let c=r-this.lastX,f=o-this.lastY;if([c,f]=(0,k.snapToGrid)(this.props.grid,c,f),!c&&!f)return;r=this.lastX+c,o=this.lastY+f}const a=(0,k.createCoreData)(this,r,o);if((0,A.default)("DraggableCore: handleDrag: %j",a),this.props.onDrag(t,a)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch{const f=document.createEvent("MouseEvents");f.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(f)}return}this.lastX=r,this.lastY=o}),x(this,"handleDragStop",t=>{if(!this.dragging)return;const n=(0,k.getControlPosition)(t,this.touchIdentifier,this);if(n==null)return;let{x:r,y:o}=n;if(Array.isArray(this.props.grid)){let f=r-this.lastX||0,g=o-this.lastY||0;[f,g]=(0,k.snapToGrid)(this.props.grid,f,g),r=this.lastX+f,o=this.lastY+g}const a=(0,k.createCoreData)(this,r,o);if(this.props.onStop(t,a)===!1||this.mounted===!1)return!1;const c=this.findDOMNode();c&&this.props.enableUserSelectHack&&(0,C.removeUserSelectStyles)(c.ownerDocument),(0,A.default)("DraggableCore: handleDragStop: %j",a),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,c&&((0,A.default)("DraggableCore: Removing handlers"),(0,C.removeEvent)(c.ownerDocument,W.move,this.handleDrag),(0,C.removeEvent)(c.ownerDocument,W.stop,this.handleDragStop))}),x(this,"onMouseDown",t=>(W=E.mouse,this.handleDragStart(t))),x(this,"onMouseUp",t=>(W=E.mouse,this.handleDragStop(t))),x(this,"onTouchStart",t=>(W=E.touch,this.handleDragStart(t))),x(this,"onTouchEnd",t=>(W=E.touch,this.handleDragStop(t)))}componentDidMount(){this.mounted=!0;const t=this.findDOMNode();t&&(0,C.addEvent)(t,E.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const t=this.findDOMNode();if(t){const{ownerDocument:n}=t;(0,C.removeEvent)(n,E.mouse.move,this.handleDrag),(0,C.removeEvent)(n,E.touch.move,this.handleDrag),(0,C.removeEvent)(n,E.mouse.stop,this.handleDragStop),(0,C.removeEvent)(n,E.touch.stop,this.handleDragStop),(0,C.removeEvent)(t,E.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,C.removeUserSelectStyles)(n)}}findDOMNode(){var t,n;return(t=this.props)!==null&&t!==void 0&&t.nodeRef?(n=this.props)===null||n===void 0||(n=n.nodeRef)===null||n===void 0?void 0:n.current:hn.default.findDOMNode(this)}render(){return ee.cloneElement(ee.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};G.default=J;x(J,"displayName","DraggableCore");x(J,"propTypes",{allowAnyClick:T.default.bool,children:T.default.node.isRequired,disabled:T.default.bool,enableUserSelectHack:T.default.bool,offsetParent:function(e,t){if(e[t]&&e[t].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:T.default.arrayOf(T.default.number),handle:T.default.string,cancel:T.default.string,nodeRef:T.default.object,onStart:T.default.func,onDrag:T.default.func,onStop:T.default.func,onMouseDown:T.default.func,scale:T.default.number,className:te.dontSetMe,style:te.dontSetMe,transform:te.dontSetMe});x(J,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1});(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"DraggableCore",{enumerable:!0,get:function(){return f.default}}),e.default=void 0;var t=m(p),n=w(xe),r=w(De),o=w(Ft),a=b,i=q,c=V,f=w(G),g=w(K);function w(s){return s&&s.__esModule?s:{default:s}}function _(s){if(typeof WeakMap!="function")return null;var l=new WeakMap,d=new WeakMap;return(_=function(u){return u?d:l})(s)}function m(s,l){if(!l&&s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var d=_(l);if(d&&d.has(s))return d.get(s);var u={},D=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in s)if(h!=="default"&&Object.prototype.hasOwnProperty.call(s,h)){var F=D?Object.getOwnPropertyDescriptor(s,h):null;F&&(F.get||F.set)?Object.defineProperty(u,h,F):u[h]=s[h]}return u.default=s,d&&d.set(s,u),u}function y(){return y=Object.assign?Object.assign.bind():function(s){for(var l=1;l<arguments.length;l++){var d=arguments[l];for(var u in d)Object.prototype.hasOwnProperty.call(d,u)&&(s[u]=d[u])}return s},y.apply(this,arguments)}function v(s,l,d){return l=P(l),l in s?Object.defineProperty(s,l,{value:d,enumerable:!0,configurable:!0,writable:!0}):s[l]=d,s}function P(s){var l=I(s,"string");return typeof l=="symbol"?l:String(l)}function I(s,l){if(typeof s!="object"||s===null)return s;var d=s[Symbol.toPrimitive];if(d!==void 0){var u=d.call(s,l||"default");if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(s)}class O extends t.Component{static getDerivedStateFromProps(l,d){let{position:u}=l,{prevPropsPosition:D}=d;return u&&(!D||u.x!==D.x||u.y!==D.y)?((0,g.default)("Draggable: getDerivedStateFromProps %j",{position:u,prevPropsPosition:D}),{x:u.x,y:u.y,prevPropsPosition:{...u}}):null}constructor(l){super(l),v(this,"onDragStart",(d,u)=>{if((0,g.default)("Draggable: onDragStart: %j",u),this.props.onStart(d,(0,i.createDraggableData)(this,u))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),v(this,"onDrag",(d,u)=>{if(!this.state.dragging)return!1;(0,g.default)("Draggable: onDrag: %j",u);const D=(0,i.createDraggableData)(this,u),h={x:D.x,y:D.y,slackX:0,slackY:0};if(this.props.bounds){const{x:X,y:B}=h;h.x+=this.state.slackX,h.y+=this.state.slackY;const[L,de]=(0,i.getBoundPosition)(this,h.x,h.y);h.x=L,h.y=de,h.slackX=this.state.slackX+(X-h.x),h.slackY=this.state.slackY+(B-h.y),D.x=h.x,D.y=h.y,D.deltaX=h.x-this.state.x,D.deltaY=h.y-this.state.y}if(this.props.onDrag(d,D)===!1)return!1;this.setState(h)}),v(this,"onDragStop",(d,u)=>{if(!this.state.dragging||this.props.onStop(d,(0,i.createDraggableData)(this,u))===!1)return!1;(0,g.default)("Draggable: onDragStop: %j",u);const h={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:X,y:B}=this.props.position;h.x=X,h.y=B}this.setState(h)}),this.state={dragging:!1,dragged:!1,x:l.position?l.position.x:l.defaultPosition.x,y:l.position?l.position.y:l.defaultPosition.y,prevPropsPosition:{...l.position},slackX:0,slackY:0,isElementSVG:!1},l.position&&!(l.onDrag||l.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var l,d;return(l=(d=this.props)===null||d===void 0||(d=d.nodeRef)===null||d===void 0?void 0:d.current)!==null&&l!==void 0?l:r.default.findDOMNode(this)}render(){const{axis:l,bounds:d,children:u,defaultPosition:D,defaultClassName:h,defaultClassNameDragging:F,defaultClassNameDragged:X,position:B,positionOffset:L,scale:de,...We}=this.props;let ce={},fe=null;const me=!!!B||this.state.dragging,pe=B||D,he={x:(0,i.canDragX)(this)&&me?this.state.x:pe.x,y:(0,i.canDragY)(this)&&me?this.state.y:pe.y};this.state.isElementSVG?fe=(0,a.createSVGTransform)(he,L):ce=(0,a.createCSSTransform)(he,L);const He=(0,o.default)(u.props.className||"",h,{[F]:this.state.dragging,[X]:this.state.dragged});return t.createElement(f.default,y({},We,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),t.cloneElement(t.Children.only(u),{className:He,style:{...u.props.style,...ce},transform:fe}))}}e.default=O,v(O,"displayName","Draggable"),v(O,"propTypes",{...f.default.propTypes,axis:n.default.oneOf(["both","x","y","none"]),bounds:n.default.oneOfType([n.default.shape({left:n.default.number,right:n.default.number,top:n.default.number,bottom:n.default.number}),n.default.string,n.default.oneOf([!1])]),defaultClassName:n.default.string,defaultClassNameDragging:n.default.string,defaultClassNameDragged:n.default.string,defaultPosition:n.default.shape({x:n.default.number,y:n.default.number}),positionOffset:n.default.shape({x:n.default.oneOfType([n.default.number,n.default.string]),y:n.default.oneOfType([n.default.number,n.default.string])}),position:n.default.shape({x:n.default.number,y:n.default.number}),className:c.dontSetMe,style:c.dontSetMe,transform:c.dontSetMe}),v(O,"defaultProps",{...f.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})})(Me);const{default:ke,DraggableCore:bn}=Me;U.exports=ke;U.exports.default=ke;U.exports.DraggableCore=bn;var Sn=U.exports;const wn=dt(Sn),oe=({node:e,targetId:t,onStartCallback:n})=>{const r=Xe.createRef(),[o,a]=p.useState(!1),[i,c]=p.useState({cursor:"default"}),[f,g]=p.useState({left:0,top:0,bottom:0,right:0}),w=Dn(t),_=m=>{var I;const{clientWidth:y,clientHeight:v}=window.document.documentElement,P=(I=r.current)==null?void 0:I.getBoundingClientRect();P&&(n==null||n(),g({left:-P.left+m.x-(P.width-50),right:y-(P.right-m.x)+(P.width-50),top:-P.top+m.y,bottom:v-(P.bottom-m.y)+(P.height-50)}))};return S.jsx(wn,{disabled:o,bounds:f,onStart:(m,y)=>_(y),children:S.jsx("div",{ref:r,style:i,onMouseOver:m=>{if(m.stopPropagation(),!t){a(!1),c({cursor:"move"});return}const y=w();if(lt(y,m.target,!0)){a(!1),c({cursor:"move"});return}a(!0),c({cursor:"default"})},onMouseOut:m=>{m.stopPropagation(),a(!0),c({cursor:"default"})},children:e})})},Dn=e=>{const t=p.useRef({element:null,id:e});return p.useCallback(()=>e?((t.current.id!==e||!t.current.element)&&(t.current.element=document.getElementById(e)),t.current.element):null,[e])};try{oe.displayName="DraggableRender",oe.__docgenInfo={description:"",displayName:"DraggableRender",props:{node:{defaultValue:null,description:"",name:"node",required:!0,type:{name:"ReactNode"}},targetId:{defaultValue:null,description:"",name:"targetId",required:!1,type:{name:"string"}},onStartCallback:{defaultValue:null,description:"",name:"onStartCallback",required:!1,type:{name:"(() => void)"}}}}}catch{}export{be as B,re as H,ve as M,Et as a,pt as b,Q as d};
//# sourceMappingURL=draggableRender-458e69e5.js.map