import {Select as AntdSelect} from 'antd';
import React, {useMemo} from 'react';
import {SplitObject} from '@krinopotam/js-helpers/helpersObjects/splitObject';
import {ArrayElement} from '@krinopotam/service-types';
import {IAntdSelectProps, ISelectBaseProps, ISelectBaseValue, ISelectNode, ISelectProps, ISelectValue} from '@src/select/types/types';
import {IsArray} from "@krinopotam/js-helpers/helpersObjects/isArray";

export const Select = (props: ISelectProps): React.JSX.Element => {
    const antdSelectProps = useSplitAntTreeSelectProps(props);
    const option = useGetOptions(props);
    const value = useConvertToBaseVal(props, props.value);
    return (
        <AntdSelect
            {...antdSelectProps}
            options={option}
            value={value}
            disabled={props.disabled || props.readOnly}
            optionFilterProp={props.optionFilterProp ?? 'label'}
            showSearch={props.showSearch !== false}
            onSelect={(value, option) => props.onSelect?.(value as ISelectValue, option as ISelectNode | ISelectNode[])}
            onDeselect={(value, option) => props.onDeselect?.(value as ISelectValue, option as ISelectNode | ISelectNode[])}
            onChange={(value, option) => props.onChange?.(value as ISelectValue, option as ISelectNode | ISelectNode[])}
        >
            {props.children}
        </AntdSelect>
    );
};

const useGetOptions = (props: ISelectProps) => {
    return useMemo(() => {
        if (!props.dataSet) return undefined;

        const convertor = (nodes: ISelectNode[] | ISelectNode['children']) => {
            const result: IAntdSelectProps['options'] = [];
            if (!nodes || !IsArray(nodes)) return undefined;
            for (const item of nodes) {
                const mItem = {...item} as ArrayElement<IAntdSelectProps['options']>;
                if (item.id) mItem.value = item.id;
                if (item.label) mItem.label = item.label;
                if (item.children) mItem.children = convertor(item.children);
                result.push(mItem);
            }
            return result;
        };

        return convertor(props.dataSet);
    }, [props.dataSet]);
};

const useConvertToBaseVal = (_props: ISelectProps, val: ISelectValue | undefined) => {
    return useMemo((): ISelectBaseValue | undefined => {
        if (typeof val === 'undefined') return undefined;
        if (!IsArray(val)) {
            if (typeof val === 'object') return {value: val.id, label: val.label};
            return val;
        }

        const result: unknown[] = [];
        for (const item of val) {
            if (typeof item === 'object') result.push({value: item.id, label: item.label});
            else result.push(item);
        }

        return result as ISelectBaseValue;
    }, [val]);
};

/*const useConvertFormBaseVal = (props: ISelectProps, val: ISelectBaseValue) => {
    return useMemo((): ISelectValue | undefined => {
        if (typeof val === 'undefined') return undefined;
        if (!IsArray(val)) {
            if (typeof val === 'object') return {id: val.value as string | number, label: val.label};
            return val as string | number;
        }

        const result: (ISelectLabeledValue | string | number)[] = [];
        for (const item of val) {
            if (typeof item === 'object') result.push({id: item.value, label: item.label});
            else result.push(item);
        }

        return result;
    }, [val]);
};*/

const useSplitAntTreeSelectProps = (props: ISelectProps) => {
    return useMemo((): IAntdSelectProps => {
        const result = SplitObject<ISelectBaseProps, IAntdSelectProps>(props, {
            dataSet: true,
            value: true,
            readOnly: true,
            onSelect: true,
            onDeselect: true,
            onChange: true,
        });

        return result[1];
    }, [props]);
};
