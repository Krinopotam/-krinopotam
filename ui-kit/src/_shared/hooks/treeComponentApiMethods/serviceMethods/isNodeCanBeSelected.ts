import {AnyType} from "@krinopotam/service-types";
import {IFindNodeOptions} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';

export const isNodeCanBeSelected = (
    node: Record<string, AnyType>,
    fieldNames: {
        disabled: string;
        selectable: string;
    },
    opts?: IFindNodeOptions
) => (opts?.notDisabled === false || node[fieldNames.disabled] !== true) && (opts?.selectableOnly === false || node[fieldNames.selectable] !== false);
