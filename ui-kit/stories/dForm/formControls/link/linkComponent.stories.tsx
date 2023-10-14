// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react'
import LinkComponent from "./linkComponent";

export default {
    title: 'DForm/Fields/Link',
    component: LinkComponent,
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
                    import {DForm} from @krinopotam/ui-kit/dynamicForm";
                    import {IDFormFieldLinkProps, LinkComponent} from @krinopotam/ui-kit/dynamicForm/components/linkComponent";
                    type IComponent = Omit<IDFormFieldLinkProps, 'component'>
                    /** DynamicForm Link component */
                    export const LinkField = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {field1: {...props, component: LinkComponent} satisfies IDFormFieldLinkProps}
                        }
                    />
                    export default LinkField
                `
            }
            /* AUTO-SOURCE-INJECT-END */
        }
    },
} satisfies Meta<typeof LinkComponent>

type Story = StoryObj<typeof LinkComponent>;
export const Playground: Story = {
    args: {
        label: 'Link field',
        href: 'https://ya.ru',
        value: 'Click me',
        target: '_blank',
    },
}

