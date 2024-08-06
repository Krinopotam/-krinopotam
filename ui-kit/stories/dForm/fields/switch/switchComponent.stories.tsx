// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react';
import SwitchComponent from './switchComponent';

export default {
    title: 'DForm/Fields/Switch',
    component: SwitchComponent,
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
                    import {ISwitchFieldProps, SwitchField} from @krinopotam/ui-kit/dForm/fields/switch/switchField';
                    type IComponent = ISwitchFieldProps;
                    /** DForm Switch field */
                    export const SwitchComponent = (props: IComponent): React.JSX.Element => <DForm buttons={null} fieldsProps={{field1: {...props, component: SwitchField}}} />;
                    export default SwitchComponent;
                `
            }
            /* AUTO-SOURCE-INJECT-END */
        },
    },
} satisfies Meta<typeof SwitchComponent>;

type Story = StoryObj<typeof SwitchComponent>;

export const Playground: Story = {
    args: {
        label: 'Checkbox field',
    },
};
