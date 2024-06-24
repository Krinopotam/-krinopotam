// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react';
import DividerComponent from './dividerComponent';

export default {
    title: 'DForm/Fields/Divider',
    component: DividerComponent,
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
                    import {InputField} from @krinopotam/ui-kit/dForm/fields/input/inputField";
                    import {DividerField, IDividerFieldProps} from @krinopotam/ui-kit/dForm/fields/divider/dividerField";
                    type IComponent = IDividerFieldProps;
                    /** DForm Divider field */
                    export const DividerComponent = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {
                                field1: {label: 'Field 1', component: InputField},
                                divider: {...props, component: DividerField},
                                field2: {label: 'Field 2', component: InputField} ,
                            }
                        }
                    />
                    export default DividerComponent
                `,
            },
            /* AUTO-SOURCE-INJECT-END */
        },
    },
} satisfies Meta<typeof DividerComponent>;

type Story = StoryObj<typeof DividerComponent>;
export const WithTitle: Story = {
    args: {
        value: 'Divider',
        plain: true,
    },
};

export const TitleLeft: Story = {
    args: {
        value: 'Divider',
        orientation: 'left',
        plain: true,
    },
};

export const TitleRight: Story = {
    args: {
        value: 'Divider',
        orientation: 'right',
        plain: true,
    },
};
