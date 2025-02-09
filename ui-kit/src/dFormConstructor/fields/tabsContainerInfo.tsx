import {FolderOpenOutlined} from '@ant-design/icons';
import {AnyType} from '@krinopotam/service-types';
import {IDFormFieldsProps} from '@src/dForm';
import {IBaseFieldProps} from '@src/dForm/fields/base';
import {ITabsFieldProps, TabsField} from '@src/dForm/fields/tabs';
import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {Space} from 'antd';
import React from 'react';

export class TabsContainerInfo extends BaseComponentInfo {
    public override readonly CODE = 'tabsContainer';
    public override readonly TITLE = (
        <Space>
            <FolderOpenOutlined />
            <b>Tabs container</b>
        </Space>
    );
    public override readonly CLASS = TabsField;

    override canHaveChildren(): boolean | string {
        return 'tab';
    }

    override getPropsInfo() {
        return {
            id: 'string',
            label: 'string',
            maxLength: 'number',
            width: 'string',
            placeholder: 'string',
            readOnly: 'boolean',
            disabled: 'boolean',
            hidden: 'boolean',
            tooltip: 'string',
        } satisfies IComponentPropsInfo<ITabsFieldProps>;
    }

    /** @returns field instance props */
    getProps(): ITabsFieldProps | Record<string, unknown> {
        const tabsProps: ITabsFieldProps['tabs'] = {};
        for (const tabInfo of this.getChildren()) {
            if (tabInfo.CODE !== 'tab') continue;

            const tabId = tabInfo.getId();
            tabsProps[tabId] = {...(tabInfo.getProps() as IBaseFieldProps<AnyType, AnyType>)};
        }
        return {component: this.CLASS, tabs: tabsProps} satisfies ITabsFieldProps;
    }
}
