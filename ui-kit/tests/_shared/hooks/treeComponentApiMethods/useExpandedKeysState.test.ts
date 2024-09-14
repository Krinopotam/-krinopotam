import React, {useEffect, useRef, useState} from 'react';

export const useExpandedKeysState = (
    expandedKeys: React.Key[] | undefined,
    defaultExpandedKeys: React.Key[] | undefined,
    defaultExpandAll: boolean | undefined,
    parentsKeys: React.Key[] | undefined
): [React.Key[] | undefined, React.Dispatch<React.SetStateAction<React.Key[] | undefined>>] => {
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
