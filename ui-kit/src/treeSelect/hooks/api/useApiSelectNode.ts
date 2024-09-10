import {Key, useCallback} from 'react';

import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {ITreeSelectApi} from '@src/treeSelect';
import {IBaseValueWithLabel} from '@src/treeSelect/types/types';
import {anyValueToValuesWithLabel} from "@src/treeSelect/tools/dataConvertors";

export const useApiSelectNode = (
    api: {
        getGetValues: ITreeSelectApi['getValues'];
        setSetValues: ITreeSelectApi['setValues'];
        getFieldNames: ITreeComponentApi['getFieldNames'];
    },
    multiple: boolean | undefined
): ITreeComponentApi['selectNode'] => {
    return useCallback(
        (node, isSelect = true) => {
            const fieldNames = api.getFieldNames();
            const key: Key = typeof node === 'object' ? (node[fieldNames.key] as Key) : node;
            const val = anyValueToValuesWithLabel(node, fieldNames)?.[0];
            if (!val) return;

            const values = api.getGetValues();
            if (isSelect) {
                if (isValuesIncludes(values, key)) return;
                if (multiple) api.setSetValues([...(values ?? []), val]);
                else api.setSetValues([val]);
            } else {
                if (!isValuesIncludes(values, key)) return;
                if (multiple) api.setSetValues(values?.filter(curKey => curKey !== key));
                else api.setSetValues([]);
            }
        },
        [api, multiple]
    );
};

const isValuesIncludes = (values: IBaseValueWithLabel[] | undefined, key: Key) => {
    if (!values) return false;
    for (const val of values) {
        if (val.value === key) return true;
    }
    return false;
};
