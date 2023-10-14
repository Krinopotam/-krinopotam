/**
 * @DynamicForm
 * @version 0.0.37.76
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import './css/antdAnimation.css';

import {DModel, IDFormBaseCallbacks, IDFormModelCallbacks} from './dModel';
import {IButtonsRowApi, IFormButtons} from 'src/buttonsRow';
import {IDFormApi, useInitFormApi} from './hooks/api';
import React, {useEffect, useRef, useState} from 'react';
import {TPromise} from '@krinopotam/service-types';
import {FormRender} from './renders/formRender';
import {IRuleType} from './validators/baseValidator';
import {HelpersStrings} from '@krinopotam/js-helpers';
import {useModelCallbacks} from './hooks/callbacks';
import {useGetButtons} from './hooks/buttons';
import {useUpdateMessageBoxTheme} from '@src/messageBox';
import {useGetActualProps} from '@krinopotam/common-hooks';
import {ColProps} from "antd";
import {FormLabelAlign} from "antd/es/form/interface";
import {RequiredMark} from "antd/es/form/Form";
import {IColorType} from "@src/button/button";
import {IDFormFieldsProps} from "@src/dForm/index";

//import './dynamicForm.css';

//region Types
/** Form properties*/
// !used in configGenerator parsing. Don't use multi rows comments!
export interface IDFormProps extends IDFormCallbacks {
    /** A mutable object to merge with these controls api */
    apiRef?: unknown;

    /** Form formId */
    formId?: string;

    /** Buttons properties */
    buttons?: IFormButtons | null;

    /** Form CSS class */
    className?: string;

    /** Form container class name */
    containerClassName?: string;

    /** Indent from the beginning of the controls (default 12)  */
    contentIndent?: number;

    /** Form data */
    dataSet?: IDFormDataSet;

    /** Parent form data */
    parentDataSet?: IDFormDataSet;

    /** Fields properties */
    fieldsProps?: IDFormFieldsProps;

    /** Form color type */
    colorType?: IColorType;

    /** label column parameters, for example span:'8' */
    labelCol?: ColProps;

    /** wrapper column parameters, for example span:'16' */
    wrapperCol?: ColProps;

    /** text align of label of all items */
    labelAlign?: FormLabelAlign

    /** Form layout (horizontal or vertical). Vertical is default */
    layout?: 'horizontal' | 'vertical';

    /** Form mode */
    formMode?: IDFormMode;

    /** The form is read only */
    readOnly?: boolean;

    /** Automatically disable fields if they depend on fields whose value is not set. Otherwise, such fields will be automatically hidden */
    disableDepended?: boolean;

    /** Tabs panes height (default 40)*/
    tabsHeight?: number

    /** Form parent item data */
    // formParentData?: IFormDataSet;

    /** No use controls data */
    unfilledForm?: boolean;

    /** Validation rules */
    validationRules?: IDFormFieldValidationRules;

    /** Should the form request confirmation before the form submitting or cancel, if the form data was changed by the user  */
    confirmChanges?: boolean;

    /** Confirm message before the form submitting */
    submitConfirmMessage?: React.ReactNode;

    /** Required mark style. Can use required mark or optional mark. You can not config to single Form.Item since this is a Form level config */
    requiredMark?: RequiredMark;

    /** allow select buttons using arrows keys */
    arrowsButtonsSelection?: boolean;
}

export type IDFormCallbacks = IDFormBaseCallbacks<IDFormApi>

export type IDFormMode = 'view' | 'create' | 'update' | 'clone' | 'delete';

/** Form data set type */
export interface IDFormDataSet extends Record<string, unknown> {
    id?: string | number;
}

export type IDFormDataSourcePromise = TPromise<{ data: Record<string, unknown> }, { message: string; code: number }>;

export type IDFormFieldValidationRules = Record<string, IRuleType[]>;


//endregion

export const DForm = (props: IDFormProps): React.JSX.Element => {
    useUpdateMessageBoxTheme(); //set current theme to messageBox

    const [formProps, updateFormProps] = useGetActualProps(props); //props can be set both by parent component and via api

    //region Common component states
    const [formId] = useState(formProps.formId ?? 'dForm-' + HelpersStrings.getUuid());
    const [formApi] = useState((formProps.apiRef || {}) as IDFormApi);
    const [buttonsApi] = useState({} as IButtonsRowApi);
    const formButtons = useGetButtons(formProps, formApi); //init buttons
    //endregion

    const modelCallbacks = useModelCallbacks(formProps, formApi);
    const model = useFormModel(formId, formProps, modelCallbacks);
    useInitFormApi(formApi, model, formProps, buttonsApi, updateFormProps);

    useInitialFetchData(formApi);

    useFormMounted(formApi);

    return <FormRender formProps={formProps} formApi={formApi} formButtons={formButtons}/>;
};

const useFormModel = (formId: string, formProps: IDFormProps, callbacks: IDFormModelCallbacks) => {
    const modelRef = useRef<DModel>();
    if (!modelRef.current) modelRef.current = new DModel(formId);
    modelRef.current.initModel(formProps, callbacks);

    return modelRef.current;
};

const useFormMounted = (formApi: IDFormApi) => {
    useEffect(() => {
        formApi.model.setFormMounted(true);
        return () => {
            formApi.model.setFormMounted(false);
        };
    });
};

const useInitialFetchData = (formApi: IDFormApi) => {
    useEffect(() => {
        const formMode = formApi.model.getFormMode();
        if (formMode !== 'update' && formMode !== 'clone' && formMode !== 'view') return;
        formApi.model.fetchData();
    }, [formApi]);
};
