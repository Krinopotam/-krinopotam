import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {KeyOutlined} from '@ant-design/icons';
import React from 'react';
import {IPasswordFieldProps, PasswordField} from '@src/dForm/fields/password';

export class PasswordInfo extends BaseComponentInfo {
    public override readonly TITLE = 'Password';
    public override readonly CODE = 'password';
    public override readonly CLASS = PasswordField;
    public override readonly INTERFACE_NAME = 'IPasswordFieldProps';
    public override readonly ICON = (<KeyOutlined />);

    override getPropsInfo() {
        const baseProps = super.getPropsInfo();
        return {
            ...baseProps,
            showCount: 'boolean',
            maxLength: 'number',
            autocomplete: 'string',
            spellcheck: ['true' , 'false']
        } satisfies IComponentPropsInfo<IPasswordFieldProps>;
    }
}
