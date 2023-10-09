/**
 * @RenderForm
 * @version 0.0.30.25
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import {ButtonsRowWrapper, IFormButtons} from '@src/buttonsRow';
import React, {useEffect, useSyncExternalStore} from 'react';

import {ButtonsRender} from '@src/modal';
import {Form} from 'antd';
import {FormBodyRender} from './formBodyRender';
import {IDFormApi} from '../hooks/api';
import {LoadingContainer} from '@src/loadingContainer';
import {IDFormProps} from "../dForm";

interface IFormRenderProps {
    /** Form props*/
    formProps: IDFormProps

    /** form api instance */
    formApi: IDFormApi;

    /** form buttons collection */
    formButtons: IFormButtons;

    /** is form loading status */
    isLoading?: boolean;

    /** is form in submitting process */
    isSubmitting?: boolean;
}

export const FormRender = ({formProps, formApi, formButtons}: IFormRenderProps): React.JSX.Element => {
    useExternalRenderCall(formApi);

    const labelCol = {span: (formProps.layout === 'horizontal' ? 8 : 24), ...formProps.labelCol};
    labelCol.style = {paddingBottom: 2, ...formProps.labelCol?.style}

    const wrapperCol = {span: (formProps.layout === 'horizontal' ? 16 : 24), ...formProps.wrapperCol};

    return (
        <div className={formProps.containerClassName ?? ''}>
            <LoadingContainer
                isLoading={formApi.model.isFormFetching() || (formApi.model.isFormSubmitting() && !formProps.confirmChanges)}
                notHideContent={true}
            >
                <ButtonsRowWrapper>
                    <Form
                        colon={false}
                        className={formProps.className}
                        name={formApi.getFormId()}
                        labelCol={labelCol}
                        wrapperCol={wrapperCol}
                        //onFinish={formApi.model.submit}
                        autoComplete="off"
                        labelAlign={formProps.labelAlign}
                        layout={formProps.layout === 'horizontal' ? 'horizontal' : 'vertical'}
                        requiredMark={formProps.requiredMark}
                    >
                        <FormInit formApi={formApi}/>

                        <FormBodyRender formProps={formProps} formApi={formApi}/>

                        <ButtonsRender
                            buttons={formButtons}
                            colorType={formProps.colorType}
                            buttonsApi={formApi.buttonsApi}
                            arrowsSelection={formProps.arrowsButtonsSelection}
                            context={formApi}
                        />
                    </Form>
                </ButtonsRowWrapper>
            </LoadingContainer>
        </div>
    );
};

const useExternalRenderCall = (formApi: IDFormApi) => {
    const subscribe = formApi.model.subscribeRenderForm();

    const getSnapshot = () => {
        return formApi.model.getFormRenderSnapshot();
    };

    return useSyncExternalStore(subscribe, getSnapshot);
};

/** Special component to fire onFormInit event before another events*/
const FormInit = ({formApi}: { formApi: IDFormApi }): React.JSX.Element | null => {
    useEffect(() => {
        formApi.model.setFormInit();
    }, [formApi.model]);

    return null;
};
