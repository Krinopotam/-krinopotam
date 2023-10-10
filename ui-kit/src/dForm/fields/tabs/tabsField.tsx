import {BaseField, IDFormBaseFieldProps} from '@src/dForm/fields/base/baseField';
import {TabsFieldRender} from '@src/dForm/fields/tabs/tabsFieldRender';
import React from 'react';
import {IDFormFieldsProps} from '@src/dForm';

export interface IDFormTabsFieldProps extends IDFormBaseFieldProps<TabsField> {
    tabs: Record<string, IDFormFieldsProps>;
}

export class TabsField extends BaseField<IDFormTabsFieldProps> {
    private _fieldsPlain
    protected render() {
        return <TabsFieldRender field={this} />;
    }
}
