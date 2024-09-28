import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {AnyType, IKey} from '@krinopotam/service-types';
import {IsArray} from '@krinopotam/js-helpers/helpersObjects/isArray';
import {getNodeFromTree} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getNodeFromTree';

export const useApiSelectNode = (
    api: {
        getDataSet: ITreeComponentApi['getDataSet'];
        getSelectedKeys: ITreeComponentApi['getSelectedKeys'];
        setSelectedKeys: ITreeComponentApi['setSelectedKeys'];
        getFieldNames: ITreeComponentApi['getFieldNames'];
    },
    multiple: boolean | undefined
): ITreeComponentApi['selectNode'] => {
    return (node, isSelect = true, withChildren = false, externalDataset = undefined) => {
        const fieldNames = api.getFieldNames();
        const key = typeof node === 'object' ? (node[fieldNames.key] as IKey) : node;
        if (!key) return;

        const dataSet = externalDataset ?? api.getDataSet();

        const curSelectedKeys = api.getSelectedKeys();

        if (withChildren) {
            const newSelectedKeys = selectWithChildren(key, isSelect, curSelectedKeys, dataSet, fieldNames);
            api.setSelectedKeys(newSelectedKeys);
            return;
        }

        let newSelectedKeys: IKey[] = [];

        if (isSelect) {
            if (curSelectedKeys?.includes(key)) return;
            if (multiple) newSelectedKeys = [...(curSelectedKeys ?? []), key];
            else newSelectedKeys = [key];
        } else {
            if (!curSelectedKeys?.includes(key)) return;
            if (multiple) newSelectedKeys = curSelectedKeys?.filter(curKey => curKey !== key);
            else newSelectedKeys = [];
        }

        api.setSelectedKeys(newSelectedKeys);
    };
};

const selectWithChildren = (
    key: IKey,
    isSelect: boolean,
    curSelectedKeys: IKey[] | undefined,
    dataSet: Record<string, AnyType>[] | undefined,
    fieldNames: {
        key: string;
        children: string;
        disabled: string;
        selectable: string;
    }
) => {
    const node = getNodeFromTree(key, dataSet, fieldNames);

    if (!node || !dataSet) return curSelectedKeys;
    const result: IKey[] = [...(curSelectedKeys ?? [])];

    const recursive = (node: Record<string, AnyType>) => {
        const curKey = node[fieldNames.key] as IKey;
        if (!curKey) return;

        const idx = result.indexOf(curKey);
        if (isSelect) {
            if (idx > -1 || node[fieldNames.disabled] || node[fieldNames.selectable] === false) return;
            result.push(curKey);
        } else {
            if (idx < 0) return;
            result.splice(idx, 1);
        }

        if (!IsArray(node[fieldNames.children])) return;

        for (const curNode of node[fieldNames.children] as Record<string, AnyType>[]) {
            recursive(curNode);
        }
    };

    recursive(node);
    return result;
};
