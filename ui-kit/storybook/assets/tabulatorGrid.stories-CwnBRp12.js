import{j as A}from"./extends-BRD_ACZV.js";import{a as C,b as _}from"./tabulator-B-jNA9AS.js";import{T as R}from"./tabulatorGrid-DdDCPuDd.js";import{f as G}from"./index-C_FWhylE.js";import"./index-uubelm5h.js";import"./client-DRrwG7oJ.js";import"./index-DaxZXI7c.js";import"./isArray-3hi2S7Pq.js";import"./useIsDebugMode-_qV3LLe4.js";import"./getNanoId-DD8laUaD.js";import"./styled-components.browser.esm-CfkHM83v.js";import"./index-DmgirUAD.js";import"./useToken-yCFB6tRL.js";import"./dayjs.min-C_f_bfvq.js";import"./dForm-BUebwij0.js";import"./index-Cb6hR08C.js";import"./compact-item-Dm6Ps-bl.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./index-BhZp6iR-.js";import"./motion-GwivFKqr.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./pickAttrs-cYhtmuII.js";import"./useVariants-BoMT4EwM.js";import"./ContextIsolator-C06Gkm1K.js";import"./index-qNCmuA6d.js";import"./motion-C7v_Qjn-.js";import"./row-Bz_wYGmE.js";import"./roundedArrow-BBoT78qh.js";import"./zoom-CbVRo4a3.js";import"./colors-2xxgsQVl.js";import"./QuestionCircleOutlined-D9UEfsHP.js";import"./ExclamationCircleFilled-Dv_tQ_LO.js";import"./buttonsRow-DN7VvcEL.js";import"./button-B5xZEXLf.js";import"./button-lOV44FFc.js";import"./Sider-AlBS9cPg.js";import"./KeyCode-DNlgD2sM.js";import"./DownOutlined-5DO0_aEd.js";import"./updateModalTheme-CqGdgA6A.js";import"./headerRender-D9Ly3L2_.js";import"./index-CTjyuNRu.js";import"./CloseOutlined-DHiNJnw3.js";import"./useClosable-CPRHNOKV.js";import"./index-D3eZ-H7s.js";import"./InfoCircleOutlined-CRyDsni9.js";import"./index-Cosg3hSS.js";import"./CheckOutlined-CtBU-03N.js";import"./modal-CI5zpwzE.js";import"./dFormModal-0gzlR4NF.js";import"./splitObject-C6hVKqbV.js";import"./defaultButtonsProps-BQveMI0g.js";import"./List-SW9DrouT.js";import"./index-8QfywodH.js";import"./v4-CQkTLCs1.js";import"./EyeOutlined-Cr33GFE_.js";import"./DeleteOutlined-DZ-nawTy.js";import"./iframe-BT4noWb5.js";import"../sb-preview/runtime.js";import"./MenuOutlined-D1sobSmM.js";const Ve={title:"Controls/TabulatorGrid",component:R,tags:["autodocs"],parameters:{docs:{}}},t={dataSet:C,columns:_,columnDefaults:{resizable:"header",headerFilter:!0,headerFilterFunc:"like"},height:500,layout:"fitColumns",movableColumns:!0,onDataFetch:void 0,onDataFetchResponse:void 0,onMenuVisibilityChanged:G()},r={args:{...t}},o={args:{...t,showHeaderFilter:!0,footerElement:A.jsx("div",{children:"My Footer"})}},a={args:{...t,dataTree:!0}},i={args:{...t,footerElement:A.jsx("div",{children:"My Footer"})}},n={args:{...t,height:void 0,pagination:!0,paginationMode:"local",paginationSize:10,paginationSizeSelector:[5,10,50,100],paginationCounter:"rows"}},s={args:{...t,dataSet:void 0,height:void 0,pagination:!0,paginationSize:5,paginationSizeSelector:[5,10,50,100],paginationCounter:"rows",paginationMode:"remote",filterMode:"remote",sortMode:"remote",onDataFetch:(e,k)=>new Promise(D=>{setTimeout(()=>{const p=(e==null?void 0:e.page)??1,m=(e==null?void 0:e.size)??k.getProps().paginationSize??5,j=4,E=C.slice((p-1)*m,p*m);D({data:E,last_page:j})},1e3)}),ajaxParams:{key1:"value1",key2:"value2"}}};var c,d,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...baseArgs
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var l,u,h;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    showHeaderFilter: true,
    footerElement: <div>My Footer</div>
  }
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var S,f,v;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    dataTree: true
  }
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var b,z,F;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    footerElement: <div>My Footer</div>
  }
}`,...(F=(z=i.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var T,y,P;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    height: undefined,
    pagination: true,
    paginationMode: 'local',
    paginationSize: 10,
    paginationSizeSelector: [5, 10, 50, 100],
    paginationCounter: 'rows'
  }
}`,...(P=(y=n.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var M,w,x;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
          const size = params?.size ?? gridApi.getProps().paginationSize ?? 5;
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
}`,...(x=(w=s.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const Be=["Simple","WithHeaderFilter","Tree","WithFooter","PaginationLocal","PaginationRemote"];export{n as PaginationLocal,s as PaginationRemote,r as Simple,a as Tree,i as WithFooter,o as WithHeaderFilter,Be as __namedExportsOrder,Ve as default};
