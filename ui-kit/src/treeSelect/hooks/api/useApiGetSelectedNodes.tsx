import {ITreeSelectApi, ITreeSelectNode} from '@src/treeSelect';
import {IBaseValueWithLabel} from '@src/treeSelect/types/types';
import {useCallback, useMemo, useRef} from 'react';
import {valueWithLabelToNode} from '@src/treeSelect/tools/dataConvertors';

export const useApiGetSelectedNodes = (api: ITreeSelectApi, value?: IBaseValueWithLabel | IBaseValueWithLabel[]) => {
    const dataSet = api.getDataSet();
    const fieldNames = api.getFieldNames();
    const prevDataRef = useRef< Record<string, unknown>[] | undefined>(undefined);
    const prevValsRef = useRef<IBaseValueWithLabel | IBaseValueWithLabel[] | undefined>(undefined);
    const prevNodesRef = useRef<Record<string, unknown>[] | undefined>(undefined);
    return useCallback(
        (extDataset?: ITreeSelectNode[], extValue?: IBaseValueWithLabel | IBaseValueWithLabel[]) => {
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

            if (!Array.isArray(val)) result.push(valueWithLabelToNode(val, data, fieldNames));
            else {
                for (const v of val) {
                    const item = valueWithLabelToNode(v, data, fieldNames);
                    if (item) result.push(item);
                }
            }
            prevNodesRef.current = result;
            return result;
        },
        [dataSet, fieldNames, value]
    );
};

const useGetSelectedNodes = (api: ITreeSelectApi, value?: IBaseValueWithLabel | IBaseValueWithLabel[]) => {
    const dataSet = api.getDataSet();
    const fieldNames = api.getFieldNames();
    const prevDataRef = useRef< Record<string, unknown>[] | undefined>(undefined);
    const prevValsRef = useRef<IBaseValueWithLabel | IBaseValueWithLabel[] | undefined>(undefined);
    const prevNodesRef = useRef<Record<string, unknown>[] | undefined>(undefined);
    return useMemo(
        (extDataset?: ITreeSelectNode[], extValue?: IBaseValueWithLabel | IBaseValueWithLabel[]) => {
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

            if (!Array.isArray(val)) result.push(valueWithLabelToNode(val, data, fieldNames));
            else {
                for (const v of val) {
                    const item = valueWithLabelToNode(v, data, fieldNames);
                    if (item) result.push(item);
                }
            }
            prevNodesRef.current = result;
            return result;
        },
        [dataSet, fieldNames, value]
    );
};