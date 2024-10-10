import{j as e}from"./extends-BRD_ACZV.js";import{r as i}from"./index-uubelm5h.js";import{S as d,B as a}from"./button-DkmzalYF.js";import{u as f,m as g}from"./updateModalTheme-ccBZ7lvN.js";import"./compact-item-Cc18Jwjb.js";import"./useToken-5hoSZr8q.js";import"./index-DaxZXI7c.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./button-Cxc_PIz_.js";import"./index-IYDviCHk.js";import"./headerRender-CTXCfp3k.js";import"./index-B7x7O6v2.js";import"./ExclamationCircleFilled-DfdUTXTz.js";import"./pickAttrs-CgiZ8JxW.js";import"./context-B9fTWsvw.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./motion-882RPeBL.js";import"./CloseOutlined-C4rdU_UQ.js";import"./KeyCode-DNlgD2sM.js";import"./ContextIsolator-DOOW9rnJ.js";import"./useClosable-B_cjSSA6.js";import"./zoom-BAlMIi5O.js";import"./DownOutlined-CLv9oSrw.js";import"./index-DSOWIBN6.js";import"./index-D3eZ-H7s.js";import"./mergeButtons-CGWovgZR.js";import"./Sider-CC_ePe8H.js";import"./row-B5tJJ9FS.js";import"./roundedArrow-BEYe8rhY.js";import"./colors-C2uSR3nC.js";import"./getNanoId-DD8laUaD.js";import"./InfoCircleOutlined-DRg6sOvc.js";import"./QuestionCircleOutlined-Bk-29y8U.js";import"./index-DdcAgIgo.js";const l=o=>{var s;f();const r=i.useRef(null);r.current&&((s=r.current)==null||s.update(o));const n=i.useCallback(p=>{r.current=g.confirm({...o,title:"Please confirm",content:"Are you sure?",colorType:p})},[o]);return e.jsxs(d,{children:[e.jsx(a,{onClick:()=>n(),children:"Open confirm"}),e.jsx(a,{type:"primary",colorType:"info",onClick:()=>n("info"),children:"Open confirm"}),e.jsx(a,{type:"primary",colorType:"warning",onClick:()=>n("warning"),children:"Open confirm"}),e.jsx(a,{type:"primary",colorType:"success",onClick:()=>n("success"),children:"Open confirm"}),e.jsx(a,{type:"primary",colorType:"danger",onClick:()=>n("danger"),children:"Open confirm"})]})},y=l;try{l.displayName="ConfirmMessageBoxComponent",l.__docgenInfo={description:"MessageBox Confirm component",displayName:"ConfirmMessageBoxComponent",props:{okText:{defaultValue:null,description:"",name:"okText",required:!1,type:{name:"string"}},onOk:{defaultValue:null,description:"",name:"onOk",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},cancelText:{defaultValue:null,description:"",name:"cancelText",required:!1,type:{name:"string"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},title:{defaultValue:null,description:"Form title",name:"title",required:!1,type:{name:"ReactNode"}},content:{defaultValue:null,description:"Form content",name:"content",required:!1,type:{name:"ReactNode"}},buttons:{defaultValue:null,description:"Form buttons",name:"buttons",required:!1,type:{name:"IFormButtons"}},colorType:{defaultValue:null,description:"Form type",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"neutral"'},{value:'"info"'},{value:'"danger"'}]}},language:{defaultValue:null,description:"Language",name:"language",required:!1,type:{name:"enum",value:[{value:'"ru"'},{value:'"en"'},{value:'"cn"'}]}},translation:{defaultValue:null,description:"Custom translation",name:"translation",required:!1,type:{name:"Partial<{ ok: string; cancel: string; attention: string; processing: string; pleaseWait: string; }>"}},closable:{defaultValue:null,description:"Whether a close (x) button is visible on top right of the modal dialog or not",name:"closable",required:!1,type:{name:"boolean"}},maskClosable:{defaultValue:null,description:"Whether to close the modal dialog when the mask (area outside the modal) is clicked",name:"maskClosable",required:!1,type:{name:"boolean"}},centered:{defaultValue:null,description:"Center modal",name:"centered",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Form icon",name:"icon",required:!1,type:{name:"ReactNode"}},onAfterClose:{defaultValue:null,description:"After controls close callback",name:"onAfterClose",required:!1,type:{name:"(() => void)"}},onCrossClose:{defaultValue:null,description:"On form close by close cross pressed callback",name:"onCrossClose",required:!1,type:{name:"(() => void)"}}}}}catch{}try{confirmMessageBox.displayName="confirmMessageBox",confirmMessageBox.__docgenInfo={description:"MessageBox Confirm component",displayName:"confirmMessageBox",props:{okText:{defaultValue:null,description:"",name:"okText",required:!1,type:{name:"string"}},onOk:{defaultValue:null,description:"",name:"onOk",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},cancelText:{defaultValue:null,description:"",name:"cancelText",required:!1,type:{name:"string"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},title:{defaultValue:null,description:"Form title",name:"title",required:!1,type:{name:"ReactNode"}},content:{defaultValue:null,description:"Form content",name:"content",required:!1,type:{name:"ReactNode"}},buttons:{defaultValue:null,description:"Form buttons",name:"buttons",required:!1,type:{name:"IFormButtons"}},colorType:{defaultValue:null,description:"Form type",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"neutral"'},{value:'"info"'},{value:'"danger"'}]}},language:{defaultValue:null,description:"Language",name:"language",required:!1,type:{name:"enum",value:[{value:'"ru"'},{value:'"en"'},{value:'"cn"'}]}},translation:{defaultValue:null,description:"Custom translation",name:"translation",required:!1,type:{name:"Partial<{ ok: string; cancel: string; attention: string; processing: string; pleaseWait: string; }>"}},closable:{defaultValue:null,description:"Whether a close (x) button is visible on top right of the modal dialog or not",name:"closable",required:!1,type:{name:"boolean"}},maskClosable:{defaultValue:null,description:"Whether to close the modal dialog when the mask (area outside the modal) is clicked",name:"maskClosable",required:!1,type:{name:"boolean"}},centered:{defaultValue:null,description:"Center modal",name:"centered",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Form icon",name:"icon",required:!1,type:{name:"ReactNode"}},onAfterClose:{defaultValue:null,description:"After controls close callback",name:"onAfterClose",required:!1,type:{name:"(() => void)"}},onCrossClose:{defaultValue:null,description:"On form close by close cross pressed callback",name:"onCrossClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const Q={title:"Controls/MessageBox/Confirm",component:y,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
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
                `}}}},t={args:{content:"Are you sure?"}};var u,c,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    content: 'Are you sure?'
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const Y=["Confirm"];export{t as Confirm,Y as __namedExportsOrder,Q as default};
