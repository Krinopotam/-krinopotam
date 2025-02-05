import{j as k}from"./jsx-runtime-CLpGMVip.js";import{T as E,a as L,b as u}from"./tabulator-DwUzTu_u.js";import"./dayjs.min-0E-yjQGw.js";import"./index-C9MQhBv9.js";import"./client-BERIYx6e.js";import"./index-B-Tif3g2.js";import"./isArray-Cl7xn3Rc.js";import"./isDebugMode-B-VM_G4X.js";import"./getNanoId-CghKzzgc.js";import"./styled-components.browser.esm-CYN9NzFp.js";import"./index-BW5SL8mY.js";import"./useToken-C7r1PZCj.js";const V={title:"Controls/TabulatorBase",component:E,tags:["autodocs"],parameters:{docs:{}}},a={data:u,columns:L,columnDefaults:{resizable:"header",headerFilter:!0,headerFilterFunc:"like"},height:500,layout:"fitColumns",movableColumns:!0},t={args:{...a}},r={args:{...a,showHeaderFilter:!0,footerElement:k.jsx("div",{children:"My Footer"})}},o={args:{...a,dataTree:!0}},n={args:{...a,footerElement:k.jsx("div",{children:"My Footer"})}},s={args:{...a,height:void 0,pagination:!0,paginationMode:"local",paginationSize:10,paginationSizeSelector:[5,10,50,100],paginationCounter:"rows"}},i={args:{...a,data:void 0,height:void 0,pagination:!0,paginationSize:5,paginationSizeSelector:[5,10,50,100],paginationCounter:"rows",paginationMode:"remote",filterMode:"remote",sortMode:"remote",ajaxURL:"-",ajaxRequestFunc:(W,_,e)=>new Promise(A=>{setTimeout(()=>{const l=(e==null?void 0:e.page)??1,c=(e==null?void 0:e.size)??5,C=Math.ceil(u.length/c),R=u.slice((l-1)*c,l*c);A({data:R,last_page:C})},1e3)}),ajaxParams:{key1:"value1",key2:"value2"}}};var d,g,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...baseArgs
  }
}`,...(m=(g=t.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var p,h,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    showHeaderFilter: true,
    footerElement: <div>My Footer</div>
  }
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var S,b,y;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    dataTree: true
  }
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var z,T,x;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    footerElement: <div>My Footer</div>
  }
}`,...(x=(T=n.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var F,M,v;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    height: undefined,
    pagination: true,
    paginationMode: 'local',
    paginationSize: 10,
    paginationSizeSelector: [5, 10, 50, 100],
    paginationCounter: 'rows'
  }
}`,...(v=(M=s.parameters)==null?void 0:M.docs)==null?void 0:v.source}}};var j,P,w;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(w=(P=i.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};const X=["Simple","WithHeaderFilter","Tree","WithFooter","PaginationLocal","PaginationRemote"];export{s as PaginationLocal,i as PaginationRemote,t as Simple,o as Tree,n as WithFooter,r as WithHeaderFilter,X as __namedExportsOrder,V as default};
