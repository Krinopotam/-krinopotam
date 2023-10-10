import React from "react";
import {Tabs, TabsProps} from "antd";
import {TabsField} from "@src/dForm/fields/tabs/tabsField";
import {IBaseFieldAny} from "@src/dForm/fields/base/baseField";

export const TabsFieldRender = ({field}:{field:TabsField}):React.JSX.Element =>{
    const tabsFields = field.getTabsFields();

    //there is no sense to use memo (rendering is not very often)
    const items: TabsProps['items'] = [];
    for (const tabName in tabsFields) {
        items.push({
            key: tabName,
            label: tabName,
            forceRender: true,
            children: renderFields(tabsFields[tabName]),
        });
    }

    //const tabBarRender = (props: TabNavListProps, DefaultTabBar: ComponentType<TabNavListProps>) => TabBarRender(props, DefaultTabBar, formProps);

    //return <Tabs type="card" size="small" renderTabBar={tabBarRender} items={items} />;
    return <Tabs type="card" size="small" items={items} />;

}

const renderFields = (fields: Record<string, IBaseFieldAny>): React.ReactNode  => {
    const fieldsList: React.ReactNode[] = []
    for (const fieldName in fields) {
        const field = fields[fieldName]
        fieldsList.push(field.renderField());
    }

    return React.createElement(React.Fragment, {}, fieldsList);
}
