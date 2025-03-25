import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {IInputFieldProps, InputField} from '@src/dForm/fields/input';
import {FieldStringOutlined} from '@ant-design/icons';
import React from 'react';

export class InputInfo extends BaseComponentInfo {
    public override readonly TITLE = 'Input';
    public override readonly CODE = 'input';
    public override readonly CLASS = InputField;
    public override readonly INTERFACE_NAME = 'IInputFieldProps';
    public override readonly ICON = (<FieldStringOutlined/>);

    override getPropsInfo() {
        const baseProps = super.getPropsInfo();
        return {
            ...baseProps,
            maxLength: 'number',
            showCount: 'boolean',
            spellcheck: ['true', 'false'],
        } satisfies IComponentPropsInfo<IInputFieldProps>;
    }
}
