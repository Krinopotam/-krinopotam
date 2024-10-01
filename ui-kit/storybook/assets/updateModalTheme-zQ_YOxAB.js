var te=Object.defineProperty;var ne=(t,e,n)=>e in t?te(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var h=(t,e,n)=>ne(t,typeof e!="symbol"?e+"":e,n);import{j as y}from"./extends-BRD_ACZV.js";import{M as A,H as ie,a as oe}from"./headerRender-C2XI2y67.js";import{B as ae,m as N}from"./buttonsRow-B6oqgMUN.js";import{t as O}from"./getNanoId-DD8laUaD.js";import{R as se}from"./QuestionCircleOutlined-CTTbfydo.js";import{r as c}from"./index-uubelm5h.js";import{c as v,v as re,g as le,m as ce,r as de,C as ue}from"./compact-item-Cq9_oKvy.js";import{p as me}from"./useToken-DcxMJEAm.js";import{K as H}from"./context-Dw4q7UZT.js";import{A as pe}from"./index-DZAtJoSc.js";function fe(t,e,n){var i=n||{},o=i.noTrailing,a=o===void 0?!1:o,s=i.noLeading,d=s===void 0?!1:s,r=i.debounceMode,u=r===void 0?void 0:r,l,g=!1,f=0;function C(){l&&clearTimeout(l)}function E(x){var $=x||{},p=$.upcomingOnly,m=p===void 0?!1:p;C(),g=!m}function b(){for(var x=arguments.length,$=new Array(x),p=0;p<x;p++)$[p]=arguments[p];var m=this,_=Date.now()-f;if(g)return;function S(){f=Date.now(),e.apply(m,$)}function w(){l=void 0}!d&&u&&!l&&S(),C(),u===void 0&&_>t?d?(f=Date.now(),a||(l=setTimeout(u?w:S,t))):S():a!==!0&&(l=setTimeout(u?w:S,u===void 0?t-_:t))}return b.cancel=E,b}function ge(t,e,n){var i={},o=i.atBegin,a=o===void 0?!1:o;return fe(t,e,{debounceMode:a!==!1})}const z=100,K=z/5,W=z/2-K/2,R=W*2*Math.PI,G=50,V=t=>{const{dotClassName:e,style:n,hasCircleCls:i}=t;return c.createElement("circle",{className:v(`${e}-circle`,{[`${e}-circle-bg`]:i}),r:W,cx:G,cy:G,strokeWidth:K,style:n})},he=t=>{let{percent:e,prefixCls:n}=t;const i=`${n}-dot`,o=`${i}-holder`,a=`${o}-hidden`,[s,d]=c.useState(!1);me(()=>{e!==0&&d(!0)},[e!==0]);const r=Math.max(Math.min(e,100),0);if(!s)return null;const u={strokeDashoffset:`${R/4}`,strokeDasharray:`${R*r/100} ${R*(100-r)/100}`};return c.createElement("span",{className:v(o,`${i}-progress`,r<=0&&a)},c.createElement("svg",{viewBox:`0 0 ${z} ${z}`,role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":r},c.createElement(V,{dotClassName:i,hasCircleCls:!0}),c.createElement(V,{dotClassName:i,style:u})))};function ye(t){const{prefixCls:e,percent:n=0}=t,i=`${e}-dot`,o=`${i}-holder`,a=`${o}-hidden`;return c.createElement(c.Fragment,null,c.createElement("span",{className:v(o,n>0&&a)},c.createElement("span",{className:v(i,`${e}-dot-spin`)},[1,2,3,4].map(s=>c.createElement("i",{className:`${e}-dot-item`,key:s})))),c.createElement(he,{prefixCls:e,percent:n}))}function ve(t){const{prefixCls:e,indicator:n,percent:i}=t,o=`${e}-dot`;return n&&c.isValidElement(n)?re(n,{className:v(n.props.className,o),percent:i}):c.createElement(ye,{prefixCls:e,percent:i})}const Se=new H("antSpinMove",{to:{opacity:1}}),Ce=new H("antRotate",{to:{transform:"rotate(405deg)"}}),be=t=>{const{componentCls:e,calc:n}=t;return{[e]:Object.assign(Object.assign({},de(t)),{position:"absolute",display:"none",color:t.colorPrimary,fontSize:0,textAlign:"center",verticalAlign:"middle",opacity:0,transition:`transform ${t.motionDurationSlow} ${t.motionEaseInOutCirc}`,"&-spinning":{position:"relative",display:"inline-block",opacity:1},[`${e}-text`]:{fontSize:t.fontSize,paddingTop:n(n(t.dotSize).sub(t.fontSize)).div(2).add(2).equal()},"&-fullscreen":{position:"fixed",width:"100vw",height:"100vh",backgroundColor:t.colorBgMask,zIndex:t.zIndexPopupBase,inset:0,display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",opacity:0,visibility:"hidden",transition:`all ${t.motionDurationMid}`,"&-show":{opacity:1,visibility:"visible"},[e]:{[`${e}-dot-holder`]:{color:t.colorWhite},[`${e}-text`]:{color:t.colorTextLightSolid}}},"&-nested-loading":{position:"relative",[`> div > ${e}`]:{position:"absolute",top:0,insetInlineStart:0,zIndex:4,display:"block",width:"100%",height:"100%",maxHeight:t.contentHeight,[`${e}-dot`]:{position:"absolute",top:"50%",insetInlineStart:"50%",margin:n(t.dotSize).mul(-1).div(2).equal()},[`${e}-text`]:{position:"absolute",top:"50%",width:"100%",textShadow:`0 1px 2px ${t.colorBgContainer}`},[`&${e}-show-text ${e}-dot`]:{marginTop:n(t.dotSize).div(2).mul(-1).sub(10).equal()},"&-sm":{[`${e}-dot`]:{margin:n(t.dotSizeSM).mul(-1).div(2).equal()},[`${e}-text`]:{paddingTop:n(n(t.dotSizeSM).sub(t.fontSize)).div(2).add(2).equal()},[`&${e}-show-text ${e}-dot`]:{marginTop:n(t.dotSizeSM).div(2).mul(-1).sub(10).equal()}},"&-lg":{[`${e}-dot`]:{margin:n(t.dotSizeLG).mul(-1).div(2).equal()},[`${e}-text`]:{paddingTop:n(n(t.dotSizeLG).sub(t.fontSize)).div(2).add(2).equal()},[`&${e}-show-text ${e}-dot`]:{marginTop:n(t.dotSizeLG).div(2).mul(-1).sub(10).equal()}}},[`${e}-container`]:{position:"relative",transition:`opacity ${t.motionDurationSlow}`,"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:t.colorBgContainer,opacity:0,transition:`all ${t.motionDurationSlow}`,content:'""',pointerEvents:"none"}},[`${e}-blur`]:{clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none","&::after":{opacity:.4,pointerEvents:"auto"}}},"&-tip":{color:t.spinDotDefault},[`${e}-dot-holder`]:{width:"1em",height:"1em",fontSize:t.dotSize,display:"inline-block",transition:`transform ${t.motionDurationSlow} ease, opacity ${t.motionDurationSlow} ease`,transformOrigin:"50% 50%",lineHeight:1,color:t.colorPrimary,"&-hidden":{transform:"scale(0.3)",opacity:0}},[`${e}-dot-progress`]:{position:"absolute",top:"50%",transform:"translate(-50%, -50%)",insetInlineStart:"50%"},[`${e}-dot`]:{position:"relative",display:"inline-block",fontSize:t.dotSize,width:"1em",height:"1em","&-item":{position:"absolute",display:"block",width:n(t.dotSize).sub(n(t.marginXXS).div(2)).div(2).equal(),height:n(t.dotSize).sub(n(t.marginXXS).div(2)).div(2).equal(),background:"currentColor",borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:Se,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0,animationDelay:"0s"},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-spin":{transform:"rotate(45deg)",animationName:Ce,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"},"&-circle":{strokeLinecap:"round",transition:["stroke-dashoffset","stroke-dasharray","stroke","stroke-width","opacity"].map(i=>`${i} ${t.motionDurationSlow} ease`).join(","),fillOpacity:0,stroke:"currentcolor"},"&-circle-bg":{stroke:t.colorFillSecondary}},[`&-sm ${e}-dot`]:{"&, &-holder":{fontSize:t.dotSizeSM}},[`&-sm ${e}-dot-holder`]:{i:{width:n(n(t.dotSizeSM).sub(n(t.marginXXS).div(2))).div(2).equal(),height:n(n(t.dotSizeSM).sub(n(t.marginXXS).div(2))).div(2).equal()}},[`&-lg ${e}-dot`]:{"&, &-holder":{fontSize:t.dotSizeLG}},[`&-lg ${e}-dot-holder`]:{i:{width:n(n(t.dotSizeLG).sub(t.marginXXS)).div(2).equal(),height:n(n(t.dotSizeLG).sub(t.marginXXS)).div(2).equal()}},[`&${e}-show-text ${e}-text`]:{display:"block"}})}},xe=t=>{const{controlHeightLG:e,controlHeight:n}=t;return{contentHeight:400,dotSize:e/2,dotSizeSM:e*.35,dotSizeLG:n}},$e=le("Spin",t=>{const e=ce(t,{spinDotDefault:t.colorTextDescription});return[be(e)]},xe),_e=200,X=[[30,.05],[70,.03],[96,.01]];function we(t,e){const[n,i]=c.useState(0),o=c.useRef(),a=e==="auto";return c.useEffect(()=>(a&&t&&(i(0),o.current=setInterval(()=>{i(s=>{const d=100-s;for(let r=0;r<X.length;r+=1){const[u,l]=X[r];if(s<=u)return s+d*l}return s})},_e)),()=>{clearInterval(o.current)}),[a,t]),a?n:e}var Ie=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(n[i[o]]=t[i[o]]);return n};let F;function Be(t,e){return!!t&&!!e&&!isNaN(Number(e))}const k=t=>{var e;const{prefixCls:n,spinning:i=!0,delay:o=0,className:a,rootClassName:s,size:d="default",tip:r,wrapperClassName:u,style:l,children:g,fullscreen:f=!1,indicator:C,percent:E}=t,b=Ie(t,["prefixCls","spinning","delay","className","rootClassName","size","tip","wrapperClassName","style","children","fullscreen","indicator","percent"]),{getPrefixCls:x,direction:$,spin:p}=c.useContext(ue),m=x("spin",n),[_,S,w]=$e(m),[I,L]=c.useState(()=>i&&!Be(i,o)),J=we(I,E);c.useEffect(()=>{if(i){const B=ge(o,()=>{L(!0)});return B(),()=>{var T;(T=B==null?void 0:B.cancel)===null||T===void 0||T.call(B)}}L(!1)},[o,i]);const P=c.useMemo(()=>typeof g<"u"&&!f,[g,f]),Q=v(m,p==null?void 0:p.className,{[`${m}-sm`]:d==="small",[`${m}-lg`]:d==="large",[`${m}-spinning`]:I,[`${m}-show-text`]:!!r,[`${m}-rtl`]:$==="rtl"},a,!f&&s,S,w),Y=v(`${m}-container`,{[`${m}-blur`]:I}),Z=(e=C??(p==null?void 0:p.indicator))!==null&&e!==void 0?e:F,ee=Object.assign(Object.assign({},p==null?void 0:p.style),l),M=c.createElement("div",Object.assign({},b,{style:ee,className:Q,"aria-live":"polite","aria-busy":I}),c.createElement(ve,{prefixCls:m,indicator:Z,percent:J}),r&&(P||f)?c.createElement("div",{className:`${m}-text`},r):null);return _(P?c.createElement("div",Object.assign({},b,{className:v(`${m}-nested-loading`,u,S,w)}),I&&c.createElement("div",{key:"loading"},M),c.createElement("div",{className:Y,key:"container"},g)):f?c.createElement("div",{className:v(`${m}-fullscreen`,{[`${m}-fullscreen-show`]:I},s,S,w)},M):M)};k.setDefaultIndicator=t=>{F=t};const j=({colorType:t,buttons:e,buttonsApi:n,containerStyle:i,arrowsSelection:o,context:a})=>!e||Object.keys(e).length===0?null:y.jsx("div",{style:i,children:y.jsx(ae,{buttons:e,apiRef:n,colorType:t,arrowsSelection:o,context:a})});try{j.displayName="ButtonsRender",j.__docgenInfo={description:"",displayName:"ButtonsRender",props:{buttons:{defaultValue:null,description:"form buttons collection",name:"buttons",required:!1,type:{name:"IFormButtons"}},buttonsApi:{defaultValue:null,description:"Form buttons api",name:"buttonsApi",required:!1,type:{name:"IButtonsRowApi"}},colorType:{defaultValue:null,description:"form type",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}},containerStyle:{defaultValue:null,description:"buttons container style",name:"containerStyle",required:!1,type:{name:"CSSProperties"}},arrowsSelection:{defaultValue:null,description:"allow select buttons using arrows keys",name:"arrowsSelection",required:!1,type:{name:"boolean"}},context:{defaultValue:null,description:"Any context. Will use in buttons callbacks",name:"context",required:!1,type:{name:"unknown"}}}}}catch{}/**
 * @MessageBox_ContentRender
 * @version 0.0.0.14
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */const q=({paddingLeft:t,paddingRight:e,children:n})=>{const i={paddingLeft:t,paddingRight:e};return y.jsx("div",{className:"antd-modal-confirm-body",style:i,children:n})};try{q.displayName="ContentRender",q.__docgenInfo={description:"",displayName:"ContentRender",props:{paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"number"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"number"}}}}}catch{}class Ee{constructor(e,n,i,o,a,s){h(this,"_modal");h(this,"_draggableId");h(this,"_modalConfigGenerator");h(this,"_currentConfig");h(this,"_id");h(this,"_prevFocusedElement");this._modal=i,this._currentConfig=o,this._modalConfigGenerator=a,this._id=e,this._draggableId=n,this._prevFocusedElement=s}get id(){return this._id}destroy(){this._modal.destroy()}update(e){const n=N(this._currentConfig,e)||{},i=this._modalConfigGenerator(n,this._draggableId);this._modal.update(i),this._currentConfig=n}updateButton(e,n){const i={...this._currentConfig},o=i.buttons||{};if(n.active)for(const a in o){const s=o[a];s&&(s.active=!1)}o[e]?o[e]={...o[e],...n}:o[e]=n,i.buttons=o,this.update(i)}removeButton(e){const n={...this._currentConfig},i=n.buttons||{};delete i[e],n.buttons=i,this.update(n)}getCurrentConfig(){return this._currentConfig}getCurrentButtons(){return this._currentConfig.buttons||{}}}const Ne={ok:"ОК",cancel:"Отмена",attention:"Внимание",processing:"Обработка",pleaseWait:"Пожалуйста подождите..."},ze={ok:"OK",cancel:"Cancel",attention:"Attention",processing:"Processing",pleaseWait:"Please wait..."},Me={ok:"好",cancel:"取消",attention:"注意",processing:"处理中",pleaseWait:"请稍等..."},D={ru:Ne,en:ze,cn:Me};class U{constructor(){h(this,"_themedModalInstance")}static get Instance(){return this._instance||(this._instance=new this)}destroyAll(){A.destroyAll()}alert({okText:e,onOk:n,...i}){const o=this.getTranslator(i.language,i.translation),a={ok:{position:"right",active:!0,title:e??o("ok"),hotKeys:[{key:"escape"},{key:"enter",ctrl:!0}],onClick:()=>{(n==null?void 0:n(r))!==!1&&r.destroy()}}},s={...i},d=N(a,s.buttons);s.onCrossClose||(s.onCrossClose=()=>this.triggerButtonClick("ok",d.ok));const r=this.modalBase({...s,buttons:d});return r}confirm({okText:e,cancelText:n,onOk:i,onCancel:o,...a}){const s=this.getTranslator(a.language,a.translation),d={ok:{position:"right",active:!0,title:e??s("ok"),hotKeys:[{key:"enter",ctrl:!0}],onClick:()=>{(i==null?void 0:i(l))!==!1&&l.destroy()}},cancel:{position:"right",title:n??s("cancel"),hotKeys:[{key:"escape"}],onClick:()=>{(o==null?void 0:o(l))!==!1&&l.destroy()}}},r={icon:y.jsx(se,{}),...a},u=N(d,r.buttons);r.onCrossClose||(r.onCrossClose=()=>this.triggerButtonClick("cancel",u.cancel)),typeof r.closable>"u"&&(r.closable=!1),typeof r.maskClosable>"u"&&(r.maskClosable=!1);const l=this.modalBase({...r,buttons:u});return l}confirmWaiter({okText:e,cancelText:n,onOk:i,onCancel:o,waitTitle:a,waitContent:s,...d}){const r=this.getTranslator(d.language,d.translation);a=a??r("processing"),typeof a=="string"&&(s=y.jsxs("div",{style:{height:22},children:[y.jsx(k,{},"waitSpinner")," ",s??r("pleaseWait")]}));const u={ok:{position:"right",active:!0,title:e??r("ok"),hotKeys:[{key:"enter",ctrl:!0}],onClick:()=>{(i==null?void 0:i(f))!==!1&&f.update({title:a,content:s,buttons:{ok:{disabled:!0},cancel:{disabled:!0}}})}},cancel:{position:"right",title:n??r("cancel"),hotKeys:[{key:"escape"}],onClick:()=>{(o==null?void 0:o(f))!==!1&&f.destroy()}}},l={...d},g=N(u,l.buttons);l.onCrossClose||(l.onCrossClose=()=>this.triggerButtonClick("cancel",g.cancel)),typeof l.closable>"u"&&(l.closable=!1),typeof l.maskClosable>"u"&&(l.maskClosable=!1);const f=this.modalBase({...l,buttons:g});return f}modalBase(e){const n=this.getTranslator(e.language,e.translation),i=e.title??n("attention"),o=O(),a={...e,formId:o,title:i},s=document.activeElement;a.onAfterClose=()=>{var l;s==null||s.focus(),(l=e.onAfterClose)==null||l.call(e)};const d="draggable-"+O();let r=A;this._themedModalInstance&&Object.keys(this._themedModalInstance).length>0&&(r=this._themedModalInstance);const u=r.info(this.generateModalConfig(a,d));return new Ee(o,d,u,a,this.generateModalConfig,document.activeElement)}triggerButtonClick(e,n){!(n!=null&&n.onClick)||n!=null&&n.disabled||n!=null&&n.hidden||n!=null&&n.loading||n.onClick(e,n,this)}generateModalConfig({title:e,icon:n,content:i,onAfterClose:o,buttons:a,centered:s=!0,closable:d=!0,maskClosable:r=!0,colorType:u,onCrossClose:l},g){return{className:"custom-antd-message-box",icon:null,title:y.jsx(ie,{draggableId:g,icon:n,title:e,colorType:u,style:{paddingLeft:24,paddingRight:24,paddingTop:3,paddingBottom:3}}),content:y.jsx(q,{paddingLeft:24,paddingRight:24,children:i}),footer:y.jsx(j,{buttons:a,colorType:u,arrowsSelection:!0,containerStyle:{marginTop:"32px",marginLeft:24,marginRight:24,marginBottom:20}}),centered:!!s,closable:d,keyboard:!1,maskClosable:r,onCancel:()=>l,modalRender:b=>oe(b,g),afterClose:()=>o==null?void 0:o()}}updateThemedModal(e){this._themedModalInstance=e}getTranslator(e,n){return i=>({...D[e??"en"]??D.en,...n})[i]??D.en[i]??i}}h(U,"_instance");const Te=U.Instance;/**
 * @useUpdateMessageBoxTheme
 * @description MessageBox uses an Antd Modal static object, which is launched in its own context.
 * In order to use the context (i.e. a theme) of the component in which MessageBox will be used, this hook must be called
 * @version 0.0.0.67
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */const He=()=>{const{modal:t}=pe.useApp();Te.updateThemedModal(t)};export{j as B,k as S,Te as m,He as u};