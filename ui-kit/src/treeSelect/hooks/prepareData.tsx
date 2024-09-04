import {useCallback, useRef} from 'react';
import {ITreeSelectNode, ITreeSelectProps} from "@src/treeSelect";
import {useApiPrepareNode} from "@src/treeSelect/hooks/api";

/** Converts the given data by applying the dataMutator function to each node in the tree. */
export const usePrepareData = (treeProps: ITreeSelectProps, setIsDataPlain: (isDataPlain: boolean) => void) => {
    const prevDataSetRef = useRef<ITreeSelectProps['dataSet']>(undefined);
    const prevMutatedDataSetRef = useRef<ITreeSelectProps['dataSet']>(undefined);
    const mutateNode = useApiPrepareNode(treeProps);
    return useCallback(
        (dataSet: ITreeSelectProps['dataSet']) => {
            if (prevDataSetRef.current === dataSet) return prevMutatedDataSetRef.current;
            prevDataSetRef.current = dataSet;

            let isDataPlain = true;

            const mutateRecursive = (data: ITreeSelectProps['dataSet']) => {
                const result: ITreeSelectNode[] = [];
                if (!data) return result;
                for (const node of data) {
                    const mutatedNode = mutateNode(node);
                    if (mutatedNode.children?.length) {
                        isDataPlain = false;
                        mutatedNode.children = mutateRecursive(mutatedNode.children);
                    }

                    result.push(mutatedNode);
                }
                return result;
            };


            const mutatedDataSet = mutateRecursive(dataSet);
            setIsDataPlain(isDataPlain)
            prevMutatedDataSetRef.current = mutatedDataSet;
            return mutatedDataSet;
        },
        [mutateNode]
    );
};

