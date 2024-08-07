import{_ as ne,j as n}from"./extends-CKwpSh1k.js";import{b as se}from"./tabulatorGrid-DCB4UOZd.js";import{C as ae}from"./helpersObjects-NFjaQN06.js";import{I as re}from"./inputField-CilOCzKF.js";import{T as b}from"./treeSelect-BWRmUO6q.js";import{r as te}from"./index-CTjT7uj6.js";import{I as ce}from"./compact-item-ayXXrr5p.js";import"./helpersString-BLksZHLM.js";import"./v4-CQkTLCs1.js";import"./updateModalTheme-DvemskeG.js";import"./draggableRender-DNX-aZJH.js";import"./index-DGqZ_Opy.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-BC6X-wEl.js";import"./useToken-DpCeTUe_.js";import"./InfoCircleOutlined-CU1G_igP.js";import"./button-BSX3QbyL.js";import"./button-Crg2y5WX.js";import"./index-DEvyy-28.js";import"./ExclamationCircleFilled-DJhyVcaJ.js";import"./context-DoEgZWg9.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./motion-Gs4finkr.js";import"./index-Boe84S0F.js";import"./motion-4S5rSXvC.js";import"./CloseOutlined-CjEpmO_q.js";import"./KeyCode-DNlgD2sM.js";import"./useClosable-ezpuUIzh.js";import"./zoom-uZCgAuxp.js";import"./DownOutlined-D2B1m1ns.js";import"./index-CwWsuzc7.js";import"./buttonsRow-3L7aKrpm.js";import"./Sider-D04GUbHb.js";import"./row-DM0mVdYK.js";import"./roundedArrow-ChNxh3ai.js";import"./colors-Chrt_s-B.js";import"./index-BRV0Se7Z.js";import"./QuestionCircleOutlined-C5RUC8Xy.js";import"./index-CiVP2nX_.js";import"./tabulatorBase-DRtLU1dT.js";import"./client-B7rfcIiV.js";import"./styled-components.browser.esm-p4xx1i8F.js";import"./dayjs.min-BljPK31Q.js";import"./index-CrjOAKF0.js";import"./index-V5iYYoh6.js";import"./SearchOutlined-BNG-1YbV.js";import"./useIcons-BnJzZTBK.js";import"./datePicker-6tc3RmYQ.js";import"./quillEditor-DgPshUNI.js";import"./_baseIsEqual-C2lxlfj2.js";import"./select-BqfbI_Fd.js";import"./iframe-C9M7J8JP.js";import"../sb-preview/runtime.js";import"./MenuOutlined-ld3ZYX5f.js";var me={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},ie=function(r,o){return te.createElement(ce,ne({},r,{ref:o,icon:me}))},le=te.forwardRef(ie);const dr={title:"Controls/TreeSelect",component:se,tags:["autodocs"],parameters:{docs:{}}},t={dataSet:b,style:{width:400},placeholder:"Select value"},a={args:{...t}},c={args:{...t,allowClear:!0}},m={args:{...t,bordered:!1}},i={args:{...t,disabled:!0}},l={args:{...t,readOnly:!0}},u={args:{...t,value:"03-03-01"}},d={args:{...t,titleRender:e=>n.jsxs(n.Fragment,{children:[e.title,n.jsx("br",{}),n.jsxs("small",{style:{color:"#808080"},children:[n.jsx(le,{})," "," "+e.head]})]}),labelRender:e=>n.jsxs(n.Fragment,{children:[e.title," ",n.jsx("small",{style:{color:"#808080"},children:" ("+e.head+")"})]}),filterTreeNode:(e,r)=>(r.title+" ("+r.head+")").toLowerCase().indexOf(e.toLowerCase())>=0}},p={args:{...t,fetchMode:"onUse",noCacheFetchedData:!0,onDataFetch:()=>new Promise((e,r)=>{setTimeout(()=>{Math.random()<0?r({message:"Ошибка загрузки данных",code:400}):e({data:b})},2e3)})}},oe=(e,r)=>{var C;const o=[];let S=[];for(const s of e){const D=ae(s);if(s.children&&s.children.length>0&&(S=oe(s.children,r)),S.length>0){D.children=S,o.push(D);continue}const A=(C=s.title)==null?void 0:C.toString().toLowerCase().indexOf(r.toLowerCase());typeof A<"u"&&A>=0&&o.push(D)}return o},g={args:{...t,fetchMode:"onUse",noCacheFetchedData:!0,minSearchLength:1,onDataFetch:e=>new Promise(r=>{setTimeout(()=>{const o=oe(b,e);r({data:o})},1e3)})}},h={args:{...t,confirmDelete:!0,editFormProps:{confirmChanges:!0,bodyHeight:100,fieldsProps:{title:{component:re,label:"Department"}}}}},f={args:{...t,confirmDelete:!0,onDelete:()=>new Promise((e,r)=>{setTimeout(()=>{Math.random()<.1?r({message:"Ошибка удаления строк",code:400}):e({data:{result:"OK"}})},2e3)}),editFormProps:{confirmChanges:!0,bodyHeight:100,onSubmit:e=>new Promise((r,o)=>{setTimeout(()=>{Math.random()<.3?o({message:"Ошибка сохранения",code:400}):r({data:e})},3e3)}),fieldsProps:{title:{component:re,label:"Department"}}}}};var w,F,y;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...commonArgs
  }
}`,...(y=(F=a.parameters)==null?void 0:F.docs)==null?void 0:y.source}}};var v,T,x;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    allowClear: true
  }
}`,...(x=(T=c.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var P,j,O;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    bordered: false
  }
}`,...(O=(j=m.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var E,N,M;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    disabled: true
  }
}`,...(M=(N=i.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var R,I,L;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    readOnly: true
  }
}`,...(L=(I=l.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var U,B,_;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...commonArgs,
    value: '03-03-01'
  }
}`,...(_=(B=u.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var H,V,z;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(z=(V=d.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var K,k,$;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...($=(k=p.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var q,G,J;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,W,X;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(W=h.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const pr=["Simple","AllowClear","NoBorder","Disabled","ReadOnly","DefaultValue","CustomRenders","AsyncFetch","AsyncSearch","Editable","EditableAsync"];export{c as AllowClear,p as AsyncFetch,g as AsyncSearch,d as CustomRenders,u as DefaultValue,i as Disabled,h as Editable,f as EditableAsync,m as NoBorder,l as ReadOnly,a as Simple,pr as __namedExportsOrder,dr as default};
