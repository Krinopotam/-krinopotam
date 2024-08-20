import{r as l,B as P,f as ve,t as Yt,b as Rt,w as rt,a as Jt,bc as Zt,_ as ge,K as $e,d as Lt,u as yt,e as Qt,h as en,m as Vt,i as pt,g as tn,aP as nn,S as xt,c as Dt,a9 as rn,x as on,o as an,a1 as ln,aL as sn,N as It,j as C,z as tt,y as un,R as nt}from"./index-DhMwsQtd.js";import{R as cn,I as dn,u as fn,B as hn}from"./dForm-BvND7aMS.js";import{D as vn}from"./dFormModal-B9s_VGMc.js";import{g as gn,S as mn,G as dt,d as He,M as Cn,m as kt,I as bn,a as Sn,C as yn,e as pn,f as _t}from"./messageBox-CQECnf8I.js";import{u as xn,a as Dn,B as In,b as kn,D as wn,m as En,c as Fn}from"./useShowArrow-DtPoDbiW.js";import{c as st,a as Tn,T as Nn,i as Mn,g as Rn,b as Ln,S as Vn,R as _n}from"./DeleteOutlined-BqcAHwXU.js";import{d as An,e as On,g as jn,R as Kn}from"./index-DNVFzPvX.js";import{u as $n}from"./useIcons-Cyt_PLs-.js";const Hn=function(e){var t=l.useRef({valueLabels:new Map});return l.useMemo(function(){var n=t.current.valueLabels,r=new Map,o=e.map(function(a){var s,u=a.value,c=(s=a.label)!==null&&s!==void 0?s:n.get(u);return r.set(u,c),P(P({},a),{},{label:c})});return t.current.valueLabels=r,[o]},[e])},Wn=function(e,t,n,r){return l.useMemo(function(){var o=e.map(function(c){var i=c.value;return i}),a=t.map(function(c){var i=c.value;return i}),s=o.filter(function(c){return!r[c]});if(n){var u=st(o,!0,r);o=u.checkedKeys,a=u.halfCheckedKeys}return[Array.from(new Set([].concat(ve(s),ve(o)))),a]},[e,t,n,r])};function Bn(e){return Array.isArray(e)?e:e!==void 0?[e]:[]}function Pn(e){var t=e||{},n=t.label,r=t.value,o=t.children,a=r||"value";return{_title:n?[n]:["title","label"],value:a,key:a,children:o||"children"}}function ut(e){return!e||e.disabled||e.disableCheckbox||e.checkable===!1}function Gn(e,t){var n=[];function r(o){o.forEach(function(a){var s=a[t.children];s&&(n.push(a[t.value]),r(s))})}return r(e),n}function wt(e){return e==null}const zn=function(e,t){return l.useMemo(function(){var n=Tn(e,{fieldNames:t,initWrapper:function(o){return P(P({},o),{},{valueEntities:new Map})},processEntity:function(o,a){var s=o.node[t.value];a.valueEntities.set(s,o)}});return n},[e,t])};var ft=function(){return null},Un=["children","value"];function At(e){return Yt(e).map(function(t){if(!l.isValidElement(t)||!t.type)return null;var n=t,r=n.key,o=n.props,a=o.children,s=o.value,u=Rt(o,Un),c=P({key:r,value:s},u),i=At(a);return i.length&&(c.children=i),c}).filter(function(t){return t})}function ct(e){if(!e)return e;var t=P({},e);return"props"in t||Object.defineProperty(t,"props",{get:function(){return rt(!1,"New `rc-tree-select` not support return node instance as argument anymore. Please consider to remove `props` access."),t}}),t}function Xn(e,t,n,r,o,a){var s=null,u=null;function c(){function i(d){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"0",f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return d.map(function(v,m){var b="".concat(h,"-").concat(m),I=v[a.value],M=n.includes(I),V=i(v[a.children]||[],b,M),_=l.createElement(ft,v,V.map(function(L){return L.node}));if(t===I&&(s=_),M){var $={pos:b,node:_,children:V};return f||u.push($),$}return null}).filter(function(v){return v})}u||(u=[],i(r),u.sort(function(d,h){var f=d.node.props.value,v=h.node.props.value,m=n.indexOf(f),b=n.indexOf(v);return m-b}))}Object.defineProperty(e,"triggerNode",{get:function(){return rt(!1,"`triggerNode` is deprecated. Please consider decoupling data with node."),c(),s}}),Object.defineProperty(e,"allCheckedNodes",{get:function(){return rt(!1,"`allCheckedNodes` is deprecated. Please consider decoupling data with node."),c(),o?u:u.map(function(d){var h=d.node;return h})}})}const qn=function(e,t,n){var r=n.treeNodeFilterProp,o=n.filterTreeNode,a=n.fieldNames,s=a.children;return l.useMemo(function(){if(!t||o===!1)return e;var u;if(typeof o=="function")u=o;else{var c=t.toUpperCase();u=function(h,f){var v=f[r];return String(v).toUpperCase().includes(c)}}function i(d){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return d.reduce(function(f,v){var m=v[s],b=h||u(t,ct(v)),I=i(m||[],b);return(b||I.length)&&f.push(P(P({},v),{},Jt({isLeaf:void 0},s,I))),f},[])}return i(e)},[e,t,s,r,o])};function Et(e){var t=l.useRef();t.current=e;var n=l.useCallback(function(){return t.current.apply(t,arguments)},[]);return n}function Yn(e,t){var n=t.id,r=t.pId,o=t.rootPId,a={},s=[],u=e.map(function(c){var i=P({},c),d=i[n];return a[d]=i,i.key=i.key||d,i});return u.forEach(function(c){var i=c[r],d=a[i];d&&(d.children=d.children||[],d.children.push(c)),(i===o||!d&&o===null)&&s.push(c)}),s}function Jn(e,t,n){return l.useMemo(function(){return e?n?Yn(e,P({id:"id",pId:"pId",rootPId:null},n!==!0?n:{})):e:At(t)},[t,n,e])}var Ot=l.createContext(null),jt=l.createContext(null),Zn={width:0,height:0,display:"flex",overflow:"hidden",opacity:0,border:0,padding:0,margin:0},Qn=function(t,n){var r=xn(),o=r.prefixCls,a=r.multiple,s=r.searchValue,u=r.toggleOpen,c=r.open,i=r.notFoundContent,d=l.useContext(jt),h=d.virtual,f=d.listHeight,v=d.listItemHeight,m=d.listItemScrollOffset,b=d.treeData,I=d.fieldNames,M=d.onSelect,V=d.dropdownMatchSelectWidth,_=d.treeExpandAction,$=d.treeTitleRender,L=d.onPopupScroll,g=l.useContext(Ot),E=g.checkable,F=g.checkedKeys,Y=g.halfCheckedKeys,me=g.treeExpandedKeys,Ce=g.treeDefaultExpandAll,be=g.treeDefaultExpandedKeys,Se=g.onTreeExpand,J=g.treeIcon,Me=g.showTreeIcon,Z=g.switcherIcon,Re=g.treeLine,Q=g.treeNodeFilterProp,ae=g.loadData,G=g.treeLoadedKeys,Le=g.treeMotion,Ve=g.onTreeLoad,_e=g.keyEntities,U=l.useRef(),N=Zt(function(){return b},[c,b],function(T,S){return S[0]&&T[1]!==S[1]}),ye=l.useState(null),H=ge(ye,2),le=H[0],se=H[1],O=_e[le],ue=l.useMemo(function(){return E?{checked:F,halfChecked:Y}:null},[E,F,Y]);l.useEffect(function(){if(c&&!a&&F.length){var T;(T=U.current)===null||T===void 0||T.scrollTo({key:F[0]}),se(F[0])}},[c]);var pe=String(s).toLowerCase(),xe=function(S){return pe?String(S[Q]).toLowerCase().includes(pe):!1},De=l.useState(be),ee=ge(De,2),Ie=ee[0],We=ee[1],Be=l.useState(null),z=ge(Be,2),te=z[0],ke=z[1],W=l.useMemo(function(){return me?ve(me):s?te:Ie},[Ie,te,me,s]);l.useEffect(function(){s&&ke(Gn(b,I))},[s]);var Ae=function(S){We(S),ke(S),Se&&Se(S)},we=function(S){S.preventDefault()},X=function(S,ce){var B=ce.node;E&&ut(B)||(M(B.key,{selected:!F.includes(B.key)}),a||u(!1))};if(l.useImperativeHandle(n,function(){var T;return{scrollTo:(T=U.current)===null||T===void 0?void 0:T.scrollTo,onKeyDown:function(ce){var B,ie=ce.which;switch(ie){case $e.UP:case $e.DOWN:case $e.LEFT:case $e.RIGHT:(B=U.current)===null||B===void 0||B.onKeyDown(ce);break;case $e.ENTER:{if(O){var Fe=(O==null?void 0:O.node)||{},Pe=Fe.selectable,ne=Fe.value;Pe!==!1&&X(null,{node:{key:le},selected:!F.includes(ne)})}break}case $e.ESC:u(!1)}},onKeyUp:function(){}}}),N.length===0)return l.createElement("div",{role:"listbox",className:"".concat(o,"-empty"),onMouseDown:we},i);var Ee={fieldNames:I};return G&&(Ee.loadedKeys=G),W&&(Ee.expandedKeys=W),l.createElement("div",{onMouseDown:we},O&&c&&l.createElement("span",{style:Zn,"aria-live":"assertive"},O.node.value),l.createElement(Nn,Lt({ref:U,focusable:!1,prefixCls:"".concat(o,"-tree"),treeData:N,height:f,itemHeight:v,itemScrollOffset:m,virtual:h!==!1&&V!==!1,multiple:a,icon:J,showIcon:Me,switcherIcon:Z,showLine:Re,loadData:s?null:ae,motion:Le,activeKey:le,checkable:E,checkStrictly:!0,checkedKeys:ue,selectedKeys:E?[]:F,defaultExpandAll:Ce,titleRender:$},Ee,{onActiveChange:se,onSelect:X,onCheck:X,onExpand:Ae,onLoad:Ve,filterTreeNode:xe,expandAction:_,onScroll:L})))},er=l.forwardRef(Qn),ht="SHOW_ALL",vt="SHOW_PARENT",ot="SHOW_CHILD";function Ft(e,t,n,r){var o=new Set(e);return t===ot?e.filter(function(a){var s=n[a];return!(s&&s.children&&s.children.some(function(u){var c=u.node;return o.has(c[r.value])})&&s.children.every(function(u){var c=u.node;return ut(c)||o.has(c[r.value])}))}):t===vt?e.filter(function(a){var s=n[a],u=s?s.parent:null;return!(u&&!ut(u.node)&&o.has(u.key))}):e}var tr=["id","prefixCls","value","defaultValue","onChange","onSelect","onDeselect","searchValue","inputValue","onSearch","autoClearSearchValue","filterTreeNode","treeNodeFilterProp","showCheckedStrategy","treeNodeLabelProp","multiple","treeCheckable","treeCheckStrictly","labelInValue","fieldNames","treeDataSimpleMode","treeData","children","loadData","treeLoadedKeys","onTreeLoad","treeDefaultExpandAll","treeExpandedKeys","treeDefaultExpandedKeys","onTreeExpand","treeExpandAction","virtual","listHeight","listItemHeight","listItemScrollOffset","onDropdownVisibleChange","dropdownMatchSelectWidth","treeLine","treeIcon","showTreeIcon","switcherIcon","treeMotion","treeTitleRender","onPopupScroll"];function nr(e){return!e||Qt(e)!=="object"}var rr=l.forwardRef(function(e,t){var n=e.id,r=e.prefixCls,o=r===void 0?"rc-tree-select":r,a=e.value,s=e.defaultValue,u=e.onChange,c=e.onSelect,i=e.onDeselect,d=e.searchValue,h=e.inputValue,f=e.onSearch,v=e.autoClearSearchValue,m=v===void 0?!0:v,b=e.filterTreeNode,I=e.treeNodeFilterProp,M=I===void 0?"value":I,V=e.showCheckedStrategy,_=e.treeNodeLabelProp,$=e.multiple,L=e.treeCheckable,g=e.treeCheckStrictly,E=e.labelInValue,F=e.fieldNames,Y=e.treeDataSimpleMode,me=e.treeData,Ce=e.children,be=e.loadData,Se=e.treeLoadedKeys,J=e.onTreeLoad,Me=e.treeDefaultExpandAll,Z=e.treeExpandedKeys,Re=e.treeDefaultExpandedKeys,Q=e.onTreeExpand,ae=e.treeExpandAction,G=e.virtual,Le=e.listHeight,Ve=Le===void 0?200:Le,_e=e.listItemHeight,U=_e===void 0?20:_e,N=e.listItemScrollOffset,ye=N===void 0?0:N,H=e.onDropdownVisibleChange,le=e.dropdownMatchSelectWidth,se=le===void 0?!0:le,O=e.treeLine,ue=e.treeIcon,pe=e.showTreeIcon,xe=e.switcherIcon,De=e.treeMotion,ee=e.treeTitleRender,Ie=e.onPopupScroll,We=Rt(e,tr),Be=Dn(n),z=L&&!g,te=L||g,ke=g||E,W=te||$,Ae=yt(s,{value:a}),we=ge(Ae,2),X=we[0],Ee=we[1],T=l.useMemo(function(){return L?V||ot:ht},[V,L]),S=l.useMemo(function(){return Pn(F)},[JSON.stringify(F)]),ce=yt("",{value:d!==void 0?d:h,postState:function(y){return y||""}}),B=ge(ce,2),ie=B[0],Fe=B[1],Pe=function(y){Fe(y),f==null||f(y)},ne=Jn(me,Ce,Y),Xe=zn(ne,S),A=Xe.keyEntities,re=Xe.valueEntities,qe=l.useCallback(function(p){var y=[],x=[];return p.forEach(function(k){re.has(k)?x.push(k):y.push(k)}),{missingRawValues:y,existRawValues:x}},[re]),Ye=qn(ne,ie,{fieldNames:S,treeNodeFilterProp:M,filterTreeNode:b}),Je=l.useCallback(function(p){if(p){if(_)return p[_];for(var y=S._title,x=0;x<y.length;x+=1){var k=p[y[x]];if(k!==void 0)return k}}},[S,_]),oe=l.useCallback(function(p){var y=Bn(p);return y.map(function(x){return nr(x)?{value:x}:x})},[]),de=l.useCallback(function(p){var y=oe(p);return y.map(function(x){var k=x.label,j=x.value,R=x.halfChecked,w,D=re.get(j);if(D){var K;k=(K=k)!==null&&K!==void 0?K:Je(D.node),w=D.node.disabled}else if(k===void 0){var fe=oe(X).find(function(Ge){return Ge.value===j});k=fe.label}return{label:k,value:j,halfChecked:R,disabled:w}})},[re,Je,oe,X]),gt=l.useMemo(function(){return oe(X)},[oe,X]),$t=l.useMemo(function(){var p=[],y=[];return gt.forEach(function(x){x.halfChecked?y.push(x):p.push(x)}),[p,y]},[gt]),mt=ge($t,2),Oe=mt[0],Ct=mt[1],bt=l.useMemo(function(){return Oe.map(function(p){return p.value})},[Oe]),Ht=Wn(Oe,Ct,z,A),St=ge(Ht,2),je=St[0],Ze=St[1],Wt=l.useMemo(function(){var p=Ft(je,T,A,S),y=p.map(function(R){var w,D;return(w=(D=A[R])===null||D===void 0||(D=D.node)===null||D===void 0?void 0:D[S.value])!==null&&w!==void 0?w:R}),x=y.map(function(R){var w=Oe.find(function(K){return K.value===R}),D;return E&&w.label!==void 0?D=w.label:!E&&ee&&(D=ee(w)),{value:R,label:D}}),k=de(x),j=k[0];return!W&&j&&wt(j.value)&&wt(j.label)?[]:k.map(function(R){var w;return P(P({},R),{},{label:(w=R.label)!==null&&w!==void 0?w:R.value})})},[S,W,je,Oe,de,T,A]),Bt=Hn(Wt),Pt=ge(Bt,1),Gt=Pt[0],Qe=Et(function(p,y,x){var k=de(p);if(Ee(k),m&&Fe(""),u){var j=p;if(z){var R=Ft(p,T,A,S);j=R.map(function(q){var he=re.get(q);return he?he.node[S.value]:q})}var w=y||{triggerValue:void 0,selected:void 0},D=w.triggerValue,K=w.selected,fe=j;if(g){var Ge=Ct.filter(function(q){return!j.includes(q.value)});fe=[].concat(ve(fe),ve(Ge))}var ze=de(fe),Te={preValue:Oe,triggerValue:D},Ke=!0;(g||x==="selection"&&!K)&&(Ke=!1),Xn(Te,D,p,ne,Ke,S),te?Te.checked=K:Te.selected=K;var et=ke?ze:ze.map(function(q){return q.value});u(W?et:et[0],ke?null:ze.map(function(q){return q.label}),Te)}}),at=l.useCallback(function(p,y){var x,k=y.selected,j=y.source,R=A[p],w=R==null?void 0:R.node,D=(x=w==null?void 0:w[S.value])!==null&&x!==void 0?x:p;if(!W)Qe([D],{selected:!0,triggerValue:D},"option");else{var K=k?[].concat(ve(bt),[D]):je.filter(function(he){return he!==D});if(z){var fe=qe(K),Ge=fe.missingRawValues,ze=fe.existRawValues,Te=ze.map(function(he){return re.get(he).key}),Ke;if(k){var et=st(Te,!0,A);Ke=et.checkedKeys}else{var q=st(Te,{checked:!1,halfCheckedKeys:Ze},A);Ke=q.checkedKeys}K=[].concat(ve(Ge),ve(Ke.map(function(he){return A[he].node[S.value]})))}Qe(K,{selected:k,triggerValue:D},j||"option")}k||!W?c==null||c(D,ct(w)):i==null||i(D,ct(w))},[qe,re,A,S,W,bt,Qe,z,c,i,je,Ze]),zt=l.useCallback(function(p){if(H){var y={};Object.defineProperty(y,"documentClickClose",{get:function(){return rt(!1,"Second param of `onDropdownVisibleChange` has been removed."),!1}}),H(p,y)}},[H]),Ut=Et(function(p,y){var x=p.map(function(k){return k.value});if(y.type==="clear"){Qe(x,{},"selection");return}y.values.length&&at(y.values[0].value,{selected:!1,source:"selection"})}),Xt=l.useMemo(function(){return{virtual:G,dropdownMatchSelectWidth:se,listHeight:Ve,listItemHeight:U,listItemScrollOffset:ye,treeData:Ye,fieldNames:S,onSelect:at,treeExpandAction:ae,treeTitleRender:ee,onPopupScroll:Ie}},[G,se,Ve,U,ye,Ye,S,at,ae,ee,Ie]),qt=l.useMemo(function(){return{checkable:te,loadData:be,treeLoadedKeys:Se,onTreeLoad:J,checkedKeys:je,halfCheckedKeys:Ze,treeDefaultExpandAll:Me,treeExpandedKeys:Z,treeDefaultExpandedKeys:Re,onTreeExpand:Q,treeIcon:ue,treeMotion:De,showTreeIcon:pe,switcherIcon:xe,treeLine:O,treeNodeFilterProp:M,keyEntities:A}},[te,be,Se,J,je,Ze,Me,Z,Re,Q,ue,De,pe,xe,O,M,A]);return l.createElement(jt.Provider,{value:Xt},l.createElement(Ot.Provider,{value:qt},l.createElement(In,Lt({ref:t},We,{id:Be,prefixCls:o,mode:W?"multiple":void 0,displayValues:Gt,onDisplayValuesChange:Ut,searchValue:ie,onSearch:Pe,OptionList:er,emptyOptions:!ne.length,onDropdownVisibleChange:zt,dropdownMatchSelectWidth:se}))))}),Ue=rr;Ue.TreeNode=ft;Ue.SHOW_ALL=ht;Ue.SHOW_PARENT=vt;Ue.SHOW_CHILD=ot;const or=e=>{const{componentCls:t,treePrefixCls:n,colorBgElevated:r}=e,o=`.${n}`;return[{[`${t}-dropdown`]:[{padding:`${pt(e.paddingXS)} ${pt(e.calc(e.paddingXS).div(2).equal())}`},Rn(n,Vt(e,{colorBgContainer:r})),{[o]:{borderRadius:0,[`${o}-list-holder-inner`]:{alignItems:"stretch",[`${o}-treenode`]:{[`${o}-node-content-wrapper`]:{flex:"auto"}}}}},Ln(`${n}-checkbox`,e),{"&-rtl":{direction:"rtl",[`${o}-switcher${o}-switcher_close`]:{[`${o}-switcher-icon svg`]:{transform:"rotate(90deg)"}}}}]}]};function ar(e,t,n){return en("TreeSelect",r=>{const o=Vt(r,{treePrefixCls:t});return[or(o)]},Mn)(e,n)}var lr=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const sr=(e,t)=>{var n,{prefixCls:r,size:o,disabled:a,bordered:s=!0,className:u,rootClassName:c,treeCheckable:i,multiple:d,listHeight:h=256,listItemHeight:f=26,placement:v,notFoundContent:m,switcherIcon:b,treeLine:I,getPopupContainer:M,popupClassName:V,dropdownClassName:_,treeIcon:$=!1,transitionName:L,choiceTransitionName:g="",status:E,treeExpandAction:F,builtinPlacements:Y,dropdownMatchSelectWidth:me,popupMatchSelectWidth:Ce,allowClear:be,variant:Se,dropdownStyle:J,tagRender:Me}=e,Z=lr(e,["prefixCls","size","disabled","bordered","className","rootClassName","treeCheckable","multiple","listHeight","listItemHeight","placement","notFoundContent","switcherIcon","treeLine","getPopupContainer","popupClassName","dropdownClassName","treeIcon","transitionName","choiceTransitionName","status","treeExpandAction","builtinPlacements","dropdownMatchSelectWidth","popupMatchSelectWidth","allowClear","variant","dropdownStyle","tagRender"]);const{getPopupContainer:Re,getPrefixCls:Q,renderEmpty:ae,direction:G,virtual:Le,popupMatchSelectWidth:Ve,popupOverflow:_e}=l.useContext(tn),U=Q(),N=Q("select",r),ye=Q("select-tree",r),H=Q("tree-select",r),{compactSize:le,compactItemClassnames:se}=nn(N,G),O=xt(N),ue=xt(H),[pe,xe,De]=kn(N,O),[ee]=ar(H,ye,ue),[Ie,We]=An(Se,s),Be=Dt(V||_,`${H}-dropdown`,{[`${H}-dropdown-rtl`]:G==="rtl"},c,De,O,ue,xe),z=!!(i||d),te=Fn(Z.suffixIcon,Z.showArrow),ke=(n=Ce??me)!==null&&n!==void 0?n:Ve,{status:W,hasFeedback:Ae,isFormItemInput:we,feedbackIcon:X}=l.useContext(rn),Ee=jn(W,E),{suffixIcon:T,removeIcon:S,clearIcon:ce}=$n(Object.assign(Object.assign({},Z),{multiple:z,showSuffixIcon:te,hasFeedback:Ae,feedbackIcon:X,prefixCls:N,componentName:"TreeSelect"})),B=be===!0?{clearIcon:ce}:be;let ie;m!==void 0?ie=m:ie=(ae==null?void 0:ae("Select"))||l.createElement(wn,{componentName:"Select"});const Fe=on(Z,["suffixIcon","removeIcon","clearIcon","itemIcon","switcherIcon"]),Pe=l.useMemo(()=>v!==void 0?v:G==="rtl"?"bottomRight":"bottomLeft",[v,G]),ne=an(oe=>{var de;return(de=o??le)!==null&&de!==void 0?de:oe}),Xe=l.useContext(ln),A=a??Xe,re=Dt(!r&&H,{[`${N}-lg`]:ne==="large",[`${N}-sm`]:ne==="small",[`${N}-rtl`]:G==="rtl",[`${N}-${Ie}`]:We,[`${N}-in-form-item`]:we},On(N,Ee,Ae),se,u,c,De,O,ue,xe),qe=oe=>l.createElement(Vn,{prefixCls:ye,switcherIcon:b,treeNodeProps:oe,showLine:I}),[Ye]=sn("SelectLike",J==null?void 0:J.zIndex),Je=l.createElement(Ue,Object.assign({virtual:Le,disabled:A},Fe,{dropdownMatchSelectWidth:ke,builtinPlacements:En(Y,_e),ref:t,prefixCls:N,className:re,listHeight:h,listItemHeight:f,treeCheckable:i&&l.createElement("span",{className:`${N}-tree-checkbox-inner`}),treeLine:!!I,suffixIcon:T,multiple:z,placement:Pe,removeIcon:S,allowClear:B,switcherIcon:qe,showTreeIcon:$,notFoundContent:ie,getPopupContainer:M||Re,treeMotion:null,dropdownClassName:Be,dropdownStyle:Object.assign(Object.assign({},J),{zIndex:Ye}),choiceTransitionName:It(U,"",g),transitionName:It(U,"slide-up",L),treeExpandAction:F,tagRender:z?Me:void 0}));return pe(ee(Je))},ur=l.forwardRef(sr),Ne=ur,cr=gn(Ne);Ne.TreeNode=ft;Ne.SHOW_ALL=ht;Ne.SHOW_PARENT=vt;Ne.SHOW_CHILD=ot;Ne._InternalPanelDoNotUseOrYouWillBeFired=cr;const ir=()=>{const e=l.useRef(!0);return l.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),e},dr=e=>l.useMemo(()=>({...{maxHeight:400,overflow:"auto"},...e||{}}),[e]),fr=({fetching:e,error:t,minSymbols:n,plainList:r})=>n?C.jsx(hr,{minSymbols:n,plainList:r}):e?C.jsx(vr,{plainList:r}):t?C.jsx(gr,{error:t,plainList:r}):C.jsx(C.Fragment,{}),hr=({minSymbols:e,plainList:t})=>C.jsxs("div",{style:{paddingLeft:t?"8px":"30px",fontSize:"12px"},children:["Введите как минимум ",e," симв."]}),vr=({plainList:e})=>C.jsxs("div",{style:{paddingLeft:e?"8px":"30px",fontSize:"12px"},children:[C.jsx(mn,{size:"small"})," загрузка..."]}),gr=({error:e,plainList:t})=>C.jsx("div",{role:"alert",style:{paddingLeft:t?"8px":"30px",fontSize:"12px",color:"#ff4d4f"},children:e}),mr=({fetching:e,error:t,minSymbols:n,plainList:r})=>n||e||t?C.jsx(C.Fragment,{}):C.jsx("div",{style:{paddingLeft:r?"8px":"30px",fontSize:"12px"},children:"Данные отсутствуют"}),Cr=({menu:e,fetching:t,error:n,minSymbols:r,plainList:o})=>C.jsxs(C.Fragment,{children:[e,C.jsx(fr,{fetching:t,error:n,minSymbols:r,plainList:o})]}),br=({fetchError:e,fetching:t,minSymbols:n,plainList:r})=>l.useCallback(o=>C.jsx("div",{className:r?"tree-select-plain":void 0,children:C.jsx(Cr,{menu:o,fetching:t,error:e,minSymbols:n,plainList:r})}),[e,t,n,r]),Sr=e=>{const t=e.getProps().fieldNames,n=(t==null?void 0:t.title)||"title";return l.useCallback((r,o)=>{const a=o;return!a||typeof a[n]!="string"?!1:a[n].toLowerCase().indexOf(r.toLowerCase())>=0},[n])},Tt=({api:e,treeSelectProps:t,antdTreeSelectProps:n})=>{var s,u,c,i,d;const r=dr(t.dropdownStyle),o=br({fetchError:e.getFetchError(),fetching:e.getIsFetching(),minSymbols:e.getMinSymbols(),plainList:t.plainList}),a=Sr(e);return C.jsx(Ne,{...n,treeData:e.getDataSet(),showSearch:t.showSearch!==!1,treeDefaultExpandAll:t.treeDefaultExpandAll!==!1,disabled:t.disabled||t.readOnly,dropdownStyle:r,fieldNames:{label:t.titleRender?"__title":((s=t.fieldNames)==null?void 0:s.title)??"title",value:(u=t.fieldNames)!=null&&u.value?t.fieldNames.value:"id",children:(c=t.fieldNames)!=null&&c.children?t.fieldNames.children:"children"},treeNodeLabelProp:t.selectedLabelProp?t.selectedLabelProp:t.labelRender?"__label":((i=t.fieldNames)==null?void 0:i.title)??"title",treeNodeFilterProp:t.titleRender?"__title":((d=t.fieldNames)==null?void 0:d.title)??"title",filterTreeNode:(h,f)=>e.getIsAllFetched()?t.filterTreeNode?typeof t.filterTreeNode=="function"?t.filterTreeNode(h,f):t.filterTreeNode:a(h,f):!0,value:e.getInternalValue(),notFoundContent:t.notFoundContent??C.jsx(mr,{fetching:e.getIsFetching(),error:e.getFetchError(),minSymbols:e.getMinSymbols(),plainList:t.plainList}),dropdownRender:t.dropdownRender??o,onClear:()=>{var h,f;(h=t.onClear)==null||h.call(t),e.setValues(null),(f=t.onClear)==null||f.call(t)},onChange:h=>{var v;const f=e.plainValueToNodes(h);e.setValues(f??null),(v=t.onChange)==null||v.call(t,f??null)},onDropdownVisibleChange:h=>{var f;h&&(t.fetchMode==="onUse"||t.fetchMode==="onUseForce")&&e.fetchData(""),(f=t.onDropdownVisibleChange)==null||f.call(t,h)},onSearch:h=>{var f;e.fetchData(h,!0),(f=t.onSearch)==null||f.call(t,h)}})},yr=e=>{const n=e.getProps().editFormProps,[r]=l.useState((n==null?void 0:n.apiRef)||{}),[o]=l.useState((n==null?void 0:n.formId)??"SelectItemEdit-"+dt());return[l.useMemo(()=>{if(!n)return;const u={...{width:400,minWidth:200,bodyHeight:200,bodyMinHeight:40},...n,apiRef:r,formId:o},c=u==null?void 0:u.onSubmitSuccess;return u.onSubmitSuccess=(i,d,h)=>{if(!d||(c==null?void 0:c(i,d,h))===!1)return;const f={...h.model.getFormDataSet()??{},...d};if(h.getFormProps().formMode==="update")e.updateNodes(f);else{const m=e.getValues(),b=m&&m.length>0?m[0]:void 0;e.addNodes(b,f)}e.setValues([f])},u},[n,r,o,e]),r]},pr=e=>l.useCallback(t=>{var o;if(!e.isMounted())return;const n=e.getProps();if(!n.noCacheFetchedData&&e.getIsAllFetched())return;if(n.minSearchLength&&t.length<n.minSearchLength){e.setSetMynSymbols(n.minSearchLength),e.setDataSet(void 0);return}e.setSetMynSymbols(0),e.setSetFetchError(null);const r=(o=n==null?void 0:n.onDataFetch)==null?void 0:o.call(n,t,e);if(!r){e.setIsAllFetched(!0);return}e.setIsFetching(!0),t||e.setDataSet(null),r.then(a=>{var s,u,c;e.isMounted()&&(e.setDataSet(a.data),e.setIsAllFetched(e.getIsAllFetched()||!t),e.getIsReady()||(e.setIsReady(!0),(s=n==null?void 0:n.onReady)==null||s.call(n)),e.setIsFetching(!1),(u=n==null?void 0:n.onDataFetchSuccess)==null||u.call(n,a,e),(c=n==null?void 0:n.onDataFetchComplete)==null||c.call(n,e))},a=>{e.isMounted()&&(e.setSetFetchError(a.message),e.setDataSet(void 0),e.setIsFetching(!1))})},[e]);var xr="Expected a function",Nt=NaN,Dr="[object Symbol]",Ir=/^\s+|\s+$/g,kr=/^[-+]0x[0-9a-f]+$/i,wr=/^0b[01]+$/i,Er=/^0o[0-7]+$/i,Fr=parseInt,Tr=typeof tt=="object"&&tt&&tt.Object===Object&&tt,Nr=typeof self=="object"&&self&&self.Object===Object&&self,Mr=Tr||Nr||Function("return this")(),Rr=Object.prototype,Lr=Rr.toString,Vr=Math.max,_r=Math.min,lt=function(){return Mr.Date.now()};function Ar(e,t,n){var r,o,a,s,u,c,i=0,d=!1,h=!1,f=!0;if(typeof e!="function")throw new TypeError(xr);t=Mt(t)||0,it(n)&&(d=!!n.leading,h="maxWait"in n,a=h?Vr(Mt(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f);function v(g){var E=r,F=o;return r=o=void 0,i=g,s=e.apply(F,E),s}function m(g){return i=g,u=setTimeout(M,t),d?v(g):s}function b(g){var E=g-c,F=g-i,Y=t-E;return h?_r(Y,a-F):Y}function I(g){var E=g-c,F=g-i;return c===void 0||E>=t||E<0||h&&F>=a}function M(){var g=lt();if(I(g))return V(g);u=setTimeout(M,b(g))}function V(g){return u=void 0,f&&r?v(g):(r=o=void 0,s)}function _(){u!==void 0&&clearTimeout(u),i=0,r=c=o=u=void 0}function $(){return u===void 0?s:V(lt())}function L(){var g=lt(),E=I(g);if(r=arguments,o=this,c=g,E){if(u===void 0)return m(c);if(h)return u=setTimeout(M,t),v(c)}return u===void 0&&(u=setTimeout(M,t)),s}return L.cancel=_,L.flush=$,L}function it(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Or(e){return!!e&&typeof e=="object"}function jr(e){return typeof e=="symbol"||Or(e)&&Lr.call(e)==Dr}function Mt(e){if(typeof e=="number")return e;if(jr(e))return Nt;if(it(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=it(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Ir,"");var n=wr.test(e);return n||Er.test(e)?Fr(e.slice(2),n?2:8):kr.test(e)?Nt:+e}var Kr=Ar;const $r=un(Kr),Hr=(e,t,n,r)=>{const o=l.useRef([]),[a,s]=l.useState(r?[]:null),[,u]=l.useState([]),c=Wr(e,t,n),i=l.useCallback(d=>{if(!d){o.current=[],u([]),s(r?[]:null);return}if(!He(d)){const m={...d},b=c(m);o.current=[m],u([m]),s(r?b?[b]:[]:b??null);return}const h=[],f=[],v=[...d];for(const m of v){const b={...m},I=c(b);I&&(f.push(b),h.push(I))}r?(s(h),o.current=f,u(o.current)):(s(h.length>0?h[0]:null),o.current=f.length>0?[f[0]]:[],u(o.current))},[c,r,o]);return[a,o,i]},Wr=(e,t,n)=>l.useCallback(r=>{if(!r)return null;const o=(e==null?void 0:e.value)??"id",a=r[o];let s;if(t)s=t(r);else{const u=(e==null?void 0:e.title)??"title",c=n?"__title":"";s=r.label??void 0,!s&&c&&(s=r[c]),s||(s=r[u])}return{value:a,label:s??void 0}},[e==null?void 0:e.title,e==null?void 0:e.value,t,n]),Br=(e,t,n)=>l.useCallback(r=>{if(!r)return;const o=(e==null?void 0:e.value)??"id",a=r;let s=t(a);if(s||(s=n(a),s))return s;const u={};return u[o]=r,u},[e,t,n]),Pr=e=>{const t=e.getProps(),n=Gr(e.getDataSet()),r=zr(e.getValues()),o=Br(t.fieldNames,n,r);return l.useCallback(a=>{if(!a)return;const s=He(a)?a:[a],u=[];for(const c of s){const i=o(c);i&&u.push(i)}return u},[o])},Gr=e=>{const t=l.useRef();return t.current=e,l.useCallback(n=>{if(!t.current||!n)return;const r=(o,a)=>{for(const s of o){if(s.id===a)return s;if(!s.children)continue;const u=r(s.children,a);if(u)return u}};return r(t.current,n)},[])},zr=e=>{const t=l.useRef();return t.current=e,l.useCallback(n=>{if(!(!t.current||!n)){for(const r of t.current)if(r.id===n)return r}},[])},Ur=(e,t,n)=>{const[r,o]=l.useState(),a=l.useCallback(s=>{if(!n.current)return;if(!s){o(void 0);return}let u;e||t?u=Kt(s,e,t):u=s,o(u)},[e,t,n]);return[r,a]},Kt=(e,t,n)=>{if(!e)return[];const r=[];for(const o of e){const a={...o};n&&(a.__label=n(o)),t&&(a.__title=t(o)),r.push(a),o.children&&(a.children=Kt(a.children,t,n))}return r},Xr=({api:e,componentId:t,treeProps:n,updateProps:r,buttonsApi:o})=>{const a=ir(),[s,u]=Ur(n.titleRender,n.labelRender,a),[c,i]=l.useState(!1),[d,h]=nt.useState(!1),[f,v]=nt.useState(""),[m,b]=nt.useState(!1),[I,M]=nt.useState(0),[V,_,$]=Hr(n.fieldNames,n.labelRender,n.titleRender,n.multiple);e.buttonsApi=o,e.getId=qr(t),e.isMounted=Yr(a),e.getProps=Jr(n),e.setProps=Zr(n,r),e.getInternalValue=Qr(V),e.getValues=eo(_),e.setValues=to($,e),e.getDataSet=no(s),e.setDataSet=ro(u),e.plainValueToNodes=Pr(e),e.getIsReady=oo(c),e.setIsReady=ao(i),e.getIsFetching=lo(d),e.setIsFetching=so(h),e.getFetchError=uo(f),e.setSetFetchError=co(v),e.getIsAllFetched=io(m),e.setIsAllFetched=fo(b),e.getMinSymbols=ho(I),e.setSetMynSymbols=vo(M);const L=pr(e);e.fetchData=go(L,e),e.addNodes=mo(e),e.updateNodes=Co(e),e.deleteNodes=bo(e)},qr=e=>l.useCallback(()=>e,[e]),Yr=e=>l.useCallback(()=>e.current,[e]),Jr=e=>l.useCallback(()=>e,[e]),Zr=(e,t)=>l.useCallback(n=>{t({...e,...n})},[e,t]),Qr=e=>l.useCallback(()=>e,[e]),eo=e=>l.useCallback(()=>e.current,[e]),to=(e,t)=>l.useCallback(n=>{var s,u,c,i;const r=t.getProps(),o=((s=r.fieldNames)==null?void 0:s.value)??"id";let a;typeof n!="string"?a=n:(a={},a[o]=n),e(a??[]),a?r.multiple?(i=r==null?void 0:r.onChange)==null||i.call(r,a||[]):(c=r==null?void 0:r.onChange)==null||c.call(r,He(a)&&a.length>0?a[0]:a):(u=r==null?void 0:r.onChange)==null||u.call(r,null)},[t,e]),no=e=>l.useCallback(()=>e,[e]),ro=e=>l.useCallback(t=>{e(t??[])},[e]),oo=e=>l.useCallback(()=>e,[e]),ao=e=>l.useCallback(t=>{e(t)},[e]),lo=e=>l.useCallback(()=>e,[e]),so=e=>l.useCallback(t=>{e(t)},[e]),uo=e=>l.useCallback(()=>e,[e]),co=e=>l.useCallback(t=>{e(t??"")},[e]),io=e=>l.useCallback(()=>e,[e]),fo=e=>l.useCallback(t=>{e(t)},[e]),ho=e=>l.useCallback(()=>e,[e]),vo=e=>l.useCallback(t=>{e(t)},[e]),go=(e,t)=>l.useCallback((n,r)=>{const o=$r(e,t.getProps().debounce??0);r?o(n):e(n)},[t,e]),mo=e=>l.useCallback((t,n)=>{var i,d;const r=He(n)?n:[n],o=e.getProps(),a=((i=o.fieldNames)==null?void 0:i.value)??"id",s=((d=o.fieldNames)==null?void 0:d.children)??"children",u=(h,f,v)=>{if(!f){for(const m of v)h.push(m);return}for(const m of h)if(m[a]){if(m[a]===f[a]){if(m.isLeaf)for(const b of v)h.push(b);else{m[s]||(m[s]=[]);const b=m[s];for(const I of v)b.push(I)}return!0}if(m[s]&&u(m[s],f,v))return!0}},c=[...e.getDataSet()??[]];for(const h of r)h[a]||(h[a]=dt());u(c,t,r),e.setDataSet(c)},[e]),Co=e=>l.useCallback(t=>{var c,i;const n=He(t)?t:[t],r=e.getProps(),o=((c=r.fieldNames)==null?void 0:c.value)??"id",a=((i=r.fieldNames)==null?void 0:i.children)??"children",s=(d,h)=>{for(const f of d)if(f[o]){if(f[o]===h[o]){const v=f[a];for(const m in h)f[m]=h[m];return f[a]=v,!0}if(f[a]&&s(f[a],h))return!0}},u=[...e.getDataSet()??[]];for(const d of n)s(u,d);e.setDataSet(u)},[e]),bo=e=>l.useCallback(t=>{var c,i;const n=He(t)?t:[t],r=e.getProps(),o=((c=r.fieldNames)==null?void 0:c.value)??"id",a=((i=r.fieldNames)==null?void 0:i.children)??"children",s=(d,h)=>{for(let f=d.length-1;f>=0;f--){const v=d[f];if(v[o]){if(v[o]===h[o])return d.splice(f,1),!0;if(v[a]&&s(v[a],h))return!0}}},u=[...e.getDataSet()??[]];for(const d of n)s(u,d);e.setDataSet(u)},[e]),So=(e,t)=>{const n=e.getValues(),r=e.getProps();return l.useMemo(()=>{const o={add:{icon:C.jsx(cn,{}),tooltip:"Добавить",position:"left",onClick:()=>{t.open("create")}},edit:{icon:C.jsx(Kn,{}),tooltip:"Редактировать",position:"center",disabled:!n||n.length!==1,onClick:()=>{const a=e.getValues();a.length===1&&t.open("update",a[0])}},delete:{icon:C.jsx(_n,{}),tooltip:"Удалить",position:"right",disabled:!n||n.length<1,onClick:()=>{yo(e)}}};return Cn(o,r.editButtons)},[e,t,n,r.editButtons])},yo=e=>{const t=e.getProps(),n=e.getValues();if(n.length<1)return;let r;const o=()=>{var s;const a=(s=t==null?void 0:t.onDelete)==null?void 0:s.call(t,n,e);if(bn(a)){t.confirmDelete||(e.buttonsApi.loading("delete",!0),e.buttonsApi.disabled("add",!0),e.buttonsApi.disabled("edit",!0)),a.then(()=>{e.isMounted()&&(e.deleteNodes(n),e.setValues(null),t.confirmDelete?r==null||r.destroy():(e.buttonsApi.loading("delete",!1),e.buttonsApi.disabled("delete",!0),e.buttonsApi.disabled("add",!1)))}).catch(c=>{e.isMounted()&&(t.confirmDelete?r==null||r.destroy():(e.buttonsApi.loading("delete",!1),e.buttonsApi.disabled("add",!1),e.buttonsApi.disabled("edit",!1)),kt.alert({content:C.jsxs(C.Fragment,{children:[C.jsx("p",{children:C.jsx("b",{children:c.message})}),c.stack&&dn()?C.jsx("p",{children:c.stack}):""]}),colorType:"danger"}))});return}e.deleteNodes(n),e.setValues(null),r&&r.destroy()};t.confirmDelete?r=kt.confirmWaiter({content:t.nodeDeleteMessage??"Удалить выбранные строки?",onOk:o}):o()},po=e=>{const[t,n]=fn(e),[r]=l.useState(t.treeSelectId??"treeSelect-"+dt()),[o]=l.useState(t.apiRef??{}),[a]=l.useState({});Xr({api:o,componentId:r,treeProps:t,updateProps:n,buttonsApi:a});const[s,u]=yr(o),c=So(o,u),i=xo(e);return l.useEffect(()=>{o.setIsAllFetched(!1),o.setDataSet(void 0),o.setValues(null)},[o]),l.useEffect(()=>{o.setDataSet(t.dataSet)},[o.setDataSet,o,t.dataSet]),l.useEffect(()=>{o.setValues(t.value??null)},[o,t.value]),l.useEffect(()=>{var d;if((!t.fetchMode||t.fetchMode==="onLoad")&&!t.minSearchLength){o.fetchData("");return}o.getIsReady()||(d=t==null?void 0:t.onReady)==null||d.call(t)},[o,t,t.fetchMode,t.minSearchLength]),!s||t.readOnly||t.disabled?C.jsx(Tt,{api:o,treeSelectProps:e,antdTreeSelectProps:i}):C.jsxs(Sn,{wrap:!1,children:[C.jsx(Tt,{api:o,treeSelectProps:e,antdTreeSelectProps:i}),C.jsx(yn,{children:C.jsx(pn,{buttons:c,apiRef:a,context:o})}),C.jsx(vn,{...s})]})},xo=e=>l.useMemo(()=>_t(e,{apiRef:!0,treeSelectId:!0,readOnly:!0,value:!0,defaultValueCallback:!0,titleRender:!0,labelRender:!0,filterTreeNode:!0,dataSet:!0,fetchMode:!0,noCacheFetchedData:!0,minSearchLength:!0,debounce:!0,selectedLabelProp:!0,fieldNames:!0,editFormProps:!0,nodeDeleteMessage:!0,confirmDelete:!0,editButtons:!0,plainList:!0,onReady:!0,onChange:!0,onClear:!0,onDataFetch:!0,onDataFetchSuccess:!0,onDataFetchError:!0,onDataFetchComplete:!0,onDelete:!0})[1],[e]),Do=({field:e})=>{l.useSyncExternalStore(e.subscribe.bind(e),e.getSnapshot.bind(e));const t=e.getProps(),n=e.getValue(),r=Io(t),o=l.useCallback(c=>{var i;e.isReady()&&(e.setValue(c??null),e.setDirty(!0)),(i=t.onChange)==null||i.call(t,c)},[e,t]),a=l.useCallback(()=>{e.setTouched(!0)},[e]),s=l.useCallback(()=>{var c;e.setDirty(!0),e.setTouched(!0),(c=t.onClear)==null||c.call(t)},[e,t]);l.useEffect(()=>{e.setReady(!0)},[e]);const u={width:t.width??"100%",...t.style};return C.jsx(po,{style:u,...r,autoFocus:t.autoFocus,defaultValueCallback:t.defaultValueCallback,disabled:e.isDisabled(),readOnly:e.isReadOnly(),value:n,placeholder:t.placeholder??"Choose",allowClear:t.allowClear!==!1,onChange:o,onClear:s,onBlur:a,onDataFetch:t.onDataFetch,onDataFetchComplete:t.onDataFetchComplete,onDataFetchError:t.onDataFetchError,onDataFetchSuccess:t.onDataFetchSuccess,onDelete:t.onDelete,onReady:()=>{var c;return(c=t.onReady)==null?void 0:c.call(t,e)},onKeyUp:t.onKeyUp,onKeyDown:t.onKeyDown,onClick:t.onClick,onSelect:t.onSelect,onMouseLeave:t.onMouseLeave,onMouseEnter:t.onMouseEnter,onMouseDown:t.onMouseDown,onFocus:t.onFocus,onDeselect:t.onDeselect,onDropdownVisibleChange:t.onDropdownVisibleChange,onInputKeyDown:t.onInputKeyDown,onTreeExpand:t.onTreeExpand,onPopupScroll:t.onPopupScroll,onSearch:t.onSearch,onTreeLoad:t.onTreeLoad})},Io=e=>l.useMemo(()=>_t(e,{component:!0,helpClass:!0,label:!0,placeholder:!0,tab:!0,inlineGroup:!0,value:!0,hidden:!0,dependsOn:!0,width:!0,autoFocus:!0,style:!0,tooltip:!0,disabled:!0,requiredMark:!0,readOnly:!0,nonEditable:!0,rowStyle:!0,autoHeightResize:!0,onDirtyStateChanged:!0,onReady:!0,onDisabledStateChanged:!0,onErrorChanged:!0,onHiddenStateChanged:!0,onLabelChanged:!0,onReadOnlyStateChanged:!0,onTouchedStateChanged:!0,onValidated:!0,onValueChanged:!0,onReadyStateChanged:!0,rules:!0})[1],[e]);class Lo extends hn{render(){return C.jsx(Do,{field:this})}}export{Lo as T};