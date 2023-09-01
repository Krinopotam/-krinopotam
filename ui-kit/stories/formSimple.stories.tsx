import {DForm} from '../src/dynamic-form';
import {DFormConfig} from "../src/dynamic-form/configBuilder/dFormConfig";
import {InputComponentConfig} from "../src/dynamic-form/configBuilder/inputComponentConfig";
import {PasswordComponentConfig} from "../src/dynamic-form/configBuilder/passwordComponentConfig";

export default {
    component: DForm,
    title: 'Dynamic form',
    tags: ['autodocs'],
};

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
export const Default = {
    args: formProps,
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
