import {ITreeSelectApi} from '@src/treeSelect';
import {useCallback} from 'react';
import {DefaultOptionType} from "rc-tree-select/es/TreeSelect";

export const useDefaultFilter = (api: ITreeSelectApi) => {
    const fields = api.getFieldNames()
    const titleField = fields.title;
    return useCallback((inputValue: string, treeNode: DefaultOptionType) => {
        if (!treeNode || typeof treeNode[titleField] !== 'string') return false;
        const title = treeNode[titleField] as string;
        return title.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0;
    }, [titleField]);
};
