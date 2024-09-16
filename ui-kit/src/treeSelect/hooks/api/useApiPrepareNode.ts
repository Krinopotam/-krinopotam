import {ITreeSelectNode, ITreeSelectProps} from '@src/treeSelect';
import {useCallback} from 'react';

export const useApiPrepareNode = ({dataMutator}: ITreeSelectProps) => {
    return useCallback(
        (node: ITreeSelectNode) => {
            if (!dataMutator) return node;
            let nodeClone = {...node};
            if (dataMutator) nodeClone = dataMutator(nodeClone);
            return nodeClone;
        },
        [dataMutator]
    );
};
