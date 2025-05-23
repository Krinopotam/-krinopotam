import {CloseCircleFilled, LoadingOutlined} from '@ant-design/icons';
import {useEvent} from '@krinopotam/common-hooks';
import {IBaseField} from '@src/dForm/fields/base';
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
    useSyncExternalStore(field.subscribe.bind(field), field.getSnapshot.bind(field));

    const activeTab = field.getActiveTab() || fieldProps.activeTab;

    const onChange = useOnChange(field);

    const items: TabsProps['items'] = useGetTabsItems(field);

    if (!field.hasVisibleChildren()) return <> </>;

    const defStyle: CSSProperties = {width: field.getWidth() ?? '100%'};
    if (fieldProps.autoHeightResize) defStyle.height = '100%';

    const style: React.CSSProperties = {...defStyle,  ...fieldProps.style};

    const tabBarRender = (props: TabNavListProps, DefaultTabBar: ComponentType<TabNavListProps>) => TabBarRender(props, DefaultTabBar, field);

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
        />
    );
};

const useGetTabsItems = (field: TabsField) => {
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

        const highlightedTabStyle: CSSProperties | undefined = tabName === field.getHighlightedTab() ? field.getHighlightedStyle() : undefined;
        const _containerStyle = {...highlightedTabStyle, ...containerStyle};

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

    return items;
};

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

    const onTabClick = useOnTabClick(field, props);

    if (field.getParent()) {
        return (
            <>
                <div style={indentStyle} />
                <DefaultTabBar style={style} {...props} onTabClick={onTabClick} />
            </>
        );
    }

    return (
        <StickyBox style={{zIndex: 15}}>
            <div style={indentStyle} />
            <DefaultTabBar style={style} {...props} onTabClick={onTabClick} />
        </StickyBox>
    );
};

/** Highlight field on click */
export const useOnTabClick = (field: TabsField, props: TabNavListProps) => {
    const onClick = useEvent((activeKey: string, e: React.MouseEvent | React.KeyboardEvent) => {
        field.setHighlightedTab(activeKey);
        props.onTabClick(activeKey, e);
        e.stopPropagation();
    });

    const model = field.getModel();
    return model.getFormMode() === 'constructor' ? onClick : props.onTabClick;
};
