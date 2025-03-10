import {AnyType, IError} from '@krinopotam/service-types';
import {IBaseFieldProps} from '@src/dForm/fields/base';
import {BaseField} from '@src/dForm/fields/base/baseField';
import {TabsFieldRender} from '@src/dForm/fields/tabs/tabsFieldRender';
import {TabBarExtraContent} from 'rc-tabs/lib/interface';
import React, {CSSProperties} from 'react';

import {IDFormDataSet, IDFormDataSourcePromise, IDFormFieldsProps} from '@src/dForm';

export interface ITabsFieldProps<TFieldsProps extends Record<string, AnyType> = Record<string, AnyType>> extends IBaseFieldProps<TabsField, undefined> {
    /** Tabs fields properties */
    tabs: Record<string, IDFormFieldsProps<TFieldsProps>>;

    /** Tabs size (default small) */
    size?: 'small' | 'middle' | 'large';

    /** Tabs panes height (default 35)*/
    tabsHeight?: number;

    /** Tabs type */
    type?: 'line' | 'card' | 'editable-card';

    /** Tabs style */
    tabsStyle?: React.CSSProperties;

    /** Tab bar style */
    tabBarStyle?: React.CSSProperties;

    /** Active tab*/
    activeTab?: string;

    /** Tab panels height */
    panelsHeight?: string | number;

    /** Tab panels max height */
    panelsMaxHeight?: string | number;

    /** Tab panels min height */
    panelsMinHeight?: string | number;

    /** Tab bar extra content */
    tabBarExtraContent?: TabBarExtraContent;

    /** Tab bar gutter */
    tabBarGutter?: number;

    /*************** Callbacks *****************/
    /** Fires when the disable state of a tab changes  */
    onTabDisabledStateChanged?: (tabName: string, value: boolean, field: TabsField) => void;

    /** Fires when the read only state of a tab changes  */
    onTabReadOnlyStateChanged?: (tabName: string, value: boolean, field: TabsField) => void;

    /** Fires when the hidden state of a tab changes  */
    onTabHiddenStateChanged?: (tabName: string, value: boolean, field: TabsField) => void;

    /** Fires when the active tab changes  */
    onActiveTabChanged?: (tabName: string, field: TabsField) => void;

    /** fires when the tab trying to fetch data */
    onTabDataFetch?: (tabName: string, field: TabsField) => IDFormDataSourcePromise | undefined;

    /** fires when the tab fetch success */
    onTabDataFetchSuccess?: (tabName: string, result: {data: Record<string, AnyType>}, field: TabsField) => void;

    /** fires when the tab fetch failed */
    onTabDataFetchError?: (tabName: string, error: IError, field: TabsField) => void;
}

export class TabsField extends BaseField<ITabsFieldProps> {
    //region Tabs grouped fields collections
    /** Tabs grouped fields collection maps (flat list of all fields in all component tabs, including child fields of other containers) */
    private _tabsFieldsMap: Record<string, TabsField['fieldsMap']> = {};

    /** Tabs grouped root field collection (only fields placed directly on the tab, excluding child fields) */
    private _tabsRootFields: Record<string, TabsField['rootFields']> = {};
    //endregion

    //region Tabs properties
    /** Current active tab */
    private _activeTab: string = '';

    /** disabled tabs statuses */
    private _disabledTabs: Record<string, boolean | undefined> = {};

    /** hidden tabs statuses */
    private _hiddenTabs: Record<string, boolean | undefined> = {};

    /** read only tabs statuses */
    private _readOnlyTabs: Record<string, boolean | undefined> = {};

    /** fetching tabs statuses */
    private _fetchingTabs: Record<string, 0 | 1 | IError | undefined> = {};
    //endregion

    //region Tab re-render
    /** tab rerender listeners */
    private _tabRenderListeners: Record<string, (() => unknown)[]> = {};

    /** tab rerender keys snapshots */
    private _tabRenderSnapshots: Record<string, Record<never, never>> = {};

    //endregion

