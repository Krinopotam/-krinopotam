import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {FontSizeOutlined} from '@ant-design/icons';
import React from 'react';
import {ITextAreaFieldProps, TextAreaField} from '@src/dForm/fields/textArea';

export class TextAreaInfo extends BaseComponentInfo {
    public override readonly TITLE = 'TextArea';
    public override readonly CODE = 'textArea';
    public override readonly CLASS = TextAreaField;
    public override readonly INTERFACE_NAME = 'ITextAreaFieldProps';
    public override readonly ICON = (<FontSizeOutlined />);

    override getPropsInfo() {
        const baseProps = super.getPropsInfo();
        return {
            ...baseProps,
            showCount: 'boolean',
            maxLength: 'number',
            autoSize: 'boolean',
            cols: 'number',
            rows: 'number',
            wrap: ['soft', 'hard'],
        } satisfies IComponentPropsInfo<ITextAreaFieldProps>;
    }
}
