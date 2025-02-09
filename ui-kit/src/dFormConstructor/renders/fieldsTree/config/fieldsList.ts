import {InlineGroupInfo} from "@src/dFormConstructor/fields/InlineGroupInfo";
import {InputInfo} from '@src/dFormConstructor/fields/inputInfo';
import {NumberInfo} from '@src/dFormConstructor/fields/numberInfo';
import {DateTimeInfo} from '@src/dFormConstructor/fields/dateTimeInfo';
import {BaseComponentInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {TabInfo} from "@src/dFormConstructor/fields/tabInfo";
import {TabsContainerInfo} from "@src/dFormConstructor/fields/tabsContainerInfo";

export const FIELDS_INFO_MAP: Record<string, typeof BaseComponentInfo> = {
    input: InputInfo,
    number: NumberInfo,
    dateTime: DateTimeInfo,
    inlineGroup: InlineGroupInfo,
    tabsContainer: TabsContainerInfo,
    tab:TabInfo
};
