// noinspection DuplicatedCode

import React from 'react';
import {DForm} from '../../dForm';
import {DFormConfig} from '../../configBuilder/dFormConfig';
import {InputComponentConfig} from '../../configBuilder/inputComponentConfig';
import {PasswordComponentConfig} from '../../configBuilder/passwordComponentConfig';
import {CustomComponentConfig} from "../../configBuilder/customComponentConfig";
import {DividerComponentConfig} from "../../configBuilder/dividerComponentConfig";

interface IFields {
    login: string;
    password: string;
    divider1: string
    statusRow: React.ReactNode;
}

const formProps = new DFormConfig<IFields>('Test form')
    .confirmChanges(true)
    .layout('horizontal')
    .labelCol({style: {fontWeight: 600}})
    .addFields(
        new CustomComponentConfig<IFields>('statusRow').value(<><b>Образец </b><i>контента</i></>),
        new InputComponentConfig<IFields>('login').label('Логин').requiredMark(true),
        new DividerComponentConfig<IFields>('divider1').value('DividerTitle').style({marginBottom: 0}),
        new PasswordComponentConfig<IFields>('password').label('Пароль'),
    )
    .validationRules({
        login: [{type: 'string', rule: "not-empty", message: 'Необходимо указать логин'}]
    })
    .buttons({ok: {position: 'right'}})
    .getConfig();

export const FormSimple = (): React.JSX.Element => {
    return (
        <>
            <h1>Пример простой формы с вертикальным расположением подписей полей</h1>
            <div style={{maxWidth: 500}}>
                <DForm {...formProps} />
            </div>
        </>
    );
};
