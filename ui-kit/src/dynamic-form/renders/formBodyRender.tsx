/**
 * @RenderFormBody
 * @version 0.0.28.80
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import {IDFormApi} from '../hooks/api';
import React from 'react';
import {TabContentRender} from './tabContentRender';
import {TabsRender} from './tabsRender';
import {theme} from 'antd';
import {IDFormProps} from "../dForm";

const {useToken} = theme;

interface IFormBodyRenderProps {
    /** Form props*/
    formProps:IDFormProps

    /** form api instance */
    formApi: IDFormApi;
}

/** Render form body */
export const FormBodyRender = ({formProps, formApi}: IFormBodyRenderProps): React.JSX.Element | null => {
    const {token} = useToken();
    const tabs = formApi.model.getTabsProps();
    if (Object.keys(tabs).length === 0) return null;

    const indentStyle = {height: formProps.contentIndent ?? 12, background: token.colorBgElevated};
    if (Object.keys(tabs).length === 1) {
        const firstTab = Object.keys(tabs)[0];
        return (
            <>
                <div style={indentStyle} />
                <TabContentRender formProps={formProps} formApi={formApi} tabName={firstTab} />
            </>
        );
    } else {
        return <TabsRender formProps={formProps} formApi={formApi} />;
    }
};