    override initChildrenFields(): [TabsField['fieldsMap'], TabsField['rootFields']] {
        const tabsProps = this.getProps();
        if (!tabsProps.tabs) return [{}, {}];

        this._tabsRootFields = {};

        for (const tabName in tabsProps.tabs) {
            const fieldsProps = tabsProps.tabs[tabName];
            const [fieldsMap, rootFields] = this.getModel().prepareFieldCollection(fieldsProps, this);

            this._tabsRootFields[tabName] = rootFields;
            this._tabsFieldsMap[tabName] = fieldsMap;
            this._tabRenderSnapshots[tabName] = {};
            this._tabRenderListeners[tabName] = [];

            this.fieldsMap = {...this.fieldsMap, ...fieldsMap};
            this.rootFields = {...this.rootFields, ...rootFields};
        }

        return [this.fieldsMap, this.rootFields];
    }

    /**
     * Handling an erroneous TabsField value get
     */
    override getValue() {
        return undefined;
    }

    /**
     * Handling an erroneous TabsField value setting
     */
    override setValue() {
        /* field can't have value */
    }

    /** Is field can have value */
    override canHaveValue() {
        return false;
    }

    protected override render() {
        return <TabsFieldRender field={this} />;
    }

    override renderField(props: {altLabel?: React.ReactNode; fieldContainerStyle?: CSSProperties} = {}): React.ReactNode {
        if (this.parent) return super.renderField(props);
        return this.render();
    }

    //region Tabs grouped fields collections getters
    /**@return tabs grouped fields collection maps (flat list of all fields in all component tabs, including child fields of other containers) */
    getTabsFieldsMap() {
        return this._tabsFieldsMap;
    }

