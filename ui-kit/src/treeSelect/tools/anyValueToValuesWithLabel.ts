import {AnyType} from "@krinopotam/service-types";
import {ITreeSelectValue} from '@src/treeSelect';
import {ILabeledValue} from '@src/treeSelect/types/types';
import {IsArray} from '@krinopotam/js-helpers/helpersObjects/isArray';
import {isLabeledValue} from '@src/treeSelect/tools/isLabeledValue';
import {nodeToLabeledValue} from '@src/treeSelect/tools/nodeToLabeledValue';

/**
 * Convert unknown value (Key|Key[]|Object|Object[]) to values with label array {value: Key, label?: ReactNode}[]
 * @param val
 * @param fieldNames
 */
export const anyValueToValuesWithLabel = (
    val: ITreeSelectValue,
    fieldNames: {
        key: string;
        title: string;
    }
): ILabeledValue[] | undefined => {
    if (!val) return undefined;
    if (!IsArray(val)) {
        if (typeof val === 'object') {
            if (isLabeledValue(val)) return [val];
            return [nodeToLabeledValue(val, fieldNames)];
        } else return [{value: val}];
    }

    const result: ILabeledValue[] = [];
    for (const item of val) {
        if (!item) continue;

        if (typeof item === 'object') {
            if (isLabeledValue(item)) result.push(item);
            else result.push(nodeToLabeledValue(item, fieldNames));
        } else result.push({value: item});
    }
    return result;
};
