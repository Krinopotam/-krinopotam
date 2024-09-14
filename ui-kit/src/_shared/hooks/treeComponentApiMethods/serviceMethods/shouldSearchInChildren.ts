import {IKey} from '@krinopotam/service-types';
import {IFindNodeOptions} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';

export const shouldSearchInChildren = (node: Record<string, unknown>, expandedKeys: IKey[] | undefined, fieldNames: {key: string}, opts?: IFindNodeOptions) => {
    return !opts?.sameLevelOnly && (opts?.expandedOnly === false || expandedKeys?.includes(node[fieldNames.key] as IKey));
};