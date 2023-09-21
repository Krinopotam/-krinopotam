/**
 * @BaseComponent
 * @version 0.0.33.19
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import React, {useSyncExternalStore} from 'react';

import Animate from 'rc-animate';
import {Form} from 'antd';
import {IDFormApi} from '../hooks/api';
import {DModel} from "../dModel";
import {AnyType} from '@krinopotam/service-types'
import {IDFormFieldCustomProps} from "@src/dynamicForm/components/customComponent";
import {IDFormFieldCheckBoxProps} from "@src/dynamicForm/components/checkboxComponent";
import {IDFormFieldDateTimeProps} from "@src/dynamicForm/components/dateTimeComponent";
import {IDFormFieldDividerProps} from "@src/dynamicForm/components/dividerComponent";
import {IDFormFieldDragAndDropProps} from "@src/dynamicForm/components/dragAndDropComponent";
import {IDFormFieldInputProps} from "@src/dynamicForm/components/inputComponent";
import {IDFormFieldLinkProps} from "@src/dynamicForm/components/linkComponent";
import {IDFormFieldNumberProps} from "@src/dynamicForm/components/numberComponent";
import {IDFormFieldPasswordProps} from "@src/dynamicForm/components/passwordComponent";
import {IDFormFieldSelectProps} from "@src/dynamicForm/components/selectComponent";
import {IDFormFieldSwitchProps} from "@src/dynamicForm/components/switchComponent";
import {IDFormFieldTabulatorGridProps} from "@src/dynamicForm/components/tabulatorGridComponent";
import {IDFormFieldTextAreaProps} from "@src/dynamicForm/components/textAreaComponent";
import {IDFormFieldQuillEditorProps} from "@src/dynamicForm/components/quillEditorComponent";
import {IDFormFieldTreeSelectProps} from "@src/dynamicForm/components/treeSelectComponent";

// !used in configGenerator parsing. Don't use multi rows comments!
export interface IDFormFieldProps {
    /** Field React component */
    component: React.FC<IDFormComponentProps>;

    /** Help class */
    helpClass?: string;

    /** Field label */
    label?: string | React.ReactNode;

    /** Field placeholder*/
    placeholder?: string;

    /** tab name */
    tab?: string;

    /** inline group name */
    inlineGroup?: string;

    /** Field default value */
    value?: AnyType;

    /** If field default state is hidden */
    hidden?: boolean;

    /** If field default state is disabled */
    disabled?: boolean;

    /** If field default state is readonly */
    readOnly?: boolean;

    /** List of fields that must be filled in order to display this field */
    dependsOn?: string[];

    /** Field width */
    width?: string | number;

    /** Get focus by default */
    autoFocus?: boolean;

    /** Mark Field Label as Required */
    requiredMark?: boolean

    /** Field CSS style */
    style?: React.CSSProperties

    /** Row field container CSS style */
    rowStyle?: React.CSSProperties

    //--- callbacks -----------------------

    /** fires when the value of a field changed */
    onValueChanged?: (value: unknown, prevValue: unknown, model: DModel) => void;

    /** fires when the touched state of a field changed */
    onTouchedStateChanged?: (state: boolean, model: DModel) => void;

    /** fires when the dirty state of a field changed */
    onDirtyStateChanged?: (state: boolean, model: DModel) => void;

    /** fires when the error of a field changed */
    onErrorChanged?: (error: string, model: DModel) => void;

    /** fires when the hidden state of a field changed */
    onHiddenStateChanged?: (state: boolean, model: DModel) => void;

    /** fires when read only state of a field changed */
    onReadOnlyStateChanged?: (state: boolean, model: DModel) => void;

    /** fires when label of a field changed */
    onLabelChanged?: (label: React.ReactNode, prevLabel: React.ReactNode, model: DModel) => void;

    /** fires when the disable state of a field changes  */
    onDisabledStateChanged?: (state: boolean, model: DModel) => void;

    /** fires when a field is completely initialized, its data is loaded */
    onReady?: (model: DModel) => void;

    /** fires when a field validated */
    onValidated?: (value: unknown, error: string, isSubmit: boolean, model: DModel) => void;
}

/** Fields properties collection */
export type IDFormFieldsProps = Record<string, IDFormAllFieldsProps>;

export type IDFormAllFieldsProps = IDFormFieldProps
    | IDFormFieldCheckBoxProps
    | IDFormFieldCustomProps
    | IDFormFieldDateTimeProps
    | IDFormFieldDividerProps
    | IDFormFieldDragAndDropProps
    | IDFormFieldInputProps
    | IDFormFieldLinkProps
    | IDFormFieldNumberProps
    | IDFormFieldPasswordProps
    | IDFormFieldSelectProps
    | IDFormFieldSwitchProps
    | IDFormFieldTabulatorGridProps
    | IDFormFieldTextAreaProps
    | IDFormFieldQuillEditorProps
    | IDFormFieldTreeSelectProps

/** Field component properties */
export interface IDFormComponentProps {
    /** field name */
    fieldName: string;

    /** field props */
    fieldProps: IDFormFieldProps

    /** form api instance */
    formApi: IDFormApi;
}

export const BaseComponent = ({fieldName, fieldProps, formApi, noLabel}: IDFormComponentProps & { noLabel?: boolean }): React.JSX.Element => {
    useExternalRenderCall(formApi, fieldName);

    const error = formApi.model.getFieldError(fieldName);
    const fieldHidden = formApi.model.isFieldHidden(fieldName);

    const Component = fieldProps.component;

    const style: React.CSSProperties = {
        //marginBottom: formProps.layout !== 'horizontal' ? 0 : undefined,
        width: fieldProps.width,
        flexGrow: fieldProps.width ? 0 : 1,
        flexShrink: fieldProps.width ? 0 : 1,
        flexBasis: fieldProps.width ? undefined : 0,
        marginBottom: Component.name === 'DividerComponent' || Component.name === 'CustomComponent' ? 0 : undefined, //WORKAROUND
        ...fieldProps.rowStyle
    };

    return (
        <Animate component="" transitionName="zoom">
            {!fieldHidden ? (
                <Form.Item
                    key={'item_' + fieldName}
                    label={!noLabel ? fieldProps.label : undefined}
                    //name={fieldName} //!Do not specify "name". Components inside Form.Item with "name" property will turn into controlled mode, which makes "defaultValue" and "value" not work anymore
                    //help={(fieldTouched || formSubmitCount > 0) && error ? error : ''}
                    //validateStatus={(fieldTouched || formSubmitCount > 0) && error ? 'error' : ''}
                    help={error || undefined}
                    validateStatus={error ? 'error' : undefined}
                    required={!!fieldProps.requiredMark}
                    style={style}
                >
                    <Component fieldName={fieldName} fieldProps={fieldProps} formApi={formApi}/>
                </Form.Item>
            ) : null}
        </Animate>
    );
};

const useExternalRenderCall = (formApi: IDFormApi, fieldName: string) => {
    const subscribe = formApi.model.subscribeRenderField(fieldName);

    const getSnapshot = () => {
        const snaps = formApi.model.getFieldRenderSnapshots();
        if (!snaps[fieldName]) return undefined;
        return snaps[fieldName];
    };

    return useSyncExternalStore(subscribe, getSnapshot);
};
