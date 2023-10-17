import { Select as AntdSelect } from 'antd';
import React, { useMemo } from 'react';
import { HelpersObjects } from '@krinopotam/js-helpers';
export const Select = (props) => {
    var _a;
    const antdSelectProps = useSplitAntTreeSelectProps(props);
    const option = useGetOptions(props);
    const value = useConvertToBaseVal(props, props.value);
    console.log('value', value);
    console.log('option', option);
    return (React.createElement(AntdSelect, Object.assign({}, antdSelectProps, { options: option, value: value, disabled: props.disabled || props.readOnly, optionFilterProp: (_a = props.optionFilterProp) !== null && _a !== void 0 ? _a : 'label', showSearch: props.showSearch !== false, onSelect: (value, option) => { var _a; return (_a = props.onSelect) === null || _a === void 0 ? void 0 : _a.call(props, value, option); }, onDeselect: (value, option) => { var _a; return (_a = props.onDeselect) === null || _a === void 0 ? void 0 : _a.call(props, value, option); }, onChange: (value, option) => { var _a; return (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, value, option); } }), props.children));
};
const useGetOptions = (props) => {
    return useMemo(() => {
        if (!props.dataSet)
            return undefined;
        const convertor = (nodes) => {
            const result = [];
            if (!nodes || !Array.isArray(nodes))
                return undefined;
            for (const item of nodes) {
                const mItem = Object.assign({}, item);
                if (item.id)
                    mItem.value = item.id;
                if (item.label)
                    mItem.label = item.label;
                if (item.children)
                    mItem.children = convertor(item.children);
                result.push(mItem);
            }
            return result;
        };
        return convertor(props.dataSet);
    }, [props.dataSet]);
};
const useConvertToBaseVal = (props, val) => {
    return useMemo(() => {
        if (typeof val === 'undefined')
            return undefined;
        if (!Array.isArray(val)) {
            if (typeof val === 'object')
                return { value: val.id, label: val.label };
            return val;
        }
        const result = [];
        for (const item of val) {
            if (typeof item === 'object')
                result.push({ value: item.id, label: item.label });
            else
                result.push(item);
        }
        return result;
    }, [val]);
};
const useSplitAntTreeSelectProps = (props) => {
    return useMemo(() => {
        const result = HelpersObjects.splitObject(props, {
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
