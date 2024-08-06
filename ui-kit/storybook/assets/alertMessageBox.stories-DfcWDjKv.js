import{j as e}from"./extends-CKwpSh1k.js";import{r as i}from"./index-CTjT7uj6.js";import{S as d,B as r}from"./button-LFZW5K-D.js";import{u as f,m as y}from"./updateModalTheme-ft5i8WYC.js";import"./draggableRender-pz472epS.js";import"./index-DGqZ_Opy.js";import"./compact-item-ayXXrr5p.js";import"./useToken-DpCeTUe_.js";import"./index-Boe84S0F.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./button-Crg2y5WX.js";import"./index-BC6X-wEl.js";import"./helpersObjects-NFjaQN06.js";import"./helpersString-BLksZHLM.js";import"./v4-CQkTLCs1.js";import"./QuestionCircleOutlined-C5RUC8Xy.js";import"./motion-Gs4finkr.js";import"./index-CiVP2nX_.js";import"./CloseOutlined-CjEpmO_q.js";import"./KeyCode-DNlgD2sM.js";import"./context-DoEgZWg9.js";import"./wrapNativeSuper-CxOa5OEc.js";import"./ExclamationCircleFilled-DJhyVcaJ.js";import"./index-DEvyy-28.js";import"./motion-4S5rSXvC.js";import"./useClosable-ezpuUIzh.js";import"./zoom-uZCgAuxp.js";import"./InfoCircleOutlined-CU1G_igP.js";import"./DownOutlined-D2B1m1ns.js";import"./index-CwWsuzc7.js";import"./buttonsRow-D6o4mJn6.js";import"./Sider-D04GUbHb.js";import"./row-DM0mVdYK.js";import"./roundedArrow-ChNxh3ai.js";import"./colors-Chrt_s-B.js";import"./index-BRV0Se7Z.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const l=o=>{var s;f();const n=i.useRef(null);n.current&&((s=n.current)==null||s.update(o));const t=i.useCallback(m=>{n.current=y.alert({...o,colorType:m})},[o]);return e.jsxs(d,{children:[e.jsx(r,{onClick:()=>t(),children:"Open alert"}),e.jsx(r,{type:"primary",colorType:"info",onClick:()=>t("info"),children:"Open alert"}),e.jsx(r,{type:"primary",colorType:"warning",onClick:()=>t("warning"),children:"Open alert"}),e.jsx(r,{type:"primary",colorType:"success",onClick:()=>t("success"),children:"Open alert"}),e.jsx(r,{type:"primary",colorType:"danger",onClick:()=>t("danger"),children:"Open alert"})]})},g=l;try{l.displayName="AlertMessageBoxComponent",l.__docgenInfo={description:"MessageBox Alert component",displayName:"AlertMessageBoxComponent",props:{okText:{defaultValue:null,description:"",name:"okText",required:!1,type:{name:"string"}},onOk:{defaultValue:null,description:"",name:"onOk",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},title:{defaultValue:null,description:"Form title",name:"title",required:!1,type:{name:"ReactNode"}},content:{defaultValue:null,description:"Form content",name:"content",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"Form icon",name:"icon",required:!1,type:{name:"ReactNode"}},colorType:{defaultValue:null,description:"Form type",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}},buttons:{defaultValue:null,description:"Form buttons",name:"buttons",required:!1,type:{name:"IFormButtons"}},centered:{defaultValue:null,description:"Center modal",name:"centered",required:!1,type:{name:"boolean"}},closable:{defaultValue:null,description:"Whether a close (x) button is visible on top right of the modal dialog or not",name:"closable",required:!1,type:{name:"boolean"}},maskClosable:{defaultValue:null,description:"Whether to close the modal dialog when the mask (area outside the modal) is clicked",name:"maskClosable",required:!1,type:{name:"boolean"}},onAfterClose:{defaultValue:null,description:"After controls close callback",name:"onAfterClose",required:!1,type:{name:"(() => void)"}},onCrossClose:{defaultValue:null,description:"On form close by close cross pressed callback",name:"onCrossClose",required:!1,type:{name:"(() => void)"}}}}}catch{}try{alertMessageBox.displayName="alertMessageBox",alertMessageBox.__docgenInfo={description:"MessageBox Alert component",displayName:"alertMessageBox",props:{okText:{defaultValue:null,description:"",name:"okText",required:!1,type:{name:"string"}},onOk:{defaultValue:null,description:"",name:"onOk",required:!1,type:{name:"((messageBox: MessageBoxApi) => boolean | void)"}},title:{defaultValue:null,description:"Form title",name:"title",required:!1,type:{name:"ReactNode"}},content:{defaultValue:null,description:"Form content",name:"content",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"Form icon",name:"icon",required:!1,type:{name:"ReactNode"}},colorType:{defaultValue:null,description:"Form type",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}},buttons:{defaultValue:null,description:"Form buttons",name:"buttons",required:!1,type:{name:"IFormButtons"}},centered:{defaultValue:null,description:"Center modal",name:"centered",required:!1,type:{name:"boolean"}},closable:{defaultValue:null,description:"Whether a close (x) button is visible on top right of the modal dialog or not",name:"closable",required:!1,type:{name:"boolean"}},maskClosable:{defaultValue:null,description:"Whether to close the modal dialog when the mask (area outside the modal) is clicked",name:"maskClosable",required:!1,type:{name:"boolean"}},onAfterClose:{defaultValue:null,description:"After controls close callback",name:"onAfterClose",required:!1,type:{name:"(() => void)"}},onCrossClose:{defaultValue:null,description:"On form close by close cross pressed callback",name:"onCrossClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const ee={title:"Controls/MessageBox/Alert",component:g,tags:["autodocs"],parameters:{docs:{source:{language:"tsx",format:!0,code:`
                    import React, {useCallback, useRef} from 'react';
                    import {Button} from @krinopotam/ui-kit/button';
                    import {IModalAlertConfig, MessageBox, MessageBoxApi, useUpdateMessageBoxTheme} from @krinopotam/ui-kit/messageBox';
                    import {Space} from 'antd';
                    import {IColorType} from @krinopotam/ui-kit/button/button';
                    type IComponent = IModalAlertConfig;
                    /** MessageBox Alert component */
                    export const AlertMessageBoxComponent = (props: IComponent): React.JSX.Element => {
                        useUpdateMessageBoxTheme(); //set current theme to messageBox
                        const curMessageBox = useRef<MessageBoxApi|null>(null);
                        if (curMessageBox.current) curMessageBox.current?.update(props)
                        const onClick = useCallback(
                            (colorType?: IColorType) => {
                                curMessageBox.current = MessageBox.alert({...props, colorType: colorType});
                            },
                            [props]
                        );
                        return (
                            <Space>
                                <Button onClick={() => onClick()}>
                                    Open alert
                                </Button>
                                <Button type={'primary'} colorType="info" onClick={() => onClick('info')}>
                                    Open alert
                                </Button>
                                <Button type={'primary'} colorType="warning" onClick={() => onClick('warning')}>
                                    Open alert
                                </Button>
                                <Button type={'primary'} colorType="success" onClick={() => onClick('success')}>
                                    Open alert
                                </Button>
                                <Button type={'primary'} colorType="danger" onClick={() => onClick('danger')}>
                                    Open alert
                                </Button>
                            </Space>
                        );
                    };
                    export default AlertMessageBoxComponent;
                `}}}},a={args:{content:"Info"}};var p,c,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    content: 'Info'
  }
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const oe=["Alert"];export{a as Alert,oe as __namedExportsOrder,ee as default};
