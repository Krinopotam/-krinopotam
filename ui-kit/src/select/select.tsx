import {Select as AntdSelect} from 'antd';
import React, {ComponentProps, useMemo} from 'react';
import {SplitObject} from '@krinopotam/js-helpers';
import {ArrayElement} from '@krinopotam/service-types';

//region Types
export type ISelectValue = string | number | ISelectLabeledValue | (string | number | ISelectLabeledValue)[];
type ISelectBaseValue = string | number | ISelectBaseLabeledValue | (string | number | ISelectBaseLabeledValue)[];

interface ISelectBaseLabeledValue extends Record<string, unknown> {
    value: string | number;
    label?: React.ReactNode;
}

export interface ISelectLabeledValue extends Record<string, unknown> {
    id: string | number;
    label?: React.ReactNode;
}

/**
 * Item of select control or enum table column
 */
export interface ISelectNode extends Record<string, unknown> {
    id?: string | number;
    label?: string | React.ReactNode;
    disabled?: boolean;
    icon?: React.ReactNode;
    className?: string;
    children?: Omit<ISelectNode, 'children'>;
}

export type ISelectOptions = ISelectNode[];

type IAntdSelectProps = ComponentProps<typeof AntdSelect>;

export interface ISelectBaseProps extends Record<string, unknown> {
    /** Select options list*/
    dataSet?: ISelectOptions;

    /** Selected values */
    value?: ISelectValue;

    /** Read only state */
    readOnly?: boolean;

    /********** Callbacks **********/
    /** Fires when selection changed */
    onChange?: (value: ISelectValue, option: ISelectNode | ISelectNode[]) => void;

    /** Fires when item selected */
    onSelect?: (value: ISelectValue, option: ISelectNode | ISelectNode[]) => void;

    /** Fires when item deselected */
    onDeselect?: (value: ISelectValue, option: ISelectNode | ISelectNode[]) => void;
}

export type ISelectProps = ISelectBaseProps & Omit<IAntdSelectProps, 'onChange' | 'onSelect' | 'onDeselect' | 'value'>;

//endregion

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
            if (!nodes || !Array.isArray(nodes)) return undefined;
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

const useConvertToBaseVal = (props: ISelectProps, val: ISelectValue | undefined) => {
    return useMemo((): ISelectBaseValue | undefined => {
        if (typeof val === 'undefined') return undefined;
        if (!Array.isArray(val)) {
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
        if (!Array.IsArray(val)) {
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
