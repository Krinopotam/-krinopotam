import React from 'react';
import {FormInfoProvider} from '@src/dFormConstructor/context/formInfoProvider';
import {ConstructorLayout} from '@src/dFormConstructor/renders/constructorLayout';
import {SelectedFieldProvider} from '@src/dFormConstructor/context/selectedFieldProvider';

export const DFormConstructor = (): React.JSX.Element => {
    return (
        <FormInfoProvider>
            <SelectedFieldProvider>
                <ConstructorLayout />
            </SelectedFieldProvider>
        </FormInfoProvider>
    );
};
