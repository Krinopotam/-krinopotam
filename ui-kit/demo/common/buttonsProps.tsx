import {Switch} from 'antd';
import React from 'react';
import {IDFormApi} from '@src/dForm';
import {IFormButton} from '@src/buttonsRow';

export const FormLayoutSwitch = (formApi: IDFormApi): {layout: IFormButton} => {
    return {
        layout: {
            type: 'element',
            title: (
                <Switch
                    checkedChildren={'hor'}
                    unCheckedChildren={'ver'}
                    onChange={val => {
                        formApi.setFormProps({layout: val ? 'horizontal' : 'vertical'});
                    }}
                />
            ),
            position: 'left',
        },
    };
};