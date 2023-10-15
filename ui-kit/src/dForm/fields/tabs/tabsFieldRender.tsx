import React, {ComponentType, CSSProperties, useCallback, useSyncExternalStore} from 'react';
import {Tabs, TabsProps, theme} from 'antd';
import {TabsField} from '@src/dForm/fields/tabs/tabsField';
import {FieldsRender} from '@src/dForm/renders/fieldsRender';
import StickyBox from 'react-sticky-box';
import {TabNavListProps} from 'rc-tabs/lib/TabNavList';

const {useToken} = theme;
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

    const tabBarRender = (props: TabNavListProps, DefaultTabBar: ComponentType<TabNavListProps>) => TabBarRender(props, DefaultTabBar, field);

    let defStyle: CSSProperties = {};
    if (fieldProps.width) {
        defStyle = {width: fieldProps.width};
    }

    const style = {...defStyle, ...fieldProps.style};

    //return <Tabs type="card" size="small" renderTabBar={tabBarRender} items={items} />;
    return (
        <Tabs
            type={fieldProps.type ?? 'card'}
            tabBarStyle={fieldProps.tabBarStyle}
            size={fieldProps.size ?? 'small'}
            items={items}
            style={style}
            renderTabBar={tabBarRender}
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

const TabBarRender = (props: TabNavListProps, DefaultTabBar: ComponentType<TabNavListProps>, field: TabsField): React.ReactElement => {
    const {token} = useToken();
    const formProps = field.getFormProps();

    const style = {...props.style};
    //style.backgroundColor = token.colorBgContainer;
    style.backgroundColor = token.colorBgElevated;
    style.height = formProps?.tabsHeight || 35;

    const indent = formProps.contentIndent || 0;
    const indentStyle = {height: indent, backgroundColor: style.backgroundColor};

    if (field.getParent()) {
        return (
            <>
                <div style={indentStyle} />
                <DefaultTabBar {...props} style={style} />
            </>
        );
    }

    return (
        <StickyBox style={{zIndex: 15}}>
            <div style={indentStyle} />
            <DefaultTabBar {...props} style={style} />
        </StickyBox>
    );
};
