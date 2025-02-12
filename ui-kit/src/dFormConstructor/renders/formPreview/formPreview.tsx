import React, {useContext, useRef} from 'react';
import {DForm} from '@src/dForm';
import {ErrorBoundary} from '@src/dFormConstructor/renders/formPreview/errorBoundary';
import {FormSourceContext} from '@src/dFormConstructor/context/formSourceProvider';
import {sourceToFormProps} from '@src/dFormConstructor/renders/sourceEditor/tools/sourceToFormProps';
import {ErrorMessage} from '@src/dFormConstructor/renders/formPreview/errorMessage';

export const FormPreview = ({horizontal}: {horizontal: boolean}): React.JSX.Element => {
    const {source} = useContext(FormSourceContext);
    const prevSourceRef = useRef(source);

    const formProps = sourceToFormProps(source);
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
