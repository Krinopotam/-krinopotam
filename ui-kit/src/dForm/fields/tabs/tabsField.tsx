import {BaseField, IBaseFieldAny, IDFormBaseFieldProps} from '@src/dForm/fields/base/baseField';
import {TabsFieldRender} from '@src/dForm/fields/tabs/tabsFieldRender';
import React from 'react';
import {IDFormFieldsProps} from '@src/dForm';

export interface IDFormTabsFieldProps extends IDFormBaseFieldProps<TabsField> {
    /** Tabs fields properties */
    tabs: Record<string, IDFormFieldsProps>;

    /** Tabs size (default small) */
    size?: 'small' | 'middle' | 'large';

    /** Tabs type */
    type?: 'line' | 'card' | 'editable-card';

    /** Tabs style */
    tabsStyle?: React.CSSProperties;

    /** Tab bar style */
    tabBarStyle?: React.CSSProperties;

    /** Active tab*/
    activeTab?: string;

    /*************** Callbacks *****************/
    /** Fires when the disable state of a tab changes  */
    onTabDisabledStateChanged?: (tabName: string, value: boolean, field: TabsField) => void;

    /** Fires when the active tab changes  */
    onActiveTabChanged?: (tabName: string, field: TabsField) => void;
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

    /** Current active tab */
    private _activeTab: string = '';

    /** disabled tabs statuses */
    private _disabledTabs: Record<string, boolean | undefined> = {};

    initChildrenFields(): [TabsField['_fieldsMap'], TabsField['_groupsMap'], TabsField['_rootFields'], TabsField['_fieldsTree']] {
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
    getFieldsMap() {
        return this._fieldsMap;
    }

    /** @return root fields collection, grouped by inline row groups (if no field rowGroup, group will contain only one field with synthetic key) */
    getGroupsMap() {
        return this._groupsMap;
    }

    /** @return root fields collection (only root fields, without children) */
    getRootFields() {
        return this._rootFields;
    }

    /** @return field collection tree (all fields in all component tabs, including child fields of other containers grouped by containers) */
    getFieldsTree() {
        return this._fieldsTree;
    }

    //endregion

    //region Tabs grouped fields collections getters
    /**@return tabs grouped fields collection maps (flat list of all fields in all component tabs, including child fields of other containers) */
    getTabsFieldsMap() {
        return this._tabsFieldsMap;
    }

    /**@return grouped by tabs and group names fields collection maps, only fields placed directly on the tab, excluding child fields (if no field inline group, group will contain only one field with synthetic key) */
    getTabsGroupsMap() {
        return this._tabsGroupsMap;
    }

    /**@return tabs grouped root field collection (only fields placed directly on the tab, excluding child fields) */
    getTabsRootFields() {
        return this._tabsRootFields;
    }

    /**@return tabs grouped fields tree (grouped by container name) */
    getTabsFieldsTree() {
        return this._tabsFieldsTree;
    }

    //endregion

    //region Tabs methods
    /**
     * Gets the current disabled status of the tab
     * @returns Tab disabled status
     */
    isTabDisabled(tabName: string): boolean {
        return !!this._disabledTabs[tabName];
    }

    /**
     * Sets a disabled status to the tab and to the all tab fields
     * @param tabName
     * @param value - disabled status
     * @param noEvents - do not emit onTabDisabledStateChanged and fields onDisabledStateChanged callback
     * @param noRerender - do not emit re-rendering
     */
    setTabDisabled(tabName: string, value: boolean, noEvents?: boolean, noRerender?: boolean) {
        const fields = this._tabsRootFields[tabName];
        if (!fields) return;

        const prevValue = this.isTabDisabled(tabName);
        if (prevValue === value) return;

        this._disabledTabs[tabName] = value;

        for (const fieldName in fields) {
            const field = fields[fieldName];
            field.setDisabled(value, noEvents, noRerender);
        }

        if (!noEvents) this.getProps().onTabDisabledStateChanged?.(tabName, value, this);

        if (!noRerender) this.emitRender();
    }

    /** @return current active tab */
    getActiveTab() {
        return this._activeTab;
    }

    /** Set current active tab
     * @param tabName - tab name
     * @param noEvents - do not emit onTabDisabledStateChanged and fields onDisabledStateChanged callback
     * @param noRerender - do not emit re-rendering
     * */
    setActiveTab(tabName: string, noEvents?: boolean, noRerender?: boolean) {
        if (!this._tabsFieldsMap[tabName]) return;

        this._activeTab = tabName;

        if (!noEvents) this.getProps().onActiveTabChanged?.(tabName, this);

        if (!noRerender) this.emitRender();
    }

    //endregion
}
