//import type {Meta, StoryObj} from '@storybook/react'
import { Meta, Source } from '@storybook/blocks';
import {DForm, DModel, IDFormApi} from '../../../../src/dynamic-form';
import {IDFormFieldInputProps, IDFormInputComponentProps, InputComponent} from "../../../../src/dynamic-form/components/inputComponent";
import React from "react";
import {IDFormFieldProps} from "../../../../src/dynamic-form/components/baseComponent";
import InputField from "./InputField";



export default {
    component: InputField,
    title: 'DForm/Components/InputComponent',
    tags: ['autodocs'],
    /*
    decorators: [
        () => (
            <DForm fieldsProps={{testField: fieldProps}} />
        ),
    ],*/

}

const model = new DModel("testForm");
//model.reinitModel(formProps, callbacks);

const formApi = {model: model} as IDFormApi
/*
export const Default = ()=>{
    return <DForm fieldsProps={{testField: fieldProps}} />
}*/


export const Default = {
    args: {
        label: 'Input field',
        tab: '222',
        requiredMark:true
    },
}

export const Secondary: { args: IDFormFieldInputProps } = {
    args: {
        component: InputComponent,
        label: 'Input field2',
        tab: '222',
        requiredMark:true
    },

    render: ({label, tab, requiredMark}: IDFormFieldInputProps ) => <DForm formId={"testForm"} fieldsProps={{field1: {...{label, tab, requiredMark}, component: InputComponent}}}/>
};

/*
export const Pinned = {
    args: {
        task: {
            ...Default.args.task,
            state: 'TASK_PINNED',
        },
    },
};

export const Archived = {
    args: {
        task: {
            ...Default.args.task,
            state: 'TASK_ARCHIVED',
        },
    },
};*/
