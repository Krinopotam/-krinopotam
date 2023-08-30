import React from 'react';
import { DForm } from '../../dForm';
import { DFormConfig } from '../../configBuilder/dFormConfig';
import { InputComponentConfig } from '../../configBuilder/inputComponentConfig';
import { PasswordComponentConfig } from '../../configBuilder/passwordComponentConfig';
import { CustomComponentConfig } from "../../configBuilder/customComponentConfig";
import { DividerComponentConfig } from "../../configBuilder/dividerComponentConfig";
const formProps = new DFormConfig('Test form')
    .confirmChanges(true)
    .layout('horizontal')
    .labelCol({ style: { fontWeight: 600 } })
    .addFields(new CustomComponentConfig('statusRow').default(React.createElement(React.Fragment, null,
    React.createElement("b", null, "\u041E\u0431\u0440\u0430\u0437\u0435\u0446 "),
    React.createElement("i", null, "\u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430"))), new InputComponentConfig('login').label('Логин').requiredMark(true), new DividerComponentConfig('divider1').title('DividerTitle').style({ marginBottom: 0 }), new PasswordComponentConfig('password').label('Пароль'))
    .validationRules({
    login: [{ type: 'string', rule: "not-empty", message: 'Необходимо указать логин' }]
})
    .buttons({ ok: { position: 'right' } })
    .getConfig();
export const FormSimple = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "\u041F\u0440\u0438\u043C\u0435\u0440 \u043F\u0440\u043E\u0441\u0442\u043E\u0439 \u0444\u043E\u0440\u043C\u044B \u0441 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u043C \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u043C \u043F\u043E\u0434\u043F\u0438\u0441\u0435\u0439 \u043F\u043E\u043B\u0435\u0439"),
        React.createElement("div", { style: { maxWidth: 500 } },
            React.createElement(DForm, Object.assign({}, formProps)))));
};
