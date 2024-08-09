import{_ as se,j as s}from"./extends-CKwpSh1k.js";import{T as ae,a as b}from"./treeSelect-DYyZauVE.js";import{C as ce}from"./helpersObjects-NFjaQN06.js";import{I as te}from"./inputField-HvbP6DsO.js";import{f as e}from"./index-BNzM6CSE.js";import{r as oe}from"./index-CTjT7uj6.js";import{I as me}from"./compact-item-B2r7eKHn.js";import"./dFormModal-BStzshBk.js";import"./updateModalTheme-Bz3Tp2K3.js";import"./draggableRender-BoyKbdEU.js";import"./index-DGqZ_Opy.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-C1vctpir.js";import"./useToken-DuQNFAH6.js";import"./InfoCircleOutlined-B2Jjl6_Y.js";import"./button-D1pTSzgv.js";import"./button-dqH3xn1c.js";import"./helpersString-BLksZHLM.js";import"./v4-CQkTLCs1.js";import"./index-DrMe33ah.js";import"./ExclamationCircleFilled-BijZsmvo.js";import"./context-zxaTOXwp.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./motion-D1Ok7SUs.js";import"./index-Boe84S0F.js";import"./motion-4S5rSXvC.js";import"./CloseOutlined-RkEA9oNw.js";import"./KeyCode-DNlgD2sM.js";import"./useClosable-DReJefU5.js";import"./zoom-DgLa7ZOz.js";import"./DownOutlined-dRo7eB-m.js";import"./index-56GSrRrr.js";import"./buttonsRow-CBH5dVpW.js";import"./Sider-C8lbNVsG.js";import"./row-Bz4KYDPc.js";import"./roundedArrow-CdZeBiH2.js";import"./colors-DKxxPweQ.js";import"./index-BRV0Se7Z.js";import"./QuestionCircleOutlined-DItjCDaI.js";import"./index-4vYY965U.js";import"./dForm-BrYUAKUW.js";import"./dayjs.min-BljPK31Q.js";import"./index-DKKcxpSc.js";import"./useVariants-bMUIY1dl.js";import"./index-BzgAe6ki.js";import"./CheckOutlined-ChgTJtAc.js";import"./isDebugMode-B-VM_G4X.js";import"./useShowArrow-C_pd0j7x.js";import"./List-BvBwYMs3.js";import"./useIcons-UO6XAPnG.js";import"./SearchOutlined-9InG0_lL.js";import"./iconUtil--KG9isdm.js";import"./index-Dp8He50A.js";import"./DeleteOutlined-CnGtlBuB.js";import"./index-C2sbGtmw.js";import"./EyeOutlined-YuvBWI2n.js";import"./index-DuM-I7-B.js";var ie={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},le=function(t,n){return oe.createElement(me,se({},t,{ref:n,icon:ie}))},ue=oe.forwardRef(le);const fr={title:"Controls/TreeSelect",component:ae,tags:["autodocs"],parameters:{docs:{}}},o={dataSet:b,style:{width:400},placeholder:"Select value",onChange:e(),onDataFetch:e(),onDataFetchSuccess:e(),onClear:e(),onDelete:e(),onDataFetchError:e(),onDataFetchComplete:e(),onReady:e(),onTreeLoad:e(),onTreeExpand:e(),onSearch:e(),onPopupScroll:e(),onMouseLeave:e(),onMouseEnter:e(),onMouseDown:e(),onKeyUp:e(),onKeyDown:e(),onClick:e(),onFocus:e(),onBlur:e(),onInputKeyDown:e(),onDropdownVisibleChange:e(),onDeselect:e(),onSelect:e()},c={args:{...o}},m={args:{...o,allowClear:!0}},i={args:{...o,bordered:!1}},l={args:{...o,disabled:!0}},u={args:{...o,readOnly:!0}},d={args:{...o,value:"03-03-01"}},p={args:{...o,titleRender:r=>s.jsxs(s.Fragment,{children:[r.title,s.jsx("br",{}),s.jsxs("small",{style:{color:"#808080"},children:[s.jsx(ue,{})," "," "+r.head]})]}),labelRender:r=>s.jsxs(s.Fragment,{children:[r.title," ",s.jsx("small",{style:{color:"#808080"},children:" ("+r.head+")"})]}),filterTreeNode:(r,t)=>(t.title+" ("+t.head+")").toLowerCase().indexOf(r.toLowerCase())>=0}},g={args:{...o,fetchMode:"onUse",noCacheFetchedData:!0,onDataFetch:()=>new Promise((r,t)=>{setTimeout(()=>{Math.random()<0?t({message:"Ошибка загрузки данных",code:400}):r({data:b})},2e3)})}},ne=(r,t)=>{var w;const n=[];let D=[];for(const a of r){const C=ce(a);if(a.children&&a.children.length>0&&(D=ne(a.children,t)),D.length>0){C.children=D,n.push(C);continue}const A=(w=a.title)==null?void 0:w.toString().toLowerCase().indexOf(t.toLowerCase());typeof A<"u"&&A>=0&&n.push(C)}return n},h={args:{...o,fetchMode:"onUse",noCacheFetchedData:!0,minSearchLength:1,onDataFetch:r=>new Promise(t=>{setTimeout(()=>{const n=ne(b,r);t({data:n})},1e3)})}},f={args:{...o,confirmDelete:!0,editFormProps:{confirmChanges:!0,bodyHeight:100,fieldsProps:{title:{component:te,label:"Department"}}}}},S={args:{...o,confirmDelete:!0,onDelete:()=>new Promise((r,t)=>{setTimeout(()=>{Math.random()<.1?t({message:"Ошибка удаления строк",code:400}):r({data:{result:"OK"}})},2e3)}),editFormProps:{confirmChanges:!0,bodyHeight:100,onSubmit:r=>new Promise((t,n)=>{setTimeout(()=>{Math.random()<.3?n({message:"Ошибка сохранения",code:400}):t({data:r})},3e3)}),fieldsProps:{title:{component:te,label:"Department"}}}}};var F,y,T;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...commonArgs
  }
}`,...(T=(y=c.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var v,x,P;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    allowClear: true
  }
}`,...(P=(x=m.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var E,j,M;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    bordered: false
  }
}`,...(M=(j=i.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var O,N,R;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    disabled: true
  }
}`,...(R=(N=l.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var I,L,U;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    readOnly: true
  }
}`,...(U=(L=u.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var B,K,V;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    value: '03-03-01'
  }
}`,...(V=(K=d.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};var _,H,k;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    /** node title render */
    titleRender: (treeNode: ITreeSelectNode) => {
      return <>\r
                    {treeNode.title}\r
                    <br />\r
                    <small style={{
          color: '#808080'
        }}>\r
                        <UserOutlined /> {' ' + treeNode.head}\r
                    </small>\r
                </>;
    },
    /** selected value render */
    labelRender: (treeNode: ITreeSelectNode) => {
      return <>\r
                    {treeNode.title} <small style={{
          color: '#808080'
        }}>{' (' + treeNode.head + ')'}</small>\r
                </>;
    },
    /** custom filter */
    filterTreeNode: (inputValue: string, treeNode: ITreeSelectNode) => {
      const nodeString = (treeNode.title + ' (' + treeNode.head + ')').toLowerCase();
      return nodeString.indexOf(inputValue.toLowerCase()) >= 0;
    }
  }
}`,...(k=(H=p.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var z,$,q;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    fetchMode: 'onUse',
    noCacheFetchedData: true,
    onDataFetch: () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() < 0.0) reject({
            message: 'Ошибка загрузки данных',
            code: 400
          });else resolve({
            data: TreeSelectDataSet
          });
        }, 2000);
      });
    }
  }
}`,...(q=($=g.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var G,J,Q;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    fetchMode: 'onUse',
    noCacheFetchedData: true,
    minSearchLength: 1,
    onDataFetch: (search: string) => {
      return new Promise(resolve => {
        setTimeout(() => {
          const result = filterDataSet(TreeSelectDataSet, search);
          resolve({
            data: result
          });
        }, 1000);
      });
    }
  }
}`,...(Q=(J=h.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var W,X,Y;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    confirmDelete: true,
    editFormProps: {
      confirmChanges: true,
      bodyHeight: 100,
      fieldsProps: {
        title: {
          component: InputField,
          label: 'Department'
        }
      }
    }
  }
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    confirmDelete: true,
    onDelete: () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() < 0.1) reject({
            message: 'Ошибка удаления строк',
            code: 400
          });else resolve({
            data: {
              result: 'OK'
            }
          });
        }, 2000);
      });
    },
    editFormProps: {
      confirmChanges: true,
      bodyHeight: 100,
      onSubmit: (values: Record<string, unknown>) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (Math.random() < 0.3) reject({
              message: 'Ошибка сохранения',
              code: 400
            });else resolve({
              data: values
            });
          }, 3000);
        });
      },
      fieldsProps: {
        title: {
          component: InputField,
          label: 'Department'
        }
      }
    }
  }
}`,...(re=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const Sr=["Simple","AllowClear","NoBorder","Disabled","ReadOnly","DefaultValue","CustomRenders","AsyncFetch","AsyncSearch","Editable","EditableAsync"];export{m as AllowClear,g as AsyncFetch,h as AsyncSearch,p as CustomRenders,d as DefaultValue,l as Disabled,f as Editable,S as EditableAsync,i as NoBorder,u as ReadOnly,c as Simple,Sr as __namedExportsOrder,fr as default};
