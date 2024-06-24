// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react';
import NumberComponent from './numberComponent';

export default {
    title: 'DForm/Fields/Number',
    component: NumberComponent,
    tags: ['autodocs'],
    parameters: {
        docs: {
            /* AUTO-SOURCE-INJECT-START */
            source: {
                language: 'tsx',
                format: true,
                // language=text
                code: `
                    import React from "react";
                    import {DForm} from @krinopotam/ui-kit/dForm";
                    import {INumberFieldProps, NumberField} from @krinopotam/ui-kit/dForm/fields/number/numberField";
                    type IComponent = INumberFieldProps;
                    /** DForm Number field */
                    export const NumberComponent = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {field1: {...props, component: NumberField} }
                        }/>
                    export default NumberComponent
                `,
            },
            /* AUTO-SOURCE-INJECT-END */
        },
    },
} satisfies Meta<typeof NumberComponent>;

type Story = StoryObj<typeof NumberComponent>;

export const Playground: Story = {
    args: {
        label: 'Number field',
    },
};
