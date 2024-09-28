import {AnyType, IKey} from '@krinopotam/service-types';
import {getNodeFromTree} from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/getNodeFromTree';
import {IsArray} from '@krinopotam/js-helpers/helpersObjects/isArray';

export const isDescendant = (
    parent: Record<string, AnyType> | IKey | undefined,
    child: Record<string, AnyType> | IKey | undefined,
    dataSet: Record<string, AnyType>[],
    fieldNames: {
        key: string;
        children: string;
    }
) => {
    const parentKey = typeof parent === 'object' ? (parent[fieldNames.key] as IKey) : parent;
    const childKey = typeof child === 'object' ? (child[fieldNames.key] as IKey) : child;

    if (!parentKey || !childKey) return false;

    const parentNode = getNodeFromTree(parentKey, dataSet, fieldNames);
    if (!parentNode || !IsArray(parentNode[fieldNames.children])) return false;

    const foundNode = getNodeFromTree(childKey, parentNode[fieldNames.children] as Record<string, AnyType>[], fieldNames);
    return !!foundNode;
};
