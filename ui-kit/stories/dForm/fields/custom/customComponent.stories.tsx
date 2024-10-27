// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react';
import CustomComponent from './customComponent';
import React from 'react';
import {fn} from "@storybook/test";

export default {
    title: 'DForm/Fields/Custom',
    component: CustomComponent,
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
                    import {CustomField, ICustomFieldProps} from @krinopotam/ui-kit/dForm/fields/custom/customField";
                    type IComponent = ICustomFieldProps;
                    /** DForm Custom field */
                    export const CustomComponent = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {field1: {...props, component: CustomField}}
                        }
                    />
                    export default CustomComponent
                `
            }
            /* AUTO-SOURCE-INJECT-END */
        },
    },
} satisfies Meta<typeof CustomComponent>;

type Story = StoryObj<typeof CustomComponent>;
export const Playground: Story = {
    args: {
        label: 'Custom field',
        defaultValue: (
            <h3>
                Any <span style={{color: 'red'}}>react</span> component or <span style={{color: 'blue'}}>string</span>{' '}
            </h3>
        ),
        onRender: fn()
    },
};
