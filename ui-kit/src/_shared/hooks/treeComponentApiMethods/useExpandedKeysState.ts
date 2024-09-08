import React, {useEffect, useRef, useState} from 'react';

export const useExpandedKeysState = (
    expandedKeys: React.Key[] | undefined,
    defaultExpandedKeys: React.Key[] | undefined,
    defaultExpandAll: boolean | undefined,
    parentsKeys: React.Key[] | undefined
): [React.Key[] | undefined, React.Dispatch<React.SetStateAction<React.Key[] | undefined>>] => {
    const allExpanded = defaultExpandAll !== false ? parentsKeys : undefined;
    const [expKeys, setExpKeys] = useState(expandedKeys ?? defaultExpandedKeys ?? allExpanded);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        setExpKeys(expandedKeys); //user can update expandedKeys via props
    }, [expandedKeys]);
    return [expKeys, setExpKeys];
};
