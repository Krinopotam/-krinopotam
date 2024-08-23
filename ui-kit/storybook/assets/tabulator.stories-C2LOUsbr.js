import{j as k}from"./extends-CKwpSh1k.js";import{T as E,a as l,b as L}from"./tabulator-Biv-lSIS.js";import"./dayjs.min-BljPK31Q.js";import"./index-CTjT7uj6.js";import"./client-B7rfcIiV.js";import"./index-Boe84S0F.js";import"./useIsDebugMode-B-VM_G4X.js";import"./index-DGqZ_Opy.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./helpersString-BLksZHLM.js";import"./v4-CQkTLCs1.js";import"./styled-components.browser.esm-7JUZ0eac.js";import"./useToken-DuQNFAH6.js";import"./index-C1vctpir.js";const Y={title:"Controls/TabulatorBase",component:E,tags:["autodocs"],parameters:{docs:{}}},a={data:l,columns:L,columnDefaults:{resizable:"header",headerFilter:!0,headerFilterFunc:"like"},height:500,layout:"fitColumns",movableColumns:!0},t={args:{...a}},o={args:{...a,showHeaderFilter:!0,footerElement:k.jsx("div",{children:"My Footer"})}},r={args:{...a,dataTree:!0}},n={args:{...a,footerElement:k.jsx("div",{children:"My Footer"})}},s={args:{...a,height:void 0,pagination:!0,paginationMode:"local",paginationSize:10,paginationSizeSelector:[5,10,50,100],paginationCounter:"rows"}},i={args:{...a,data:void 0,height:void 0,pagination:!0,paginationSize:5,paginationSizeSelector:[5,10,50,100],paginationCounter:"rows",paginationMode:"remote",filterMode:"remote",sortMode:"remote",ajaxURL:"-",ajaxRequestFunc:(W,_,e)=>new Promise(A=>{setTimeout(()=>{const u=(e==null?void 0:e.page)??1,c=(e==null?void 0:e.size)??5,C=Math.ceil(l.length/c),R=l.slice((u-1)*c,u*c);A({data:R,last_page:C})},1e3)}),ajaxParams:{key1:"value1",key2:"value2"}}};var m,p,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...baseArgs
  }
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var d,h,S;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    showHeaderFilter: true,
    footerElement: <div>My Footer</div>
  }
}`,...(S=(h=o.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var f,b,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    dataTree: true
  }
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var v,z,T;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    footerElement: <div>My Footer</div>
  }
}`,...(T=(z=n.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var x,F,M;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    height: undefined,
    pagination: true,
    paginationMode: 'local',
    paginationSize: 10,
    paginationSizeSelector: [5, 10, 50, 100],
    paginationCounter: 'rows'
  }
}`,...(M=(F=s.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var j,P,w;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    data: undefined,
    height: undefined,
    pagination: true,
    paginationSize: 5,
    paginationSizeSelector: [5, 10, 50, 100],
    paginationCounter: 'rows',
    paginationMode: 'remote',
    filterMode: 'remote',
    sortMode: 'remote',
    ajaxURL: '-',
    //ajax URL. Workaround: if you need to use your own fetcher (for example Axios), then you must specify any non-empty string
    ajaxRequestFunc: (url, config, params) => {
      return new Promise(resolve => {
        setTimeout(() => {
          //make any remote fetch
          const page = params?.page ?? 1;
          const size = params?.size ?? 5;
          const lastPage = Math.ceil(TabulatorTreeDataset.length / size);
          const dataSet = TabulatorTreeDataset.slice((page - 1) * size, page * size); //remote fetch imitation
          resolve({
            data: dataSet,
            last_page: lastPage
          });
        }, 1000);
      });
    },
    ajaxParams: {
      key1: 'value1',
      key2: 'value2'
    } //any additional params (you can pass a callback)
  }
}`,...(w=(P=i.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};const Z=["Simple","WithHeaderFilter","Tree","WithFooter","PaginationLocal","PaginationRemote"];export{s as PaginationLocal,i as PaginationRemote,t as Simple,r as Tree,n as WithFooter,o as WithHeaderFilter,Z as __namedExportsOrder,Y as default};
