import {Switch} from 'antd';
import React from 'react';
import {IFormButton} from '@src/buttonsRow';
import {IBaseComponentApi} from "../../src/_shared/hooks/componentApiMethods/types/apiTypes";

export const FormLayoutSwitch = (formApi: IBaseComponentApi): {layout: IFormButton} => {
    return {
        layout: {
            type: 'element',
            title: (
                <Switch
                    checkedChildren={'hor'}
                    unCheckedChildren={'ver'}
                    onChange={val => {
                        formApi.updateProps({layout: val ? 'horizontal' : 'vertical'});
                    }}
                />
            ),
            position: 'left',
        },
    };
};