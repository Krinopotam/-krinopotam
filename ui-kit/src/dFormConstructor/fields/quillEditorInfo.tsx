import {PicLeftOutlined} from '@ant-design/icons';
import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import React from 'react';
import {IQuillEditorFieldProps, QuillEditorField} from '@src/dForm/fields/quillEditor';

export class QuillEditorInfo extends BaseComponentInfo {
    public override readonly TITLE = 'Quill Editor';
    public override readonly CODE = 'quillEditor';
    public override readonly CLASS = QuillEditorField;
    public override readonly INTERFACE_NAME = 'IQuillEditorFieldProps';
    public override readonly ICON = (<PicLeftOutlined />);

    constructor(params?: {id: string; label?: React.ReactNode | string}) {
        super(params);
        this.props['title'] = 'link';
    }

    override getPropsInfo() {
        const baseProps = super.getPropsInfo();
        return {
            ...baseProps,
        } satisfies IComponentPropsInfo<IQuillEditorFieldProps>;
    }
}
