import { BaseField } from '../../../dForm/fields/base/baseField';
import { TabsFieldRender } from '../../../dForm/fields/tabs/tabsFieldRender';
import React from 'react';
export class TabsField extends BaseField {
    constructor() {
        super(...arguments);
        this._tabsFieldsMap = {};
        this._tabsRootFields = {};
        this._activeTab = '';
        this._disabledTabs = {};
        this._hiddenTabs = {};
        this._readOnlyTabs = {};
        this._tabRenderListeners = {};
        this._tabRenderSnapshots = {};
    }
    initChildrenFields() {
        const tabsProps = this.getProps();
        if (!tabsProps.tabs)
            return [{}, {}];
        this._tabsRootFields = {};
        for (const tabName in tabsProps.tabs) {
            const fieldsProps = tabsProps.tabs[tabName];
            const [fieldsMap, rootFields] = this.getModel().prepareFieldCollection(fieldsProps, this);
            this._tabsRootFields[tabName] = rootFields;
            this._tabsFieldsMap[tabName] = fieldsMap;
            this._tabRenderSnapshots[tabName] = {};
            this._tabRenderListeners[tabName] = [];
            this.fieldsMap = Object.assign(Object.assign({}, this.fieldsMap), fieldsMap);
            this.rootFields = Object.assign(Object.assign({}, this.rootFields), rootFields);
        }
        return [this.fieldsMap, this.rootFields];
    }
    render() {
        return React.createElement(TabsFieldRender, { field: this });
    }
    renderField() {
        if (this.parent)
            return super.renderField();
        return this.render();
    }
    getTabsFieldsMap() {
        return this._tabsFieldsMap;
    }
    getTabsRootFields() {
        return this._tabsRootFields;
    }
    isTabDisabled(tabName) {
        return !!this._disabledTabs[tabName];
    }
    setTabDisabled(tabName, value, noEvents, noRerender) {
        var _a, _b;
        const prevValue = this.isTabDisabled(tabName);
        if (prevValue === value)
            return;
        const fields = this._tabsRootFields[tabName];
        if (!fields)
            return;
        this._disabledTabs[tabName] = value;
        for (const fieldName in fields) {
            const field = fields[fieldName];
            field.setDisabled(value, noEvents, true);
        }
        if (!noEvents)
            (_b = (_a = this.getProps()).onTabDisabledStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, tabName, value, this);
        if (!noRerender)
            this.emitRender();
    }
    isTabReadOnly(tabName) {
        return !!this._readOnlyTabs[tabName] || this.model.getFormMode() === 'view';
    }
    setTabReadOnly(tabName, value, noEvents, noRerender) {
        var _a, _b;
        const prevValue = this.isTabReadOnly(tabName);
        if (prevValue === value)
            return;
        const fields = this._tabsRootFields[tabName];
        if (!fields)
            return;
        this._readOnlyTabs[tabName] = value;
        for (const fieldName in fields) {
            const field = fields[fieldName];
            field.setReadOnly(value, noEvents, noRerender);
        }
        if (!noEvents)
            (_b = (_a = this.getProps()).onTabReadOnlyStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, tabName, value, this);
        if (!noRerender)
            this.emitRender();
    }
    isTabHidden(tabName) {
        return !!this._hiddenTabs[tabName];
    }
    setTabHidden(tabName, value, noEvents, noRerender) {
        var _a, _b;
        const prevValue = this.isTabHidden(tabName);
        if (prevValue === value)
            return;
        const fields = this._tabsRootFields[tabName];
        if (!fields)
            return;
        this._hiddenTabs[tabName] = value;
        for (const fieldName in fields) {
            const field = fields[fieldName];
            field.setHidden(value, noEvents, noRerender);
        }
        if (!noEvents)
            (_b = (_a = this.getProps()).onTabHiddenStateChanged) === null || _b === void 0 ? void 0 : _b.call(_a, tabName, value, this);
        if (!noRerender)
            this.emitRender();
    }
    getActiveTab() {
        return this._activeTab;
    }
    setActiveTab(tabName, noEvents, noRerender) {
        var _a, _b;
        if (!this._tabsFieldsMap[tabName])
            return;
        this._activeTab = tabName;
        if (!noEvents)
            (_b = (_a = this.getProps()).onActiveTabChanged) === null || _b === void 0 ? void 0 : _b.call(_a, tabName, this);
        if (!noRerender)
            this.emitRender();
    }
    tabHasVisibleChildren(tabName) {
        const fields = this._tabsRootFields[tabName];
        for (const fieldName in fields) {
            const field = this.rootFields[fieldName];
            if ((!field.isContainer() && !field.isHidden()) || field.hasVisibleChildren())
                return true;
        }
        return false;
    }
    setDisabled(value, noEvents, noRerender) {
        const prevValue = this.isDisabled();
        if (prevValue === value)
            return;
        for (const tabName in this._tabsFieldsMap) {
            this.setTabDisabled(tabName, value, noEvents, true);
        }
        super.setDisabled(value, noEvents, noRerender);
    }
    setReadOnly(value, noEvents, noRerender) {
        const prevValue = this.isReadOnly();
        if (prevValue === value)
            return;
        for (const tabName in this._tabsFieldsMap) {
            this.setTabReadOnly(tabName, value, noEvents, true);
        }
        super.setReadOnly(value, noEvents, noRerender);
    }
    tabSubscribe(tabName) {
        return (listener) => {
            this._tabRenderListeners[tabName] = [...this._tabRenderListeners[tabName], listener];
            return () => {
                this._tabRenderListeners[tabName] = this._tabRenderListeners[tabName].filter(l => l !== listener);
            };
        };
    }
    getTabSnapshot(tabName) {
        return () => {
            return this._tabRenderSnapshots[tabName];
        };
    }
    emitTabRender(tabName) {
        this._tabRenderSnapshots[tabName] = {};
        for (const listener of this._tabRenderListeners[tabName])
            listener();
    }
}
