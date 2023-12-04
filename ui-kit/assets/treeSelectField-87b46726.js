import{r as o,z as K,l as ce,t as Wt,i as xt,w as Ze,h as Pt,bu as Bt,f as ie,K as Ve,_ as It,u as gt,k as zt,g as Gt,m as wt,n as Ut,B as qt,a as mt,F as Xt,v as Yt,q as Jt,E as Zt,av as Qt,aF as Ct,j as m,R as Je}from"./index-9944374f.js";import{g as en,S as tn,G as at,I as Re,r as nn,P as rn,M as an,m as St,b as on,c as ln,u as sn,R as un,C as cn,d as dn,e as kt,a as fn}from"./index-df6b3fec.js";import{D as hn}from"./dFormModal-d04b30b3.js";import{u as vn,a as gn,B as mn,b as Cn,c as Sn,d as bn,D as yn,e as pn}from"./useShowArrow-59c54bff.js";import{c as tt,a as Dn,T as xn,i as In,g as wn,b as kn,S as En,D as Fn}from"./DeleteOutlined-31742ae8.js";import{g as Nn,e as Mn,E as Tn}from"./docco-d767795b.js";const Ln=function(e){var t=o.useRef({valueLabels:new Map});return o.useMemo(function(){var n=t.current.valueLabels,r=new Map,a=e.map(function(l){var s,u=l.value,c=(s=l.label)!==null&&s!==void 0?s:n.get(u);return r.set(u,c),K(K({},l),{},{label:c})});return t.current.valueLabels=r,[a]},[e])},_n=function(e,t,n,r){return o.useMemo(function(){var a=e.map(function(c){var d=c.value;return d}),l=t.map(function(c){var d=c.value;return d}),s=a.filter(function(c){return!r[c]});if(n){var u=tt(a,!0,r);a=u.checkedKeys,l=u.halfCheckedKeys}return[Array.from(new Set([].concat(ce(s),ce(a)))),l]},[e,t,n,r])};function An(e){return Array.isArray(e)?e:e!==void 0?[e]:[]}function Vn(e){var t=e||{},n=t.label,r=t.value,a=t.children,l=r||"value";return{_title:n?[n]:["title","label"],value:l,key:l,children:a||"children"}}function nt(e){return!e||e.disabled||e.disableCheckbox||e.checkable===!1}function Rn(e,t){var n=[];function r(a){a.forEach(function(l){var s=l[t.children];s&&(n.push(l[t.value]),r(s))})}return r(e),n}function bt(e){return e==null}const On=function(e,t){return o.useMemo(function(){var n=Dn(e,{fieldNames:t,initWrapper:function(a){return K(K({},a),{},{valueEntities:new Map})},processEntity:function(a,l){var s=a.node[t.value];l.valueEntities.set(s,a)}});return n},[e,t])};var ot=function(){return null},Kn=["children","value"];function Et(e){return Wt(e).map(function(t){if(!o.isValidElement(t)||!t.type)return null;var n=t,r=n.key,a=n.props,l=a.children,s=a.value,u=xt(a,Kn),c=K({key:r,value:s},u),d=Et(l);return d.length&&(c.children=d),c}).filter(function(t){return t})}function rt(e){if(!e)return e;var t=K({},e);return"props"in t||Object.defineProperty(t,"props",{get:function(){return Ze(!1,"New `rc-tree-select` not support return node instance as argument anymore. Please consider to remove `props` access."),t}}),t}function jn(e,t,n,r,a,l){var s=null,u=null;function c(){function d(i){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"0",f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return i.map(function(v,g){var C="".concat(h,"-").concat(g),k=v[l.value],_=n.includes(k),j=d(v[l.children]||[],C,_),R=o.createElement(ot,v,j.map(function(M){return M.node}));if(t===k&&(s=R),_){var D={pos:C,node:R,children:j};return f||u.push(D),D}return null}).filter(function(v){return v})}u||(u=[],d(r),u.sort(function(i,h){var f=i.node.props.value,v=h.node.props.value,g=n.indexOf(f),C=n.indexOf(v);return g-C}))}Object.defineProperty(e,"triggerNode",{get:function(){return Ze(!1,"`triggerNode` is deprecated. Please consider decoupling data with node."),c(),s}}),Object.defineProperty(e,"allCheckedNodes",{get:function(){return Ze(!1,"`allCheckedNodes` is deprecated. Please consider decoupling data with node."),c(),a?u:u.map(function(i){var h=i.node;return h})}})}const Hn=function(e,t,n){var r=n.treeNodeFilterProp,a=n.filterTreeNode,l=n.fieldNames,s=l.children;return o.useMemo(function(){if(!t||a===!1)return e;var u;if(typeof a=="function")u=a;else{var c=t.toUpperCase();u=function(h,f){var v=f[r];return String(v).toUpperCase().includes(c)}}function d(i){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return i.reduce(function(f,v){var g=v[s],C=h||u(t,rt(v)),k=d(g||[],C);return(C||k.length)&&f.push(K(K({},v),{},Pt({isLeaf:void 0},s,k))),f},[])}return d(e)},[e,t,s,r,a])};function yt(e){var t=o.useRef();t.current=e;var n=o.useCallback(function(){return t.current.apply(t,arguments)},[]);return n}function $n(e,t){var n=t.id,r=t.pId,a=t.rootPId,l={},s=[],u=e.map(function(c){var d=K({},c),i=d[n];return l[i]=d,d.key=d.key||i,d});return u.forEach(function(c){var d=c[r],i=l[d];i&&(i.children=i.children||[],i.children.push(c)),(d===a||!i&&a===null)&&s.push(c)}),s}function Wn(e,t,n){return o.useMemo(function(){return e?n?$n(e,K({id:"id",pId:"pId",rootPId:null},n!==!0?n:{})):e:Et(t)},[t,n,e])}var Ft=o.createContext(null),Nt=o.createContext(null),Pn={width:0,height:0,display:"flex",overflow:"hidden",opacity:0,border:0,padding:0,margin:0},Bn=function(t,n){var r=vn(),a=r.prefixCls,l=r.multiple,s=r.searchValue,u=r.toggleOpen,c=r.open,d=r.notFoundContent,i=o.useContext(Nt),h=i.virtual,f=i.listHeight,v=i.listItemHeight,g=i.listItemScrollOffset,C=i.treeData,k=i.fieldNames,_=i.onSelect,j=i.dropdownMatchSelectWidth,R=i.treeExpandAction,D=o.useContext(Ft),M=D.checkable,T=D.checkedKeys,De=D.halfCheckedKeys,Q=D.treeExpandedKeys,Oe=D.treeDefaultExpandAll,Ke=D.treeDefaultExpandedKeys,xe=D.onTreeExpand,ee=D.treeIcon,de=D.showTreeIcon,H=D.switcherIcon,Ie=D.treeLine,X=D.treeNodeFilterProp,te=D.loadData,$=D.treeLoadedKeys,we=D.treeMotion,ke=D.onTreeLoad,Ee=D.keyEntities,z=o.useRef(),F=Bt(function(){return C},[c,C],function(E,S){return S[0]&&E[1]!==S[1]}),fe=o.useState(null),G=ie(fe,2),ne=G[0],re=G[1],W=Ee[ne],ae=o.useMemo(function(){return M?{checked:T,halfChecked:De}:null},[M,T,De]);o.useEffect(function(){if(c&&!l&&T.length){var E;(E=z.current)===null||E===void 0||E.scrollTo({key:T[0]}),re(T[0])}},[c]);var he=String(s).toLowerCase(),Fe=function(S){return he?String(S[X]).toLowerCase().includes(he):!1},ve=o.useState(Ke),ge=ie(ve,2),me=ge[0],je=ge[1],Ne=o.useState(null),Y=ie(Ne,2),J=Y[0],Ce=Y[1],O=o.useMemo(function(){return Q?ce(Q):s?J:me},[me,J,Q,s]);o.useEffect(function(){s&&Ce(Rn(C,k))},[s]);var He=function(S){je(S),Ce(S),xe&&xe(S)},Se=function(S){S.preventDefault()},U=function(S,oe){var A=oe.node;M&&nt(A)||(_(A.key,{selected:!T.includes(A.key)}),l||u(!1))};if(o.useImperativeHandle(n,function(){var E;return{scrollTo:(E=z.current)===null||E===void 0?void 0:E.scrollTo,onKeyDown:function(oe){var A,Me=oe.which;switch(Me){case Ve.UP:case Ve.DOWN:case Ve.LEFT:case Ve.RIGHT:(A=z.current)===null||A===void 0||A.onKeyDown(oe);break;case Ve.ENTER:{if(W){var be=(W==null?void 0:W.node)||{},$e=be.selectable,le=be.value;$e!==!1&&U(null,{node:{key:ne},selected:!T.includes(le)})}break}case Ve.ESC:u(!1)}},onKeyUp:function(){}}}),F.length===0)return o.createElement("div",{role:"listbox",className:"".concat(a,"-empty"),onMouseDown:Se},d);var Z={fieldNames:k};return $&&(Z.loadedKeys=$),O&&(Z.expandedKeys=O),o.createElement("div",{onMouseDown:Se},W&&c&&o.createElement("span",{style:Pn,"aria-live":"assertive"},W.node.value),o.createElement(xn,It({ref:z,focusable:!1,prefixCls:"".concat(a,"-tree"),treeData:F,height:f,itemHeight:v,itemScrollOffset:g,virtual:h!==!1&&j!==!1,multiple:l,icon:ee,showIcon:de,switcherIcon:H,showLine:Ie,loadData:s?null:te,motion:we,activeKey:ne,checkable:M,checkStrictly:!0,checkedKeys:ae,selectedKeys:M?[]:T,defaultExpandAll:Oe},Z,{onActiveChange:re,onSelect:U,onCheck:U,onExpand:He,onLoad:ke,filterTreeNode:Fe,expandAction:R})))},Mt=o.forwardRef(Bn);Mt.displayName="OptionList";var lt="SHOW_ALL",st="SHOW_PARENT",Qe="SHOW_CHILD";function pt(e,t,n,r){var a=new Set(e);return t===Qe?e.filter(function(l){var s=n[l];return!(s&&s.children&&s.children.some(function(u){var c=u.node;return a.has(c[r.value])})&&s.children.every(function(u){var c=u.node;return nt(c)||a.has(c[r.value])}))}):t===st?e.filter(function(l){var s=n[l],u=s?s.parent:null;return!(u&&!nt(u.node)&&a.has(u.key))}):e}var zn=["id","prefixCls","value","defaultValue","onChange","onSelect","onDeselect","searchValue","inputValue","onSearch","autoClearSearchValue","filterTreeNode","treeNodeFilterProp","showCheckedStrategy","treeNodeLabelProp","multiple","treeCheckable","treeCheckStrictly","labelInValue","fieldNames","treeDataSimpleMode","treeData","children","loadData","treeLoadedKeys","onTreeLoad","treeDefaultExpandAll","treeExpandedKeys","treeDefaultExpandedKeys","onTreeExpand","treeExpandAction","virtual","listHeight","listItemHeight","listItemScrollOffset","onDropdownVisibleChange","dropdownMatchSelectWidth","treeLine","treeIcon","showTreeIcon","switcherIcon","treeMotion"];function Gn(e){return!e||zt(e)!=="object"}var Un=o.forwardRef(function(e,t){var n=e.id,r=e.prefixCls,a=r===void 0?"rc-tree-select":r,l=e.value,s=e.defaultValue,u=e.onChange,c=e.onSelect,d=e.onDeselect,i=e.searchValue,h=e.inputValue,f=e.onSearch,v=e.autoClearSearchValue,g=v===void 0?!0:v,C=e.filterTreeNode,k=e.treeNodeFilterProp,_=k===void 0?"value":k,j=e.showCheckedStrategy,R=e.treeNodeLabelProp,D=e.multiple,M=e.treeCheckable,T=e.treeCheckStrictly,De=e.labelInValue,Q=e.fieldNames,Oe=e.treeDataSimpleMode,Ke=e.treeData,xe=e.children,ee=e.loadData,de=e.treeLoadedKeys,H=e.onTreeLoad,Ie=e.treeDefaultExpandAll,X=e.treeExpandedKeys,te=e.treeDefaultExpandedKeys,$=e.onTreeExpand,we=e.treeExpandAction,ke=e.virtual,Ee=e.listHeight,z=Ee===void 0?200:Ee,F=e.listItemHeight,fe=F===void 0?20:F,G=e.listItemScrollOffset,ne=G===void 0?0:G,re=e.onDropdownVisibleChange,W=e.dropdownMatchSelectWidth,ae=W===void 0?!0:W,he=e.treeLine,Fe=e.treeIcon,ve=e.showTreeIcon,ge=e.switcherIcon,me=e.treeMotion,je=xt(e,zn),Ne=gn(n),Y=M&&!T,J=M||T,Ce=T||De,O=J||D,He=gt(s,{value:l}),Se=ie(He,2),U=Se[0],Z=Se[1],E=o.useMemo(function(){return M?j||Qe:lt},[j,M]),S=o.useMemo(function(){return Vn(Q)},[JSON.stringify(Q)]),oe=gt("",{value:i!==void 0?i:h,postState:function(b){return b||""}}),A=ie(oe,2),Me=A[0],be=A[1],$e=function(b){be(b),f==null||f(b)},le=Wn(Ke,xe,Oe),Ge=On(le,S),L=Ge.keyEntities,P=Ge.valueEntities,Te=o.useCallback(function(y){var b=[],p=[];return y.forEach(function(x){P.has(x)?p.push(x):b.push(x)}),{missingRawValues:b,existRawValues:p}},[P]),ut=Hn(le,Me,{fieldNames:S,treeNodeFilterProp:_,filterTreeNode:C}),ct=o.useCallback(function(y){if(y){if(R)return y[R];for(var b=S._title,p=0;p<b.length;p+=1){var x=y[b[p]];if(x!==void 0)return x}}},[S,R]),We=o.useCallback(function(y){var b=An(y);return b.map(function(p){return Gn(p)?{value:p}:p})},[]),Ue=o.useCallback(function(y){var b=We(y);return b.map(function(p){var x=p.label,V=p.value,N=p.halfChecked,I,w=P.get(V);if(w){var B;x=(B=x)!==null&&B!==void 0?B:ct(w.node),I=w.node.disabled}else if(x===void 0){var se=We(U).find(function(Pe){return Pe.value===V});x=se.label}return{label:x,value:V,halfChecked:N,disabled:I}})},[P,ct,We,U]),it=o.useMemo(function(){return We(U)},[We,U]),Lt=o.useMemo(function(){var y=[],b=[];return it.forEach(function(p){p.halfChecked?b.push(p):y.push(p)}),[y,b]},[it]),dt=ie(Lt,2),Le=dt[0],ft=dt[1],ht=o.useMemo(function(){return Le.map(function(y){return y.value})},[Le]),_t=_n(Le,ft,Y,L),vt=ie(_t,2),_e=vt[0],qe=vt[1],At=o.useMemo(function(){var y=pt(_e,E,L,S),b=y.map(function(N){var I,w;return(I=(w=L[N])===null||w===void 0||(w=w.node)===null||w===void 0?void 0:w[S.value])!==null&&I!==void 0?I:N}),p=b.map(function(N){var I=Le.find(function(w){return w.value===N});return{value:N,label:I==null?void 0:I.label}}),x=Ue(p),V=x[0];return!O&&V&&bt(V.value)&&bt(V.label)?[]:x.map(function(N){var I;return K(K({},N),{},{label:(I=N.label)!==null&&I!==void 0?I:N.value})})},[S,O,_e,Le,Ue,E,L]),Vt=Ln(At),Rt=ie(Vt,1),Ot=Rt[0],Xe=yt(function(y,b,p){var x=Ue(y);if(Z(x),g&&be(""),u){var V=y;if(Y){var N=pt(y,E,L,S);V=N.map(function(q){var ue=P.get(q);return ue?ue.node[S.value]:q})}var I=b||{triggerValue:void 0,selected:void 0},w=I.triggerValue,B=I.selected,se=V;if(T){var Pe=ft.filter(function(q){return!V.includes(q.value)});se=[].concat(ce(se),ce(Pe))}var Be=Ue(se),ye={preValue:Le,triggerValue:w},Ae=!0;(T||p==="selection"&&!B)&&(Ae=!1),jn(ye,w,y,le,Ae,S),J?ye.checked=B:ye.selected=B;var Ye=Ce?Be:Be.map(function(q){return q.value});u(O?Ye:Ye[0],Ce?null:Be.map(function(q){return q.label}),ye)}}),et=o.useCallback(function(y,b){var p,x=b.selected,V=b.source,N=L[y],I=N==null?void 0:N.node,w=(p=I==null?void 0:I[S.value])!==null&&p!==void 0?p:y;if(!O)Xe([w],{selected:!0,triggerValue:w},"option");else{var B=x?[].concat(ce(ht),[w]):_e.filter(function(ue){return ue!==w});if(Y){var se=Te(B),Pe=se.missingRawValues,Be=se.existRawValues,ye=Be.map(function(ue){return P.get(ue).key}),Ae;if(x){var Ye=tt(ye,!0,L);Ae=Ye.checkedKeys}else{var q=tt(ye,{checked:!1,halfCheckedKeys:qe},L);Ae=q.checkedKeys}B=[].concat(ce(Pe),ce(Ae.map(function(ue){return L[ue].node[S.value]})))}Xe(B,{selected:x,triggerValue:w},V||"option")}x||!O?c==null||c(w,rt(I)):d==null||d(w,rt(I))},[Te,P,L,S,O,ht,Xe,Y,c,d,_e,qe]),Kt=o.useCallback(function(y){if(re){var b={};Object.defineProperty(b,"documentClickClose",{get:function(){return Ze(!1,"Second param of `onDropdownVisibleChange` has been removed."),!1}}),re(y,b)}},[re]),jt=yt(function(y,b){var p=y.map(function(x){return x.value});if(b.type==="clear"){Xe(p,{},"selection");return}b.values.length&&et(b.values[0].value,{selected:!1,source:"selection"})}),Ht=o.useMemo(function(){return{virtual:ke,dropdownMatchSelectWidth:ae,listHeight:z,listItemHeight:fe,listItemScrollOffset:ne,treeData:ut,fieldNames:S,onSelect:et,treeExpandAction:we}},[ke,ae,z,fe,ne,ut,S,et,we]),$t=o.useMemo(function(){return{checkable:J,loadData:ee,treeLoadedKeys:de,onTreeLoad:H,checkedKeys:_e,halfCheckedKeys:qe,treeDefaultExpandAll:Ie,treeExpandedKeys:X,treeDefaultExpandedKeys:te,onTreeExpand:$,treeIcon:Fe,treeMotion:me,showTreeIcon:ve,switcherIcon:ge,treeLine:he,treeNodeFilterProp:_,keyEntities:L}},[J,ee,de,H,_e,qe,Ie,X,te,$,Fe,me,ve,ge,he,_,L]);return o.createElement(Nt.Provider,{value:Ht},o.createElement(Ft.Provider,{value:$t},o.createElement(mn,It({ref:t},je,{id:Ne,prefixCls:a,mode:O?"multiple":void 0,displayValues:Ot,onDisplayValuesChange:jt,searchValue:Me,onSearch:$e,OptionList:Mt,emptyOptions:!le.length,onDropdownVisibleChange:Kt,dropdownMatchSelectWidth:ae}))))}),ze=Un;ze.TreeNode=ot;ze.SHOW_ALL=lt;ze.SHOW_PARENT=st;ze.SHOW_CHILD=Qe;const qn=e=>{const{componentCls:t,treePrefixCls:n,colorBgElevated:r}=e,a=`.${n}`;return[{[`${t}-dropdown`]:[{padding:`${e.paddingXS}px ${e.paddingXS/2}px`},wn(n,wt(e,{colorBgContainer:r})),{[a]:{borderRadius:0,[`${a}-list-holder-inner`]:{alignItems:"stretch",[`${a}-treenode`]:{[`${a}-node-content-wrapper`]:{flex:"auto"}}}}},kn(`${n}-checkbox`,e),{"&-rtl":{direction:"rtl",[`${a}-switcher${a}-switcher_close`]:{[`${a}-switcher-icon svg`]:{transform:"rotate(90deg)"}}}}]}]};function Xn(e,t){return Gt("TreeSelect",n=>{const r=wt(n,{treePrefixCls:t});return[qn(r)]},In)(e)}var Yn=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};const Jn=(e,t)=>{var n,r,{prefixCls:a,size:l,disabled:s,bordered:u=!0,className:c,rootClassName:d,treeCheckable:i,multiple:h,listHeight:f=256,listItemHeight:v=26,placement:g,notFoundContent:C,switcherIcon:k,treeLine:_,getPopupContainer:j,popupClassName:R,dropdownClassName:D,treeIcon:M=!1,transitionName:T,choiceTransitionName:De="",status:Q,treeExpandAction:Oe,builtinPlacements:Ke,dropdownMatchSelectWidth:xe,popupMatchSelectWidth:ee,allowClear:de}=e,H=Yn(e,["prefixCls","size","disabled","bordered","className","rootClassName","treeCheckable","multiple","listHeight","listItemHeight","placement","notFoundContent","switcherIcon","treeLine","getPopupContainer","popupClassName","dropdownClassName","treeIcon","transitionName","choiceTransitionName","status","treeExpandAction","builtinPlacements","dropdownMatchSelectWidth","popupMatchSelectWidth","allowClear"]);const{getPopupContainer:Ie,getPrefixCls:X,renderEmpty:te,direction:$,virtual:we,popupMatchSelectWidth:ke,popupOverflow:Ee}=o.useContext(Ut),z=X(),F=X("select",a),fe=X("select-tree",a),G=X("tree-select",a),{compactSize:ne,compactItemClassnames:re}=qt(F,$),[W,ae]=Cn(F),[he]=Xn(G,fe),Fe=mt(R||D,`${G}-dropdown`,{[`${G}-dropdown-rtl`]:$==="rtl"},d,ae),ve=!!(i||h),ge=Sn(H.suffixIcon,H.showArrow),me=(n=ee??xe)!==null&&n!==void 0?n:ke,{status:je,hasFeedback:Ne,isFormItemInput:Y,feedbackIcon:J}=o.useContext(Xt),Ce=Mn(je,Q),{suffixIcon:O,removeIcon:He,clearIcon:Se}=bn(Object.assign(Object.assign({},H),{multiple:ve,showSuffixIcon:ge,hasFeedback:Ne,feedbackIcon:J,prefixCls:F,componentName:"TreeSelect"})),U=de===!0?{clearIcon:Se}:de;let Z;C!==void 0?Z=C:Z=(te==null?void 0:te("Select"))||o.createElement(yn,{componentName:"Select"});const E=Yt(H,["suffixIcon","itemIcon","removeIcon","clearIcon","switcherIcon"]),S=o.useMemo(()=>g!==void 0?g:$==="rtl"?"bottomRight":"bottomLeft",[g,$]),oe=pn(Ke,Ee),A=Jt(P=>{var Te;return(Te=l??ne)!==null&&Te!==void 0?Te:P}),Me=o.useContext(Zt),be=s??Me,$e=mt(!a&&G,{[`${F}-lg`]:A==="large",[`${F}-sm`]:A==="small",[`${F}-rtl`]:$==="rtl",[`${F}-borderless`]:!u,[`${F}-in-form-item`]:Y},Nn(F,Ce,Ne),re,c,d,ae),le=P=>o.createElement(En,{prefixCls:fe,switcherIcon:k,treeNodeProps:P,showLine:_}),[Ge]=Qt("SelectLike",(r=H.dropdownStyle)===null||r===void 0?void 0:r.zIndex),L=o.createElement(ze,Object.assign({virtual:we,disabled:be},E,{dropdownMatchSelectWidth:me,builtinPlacements:oe,ref:t,prefixCls:F,className:$e,listHeight:f,listItemHeight:v,treeCheckable:i&&o.createElement("span",{className:`${F}-tree-checkbox-inner`}),treeLine:!!_,suffixIcon:O,multiple:ve,placement:S,removeIcon:He,allowClear:U,switcherIcon:le,showTreeIcon:M,notFoundContent:Z,getPopupContainer:j||Ie,treeMotion:null,dropdownClassName:Fe,dropdownStyle:Object.assign(Object.assign({},H.dropdownStyle),{zIndex:Ge}),choiceTransitionName:Ct(z,"",De),transitionName:Ct(z,"slide-up",T),treeExpandAction:Oe}));return W(he(L))},Zn=o.forwardRef(Jn),pe=Zn,Qn=en(pe);pe.TreeNode=ot;pe.SHOW_ALL=lt;pe.SHOW_PARENT=st;pe.SHOW_CHILD=Qe;pe._InternalPanelDoNotUseOrYouWillBeFired=Qn;const er=pe,tr=()=>{const e=o.useRef(!0);return o.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),e},nr=e=>o.useMemo(()=>({...{maxHeight:400,overflow:"auto"},...e||{}}),[e]),rr=({fetching:e,error:t,minSymbols:n})=>n||e||t?m.jsx(m.Fragment,{}):m.jsx("div",{style:{paddingLeft:"30px",fontSize:"12px"},children:"Данные отсутствуют"}),ar=({fetching:e,error:t,minSymbols:n})=>n?m.jsx(or,{minSymbols:n}):e?m.jsx(lr,{}):t?m.jsx(sr,{error:t}):m.jsx(m.Fragment,{}),or=({minSymbols:e})=>m.jsxs("div",{style:{paddingLeft:"30px",fontSize:"12px"},children:["Введите как минимум ",e," симв."]}),lr=()=>m.jsxs("div",{style:{paddingLeft:"30px",fontSize:"12px"},children:[m.jsx(tn,{size:"small"})," загрузка..."]}),sr=({error:e})=>m.jsx("div",{role:"alert",style:{paddingLeft:"30px",fontSize:"12px",color:"#ff4d4f"},children:e}),ur=({menu:e,fetching:t,error:n,minSymbols:r})=>m.jsxs(m.Fragment,{children:[e,m.jsx(ar,{fetching:t,error:n,minSymbols:r})]}),cr=({fetchError:e,fetching:t,minSymbols:n})=>o.useCallback(r=>m.jsx(ur,{menu:r,fetching:t,error:e,minSymbols:n}),[e,t,n]),ir=e=>{const t=e.getProps().fieldNames,n=(t==null?void 0:t.title)||"title";return o.useCallback((r,a)=>{const l=a;return!l||typeof l[n]!="string"?!1:l[n].toLowerCase().indexOf(r.toLowerCase())>=0},[n])},Dt=({api:e,treeSelectProps:t,antdTreeSelectProps:n})=>{var s,u,c,d,i;const r=nr(t.dropdownStyle),a=cr({fetchError:e.getFetchError(),fetching:e.getIsFetching(),minSymbols:e.getMinSymbols()}),l=ir(e);return m.jsx(er,{...n,treeData:e.getDataSet(),showSearch:t.showSearch!==!1,treeDefaultExpandAll:t.treeDefaultExpandAll!==!1,disabled:t.disabled??t.readOnly,dropdownStyle:r,fieldNames:{label:t.titleRender?"__title":((s=t.fieldNames)==null?void 0:s.title)??"title",value:(u=t.fieldNames)!=null&&u.value?t.fieldNames.value:"id",children:(c=t.fieldNames)!=null&&c.children?t.fieldNames.children:"children"},treeNodeLabelProp:t.selectedLabelProp?t.selectedLabelProp:t.labelRender?"__label":((d=t.fieldNames)==null?void 0:d.title)??"title",treeNodeFilterProp:t.titleRender?"__title":((i=t.fieldNames)==null?void 0:i.title)??"title",filterTreeNode:(h,f)=>e.getIsAllFetched()?t.filterTreeNode?typeof t.filterTreeNode=="function"?t.filterTreeNode(h,f):t.filterTreeNode:l(h,f):!0,value:e.getInternalValue(),notFoundContent:t.notFoundContent??m.jsx(rr,{fetching:e.getIsFetching(),error:e.getFetchError(),minSymbols:e.getMinSymbols()}),dropdownRender:t.dropdownRender??a,onClear:()=>{var h,f;(h=t.onClear)==null||h.call(t),e.setValues(null),(f=t.onClear)==null||f.call(t)},onChange:h=>{var v;const f=e.plainValueToNodes(h);e.setValues(f??null),(v=t.onChange)==null||v.call(t,f??null)},onDropdownVisibleChange:h=>{var f;h&&(t.fetchMode==="onUse"||t.fetchMode==="onUseForce")&&e.fetchData(""),(f=t.onDropdownVisibleChange)==null||f.call(t,h)},onSearch:h=>{var f;e.fetchData(h,!0),(f=t.onSearch)==null||f.call(t,h)}})},dr=e=>{const n=e.getProps().editFormProps,[r]=o.useState((n==null?void 0:n.apiRef)||{}),[a]=o.useState((n==null?void 0:n.formId)??"SelectItemEdit-"+at());return[o.useMemo(()=>{if(!n)return;const u={...{width:400,minWidth:200,bodyHeight:200,bodyMinHeight:40},...n,apiRef:r,formId:a},c=u==null?void 0:u.onSubmitSuccess;return u.onSubmitSuccess=(d,i,h)=>{if(!i||(c==null?void 0:c(d,i,h))===!1)return;const f={...h.model.getFormDataSet()??{},...i};if(h.getFormProps().formMode==="update")e.updateNodes(f);else{const g=e.getValues(),C=g&&g.length>0?g[0]:void 0;e.addNodes(C,f)}e.setValues([f])},u},[n,r,a,e]),r]},fr=e=>o.useCallback(t=>{var a;if(!e.isMounted())return;const n=e.getProps();if(!n.noCacheFetchedData&&e.getIsAllFetched())return;if(n.minSearchLength&&t.length<n.minSearchLength){e.setSetMynSymbols(n.minSearchLength),e.setDataSet(void 0);return}e.setSetMynSymbols(0),e.setSetFetchError(null);const r=(a=n==null?void 0:n.onDataFetch)==null?void 0:a.call(n,t,e);if(!r){e.setIsAllFetched(!0);return}e.setIsFetching(!0),t||e.setDataSet(null),r.then(l=>{var s,u,c;e.isMounted()&&(e.setDataSet(l.data),e.setIsAllFetched(e.getIsAllFetched()||!t),e.getIsReady()||(e.setIsReady(!0),(s=n==null?void 0:n.onReady)==null||s.call(n)),e.setIsFetching(!1),(u=n==null?void 0:n.onDataFetchSuccess)==null||u.call(n,l,e),(c=n==null?void 0:n.onDataFetchComplete)==null||c.call(n,e))},l=>{e.isMounted()&&(e.setSetFetchError(l.message),e.setDataSet(void 0),e.setIsFetching(!1))})},[e]),hr=(e,t,n,r)=>{const a=o.useRef([]),[l,s]=o.useState(r?[]:null),[,u]=o.useState([]),c=vr(e,t,n),d=o.useCallback(i=>{if(!i){a.current=[],u([]),s(r?[]:null);return}if(!Re(i)){const g={...i},C=c(g);a.current=[g],u([g]),s(r?C?[C]:[]:C??null);return}const h=[],f=[],v=[...i];for(const g of v){const C={...g},k=c(C);k&&(f.push(C),h.push(k))}r?(s(h),a.current=f,u(a.current)):(s(h.length>0?h[0]:null),a.current=f.length>0?[f[0]]:[],u(a.current))},[c,r,a]);return[l,a,d]},vr=(e,t,n)=>o.useCallback(r=>{if(!r)return null;const a=(e==null?void 0:e.value)??"id",l=r[a];let s;if(t)s=t(r);else{const u=(e==null?void 0:e.title)??"title",c=n?"__title":"";s=r.label??void 0,!s&&c&&(s=r[c]),s||(s=r[u])}return{value:l,label:s??void 0}},[e==null?void 0:e.title,e==null?void 0:e.value,t,n]),gr=(e,t,n)=>o.useCallback(r=>{if(!r)return;const a=(e==null?void 0:e.value)??"id",l=r;let s=t(l);if(s||(s=n(l),s))return s;const u={};return u[a]=r,u},[e,t,n]),mr=e=>{const t=e.getProps(),n=Cr(e.getDataSet()),r=Sr(e.getValues()),a=gr(t.fieldNames,n,r);return o.useCallback(l=>{if(!l)return;const s=Re(l)?l:[l],u=[];for(const c of s){const d=a(c);d&&u.push(d)}return u},[a])},Cr=e=>{const t=o.useRef();return t.current=e,o.useCallback(n=>{if(!t.current||!n)return;const r=(a,l)=>{for(const s of a){if(s.id===l)return s;if(!s.children)continue;const u=r(s.children,l);if(u)return u}};return r(t.current,n)},[])},Sr=e=>{const t=o.useRef();return t.current=e,o.useCallback(n=>{if(!(!t.current||!n)){for(const r of t.current)if(r.id===n)return r}},[])},br=(e,t,n)=>{const[r,a]=o.useState(),l=o.useCallback(s=>{if(!n.current)return;if(!s){a(void 0);return}let u;e||t?u=Tt(s,e,t):u=s,a(u)},[e,t,n]);return[r,l]},Tt=(e,t,n)=>{if(!e)return[];const r=[];for(const a of e){const l={...a};n&&(l.__label=n(a)),t&&(l.__title=t(a)),r.push(l),a.children&&(l.children=Tt(l.children,t,n))}return r},yr=({api:e,componentId:t,treeProps:n,updateProps:r,buttonsApi:a})=>{const l=tr(),[s,u]=br(n.titleRender,n.labelRender,l),[c,d]=o.useState(!1),[i,h]=Je.useState(!1),[f,v]=Je.useState(""),[g,C]=Je.useState(!1),[k,_]=Je.useState(0),[j,R,D]=hr(n.fieldNames,n.labelRender,n.titleRender,n.multiple);e.buttonsApi=a,e.getId=pr(t),e.isMounted=Dr(l),e.getProps=xr(n),e.setProps=Ir(n,r),e.getInternalValue=wr(j),e.getValues=kr(R),e.setValues=Er(D,e),e.getDataSet=Fr(s),e.setDataSet=Nr(u),e.plainValueToNodes=mr(e),e.getIsReady=Mr(c),e.setIsReady=Tr(d),e.getIsFetching=Lr(i),e.setIsFetching=_r(h),e.getFetchError=Ar(f),e.setSetFetchError=Vr(v),e.getIsAllFetched=Rr(g),e.setIsAllFetched=Or(C),e.getMinSymbols=Kr(k),e.setSetMynSymbols=jr(_);const M=fr(e);e.fetchData=Hr(M,e),e.addNodes=$r(e),e.updateNodes=Wr(e),e.deleteNodes=Pr(e)},pr=e=>o.useCallback(()=>e,[e]),Dr=e=>o.useCallback(()=>e.current,[e]),xr=e=>o.useCallback(()=>e,[e]),Ir=(e,t)=>o.useCallback(n=>{t({...e,...n})},[e,t]),wr=e=>o.useCallback(()=>e,[e]),kr=e=>o.useCallback(()=>e.current,[e]),Er=(e,t)=>o.useCallback(n=>{var s,u,c,d;const r=t.getProps(),a=((s=r.fieldNames)==null?void 0:s.value)??"id";let l;typeof n!="string"?l=n:(l={},l[a]=n),e(l??[]),l?r.multiple?(d=r==null?void 0:r.onChange)==null||d.call(r,l||[]):(c=r==null?void 0:r.onChange)==null||c.call(r,Re(l)&&l.length>0?l[0]:l):(u=r==null?void 0:r.onChange)==null||u.call(r,null)},[t,e]),Fr=e=>o.useCallback(()=>e,[e]),Nr=e=>o.useCallback(t=>{e(t??[])},[e]),Mr=e=>o.useCallback(()=>e,[e]),Tr=e=>o.useCallback(t=>{e(t)},[e]),Lr=e=>o.useCallback(()=>e,[e]),_r=e=>o.useCallback(t=>{e(t)},[e]),Ar=e=>o.useCallback(()=>e,[e]),Vr=e=>o.useCallback(t=>{e(t??"")},[e]),Rr=e=>o.useCallback(()=>e,[e]),Or=e=>o.useCallback(t=>{e(t)},[e]),Kr=e=>o.useCallback(()=>e,[e]),jr=e=>o.useCallback(t=>{e(t)},[e]),Hr=(e,t)=>o.useCallback((n,r)=>{const a=nn(e,t.getProps().debounce??0);r?a(n):e(n)},[t,e]),$r=e=>o.useCallback((t,n)=>{var d,i;const r=Re(n)?n:[n],a=e.getProps(),l=((d=a.fieldNames)==null?void 0:d.value)??"id",s=((i=a.fieldNames)==null?void 0:i.children)??"children",u=(h,f,v)=>{if(!f){for(const g of v)h.push(g);return}for(const g of h)if(g[l]){if(g[l]===f[l]){if(g.isLeaf)for(const C of v)h.push(C);else{g[s]||(g[s]=[]);const C=g[s];for(const k of v)C.push(k)}return!0}if(g[s]&&u(g[s],f,v))return!0}},c=[...e.getDataSet()??[]];for(const h of r)h[l]||(h[l]=at());u(c,t,r),e.setDataSet(c)},[e]),Wr=e=>o.useCallback(t=>{var c,d;const n=Re(t)?t:[t],r=e.getProps(),a=((c=r.fieldNames)==null?void 0:c.value)??"id",l=((d=r.fieldNames)==null?void 0:d.children)??"children",s=(i,h)=>{for(const f of i)if(f[a]){if(f[a]===h[a]){const v=f[l];for(const g in h)f[g]=h[g];return f[l]=v,!0}if(f[l]&&s(f[l],h))return!0}},u=[...e.getDataSet()??[]];for(const i of n)s(u,i);e.setDataSet(u)},[e]),Pr=e=>o.useCallback(t=>{var c,d;const n=Re(t)?t:[t],r=e.getProps(),a=((c=r.fieldNames)==null?void 0:c.value)??"id",l=((d=r.fieldNames)==null?void 0:d.children)??"children",s=(i,h)=>{for(let f=i.length-1;f>=0;f--){const v=i[f];if(v[a]){if(v[a]===h[a])return i.splice(f,1),!0;if(v[l]&&s(v[l],h))return!0}}},u=[...e.getDataSet()??[]];for(const i of n)s(u,i);e.setDataSet(u)},[e]),Br=(e,t)=>{const n=e.getValues(),r=e.getProps();return o.useMemo(()=>{const a={add:{icon:m.jsx(rn,{}),tooltip:"Добавить",position:"left",onClick:()=>{t.open("create")}},edit:{icon:m.jsx(Tn,{}),tooltip:"Редактировать",position:"center",disabled:!n||n.length!==1,onClick:()=>{const l=e.getValues();l.length===1&&t.open("update",l[0])}},delete:{icon:m.jsx(Fn,{}),tooltip:"Удалить",position:"right",disabled:!n||n.length<1,onClick:()=>{zr(e)}}};return an(a,r.editButtons)},[e,t,n,r.editButtons])},zr=e=>{const t=e.getProps(),n=e.getValues();if(n.length<1)return;let r;const a=()=>{var s;const l=(s=t==null?void 0:t.onDelete)==null?void 0:s.call(t,n,e);if(on(l)){t.confirmDelete||(e.buttonsApi.loading("delete",!0),e.buttonsApi.disabled("add",!0),e.buttonsApi.disabled("edit",!0)),l.then(()=>{e.isMounted()&&(e.deleteNodes(n),e.setValues(null),t.confirmDelete?r==null||r.destroy():(e.buttonsApi.loading("delete",!1),e.buttonsApi.disabled("delete",!0),e.buttonsApi.disabled("add",!1)))}).catch(c=>{e.isMounted()&&(t.confirmDelete?r==null||r.destroy():(e.buttonsApi.loading("delete",!1),e.buttonsApi.disabled("add",!1),e.buttonsApi.disabled("edit",!1)),St.alert({content:m.jsxs(m.Fragment,{children:[m.jsx("p",{children:m.jsx("b",{children:c.message})}),c.stack&&ln()?m.jsx("p",{children:c.stack}):""]}),colorType:"danger"}))});return}e.deleteNodes(n),e.setValues(null),r&&r.destroy()};t.confirmDelete?r=St.confirmWaiter({content:t.nodeDeleteMessage??"Удалить выбранные строки?",onOk:a}):a()},Gr=e=>{const[t,n]=sn(e),[r]=o.useState(t.treeSelectId??"treeSelect-"+at()),[a]=o.useState(t.apiRef??{}),[l]=o.useState({});yr({api:a,componentId:r,treeProps:t,updateProps:n,buttonsApi:l});const[s,u]=dr(a),c=Br(a,u),d=Ur(e);return o.useEffect(()=>{a.setIsAllFetched(!1),a.setDataSet(void 0),a.setValues(null)},[a]),o.useEffect(()=>{a.setDataSet(t.dataSet)},[a.setDataSet,a,t.dataSet]),o.useEffect(()=>{a.setValues(t.value??null)},[a,t.value]),o.useEffect(()=>{var i;if((!t.fetchMode||t.fetchMode==="onLoad")&&!t.minSearchLength){a.fetchData("");return}a.getIsReady()||(i=t==null?void 0:t.onReady)==null||i.call(t)},[a,t,t.fetchMode,t.minSearchLength]),!s||t.readOnly||t.disabled?m.jsx(Dt,{api:a,treeSelectProps:e,antdTreeSelectProps:d}):m.jsxs(un,{wrap:!1,children:[m.jsx(Dt,{api:a,treeSelectProps:e,antdTreeSelectProps:d}),m.jsx(cn,{children:m.jsx(dn,{buttons:c,apiRef:l,context:a})}),m.jsx(hn,{...s})]})},Ur=e=>o.useMemo(()=>kt(e,{apiRef:!0,treeSelectId:!0,readOnly:!0,value:!0,defaultValueCallback:!0,titleRender:!0,labelRender:!0,filterTreeNode:!0,dataSet:!0,fetchMode:!0,noCacheFetchedData:!0,minSearchLength:!0,debounce:!0,selectedLabelProp:!0,fieldNames:!0,editFormProps:!0,nodeDeleteMessage:!0,confirmDelete:!0,editButtons:!0,onReady:!0,onChange:!0,onClear:!0,onDataFetch:!0,onDataFetchSuccess:!0,onDataFetchError:!0,onDataFetchComplete:!0,onDelete:!0})[1],[e]),qr=({field:e})=>{o.useSyncExternalStore(e.subscribe.bind(e),e.getSnapshot.bind(e));const t=e.getProps(),n=e.getValue(),r=Xr(t),a=o.useCallback(c=>{var d;e.isReady()&&(e.setValue(c??null),e.setDirty(!0)),(d=t.onChange)==null||d.call(t,c)},[e,t]),l=o.useCallback(()=>{e.setTouched(!0)},[e]),s=o.useCallback(()=>{var c;e.setDirty(!0),e.setTouched(!0),(c=t.onClear)==null||c.call(t)},[e,t]);o.useEffect(()=>{e.setReady(!0)},[e]);const u={width:t.width??"100%",...t.style};return m.jsx(Gr,{style:u,...r,autoFocus:t.autoFocus,defaultValueCallback:t.defaultValueCallback,disabled:e.isDisabled(),readOnly:e.isReadOnly(),value:n,placeholder:t.placeholder??"Choose",allowClear:t.allowClear!==!1,onChange:a,onClear:s,onBlur:l,onDataFetch:t.onDataFetch,onDataFetchComplete:t.onDataFetchComplete,onDataFetchError:t.onDataFetchError,onDataFetchSuccess:t.onDataFetchSuccess,onDelete:t.onDelete,onReady:()=>{var c;return(c=t.onReady)==null?void 0:c.call(t,e)},onKeyUp:t.onKeyUp,onKeyDown:t.onKeyDown,onClick:t.onClick,onSelect:t.onSelect,onMouseLeave:t.onMouseLeave,onMouseEnter:t.onMouseEnter,onMouseDown:t.onMouseDown,onFocus:t.onFocus,onDeselect:t.onDeselect,onDropdownVisibleChange:t.onDropdownVisibleChange,onInputKeyDown:t.onInputKeyDown,onTreeExpand:t.onTreeExpand,onPopupScroll:t.onPopupScroll,onSearch:t.onSearch,onTreeLoad:t.onTreeLoad})},Xr=e=>o.useMemo(()=>kt(e,{component:!0,helpClass:!0,label:!0,placeholder:!0,tab:!0,inlineGroup:!0,value:!0,hidden:!0,dependsOn:!0,width:!0,autoFocus:!0,style:!0,tooltip:!0,disabled:!0,requiredMark:!0,readOnly:!0,rowStyle:!0,autoHeightResize:!0,onDirtyStateChanged:!0,onReady:!0,onDisabledStateChanged:!0,onErrorChanged:!0,onHiddenStateChanged:!0,onLabelChanged:!0,onReadOnlyStateChanged:!0,onTouchedStateChanged:!0,onValidated:!0,onValueChanged:!0,onReadyStateChanged:!0,rules:!0})[1],[e]);class na extends fn{render(){return m.jsx(qr,{field:this})}}export{na as T};