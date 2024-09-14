import {IFindNodeOptions} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';

export const isNodeCanBeSelected = (node: Record<string, unknown>, opts?: IFindNodeOptions) =>
    (opts?.notDisabled === false || node.disabled !== true) && (opts?.selectableOnly === false || node.selectable !== false);