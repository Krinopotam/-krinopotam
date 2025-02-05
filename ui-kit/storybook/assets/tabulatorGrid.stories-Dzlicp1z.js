import{j as A}from"./jsx-runtime-CLpGMVip.js";import{a as _,b as C}from"./tabulator-DwUzTu_u.js";import{T as R}from"./tabulatorGrid-NzFS9IVj.js";import{f as G}from"./index-vuoyvJsJ.js";import"./index-C9MQhBv9.js";import"./client-BERIYx6e.js";import"./index-B-Tif3g2.js";import"./isArray-Cl7xn3Rc.js";import"./isDebugMode-B-VM_G4X.js";import"./getNanoId-CghKzzgc.js";import"./styled-components.browser.esm-CYN9NzFp.js";import"./index-BW5SL8mY.js";import"./useToken-C7r1PZCj.js";import"./dayjs.min-0E-yjQGw.js";import"./dForm-BWQ79u8n.js";import"./compact-item-DA-GXfnI.js";import"./index-DYSaHhaM.js";import"./index-7UV5TWEd.js";import"./index-CEaSTCJ_.js";import"./context-55JlqysY.js";import"./pickAttrs-Br7KB4bY.js";import"./useVariants-54jhFFnz.js";import"./index-CNIUd1zL.js";import"./motion-hLQ8GYzu.js";import"./row-CIeG6Ir6.js";import"./ContextIsolator-QgC1AqAH.js";import"./roundedArrow-DmDmIiOY.js";import"./index-3upY0JfS.js";import"./colors-DUoAwKpO.js";import"./QuestionCircleOutlined-cSUxXC2W.js";import"./ExclamationCircleFilled-DH9qZ7y2.js";import"./buttonsRow-DgoUOL1l.js";import"./button-4AcyERAA.js";import"./button-bcPEIH53.js";import"./Sider-DE0fVHvD.js";import"./KeyCode-lh1qUinJ.js";import"./DownOutlined-LA98A-kK.js";import"./updateModalTheme-UYJBKmLU.js";import"./headerRender-DccPdHnJ.js";import"./index-C3W8-LPG.js";import"./CloseOutlined-DRVLVuFC.js";import"./useClosable-D8jC4WSZ.js";import"./InfoCircleOutlined-DifEp91c.js";import"./index--n2SL9R3.js";import"./CheckOutlined-Buza8fpw.js";import"./dFormModal-Cs49xYDF.js";import"./modal-Dyjqcy56.js";import"./splitObject-C6hVKqbV.js";import"./defaultButtonsProps-CQGRSQbK.js";import"./List-D-55QpIp.js";import"./index-D9erqwLV.js";import"./v4-CtRu48qb.js";import"./EyeOutlined-ET-AKsvU.js";import"./DeleteOutlined-wLjkaYCn.js";import"./iframe-CY9gikd3.js";import"./MenuOutlined-DTUZBX8C.js";const Le={title:"Controls/TabulatorGrid",component:R,tags:["autodocs"],parameters:{docs:{}}},t={dataSet:C,columns:_,columnDefaults:{resizable:"header",headerFilter:!0,headerFilterFunc:"like"},height:500,layout:"fitColumns",movableColumns:!0,onDataFetch:void 0,onDataFetchResponse:void 0,onMenuVisibilityChanged:G()},r={args:{...t}},a={args:{...t,showHeaderFilter:!0,footerElement:A.jsx("div",{children:"My Footer"})}},o={args:{...t,dataTree:!0}},i={args:{...t,footerElement:A.jsx("div",{children:"My Footer"})}},n={args:{...t,height:void 0,pagination:!0,paginationMode:"local",paginationSize:10,paginationSizeSelector:[5,10,50,100],paginationCounter:"rows"}},s={args:{...t,dataSet:void 0,height:void 0,pagination:!0,paginationSize:5,paginationSizeSelector:[5,10,50,100],paginationCounter:"rows",paginationMode:"remote",filterMode:"remote",sortMode:"remote",onDataFetch:(e,k)=>new Promise(D=>{setTimeout(()=>{const p=(e==null?void 0:e.page)??1,m=(e==null?void 0:e.size)??k.getProps().paginationSize??5,j=4,E=C.slice((p-1)*m,p*m);D({data:E,last_page:j})},1e3)}),ajaxParams:{key1:"value1",key2:"value2"}}};var c,d,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...baseArgs
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var l,u,h;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    showHeaderFilter: true,
    footerElement: <div>My Footer</div>
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var S,f,b;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    dataTree: true
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var z,F,T;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    footerElement: <div>My Footer</div>
  }
}`,...(T=(F=i.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var v,y,P;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=(w=s.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const qe=["Simple","WithHeaderFilter","Tree","WithFooter","PaginationLocal","PaginationRemote"];export{n as PaginationLocal,s as PaginationRemote,r as Simple,o as Tree,i as WithFooter,a as WithHeaderFilter,qe as __namedExportsOrder,Le as default};
