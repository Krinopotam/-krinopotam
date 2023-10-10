import React, {ComponentType, useCallback, useEffect} from "react";
import {Input, Tabs, TabsProps} from "antd";
import {InputField} from "@src/dForm/fields/input/inputField";
import {TabsField} from "@src/dForm/fields/tabs/tabsField";
import {TabContentRender} from "@src/dForm/renders/tabContentRender";

export const TabsFieldRender = ({field}:{field:TabsField}):React.JSX.Element =>{
    const model = field.getFormModel();
    const fieldName = field.getName();
    const fieldProps = field.getProps();

    //there is no sense to use memo (rendering is not very often)
    const tabs = model.getTabsProps();
    const items: TabsProps['items'] = [];
    for (const tabName in tabs) {
        items.push({
            key: tabName,
            label: tabName,
            forceRender: true,
            children: <TabContentRender formProps={formProps} tabName={tabName} formApi={formApi} />,
        });
    }

    const tabBarRender = (props: TabNavListProps, DefaultTabBar: ComponentType<TabNavListProps>) => TabBarRender(props, DefaultTabBar, formProps);

    return <Tabs type="card" size="small" renderTabBar={tabBarRender} items={items} />;




    const value = field.getValue() as string | number | undefined;

    const onChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            field.setValue( e.target.value || null)
            field.setDirty(true)
        },
        [field]
    );
    const onBlur = useCallback(() => {
        field.setTouched(true)
    }, [field]);

    useEffect(() => {
        field.setReady(true)
    }, [field]);

    return (
        <Input
            autoFocus={fieldProps.autoFocus}
            disabled={field.isDisabled()}
            maxLength={fieldProps.maxLength}
            name={fieldName}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={fieldProps.placeholder}
            readOnly={field.isReadOnly()}
            showCount={fieldProps.showCount}
            value={value}
            style={fieldProps.style}
        />
    );
}
