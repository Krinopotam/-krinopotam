import {FolderOpenOutlined} from '@ant-design/icons';
import {AnyType} from '@krinopotam/service-types';
import {IBaseFieldProps} from '@src/dForm/fields/base';
import {ITabsFieldProps, TabsField} from '@src/dForm/fields/tabs';
import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import React from 'react';
import {TabInfo} from '@src/dFormConstructor/fields/tabInfo';

export class TabsInfo extends BaseComponentInfo {
    public override readonly CODE = 'tabs';
    public override readonly CLASS = TabsField;
    public override readonly INTERFACE_NAME = 'ITabsFieldProps';
    public override readonly ICON = (<FolderOpenOutlined />);
    public override readonly TITLE = 'Tabs';

    /** @returns true if field can be a parent of the specified child. If child is not specified, returns true if field potentially can have children */
    override canHaveChild(child?: BaseComponentInfo) {
        return !child || child.CODE === 'tab';
    }

    override getPropsInfo() {
        return {
            id: 'string',
            label: 'string',
            type: ['line', 'card'],
            tabsHeight: 'number',
            activeTab: 'string',
            panelsHeight: 'number',
            panelsMaxHeight: 'number',
            panelsMinHeight: 'number',
            tabBarGutter: 'number',
            className: 'string',
        } satisfies IComponentPropsInfo<ITabsFieldProps>;
    }

    /** @returns field instance props */
    override getProps(): ITabsFieldProps | Record<string, unknown> {
        const tabsProps: ITabsFieldProps['tabs'] = {};
        for (const tabInfo of this.getChildren()) {
            if (tabInfo.CODE !== 'tab') continue;

            const tabId = tabInfo.getLabel() ?? tabInfo.getId();
            tabsProps[tabId as string] = {...(tabInfo.getProps() as IBaseFieldProps<AnyType, AnyType>)};
        }
        return {component: this.CLASS, tabs: tabsProps, ...this.props} satisfies ITabsFieldProps;
    }

    override setProps(fieldProps: ITabsFieldProps) {
        const {component, tabs, ...props} = fieldProps;
        this.props = props;
        this.label = fieldProps.label as string;
        this.children = [];
        if (typeof tabs !== 'object') return;
        for (const key in tabs) {
            const fsProps = tabs[key];
            const fieldInfo = new TabInfo({id: key, label: key});
            fieldInfo.setProps(fsProps);
            this.addChild(fieldInfo);
        }
    }
}
