import{j as o}from"./extends-BRD_ACZV.js";import{F as t}from"./index-Cb6hR08C.js";import{I as e}from"./index-BVFVufkb.js";import{R as l}from"./InfoCircleOutlined-CRyDsni9.js";import"./index-uubelm5h.js";import"./compact-item-Dm6Ps-bl.js";import"./useToken-yCFB6tRL.js";import"./index-DaxZXI7c.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./index-BhZp6iR-.js";import"./motion-GwivFKqr.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./pickAttrs-cYhtmuII.js";import"./useVariants-BoMT4EwM.js";import"./ContextIsolator-C06Gkm1K.js";import"./index-qNCmuA6d.js";import"./motion-C7v_Qjn-.js";import"./row-Bz_wYGmE.js";import"./roundedArrow-BBoT78qh.js";import"./zoom-CbVRo4a3.js";import"./colors-2xxgsQVl.js";import"./QuestionCircleOutlined-D9UEfsHP.js";import"./ExclamationCircleFilled-Dv_tQ_LO.js";import"./EyeOutlined-Cr33GFE_.js";import"./SearchOutlined-BXPpqQqV.js";import"./button-lOV44FFc.js";const m=()=>o.jsxs(t,{layout:"horizontal",children:[o.jsx(t.Item,{label:"Field A",required:!0,tooltip:"This is a required field",children:o.jsx(e,{placeholder:"input placeholder"})}),o.jsx(t.Item,{label:"Field B",tooltip:{title:"Tooltip with customize icon",icon:o.jsx(l,{})},children:o.jsx(e,{placeholder:"input placeholder"})})]}),n=m;try{antd.displayName="antd",antd.__docgenInfo={description:"",displayName:"antd",props:{}}}catch{}const P={title:"DForm/Examples/Antd",component:n,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
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
