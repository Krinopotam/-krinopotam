import {FormInfo} from "@src/dFormConstructor/fields/formInfo";
import React from 'react';
import {FormInfoProvider} from '@src/dFormConstructor/context/formInfoProvider';
import {ConstructorLayout} from '@src/dFormConstructor/renders/constructorLayout';
import {SelectedFieldProvider} from '@src/dFormConstructor/context/selectedFieldProvider';

export const DFormConstructor = (props:{initialFormInfo?: FormInfo}): React.JSX.Element => {
    return (
        <FormInfoProvider initialForm={props.initialFormInfo}>
            <SelectedFieldProvider>
                <ConstructorLayout />
            </SelectedFieldProvider>
        </FormInfoProvider>
    );
};
