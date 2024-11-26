/**
 * @RenderForm
 * @version 0.0.30.25
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import {ButtonsRow, ButtonsRowWrapper, IFormButtons} from '@src/buttonsRow';
import React, {useEffect, useSyncExternalStore} from 'react';

import {Form} from 'antd';
import {FieldsRender} from './fieldsRender';
import {DModel, IDFormApi, IDFormProps} from '@src/dForm';
import {LoadingContainer} from '@src/loadingContainer';

interface IFormRenderProps {
    /** Form props*/
    formProps: IDFormProps;

    /** form api instance */
    formApi: IDFormApi;

    /** form buttons collection */
    formButtons: IFormButtons;
}

export const FormRender = ({formProps, formApi, formButtons}: IFormRenderProps): React.JSX.Element => {
    const model = formApi.model;
    useSyncExternalStore(model.subscribeRenderForm.bind(model), model.getFormRenderSnapshot.bind(model));

    const labelCol = {span: formProps.layout === 'horizontal' ? 8 : 24, ...formProps.labelCol};
    labelCol.style = {paddingBottom: 2, ...formProps.labelCol?.style};

    const wrapperCol = {span: formProps.layout === 'horizontal' ? 16 : 24, ...formProps.wrapperCol};

    return (
        <div className={formProps.containerClassName ?? ''} style={formProps.containerStyle}>
            <LoadingContainer
                isLoading={model.isFormFetching() || (model.isFormSubmitting() && !formProps.confirmChanges)}
                notHideContent={true}
                language={formProps.language}
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
                        style={formProps.formStyle}
                    >
                        <FormInit model={model} />

                        <FieldsRender fields={model.getRootFields()} formProps={formProps} />

                        <ButtonsRow
                            buttons={formButtons}
                            apiRef={formApi.getButtonsApi()}
                            color={formProps.colorType}
                            arrowsSelection={formProps.arrowsButtonsSelection}
                            style={formProps.buttonsRowStyle}
                            styles={formProps.buttonsRowStyles}
                            context={formApi}
                        />
                    </Form>
                </ButtonsRowWrapper>
            </LoadingContainer>
        </div>
    );
};

/** Special component to fire onFormInit event before another events*/
const FormInit = ({model}: {model: DModel}): React.JSX.Element | null => {
    useEffect(() => {
        model.onFormInit();
    }, [model]);

    return null;
};
