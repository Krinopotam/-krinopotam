const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-9FGXM8eG.js","assets/default-highlight-_K3mzjfK.js","assets/index-CObHp3AH.js"])))=>i.map(i=>d[i]);
import{r as o,j as e,_ as d,D as p}from"./index-CObHp3AH.js";import{T as u}from"./index-C0zsZX4a.js";import{P as y,C as f,d as h,c as g}from"./darcula-D-n55oql.js";import"./useShowArrow-DWc_B7kV.js";import"./iconUtil-DejahXk-.js";import"./DownOutlined-BYejAm0U.js";import"./useIcons-Q8Q6Q-7D.js";import"./CheckOutlined-ka3l-INf.js";import"./SearchOutlined-DZTAjpNT.js";const k=[{key:"parent 1",title:"title parent 1",g:"1111",children:[{key:"title parent 1-0",title:"title parent 1-0",children:[{key:"leaf1",title:"title leaf1"},{key:"leaf2",title:"title leaf2"},{key:"leaf3",title:"title leaf3"},{key:"leaf4",title:"title leaf4"},{key:"leaf5",title:"title leaf5"},{key:"leaf6",title:"title leaf6"}]},{key:"parent 1-1",title:"title parent 1-1",children:[{key:"leaf11",title:e.jsx("b",{style:{color:"#08c"},children:"leaf11"})}]}]}],m=()=>{const[t,n]=o.useState(),s=(l,r,i)=>{console.log("onChange",l,r,i,i.triggerNode.props),n(l)},a=(l,r)=>{console.log("onSelect",l,r)},c=l=>{console.log("onPopupScroll",l)};return console.log("Rernder"),e.jsx(u,{style:{width:"100%"},value:t,dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:"Please select",allowClear:!0,dropdownRender:l=>e.jsx(x,{children:l}),treeDefaultExpandAll:!0,fieldNames:{label:"title",value:"key",children:"children"},onChange:s,onSelect:a,onDeselect:a,treeData:k,onPopupScroll:c,onTreeExpand:console.log})},x=({children:t})=>o.useMemo(()=>(console.log("DropdownRender"),e.jsx("div",{children:t})),[t]),S=o.lazy(()=>d(()=>import("./index-9FGXM8eG.js").then(t=>t.ds),__vite__mapDeps([0,1,2])).then(t=>({default:t.Prism}))),E=t=>e.jsxs(y,{children:[e.jsx("div",{children:e.jsx(m,{})}),e.jsx(p,{}),e.jsx("div",{children:e.jsx(f,{items:[{key:1,label:"Show source",children:e.jsx(o.Suspense,{fallback:e.jsx("div",{children:"Loading source..."}),children:e.jsx(S,{language:"tsx",style:t.darkMode?h:g,showLineNumbers:!0,children:`
import React, {useMemo, useState} from 'react';
import { TreeSelect } from 'antd';
import type { TreeSelectProps } from 'antd';
const treeData = [
    {
        key: 'parent 1',
        title: 'title parent 1',
        g:'1111',
        children: [
            {
                key: 'title parent 1-0',
                title: 'title parent 1-0',
                children: [
                    {
                        key: 'leaf1',
                        title: 'title leaf1',
                    },
                    {
                        key: 'leaf2',
                        title: 'title leaf2',
                    },
                    {
                        key: 'leaf3',
                        title: 'title leaf3',
                    },
                    {
                        key: 'leaf4',
                        title: 'title leaf4',
                    },
                    {
                        key: 'leaf5',
                        title: 'title leaf5',
                    },
                    {
                        key: 'leaf6',
                        title: 'title leaf6',
                    },
                ],
            },
            {
                key: 'parent 1-1',
                title: 'title parent 1-1',
                children: [
                    {
                        key: 'leaf11',
                        title: <b style={{ color: '#08c' }}>leaf11</b>,
                    },
                ],
            },
        ],
    },
];
export const Test: React.FC = () => {
    const [key, setkey] = useState<string>();
    const onChange = (newkey: string, labelList, extra) => {
        console.log('onChange', newkey, labelList, extra, extra.triggerNode.props)
        setkey(newkey);
    };
    const onSelect = (newkey: string, node) => {
        console.log('onSelect', newkey, node)
    };
    const onPopupScroll: TreeSelectProps['onPopupScroll'] = (e) => {
        console.log('onPopupScroll', e);
    };
    console.log('Rernder')
    return (
        <TreeSelect
            //showSearch={true}
            style={{ width: '100%' }}
            value={key}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Please select"
            allowClear
            dropdownRender={menu => <DropdownRender>{menu}</DropdownRender>}
            treeDefaultExpandAll
            fieldNames={{ label: 'title', value: 'key', children: 'children' }}
            onChange={onChange}
            onSelect={onSelect}
            onDeselect={onSelect}
            treeData={treeData}
            onPopupScroll={onPopupScroll}
            onTreeExpand={console.log}
        />
    );
};
const DropdownRender = ({children}:{children:React.ReactNode}) => {
    return useMemo(()=>{
        console.log( 'DropdownRender')
        return <div>{children}</div>;
    }, [children])
}
`})})}]})})]});export{E as Page078042a7d46441b69180e5546c02964c,E as default};
