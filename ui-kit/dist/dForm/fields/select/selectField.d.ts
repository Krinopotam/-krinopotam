import { BaseField, IBaseFieldProps } from '../../../dForm/fields/base/baseField';
import React from 'react';
import { SelectProps } from 'rc-select/lib/Select';
import { ISelectProps } from '../../../select';
export interface ISelectFieldProps extends IBaseFieldProps<SelectField> {
    fullItemValue?: boolean;
    dataSet: ISelectProps['dataSet'];
    allowClear?: ISelectProps['allowClear'];
    autoClearSearchValue?: ISelectProps['autoClearSearchValue'];
    defaultActiveFirstOption?: ISelectProps['defaultActiveFirstOption'];
    defaultOpen?: ISelectProps['defaultOpen'];
    value?: ISelectProps['value'];
    popupClassName?: ISelectProps['popupClassName'];
    dropdownRender?: ISelectProps['dropdownRender'];
    fieldNames?: SelectProps['fieldNames'];
    filterOption?: ISelectProps['filterOption'];
    filterSort?: ISelectProps['filterSort'];
    labelInValue?: ISelectProps['labelInValue'];
    listHeight?: ISelectProps['listHeight'];
    loading?: ISelectProps['loading'];
    maxTagCount?: ISelectProps['maxTagCount'];
    maxTagPlaceholder?: ISelectProps['maxTagPlaceholder'];
    maxTagTextLength?: ISelectProps['maxTagTextLength'];
    menuItemSelectedIcon?: ISelectProps['menuItemSelectedIcon'];
    mode?: ISelectProps['mode'];
    notFoundContent?: ISelectProps['notFoundContent'];
    optionFilterProp?: ISelectProps['optionFilterProp'];
    optionLabelProp?: ISelectProps['optionLabelProp'];
    placement?: ISelectProps['placement'];
    removeIcon?: ISelectProps['removeIcon'];
    showArrow?: ISelectProps['showArrow'];
    showSearch?: ISelectProps['showSearch'];
    suffixIcon?: ISelectProps['suffixIcon'];
    tagRender?: ISelectProps['tagRender'];
    tokenSeparators?: ISelectProps['tokenSeparators'];
    virtual?: ISelectProps['virtual'];
    onSelect: ISelectProps['onSelect'];
    onDeselect: ISelectProps['onDeselect'];
}
export declare class SelectField extends BaseField<ISelectFieldProps> {
    protected render(): React.JSX.Element;
}
