import {LinkOutlined} from '@ant-design/icons';
import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import React from 'react';
import {ILinkFieldProps, LinkField} from '@src/dForm/fields/link';

export class LinkInfo extends BaseComponentInfo {
    public override readonly CODE = 'link';
    public override readonly CLASS = LinkField;
    public override readonly INTERFACE_NAME = 'ILinkFieldProps';
    public override readonly ICON = (<LinkOutlined />);
    public override readonly TITLE = 'Link';

    constructor(params?: {id: string; label?: React.ReactNode | string}) {
        super(params);
        this.props['title'] = 'link';
    }

    override getPropsInfo() {
        const {placeholder, id, label, ...baseProps} = super.getPropsInfo();
        return {
            id,
            label,
            title: 'string',
            href: 'string',
            target: ['_blank', '_self', '_parent', '_top'],
            ...baseProps,
        } satisfies IComponentPropsInfo<ILinkFieldProps>;
    }
}
