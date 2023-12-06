// noinspection DuplicatedCode

import type {Meta, StoryObj} from '@storybook/react'
import SelectComponent from "./selectComponent";

export default {
    title: 'DForm/Fields/Select',
    component: SelectComponent,
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
                    import {ISelectFieldProps, SelectField} from @krinopotam/ui-kit/dForm/fields/select/selectField";
                    import {SelectDataSet} from "../../../datasets/select";
                    type IComponent = ISelectFieldProps
                    /** DForm Select field */
                    export const SelectComponent = (props: IComponent): React.JSX.Element => <DForm
                        buttons={null}
                        fieldsProps={
                            {field1: {...props, dataSet:SelectDataSet, component: SelectField}}
                        }
                    />
                    export default SelectComponent
                `
            }
            /* AUTO-SOURCE-INJECT-END */
        }
    },
} satisfies Meta<typeof SelectComponent>

type Story = StoryObj<typeof SelectComponent>;
export const Playground: Story = {
    args: {
        label: 'Select field',
    },
}
