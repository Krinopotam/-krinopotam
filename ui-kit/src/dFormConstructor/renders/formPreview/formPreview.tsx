import React, {useContext} from 'react';
import {DForm} from '@src/dForm';
import {FormPropsContext} from '@src/dFormConstructor/context/formPropsProvider';

export const FormPreview = ({horizontal}:{horizontal:boolean}): React.JSX.Element => {
    const {formProps} = useContext(FormPropsContext);
    const layout = horizontal ? 'horizontal' : 'vertical';
    return (
        <div style={{padding: '0 20px 20px 20px', overflow: 'auto', scrollbarColor: 'rgb(234, 234, 234)', scrollbarGutter: 'stable', scrollbarWidth: 'thin'}}>
            <DForm layout={layout} { ...formProps} />
        </div>
    );
};
