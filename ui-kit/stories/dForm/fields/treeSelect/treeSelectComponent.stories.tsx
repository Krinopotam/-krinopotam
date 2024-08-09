// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react';
import TreeSelectComponent from './treeSelectComponent';
import {fn} from "@storybook/test";

export default {
    title: 'DForm/Fields/TreeSelect',
    component: TreeSelectComponent,
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
                    import {ITreeSelectFieldProps, TreeSelectField} from @krinopotam/ui-kit/dForm/fields/treeSelect/treeSelectField";
                    import {TreeSelectDataSet} from "../../../datasets/treeSelect";
                    type IComponent = ITreeSelectFieldProps
                    /** DForm TreeSelect field */
                    export const TreeSelectComponent = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {field1: {...props, dataSet:TreeSelectDataSet, component: TreeSelectField}}
                        }
                    />
                    export default TreeSelectComponent
                `
            }
            /* AUTO-SOURCE-INJECT-END */
        },
    },
} satisfies Meta<typeof TreeSelectComponent>;

type Story = StoryObj<typeof TreeSelectComponent>;
export const Playground: Story = {
    args: {
        label: 'TreeSelect field',
        onReadyStateChanged: fn(),
        onChange: fn(),
        onDataFetch: fn()
    },
};
