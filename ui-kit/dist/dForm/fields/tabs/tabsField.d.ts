import { BaseField, IBaseFieldProps } from '../../../dForm/fields/base/baseField';
import React from 'react';
import { IDFormFieldsProps } from '../../../dForm';
export interface ITabsFieldProps extends IBaseFieldProps<TabsField> {
    tabs: Record<string, IDFormFieldsProps>;
    size?: 'small' | 'middle' | 'large';
    type?: 'line' | 'card' | 'editable-card';
    tabsStyle?: React.CSSProperties;
    tabBarStyle?: React.CSSProperties;
    activeTab?: string;
    panelsHeight?: string | number;
    panelsMaxHeight?: string | number;
    panelsMinHeight?: string | number;
    onTabDisabledStateChanged?: (tabName: string, value: boolean, field: TabsField) => void;
    onTabReadOnlyStateChanged?: (tabName: string, value: boolean, field: TabsField) => void;
    onTabHiddenStateChanged?: (tabName: string, value: boolean, field: TabsField) => void;
    onActiveTabChanged?: (tabName: string, field: TabsField) => void;
}
export declare class TabsField extends BaseField<ITabsFieldProps> {
    private _tabsFieldsMap;
    private _tabsRootFields;
    private _activeTab;
    private _disabledTabs;
    private _hiddenTabs;
    private _readOnlyTabs;
    private _tabRenderListeners;
    private _tabRenderSnapshots;
    initChildrenFields(): [TabsField['fieldsMap'], TabsField['rootFields']];
    protected render(): React.JSX.Element;
    renderField(): React.ReactNode;
    getTabsFieldsMap(): Record<string, Record<string, import("../../../dForm/fields/base/baseField").IBaseField>>;
    getTabsRootFields(): Record<string, Record<string, import("../../../dForm/fields/base/baseField").IBaseField>>;
    isTabDisabled(tabName: string): boolean;
    setTabDisabled(tabName: string, value: boolean, noEvents?: boolean, noRerender?: boolean): void;
    isTabReadOnly(tabName: string): boolean;
    setTabReadOnly(tabName: string, value: boolean, noEvents?: boolean, noRerender?: boolean): void;
    isTabHidden(tabName: string): boolean;
    setTabHidden(tabName: string, value: boolean, noEvents?: boolean, noRerender?: boolean): void;
    getActiveTab(): string;
    setActiveTab(tabName: string, noEvents?: boolean, noRerender?: boolean): void;
    tabHasVisibleChildren(tabName: string): boolean;
    setDisabled(value: boolean, noEvents?: boolean, noRerender?: boolean): void;
    setReadOnly(value: boolean, noEvents?: boolean, noRerender?: boolean): void;
    tabSubscribe(tabName: string): (listener: () => void) => () => void;
    getTabSnapshot(tabName: string): () => Record<never, never>;
    emitTabRender(tabName: string): void;
}