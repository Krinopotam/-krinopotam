import {ITreeSelectNode, ITreeSelectProps} from '@src/treeSelect';
import {useCallback} from 'react';

export const useApiPrepareNode = ({titleRender, labelRender, dataMutator}: ITreeSelectProps) => {
    return useCallback(
        (node: ITreeSelectNode) => {
            let nodeClone = {...node};
            if (titleRender) nodeClone.__title = titleRender(nodeClone);
            if (labelRender) nodeClone.__label = labelRender(nodeClone);
            if (dataMutator) nodeClone = dataMutator(nodeClone);
            nodeClone.originalData = node;
            return nodeClone;
        },
        [dataMutator, labelRender, titleRender]
    );
};
