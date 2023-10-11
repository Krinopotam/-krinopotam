import React from "react";
import {Tabs, TabsProps} from "antd";
import {TabsField} from "@src/dForm/fields/tabs/tabsField";
import {FieldsRender} from "@src/dForm/renders/fieldsRender";

export const TabsFieldRender = ({field}:{field:TabsField}):React.JSX.Element =>{
    const model = field.getFormModel()
    const tabsGroupsMap = field.getTabsGroupsMap();

    //there is no sense to use memo (rendering is not very often)
    const items: TabsProps['items'] = [];
    for (const tabName in tabsGroupsMap) {
        const groupsMap = tabsGroupsMap[tabName]
        items.push({
            key: tabName,
            label: tabName,
            forceRender: true,
            children: <FieldsRender model={model} groupsMap={groupsMap}/>,
        });
    }

    //const tabBarRender = (props: TabNavListProps, DefaultTabBar: ComponentType<TabNavListProps>) => TabBarRender(props, DefaultTabBar, formProps);

    //return <Tabs type="card" size="small" renderTabBar={tabBarRender} items={items} />;
    return <Tabs type="card" size="small" items={items} />;

}
