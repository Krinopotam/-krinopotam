import React, {createContext, useMemo, useRef} from 'react';

interface ITreeSelectContext {
    ctrlPressedRef: React.MutableRefObject<boolean>;
    editFormOpenedRef: React.MutableRefObject<boolean>;
}

export const TreeSelectContext = createContext<ITreeSelectContext>(undefined as unknown as ITreeSelectContext);

export const TreeSelectProvider = ({children}: {children: React.ReactNode}) => {
    const ctrlPressedRef = useRef(false);
    const editFormOpenedRef = useRef(false);
    const context = useMemo(
        () => ({
            ctrlPressedRef,
            editFormOpenedRef,
        }),
        [ctrlPressedRef]
    );

    return <TreeSelectContext.Provider value={context}>{children}</TreeSelectContext.Provider>;
};
