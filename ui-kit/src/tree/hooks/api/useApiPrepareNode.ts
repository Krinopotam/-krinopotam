import {useCallback} from 'react';
import {IExtTreeNode, IExtTreeProps} from '@src/tree/types/types';

export const useApiPrepareNode = ({dataMutator}: IExtTreeProps) => {
    //needs stable function instance (useCallback)
    return useCallback(
        (node: IExtTreeNode) => {
            if (!dataMutator) return node;
            let nodeClone = {...node};
            if (dataMutator) nodeClone = dataMutator(nodeClone);
            return nodeClone;
        },
        [dataMutator]
    );
};
