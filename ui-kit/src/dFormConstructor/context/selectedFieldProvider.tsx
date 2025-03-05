import React, {createContext, PropsWithChildren, useMemo, useState} from 'react';

import {BaseComponentInfo} from '@src/dFormConstructor/fields/baseComponentInfo';

export interface ISelectedNodeContext {
    selectedField: BaseComponentInfo | undefined;
    setSelectedField: (field: BaseComponentInfo | undefined) => void;
}

export const SelectedFieldContext = createContext<ISelectedNodeContext>({} as ISelectedNodeContext);

export const SelectedFieldProvider = ({children}: PropsWithChildren) => {
    const [field, setField] = useState<BaseComponentInfo | undefined>(undefined);

    const value: ISelectedNodeContext = useMemo(() => {
        return {selectedField: field, setSelectedField: setField};
    }, [field]);

    return <SelectedFieldContext.Provider value={value}>{children}</SelectedFieldContext.Provider>;
};
