// noinspection DuplicatedCode

import React from 'react';
import {DForm, IDFormApi, IDFormProps} from '@src/dForm';
import {InputField} from "@src/dForm/fields/input/inputField";
import {Button} from "@src/button";
import {Space, Switch} from "antd";

const api = {} as IDFormApi

const formProps: IDFormProps = {
    apiRef: api,
    formId: 'Test form',
    confirmChanges: true,
    fieldsProps: {
        field1: {component: InputField, label: 'Поле 1'},
        field2: {component: InputField, label: 'Поле 2', autoFocus: true},
    },

    buttons: {ok: {position: 'right'}},
};

let num = 0
const onClick1 = () => {
    num++
    api.setFormProps({
        fieldsProps: {
            field1: {component: InputField, label: `Поле 1 (${num})`},
            field2: {component: InputField, label: `Поле 2 (${num})`, autoFocus: true},
        }
    })
}

const onClick2 = () => {
    num++
    api.setFormProps({
        fieldsProps: {
            field1: {component: InputField, label: `Поле 1 (${num})`},
            field3: {component: InputField, label: `Поле 3 (${num})`, autoFocus: true},
        }
    })
}

const onClick3 = () => {
    api.model.getField('field1').setDisabled(true)
}

let layout = 0
const changeLayout = () => {
    layout = layout == 0 ? 1 : 0
    console.log(api.getFormProps())
    api.setFormProps({
        layout: layout == 0 ? 'vertical' : 'horizontal',
    })
}

export const FormSimple = (): React.JSX.Element => {
    return (
        <>
            {/*Description Start*/}
            <h1>Пример изменения пропсов формы через Api</h1>
            <p> Если идентификатор поля и тип его компонента не изменяется, то форма сохраняет установленные значения полей, и их состояния (disabled, readOnly, visible)</p>
            {/*Description End*/}
            <div style={{maxWidth: 500}}>
                <Space>
                    <Button type="primary" onClick={onClick1}>Набор полей 1</Button>
                    <Button type="primary" onClick={onClick2}>Набор полей 2</Button>
                    <Button type="primary" onClick={onClick3}>Заблокировать поле 1</Button>
                    <Switch checkedChildren={'Horizontal'} unCheckedChildren={'Vertical'} onChange={changeLayout}/>
                </Space>
                <DForm {...formProps} formStyle={{marginTop: 15}}/>
            </div>
        </>
    );
};
