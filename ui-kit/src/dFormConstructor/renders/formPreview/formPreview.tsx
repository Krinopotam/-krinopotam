import {SelectedFieldContext} from '@src/dFormConstructor/context/selectedFieldProvider';
import {FormInfo} from '@src/dFormConstructor/fields/formInfo';
import React, {CSSProperties, useContext, useRef, useSyncExternalStore} from 'react';
import {DForm} from '@src/dForm';
import {ErrorBoundary} from '@src/dFormConstructor/renders/formPreview/errorBoundary';
import {ErrorMessage} from '@src/dFormConstructor/renders/formPreview/errorMessage';
import {FormInfoContext} from '@src/dFormConstructor/context/formInfoProvider';

export const FormPreview = (): React.JSX.Element => {
    const {formInfo} = useContext(FormInfoContext);
    const {selectedField} = useContext(SelectedFieldContext);

    const source = formInfo.toSource();
    const prevSourceRef = useRef(source);

    useSyncExternalStore(formInfo.formPreviewSubscribe.bind(formInfo), formInfo.getFormPreviewRerenderSnapshot.bind(formInfo));

    const formProps = formInfo.getProps(selectedField);
    const clearError = prevSourceRef.current !== source ? {} : undefined;
    prevSourceRef.current = source;

    const formWrapperStyle: CSSProperties | undefined =
        selectedField instanceof FormInfo
            ? {
                  border: 'dashed 1px blue',
              }
            : undefined;

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
                    <div style={formWrapperStyle}>
                        <DForm {...formProps} formMode={'constructor'} />
                    </div>
                </ErrorBoundary>
            )}
        </div>
    );
};
