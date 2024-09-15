import React, {useState} from 'react';
import {IKey} from '@krinopotam/service-types';
import {useUpdateEffect} from '@krinopotam/common-hooks';

export const useExpandedKeysState = (
    expandedKeys: IKey[] | undefined,
    defaultExpandedKeys: IKey[] | undefined,
    defaultExpandAll: boolean | undefined,
    parentsKeys: IKey[] | undefined
): [IKey[] | undefined, React.Dispatch<React.SetStateAction<IKey[] | undefined>>] => {
    const allExpanded = defaultExpandAll !== false && parentsKeys?.length ? parentsKeys : undefined;
    const [expKeys, setExpKeys] = useState(expandedKeys ?? defaultExpandedKeys ?? allExpanded);

    useUpdateEffect(() => {
        if (expKeys) return;
        setExpKeys(expandedKeys ?? defaultExpandedKeys ?? allExpanded); //user can update expandedKeys via props
    }, [allExpanded, defaultExpandedKeys, expandedKeys]);
    return [expKeys, setExpKeys];
};
