import {useCallback} from 'react';

import {ITreeComponentApi} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {ITreeSelectApi} from '@src/treeSelect';
import {ILabeledValue} from '@src/treeSelect/types/types';
import {IKey} from '@krinopotam/service-types';
import {anyValueToValuesWithLabel} from '@src/treeSelect/tools/anyValueToValuesWithLabel';

export const useApiSelectNode = (
    api: {
        getValues: ITreeSelectApi['getValues'];
        setValues: ITreeSelectApi['setValues'];
        getFieldNames: ITreeComponentApi['getFieldNames'];
    },
    multiple: boolean | undefined
): ITreeComponentApi['selectNode'] => {
    return useCallback(
        (node, isSelect = true) => {
            const fieldNames = api.getFieldNames();
            const newVal = anyValueToValuesWithLabel(node, fieldNames)?.[0];
            if (!newVal) return;

            const values = api.getValues();
            if (isSelect) {
                if (isValuesIncludes(values, newVal.value)) return;
                if (multiple) api.setValues([...(values ?? []), newVal]);
                else api.setValues([newVal]);
            } else {
                if (!isValuesIncludes(values, newVal.value)) return;
                if (multiple) api.setValues(values?.filter(curValue => curValue.value !== newVal.value) ?? null);
                else api.setValues([]);
            }
        },
        [api, multiple]
    );
};

const isValuesIncludes = (values: ILabeledValue[] | null | undefined, key: IKey) => {
    if (!values) return false;
    for (const val of values) {
        if (val.value === key) return true;
    }
    return false;
};
