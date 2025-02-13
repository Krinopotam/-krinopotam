import React, {useContext, useRef} from 'react';
import {DForm} from '@src/dForm';
import {ErrorBoundary} from '@src/dFormConstructor/renders/formPreview/errorBoundary';
import {ErrorMessage} from '@src/dFormConstructor/renders/formPreview/errorMessage';
import {FormPropsContext} from '@src/dFormConstructor/context/formPropsProvider';

export const FormPreview = ({horizontal}: {horizontal: boolean}): React.JSX.Element => {
    const {source, formProps} = useContext(FormPropsContext);
    const prevSourceRef = useRef(source);

    const layout = horizontal ? 'horizontal' : 'vertical';
    console.log('FormPreview');

    const clearError = prevSourceRef.current !== source ? {} : undefined;
    prevSourceRef.current = source;
    return (
        <div style={{padding: '0 20px 20px 20px', overflow: 'auto', scrollbarColor: 'rgb(234, 234, 234)', scrollbarGutter: 'stable', scrollbarWidth: 'thin'}}>
            {formProps === null ? (
                <ErrorMessage />
            ) : (
                <ErrorBoundary clearError={clearError}>
                    <DForm layout={layout} {...formProps} />{' '}
                </ErrorBoundary>
            )}
        </div>
    );
};
