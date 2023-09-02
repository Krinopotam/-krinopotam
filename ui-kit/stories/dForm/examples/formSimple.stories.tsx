import type {Meta, StoryObj} from '@storybook/react';
import {FormSimple} from "./formSimple";


export default {
    title: 'DForm/Examples/SimpleForm',
    component: FormSimple,
    tags: ['autodocs'],
    parameters: {
        docs: {
            source: {
                // language=text
                code: `// noinspection DuplicatedCode

import React from 'react';
import {DForm} from '@src/dynamic-form';
import {DFormConfig} from '@src/dynamic-form/configBuilder/dFormConfig';
import {InputComponentConfig} from '@src/dynamic-form/configBuilder/inputComponentConfig';
import {PasswordComponentConfig} from '@src/dynamic-form/configBuilder/passwordComponentConfig';

interface IFields {
    login: string;
    password: string;
}

const formProps = new DFormConfig<IFields>('Test form')
    .confirmChanges(true)
    .addFields(
        new InputComponentConfig<IFields>('login').label('Логин'),
        new PasswordComponentConfig<IFields>('password').label('Пароль')
    )
    .buttons({ok: {position: 'right'}})
    .getConfig();

export const FormSimple = (): React.JSX.Element => {
    return (
        <>
            {/*Description Start*/}
            <h1>Пример простой формы с вертикальным расположением подписей полей</h1>
            {/*Description End*/}
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
`
            }
        },
    },
} as Meta<typeof FormSimple>;

type Story = StoryObj<typeof FormSimple>;

export const Playground: Story = {
    args: {
        label: 'Text area field',
    },
};

