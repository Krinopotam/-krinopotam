import {FormInfo} from '@src/dFormConstructor/fields/formInfo';
import React, {createContext, PropsWithChildren, useMemo, useState} from 'react';

export interface IFormInfoContext {
    formInfo: FormInfo;
    setFormInfo: (formInfo: FormInfo) => void;
}

export const FormInfoContext = createContext<IFormInfoContext>({} as IFormInfoContext);

export const FormInfoProvider = ({children}: PropsWithChildren) => {
    const [formInfo, setFormInfo] = useState(new FormInfo({id: 'form1', label: 'MyForm'}));

    const value: IFormInfoContext = useMemo(() => {
        return {formInfo, setFormInfo};
    }, [formInfo]);

    return <FormInfoContext.Provider value={value}>{children}</FormInfoContext.Provider>;
};
