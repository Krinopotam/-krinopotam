import React from 'react';
import {FormInfoProvider} from '@src/dFormConstructor/context/formInfoProvider';
import {FormPropsProvider} from '@src/dFormConstructor/context/formPropsProvider';
import {ConstructorLayout} from '@src/dFormConstructor/renders/constructorLayout';
import {TestProvider} from '@src/dFormConstructor/context/testProvider';
import {FormSourceProvider} from '@src/dFormConstructor/context/formSourceProvider';

export const DFormConstructor = (): React.JSX.Element => {
    return (
        <FormInfoProvider>
            <FormPropsProvider>
                <FormSourceProvider>
                    <TestProvider>
                        <ConstructorLayout />
                    </TestProvider>
                </FormSourceProvider>
            </FormPropsProvider>
        </FormInfoProvider>
    );
};
