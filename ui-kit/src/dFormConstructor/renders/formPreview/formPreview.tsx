import {useEvent} from '@krinopotam/common-hooks';
import {DForm} from '@src/dForm';
import {IBaseField} from '@src/dForm/fields/base';
import {FormInfoContext} from '@src/dFormConstructor/context/formInfoProvider';
import {SelectedFieldContext} from '@src/dFormConstructor/context/selectedFieldProvider';
import {FormInfo} from '@src/dFormConstructor/fields/formInfo';
import {ErrorBoundary} from '@src/dFormConstructor/renders/formPreview/errorBoundary';
import {ErrorMessage} from '@src/dFormConstructor/renders/formPreview/errorMessage';
import React, {CSSProperties, useCallback, useContext, useRef, useSyncExternalStore} from 'react';

export const FormPreview = (): React.JSX.Element => {
    const {formInfo} = useContext(FormInfoContext);
    const {selectedField, setSelectedField} = useContext(SelectedFieldContext);

    const source = formInfo.toSource();
    const prevSourceRef = useRef(source);

    useSyncExternalStore(formInfo.formPreviewSubscribe.bind(formInfo), formInfo.getFormPreviewRerenderSnapshot.bind(formInfo));

    const formProps = formInfo.getProps(selectedField);
    const clearError = prevSourceRef.current !== source ? {} : undefined;
    prevSourceRef.current = source;

    const onHighlightedFieldChanged = useOnHighlightedFieldChanged();
    const formWrapperStyle: CSSProperties | undefined = selectedField instanceof FormInfo ? {border: 'dashed 1px blue'} : undefined;

    const onClick = useEvent((e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedField === formInfo) {
            setSelectedField(undefined);
            return;
        }

        setSelectedField(formInfo);
    });

    return (
        <div
            style={{
                padding: '0 20px 20px 20px',
                overflow: 'auto',
                scrollbarColor: 'rgb(234, 234, 234)',
                scrollbarGutter: 'stable',
                scrollbarWidth: 'thin',
            }}
        >
            {formProps === null ? (
                <ErrorMessage />
            ) : (
                <ErrorBoundary clearError={clearError}>
                    <div style={formWrapperStyle} onClick={onClick}>
                        <DForm {...formProps} formMode={'constructor'} onHighlightedFieldChanged={onHighlightedFieldChanged} />
                    </div>
                </ErrorBoundary>
            )}
        </div>
    );
};

const useOnHighlightedFieldChanged = () => {
    const {formInfo} = useContext(FormInfoContext);
    const {setSelectedField} = useContext(SelectedFieldContext);

    return useCallback(
        (field: IBaseField | undefined, _prevField: IBaseField | undefined, extraKey:string | undefined) => {
            const fieldId = field ? field.getId() : undefined;
            let selectedField = fieldId ? formInfo.getFieldInfoById(fieldId) : undefined;
            if (extraKey) selectedField = selectedField?.getChildById(extraKey, false);
            setSelectedField(selectedField);
        },
        [formInfo, setSelectedField]
    );
};
