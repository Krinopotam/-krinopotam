import {FolderOpenOutlined} from '@ant-design/icons';
import {AnyType} from '@krinopotam/service-types';
import {IBaseFieldProps} from '@src/dForm/fields/base';
import {ITabsFieldProps, TabsField} from '@src/dForm/fields/tabs';
import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {Space} from 'antd';
import React from 'react';
import {TabInfo} from '@src/dFormConstructor/fields/tabInfo';

export class TabsInfo extends BaseComponentInfo {
    public override readonly CODE = 'tabs';
    public override readonly CLASS = TabsField;
    public override readonly INTERFACE_NAME = 'ITabsFieldProps';
    public override readonly TITLE = (
        <Space>
            <FolderOpenOutlined />
            Tabs
        </Space>
    );

    override canHaveChildren(): boolean | string {
        return 'tab';
    }

    override getPropsInfo() {
        return {
            id: 'string',
            label: 'string',
            size: ['small', 'middle', 'large'],
            type: ['line', 'card', 'editable-card'],
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
            tabsProps[tabId] = {...(tabInfo.getProps() as IBaseFieldProps<AnyType, AnyType>)};
        }
        return {component: this.CLASS, tabs: tabsProps} satisfies ITabsFieldProps;
    }

    override setProps(fieldProps: ITabsFieldProps) {
        const {component, tabs, ...props} = fieldProps;
        this.props = props;
        this.label = fieldProps.label;
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
