// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react'
import LinkField from "./linkField";
import {componentsCallbacks} from "../_common/componentsCallbacks";
import {IDFormLinkComponentCallbacks} from "@src/dynamicForm/components/linkComponent";

export default {
    title: 'DForm/Controls/Link',
    component: LinkField,
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
} satisfies Meta<typeof LinkField>

type Story = StoryObj<typeof LinkField>;
export const Playground: Story = {
    args: {
        label: 'Link field',
        href: 'https://ya.ru',
        value: 'Click me',
        target: '_blank',
        callbacks: {
            onClick: () => {alert('Link clicked')}
        }
    },
}

const linkCallbacks: IDFormLinkComponentCallbacks = {
    onClick: (...args) => { console.log('onClick', args) },
    onContextMenu: (...args) => { console.log('onContextMenu', args) },
    onDoubleClick: (...args) => { console.log('onDoubleClick', args) },
    onDrag: (...args) => { console.log('onDrag', args) },
    onDragEnd: (...args) => { console.log('onDragEnd', args) },
    onDragEnter: (...args) => { console.log('onDragEnter', args) },
    onDragExit: (...args) => { console.log('onDragExit', args) },
    onDragLeave: (...args) => { console.log('onDragLeave', args) },
    onDragOver: (...args) => { console.log('onDragOver', args) },
    onDragStart: (...args) => { console.log('onDragStart', args) },
    onDrop: (...args) => { console.log('onDrop', args) },
    onMouseDown: (...args) => { console.log('onMouseDown', args) },
    onMouseEnter: (...args) => { console.log('onMouseEnter', args) },
    onMouseLeave: (...args) => { console.log('onMouseLeave', args) },
    onMouseMove: (...args) => { console.log('onMouseMove', args) },
    onMouseOut: (...args) => { console.log('onMouseOut', args) },
    onMouseOver: (...args) => { console.log('onMouseOver', args) },
    onMouseUp: (...args) => { console.log('onMouseUp', args) },
}
const callbacks = {...componentsCallbacks, ...linkCallbacks}

export const Callbacks: Story = {
    args: {
        label: 'Link field',
        href: 'https://ya.ru',
        value: 'Click me',
        target: '_blank',
        callbacks: callbacks
    },
};
