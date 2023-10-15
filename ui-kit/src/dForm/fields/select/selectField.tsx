import {BaseField, IBaseFieldProps} from '@src/dForm/fields/base/baseField';
import React from 'react';
import {SelectFieldRender} from '@src/dForm/fields/select/selectFieldRender';
import {SelectProps} from 'rc-select/lib/Select';

import {ISelectProps} from '@src/select';

export interface ISelectFieldProps extends IBaseFieldProps<SelectField> {
    /** if true, then the entire elements (full node) will be written into the values*/
    fullItemValue?:boolean;

    /** Select component options items */
    dataSet: ISelectProps['dataSet'];

    /** Allow clear and show clear button */
    allowClear?: ISelectProps['allowClear'];

    /** Whether the current search will be cleared on selecting an item. Only applies when mode is set to multiple or tags (default true) */
    autoClearSearchValue?: ISelectProps['autoClearSearchValue'];

    /** Whether active first option by default */
    defaultActiveFirstOption?: ISelectProps['defaultActiveFirstOption'];

    /** Initial open state of dropdown */
    defaultOpen?: ISelectProps['defaultOpen'];

    /** Initial selected option */
    value?: ISelectProps['value'];

    /** The className of dropdown menu */
    popupClassName?: ISelectProps['popupClassName'];

    /** Customize dropdown content */
    dropdownRender?: ISelectProps['dropdownRender'];

    /** Customize node label, value, options field name */
    fieldNames?: SelectProps['fieldNames'];

    /** If true, filter options by input, if function, filter options against it. */
    filterOption?: ISelectProps['filterOption'];

    /** Sort function for search options sorting, see Array sort compareFunction */
    filterSort?: ISelectProps['filterSort'];

    /** Whether to embed label in value, turn the format of value from string to ( value: string, label: ReactNode ) */
    labelInValue?: ISelectProps['labelInValue'];

    /** Config popup height (default 256) */
    listHeight?: ISelectProps['listHeight'];

    /** Indicate loading state */
    loading?: ISelectProps['loading'];

    /** Max tag count to show. responsive will cost render performance */
    maxTagCount?: ISelectProps['maxTagCount'];

    /** Placeholder for not showing tags */
    maxTagPlaceholder?: ISelectProps['maxTagPlaceholder'];

    /** Max tag text length to show */
    maxTagTextLength?: ISelectProps['maxTagTextLength'];

    /** The custom menuItemSelected icon with multiple options */
    menuItemSelectedIcon?: ISelectProps['menuItemSelectedIcon'];

    /** Set mode of Select */
    mode?: ISelectProps['mode'];

    /** Specify content to show when no result matches */
    notFoundContent?: ISelectProps['notFoundContent'];

    /** Which prop value of option will be used for filter if filterOption is true. If options is set, it should be set to label */
    optionFilterProp?: ISelectProps['optionFilterProp'];

    /** Which prop value of option will render as content of select. */
    optionLabelProp?: ISelectProps['optionLabelProp'];

    /** The position where the selection box pops up */
    placement?: ISelectProps['placement'];

    /** The custom remove icon */
    removeIcon?: ISelectProps['removeIcon'];

    /** Whether to show the drop-down arrow: true(for single select), false(for multiple select) */
    showArrow?: ISelectProps['showArrow'];

    /** Whether select is searchable: single: false, multiple: true */
    showSearch?: ISelectProps['showSearch'];

    /** The custom suffix icon */
    suffixIcon?: ISelectProps['suffixIcon'];

    /** Customize tag render, only applies when mode is set to multiple or tags */
    tagRender?: ISelectProps['tagRender'];

    /** Separator used to tokenize, only applies when mode="tags" */
    tokenSeparators?: ISelectProps['tokenSeparators'];

    /** Disable virtual scroll when set to false */
    virtual?: ISelectProps['virtual'];

    /********** Callbacks *************/
    /** Fires when item selected */
    onSelect: ISelectProps['onSelect'];
    /** Fires when item deselected */
    onDeselect: ISelectProps['onDeselect'];
}

export class SelectField extends BaseField<ISelectFieldProps> {
    protected render() {
        return <SelectFieldRender field={this} />;
    }
}
