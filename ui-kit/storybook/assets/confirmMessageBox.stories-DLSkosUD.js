import{j as e}from"./extends-CKwpSh1k.js";import{r as i}from"./index-CTjT7uj6.js";import{S as d,B as t}from"./button-BSX3QbyL.js";import{u as f,m as y}from"./updateModalTheme-DvemskeG.js";import"./draggableRender-DNX-aZJH.js";import"./index-DGqZ_Opy.js";import"./compact-item-ayXXrr5p.js";import"./useToken-DpCeTUe_.js";import"./index-Boe84S0F.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./button-Crg2y5WX.js";import"./index-BC6X-wEl.js";import"./helpersObjects-NFjaQN06.js";import"./helpersString-BLksZHLM.js";import"./v4-CQkTLCs1.js";import"./QuestionCircleOutlined-C5RUC8Xy.js";import"./motion-Gs4finkr.js";import"./index-CiVP2nX_.js";import"./CloseOutlined-CjEpmO_q.js";import"./KeyCode-DNlgD2sM.js";import"./context-DoEgZWg9.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./ExclamationCircleFilled-DJhyVcaJ.js";import"./index-DEvyy-28.js";import"./motion-4S5rSXvC.js";import"./useClosable-ezpuUIzh.js";import"./zoom-uZCgAuxp.js";import"./InfoCircleOutlined-CU1G_igP.js";import"./DownOutlined-D2B1m1ns.js";import"./index-CwWsuzc7.js";import"./buttonsRow-3L7aKrpm.js";import"./Sider-D04GUbHb.js";import"./row-DM0mVdYK.js";import"./roundedArrow-ChNxh3ai.js";import"./colors-Chrt_s-B.js";import"./index-BRV0Se7Z.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const l=o=>{var s;f();const a=i.useRef(null);a.current&&((s=a.current)==null||s.update(o));const n=i.useCallback(p=>{a.current=y.confirm({...o,title:"Please confirm",content:"Are you sure?",colorType:p})},[o]);return e.jsxs(d,{children:[e.jsx(t,{onClick:()=>n(),children:"Open confirm"}),e.jsx(t,{type:"primary",colorType:"info",onClick:()=>n("info"),children:"Open confirm"}),e.jsx(t,{type:"primary",colorType:"warning",onClick:()=>n("warning"),children:"Open confirm"}),e.jsx(t,{type:"primary",colorType:"success",onClick:()=>n("success"),children:"Open confirm"}),e.jsx(t,{type:"primary",colorType:"danger",onClick:()=>n("danger"),children:"Open confirm"})]})},g=l;try{l.displayName="ConfirmMessageBoxComponent",l.__docgenInfo={description:"MessageBox Confirm component",displayName:"ConfirmMessageBoxComponent",props:{okText:{defaultValue:null,description:"",name:"okText",required:!1,type:{name:"string"}},onOk:{defaultValue:null,description:"",name:"onOk",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},cancelText:{defaultValue:null,description:"",name:"cancelText",required:!1,type:{name:"string"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},title:{defaultValue:null,description:"Form title",name:"title",required:!1,type:{name:"ReactNode"}},content:{defaultValue:null,description:"Form content",name:"content",required:!1,type:{name:"ReactNode"}},buttons:{defaultValue:null,description:"Form buttons",name:"buttons",required:!1,type:{name:"IFormButtons"}},icon:{defaultValue:null,description:"Form icon",name:"icon",required:!1,type:{name:"ReactNode"}},colorType:{defaultValue:null,description:"Form type",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"success"'},{value:'"neutral"'},{value:'"info"'},{value:'"danger"'}]}},closable:{defaultValue:null,description:"Whether a close (x) button is visible on top right of the modal dialog or not",name:"closable",required:!1,type:{name:"boolean"}},maskClosable:{defaultValue:null,description:"Whether to close the modal dialog when the mask (area outside the modal) is clicked",name:"maskClosable",required:!1,type:{name:"boolean"}},centered:{defaultValue:null,description:"Center modal",name:"centered",required:!1,type:{name:"boolean"}},onAfterClose:{defaultValue:null,description:"After controls close callback",name:"onAfterClose",required:!1,type:{name:"(() => void)"}},onCrossClose:{defaultValue:null,description:"On form close by close cross pressed callback",name:"onCrossClose",required:!1,type:{name:"(() => void)"}}}}}catch{}try{confirmMessageBox.displayName="confirmMessageBox",confirmMessageBox.__docgenInfo={description:"MessageBox Confirm component",displayName:"confirmMessageBox",props:{okText:{defaultValue:null,description:"",name:"okText",required:!1,type:{name:"string"}},onOk:{defaultValue:null,description:"",name:"onOk",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},cancelText:{defaultValue:null,description:"",name:"cancelText",required:!1,type:{name:"string"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},title:{defaultValue:null,description:"Form title",name:"title",required:!1,type:{name:"ReactNode"}},content:{defaultValue:null,description:"Form content",name:"content",required:!1,type:{name:"ReactNode"}},buttons:{defaultValue:null,description:"Form buttons",name:"buttons",required:!1,type:{name:"IFormButtons"}},icon:{defaultValue:null,description:"Form icon",name:"icon",required:!1,type:{name:"ReactNode"}},colorType:{defaultValue:null,description:"Form type",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"success"'},{value:'"neutral"'},{value:'"info"'},{value:'"danger"'}]}},closable:{defaultValue:null,description:"Whether a close (x) button is visible on top right of the modal dialog or not",name:"closable",required:!1,type:{name:"boolean"}},maskClosable:{defaultValue:null,description:"Whether to close the modal dialog when the mask (area outside the modal) is clicked",name:"maskClosable",required:!1,type:{name:"boolean"}},centered:{defaultValue:null,description:"Center modal",name:"centered",required:!1,type:{name:"boolean"}},onAfterClose:{defaultValue:null,description:"After controls close callback",name:"onAfterClose",required:!1,type:{name:"(() => void)"}},onCrossClose:{defaultValue:null,description:"On form close by close cross pressed callback",name:"onCrossClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const ee={title:"Controls/MessageBox/Confirm",component:g,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
                    import React, {useCallback, useRef} from 'react';
                    import {Button} from @krinopotam/ui-kit/button';
                    import {IModalConfirmConfig, MessageBox, MessageBoxApi, useUpdateMessageBoxTheme} from @krinopotam/ui-kit/messageBox';
                    import {Space} from 'antd';
                    import {IColorType} from @krinopotam/ui-kit/button/button';
                    type IComponent = IModalConfirmConfig;
                    /** MessageBox Confirm component */
                    export const ConfirmMessageBoxComponent = (props: IComponent): React.JSX.Element => {
                        useUpdateMessageBoxTheme(); //set current theme to messageBox
                        const curMessageBox = useRef<MessageBoxApi | null>(null);
                        if (curMessageBox.current) curMessageBox.current?.update(props);
                        const onClick = useCallback(
                            (colorType?: IColorType) => {
                                curMessageBox.current = MessageBox.confirm({
                                    ...props,
                                    title: 'Please confirm',
                                    content: 'Are you sure?',
                                    colorType: colorType,
                                });
                            },
                            [props]
                        );
                        return (
                            <Space>
                                <Button onClick={() => onClick()}>Open confirm</Button>
                                <Button type={'primary'} colorType="info" onClick={() => onClick('info')}>
                                    Open confirm
                                </Button>
                                <Button type={'primary'} colorType="warning" onClick={() => onClick('warning')}>
                                    Open confirm
                                </Button>
                                <Button type={'primary'} colorType="success" onClick={() => onClick('success')}>
                                    Open confirm
                                </Button>
                                <Button type={'primary'} colorType="danger" onClick={() => onClick('danger')}>
                                    Open confirm
                                </Button>
                            </Space>
                        );
                    };
                    export default ConfirmMessageBoxComponent;
                `}}}},r={args:{content:"Are you sure?"}};var c,m,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    content: 'Are you sure?'
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const oe=["Confirm"];export{r as Confirm,oe as __namedExportsOrder,ee as default};
