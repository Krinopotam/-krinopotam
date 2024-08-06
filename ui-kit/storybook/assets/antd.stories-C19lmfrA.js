import{j as o}from"./extends-CKwpSh1k.js";import{F as t,I as e}from"./index-CrjOAKF0.js";import{R as l}from"./InfoCircleOutlined-CU1G_igP.js";import"./index-CTjT7uj6.js";import"./compact-item-ayXXrr5p.js";import"./useToken-DpCeTUe_.js";import"./index-Boe84S0F.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./context-DoEgZWg9.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./index-V5iYYoh6.js";import"./index-CwWsuzc7.js";import"./motion-Gs4finkr.js";import"./SearchOutlined-BNG-1YbV.js";import"./button-Crg2y5WX.js";import"./motion-4S5rSXvC.js";import"./row-DM0mVdYK.js";import"./roundedArrow-ChNxh3ai.js";import"./zoom-uZCgAuxp.js";import"./colors-Chrt_s-B.js";import"./QuestionCircleOutlined-C5RUC8Xy.js";import"./ExclamationCircleFilled-DJhyVcaJ.js";const m=()=>o.jsxs(t,{layout:"horizontal",children:[o.jsx(t.Item,{label:"Field A",required:!0,tooltip:"This is a required field",children:o.jsx(e,{placeholder:"input placeholder"})}),o.jsx(t.Item,{label:"Field B",tooltip:{title:"Tooltip with customize icon",icon:o.jsx(l,{})},children:o.jsx(e,{placeholder:"input placeholder"})})]}),n=m;try{antd.displayName="antd",antd.__docgenInfo={description:"",displayName:"antd",props:{}}}catch{}const N={title:"DForm/Examples/Antd",component:n,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
                    import React, { useState } from 'react';
                    import { InfoCircleOutlined } from '@ant-design/icons';
                    import { Button, Form, Input, Radio, Tag } from 'antd';
                    type RequiredMark = boolean | 'optional' | 'customize';
                    const customizeRequiredMark = (label: React.ReactNode, { required }: { required: boolean }) => (
                        <>
                            {required ? <Tag color="error">Required</Tag> : <Tag color="warning">optional</Tag>}
                            {label}
                        </>
                    );
                    const App: React.FC = () => {
                        return (
                            <Form
                                layout="horizontal"
                            >
                                <Form.Item label="Field A" required tooltip="This is a required field">
                                    <Input placeholder="input placeholder" />
                                </Form.Item>
                                <Form.Item
                                    label="Field B"
                                    tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                                >
                                    <Input placeholder="input placeholder" />
                                </Form.Item>
                            </Form>
                        );
                    };
                    export default App;
                `}}}},r={args:{}};var i,a,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {}
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const O=["Playground"];export{r as Playground,O as __namedExportsOrder,N as default};
