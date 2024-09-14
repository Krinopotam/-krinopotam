import React, {useEffect, useRef, useState} from 'react';
import {IKey} from '@krinopotam/service-types';

export const useExpandedKeysState = (
    expandedKeys: IKey[] | undefined,
    defaultExpandedKeys: IKey[] | undefined,
    defaultExpandAll: boolean | undefined,
    parentsKeys: IKey[] | undefined
): [IKey[] | undefined, React.Dispatch<React.SetStateAction<IKey[] | undefined>>] => {
    const allExpanded = defaultExpandAll !== false && parentsKeys?.length ? parentsKeys : undefined;
    const [expKeys, setExpKeys] = useState(expandedKeys ?? defaultExpandedKeys ?? allExpanded);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        if (expKeys) return;
        setExpKeys(expandedKeys ?? defaultExpandedKeys ?? allExpanded); //user can update expandedKeys via props
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allExpanded, defaultExpandedKeys, expandedKeys]);
    return [expKeys, setExpKeys];
};
