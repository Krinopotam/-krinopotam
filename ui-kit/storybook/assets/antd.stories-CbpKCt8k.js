import{j as o}from"./extends-BRD_ACZV.js";import{F as t}from"./index-ZjhSye4T.js";import{I as e}from"./index-DZZC4nas.js";import{R as l}from"./InfoCircleOutlined-DRg6sOvc.js";import"./index-uubelm5h.js";import"./compact-item-Cc18Jwjb.js";import"./useToken-5hoSZr8q.js";import"./index-DaxZXI7c.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./index-DSOWIBN6.js";import"./context-B9fTWsvw.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./pickAttrs-CgiZ8JxW.js";import"./useVariants-DZ-kQ5YQ.js";import"./ContextIsolator-DOOW9rnJ.js";import"./index-Dc2gpPvf.js";import"./motion-882RPeBL.js";import"./row-B5tJJ9FS.js";import"./roundedArrow-BEYe8rhY.js";import"./zoom-BAlMIi5O.js";import"./colors-C2uSR3nC.js";import"./QuestionCircleOutlined-Bk-29y8U.js";import"./ExclamationCircleFilled-DfdUTXTz.js";import"./EyeOutlined-BnAIJ_Pe.js";import"./SearchOutlined-CS-uAFUb.js";import"./button-Cxc_PIz_.js";const m=()=>o.jsxs(t,{layout:"horizontal",children:[o.jsx(t.Item,{label:"Field A",required:!0,tooltip:"This is a required field",children:o.jsx(e,{placeholder:"input placeholder"})}),o.jsx(t.Item,{label:"Field B",tooltip:{title:"Tooltip with customize icon",icon:o.jsx(l,{})},children:o.jsx(e,{placeholder:"input placeholder"})})]}),n=m;try{antd.displayName="antd",antd.__docgenInfo={description:"",displayName:"antd",props:{}}}catch{}const P={title:"DForm/Examples/Antd",component:n,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const S=["Playground"];export{r as Playground,S as __namedExportsOrder,P as default};
