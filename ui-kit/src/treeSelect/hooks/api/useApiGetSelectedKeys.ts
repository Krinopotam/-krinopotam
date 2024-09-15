import {ILabeledValue, ITreeSelectApi} from '@src/treeSelect/types/types';
import {IKey} from '@krinopotam/service-types';
import {IsArray} from '@krinopotam/js-helpers/helpersObjects/isArray';

export const useApiGetSelectedKeys = (value?: ILabeledValue | ILabeledValue[]): ITreeSelectApi['getSelectedKeys'] => {
    return (extraValue?: ILabeledValue | ILabeledValue[]) => {
        const val = extraValue ?? value;
        if (!val) return undefined;

        if (!IsArray(val)) return [val.value];
        const result: IKey[] = [];
        for (const item of val) {
            result.push(item.value);
        }
        return result;
    };
};
