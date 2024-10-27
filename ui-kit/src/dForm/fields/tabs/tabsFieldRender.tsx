import React, {ComponentType, CSSProperties, useCallback, useEffect, useSyncExternalStore} from 'react';
import {Tabs, TabsProps, theme} from 'antd';
import {TabsField} from '@src/dForm/fields/tabs/tabsField';
import {FieldsRender} from '@src/dForm/renders/fieldsRender';
import StickyBox from 'react-sticky-box';
import {TabNavListProps} from 'rc-tabs/lib/TabNavList';

const {useToken} = theme;
export const TabsFieldRender = ({field}: {field: TabsField}): React.JSX.Element => {
    useEffect(() => {
        field.setReady(true);
    }, [field]);

    const fieldProps = field.getProps();
    const tabsRootFields = field.getTabsRootFields();

    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    let activeTab = field.getActiveTab();

    const onChange = useOnChange(field);

    if (!field.hasVisibleChildren()) return <> </>;

    const containerStyle: CSSProperties = {};
    if (fieldProps.panelsHeight) containerStyle.height = fieldProps.panelsHeight;
    if (fieldProps.panelsMinHeight) containerStyle.minHeight = fieldProps.panelsMinHeight;
    if (fieldProps.panelsMaxHeight) containerStyle.height = fieldProps.panelsMaxHeight;

    //there is no sense to use memo (rendering is not very often)
    const items: TabsProps['items'] = [];
    for (const tabName in tabsRootFields) {
        if (!activeTab) activeTab = tabName;

        if (!field.tabHasVisibleChildren(tabName)) continue;
        const childrenFields = tabsRootFields[tabName];

        const tabStyleDef: React.CSSProperties = {};
        if (fieldProps.autoHeightResize) tabStyleDef.height = '100%';

        items.push({
            key: tabName,
            tabKey: tabName,
            label: tabName,
            className: fieldProps.autoHeightResize ? 'auto-height' : '',
            forceRender: true,
            disabled: field.isDisabled(),
            style: {...tabStyleDef, ...fieldProps.tabsStyle},
            children: (
                <FieldsRender
                    fields={childrenFields}
                    formProps={field.getFormProps()}
                    subscribe={field.tabSubscribe(tabName)}
                    getSnapshot={field.getTabSnapshot(tabName)}
                    containerStyle={containerStyle}
                />
            ),
            active: activeTab === tabName,
        });
    }

    const tabBarRender = (props: TabNavListProps, DefaultTabBar: ComponentType<TabNavListProps>) => TabBarRender(props, DefaultTabBar, field);

    const defStyle: CSSProperties = {width: field.getWidth() ?? '100%'};
    if (fieldProps.autoHeightResize) defStyle.height = '100%';

    const style: React.CSSProperties = {...defStyle, ...fieldProps.style};

    return (
        <Tabs
            type={fieldProps.type ?? 'card'}
            size={fieldProps.size ?? 'small'}
            tabBarStyle={fieldProps.tabBarStyle}
            tabBarExtraContent={fieldProps.tabBarExtraContent}
            tabBarGutter={fieldProps.tabBarGutter}
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
    style.height = formProps?.tabsHeight ?? 35;

    const indent = formProps.contentIndent ?? 0;
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
