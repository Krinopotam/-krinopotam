import{r as s,k as z,n as me,q as on,d as _t,w as tt,h as an,bs as sn,e as Se,K as _e,i as $t,u as xt,v as un,x as ln,y as Pt,z as Nt,C as cn,aV as dn,m as It,f as Rt,F as fn,o as hn,G as vn,l as gn,aR as pn,Y as wt,j as p,t as mn,c as et,g as Sn}from"./index-BEbJdilr.js";import{a as dt,u as yn,b as Cn,B as bn}from"./dForm-BUs8TQbJ.js";import{s as Bt,D as Et}from"./dFormModal-DVM0pNWI.js";import{j as xn,h as Nn,k as In,S as Rn,f as wn,o as Dt,u as En,t as Dn,c as Fn,d as An,e as Tn,b as kn,P as On}from"./modal-DZ70cJBI.js";import{m as ut,j as Vn,T as Ln,n as Mn,p as Gn,q as Kn,S as jn,o as _n}from"./defaultButtonsProps-BuloFMuY.js";import{u as $n,a as Pn,b as Bn,c as Hn,d as Wn,e as zn,f as Un,n as Ht,g as Qn,h as Ft,i as qn,j as Xn,k as Yn,l as Jn,m as Zn,o as er,p as tr,q as nr,r as rr,s as or,t as ar,v as sr,w as ur,x as lr,y as cr,z as ir,A as dr,B as fr,C as hr,D as vr,E as gr,F as pr,G as mr,H as Sr,I as yr,J as Cr,K as br,L as xr,M as Nr,N as Ir}from"./useApiGetGroupsOnly-B8IoRGb1.js";import{c as Rr,d as wr,B as Er,u as Dr,b as Fr,D as Ar,m as Tr}from"./useShowArrow-Co7GTLtH.js";import{j as kr,k as Or,g as Vr}from"./index-DJAh43lQ.js";import{u as Lr}from"./useIcons-go0WpEcA.js";const Mr=function(e){var t=s.useRef({valueLabels:new Map});return s.useMemo(function(){var n=t.current.valueLabels,o=new Map,r=e.map(function(a){var u,l=a.value,c=(u=a.label)!==null&&u!==void 0?u:n.get(l);return o.set(l,c),z(z({},a),{},{label:c})});return t.current.valueLabels=o,[r]},[e])},Gr=function(e,t,n,o){return s.useMemo(function(){var r=e.map(function(c){var d=c.value;return d}),a=t.map(function(c){var d=c.value;return d}),u=r.filter(function(c){return!o[c]});if(n){var l=ut(r,!0,o);r=l.checkedKeys,a=l.halfCheckedKeys}return[Array.from(new Set([].concat(me(u),me(r)))),a]},[e,t,n,o])};function Kr(e){return Array.isArray(e)?e:e!==void 0?[e]:[]}function jr(e){var t=e||{},n=t.label,o=t.value,r=t.children,a=o||"value";return{_title:n?[n]:["title","label"],value:a,key:a,children:r||"children"}}function lt(e){return!e||e.disabled||e.disableCheckbox||e.checkable===!1}function _r(e,t){var n=[];function o(r){r.forEach(function(a){var u=a[t.children];u&&(n.push(a[t.value]),o(u))})}return o(e),n}function At(e){return e==null}const $r=function(e,t){return s.useMemo(function(){var n=Vn(e,{fieldNames:t,initWrapper:function(r){return z(z({},r),{},{valueEntities:new Map})},processEntity:function(r,a){var u=r.node[t.value];a.valueEntities.set(u,r)}});return n},[e,t])};var ft=function(){return null},Pr=["children","value"];function Wt(e){return on(e).map(function(t){if(!s.isValidElement(t)||!t.type)return null;var n=t,o=n.key,r=n.props,a=r.children,u=r.value,l=_t(r,Pr),c=z({key:o,value:u},l),d=Wt(a);return d.length&&(c.children=d),c}).filter(function(t){return t})}function ct(e){if(!e)return e;var t=z({},e);return"props"in t||Object.defineProperty(t,"props",{get:function(){return tt(!1,"New `rc-tree-select` not support return node instance as argument anymore. Please consider to remove `props` access."),t}}),t}function Br(e,t,n,o,r,a){var u=null,l=null;function c(){function d(i){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"0",g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return i.map(function(h,R){var m="".concat(v,"-").concat(R),S=h[a.value],y=n.includes(S),T=d(h[a.children]||[],m,y),N=s.createElement(ft,h,T.map(function(V){return V.node}));if(t===S&&(u=N),y){var _={pos:m,node:N,children:T};return g||l.push(_),_}return null}).filter(function(h){return h})}l||(l=[],d(o),l.sort(function(i,v){var g=i.node.props.value,h=v.node.props.value,R=n.indexOf(g),m=n.indexOf(h);return R-m}))}Object.defineProperty(e,"triggerNode",{get:function(){return tt(!1,"`triggerNode` is deprecated. Please consider decoupling data with node."),c(),u}}),Object.defineProperty(e,"allCheckedNodes",{get:function(){return tt(!1,"`allCheckedNodes` is deprecated. Please consider decoupling data with node."),c(),r?l:l.map(function(i){var v=i.node;return v})}})}const Hr=function(e,t,n){var o=n.treeNodeFilterProp,r=n.filterTreeNode,a=n.fieldNames,u=a.children;return s.useMemo(function(){if(!t||r===!1)return e;var l;if(typeof r=="function")l=r;else{var c=t.toUpperCase();l=function(v,g){var h=g[o];return String(h).toUpperCase().includes(c)}}function d(i){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return i.reduce(function(g,h){var R=h[u],m=v||l(t,ct(h)),S=d(R||[],m);return(m||S.length)&&g.push(z(z({},h),{},an({isLeaf:void 0},u,S))),g},[])}return d(e)},[e,t,u,o,r])};function Tt(e){var t=s.useRef();t.current=e;var n=s.useCallback(function(){return t.current.apply(t,arguments)},[]);return n}function Wr(e,t){var n=t.id,o=t.pId,r=t.rootPId,a={},u=[],l=e.map(function(c){var d=z({},c),i=d[n];return a[i]=d,d.key=d.key||i,d});return l.forEach(function(c){var d=c[o],i=a[d];i&&(i.children=i.children||[],i.children.push(c)),(d===r||!i&&r===null)&&u.push(c)}),u}function zr(e,t,n){return s.useMemo(function(){return e?n?Wr(e,z({id:"id",pId:"pId",rootPId:null},n!==!0?n:{})):e:Wt(t)},[t,n,e])}var zt=s.createContext(null),ht=s.createContext(null),Ur={width:0,height:0,display:"flex",overflow:"hidden",opacity:0,border:0,padding:0,margin:0},Qr=function(t,n){var o=Rr(),r=o.prefixCls,a=o.multiple,u=o.searchValue,l=o.toggleOpen,c=o.open,d=o.notFoundContent,i=s.useContext(ht),v=i.virtual,g=i.listHeight,h=i.listItemHeight,R=i.listItemScrollOffset,m=i.treeData,S=i.fieldNames,y=i.onSelect,T=i.dropdownMatchSelectWidth,N=i.treeExpandAction,_=i.treeTitleRender,V=i.onPopupScroll,f=s.useContext(zt),F=f.checkable,A=f.checkedKeys,U=f.halfCheckedKeys,ee=f.treeExpandedKeys,te=f.treeDefaultExpandAll,ne=f.treeDefaultExpandedKeys,Y=f.onTreeExpand,$=f.treeIcon,Te=f.showTreeIcon,ye=f.switcherIcon,ke=f.treeLine,re=f.treeNodeFilterProp,le=f.loadData,Q=f.treeLoadedKeys,Oe=f.treeMotion,Ve=f.onTreeLoad,Le=f.keyEntities,J=s.useRef(),O=sn(function(){return m},[c,m],function(k,C){return C[0]&&k[1]!==C[1]}),Ce=s.useState(null),P=Se(Ce,2),ce=P[0],ie=P[1],G=Le[ce],de=s.useMemo(function(){return F?{checked:A,halfChecked:U}:null},[F,A,U]);s.useEffect(function(){if(c&&!a&&A.length){var k;(k=J.current)===null||k===void 0||k.scrollTo({key:A[0]}),ie(A[0])}},[c]);var be=String(u).toLowerCase(),xe=function(C){return be?String(C[re]).toLowerCase().includes(be):!1},Ne=s.useState(ne),B=Se(Ne,2),Ie=B[0],$e=B[1],Pe=s.useState(null),q=Se(Pe,2),oe=q[0],Re=q[1],H=s.useMemo(function(){return ee?me(ee):u?oe:Ie},[Ie,oe,ee,u]);s.useEffect(function(){u&&Re(_r(m,S))},[u]);var Me=function(C){$e(C),Re(C),Y&&Y(C)},we=function(C){C.preventDefault()},X=function(C,fe){var W=fe.node;F&&lt(W)||(y(W.key,{selected:!A.includes(W.key)}),a||l(!1))};if(s.useImperativeHandle(n,function(){var k;return{scrollTo:(k=J.current)===null||k===void 0?void 0:k.scrollTo,onKeyDown:function(fe){var W,he=fe.which;switch(he){case _e.UP:case _e.DOWN:case _e.LEFT:case _e.RIGHT:(W=J.current)===null||W===void 0||W.onKeyDown(fe);break;case _e.ENTER:{if(G){var De=(G==null?void 0:G.node)||{},Be=De.selectable,ae=De.value;Be!==!1&&X(null,{node:{key:ce},selected:!A.includes(ae)})}break}case _e.ESC:l(!1)}},onKeyUp:function(){}}}),O.length===0)return s.createElement("div",{role:"listbox",className:"".concat(r,"-empty"),onMouseDown:we},d);var Ee={fieldNames:S};return Q&&(Ee.loadedKeys=Q),H&&(Ee.expandedKeys=H),s.createElement("div",{onMouseDown:we},G&&c&&s.createElement("span",{style:Ur,"aria-live":"assertive"},G.node.value),s.createElement(Ln,$t({ref:J,focusable:!1,prefixCls:"".concat(r,"-tree"),treeData:O,height:g,itemHeight:h,itemScrollOffset:R,virtual:v!==!1&&T!==!1,multiple:a,icon:$,showIcon:Te,switcherIcon:ye,showLine:ke,loadData:u?null:le,motion:Oe,activeKey:ce,checkable:F,checkStrictly:!0,checkedKeys:de,selectedKeys:F?[]:A,defaultExpandAll:te,titleRender:_},Ee,{onActiveChange:ie,onSelect:X,onCheck:X,onExpand:Me,onLoad:Ve,filterTreeNode:xe,expandAction:N,onScroll:V})))},qr=s.forwardRef(Qr),vt="SHOW_ALL",gt="SHOW_PARENT",nt="SHOW_CHILD";function kt(e,t,n,o){var r=new Set(e);return t===nt?e.filter(function(a){var u=n[a];return!(u&&u.children&&u.children.some(function(l){var c=l.node;return r.has(c[o.value])})&&u.children.every(function(l){var c=l.node;return lt(c)||r.has(c[o.value])}))}):t===gt?e.filter(function(a){var u=n[a],l=u?u.parent:null;return!(l&&!lt(l.node)&&r.has(l.key))}):e}var Xr=["id","prefixCls","value","defaultValue","onChange","onSelect","onDeselect","searchValue","inputValue","onSearch","autoClearSearchValue","filterTreeNode","treeNodeFilterProp","showCheckedStrategy","treeNodeLabelProp","multiple","treeCheckable","treeCheckStrictly","labelInValue","fieldNames","treeDataSimpleMode","treeData","children","loadData","treeLoadedKeys","onTreeLoad","treeDefaultExpandAll","treeExpandedKeys","treeDefaultExpandedKeys","onTreeExpand","treeExpandAction","virtual","listHeight","listItemHeight","listItemScrollOffset","onDropdownVisibleChange","dropdownMatchSelectWidth","treeLine","treeIcon","showTreeIcon","switcherIcon","treeMotion","treeTitleRender","onPopupScroll"];function Yr(e){return!e||un(e)!=="object"}var Jr=s.forwardRef(function(e,t){var n=e.id,o=e.prefixCls,r=o===void 0?"rc-tree-select":o,a=e.value,u=e.defaultValue,l=e.onChange,c=e.onSelect,d=e.onDeselect,i=e.searchValue,v=e.inputValue,g=e.onSearch,h=e.autoClearSearchValue,R=h===void 0?!0:h,m=e.filterTreeNode,S=e.treeNodeFilterProp,y=S===void 0?"value":S,T=e.showCheckedStrategy,N=e.treeNodeLabelProp,_=e.multiple,V=e.treeCheckable,f=e.treeCheckStrictly,F=e.labelInValue,A=e.fieldNames,U=e.treeDataSimpleMode,ee=e.treeData,te=e.children,ne=e.loadData,Y=e.treeLoadedKeys,$=e.onTreeLoad,Te=e.treeDefaultExpandAll,ye=e.treeExpandedKeys,ke=e.treeDefaultExpandedKeys,re=e.onTreeExpand,le=e.treeExpandAction,Q=e.virtual,Oe=e.listHeight,Ve=Oe===void 0?200:Oe,Le=e.listItemHeight,J=Le===void 0?20:Le,O=e.listItemScrollOffset,Ce=O===void 0?0:O,P=e.onDropdownVisibleChange,ce=e.dropdownMatchSelectWidth,ie=ce===void 0?!0:ce,G=e.treeLine,de=e.treeIcon,be=e.showTreeIcon,xe=e.switcherIcon,Ne=e.treeMotion,B=e.treeTitleRender,Ie=e.onPopupScroll,$e=_t(e,Xr),Pe=wr(n),q=V&&!f,oe=V||f,Re=f||F,H=oe||_,Me=xt(u,{value:a}),we=Se(Me,2),X=we[0],Ee=we[1],k=s.useMemo(function(){return V?T||nt:vt},[T,V]),C=s.useMemo(function(){return jr(A)},[JSON.stringify(A)]),fe=xt("",{value:i!==void 0?i:v,postState:function(b){return b||""}}),W=Se(fe,2),he=W[0],De=W[1],Be=function(b){De(b),g==null||g(b)},ae=zr(ee,te,U),Ue=$r(ae,C),M=Ue.keyEntities,se=Ue.valueEntities,Qe=s.useCallback(function(x){var b=[],I=[];return x.forEach(function(w){se.has(w)?I.push(w):b.push(w)}),{missingRawValues:b,existRawValues:I}},[se]),qe=Hr(ae,he,{fieldNames:C,treeNodeFilterProp:y,filterTreeNode:m}),Xe=s.useCallback(function(x){if(x){if(N)return x[N];for(var b=C._title,I=0;I<b.length;I+=1){var w=x[b[I]];if(w!==void 0)return w}}},[C,N]),ue=s.useCallback(function(x){var b=Kr(x);return b.map(function(I){return Yr(I)?{value:I}:I})},[]),ve=s.useCallback(function(x){var b=ue(x);return b.map(function(I){var w=I.label,K=I.value,L=I.halfChecked,E,D=se.get(K);if(D){var j;w=B?B(D.node):(j=w)!==null&&j!==void 0?j:Xe(D.node),E=D.node.disabled}else if(w===void 0){var ge=ue(X).find(function(He){return He.value===K});w=ge.label}return{label:w,value:K,halfChecked:L,disabled:E}})},[se,Xe,ue,X]),mt=s.useMemo(function(){return ue(X===null?[]:X)},[ue,X]),Qt=s.useMemo(function(){var x=[],b=[];return mt.forEach(function(I){I.halfChecked?b.push(I):x.push(I)}),[x,b]},[mt]),St=Se(Qt,2),Ge=St[0],yt=St[1],Ct=s.useMemo(function(){return Ge.map(function(x){return x.value})},[Ge]),qt=Gr(Ge,yt,q,M),bt=Se(qt,2),Ke=bt[0],Ye=bt[1],Xt=s.useMemo(function(){var x=kt(Ke,k,M,C),b=x.map(function(L){var E,D;return(E=(D=M[L])===null||D===void 0||(D=D.node)===null||D===void 0?void 0:D[C.value])!==null&&E!==void 0?E:L}),I=b.map(function(L){var E=Ge.find(function(j){return j.value===L}),D=F?E==null?void 0:E.label:B==null?void 0:B(E);return{value:L,label:D}}),w=ve(I),K=w[0];return!H&&K&&At(K.value)&&At(K.label)?[]:w.map(function(L){var E;return z(z({},L),{},{label:(E=L.label)!==null&&E!==void 0?E:L.value})})},[C,H,Ke,Ge,ve,k,M]),Yt=Mr(Xt),Jt=Se(Yt,1),Zt=Jt[0],Je=Tt(function(x,b,I){var w=ve(x);if(Ee(w),R&&De(""),l){var K=x;if(q){var L=kt(x,k,M,C);K=L.map(function(Z){var pe=se.get(Z);return pe?pe.node[C.value]:Z})}var E=b||{triggerValue:void 0,selected:void 0},D=E.triggerValue,j=E.selected,ge=K;if(f){var He=yt.filter(function(Z){return!K.includes(Z.value)});ge=[].concat(me(ge),me(He))}var We=ve(ge),Fe={preValue:Ge,triggerValue:D},je=!0;(f||I==="selection"&&!j)&&(je=!1),Br(Fe,D,x,ae,je,C),oe?Fe.checked=j:Fe.selected=j;var Ze=Re?We:We.map(function(Z){return Z.value});l(H?Ze:Ze[0],Re?null:We.map(function(Z){return Z.label}),Fe)}}),ot=s.useCallback(function(x,b){var I,w=b.selected,K=b.source,L=M[x],E=L==null?void 0:L.node,D=(I=E==null?void 0:E[C.value])!==null&&I!==void 0?I:x;if(!H)Je([D],{selected:!0,triggerValue:D},"option");else{var j=w?[].concat(me(Ct),[D]):Ke.filter(function(pe){return pe!==D});if(q){var ge=Qe(j),He=ge.missingRawValues,We=ge.existRawValues,Fe=We.map(function(pe){return se.get(pe).key}),je;if(w){var Ze=ut(Fe,!0,M);je=Ze.checkedKeys}else{var Z=ut(Fe,{checked:!1,halfCheckedKeys:Ye},M);je=Z.checkedKeys}j=[].concat(me(He),me(je.map(function(pe){return M[pe].node[C.value]})))}Je(j,{selected:w,triggerValue:D},K||"option")}w||!H?c==null||c(D,ct(E)):d==null||d(D,ct(E))},[Qe,se,M,C,H,Ct,Je,q,c,d,Ke,Ye]),en=s.useCallback(function(x){if(P){var b={};Object.defineProperty(b,"documentClickClose",{get:function(){return tt(!1,"Second param of `onDropdownVisibleChange` has been removed."),!1}}),P(x,b)}},[P]),tn=Tt(function(x,b){var I=x.map(function(w){return w.value});if(b.type==="clear"){Je(I,{},"selection");return}b.values.length&&ot(b.values[0].value,{selected:!1,source:"selection"})}),nn=s.useMemo(function(){return{virtual:Q,dropdownMatchSelectWidth:ie,listHeight:Ve,listItemHeight:J,listItemScrollOffset:Ce,treeData:qe,fieldNames:C,onSelect:ot,treeExpandAction:le,treeTitleRender:B,onPopupScroll:Ie}},[Q,ie,Ve,J,Ce,qe,C,ot,le,B,Ie]),rn=s.useMemo(function(){return{checkable:oe,loadData:ne,treeLoadedKeys:Y,onTreeLoad:$,checkedKeys:Ke,halfCheckedKeys:Ye,treeDefaultExpandAll:Te,treeExpandedKeys:ye,treeDefaultExpandedKeys:ke,onTreeExpand:re,treeIcon:de,treeMotion:Ne,showTreeIcon:be,switcherIcon:xe,treeLine:G,treeNodeFilterProp:y,keyEntities:M}},[oe,ne,Y,$,Ke,Ye,Te,ye,ke,re,de,Ne,be,xe,G,y,M]);return s.createElement(ht.Provider,{value:nn},s.createElement(zt.Provider,{value:rn},s.createElement(Er,$t({ref:t},$e,{id:Pe,prefixCls:r,mode:H?"multiple":void 0,displayValues:Zt,onDisplayValuesChange:tn,searchValue:he,onSearch:Be,OptionList:qr,emptyOptions:!ae.length,onDropdownVisibleChange:en,dropdownMatchSelectWidth:ie}))))}),ze=Jr;ze.TreeNode=ft;ze.SHOW_ALL=vt;ze.SHOW_PARENT=gt;ze.SHOW_CHILD=nt;const Zr=e=>{const{componentCls:t,treePrefixCls:n,colorBgElevated:o}=e,r=`.${n}`;return[{[`${t}-dropdown`]:[{padding:`${Nt(e.paddingXS)} ${Nt(e.calc(e.paddingXS).div(2).equal())}`},Gn(n,Pt(e,{colorBgContainer:o})),{[r]:{borderRadius:0,[`${r}-list-holder-inner`]:{alignItems:"stretch",[`${r}-treenode`]:{[`${r}-node-content-wrapper`]:{flex:"auto"}}}}},Kn(`${n}-checkbox`,e),{"&-rtl":{direction:"rtl",[`${r}-switcher${r}-switcher_close`]:{[`${r}-switcher-icon svg`]:{transform:"rotate(90deg)"}}}}]}]};function eo(e,t,n){return ln("TreeSelect",o=>{const r=Pt(o,{treePrefixCls:t});return[Zr(r)]},Mn)(e,n)}var to=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const no=(e,t)=>{var n;const{prefixCls:o,size:r,disabled:a,bordered:u=!0,className:l,rootClassName:c,treeCheckable:d,multiple:i,listHeight:v=256,listItemHeight:g=26,placement:h,notFoundContent:R,switcherIcon:m,treeLine:S,getPopupContainer:y,popupClassName:T,dropdownClassName:N,treeIcon:_=!1,transitionName:V,choiceTransitionName:f="",status:F,treeExpandAction:A,builtinPlacements:U,dropdownMatchSelectWidth:ee,popupMatchSelectWidth:te,allowClear:ne,variant:Y,dropdownStyle:$,tagRender:Te}=e,ye=to(e,["prefixCls","size","disabled","bordered","className","rootClassName","treeCheckable","multiple","listHeight","listItemHeight","placement","notFoundContent","switcherIcon","treeLine","getPopupContainer","popupClassName","dropdownClassName","treeIcon","transitionName","choiceTransitionName","status","treeExpandAction","builtinPlacements","dropdownMatchSelectWidth","popupMatchSelectWidth","allowClear","variant","dropdownStyle","tagRender"]),{getPopupContainer:ke,getPrefixCls:re,renderEmpty:le,direction:Q,virtual:Oe,popupMatchSelectWidth:Ve,popupOverflow:Le}=s.useContext(cn),J=re(),O=re("select",o),Ce=re("select-tree",o),P=re("tree-select",o),{compactSize:ce,compactItemClassnames:ie}=dn(O,Q),G=It(O),de=It(P),[be,xe,Ne]=Dr(O,G),[B]=eo(P,Ce,de),[Ie,$e]=kr("treeSelect",Y,u),Pe=Rt(T||N,`${P}-dropdown`,{[`${P}-dropdown-rtl`]:Q==="rtl"},c,Ne,G,de,xe),q=!!(d||i),oe=Fr(e.suffixIcon,e.showArrow),Re=(n=te??ee)!==null&&n!==void 0?n:Ve,{status:H,hasFeedback:Me,isFormItemInput:we,feedbackIcon:X}=s.useContext(fn),Ee=Vr(H,F),{suffixIcon:k,removeIcon:C,clearIcon:fe}=Lr(Object.assign(Object.assign({},ye),{multiple:q,showSuffixIcon:oe,hasFeedback:Me,feedbackIcon:X,prefixCls:O,componentName:"TreeSelect"})),W=ne===!0?{clearIcon:fe}:ne;let he;R!==void 0?he=R:he=(le==null?void 0:le("Select"))||s.createElement(Ar,{componentName:"Select"});const De=hn(ye,["suffixIcon","removeIcon","clearIcon","itemIcon","switcherIcon"]),Be=s.useMemo(()=>h!==void 0?h:Q==="rtl"?"bottomRight":"bottomLeft",[h,Q]),ae=vn(ue=>{var ve;return(ve=r??ce)!==null&&ve!==void 0?ve:ue}),Ue=s.useContext(gn),M=a??Ue,se=Rt(!o&&P,{[`${O}-lg`]:ae==="large",[`${O}-sm`]:ae==="small",[`${O}-rtl`]:Q==="rtl",[`${O}-${Ie}`]:$e,[`${O}-in-form-item`]:we},Or(O,Ee,Me),ie,l,c,Ne,G,de,xe),Qe=ue=>s.createElement(jn,{prefixCls:Ce,switcherIcon:m,treeNodeProps:ue,showLine:S}),[qe]=pn("SelectLike",$==null?void 0:$.zIndex),Xe=s.createElement(ze,Object.assign({virtual:Oe,disabled:M},De,{dropdownMatchSelectWidth:Re,builtinPlacements:Tr(U,Le),ref:t,prefixCls:O,className:se,listHeight:v,listItemHeight:g,treeCheckable:d&&s.createElement("span",{className:`${O}-tree-checkbox-inner`}),treeLine:!!S,suffixIcon:k,multiple:q,placement:Be,removeIcon:C,allowClear:W,switcherIcon:Qe,showTreeIcon:_,notFoundContent:he,getPopupContainer:y||ke,treeMotion:null,dropdownClassName:Pe,dropdownStyle:Object.assign(Object.assign({},$),{zIndex:qe}),choiceTransitionName:wt(J,"",f),transitionName:wt(J,"slide-up",V),treeExpandAction:A,tagRender:q?Te:void 0}));return be(B(Xe))},ro=s.forwardRef(no),Ae=ro,oo=xn(Ae);Ae.TreeNode=ft;Ae.SHOW_ALL=vt;Ae.SHOW_PARENT=gt;Ae.SHOW_CHILD=nt;Ae._InternalPanelDoNotUseOrYouWillBeFired=oo;const ao=e=>()=>{e.setTouched(!0)},so=(e,t)=>(n,o,r)=>{var a;if(e.isReady()){switch(t.valueType){case void 0:case"node":t.multiple?e.setValue(r??null):e.setValue(r!=null&&r.length?r[0]:null);break;case"labeledValue":e.setValue(n??null);break;case"key":t.multiple?e.setValue(o??null):e.setValue(o!=null&&o.length?o[0]:null);break}e.setDirty(!0)}(a=t.onChange)==null||a.call(t,n,o,r,e)},uo=e=>()=>{var n;e.setDirty(!0),e.setTouched(!0);const t=e.getProps();(n=t.onClear)==null||n.call(t)},lo=(e,t)=>n=>{var o;return(o=t.onDataSetChanged)==null?void 0:o.call(t,n,e)},co=e=>s.useMemo(()=>Bt(e,{autoFocus:!0,autoHeightResize:!0,component:!0,dependsOn:!0,disabled:!0,helpClass:!0,hidden:!0,inlineGroup:!0,label:!0,nonEditable:!0,onDirtyStateChanged:!0,onDisabledStateChanged:!0,onErrorChanged:!0,onHiddenStateChanged:!0,onLabelChanged:!0,onReadOnlyStateChanged:!0,onReady:!0,onReadyStateChanged:!0,onTouchedStateChanged:!0,onValidated:!0,onValueChanged:!0,placeholder:!0,readOnly:!0,requiredMark:!0,rowStyle:!0,rules:!0,style:!0,tab:!0,tooltip:!0,value:!0,width:!0,valueType:!0,onDataSetChanged:!0,onChange:!0,dataSet:!0,onDataFetch:!0})[1],[e]),rt=s.createContext(void 0),io=({children:e})=>{const t=s.useRef(!1),n=s.useRef(!1),o=s.useMemo(()=>({ctrlPressedRef:t,dialogOpenedRef:n}),[t]);return p.jsx(rt.Provider,{value:o,children:e})},fo=e=>{const n=e.getFieldNames().title;return(o,r)=>!r||typeof r[n]!="string"?!1:r[n].toLowerCase().indexOf(o.toLowerCase())>=0},ho=e=>s.useMemo(()=>({...{maxHeight:400,overflow:"auto"},...e}),[e]),Ot=(e,t,n)=>{const{dialogOpenedRef:o}=s.useContext(rt);return s.useMemo(()=>{const r=n?t==null?void 0:t.editGroupFormProps:t==null?void 0:t.editFormProps;if(!r)return;const a={...r};t.language&&!a.language&&(a.language=t.language);const u=r==null?void 0:r.onSubmitSuccess;a.onSubmitSuccess=(d,i,v,g,h)=>{var T;if(u==null||u(d,i,v,g,h),h.isPrevented())return;const R=g.model.getFormMode(),m=e.getFieldNames(),S={...i,...v};let y;if(S[m.parent]?y=(T=S[m.parent])==null?void 0:T[m.key]:S[m.parent]===null?y=void 0:y=e.getActiveNodeKey(),R==="create"||R==="clone")S[m.key]||(S[m.key]=_n()),e.addNode(S,y,"insideBottom",{ensureVisible:!0,select:!!t.selectNewNode,sortNodes:t.sortOnChange});else if(R==="update"){e.updateNode(S,y,{ensureVisible:!0,sortNodes:t.sortOnChange});const N=e.getValues();e.setValues(vo(N,S,m))}};const l=r==null?void 0:r.onOpen;a.onOpen=(d,i,v,g)=>{const h=l==null?void 0:l(d,i,v,g);return g.isPrevented()||(o.current=!0),h};const c=r==null?void 0:r.onClosed;return a.onClosed=(d,i)=>{c==null||c(d,i),!i.isPrevented()&&(o.current=!1)},a},[n,t==null?void 0:t.editFormProps,t==null?void 0:t.editGroupFormProps,t.language,t.selectNewNode,e,o])},vo=(e,t,n)=>{if(!e)return null;const o=[];for(const r of e)r.value===t[n.key]?o.push({value:r.value}):o.push(r);return o},go=(e,t)=>{const{dialogOpenedRef:n}=s.useContext(rt);e.getButtonsApi().refreshButtons=po();const o=e.getFieldNames(),r=e.getActiveNode(!0),a=!!(r!=null&&r.isLeaf)||!!(t.groupsMode&&!(r!=null&&r[o.isGroup])),u=t.buttons,l=t.buttonsSize??"small",c=t.buttonsPosition??"right",d=$n(t),i=Pn(e,t,a),v=Bn(e,t,a),g=Hn(e,t,r,at,a),h=Wn(e,t,r,at,a),R=zn(e,t,r,at,a),m=Un(e,t,r,a,()=>{n.current=!0},()=>{n.current=!1});return s.useMemo(()=>{const y=Nn({headerLabel:d,view:g,create:i,createGroup:v,clone:h,update:R,delete:m},u);for(const T in y){const N=y[T];!N||T==="headerLabel"||N.type==="hotkey"||(N.size=N.size??l,N.position=N.position??c,N.checkDisabled&&(N.disabled=!r),N.checkHidden&&(N.hidden=!r))}return y},[d,g,i,v,h,R,m,u,l,c,r])},po=()=>{const[,e]=s.useState({});return s.useCallback(()=>{e({})},[e])},at=e=>({...e}),mo=({treeApi:e,treeProps:t})=>{const n=go(e,t),{token:{colorBorderSecondary:o}}=mn.useToken();return s.useMemo(()=>n?p.jsx("div",{style:{padding:"0 4px 6px 4px",borderBottom:`1px solid ${o}`,...t.buttonsRowWrapperStyle},children:p.jsx(In,{buttons:n,apiRef:e.getButtonsApi(),style:t.buttonsRowStyle,context:e,iconsOnly:t.buttonsIconsOnly!==!1})}):null,[n,o,e,t.buttonsIconsOnly,t.buttonsRowStyle,t.buttonsRowWrapperStyle])},Ut=({api:e})=>{const t=e.getFetchError(),n=e.getIsFetching(),o=e.getMinSymbols(),r=e.isDataPlainList();return o?p.jsx(So,{minSymbols:o,plainList:r}):n?p.jsx(yo,{plainList:r}):t?p.jsx(Co,{error:t,plainList:r}):p.jsx(p.Fragment,{})},So=({minSymbols:e,plainList:t})=>p.jsxs("div",{style:{paddingLeft:t?"8px":"30px",fontSize:"12px"},children:["Введите как минимум ",e," симв."]}),yo=({plainList:e})=>p.jsxs("div",{style:{paddingLeft:e?"8px":"30px",fontSize:"12px"},children:[p.jsx(Rn,{size:"small"})," загрузка..."]}),Co=({error:e,plainList:t})=>p.jsx("div",{role:"alert",style:{paddingLeft:t?"8px":"30px",fontSize:"12px",color:"#ff4d4f"},children:e}),bo=({api:e})=>{const t=e.getIsFetching(),n=e.getFetchError(),o=e.getMinSymbols(),r=e.isDataPlainList();return o||t||n?p.jsx(p.Fragment,{}):p.jsx("div",{style:{paddingLeft:r?"8px":"30px",fontSize:"12px"},children:e.t("dataNotFound")})},xo=({api:e,children:t})=>{const n=e.isDataPlainList(),o=e.getProps();return p.jsx("div",{className:n?"tree-select-plain":void 0,children:o.editFormProps||o.editGroupFormProps?p.jsx(No,{api:e,children:t}):p.jsxs(p.Fragment,{children:[t,p.jsx(Ut,{api:e})]})})},No=({api:e,children:t})=>{const n=e.getProps();return p.jsxs(wn,{style:{display:"flex",flexDirection:"column",...n.buttonsRowWrapperStyle},noKeepFocus:!0,children:[p.jsx(mo,{treeApi:e,treeProps:n}),t,p.jsx(Ut,{api:e})]})},Io=({api:e,children:t})=>{const n=e.getProps(),o=s.useContext(ht);return o&&(n.titleRender?o.treeTitleRender=n.titleRender:o.treeTitleRender=void 0),n.dropdownRender?n.dropdownRender(t):p.jsx(xo,{api:e,children:t})},Ro=({api:e,allProps:t,treeSelectProps:n})=>{const{ctrlPressedRef:o,dialogOpenedRef:r}=s.useContext(rt);Eo(o);const a=Ot(e,t,!1),u=Ot(e,t,!0),l=ho(t.dropdownStyle),c=Fo({api:e}),d=Do(e),i=Lo(e.getFieldNames()),v=e.getExpandedKeys(),g=Mo(e),h=Ao(e),R=To(e),m=ko(e,o,r),S=Oo(e),y=Vo(e);return p.jsxs(p.Fragment,{children:[p.jsx(Ae,{ref:e.treeSelectRef,treeNodeFilterProp:i.label,notFoundContent:p.jsx(bo,{api:e}),...n,labelInValue:!0,treeTitleRender:t.selectedRender,dropdownRender:t.readOnly?wo:c,showSearch:!t.readOnly&&t.showSearch!==!1,allowClear:!t.readOnly&&t.allowClear!==!1,fieldNames:i,treeData:e.getDataSet(),value:d,disabled:t.disabled,treeDefaultExpandAll:t.defaultExpandAll,treeDefaultExpandedKeys:t.defaultExpandedKeys,treeExpandedKeys:v,open:e.getIsOpen(),dropdownStyle:l,filterTreeNode:y,onTreeExpand:g,onClear:h,onChange:R,onDropdownVisibleChange:m,onSearch:S}),!t.disabled&&a?p.jsx(Et,{...a,apiRef:e.getEditFormApi()}):null,!t.disabled&&u?p.jsx(Et,{...u,apiRef:e.getEditGroupFormApi()}):null]})},wo=()=>p.jsx(p.Fragment,{}),Eo=e=>{Dt("keydown",t=>{t.key==="Control"&&(e.current=!0)}),Dt("keyup",t=>{t.key==="Control"&&(e.current=!1)})},Do=e=>{const t=e.getValues();return e.getProps().multiple?t??void 0:(t==null?void 0:t[0])??void 0},Fo=({api:e})=>s.useCallback(t=>p.jsx(Io,{api:e,children:t}),[e]),Ao=e=>()=>{var n;e.setValues(null);const t=e.getProps();(n=t.onClear)==null||n.call(t)},To=e=>t=>{var u;const n=t;e.setValues(n??null);const o=e.getProps(),r=n?e.getSelectedKeys(n)??[]:[],a=n?e.getSelectedNodes(void 0,n)??[]:[];(u=o.onChange)==null||u.call(o,t,r,a)},ko=(e,t,n)=>o=>{var a;const r=e.getProps();if(r.readOnly){e.setIsOpen(!1);return}t.current||n.current?e.setIsOpen(!0):e.setIsOpen(o),o&&(r.fetchMode==="onUse"||r.fetchMode==="onUseForce")&&e.fetchData(),(a=r.onDropdownVisibleChange)==null||a.call(r,o)},Oo=e=>t=>{var o;e.fetchData(t,!0);const n=e.getProps();(o=n.onSearch)==null||o.call(n,t)},Vo=e=>{const t=fo(e);return(n,o)=>{if(!e.getIsAllFetched())return!0;const r=e.getProps();return r.filterTreeNode?typeof r.filterTreeNode=="function"?r.filterTreeNode(n,o):r.filterTreeNode:t(n,o)}},Lo=e=>({value:e.key,label:e.title,children:e.children}),Mo=e=>t=>{var o;const n=e.getProps();e.setExpandedKeys(t),(o=n.onTreeExpand)==null||o.call(n,t)},Go=e=>t=>{var r;if(!e.getIsMounted())return;const n=e.getProps();if(!n.noCacheFetchedData&&e.getIsAllFetched())return;if(n.minSearchLength&&t.length<n.minSearchLength){e.setMinSymbols(n.minSearchLength),e.setDataSet(void 0);return}e.setMinSymbols(0),e.setFetchError(void 0);const o=(r=n==null?void 0:n.onDataFetch)==null?void 0:r.call(n,t,e);if(!o){e.setIsAllFetched(!0);return}e.setIsFetching(!0),t||e.setDataSet(void 0),o.then(a=>{var u,l,c;e.getIsMounted()&&(e.setDataSet(a.data),e.setIsAllFetched(e.getIsAllFetched()||!t),e.getIsReady()||(e.setIsReady(!0),(u=n==null?void 0:n.onReady)==null||u.call(n)),e.setIsFetching(!1),(l=n==null?void 0:n.onDataFetchSuccess)==null||l.call(n,a,e),(c=n==null?void 0:n.onDataFetchComplete)==null||c.call(n,e))},a=>{e.getIsMounted()&&(e.setFetchError(a.message),e.setDataSet(void 0),e.setIsFetching(!1))})},Ko=e=>{const[t,n]=s.useState(e.open);return Ht(()=>{n(e.open)},[e.open]),[t,n]},jo=e=>()=>e,_o=e=>t=>{e(t)},$o=({dataMutator:e})=>s.useCallback(t=>{if(!e)return t;let n={...t};return e&&(n=e(n)),n},[e]),Po=e=>()=>e,Bo=e=>t=>{e(t)},Ho=e=>()=>e,Wo=e=>()=>e,zo=e=>()=>e,Uo=e=>t=>{e(t)},Qo=e=>()=>e,qo=e=>t=>{e(t)},Xo=e=>()=>e,Yo=e=>t=>{e(t)},Jo=e=>()=>e,Zo=e=>t=>{e(t)};var ea="Expected a function",Vt=NaN,ta="[object Symbol]",na=/^\s+|\s+$/g,ra=/^[-+]0x[0-9a-f]+$/i,oa=/^0b[01]+$/i,aa=/^0o[0-7]+$/i,sa=parseInt,ua=typeof et=="object"&&et&&et.Object===Object&&et,la=typeof self=="object"&&self&&self.Object===Object&&self,ca=ua||la||Function("return this")(),ia=Object.prototype,da=ia.toString,fa=Math.max,ha=Math.min,st=function(){return ca.Date.now()};function va(e,t,n){var o,r,a,u,l,c,d=0,i=!1,v=!1,g=!0;if(typeof e!="function")throw new TypeError(ea);t=Lt(t)||0,it(n)&&(i=!!n.leading,v="maxWait"in n,a=v?fa(Lt(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g);function h(f){var F=o,A=r;return o=r=void 0,d=f,u=e.apply(A,F),u}function R(f){return d=f,l=setTimeout(y,t),i?h(f):u}function m(f){var F=f-c,A=f-d,U=t-F;return v?ha(U,a-A):U}function S(f){var F=f-c,A=f-d;return c===void 0||F>=t||F<0||v&&A>=a}function y(){var f=st();if(S(f))return T(f);l=setTimeout(y,m(f))}function T(f){return l=void 0,g&&o?h(f):(o=r=void 0,u)}function N(){l!==void 0&&clearTimeout(l),d=0,o=c=r=l=void 0}function _(){return l===void 0?u:T(st())}function V(){var f=st(),F=S(f);if(o=arguments,r=this,c=f,F){if(l===void 0)return R(c);if(v)return l=setTimeout(y,t),h(c)}return l===void 0&&(l=setTimeout(y,t)),u}return V.cancel=N,V.flush=_,V}function it(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function ga(e){return!!e&&typeof e=="object"}function pa(e){return typeof e=="symbol"||ga(e)&&da.call(e)==ta}function Lt(e){if(typeof e=="number")return e;if(pa(e))return Vt;if(it(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=it(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(na,"");var n=oa.test(e);return n||aa.test(e)?sa(e.slice(2),n?2:8):ra.test(e)?Vt:+e}var ma=va;const Sa=Sn(ma),ya=(e,t)=>(n="",o)=>{const r=Sa(e,t.getProps().debounce??0);o?r(n):e(n)},Mt=e=>!!(e&&typeof e=="object"&&e.value),Gt=(e,t)=>{const n=e[t.key],o=e[t.title];return{value:n,label:o}},pt=(e,t)=>{if(!e)return null;if(!dt(e))return typeof e=="object"?Mt(e)?[e]:[Gt(e,t)]:[{value:e}];const n=[];for(const o of e)o&&(typeof o=="object"?Mt(o)?n.push(o):n.push(Gt(o,t)):n.push({value:o}));return n},Ca=({value:e},t)=>{const n=ba(e??null,t),[o,r]=s.useState(n);return Ht(()=>{r(n)},[n]),[o,r]},ba=(e,t)=>s.useMemo(()=>pt(e,t),[t,e]),xa=e=>()=>e??null,Na=(e,t)=>s.useCallback(n=>{e(pt(n,t))},[t,e]),Ia=e=>t=>{const n=t??e;if(!n)return;if(!dt(n))return[n.value];const o=[];for(const r of n)o.push(r.value);return o},Kt=(e,t,n)=>{const o={[n.key]:e.value,[n.title]:e.label},{idx:r,nodes:a}=Qn(t,e.value,n);if(r<0||!(a!=null&&a[r]))return o;const u={...a[r]};return delete u[n.children],u},Ra=(e,t)=>{const n=s.useRef(void 0),o=s.useRef(null),r=s.useRef(void 0);return(a,u)=>{const l=e.getDataSet(),c=e.getFieldNames(),d=a??l,i=u??t;if(n.current===d&&o.current===i)return r.current;if(n.current=d,o.current=i,!i){r.current=void 0;return}const v=[];if(!dt(i))v.push(Kt(i,d,c));else for(const g of i){const h=Kt(g,d,c);h&&v.push(h)}return r.current=v,v}},wa=(e,t)=>s.useCallback((n,o=!0)=>{var l;const r=e.getFieldNames(),a=(l=pt(n,r))==null?void 0:l[0];if(!a)return;const u=e.getValues();if(o){if(jt(u,a.value))return;t?e.setValues([...u??[],a]):e.setValues([a])}else{if(!jt(u,a.value))return;t?e.setValues((u==null?void 0:u.filter(c=>c.value!==a.value))??null):e.setValues([])}},[e,t]),jt=(e,t)=>{if(!e)return!1;for(const n of e)if(n.value===t)return!0;return!1},Ea={view:"Просмотр",viewGroup:"Просмотр группы",viewRecord:"Просмотр записи",viewRecordsGroup:"Просмотр группы записей",create:"Создать",createRecord:"Создать запись",createGroup:"Создать группу",createRecordsGroup:"Создать группу записей",edit:"Редактировать",editGroup:"Редактировать группу",editRecord:"Редактировать запись",editRecordsGroup:"Редактировать группу записей",clone:"Клонировать",cloneGroup:"Клонировать группу",cloneRecord:"Клонировать запись",cloneRecordsGroup:"Клонировать группу записей",delete:"Удалить",deleteGroup:"Удалить группу",deleteRecord:"Удалить запись(и)",deleteRecordsGroup:"Удалить группу записей",select:"Выбрать",selectRecord:"Выбрать запись(и)",go:"Перейти",filter:"Фильтр",ok:"OK",cancel:"Отмена",tryAgainQt:"Попробовать еще раз?",deleteSelectedRecordQt:"Удалить выбранную запись?",error:"Ошибка",dataNotFound:"Данные не найдены"},Da={view:"View",viewGroup:"View group",viewRecord:"View record",viewRecordsGroup:"View records group",create:"Create",createRecord:"Create record",createGroup:"Create group",createRecordsGroup:"Create records group",edit:"Edit",editGroup:"Edit group",editRecord:"Edit record",editRecordsGroup:"Edit records group",clone:"Clone",cloneGroup:"Clone group",cloneRecord:"Clone record",cloneRecordsGroup:"Clone records group",delete:"Delete",deleteGroup:"Delete group",deleteRecord:"Delete record(s)",deleteRecordsGroup:"Delete records group(s)",select:"Select",selectRecord:"Select record(s)",go:"Go",filter:"Filter",ok:"OK",cancel:"Cancel",tryAgainQt:"Try again?",deleteSelectedRecordQt:"Delete selected record?",error:"Error",dataNotFound:"Data not found"},Fa={view:"查看",viewGroup:"查看组",viewRecord:"查看记录",viewRecordsGroup:"查看记录组",create:"创建",createRecord:"创建记录",createGroup:"创建组",createRecordsGroup:"创建记录组",edit:"编辑",editGroup:"编辑组",editRecord:"编辑记录",editRecordsGroup:"编辑记录组",clone:"克隆",cloneGroup:"克隆组",cloneRecord:"克隆记录",cloneRecordsGroup:"克隆记录组",delete:"删除",deleteGroup:"删除组",deleteRecord:"删除记录",deleteRecordsGroup:"删除记录组",select:"选择",selectRecord:"选择记录",go:"前往",filter:"过滤",ok:"确定",cancel:"取消",tryAgainQt:"再试一次",deleteSelectedRecordQt:"删除选定的记录",error:"错误",dataNotFound:"数据未找到"},Aa={ru:Ea,en:Da,cn:Fa},Ta=e=>yn(e.language,Aa,e.translation),ka=({props:e,setProps:t})=>{var Y,$;const[n]=s.useState(e.apiRef??{}),[o]=s.useState(((Y=e.editFormProps)==null?void 0:Y.apiRef)??{}),[r]=s.useState((($=e.editGroupFormProps)==null?void 0:$.apiRef)??{}),[a,u]=s.useState(!1),[l,c]=s.useState(!1),[d,i]=s.useState(),[v,g]=s.useState(!1),[h,R]=s.useState(0),[m,S]=Ko(e),y=Ft(e)(),T=$o(e),[N,_]=Ca(e,y),[V,f,F,A]=qn(e.dataSet,y,T),[U,ee]=Xn(e.expandedKeys,e.defaultExpandedKeys,e.defaultExpandAll,A),te=Go(n),ne={getId:En(e.componentId??"treeSelect-"+Dn()),getProps:Fn(e),setProps:An(t),updateProps:Tn(e,t),getIsMounted:kn(),getFieldNames:Ft(e),getDataSet:Yn(V),setDataSet:Jn(f,e==null?void 0:e.onDataSetChanged),getGroupsOnly:Zn(n),sortTree:er(V,e.sortComparator,n),getValues:xa(N),setValues:Na(_,y),isDataPlainList:tr(F),getEditFormApi:Wo(o),getEditGroupFormApi:Ho(r),getSelectedKeys:Ia(N),getSelectedNodes:Ra(n,N),isNodeSelected:nr(n),selectNode:wa(n,e.multiple),getActiveNodeKey:rr(n),getActiveNode:or(n),getExpandedKeys:ar(U),setExpandedKeys:sr(ee),getExpandedNodes:ur(n),isNodeExpanded:lr(n),expandNode:cr(n),collapseNode:ir(n),toggleNode:dr(n),expandParentNodes:fr(n),getNode:hr(n),getNodes:vr(n),getNextNodeKey:gr(n),getPrevNodeKey:pr(n),getNextNode:mr(n),getPrevNode:Sr(n),getParentNode:yr(n),addNode:Cr(n),updateNode:br(n),removeNode:xr(n),moveNode:Nr(n),ensureNodeVisible:Ir(n),t:Ta(e),treeSelectRef:s.useRef(null),getButtonsApi:Cn(),getIsReady:Po(a),setIsReady:Bo(u),getIsOpen:jo(m),setIsOpen:_o(S),getIsFetching:zo(l),setIsFetching:Uo(c),getFetchError:Qo(d),setFetchError:qo(i),getIsAllFetched:Xo(v),setIsAllFetched:Yo(g),getMinSymbols:Jo(h),setMinSymbols:Zo(R),fetchData:ya(te,n)};return Object.assign(n,ne),n},Oa=e=>{const[t,n]=On(e),o=Va(t),r=ka({props:t,setProps:n});return s.useEffect(()=>{var a;(!t.fetchMode||t.fetchMode==="onLoad")&&!t.minSearchLength?r.fetchData():r.getIsReady()||(r.setIsReady(!0),(a=t==null?void 0:t.onReady)==null||a.call(t))},[r,t,t.fetchMode,t.minSearchLength]),p.jsx(io,{children:p.jsx(Ro,{api:r,allProps:t,treeSelectProps:o})})},Va=e=>s.useMemo(()=>Bt(e,{apiRef:!0,componentId:!0,dataMutator:!0,readOnly:!0,value:!0,filterTreeNode:!0,dataSet:!0,fetchMode:!0,noCacheFetchedData:!0,minSearchLength:!0,debounce:!0,editFormProps:!0,nodeDeleteMessage:!0,confirmDelete:!0,buttons:!0,onReady:!0,onDataFetch:!0,onDataFetchSuccess:!0,onDataFetchError:!0,onDataFetchComplete:!0,onDelete:!0,fieldNames:!0,titleRender:!0,selectedRender:!0,editGroupFormProps:!0,defaultExpandAll:!0,defaultExpandedKeys:!0,expandedKeys:!0,buttonsRowStyle:!0,buttonsRowWrapperStyle:!0,buttonsIconsOnly:!0,buttonsPosition:!0,buttonsSize:!0,headerLabel:!0,language:!0,translation:!0,selectNewNode:!0,groupsMode:!0,sortOnChange:!0,sortComparator:!0,onChange:!0,onGetLabelCallback:!0,onDataSetChanged:!0})[1],[e]),La=({field:e})=>{s.useSyncExternalStore(e.subscribe.bind(e),e.getSnapshot.bind(e));const[t]=s.useState({}),n=e.getProps(),o=e.getValue()??null,r=ao(e),a=uo(e),u=Ma(e,n.dataSet),l=so(e,n),c=lo(e,n),d=Ga(e,n),i=Ka(e,n);s.useEffect(()=>{e.setReady(!0)},[e]);const g={...{width:e.getWidth()??"100%"},...n.style},h=co(n);return p.jsx(Oa,{apiRef:t,style:g,...h,dataSet:u,autoFocus:n.autoFocus,disabled:e.isDisabled(),readOnly:e.isReadOnly(),value:o,placeholder:n.placeholder??"Choose",onChange:l,onDataSetChanged:c,onDataFetch:d,onReady:i,onClear:a,onBlur:r})},Ma=(e,t)=>s.useMemo(()=>typeof t!="function"?t:()=>t(e),[t,e]),Ga=(e,t)=>(n,o)=>{var r;return(r=t.onDataFetch)==null?void 0:r.call(t,n,o,e)},Ka=(e,t)=>()=>{var n;return(n=t.onReady)==null?void 0:n.call(t,e)};class Qa extends bn{render(){return p.jsx(La,{field:this})}}export{Qa as T};
