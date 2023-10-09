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
import {IDFormProps} from "../dForm";

interface IFormBodyRenderProps {
    /** Form props*/
    formProps: IDFormProps

    /** form api instance */
    formApi: IDFormApi;
}

/** Render form body */
export const FormBodyRender = ({formProps, formApi}: IFormBodyRenderProps): React.JSX.Element | null => {
    const tabs = formApi.model.getTabsProps();
    if (Object.keys(tabs).length === 0) return null;

    if (Object.keys(tabs).length === 1) {
        const firstTab = Object.keys(tabs)[0];
        return (
            <>
                <div style={{marginTop:formProps.contentIndent ?? 12}}>
                    <TabContentRender formProps={formProps} formApi={formApi} tabName={firstTab}/>
                </div>
            </>
        );
    } else {
        return <TabsRender formProps={formProps} formApi={formApi}/>;
    }
};
