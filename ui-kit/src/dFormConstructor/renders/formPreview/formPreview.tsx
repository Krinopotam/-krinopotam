import React, {useContext, useRef, useSyncExternalStore} from 'react';
import {DForm} from '@src/dForm';
import {ErrorBoundary} from '@src/dFormConstructor/renders/formPreview/errorBoundary';
import {ErrorMessage} from '@src/dFormConstructor/renders/formPreview/errorMessage';
import {FormInfoContext} from '@src/dFormConstructor/context/formInfoProvider';

export const FormPreview = (): React.JSX.Element => {
    const {formInfo} = useContext(FormInfoContext);
    const source = formInfo.toSource();
    const prevSourceRef = useRef(source);

    useSyncExternalStore(formInfo.formPreviewSubscribe.bind(formInfo), formInfo.getFormPreviewRerenderSnapshot.bind(formInfo));

    const formProps = formInfo.getProps();
    const clearError = prevSourceRef.current !== source ? {} : undefined;
    prevSourceRef.current = source;

    return (
        <div style={{padding: '0 20px 20px 20px', overflow: 'auto', scrollbarColor: 'rgb(234, 234, 234)', scrollbarGutter: 'stable', scrollbarWidth: 'thin'}}>
            {formProps === null ? (
                <ErrorMessage />
            ) : (
                <ErrorBoundary clearError={clearError}>
                    <DForm {...formProps} />{' '}
                </ErrorBoundary>
            )}
        </div>
    );
};