    /**@return tabs grouped root field collection (only fields placed directly on the tab, excluding child fields) */
    getTabsRootFields() {
        return this._tabsRootFields;
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
     * @param noEvents - do not emit onTabDisabledStateChanged and fields onDisabledStateChanged callbacks
     * @param noRerender - do not emit re-rendering
     */
    setTabDisabled(tabName: string, value: boolean, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this.isTabDisabled(tabName);
        if (prevValue === value) return;

        const fields = this._tabsRootFields[tabName];
        if (!fields) return;

        this._disabledTabs[tabName] = value;

        for (const fieldName in fields) {
            const field = fields[fieldName];
            field.setDisabled(value, noEvents, true);
        }

        if (!noEvents) this.getProps().onTabDisabledStateChanged?.(tabName, value, this);
        if (!noRerender) this.emitRender();
    }

    /**
     * Gets the current read only status of the tab
     * @returns Tab read only status
     */
    isTabReadOnly(tabName: string): boolean {
        return !!this._readOnlyTabs[tabName] || this.model.getFormMode() === 'view';
    }

    /**
     * Sets a read only status to the tab and to the all tab fields
     * *this function doesn't call onFieldReadOnlyStateChanged callbacks of the fields
     * @param tabName
     * @param value - read only status
     * @param noEvents - do not emit onTabReadOnlyStateChanged and fields onReadOnlyStateChanged callbacks
     * @param noRerender - do not emit re-rendering
     */
    setTabReadOnly(tabName: string, value: boolean, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this.isTabReadOnly(tabName);
        if (prevValue === value) return;

        const fields = this._tabsRootFields[tabName];
        if (!fields) return;

        this._readOnlyTabs[tabName] = value;

        for (const fieldName in fields) {
            const field = fields[fieldName];
            field.setReadOnly(value, noEvents, noRerender);
        }

        if (!noEvents) this.getProps().onTabReadOnlyStateChanged?.(tabName, value, this);
        if (!noRerender) this.emitRender();
    }

    /**
     * Gets the current hidden status of the tab
     * @returns Tab hidden status
     */
    isTabHidden(tabName: string): boolean {
        return !!this._hiddenTabs[tabName];
    }

    /**
     * Sets a hidden status to the tab
     * @param tabName
     * @param value - hidden status
     * @param noEvents - do not emit onTabHiddenStateChanged and fields onHiddenStateChanged callbacks
     * @param noRerender - do not emit re-rendering
     */
    setTabHidden(tabName: string, value: boolean, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this.isTabHidden(tabName);
        if (prevValue === value) return;

        const fields = this._tabsRootFields[tabName];
        if (!fields) return;

        this._hiddenTabs[tabName] = value;

        for (const fieldName in fields) {
            const field = fields[fieldName];
            field.setHidden(value, noEvents, noRerender);
        }

        if (!noEvents) this.getProps().onTabHiddenStateChanged?.(tabName, value, this);

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

    /** @return true if tab contains visible fields */
    tabHasVisibleChildren(tabName: string) {
        const fields = this._tabsRootFields[tabName];
        for (const fieldName in fields) {
            const field = this.rootFields[fieldName];
            if ((!field.isContainer() && !field.isHidden()) || field.hasVisibleChildren()) return true;
        }

        return false;
    }

    /** @returns tab fetching status  */
    isTabFetching(tabName: string) {
        return this._fetchingTabs[tabName] === 1;
    }

    /** @returns tab fetching failed status  */
    isTabFetchingFailed(tabName: string) {
        return !!this._fetchingTabs[tabName] && this._fetchingTabs[tabName] !== 1;
    }

    /** @returns tab fetching error  */
    getTabFetchingError(tabName: string) {
        if (!this.isTabFetchingFailed(tabName)) return undefined;
        return this._fetchingTabs[tabName] as IError;
    }

    isReady(): boolean {
        const isReady = super.isReady();
        if (!isReady) return false;
        for (const tabName in this._tabsFieldsMap) {
            if (this._fetchingTabs[tabName]) return false;
        }

        return true;
    }

    override onInitialFetch() {
        super.onInitialFetch();
        for (const tabName in this._tabsFieldsMap) this.fetchTabData(tabName);
    }

    fetchTabData(tabName: string) {
        const dataSource = this.fieldProps.onTabDataFetch?.(tabName, this);
        if (!dataSource) return;
        this._fetchingTabs[tabName] = 1;
        this.model.checkFormReadyState();
        this.emitTabRender(tabName);

        dataSource.then(
            (result: {data: Record<string, AnyType>}) => {
                if (!this.model.isFormMounted()) return;
                this._fetchingTabs[tabName] = 0;
                this.fieldProps.onTabDataFetchSuccess?.(tabName, result, this);

                const values = result.data as IDFormDataSet;

                this.model.setValues(values)
                this.model.checkFormReadyState();
                this.emitTabRender(tabName);
            },
            (error: IError) => {
                if (!this.model.isFormMounted()) return;
                this._fetchingTabs[tabName] = error;
                this.fieldProps.onTabDataFetchError?.(tabName, error, this);

                this.model.checkFormReadyState();
                this.emitTabRender(tabName);
            }
        );
    }

    //endregion

    //region Field methods
    /**
     * Sets a disabled status to the field
     * @param value - disabled status
     * @param noEvents - do not emit onDisabledStateChanged and onTabDisabledStateChanged callbacks
     * @param noRerender - do not emit re-rendering
     */
    override setDisabled(value: boolean, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this.isDisabled();
        if (prevValue === value) return;

        for (const tabName in this._tabsFieldsMap) {
            this.setTabDisabled(tabName, value, noEvents, true);
        }

        super.setDisabled(value, noEvents, noRerender);
    }

    /**
     * Sets a read only status to the field
     * @param value - read only status
     * @param noEvents - do not emit onReadOnlyStateChanged callback
     * @param noRerender - do not emit re-rendering
     */
    override setReadOnly(value: boolean, noEvents?: boolean, noRerender?: boolean) {
        const prevValue = this.isReadOnly();
        if (prevValue === value) return;

        for (const tabName in this._tabsFieldsMap) {
            this.setTabReadOnly(tabName, value, noEvents, true);
        }

        super.setReadOnly(value, noEvents, noRerender);
    }

    //endregion

    //region Emit tab re-render implementation
    /** @return React useSyncExternalStore subscribe function */
    tabSubscribe(tabName: string) {
        return (listener: () => void) => {
            this._tabRenderListeners[tabName] = [...this._tabRenderListeners[tabName], listener];
            return () => {
                this._tabRenderListeners[tabName] = this._tabRenderListeners[tabName].filter(l => l !== listener);
            };
        };
    }

    /** @return React useSyncExternalStore get snapshot function */
    getTabSnapshot(tabName: string) {
        return () => {
            return this._tabRenderSnapshots[tabName];
        };
    }

    /** Emit field React component re-render */
    emitTabRender(tabName: string) {
        this._tabRenderSnapshots[tabName] = {}; //new value
        for (const listener of this._tabRenderListeners[tabName]) listener();
    }

    //endregion
}
