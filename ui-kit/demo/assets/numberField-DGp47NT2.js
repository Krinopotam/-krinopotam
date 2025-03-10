import{r as e,I as n,f as t,ap as r,aq as a,d as i,w as o,b as s,aJ as l,br as u,J as d,c,e as f,h as p,bn as m,L as g,bw as h,l as b,m as v,bi as N,q as S,n as w,v as $,k as y,a1 as E,ab as x,aF as I,y as k,ax as R,bf as O,G as B,j as M}from"./index-CQvKQJ1H.js";import{B as j}from"./baseField-gHIWNuTG.js";import{k as C}from"./buttonsRow-Tlbvi7M1.js";import{B as A,t as F,f as D,i as T,o as _,j as G,l as W,k as H,m as L,n as z,p as q,q as P,s as V,c as U,d as X,e as K}from"./index-RaL56j3R.js";var J={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"},Y=function(r,a){return e.createElement(n,t({},r,{ref:a,icon:J}))},Q=e.forwardRef(Y);function Z(){return"function"==typeof BigInt}function ee(e){return!e&&0!==e&&!Number.isNaN(e)||!String(e).trim()}function ne(e){var n=e.trim(),t=n.startsWith("-");t&&(n=n.slice(1)),(n=n.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,"")).startsWith(".")&&(n="0".concat(n));var r=n||"0",a=r.split("."),i=a[0]||"0",o=a[1]||"0";"0"===i&&"0"===o&&(t=!1);var s=t?"-":"";return{negative:t,negativeStr:s,trimStr:r,integerStr:i,decimalStr:o,fullStr:"".concat(s).concat(r)}}function te(e){var n=String(e);return!Number.isNaN(Number(n))&&n.includes("e")}function re(e){var n=String(e);if(te(e)){var t=Number(n.slice(n.indexOf("e-")+2)),r=n.match(/\.(\d+)/);return null!=r&&r[1]&&(t+=r[1].length),t}return n.includes(".")&&ie(n)?n.length-n.indexOf(".")-1:0}function ae(e){var n=String(e);if(te(e)){if(e>Number.MAX_SAFE_INTEGER)return String(Z()?BigInt(e).toString():Number.MAX_SAFE_INTEGER);if(e<Number.MIN_SAFE_INTEGER)return String(Z()?BigInt(e).toString():Number.MIN_SAFE_INTEGER);n=e.toFixed(re(n))}return ne(n).fullStr}function ie(e){return"number"==typeof e?!Number.isNaN(e):!!e&&(/^\s*-?\d+(\.\d+)?\s*$/.test(e)||/^\s*-?\d+\.\s*$/.test(e)||/^\s*-?\.\d+\s*$/.test(e))}var oe=function(){function e(n){if(a(this,e),i(this,"origin",""),i(this,"negative",void 0),i(this,"integer",void 0),i(this,"decimal",void 0),i(this,"decimalLen",void 0),i(this,"empty",void 0),i(this,"nan",void 0),ee(n))this.empty=!0;else if(this.origin=String(n),"-"===n||Number.isNaN(n))this.nan=!0;else{var t=n;if(te(t)&&(t=Number(t)),ie(t="string"==typeof t?t:ae(t))){var r=ne(t);this.negative=r.negative;var o=r.trimStr.split(".");this.integer=BigInt(o[0]);var s=o[1]||"0";this.decimal=BigInt(s),this.decimalLen=s.length}else this.nan=!0}}return r(e,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(e){var n="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(e,"0"));return BigInt(n)}},{key:"negate",value:function(){var n=new e(this.toString());return n.negative=!n.negative,n}},{key:"cal",value:function(n,t,r){var a=Math.max(this.getDecimalStr().length,n.getDecimalStr().length),i=t(this.alignDecimal(a),n.alignDecimal(a)).toString(),o=r(a),s=ne(i),l=s.negativeStr,u=s.trimStr,d="".concat(l).concat(u.padStart(o+1,"0"));return new e("".concat(d.slice(0,-o),".").concat(d.slice(-o)))}},{key:"add",value:function(n){if(this.isInvalidate())return new e(n);var t=new e(n);return t.isInvalidate()?this:this.cal(t,(function(e,n){return e+n}),(function(e){return e}))}},{key:"multi",value:function(n){var t=new e(n);return this.isInvalidate()||t.isInvalidate()?new e(NaN):this.cal(t,(function(e,n){return e*n}),(function(e){return 2*e}))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(e){return this.toString()===(null==e?void 0:e.toString())}},{key:"lessEquals",value:function(e){return this.add(e.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){return!(arguments.length>0&&void 0!==arguments[0])||arguments[0]?this.isInvalidate()?"":ne("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),e}(),se=function(){function e(n){a(this,e),i(this,"origin",""),i(this,"number",void 0),i(this,"empty",void 0),ee(n)?this.empty=!0:(this.origin=String(n),this.number=Number(n))}return r(e,[{key:"negate",value:function(){return new e(-this.toNumber())}},{key:"add",value:function(n){if(this.isInvalidate())return new e(n);var t=Number(n);if(Number.isNaN(t))return this;var r=this.number+t;if(r>Number.MAX_SAFE_INTEGER)return new e(Number.MAX_SAFE_INTEGER);if(r<Number.MIN_SAFE_INTEGER)return new e(Number.MIN_SAFE_INTEGER);var a=Math.max(re(this.number),re(t));return new e(r.toFixed(a))}},{key:"multi",value:function(n){var t=Number(n);if(this.isInvalidate()||Number.isNaN(t))return new e(NaN);var r=this.number*t;if(r>Number.MAX_SAFE_INTEGER)return new e(Number.MAX_SAFE_INTEGER);if(r<Number.MIN_SAFE_INTEGER)return new e(Number.MIN_SAFE_INTEGER);var a=Math.max(re(this.number),re(t));return new e(r.toFixed(a))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(e){return this.toNumber()===(null==e?void 0:e.toNumber())}},{key:"lessEquals",value:function(e){return this.add(e.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){return!(arguments.length>0&&void 0!==arguments[0])||arguments[0]?this.isInvalidate()?"":ae(this.number):this.origin}}]),e}();function le(e){return Z()?new oe(e):new se(e)}function ue(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(""===e)return"";var a=ne(e),i=a.negativeStr,o=a.integerStr,s=a.decimalStr,l="".concat(n).concat(s),u="".concat(i).concat(o);if(t>=0){var d=Number(s[t]);return d>=5&&!r?ue(le(e).add("".concat(i,"0.").concat("0".repeat(t)).concat(10-d)).toString(),n,t,r):0===t?u:"".concat(u).concat(n).concat(s.padEnd(t,"0").slice(0,t))}return".0"===l?u:"".concat(u).concat(l)}function de(n){var r=n.prefixCls,a=n.upNode,o=n.downNode,f=n.upDisabled,p=n.downDisabled,m=n.onStep,g=e.useRef(),h=e.useRef([]),b=e.useRef();b.current=m;var v,N,S,w,$=function(){clearTimeout(g.current)},y=function(e,n){e.preventDefault(),$(),b.current(n),g.current=setTimeout((function e(){b.current(n),g.current=setTimeout(e,200)}),600)};if(e.useEffect((function(){return function(){$(),h.current.forEach((function(e){return d.cancel(e)}))}}),[]),v=e.useState(!1),N=s(v,2),S=N[0],w=N[1],l((function(){w(u())}),[]),S)return null;var E="".concat(r,"-handler"),x=c(E,"".concat(E,"-up"),i({},"".concat(E,"-up-disabled"),f)),I=c(E,"".concat(E,"-down"),i({},"".concat(E,"-down-disabled"),p)),k=function(){return h.current.push(d($))},R={unselectable:"on",role:"button",onMouseUp:k,onMouseLeave:k};return e.createElement("div",{className:"".concat(E,"-wrap")},e.createElement("span",t({},R,{onMouseDown:function(e){y(e,!0)},"aria-label":"Increase Value","aria-disabled":f,className:x}),a||e.createElement("span",{unselectable:"on",className:"".concat(r,"-handler-up-inner")})),e.createElement("span",t({},R,{onMouseDown:function(e){y(e,!1)},"aria-label":"Decrease Value","aria-disabled":p,className:I}),o||e.createElement("span",{unselectable:"on",className:"".concat(r,"-handler-down-inner")})))}function ce(e){var n="number"==typeof e?ae(e):ne(e).fullStr;return n.includes(".")?ne(n.replace(/(\d)\.(\d)/g,"$1$2.")).fullStr:e+"0"}var fe=["prefixCls","className","style","min","max","step","defaultValue","value","disabled","readOnly","upHandler","downHandler","keyboard","changeOnWheel","controls","classNames","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep","changeOnBlur","domRef"],pe=["disabled","style","prefixCls","value","prefix","suffix","addonBefore","addonAfter","className","classNames"],me=function(e,n){return e||n.isEmpty()?n.toString():n.toNumber()},ge=function(e){var n=le(e);return n.isInvalidate()?null:n},he=e.forwardRef((function(n,r){var a=n.prefixCls,l=n.className,u=n.style,h=n.min,b=n.max,v=n.step,N=void 0===v?1:v,S=n.defaultValue,w=n.value,$=n.disabled,y=n.readOnly,E=n.upHandler,x=n.downHandler,I=n.keyboard,k=n.changeOnWheel,R=void 0!==k&&k,O=n.controls,B=void 0===O||O;n.classNames;var M=n.stringMode,j=n.parser,C=n.formatter,A=n.precision,F=n.decimalSeparator,D=n.onChange,T=n.onInput,_=n.onPressEnter,G=n.onStep,W=n.changeOnBlur,H=void 0===W||W,L=n.domRef,z=f(n,fe),q="".concat(a,"-input"),P=e.useRef(null),V=e.useState(!1),U=s(V,2),X=U[0],K=U[1],J=e.useRef(!1),Y=e.useRef(!1),Q=e.useRef(!1),Z=e.useState((function(){return le(null!=w?w:S)})),ee=s(Z,2),ne=ee[0],te=ee[1];var oe=e.useCallback((function(e,n){if(!n)return A>=0?A:Math.max(re(e),re(N))}),[A,N]),se=e.useCallback((function(e){var n=String(e);if(j)return j(n);var t=n;return F&&(t=t.replace(F,".")),t.replace(/[^\w.-]+/g,"")}),[j,F]),pe=e.useRef(""),he=e.useCallback((function(e,n){if(C)return C(e,{userTyping:n,input:String(pe.current)});var t="number"==typeof e?ae(e):e;if(!n){var r=oe(t,n);if(ie(t)&&(F||r>=0))t=ue(t,F||".",r)}return t}),[C,oe,F]),be=e.useState((function(){var e=null!=S?S:w;return ne.isInvalidate()&&["string","number"].includes(p(e))?Number.isNaN(e)?"":e:he(ne.toString(),!1)})),ve=s(be,2),Ne=ve[0],Se=ve[1];function we(e,n){Se(he(e.isInvalidate()?e.toString(!1):e.toString(!n),n))}pe.current=Ne;var $e,ye,Ee,xe,Ie,ke=e.useMemo((function(){return ge(b)}),[b,A]),Re=e.useMemo((function(){return ge(h)}),[h,A]),Oe=e.useMemo((function(){return!(!ke||!ne||ne.isInvalidate())&&ke.lessEquals(ne)}),[ke,ne]),Be=e.useMemo((function(){return!(!Re||!ne||ne.isInvalidate())&&ne.lessEquals(Re)}),[Re,ne]),Me=($e=P.current,ye=X,Ee=e.useRef(null),[function(){try{var e=$e.selectionStart,n=$e.selectionEnd,t=$e.value,r=t.substring(0,e),a=t.substring(n);Ee.current={start:e,end:n,value:t,beforeTxt:r,afterTxt:a}}catch(i){}},function(){if($e&&Ee.current&&ye)try{var e=$e.value,n=Ee.current,t=n.beforeTxt,r=n.afterTxt,a=n.start,i=e.length;if(e.startsWith(t))i=t.length;else if(e.endsWith(r))i=e.length-Ee.current.afterTxt.length;else{var s=t[a-1],l=e.indexOf(s,a-1);-1!==l&&(i=l+1)}$e.setSelectionRange(i,i)}catch(u){o(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(u.message))}}]),je=s(Me,2),Ce=je[0],Ae=je[1],Fe=function(e){return ke&&!e.lessEquals(ke)?ke:Re&&!Re.lessEquals(e)?Re:null},De=function(e){return!Fe(e)},Te=function(e,n){var t,r=e,a=De(r)||r.isEmpty();if(r.isEmpty()||n||(r=Fe(r)||r,a=!0),!y&&!$&&a){var i=r.toString(),o=oe(i,n);return o>=0&&(r=le(ue(i,".",o)),De(r)||(r=le(ue(i,".",o,!0)))),r.equals(ne)||(t=r,void 0===w&&te(t),null==D||D(r.isEmpty()?null:me(M,r)),void 0===w&&we(r,n)),r}return ne},_e=(xe=e.useRef(0),Ie=function(){d.cancel(xe.current)},e.useEffect((function(){return Ie}),[]),function(e){Ie(),xe.current=d((function(){e()}))}),Ge=function e(n){if(Ce(),pe.current=n,Se(n),!Y.current){var t=le(se(n));t.isNaN()||Te(t,!0)}null==T||T(n),_e((function(){var t=n;j||(t=n.replace(/。/g,".")),t!==n&&e(t)}))},We=function(e){var n;if(!(e&&Oe||!e&&Be)){J.current=!1;var t=le(Q.current?ce(N):N);e||(t=t.negate());var r=(ne||le(0)).add(t.toString()),a=Te(r,!1);null==G||G(me(M,a),{offset:Q.current?ce(N):N,type:e?"up":"down"}),null===(n=P.current)||void 0===n||n.focus()}},He=function(e){var n,t=le(se(Ne));n=t.isNaN()?Te(ne,e):Te(t,e),void 0!==w?we(ne,!1):n.isNaN()||we(n,!1)};e.useEffect((function(){if(R&&X){var e=function(e){We(e.deltaY<0),e.preventDefault()},n=P.current;if(n)return n.addEventListener("wheel",e,{passive:!1}),function(){return n.removeEventListener("wheel",e)}}}));return m((function(){ne.isInvalidate()||we(ne,!1)}),[A,C]),m((function(){var e=le(w);te(e);var n=le(se(Ne));e.equals(n)&&J.current&&!C||we(e,J.current)}),[w]),m((function(){C&&Ae()}),[Ne]),e.createElement("div",{ref:L,className:c(a,l,i(i(i(i(i({},"".concat(a,"-focused"),X),"".concat(a,"-disabled"),$),"".concat(a,"-readonly"),y),"".concat(a,"-not-a-number"),ne.isNaN()),"".concat(a,"-out-of-range"),!ne.isInvalidate()&&!De(ne))),style:u,onFocus:function(){K(!0)},onBlur:function(){H&&He(!1),K(!1),J.current=!1},onKeyDown:function(e){var n=e.key,t=e.shiftKey;J.current=!0,Q.current=t,"Enter"===n&&(Y.current||(J.current=!1),He(!1),null==_||_(e)),!1!==I&&!Y.current&&["Up","ArrowUp","Down","ArrowDown"].includes(n)&&(We("Up"===n||"ArrowUp"===n),e.preventDefault())},onKeyUp:function(){J.current=!1,Q.current=!1},onCompositionStart:function(){Y.current=!0},onCompositionEnd:function(){Y.current=!1,Ge(P.current.value)},onBeforeInput:function(){J.current=!0}},B&&e.createElement(de,{prefixCls:a,upNode:E,downNode:x,upDisabled:Oe,downDisabled:Be,onStep:We}),e.createElement("div",{className:"".concat(q,"-wrap")},e.createElement("input",t({autoComplete:"off",role:"spinbutton","aria-valuemin":h,"aria-valuemax":b,"aria-valuenow":ne.isInvalidate()?null:ne.toString(),step:N},z,{ref:g(P,r),className:q,value:Ne,onChange:function(e){Ge(e.target.value)},disabled:$,readOnly:y}))))})),be=e.forwardRef((function(n,r){var a=n.disabled,i=n.style,o=n.prefixCls,s=void 0===o?"rc-input-number":o,l=n.value,u=n.prefix,d=n.suffix,c=n.addonBefore,p=n.addonAfter,m=n.className,g=n.classNames,h=f(n,pe),b=e.useRef(null),v=e.useRef(null),N=e.useRef(null),S=function(e){N.current&&F(N.current,e)};return e.useImperativeHandle(r,(function(){return e=N.current,n={focus:S,nativeElement:b.current.nativeElement||v.current},"undefined"!=typeof Proxy&&e?new Proxy(e,{get:function(e,t){if(n[t])return n[t];var r=e[t];return"function"==typeof r?r.bind(e):r}}):e;var e,n})),e.createElement(A,{className:m,triggerFocus:S,prefixCls:s,value:l,disabled:a,style:i,prefix:u,suffix:d,addonAfter:p,addonBefore:c,classNames:g,components:{affixWrapper:"div",groupWrapper:"div",wrapper:"div",groupAddon:"div"},ref:b},e.createElement(he,t({prefixCls:s,disabled:a,ref:N,domRef:v,className:null==g?void 0:g.input},h)))}));const ve=(e,n)=>{let{componentCls:t,borderRadiusSM:r,borderRadiusLG:a}=e;const i="lg"===n?a:r;return{[`&-${n}`]:{[`${t}-handler-wrap`]:{borderStartEndRadius:i,borderEndEndRadius:i},[`${t}-handler-up`]:{borderStartEndRadius:i},[`${t}-handler-down`]:{borderEndEndRadius:i}}}},Ne=e=>{const{componentCls:n,lineWidth:t,lineType:r,borderRadius:a,inputFontSizeSM:i,inputFontSizeLG:o,controlHeightLG:s,controlHeightSM:l,colorError:u,paddingInlineSM:d,paddingBlockSM:c,paddingBlockLG:f,paddingInlineLG:p,colorTextDescription:m,motionDurationMid:g,handleHoverColor:h,handleOpacity:b,paddingInline:v,paddingBlock:N,handleBg:y,handleActiveBg:E,colorTextDisabled:x,borderRadiusSM:I,borderRadiusLG:k,controlWidth:R,handleBorderColor:O,filledHandleBg:B,lineHeightLG:M,calc:j}=e;return[{[n]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},S(e)),_(e)),{display:"inline-block",width:R,margin:0,padding:0,borderRadius:a}),G(e,{[`${n}-handler-wrap`]:{background:y,[`${n}-handler-down`]:{borderBlockStart:`${w(t)} ${r} ${O}`}}})),W(e,{[`${n}-handler-wrap`]:{background:B,[`${n}-handler-down`]:{borderBlockStart:`${w(t)} ${r} ${O}`}},"&:focus-within":{[`${n}-handler-wrap`]:{background:y}}})),H(e,{[`${n}-handler-wrap`]:{background:y,[`${n}-handler-down`]:{borderBlockStart:`${w(t)} ${r} ${O}`}}})),L(e)),{"&-rtl":{direction:"rtl",[`${n}-input`]:{direction:"rtl"}},"&-lg":{padding:0,fontSize:o,lineHeight:M,borderRadius:k,[`input${n}-input`]:{height:j(s).sub(j(t).mul(2)).equal(),padding:`${w(f)} ${w(p)}`}},"&-sm":{padding:0,fontSize:i,borderRadius:I,[`input${n}-input`]:{height:j(l).sub(j(t).mul(2)).equal(),padding:`${w(c)} ${w(d)}`}},"&-out-of-range":{[`${n}-input-wrap`]:{input:{color:u}}},"&-group":Object.assign(Object.assign(Object.assign({},S(e)),q(e)),{"&-wrapper":Object.assign(Object.assign(Object.assign({display:"inline-block",textAlign:"start",verticalAlign:"top",[`${n}-affix-wrapper`]:{width:"100%"},"&-lg":{[`${n}-group-addon`]:{borderRadius:k,fontSize:e.fontSizeLG}},"&-sm":{[`${n}-group-addon`]:{borderRadius:I}}},P(e)),V(e)),{[`&:not(${n}-compact-first-item):not(${n}-compact-last-item)${n}-compact-item`]:{[`${n}, ${n}-group-addon`]:{borderRadius:0}},[`&:not(${n}-compact-last-item)${n}-compact-first-item`]:{[`${n}, ${n}-group-addon`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&:not(${n}-compact-first-item)${n}-compact-last-item`]:{[`${n}, ${n}-group-addon`]:{borderStartStartRadius:0,borderEndStartRadius:0}}})}),[`&-disabled ${n}-input`]:{cursor:"not-allowed"},[n]:{"&-input":Object.assign(Object.assign(Object.assign(Object.assign({},S(e)),{width:"100%",padding:`${w(N)} ${w(v)}`,textAlign:"start",backgroundColor:"transparent",border:0,borderRadius:a,outline:0,transition:`all ${g} linear`,appearance:"textfield",fontSize:"inherit"}),z(e.colorTextPlaceholder)),{'&[type="number"]::-webkit-inner-spin-button, &[type="number"]::-webkit-outer-spin-button':{margin:0,webkitAppearance:"none",appearance:"none"}})},[`&:hover ${n}-handler-wrap, &-focused ${n}-handler-wrap`]:{width:e.handleWidth,opacity:1}})},{[n]:Object.assign(Object.assign(Object.assign({[`${n}-handler-wrap`]:{position:"absolute",insetBlockStart:0,insetInlineEnd:0,width:e.handleVisibleWidth,opacity:b,height:"100%",borderStartStartRadius:0,borderStartEndRadius:a,borderEndEndRadius:a,borderEndStartRadius:0,display:"flex",flexDirection:"column",alignItems:"stretch",transition:`all ${g}`,overflow:"hidden",[`${n}-handler`]:{display:"flex",alignItems:"center",justifyContent:"center",flex:"auto",height:"40%",[`\n              ${n}-handler-up-inner,\n              ${n}-handler-down-inner\n            `]:{marginInlineEnd:0,fontSize:e.handleFontSize}}},[`${n}-handler`]:{height:"50%",overflow:"hidden",color:m,fontWeight:"bold",lineHeight:0,textAlign:"center",cursor:"pointer",borderInlineStart:`${w(t)} ${r} ${O}`,transition:`all ${g} linear`,"&:active":{background:E},"&:hover":{height:"60%",[`\n              ${n}-handler-up-inner,\n              ${n}-handler-down-inner\n            `]:{color:h}},"&-up-inner, &-down-inner":Object.assign(Object.assign({},$()),{color:m,transition:`all ${g} linear`,userSelect:"none"})},[`${n}-handler-up`]:{borderStartEndRadius:a},[`${n}-handler-down`]:{borderEndEndRadius:a}},ve(e,"lg")),ve(e,"sm")),{"&-disabled, &-readonly":{[`${n}-handler-wrap`]:{display:"none"},[`${n}-input`]:{color:"inherit"}},[`\n          ${n}-handler-up-disabled,\n          ${n}-handler-down-disabled\n        `]:{cursor:"not-allowed"},[`\n          ${n}-handler-up-disabled:hover &-handler-up-inner,\n          ${n}-handler-down-disabled:hover &-handler-down-inner\n        `]:{color:x}})}]},Se=e=>{const{componentCls:n,paddingBlock:t,paddingInline:r,inputAffixPadding:a,controlWidth:i,borderRadiusLG:o,borderRadiusSM:s,paddingInlineLG:l,paddingInlineSM:u,paddingBlockLG:d,paddingBlockSM:c,motionDurationMid:f}=e;return{[`${n}-affix-wrapper`]:Object.assign(Object.assign({[`input${n}-input`]:{padding:`${w(t)} 0`}},_(e)),{position:"relative",display:"inline-flex",alignItems:"center",width:i,padding:0,paddingInlineStart:r,"&-lg":{borderRadius:o,paddingInlineStart:l,[`input${n}-input`]:{padding:`${w(d)} 0`}},"&-sm":{borderRadius:s,paddingInlineStart:u,[`input${n}-input`]:{padding:`${w(c)} 0`}},[`&:not(${n}-disabled):hover`]:{zIndex:1},"&-focused, &:focus":{zIndex:1},[`&-disabled > ${n}-disabled`]:{background:"transparent"},[`> div${n}`]:{width:"100%",border:"none",outline:"none",[`&${n}-focused`]:{boxShadow:"none !important"}},"&::before":{display:"inline-block",width:0,visibility:"hidden",content:'"\\a0"'},[`${n}-handler-wrap`]:{zIndex:2},[n]:{position:"static",color:"inherit","&-prefix, &-suffix":{display:"flex",flex:"none",alignItems:"center",pointerEvents:"none"},"&-prefix":{marginInlineEnd:a},"&-suffix":{insetBlockStart:0,insetInlineEnd:0,height:"100%",marginInlineEnd:r,marginInlineStart:a,transition:`margin ${f}`}},[`&:hover ${n}-handler-wrap, &-focused ${n}-handler-wrap`]:{width:e.handleWidth,opacity:1},[`&:not(${n}-affix-wrapper-without-controls):hover ${n}-suffix`]:{marginInlineEnd:e.calc(e.handleWidth).add(r).equal()}})}},we=b("InputNumber",(e=>{const n=v(e,T(e));return[Ne(n),Se(n),N(n)]}),(e=>{var n;const t=null!==(n=e.handleVisible)&&void 0!==n?n:"auto",r=e.controlHeightSM-2*e.lineWidth;return Object.assign(Object.assign({},D(e)),{controlWidth:90,handleWidth:r,handleFontSize:e.fontSize/2,handleVisible:t,handleActiveBg:e.colorFillAlter,handleBg:e.colorBgContainer,filledHandleBg:new h(e.colorFillSecondary).onBackground(e.colorBgContainer).toHexString(),handleHoverColor:e.colorPrimary,handleBorderColor:e.colorBorder,handleOpacity:!0===t?1:0,handleVisibleWidth:!0===t?r:0})}),{unitless:{handleOpacity:!0}});const $e=e.forwardRef(((n,t)=>{const{getPrefixCls:r,direction:a}=e.useContext(y),i=e.useRef(null);e.useImperativeHandle(t,(()=>i.current));const{className:o,rootClassName:s,size:l,disabled:u,prefixCls:d,addonBefore:f,addonAfter:p,prefix:m,suffix:g,bordered:h,readOnly:b,status:v,controls:N,variant:S}=n,w=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t}(n,["className","rootClassName","size","disabled","prefixCls","addonBefore","addonAfter","prefix","suffix","bordered","readOnly","status","controls","variant"]),$=r("input-number",d),B=E($),[M,j,A]=we($,B),{compactSize:F,compactItemClassnames:D}=x($,a);let T=e.createElement(Q,{className:`${$}-handler-up-inner`}),_=e.createElement(C,{className:`${$}-handler-down-inner`});const G="boolean"==typeof N?N:void 0;"object"==typeof N&&(T=void 0===N.upIcon?T:e.createElement("span",{className:`${$}-handler-up-inner`},N.upIcon),_=void 0===N.downIcon?_:e.createElement("span",{className:`${$}-handler-down-inner`},N.downIcon));const{hasFeedback:W,status:H,isFormItemInput:L,feedbackIcon:z}=e.useContext(I),q=K(H,v),P=k((e=>{var n;return null!==(n=null!=l?l:F)&&void 0!==n?n:e})),V=e.useContext(R),J=null!=u?u:V,[Y,Z]=U("inputNumber",S,h),ee=W&&e.createElement(e.Fragment,null,z),ne=c({[`${$}-lg`]:"large"===P,[`${$}-sm`]:"small"===P,[`${$}-rtl`]:"rtl"===a,[`${$}-in-form-item`]:L},j),te=`${$}-group`;return M(e.createElement(be,Object.assign({ref:i,disabled:J,className:c(A,B,o,s,D),upHandler:T,downHandler:_,prefixCls:$,readOnly:b,controls:G,prefix:m,suffix:ee||g,addonBefore:f&&e.createElement(O,{form:!0,space:!0},f),addonAfter:p&&e.createElement(O,{form:!0,space:!0},p),classNames:{input:ne,variant:c({[`${$}-${Y}`]:Z},X($,q,W)),affixWrapper:c({[`${$}-affix-wrapper-sm`]:"small"===P,[`${$}-affix-wrapper-lg`]:"large"===P,[`${$}-affix-wrapper-rtl`]:"rtl"===a,[`${$}-affix-wrapper-without-controls`]:!1===N},j),wrapper:c({[`${te}-rtl`]:"rtl"===a},j),groupWrapper:c({[`${$}-group-wrapper-sm`]:"small"===P,[`${$}-group-wrapper-lg`]:"large"===P,[`${$}-group-wrapper-rtl`]:"rtl"===a,[`${$}-group-wrapper-${Y}`]:Z},X(`${$}-group-wrapper`,q,W),j)}},w)))})),ye=$e;ye._InternalPanelDoNotUseOrYouWillBeFired=n=>e.createElement(B,{theme:{components:{InputNumber:{handleVisible:!0}}}},e.createElement($e,Object.assign({},n)));const Ee=({field:n})=>{e.useSyncExternalStore(n.subscribe.bind(n),n.getSnapshot.bind(n));const t=n.getName(),r=n.getProps(),a=n.getValue(),i=e.useCallback((e=>{n.isReady()&&(n.setValue(e??0),n.setDirty(!0))}),[n]),o=e.useCallback((()=>{n.setTouched(!0)}),[n]);e.useEffect((()=>{n.setReady(!0)}),[n]);const s={...{width:n.getWidth()??"100%"},...r.style};return M.jsx(ye,{className:r.className,addonAfter:r.addonAfter,addonBefore:r.addonBefore,autoFocus:r.autoFocus,controls:r.controls,decimalSeparator:r.decimalSeparator,disabled:n.isDisabled(),downHandler:r.downHandler,formatter:r.formatter,keyboard:r.keyboard,max:r.max,maxLength:r.maxLength,min:r.min,name:t,onBlur:o,onChange:i,parser:r.parser,placeholder:r.placeholder,precision:r.precision,prefix:r.prefix,prefixCls:r.prefixCls,readOnly:n.isReadOnly(),step:r.step,stringMode:r.stringMode,style:s,upHandler:r.upHandler,value:a})};class NumberField extends j{render(){return M.jsx(Ee,{field:this})}}export{NumberField as N,ye as T};
