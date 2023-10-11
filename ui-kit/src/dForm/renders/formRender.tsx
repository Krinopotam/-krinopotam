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
import {FieldsRender} from './fieldsRender';
import {DModel, IDFormApi} from '@src/dForm';
import {LoadingContainer} from '@src/loadingContainer';
import {IDFormProps} from "@src/dForm";

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
    const model = formApi.model;
    useExternalRenderCall(model);

    const labelCol = {span: (formProps.layout === 'horizontal' ? 8 : 24), ...formProps.labelCol};
    labelCol.style = {paddingBottom: 2, ...formProps.labelCol?.style}

    const wrapperCol = {span: (formProps.layout === 'horizontal' ? 16 : 24), ...formProps.wrapperCol};

    return (
        <div className={formProps.containerClassName ?? ''}>
            <LoadingContainer
                isLoading={model.isFormFetching() || (model.isFormSubmitting() && !formProps.confirmChanges)}
                notHideContent={true}
            >
                <ButtonsRowWrapper>
                    <Form
                        colon={false}
                        className={formProps.className}
                        name={model.getFormId()}
                        labelCol={labelCol}
                        wrapperCol={wrapperCol}
                        //onFinish={model.submit}
                        autoComplete="off"
                        labelAlign={formProps.labelAlign}
                        layout={formProps.layout === 'horizontal' ? 'horizontal' : 'vertical'}
                        requiredMark={formProps.requiredMark}
                    >
                        <FormInit model={model}/>

                        <FieldsRender model={model} groupsMap={model.getGroupsMap()}/>

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

const useExternalRenderCall = (model: DModel) => {
    const subscribe = model.subscribeRenderForm();

    const getSnapshot = () => {
        return model.getFormRenderSnapshot();
    };

    return useSyncExternalStore(subscribe, getSnapshot);
};

/** Special component to fire onFormInit event before another events*/
const FormInit = ({model}: { model: DModel }): React.JSX.Element | null => {
    useEffect(() => {
        model.setFormInit();
    }, [model]);

    return null;
};
