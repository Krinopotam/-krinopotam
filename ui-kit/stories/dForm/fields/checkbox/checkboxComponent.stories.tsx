// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react';
import CheckboxComponent from './checkboxComponent';

export default {
    title: 'DForm/Fields/Checkbox',
    component: CheckboxComponent,
    tags: ['autodocs'],
    parameters: {
        docs: {
            /* AUTO-SOURCE-INJECT-START */
            source: {
                language: 'tsx',
                format: true,
                // language=text
                code: `
                    import React from 'react';
                    import {DForm} from @krinopotam/ui-kit/dForm';
                    import {CheckboxField, ICheckboxFieldProps} from @krinopotam/ui-kit/dForm/fields/checkbox/checkboxField';
                    type IComponent = ICheckboxFieldProps;
                    /** DForm Checkbox component */
                    export const CheckboxComponent = (props: IComponent): React.JSX.Element => (
                        <DForm buttons={null} fieldsProps={{field1: {...props, component: CheckboxField}}} />
                    );
                    export default CheckboxComponent;
                `
            }
            /* AUTO-SOURCE-INJECT-END */
        },
    },
} satisfies Meta<typeof CheckboxComponent>;

type Story = StoryObj<typeof CheckboxComponent>;

export const Playground: Story = {
    args: {
        label: 'Checkbox field',
    },
};
