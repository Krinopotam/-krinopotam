import {BaseComponentInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {DateTimeInfo} from '@src/dFormConstructor/fields/dateTimeInfo';
import {DividerInfo} from '@src/dFormConstructor/fields/dividerInfo';
import {InlineGroupInfo} from '@src/dFormConstructor/fields/InlineGroupInfo';
import {InputInfo} from '@src/dFormConstructor/fields/inputInfo';
import {NumberInfo} from '@src/dFormConstructor/fields/numberInfo';
import {SwitchInfo} from "@src/dFormConstructor/fields/switchInfo";
import {TabInfo} from '@src/dFormConstructor/fields/tabInfo';
import {TabsInfo} from '@src/dFormConstructor/fields/tabsInfo';

export const FIELDS_INFO_MAP: Record<string, typeof BaseComponentInfo> = {
    dateTime: DateTimeInfo,
    divider: DividerInfo,
    inlineGroup: InlineGroupInfo,
    input: InputInfo,
    number: NumberInfo,
    switch: SwitchInfo,
    tabs: TabsInfo,
    tab: TabInfo,
};
