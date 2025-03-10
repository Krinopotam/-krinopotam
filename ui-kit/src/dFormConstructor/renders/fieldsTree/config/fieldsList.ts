import {BaseComponentInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {DateTimeInfo} from '@src/dFormConstructor/fields/dateTimeInfo';
import {DividerInfo} from '@src/dFormConstructor/fields/dividerInfo';
import {InlineGroupInfo} from '@src/dFormConstructor/fields/InlineGroupInfo';
import {InputInfo} from '@src/dFormConstructor/fields/inputInfo';
import {NumberInfo} from '@src/dFormConstructor/fields/numberInfo';
import {SwitchInfo} from '@src/dFormConstructor/fields/switchInfo';
import {TabInfo} from '@src/dFormConstructor/fields/tabInfo';
import {TabsInfo} from '@src/dFormConstructor/fields/tabsInfo';
import {CheckBoxInfo} from '@src/dFormConstructor/fields/checkBoxInfo';
import {LinkInfo} from '@src/dFormConstructor/fields/linkInfo';
import {PasswordInfo} from '@src/dFormConstructor/fields/passwordInfo';
import {QuillEditorInfo} from '@src/dFormConstructor/fields/quillEditorInfo';
import {SelectInfo} from '@src/dFormConstructor/fields/selectInfo';
import {TextAreaInfo} from '@src/dFormConstructor/fields/textAreaInfo';
import {TreeSelectInfo} from '@src/dFormConstructor/fields/treeSelectInfo';
import {UploadDraggerInfo} from '@src/dFormConstructor/fields/uploadDraggerInfo';
import {TabulatorGridInfo} from '@src/dFormConstructor/fields/tabulatorGridInfo';

export const FIELDS_INFO_MAP: Record<string, typeof BaseComponentInfo> = {
    tabs: TabsInfo,
    tab: TabInfo,
    inlineGroup: InlineGroupInfo,
    input: InputInfo,
    number: NumberInfo,
    password: PasswordInfo,
    dateTime: DateTimeInfo,
    switch: SwitchInfo,
    checkbox: CheckBoxInfo,
    textArea: TextAreaInfo,
    quillEditor: QuillEditorInfo,
    link: LinkInfo,
    select: SelectInfo,
    treeSelect: TreeSelectInfo,
    divider: DividerInfo,
    uploadDragger: UploadDraggerInfo,
    tabulatorGrid: TabulatorGridInfo,
};
