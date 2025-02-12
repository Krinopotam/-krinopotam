import React, {useContext} from 'react';
import {DForm} from '@src/dForm';
import {ErrorBoundary} from '@src/dFormConstructor/renders/formPreview/errorBoundary';
import {FormSourceContext} from '@src/dFormConstructor/context/formSourceProvider';
import {sourceToFormProps} from '@src/dFormConstructor/renders/sourceEditor/tools/sourceToFormProps';

export const FormPreview = ({horizontal}: {horizontal: boolean}): React.JSX.Element => {
    const {source} = useContext(FormSourceContext);
    const formProps = sourceToFormProps(source);
    const layout = horizontal ? 'horizontal' : 'vertical';
    console.log('FormPreview');
    return (
        <div style={{padding: '0 20px 20px 20px', overflow: 'auto', scrollbarColor: 'rgb(234, 234, 234)', scrollbarGutter: 'stable', scrollbarWidth: 'thin'}}>
            <ErrorBoundary>
                <DForm layout={layout} {...formProps} />{' '}
            </ErrorBoundary>
        </div>
    );
};
