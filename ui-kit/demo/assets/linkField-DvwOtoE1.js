import{r as e,e as l,u as n,b as t,c as a,d as r,f as o,g as s,W as u,J as i,k as c,aF as d,ax as v,L as f,a1 as p,bK as b,bL as g,B as m,i as h,j as C}from"./index-CQvKQJ1H.js";import{B as y}from"./baseField-gHIWNuTG.js";import{s as x}from"./defaultButtonsProps-q6NScukI.js";var k=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],E=e.forwardRef((function(u,i){var c=u.prefixCls,d=void 0===c?"rc-checkbox":c,v=u.className,f=u.style,p=u.checked,b=u.disabled,g=u.defaultChecked,m=void 0!==g&&g,h=u.type,C=void 0===h?"checkbox":h,y=u.title,x=u.onChange,E=l(u,k),O=e.useRef(null),M=e.useRef(null),N=n(m,{value:p}),D=t(N,2),j=D[0],w=D[1];e.useImperativeHandle(i,(function(){return{focus:function(e){var l;null===(l=O.current)||void 0===l||l.focus(e)},blur:function(){var e;null===(e=O.current)||void 0===e||e.blur()},input:O.current,nativeElement:M.current}}));var P=a(d,v,r(r({},"".concat(d,"-checked"),j),"".concat(d,"-disabled"),b));return e.createElement("span",{className:P,title:y,style:f,ref:M},e.createElement("input",o({},E,{className:"".concat(d,"-input"),ref:O,onChange:function(e){b||("checked"in u||w(e.target.checked),null==x||x({target:s(s({},u),{},{type:C,checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},disabled:b,checked:!!j,type:C})),e.createElement("span",{className:"".concat(d,"-inner")}))}));const O=u.createContext(null);const M=(l,n)=>{var t;const{prefixCls:r,className:o,rootClassName:s,children:m,indeterminate:h=!1,style:C,onMouseEnter:y,onMouseLeave:k,skipGroup:M=!1,disabled:N}=l,D=function(e,l){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)l.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]])}return n}(l,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),{getPrefixCls:j,direction:w,checkbox:P}=e.useContext(c),S=e.useContext(O),{isFormItemInput:L}=e.useContext(d),R=e.useContext(v),F=null!==(t=(null==S?void 0:S.disabled)||N)&&void 0!==t?t:R,V=e.useRef(D.value),$=e.useRef(null),I=f(n,$);e.useEffect((()=>{null==S||S.registerValue(D.value)}),[]),e.useEffect((()=>{if(!M)return D.value!==V.current&&(null==S||S.cancelValue(V.current),null==S||S.registerValue(D.value),V.current=D.value),()=>null==S?void 0:S.cancelValue(D.value)}),[D.value]),e.useEffect((()=>{var e;(null===(e=$.current)||void 0===e?void 0:e.input)&&($.current.input.indeterminate=h)}),[h]);const B=j("checkbox",r),G=p(B),[W,T,_]=x(B,G),q=Object.assign({},D);S&&!M&&(q.onChange=function(){D.onChange&&D.onChange.apply(D,arguments),S.toggleOption&&S.toggleOption({label:m,value:D.value})},q.name=S.name,q.checked=S.value.includes(D.value));const H=a(`${B}-wrapper`,{[`${B}-rtl`]:"rtl"===w,[`${B}-wrapper-checked`]:q.checked,[`${B}-wrapper-disabled`]:F,[`${B}-wrapper-in-form-item`]:L},null==P?void 0:P.className,o,s,_,G,T),K=a({[`${B}-indeterminate`]:h},b,T),[U,z]=function(e){const l=u.useRef(null),n=()=>{i.cancel(l.current),l.current=null};return[()=>{n(),l.current=i((()=>{l.current=null}))},t=>{l.current&&(t.stopPropagation(),n()),null==e||e(t)}]}(q.onClick);return W(e.createElement(g,{component:"Checkbox",disabled:F},e.createElement("label",{className:H,style:Object.assign(Object.assign({},null==P?void 0:P.style),C),onMouseEnter:y,onMouseLeave:k,onClick:U},e.createElement(E,Object.assign({},q,{onClick:z,prefixCls:B,className:K,disabled:F,ref:I})),void 0!==m&&e.createElement("span",{className:`${B}-label`},m))))},N=e.forwardRef(M);const D=e.forwardRef(((l,n)=>{const{defaultValue:t,children:r,options:o=[],prefixCls:s,className:u,rootClassName:i,style:d,onChange:v}=l,f=function(e,l){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)l.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]])}return n}(l,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),{getPrefixCls:b,direction:g}=e.useContext(c),[C,y]=e.useState(f.value||t||[]),[k,E]=e.useState([]);e.useEffect((()=>{"value"in f&&y(f.value||[])}),[f.value]);const M=e.useMemo((()=>o.map((e=>"string"==typeof e||"number"==typeof e?{label:e,value:e}:e))),[o]),D=b("checkbox",s),j=`${D}-group`,w=p(D),[P,S,L]=x(D,w),R=m(f,["value","disabled"]),F=o.length?M.map((l=>e.createElement(N,{prefixCls:D,key:l.value.toString(),disabled:"disabled"in l?l.disabled:f.disabled,value:l.value,checked:C.includes(l.value),onChange:l.onChange,className:`${j}-item`,style:l.style,title:l.title,id:l.id,required:l.required},l.label))):r,V={toggleOption:e=>{const l=C.indexOf(e.value),n=h(C);-1===l?n.push(e.value):n.splice(l,1),"value"in f||y(n),null==v||v(n.filter((e=>k.includes(e))).sort(((e,l)=>M.findIndex((l=>l.value===e))-M.findIndex((e=>e.value===l)))))},value:C,disabled:f.disabled,name:f.name,registerValue:e=>{E((l=>[].concat(h(l),[e])))},cancelValue:e=>{E((l=>l.filter((l=>l!==e))))}},$=a(j,{[`${j}-rtl`]:"rtl"===g},u,i,L,w,S);return P(e.createElement("div",Object.assign({className:$,style:d},R,{ref:n}),e.createElement(O.Provider,{value:V},F)))})),j=N;j.Group=D,j.__ANT_CHECKBOX=!0;const w=({field:l})=>{e.useSyncExternalStore(l.subscribe.bind(l),l.getSnapshot.bind(l));const n=l.getName(),t=l.getProps(),a=l.getValue(),r=e.useCallback((e=>{l.isReady()&&(l.setValue(e.target.checked||!1),l.setTouched(!0),l.setDirty(!0))}),[l]);e.useEffect((()=>{l.setReady(!0)}),[l,n]);const o={...{width:l.getWidth()},...t.style};return C.jsx(j,{className:t.className,checked:a,disabled:l.isDisabled()||l.isReadOnly(),onChange:r,autoFocus:t.autoFocus,indeterminate:t.indeterminate,style:o})};class CheckboxField extends y{noGrowWidth(){return!0}render(){return C.jsx(w,{field:this})}}const P=({field:l})=>{e.useSyncExternalStore(l.subscribe.bind(l),l.getSnapshot.bind(l));const n=l.getProps(),t=e.useCallback((e=>{var t;l.setTouched(!0),null==(t=null==n?void 0:n.onClick)||t.call(n,e,l)}),[l,n]);e.useEffect((()=>{l.setReady(!0)}),[l]);const a={...{width:l.getWidth()??"100%"},...n.style};return C.jsx("a",{className:n.className,href:n.href,target:n.target,style:a,onClick:e=>t(e),onContextMenu:e=>{var t;return null==(t=null==n?void 0:n.onContextMenu)?void 0:t.call(n,e,l)},onDoubleClick:e=>{var t;return null==(t=null==n?void 0:n.onDoubleClick)?void 0:t.call(n,e,l)},onDrag:e=>{var t;return null==(t=null==n?void 0:n.onDrag)?void 0:t.call(n,e,l)},onDragEnd:e=>{var t;return null==(t=null==n?void 0:n.onDragEnd)?void 0:t.call(n,e,l)},onDragEnter:e=>{var t;return null==(t=null==n?void 0:n.onDragEnter)?void 0:t.call(n,e,l)},onDragExit:e=>{var t;return null==(t=null==n?void 0:n.onDragExit)?void 0:t.call(n,e,l)},onDragLeave:e=>{var t;return null==(t=null==n?void 0:n.onDragLeave)?void 0:t.call(n,e,l)},onDragOver:e=>{var t;return null==(t=null==n?void 0:n.onDragOver)?void 0:t.call(n,e,l)},onDragStart:e=>{var t;return null==(t=null==n?void 0:n.onDragStart)?void 0:t.call(n,e,l)},onMouseDown:e=>{var t;return null==(t=null==n?void 0:n.onMouseDown)?void 0:t.call(n,e,l)},onMouseEnter:e=>{var t;return null==(t=null==n?void 0:n.onMouseEnter)?void 0:t.call(n,e,l)},onMouseLeave:e=>{var t;return null==(t=null==n?void 0:n.onMouseLeave)?void 0:t.call(n,e,l)},onMouseMove:e=>{var t;return null==(t=null==n?void 0:n.onMouseMove)?void 0:t.call(n,e,l)},onMouseOut:e=>{var t;return null==(t=null==n?void 0:n.onMouseOut)?void 0:t.call(n,e,l)},onMouseOver:e=>{var t;return null==(t=null==n?void 0:n.onMouseOver)?void 0:t.call(n,e,l)},onBlur:e=>{var t;return null==(t=null==n?void 0:n.onBlur)?void 0:t.call(n,e,l)},onFocus:e=>{var t;return null==(t=null==n?void 0:n.onFocus)?void 0:t.call(n,e,l)},onMouseUp:e=>{var t;return null==(t=null==n?void 0:n.onMouseUp)?void 0:t.call(n,e,l)},children:n.title})};class LinkField extends y{render(){return C.jsx(P,{field:this})}}export{CheckboxField as C,LinkField as L};
