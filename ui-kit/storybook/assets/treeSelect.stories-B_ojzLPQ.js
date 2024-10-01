import{_ as se,j as s}from"./extends-BRD_ACZV.js";import{T as ae,a as w}from"./treeSelect-ei2DnQ1x.js";import"./buttonsRow-B6oqgMUN.js";import{m as ce}from"./dFormModal-Df5BjXGI.js";import{I as te}from"./inputField-VAU2qHkF.js";import{f as e}from"./index-C_FWhylE.js";import{r as oe}from"./index-uubelm5h.js";import{I as me}from"./compact-item-Cq9_oKvy.js";import"./splitObject-C6hVKqbV.js";import"./updateModalTheme-zQ_YOxAB.js";import"./headerRender-C2XI2y67.js";import"./index-BloC46dp.js";import"./useToken-DcxMJEAm.js";import"./ExclamationCircleFilled-BgVBMMmD.js";import"./pickAttrs-BK90issH.js";import"./context-Dw4q7UZT.js";import"./index-DaxZXI7c.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./motion-DInqWZju.js";import"./button-BV2UQvY4.js";import"./CloseOutlined-DudQdYPk.js";import"./KeyCode-DNlgD2sM.js";import"./ContextIsolator-CHJRnwEJ.js";import"./useClosable-DUhy-sMk.js";import"./zoom-C6i_ByaA.js";import"./DownOutlined-DgGpJDSU.js";import"./index-jGjHQRy5.js";import"./index-D3eZ-H7s.js";import"./InfoCircleOutlined-CvX0ly-N.js";import"./button-Cwr6DgNZ.js";import"./index-C09VgAx5.js";import"./getNanoId-DD8laUaD.js";import"./QuestionCircleOutlined-CTTbfydo.js";import"./index-DZAtJoSc.js";import"./defaultButtonsProps-2UrfmELP.js";import"./List-B2dhrysU.js";import"./index-DqHe_JTz.js";import"./row-DGeTWQOf.js";import"./roundedArrow-DHHCDUVh.js";import"./colors-DipieP1N.js";import"./v4-CQkTLCs1.js";import"./EyeOutlined-BmNE_l5f.js";import"./dForm-hjCYRWo-.js";import"./dayjs.min-C_f_bfvq.js";import"./index-DMj878Uq.js";import"./useVariants-BWqEf-UO.js";import"./index-Bx0hWZS5.js";import"./isArray-Cl7xn3Rc.js";import"./CheckOutlined-Dktt4At8.js";import"./modal-DD7Ss0Dh.js";import"./useIsDebugMode-_qV3LLe4.js";import"./Sider-BdPjJ3kT.js";import"./DeleteOutlined-DsUOOxqG.js";import"./useShowArrow-C0vaSVDp.js";import"./useIcons-C_kJjDLC.js";import"./SearchOutlined-wK2xDu78.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-CGAOD1SL.js";var ie={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},le=function(t,n){return oe.createElement(me,se({},t,{ref:n,icon:ie}))},de=oe.forwardRef(le);const Sr={title:"Controls/TreeSelect",component:ae,tags:["autodocs"],parameters:{docs:{}}},o={dataSet:w,style:{width:400},placeholder:"Select value",onChange:e(),onDataFetch:e(),onDataFetchSuccess:e(),onClear:e(),onDelete:e(),onDataFetchError:e(),onDataFetchComplete:e(),onReady:e(),onTreeLoad:e(),onTreeExpand:e(),onSearch:e(),onPopupScroll:e(),onMouseLeave:e(),onMouseEnter:e(),onMouseDown:e(),onKeyUp:e(),onKeyDown:e(),onClick:e(),onFocus:e(),onBlur:e(),onInputKeyDown:e(),onDropdownVisibleChange:e(),onDeselect:e(),onSelect:e()},c={args:{...o}},m={args:{...o,allowClear:!0}},i={args:{...o,bordered:!1}},l={args:{...o,disabled:!0}},d={args:{...o,readOnly:!0}},p={args:{...o,value:"03-03-01"}},u={args:{...o,titleRender:r=>s.jsxs(s.Fragment,{children:[r.title,s.jsx("br",{}),s.jsxs("small",{style:{color:"#808080"},children:[s.jsx(de,{})," "," "+r.head]})]}),selectedRender:r=>s.jsxs(s.Fragment,{children:[r.title," ",s.jsx("small",{style:{color:"#808080"},children:" ("+r.head+")"})]}),filterTreeNode:(r,t)=>(t.title+" ("+t.head+")").toLowerCase().indexOf(r.toLowerCase())>=0}},g={args:{...o,fetchMode:"onUse",noCacheFetchedData:!0,onDataFetch:()=>new Promise((r,t)=>{setTimeout(()=>{Math.random()<0?t({message:"Ошибка загрузки данных",code:400}):r({data:w})},2e3)})}},ne=(r,t)=>{var F;const n=[];let D=[];for(const a of r){const C=ce(a);if(a.children&&a.children.length>0&&(D=ne(a.children,t)),D.length>0){C.children=D,n.push(C);continue}const A=(F=a.title)==null?void 0:F.toString().toLowerCase().indexOf(t.toLowerCase());typeof A<"u"&&A>=0&&n.push(C)}return n},h={args:{...o,fetchMode:"onUse",noCacheFetchedData:!0,minSearchLength:1,onDataFetch:r=>new Promise(t=>{setTimeout(()=>{const n=ne(w,r);t({data:n})},1e3)})}},f={args:{...o,confirmDelete:!0,editFormProps:{confirmChanges:!0,height:100,fieldsProps:{title:{component:te,label:"Department"}}}}},S={args:{...o,confirmDelete:!0,onDelete:()=>new Promise((r,t)=>{setTimeout(()=>{Math.random()<.1?t({message:"Ошибка удаления строк",code:400}):r({data:{result:"OK"}})},2e3)}),editFormProps:{confirmChanges:!0,height:100,onSubmit:r=>new Promise((t,n)=>{setTimeout(()=>{Math.random()<.3?n({message:"Ошибка сохранения",code:400}):t({data:r})},3e3)}),fieldsProps:{title:{component:te,label:"Department"}}}}};var T,b,v;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...commonArgs
  }
}`,...(v=(b=c.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var y,x,P;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    allowClear: true
  }
}`,...(P=(x=m.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var M,j,O;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    bordered: false
  }
}`,...(O=(j=i.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var N,R,I;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    disabled: true
  }
}`,...(I=(R=l.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var E,L,U;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    readOnly: true
  }
}`,...(U=(L=d.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var K,V,_;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    value: '03-03-01'
  }
}`,...(_=(V=p.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var B,k,z;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
    selectedRender: (treeNode: ITreeSelectNode) => {
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
}`,...(z=(k=u.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var $,q,G;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(G=(q=g.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var H,J,Q;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
      height: 100,
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
      height: 100,
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
}`,...(re=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const Dr=["Simple","AllowClear","NoBorder","Disabled","ReadOnly","DefaultValue","CustomRenders","AsyncFetch","AsyncSearch","Editable","EditableAsync"];export{m as AllowClear,g as AsyncFetch,h as AsyncSearch,u as CustomRenders,p as DefaultValue,l as Disabled,f as Editable,S as EditableAsync,i as NoBorder,d as ReadOnly,c as Simple,Dr as __namedExportsOrder,Sr as default};