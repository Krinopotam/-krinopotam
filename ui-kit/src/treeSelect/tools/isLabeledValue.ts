import {ILabeledValue} from '@src/treeSelect/types/types';

export const isLabeledValue = (val: unknown): val is ILabeledValue => {
    return !!(val && typeof val === 'object' && (val as Record<string, unknown>)['value']);
};