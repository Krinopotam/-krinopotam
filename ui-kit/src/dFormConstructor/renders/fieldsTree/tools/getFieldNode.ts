import {IExtTreeNode} from '@src/tree';
import {BaseComponentInfo} from '@src/dFormConstructor/fields/baseComponentInfo';

/** @returns subtree node by field id (and optionally field code) */
export const getNodeByFieldId = (dataSet: IExtTreeNode<{fieldInfo: BaseComponentInfo}>[], fieldId: string, fieldCode?: string) => {
    const recursive = (children: IExtTreeNode<{fieldInfo: BaseComponentInfo}>[]): IExtTreeNode<{fieldInfo: BaseComponentInfo}> | undefined => {
        for (const node of children) {
            if (node.fieldInfo.getId() === fieldId && (!fieldCode || node.fieldInfo.CODE === fieldCode)) return node;
            if (!node.children?.length) continue;

            const result = recursive(node.children as IExtTreeNode<{fieldInfo: BaseComponentInfo}>[]);
            if (result) return result;
        }

        return undefined;
    };

    return recursive(dataSet);
};
