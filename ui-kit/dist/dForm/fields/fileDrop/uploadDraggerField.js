import { BaseField } from '../../../dForm/fields/base/baseField';
import React from 'react';
import { UploadDraggerFieldRender } from '../../../dForm/fields/fileDrop/uploadDraggerFieldRender';
export class UploadDraggerField extends BaseField {
    getValue() {
        return super.getValue();
    }
    setValue(value, noEvents, noRerender) {
        super.setValue(value, noEvents, noRerender);
    }
    render() {
        return React.createElement(UploadDraggerFieldRender, { field: this });
    }
}
