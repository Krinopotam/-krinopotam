import React, {createContext, PropsWithChildren, useMemo, useState} from 'react';

export interface ISelectedFieldContext {
    fieldId: string | undefined;
    setFieldId: (val: string | undefined) => void;
}

export const SelectedFieldContext = createContext<ISelectedFieldContext>({} as ISelectedFieldContext);

export const SelectedFieldProvider = ({children}: PropsWithChildren) => {
    const [fieldId, setFieldId] = useState<string|undefined>(undefined);

    const value: ISelectedFieldContext = useMemo(() => {
        return {fieldId, setFieldId};
    }, [fieldId]);

    return <SelectedFieldContext.Provider value={value}>{children}</SelectedFieldContext.Provider>;
};
