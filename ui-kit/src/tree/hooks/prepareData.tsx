import {useCallback, useRef} from 'react';
import {IExtTreeDataNode, IExtTreeProps} from '@src/components/extendedTree/types/types';
import {useApiPrepareNode} from "./api";

/** Converts the given data by applying the dataMutator function to each node in the tree. */
export const usePrepareData = (treeProps: IExtTreeProps) => {
    const prevDataSetRef = useRef<IExtTreeProps['dataSet']>(undefined);
    const prevMutatedDataSetRef = useRef<IExtTreeProps['dataSet']>(undefined);
    const mutateNode = useApiPrepareNode(treeProps);
    return useCallback(
        (dataSet: IExtTreeProps['dataSet']) => {
            if (prevDataSetRef.current === dataSet) return prevMutatedDataSetRef.current;
            prevDataSetRef.current = dataSet;

            const mutateRecursive = (data: IExtTreeProps['dataSet']) => {
                const result: IExtTreeDataNode[] = [];
                if (!data) return result;
                for (const node of data) {
                    const mutatedNode = mutateNode(node);
                    if (mutatedNode.children?.length) mutatedNode.children = mutateRecursive(mutatedNode.children);

                    result.push(mutatedNode);
                }
                return result;
            };

            const mutatedDataSet = mutateRecursive(dataSet);
            prevMutatedDataSetRef.current = mutatedDataSet;
            return mutatedDataSet;
        },
        [mutateNode]
    );
};

