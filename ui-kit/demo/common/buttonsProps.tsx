import {Switch} from 'antd';
import React from 'react';
import {IDFormApi} from '@src/dForm';

export const FormLayoutSwitch = (formApi: IDFormApi) => {
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