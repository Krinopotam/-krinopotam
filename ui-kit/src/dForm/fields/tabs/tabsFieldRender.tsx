import React, {useCallback, useSyncExternalStore} from 'react';
import {Tabs, TabsProps} from 'antd';
import {TabsField} from '@src/dForm/fields/tabs/tabsField';
import {FieldsRender} from '@src/dForm/renders/fieldsRender';

export const TabsFieldRender = ({field}: {field: TabsField}): React.JSX.Element => {
    const fieldProps = field.getProps();
    const tabsRootFields = field.getTabsRootFields();

    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    let activeTab = field.getActiveTab();

    const onChange = useOnChange(field);

    if (!field.hasVisibleChildren()) return <> </>;

    //there is no sense to use memo (rendering is not very often)
    const items: TabsProps['items'] = [];
    for (const tabName in tabsRootFields) {
        if (!activeTab) activeTab = tabName;

        if (!field.tabHasVisibleChildren(tabName)) continue;
        const childrenFields = tabsRootFields[tabName];

        items.push({
            key: tabName,
            tabKey: tabName,
            label: tabName,
            forceRender: true,
            disabled: field.isDisabled(),
            style: fieldProps.tabsStyle,
            children: <FieldsRender fields={childrenFields} subscribe={field.tabSubscribe(tabName)} getSnapshot={field.getTabSnapshot(tabName)} />,
            active: activeTab === tabName,
        });
    }

    //const tabBarRender = (props: TabNavListProps, DefaultTabBar: ComponentType<TabNavListProps>) => TabBarRender(props, DefaultTabBar, formProps);

    //return <Tabs type="card" size="small" renderTabBar={tabBarRender} items={items} />;
    return (
        <Tabs
            type={fieldProps.type ?? 'card'}
            tabBarStyle={fieldProps.tabBarStyle}
            size={fieldProps.size ?? 'small'}
            items={items}
            style={fieldProps.style}
            onChange={onChange}
        />
    );
};

const useOnChange = (field: TabsField) => {
    return useCallback(
        (activeKey: string) => {
            field.setActiveTab(activeKey);
        },
        [field]
    );
};
