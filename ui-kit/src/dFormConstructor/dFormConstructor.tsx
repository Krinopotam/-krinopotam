import React from 'react';
import {FormInfoProvider} from '@src/dFormConstructor/context/formInfoProvider';
import {FormPropsProvider} from '@src/dFormConstructor/context/formPropsProvider';
import {ConstructorLayout} from '@src/dFormConstructor/renders/constructorLayout';

export const DFormConstructor = (): React.JSX.Element => {
    return (
        <FormInfoProvider>
            <FormPropsProvider>
                <ConstructorLayout />
            </FormPropsProvider>
        </FormInfoProvider>
    );
};
