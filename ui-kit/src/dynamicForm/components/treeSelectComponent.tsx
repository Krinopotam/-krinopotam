/**
 * @TreeSelectComponent
 * @version 0.0.30.36
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import {IDFormComponentProps, IDFormFieldProps} from './baseComponent';
import {ITreeSelectProps, ITreeSelectValue, TreeSelect} from '@src/treeselect';
import React, {CSSProperties, useCallback, useEffect, useMemo} from 'react';
import {HelpersObjects} from '@krinopotam/js-helpers';
import {DModel} from "@src/dynamicForm";

export type {ITreeSelectValue, ITreeSelectNode, ITreeSelectPlainValue, ITreeSelectDeletePromise, ITreeSelectSourcePromise} from '@src/treeselect';

//region Types
type IDFormFieldTreeSelectProps_ = ITreeSelectProps & IDFormFieldProps;

// !used in configGenerator parsing. Don't use multi rows comments!
export interface IDFormFieldTreeSelectProps extends Omit<IDFormFieldTreeSelectProps_, 'onReady'> {
    /** Default value */
    value?: ITreeSelectValue | string;

    onReady?: (model: DModel) => void;
}

//endregion

interface IDFormTreeSelectComponentProps extends IDFormComponentProps {
    fieldProps: IDFormFieldTreeSelectProps
}

export const TreeSelectComponent = ({formApi, fieldName, fieldProps}: IDFormTreeSelectComponentProps): React.JSX.Element => {
    const treeProps = useGetTreeSelectProps(fieldProps);
    const value = formApi.model.getFieldValue(fieldName) as ITreeSelectValue | string;

    const onChange = useCallback(
        (value: ITreeSelectValue) => {
            formApi.model.setFieldValue(fieldName, value ?? null);
            formApi.model.setFieldDirty(fieldName, true);

            fieldProps.onChange?.(value);
        },
        [fieldName, fieldProps, formApi.model]
    );
    const onBlur = useCallback(() => {
        formApi.model.setFieldTouched(fieldName, true);
    }, [fieldName, formApi.model]);

    const onClear = useCallback(() => {
        formApi.model.setFieldDirty(fieldName, true);
        formApi.model.setFieldTouched(fieldName, true);
        fieldProps.onClear?.();
    }, [fieldName, fieldProps, formApi.model]);

    useEffect(() => {
        formApi.model.setFieldReady(fieldName, true);
    }, [fieldName, formApi.model]);

    const style: CSSProperties = {width: '100%', ...fieldProps.style}

    return (
        <TreeSelect
            style={style}
            {...treeProps}
            autoFocus={fieldProps.autoFocus}
            defaultValueCallback={fieldProps.defaultValueCallback}
            disabled={formApi.model.isFieldDisabled(fieldName)}
            readOnly={formApi.model.isFieldReadOnly(fieldName)}
            value={value}
            placeholder={fieldProps.placeholder ?? 'Выберите из списка'}
            allowClear={fieldProps.allowClear !== false}

            /** --- Callbacks --------------- */
            onChange={onChange}
            onClear={onClear}
            onBlur={onBlur}
            onDataFetch={fieldProps.onDataFetch}
            onDataFetchComplete={fieldProps.onDataFetchComplete}
            onDataFetchError={fieldProps.onDataFetchError}
            onDataFetchSuccess={fieldProps.onDataFetchSuccess}
            onDelete={fieldProps.onDelete}
            onReady={() => fieldProps.onReady?.(formApi.model)}
            onKeyUp={fieldProps.onKeyUp}
            onKeyDown={fieldProps.onKeyDown}
            onClick={fieldProps.onClick}
            onSelect={fieldProps.onSelect}
            onMouseLeave={fieldProps.onMouseLeave}
            onMouseEnter={fieldProps.onMouseEnter}
            onMouseDown={fieldProps.onMouseDown}
            onFocus={fieldProps.onFocus}
            onDeselect={fieldProps.onDeselect}
            onDropdownVisibleChange={fieldProps.onDropdownVisibleChange}
            onInputKeyDown={fieldProps.onInputKeyDown}
            onTreeExpand={fieldProps.onTreeExpand}
            onPopupScroll={fieldProps.onPopupScroll}
            onSearch={fieldProps.onSearch}
            onTreeLoad={fieldProps.onTreeLoad}

        />
    );
};

const useGetTreeSelectProps = (props: IDFormFieldTreeSelectProps) => {
    return useMemo((): ITreeSelectProps => {
        const result = HelpersObjects.splitObject(props, [
            'component',
            'helpClass',
            'label',
            'placeholder',
            'tab',
            'inlineGroup',
            'value',
            'hidden',
            'dependsOn',
            'width',
            'autoFocus',
        ]);

        return result[1] as ITreeSelectProps;
    }, [props]);
};
