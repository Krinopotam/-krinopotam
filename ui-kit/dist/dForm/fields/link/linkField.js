import { BaseField } from '../../../dForm/fields/base/baseField';
import React from 'react';
import { LinkFieldRender } from '../../../dForm/fields/link/linkFieldRender';
export class LinkField extends BaseField {
    render() {
        return React.createElement(LinkFieldRender, { field: this });
    }
}
