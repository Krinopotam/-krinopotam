import {IsArray} from '@krinopotam/js-helpers/helpersObjects/isArray';
import {ITreeSelectValue} from '@src/treeSelect';
import {isLabeledValue} from '@src/treeSelect/tools/isLabeledValue';
import {nodeToLabeledValue} from '@src/treeSelect/tools/nodeToLabeledValue';
import {ILabeledValue} from '@src/treeSelect/types/types';

/**
 * Convert unknown value (Key|Key[]|Object|Object[]) to values with label array {value: Key, label?: ReactNode}[]
 * @param val
 * @param fieldNames
 */
export const anyValueToValuesWithLabel = (
    val: ITreeSelectValue | undefined,
    fieldNames: {
        key: string;
        title: string;
    }
): ILabeledValue[] | null => {
    if (!val) return null;
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
