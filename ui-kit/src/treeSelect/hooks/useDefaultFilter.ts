import {ITreeSelectApi} from '@src/treeSelect';
import {DataNode} from "rc-tree-select/lib/interface";

export const useDefaultFilter = (api: ITreeSelectApi) => {
    const fields = api.getFieldNames();
    const titleField = fields.title;
    return (inputValue: string, treeNode: DataNode) => {
        if (!treeNode || typeof treeNode[titleField] !== 'string') return false;
        const title = treeNode[titleField];
        return title.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0;
    };
};
