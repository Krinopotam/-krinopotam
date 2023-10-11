import {BaseField, IBaseFieldAny, IDFormBaseFieldProps} from '@src/dForm/fields/base/baseField';
import {TabsFieldRender} from '@src/dForm/fields/tabs/tabsFieldRender';
import React from 'react';
import {IDFormFieldsProps} from '@src/dForm';

export interface IDFormTabsFieldProps extends IDFormBaseFieldProps<TabsField> {
    tabs: Record<string, IDFormFieldsProps>;
}

export class TabsField extends BaseField<IDFormTabsFieldProps> {
    //region Fields collections
    /** field collection (plain list of all fields in all component tabs, including child fields) */
    private _fieldsMap: Record<string, IBaseFieldAny> = {};

    /** Root fields collection, grouped by inline row groups (if no field rowGroup, group will contain only one field with synthetic key) */
    private _groupsMap: Record<string, Record<string, IBaseFieldAny>> = {};

    /** root fields collection (only root fields, without children) */
    private _rootFields: Record<string, IBaseFieldAny> = {};

    /** Field collection tree (all fields in all component tabs, including child fields of other containers grouped by containers) */
    private _fieldsTree: Record<string, IBaseFieldAny | Record<string, IBaseFieldAny>> = {};
    //endregion

    //region Tabs grouped fields collections
    /** Tabs grouped fields collection maps (flat list of all fields in all component tabs, including child fields of other containers) */
    private _tabsFieldsMap: Record<string, TabsField['_fieldsMap']> = {};

    /** Grouped by tabs and inline group names root fields collection maps (if no field inline group, group will contain only one field with synthetic key) */
    private _tabsGroupsMap: Record<string, TabsField['_groupsMap']> = {};

    /** Tabs grouped root field collection (only fields placed directly on the tab, excluding child fields) */
    private _tabsRootFields: Record<string, TabsField['_rootFields']> = {};

    /** Tabs grouped fields tree (grouped by container name) */
    private _tabsFieldsTree: Record<string, TabsField['_fieldsTree']> = {};

    //endregion

    public initChildrenFields(): [TabsField['_fieldsMap'], TabsField['_groupsMap'], TabsField['_rootFields'], TabsField['_fieldsTree']] {
        const tabsProps = this.getProps();
        if (!tabsProps.tabs) return [{}, {}, {}, {}];

        this._tabsRootFields = {};
        this._tabsGroupsMap = {};

        for (const tabName in tabsProps.tabs) {
            const fieldsProps = tabsProps.tabs[tabName];
            [this._fieldsMap, this._groupsMap, this._rootFields, this._fieldsTree] = this.getFormModel().prepareFieldCollection(fieldsProps, this);

            this._tabsRootFields[tabName] = this._rootFields;
            this._tabsFieldsMap[tabName] = this._fieldsMap;
            this._tabsGroupsMap[tabName] = this._groupsMap;
            this._tabsFieldsTree[tabName] = this._fieldsTree;
        }

        return [this._fieldsMap, this._groupsMap, this._rootFields, this._fieldsTree];
    }

    protected render() {
        return <TabsFieldRender field={this} />;
    }

    //region Fields collection getters
    /** return@ field collection (plain list of all fields in all component tabs, including child fields) */
    public getFieldsMap() {
        return this._fieldsMap;
    }

    /** @return root fields collection, grouped by inline row groups (if no field rowGroup, group will contain only one field with synthetic key) */
    public getGroupsMap() {
        return this._groupsMap;
    }

    /** @return root fields collection (only root fields, without children) */
    public getRootFields() {
        return this._rootFields;
    }

    /** @return field collection tree (all fields in all component tabs, including child fields of other containers grouped by containers) */
    public getFieldsTree() {
        return this._fieldsTree;
    }
    //endregion

    //region Tabs grouped fields collections getters
    /**@return tabs grouped fields collection maps (flat list of all fields in all component tabs, including child fields of other containers) */
    public getTabsFieldsMap() {
        return this._tabsFieldsMap;
    }

    /**@return grouped by tabs and group names fields collection maps, only fields placed directly on the tab, excluding child fields (if no field inline group, group will contain only one field with synthetic key) */
    public getTabsGroupsMap() {
        return this._tabsGroupsMap;
    }

    /**@return tabs grouped root field collection (only fields placed directly on the tab, excluding child fields) */
    public getTabsRootFields() {
        return this._tabsRootFields;
    }

    /**@return tabs grouped fields tree (grouped by container name) */
    public getTabsFieldsTree() {
        return this._tabsFieldsTree;
    }
    //endregion
}
