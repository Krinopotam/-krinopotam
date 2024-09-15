import {ITreeSelectApi, ITreeSelectNode} from '@src/treeSelect';
import {ILabeledValue} from '@src/treeSelect/types/types';
import {useRef} from 'react';
import {IsArray} from '@krinopotam/js-helpers/helpersObjects/isArray';
import {labeledValueToNode} from '@src/treeSelect/tools/labeledValueToNode';

export const useApiGetSelectedNodes = (api: ITreeSelectApi, value?: ILabeledValue | ILabeledValue[]): ITreeSelectApi['getSelectedNodes'] => {
    const dataSet = api.getDataSet();
    const fieldNames = api.getFieldNames();
    const prevDataRef = useRef<Record<string, unknown>[] | undefined>(undefined);
    const prevValsRef = useRef<ILabeledValue | ILabeledValue[] | undefined>(undefined);
    const prevNodesRef = useRef<Record<string, unknown>[] | undefined>(undefined);
    return (extDataset?: ITreeSelectNode[], extValue?: ILabeledValue | ILabeledValue[]) => {
        const data = extDataset ?? dataSet;
        const val = extValue ?? value;

        if (prevDataRef.current === data && prevValsRef.current === val) return prevNodesRef.current;
        prevDataRef.current = data;
        prevValsRef.current = val;

        if (!val) {
            prevNodesRef.current = undefined;
            return undefined;
        }

        const result: ITreeSelectNode[] = [];

        if (!IsArray(val)) result.push(labeledValueToNode(val, data, fieldNames));
        else {
            for (const v of val) {
                const item = labeledValueToNode(v, data, fieldNames);
                if (item) result.push(item);
            }
        }
        prevNodesRef.current = result;
        return result;
    };
};
