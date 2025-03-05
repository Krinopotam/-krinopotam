import {ITreeSelectApi, ITreeSelectNode} from '@src/treeSelect';
import {ILabeledValue} from '@src/treeSelect/types/types';
import {IsArray} from '@krinopotam/js-helpers/helpersObjects/isArray';
import {labeledValueToNode} from '@src/treeSelect/tools/labeledValueToNode';

export const useApiGetSelectedNodes = (api: ITreeSelectApi, value: ILabeledValue | ILabeledValue[] | null): ITreeSelectApi['getSelectedNodes'] => {
    return (extDataset?: ITreeSelectNode[], extValue?: ILabeledValue | ILabeledValue[]) => {
        const dataSet = api.getDataSet();
        const fieldNames = api.getFieldNames();

        const data = extDataset ?? dataSet;
        const val = extValue ?? value;

        if (!val) return undefined;

        const result: ITreeSelectNode[] = [];

        if (!IsArray(val)) result.push(labeledValueToNode(val, data, fieldNames));
        else {
            for (const v of val) {
                const item = labeledValueToNode(v, data, fieldNames);
                if (item) result.push(item);
            }
        }
        return result;
    };
};
