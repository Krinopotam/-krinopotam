import {ITreeSelectNode, ITreeSelectApi} from '@src/treeSelect';
import {useCallback} from 'react';
import {DefaultOptionType} from "rc-tree-select/es/TreeSelect";

export const useDefaultFilter = (api:ITreeSelectApi) => {
    const fields = api.getProps().fieldNames
    const labelKey = fields?.label || 'label';
    return useCallback((inputValue: string, treeNode: DefaultOptionType) => {
        const node = treeNode as ITreeSelectNode;
        if (!node || typeof node[labelKey] !== 'string') return false;
        const title = node[labelKey] as string;
        return title.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0;
    }, [labelKey]);
};
