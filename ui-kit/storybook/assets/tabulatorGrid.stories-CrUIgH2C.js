import{j as A}from"./extends-CKwpSh1k.js";import{T as k,a as _}from"./tabulator-COQjtTrv.js";import{T as R}from"./tabulatorGrid-DCB4UOZd.js";import"./index-CTjT7uj6.js";import"./tabulatorBase-DRtLU1dT.js";import"./client-B7rfcIiV.js";import"./index-Boe84S0F.js";import"./index-DGqZ_Opy.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./helpersString-BLksZHLM.js";import"./v4-CQkTLCs1.js";import"./styled-components.browser.esm-p4xx1i8F.js";import"./useToken-DpCeTUe_.js";import"./index-BC6X-wEl.js";import"./dayjs.min-BljPK31Q.js";import"./helpersObjects-NFjaQN06.js";import"./updateModalTheme-DvemskeG.js";import"./draggableRender-DNX-aZJH.js";import"./InfoCircleOutlined-CU1G_igP.js";import"./compact-item-ayXXrr5p.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./button-BSX3QbyL.js";import"./button-Crg2y5WX.js";import"./index-DEvyy-28.js";import"./ExclamationCircleFilled-DJhyVcaJ.js";import"./context-DoEgZWg9.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./motion-Gs4finkr.js";import"./motion-4S5rSXvC.js";import"./CloseOutlined-CjEpmO_q.js";import"./KeyCode-DNlgD2sM.js";import"./useClosable-ezpuUIzh.js";import"./zoom-uZCgAuxp.js";import"./DownOutlined-D2B1m1ns.js";import"./index-CwWsuzc7.js";import"./buttonsRow-3L7aKrpm.js";import"./Sider-D04GUbHb.js";import"./row-DM0mVdYK.js";import"./roundedArrow-ChNxh3ai.js";import"./colors-Chrt_s-B.js";import"./index-BRV0Se7Z.js";import"./QuestionCircleOutlined-C5RUC8Xy.js";import"./index-CiVP2nX_.js";import"./index-CrjOAKF0.js";import"./index-V5iYYoh6.js";import"./SearchOutlined-BNG-1YbV.js";import"./useIcons-BnJzZTBK.js";import"./datePicker-6tc3RmYQ.js";import"./quillEditor-DgPshUNI.js";import"./_baseIsEqual-C2lxlfj2.js";import"./select-BqfbI_Fd.js";import"./iframe-C9M7J8JP.js";import"../sb-preview/runtime.js";import"./MenuOutlined-ld3ZYX5f.js";const Ge={title:"Controls/TabulatorGrid",component:R,tags:["autodocs"],parameters:{docs:{}}},t={dataSet:k,columns:_,columnDefaults:{resizable:"header",headerFilter:!0,headerFilterFunc:"like"},height:500,layout:"fitColumns",movableColumns:!0,onDataFetch:void 0,onDataFetchResponse:void 0},r={args:{...t}},o={args:{...t,showHeaderFilter:!0,footerElement:A.jsx("div",{children:"My Footer"})}},a={args:{...t,dataTree:!0}},i={args:{...t,footerElement:A.jsx("div",{children:"My Footer"})}},n={args:{...t,height:void 0,pagination:!0,paginationMode:"local",paginationSize:10,paginationSizeSelector:[5,10,50,100],paginationCounter:"rows"}},s={args:{...t,dataSet:void 0,height:void 0,pagination:!0,paginationSize:5,paginationSizeSelector:[5,10,50,100],paginationCounter:"rows",paginationMode:"remote",filterMode:"remote",sortMode:"remote",onDataFetch:(e,C)=>new Promise(D=>{setTimeout(()=>{const p=(e==null?void 0:e.page)??1,m=(e==null?void 0:e.size)??C.gridProps.paginationSize??5,j=4,E=k.slice((p-1)*m,p*m);D({data:E,last_page:j})},1e3)}),ajaxParams:{key1:"value1",key2:"value2"}}};var c,d,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...baseArgs
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var l,u,S;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    showHeaderFilter: true,
    footerElement: <div>My Footer</div>
  }
}`,...(S=(u=o.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var h,f,v;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    dataTree: true
  }
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var z,F,T;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    footerElement: <div>My Footer</div>
  }
}`,...(T=(F=i.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var b,P,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    height: undefined,
    pagination: true,
    paginationMode: 'local',
    paginationSize: 10,
    paginationSizeSelector: [5, 10, 50, 100],
    paginationCounter: 'rows'
  }
}`,...(y=(P=n.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var M,w,x;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    dataSet: undefined,
    height: undefined,
    pagination: true,
    paginationSize: 5,
    paginationSizeSelector: [5, 10, 50, 100],
    paginationCounter: 'rows',
    paginationMode: 'remote',
    filterMode: 'remote',
    sortMode: 'remote',
    onDataFetch: (params, gridApi) => {
      return new Promise(resolve => {
        setTimeout(() => {
          //make any remote fetch
          const page = params?.page ?? 1;
          const size = params?.size ?? gridApi.gridProps.paginationSize ?? 5;
          const lastPage = 4;
          const dataSet = TabulatorTreeDataset.slice((page - 1) * size, page * size); //remote fetch imitation
          resolve({
            data: dataSet,
            last_page: lastPage
          });
        }, 1000);
      });
    },
    /*        ajaxRequestFunc: (url, config, params) => {\r
        return new Promise((resolve) => {\r
            setTimeout(() => {\r
                //make any remote fetch\r
                const dataSet = TabulatorTreeDataset.slice((params.page - 1) * params.size, params.page * params.size); //remote fetch imitation\r
                resolve({data: dataSet, last_page: 4})\r
            }, 1000)\r
        })\r
    },*/
    ajaxParams: {
      key1: 'value1',
      key2: 'value2'
    } //any additional params (you can pass a callback)
  }
}`,...(x=(w=s.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const He=["Simple","WithHeaderFilter","Tree","WithFooter","PaginationLocal","PaginationRemote"];export{n as PaginationLocal,s as PaginationRemote,r as Simple,a as Tree,i as WithFooter,o as WithHeaderFilter,He as __namedExportsOrder,Ge as default};
