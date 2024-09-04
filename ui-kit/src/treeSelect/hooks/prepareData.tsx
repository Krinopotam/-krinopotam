import React, {useCallback, useRef} from 'react';
import {ITreeSelectNode, ITreeSelectProps} from '@src/treeSelect';
import {useApiPrepareNode} from '@src/treeSelect/hooks/api';

/** Converts the given data by applying the dataMutator function to each node in the tree. */
export const usePrepareData = (
    treeProps: ITreeSelectProps,
    setIsDataPlain: (isDataPlain: boolean) => void,
    setExpandedKeys: React.Dispatch<React.SetStateAction<React.Key[] | undefined>>
) => {
    const prevDataSetRef = useRef<ITreeSelectProps['dataSet']>(undefined);
    const prevUpdatedDataSetRef = useRef<ITreeSelectProps['dataSet']>(undefined);
    const prepareNode = useApiPrepareNode(treeProps);
    return useCallback(
        (dataSet: ITreeSelectProps['dataSet']) => {
            if (prevDataSetRef.current === dataSet) return prevUpdatedDataSetRef.current;
            prevDataSetRef.current = dataSet;

            let isDataPlain = true;
            const expandedKeys: ITreeSelectProps['treeExpandedKeys'] = [];

            const recursive = (data: ITreeSelectProps['dataSet']) => {
                const result: ITreeSelectNode[] = [];
                if (!data) return result;
                for (const node of data) {
                    const preparedNode = prepareNode(node);
                    if (treeProps.treeDefaultExpandAll &&  preparedNode.children) expandedKeys.push(preparedNode.key);

                    if (preparedNode.children?.length) {
                        isDataPlain = false;
                        preparedNode.children = recursive(preparedNode.children);
                    }

                    result.push(preparedNode);
                }
                return result;
            };

            console.log(22222222222222)
            const updatedDataSet = recursive(dataSet);
            setIsDataPlain(isDataPlain);
            if (treeProps.treeDefaultExpandAll) setExpandedKeys(expandedKeys);
            console.log( '44444444', treeProps.treeDefaultExpandAll,expandedKeys  )
            prevUpdatedDataSetRef.current = updatedDataSet;
            return updatedDataSet;
        },
        [prepareNode, setExpandedKeys, setIsDataPlain, treeProps.treeDefaultExpandAll]
    );
};
