import {ITreeSelectNode, ITreeSelectProps} from '@src/treeSelect';
import {useCallback} from 'react';

export const useApiPrepareNode = (props: ITreeSelectProps) => {
    return useCallback(
        (node: ITreeSelectNode) => {
            let nodeClone = {...node};
            if (props.titleRender) nodeClone.__title = props.titleRender(nodeClone);
            if (props.labelRender) nodeClone.__label = props.labelRender(nodeClone);
            if (props.dataMutator) nodeClone = props.dataMutator(nodeClone);
            nodeClone.originalData = node;
            return nodeClone;
        },
        [props]
    );
};