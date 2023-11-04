import { BaseField } from '../../../dForm/fields/base/baseField';
import React from 'react';
import { TabulatorGridFieldRender } from '../../../dForm/fields/tabulatorGrid/tabulatorGridFieldRender';
export class TabulatorGridField extends BaseField {
    render() {
        return React.createElement(TabulatorGridFieldRender, { field: this });
    }
}
//# sourceMappingURL=tabulatorGridField.js.map