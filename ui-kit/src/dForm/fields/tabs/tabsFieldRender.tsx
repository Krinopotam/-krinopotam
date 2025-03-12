import {LoadingOutlined, CloseCircleFilled} from '@ant-design/icons';
import {IBaseField} from '@src/dForm/fields/base';
import {useOnClick} from "@src/dForm/fields/base/baseFieldRender";
import {TabsField} from '@src/dForm/fields/tabs/tabsField';
import {FieldsRender} from '@src/dForm/renders/fieldsRender';
import {LoadingContainer} from '@src/loadingContainer';
import {Tabs, TabsProps, theme} from 'antd';
import {TabNavListProps} from 'rc-tabs/lib/TabNavList';
import React, {ComponentType, CSSProperties, useCallback, useEffect, useSyncExternalStore} from 'react';
import StickyBox from 'react-sticky-box';

const {useToken} = theme;
export const TabsFieldRender = ({field}: {field: TabsField}): React.JSX.Element => {
    useEffect(() => {
        field.setReady(true);
    }, [field]);

    const fieldProps = field.getProps();
    const model = field.getModel();

    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const activeTab = field.getActiveTab() || fieldProps.activeTab;

    const onChange = useOnChange(field);
    let onClick = useOnClick(field);
    if (field.getParent()) onClick = undefined;

    const items: TabsProps['items'] = useGetTabsItems(field)

    if (!field.hasVisibleChildren()) return <> </>;

    const tabBarRender = (props: TabNavListProps, DefaultTabBar: ComponentType<TabNavListProps>) => TabBarRender(props, DefaultTabBar, field);

    const defStyle: CSSProperties = {width: field.getWidth() ?? '100%'};
    if (fieldProps.autoHeightResize) defStyle.height = '100%';

    const highlightedFieldStyle: CSSProperties | undefined =
        !field.getParent() && field.getId() === model.getHighlightedId() ? field.getHighlightedStyle() : undefined;

    const style: React.CSSProperties = {...defStyle, ...highlightedFieldStyle, ...fieldProps.style};


    return (
        <Tabs
            className={fieldProps.className}
            type={fieldProps.type ?? 'card'}
            size={'small'}
            tabBarStyle={fieldProps.tabBarStyle}
            tabBarExtraContent={fieldProps.tabBarExtraContent}
            tabBarGutter={fieldProps.tabBarGutter}
            items={items}
            style={style}
            activeKey={activeTab}
            renderTabBar={tabBarRender}
            onChange={onChange}
            onClick={onClick}
        />
    );
};

const useGetTabsItems = (field: TabsField)=>{
    //there is no sense to use memo (rendering is not very often)
    const fieldProps = field.getProps();
    const tabsRootFields = field.getTabsRootFields();

    const containerStyle: CSSProperties = {};
    if (fieldProps.panelsHeight) containerStyle.height = fieldProps.panelsHeight;
    if (fieldProps.panelsMinHeight) containerStyle.minHeight = fieldProps.panelsMinHeight;
    if (fieldProps.panelsMaxHeight) containerStyle.height = fieldProps.panelsMaxHeight;

    const items: TabsProps['items'] = [];
    for (const tabName in tabsRootFields) {
        if (!field.tabHasVisibleChildren(tabName)) continue;
        const childrenFields = tabsRootFields[tabName];

        const tabStyleDef: React.CSSProperties = {};
        if (fieldProps.autoHeightResize) tabStyleDef.height = '100%';

        const highlightedTabStyle: CSSProperties | undefined = tabName === fieldProps.highlightedTab ? field.getHighlightedStyle() : undefined;
        const _containerStyle = {...highlightedTabStyle,...containerStyle};

        items.push({
            key: tabName,
            tabKey: tabName,
            label: <TabLabel field={field} tabName={tabName} subscribe={field.tabSubscribe(tabName)} getSnapshot={field.getTabSnapshot(tabName)} />,
            className: fieldProps.autoHeightResize ? 'auto-height' : '',
            forceRender: true,
            disabled: field.isDisabled(),
            style: {...tabStyleDef, ...fieldProps.tabsStyle},
            children: (
                <TabContent
                    field={field}
                    tabName={tabName}
                    childrenFields={childrenFields}
                    subscribe={field.tabSubscribe(tabName)}
                    getSnapshot={field.getTabSnapshot(tabName)}
                    containerStyle={_containerStyle}
                />
            ),
        });
    }

    return items
}

const TabLabel = ({
    field,
    tabName,
    subscribe,
    getSnapshot,
}: {
    field: TabsField;
    tabName: string;
    subscribe: (listener: () => void) => () => void;
    getSnapshot: () => Record<never, never>;
}): React.ReactElement => {
    useSyncExternalStore(subscribe, getSnapshot);

    const isFetching = field.isTabFetching(tabName);
    const isError = field.isTabFetchingFailed(tabName);

    const {
        token: {colorError},
    } = theme.useToken();

    if (isFetching)
        return (
            <>
                <LoadingOutlined /> {tabName}
            </>
        );

    if (isError)
        return (
            <>
                <CloseCircleFilled style={{color: colorError}} /> {tabName}
            </>
        );

    return <>{tabName}</>;
};

const TabContent = ({
    field,
    tabName,
    childrenFields,
    containerStyle,
    subscribe,
    getSnapshot,
}: {
    field: TabsField;
    tabName: string;
    childrenFields: Record<string, IBaseField>;
    containerStyle: CSSProperties;
    subscribe: (listener: () => void) => () => void;
    getSnapshot: () => Record<never, never>;
}): React.ReactElement => {
    useSyncExternalStore(subscribe, getSnapshot);

    const formProps = field.getFormProps();
    const error = field.getTabFetchingError(tabName);
    const isLoading = field.isTabFetching(tabName);
    return (
        <LoadingContainer
            isLoading={isLoading}
            error={error}
            retryHandler={() => field.fetchTabData(tabName)}
            notHideContent={true}
            language={formProps.language}
        >
            <FieldsRender fields={childrenFields} containerStyle={containerStyle} />
        </LoadingContainer>
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
    const fieldProps = field.getProps();

    const style = {...props.style};
    //style.backgroundColor = token.colorBgContainer;
    style.backgroundColor = token.colorBgElevated;
    style.height = fieldProps?.tabsHeight ?? 35;

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
