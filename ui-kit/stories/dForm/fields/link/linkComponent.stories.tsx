// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react';
import LinkComponent from './linkComponent';

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
                    import React from 'react';
                    import {DForm} from @krinopotam/ui-kit/dForm';
                    import {ILinkFieldProps, LinkField} from @krinopotam/ui-kit/dForm/fields/link/linkField';
                    type IComponent = ILinkFieldProps;
                    /** DForm Link field */
                    export const LinkComponent = (props: IComponent): React.JSX.Element => <DForm buttons={null} fieldsProps={{field1: {...props, component: LinkField}}} />;
                    export default LinkComponent;
                `,
            },
            /* AUTO-SOURCE-INJECT-END */
        },
    },
} satisfies Meta<typeof LinkComponent>;

type Story = StoryObj<typeof LinkComponent>;
export const Playground: Story = {
    args: {
        label: 'Link field',
        href: 'https://ya.ru',
        value: 'Click me',
        target: '_blank',
    },
};
