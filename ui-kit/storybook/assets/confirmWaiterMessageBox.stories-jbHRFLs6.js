import{j as e}from"./extends-BRD_ACZV.js";import{r as s}from"./index-uubelm5h.js";import{S as f,B as n}from"./button-DaZ-r7DY.js";import{u as g,m as y}from"./updateModalTheme-BLB1rFIj.js";import"./buttonsRow-DHM-ZdUh.js";import"./compact-item-Cc18Jwjb.js";import"./useToken-5hoSZr8q.js";import"./index-DaxZXI7c.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./button-Cxc_PIz_.js";import"./index-IYDviCHk.js";import"./headerRender-QuPi2rXv.js";import"./index-B7x7O6v2.js";import"./ExclamationCircleFilled-DfdUTXTz.js";import"./pickAttrs-CgiZ8JxW.js";import"./context-B9fTWsvw.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./motion-882RPeBL.js";import"./CloseOutlined-C4rdU_UQ.js";import"./KeyCode-DNlgD2sM.js";import"./ContextIsolator-DOOW9rnJ.js";import"./useClosable-B_cjSSA6.js";import"./zoom-BAlMIi5O.js";import"./DownOutlined-CLv9oSrw.js";import"./index-DSOWIBN6.js";import"./index-D3eZ-H7s.js";import"./InfoCircleOutlined-DRg6sOvc.js";import"./getNanoId-DD8laUaD.js";import"./QuestionCircleOutlined-Bk-29y8U.js";import"./index-DdcAgIgo.js";import"./Sider-CC_ePe8H.js";import"./row-B5tJJ9FS.js";import"./roundedArrow-BEYe8rhY.js";import"./colors-C2uSR3nC.js";const l=o=>{var i;g();const r=s.useRef(null);r.current&&((i=r.current)==null||i.update(o));const t=s.useCallback(p=>{r.current=y.confirmWaiter({...o,title:"Please confirm",content:"Are you sure?",waitContent:"Please wait",waitTitle:"Processing",colorType:p,onOk:d=>{setTimeout(()=>{d.destroy()},3e3)}})},[o]);return e.jsxs(f,{children:[e.jsx(n,{onClick:()=>t(),children:"Open confirm waiter"}),e.jsx(n,{type:"primary",colorType:"info",onClick:()=>t("info"),children:"Open confirm waiter"}),e.jsx(n,{type:"primary",colorType:"warning",onClick:()=>t("warning"),children:"Open confirm waiter"}),e.jsx(n,{type:"primary",colorType:"success",onClick:()=>t("success"),children:"Open confirm waiter"}),e.jsx(n,{type:"primary",colorType:"danger",onClick:()=>t("danger"),children:"Open confirm waiter"})]})},C=l;try{l.displayName="ConfirmWaiterMessageBoxComponent",l.__docgenInfo={description:"MessageBox Confirm Wait component",displayName:"ConfirmWaiterMessageBoxComponent",props:{okText:{defaultValue:null,description:"",name:"okText",required:!1,type:{name:"string"}},onOk:{defaultValue:null,description:"",name:"onOk",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},cancelText:{defaultValue:null,description:"",name:"cancelText",required:!1,type:{name:"string"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},buttons:{defaultValue:null,description:"Form buttons",name:"buttons",required:!1,type:{name:"IFormButtons"}},language:{defaultValue:null,description:"Language",name:"language",required:!1,type:{name:"enum",value:[{value:'"ru"'},{value:'"en"'},{value:'"cn"'}]}},translation:{defaultValue:null,description:"Custom translation",name:"translation",required:!1,type:{name:"Partial<{ ok: string; cancel: string; attention: string; processing: string; pleaseWait: string; }>"}},icon:{defaultValue:null,description:"Form icon",name:"icon",required:!1,type:{name:"ReactNode"}},colorType:{defaultValue:null,description:"Form type",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}},closable:{defaultValue:null,description:"Whether a close (x) button is visible on top right of the modal dialog or not",name:"closable",required:!1,type:{name:"boolean"}},maskClosable:{defaultValue:null,description:"Whether to close the modal dialog when the mask (area outside the modal) is clicked",name:"maskClosable",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"Form title",name:"title",required:!1,type:{name:"ReactNode"}},centered:{defaultValue:null,description:"Center modal",name:"centered",required:!1,type:{name:"boolean"}},content:{defaultValue:null,description:"Form content",name:"content",required:!1,type:{name:"ReactNode"}},onAfterClose:{defaultValue:null,description:"After controls close callback",name:"onAfterClose",required:!1,type:{name:"(() => void)"}},onCrossClose:{defaultValue:null,description:"On form close by close cross pressed callback",name:"onCrossClose",required:!1,type:{name:"(() => void)"}}}}}catch{}try{confirmWaiterMessageBox.displayName="confirmWaiterMessageBox",confirmWaiterMessageBox.__docgenInfo={description:"MessageBox Confirm Wait component",displayName:"confirmWaiterMessageBox",props:{okText:{defaultValue:null,description:"",name:"okText",required:!1,type:{name:"string"}},onOk:{defaultValue:null,description:"",name:"onOk",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},cancelText:{defaultValue:null,description:"",name:"cancelText",required:!1,type:{name:"string"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},buttons:{defaultValue:null,description:"Form buttons",name:"buttons",required:!1,type:{name:"IFormButtons"}},language:{defaultValue:null,description:"Language",name:"language",required:!1,type:{name:"enum",value:[{value:'"ru"'},{value:'"en"'},{value:'"cn"'}]}},translation:{defaultValue:null,description:"Custom translation",name:"translation",required:!1,type:{name:"Partial<{ ok: string; cancel: string; attention: string; processing: string; pleaseWait: string; }>"}},icon:{defaultValue:null,description:"Form icon",name:"icon",required:!1,type:{name:"ReactNode"}},colorType:{defaultValue:null,description:"Form type",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}},closable:{defaultValue:null,description:"Whether a close (x) button is visible on top right of the modal dialog or not",name:"closable",required:!1,type:{name:"boolean"}},maskClosable:{defaultValue:null,description:"Whether to close the modal dialog when the mask (area outside the modal) is clicked",name:"maskClosable",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"Form title",name:"title",required:!1,type:{name:"ReactNode"}},centered:{defaultValue:null,description:"Center modal",name:"centered",required:!1,type:{name:"boolean"}},content:{defaultValue:null,description:"Form content",name:"content",required:!1,type:{name:"ReactNode"}},onAfterClose:{defaultValue:null,description:"After controls close callback",name:"onAfterClose",required:!1,type:{name:"(() => void)"}},onCrossClose:{defaultValue:null,description:"On form close by close cross pressed callback",name:"onCrossClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const Y={title:"Controls/MessageBox/ConfirmWaiter",component:C,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
                    import React, {useCallback, useRef} from 'react';
                    import {Button} from @krinopotam/ui-kit/button';
                    import {IModalConfirmConfig, MessageBox, MessageBoxApi, useUpdateMessageBoxTheme} from @krinopotam/ui-kit/messageBox';
                    import {Space} from 'antd';
                    import {IColorType} from @krinopotam/ui-kit/button/button';
                    type IComponent = IModalConfirmConfig;
                    /** MessageBox Confirm Wait component */
                    export const ConfirmWaiterMessageBoxComponent = (props: IComponent): React.JSX.Element => {
                        useUpdateMessageBoxTheme(); //set current theme to messageBox
                        const curMessageBox = useRef<MessageBoxApi | null>(null);
                        if (curMessageBox.current) curMessageBox.current?.update(props);
                        const onClick = useCallback(
                            (colorType?: IColorType) => {
                                curMessageBox.current = MessageBox.confirmWaiter({
                                    ...props,
                                    title: 'Please confirm',
                                    content: 'Are you sure?',
                                    waitContent: 'Please wait',
                                    waitTitle: 'Processing',
                                    colorType: colorType,
                                    onOk: messageBox => {
                                        setTimeout(() => {
                                            messageBox.destroy();
                                        }, 3000);
                                    },
                                });
                            },
                            [props]
                        );
                        return (
                            <Space>
                                <Button onClick={() => onClick()}>Open confirm waiter</Button>
                                <Button type={'primary'} colorType="info" onClick={() => onClick('info')}>
                                    Open confirm waiter
                                </Button>
                                <Button type={'primary'} colorType="warning" onClick={() => onClick('warning')}>
                                    Open confirm waiter
                                </Button>
                                <Button type={'primary'} colorType="success" onClick={() => onClick('success')}>
                                    Open confirm waiter
                                </Button>
                                <Button type={'primary'} colorType="danger" onClick={() => onClick('danger')}>
                                    Open confirm waiter
                                </Button>
                            </Space>
                        );
                    };
                    export default ConfirmWaiterMessageBoxComponent;
                `}}}},a={args:{content:"Info"}};var u,c,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    content: 'Info'
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const Z=["ConfirmWaiter"];export{a as ConfirmWaiter,Z as __namedExportsOrder,Y as default};
