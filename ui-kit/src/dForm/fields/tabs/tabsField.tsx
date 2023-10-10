import {BaseField, IBaseFieldAny, IDFormBaseFieldProps} from '@src/dForm/fields/base/baseField';
import {TabsFieldRender} from '@src/dForm/fields/tabs/tabsFieldRender';
import React from 'react';
import {DModel, IDFormFieldsProps} from '@src/dForm';

export interface IDFormTabsFieldProps extends IDFormBaseFieldProps<TabsField> {
    tabs: Record<string, IDFormFieldsProps>;
}

export class TabsField extends BaseField<IDFormTabsFieldProps> {
    /** Tabs fields collection */
    private _tabsFields: Record<string, Record<string, IBaseFieldAny>> = {};

    /** field collection (plain list) */
    private _plainFields: DModel['_plainFields'] = {};

    /** field collection (only root fields, without children) */
    private _rootFields: DModel['_rootFields'] = {};

    /** field collection (hierarchical form, grouped by containers) */
    private _treeFields: DModel['_treeFields'] = {};

    public initChildrenFields(): [DModel['_plainFields'], DModel['_rootFields'], DModel['_treeFields']] {
        const tabsProps = this.getProps();
        if (!tabsProps.tabs) return [{}, {}, {}];

        this._tabsFields = {};
        for (const tabName in tabsProps.tabs) {
            const fieldsProps = tabsProps.tabs[tabName];
            [this._plainFields, this._rootFields, this._treeFields] = this.getFormModel().prepareFieldCollection(fieldsProps);
            this._tabsFields[tabName] = this._rootFields;
        }

        return [this._plainFields, this._rootFields, this._treeFields];
    }

    protected render() {
        return <TabsFieldRender field={this} />;
    }

    public getTabsFields() {
        return this._tabsFields;
    }
}
