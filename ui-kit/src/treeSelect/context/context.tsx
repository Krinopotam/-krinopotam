import React, {createContext, useMemo, useRef} from 'react';

interface ITreeSelectContext {
    ctrlPressedRef: React.MutableRefObject<boolean>;
    dialogOpenedRef: React.MutableRefObject<boolean>;
}

export const TreeSelectContext = createContext<ITreeSelectContext>(undefined as unknown as ITreeSelectContext);

export const TreeSelectProvider = ({children}: {children: React.ReactNode}) => {
    const ctrlPressedRef = useRef(false);
    const dialogOpenedRef = useRef(false);
    const context:ITreeSelectContext = useMemo(
        () => ({
            ctrlPressedRef,
            dialogOpenedRef,
        }),
        [ctrlPressedRef]
    );

    return <TreeSelectContext.Provider value={context}>{children}</TreeSelectContext.Provider>;
};
