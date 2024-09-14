import {ITreeSelectApi, ITreeSelectNode} from '@src/treeSelect';
import {ILabeledValue} from '@src/treeSelect/types/types';
import {useCallback, useRef} from 'react';
import {LabeledValueToNode} from '@src/treeSelect/tools/dataConvertors';
import {IsArray} from "@krinopotam/js-helpers/helpersObjects/isArray";

export const useApiGetSelectedNodes = (api: ITreeSelectApi, value?: ILabeledValue | ILabeledValue[]) => {
    const dataSet = api.getDataSet();
    const fieldNames = api.getFieldNames();
    const prevDataRef = useRef< Record<string, unknown>[] | undefined>(undefined);
    const prevValsRef = useRef<ILabeledValue | ILabeledValue[] | undefined>(undefined);
    const prevNodesRef = useRef<Record<string, unknown>[] | undefined>(undefined);
    return useCallback(
        (extDataset?: ITreeSelectNode[], extValue?: ILabeledValue | ILabeledValue[]) => {
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

            if (!IsArray(val)) result.push(LabeledValueToNode(val, data, fieldNames));
            else {
                for (const v of val) {
                    const item = LabeledValueToNode(v, data, fieldNames);
                    if (item) result.push(item);
                }
            }
            prevNodesRef.current = result;
            return result;
        },
        [dataSet, fieldNames, value]
    );
};
