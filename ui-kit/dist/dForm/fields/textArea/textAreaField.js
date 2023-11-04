import { BaseField } from '../../../dForm/fields/base/baseField';
import React from 'react';
import { TextAreaFieldRender } from '../../../dForm/fields/textArea/textAreaFieldRender';
export class TextAreaField extends BaseField {
    render() {
        return React.createElement(TextAreaFieldRender, { field: this });
    }
}
//# sourceMappingURL=textAreaField.js.map