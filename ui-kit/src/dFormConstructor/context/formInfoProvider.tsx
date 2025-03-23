import {FormInfo} from '@src/dFormConstructor/fields/formInfo';
import React, {createContext, useMemo, useState} from 'react';

export interface IFormInfoContext {
    formInfo: FormInfo;
    setFormInfo: (formInfo: FormInfo) => void;
}

export const FormInfoContext = createContext<IFormInfoContext>({} as IFormInfoContext);

export const FormInfoProvider = ({children, initialForm}: {children: React.ReactNode; initialForm?: FormInfo}) => {
    const [formInfo, setFormInfo] = useState(initialForm ?? new FormInfo({id: 'form1', label: 'Form'}));

    const value: IFormInfoContext = useMemo(() => {
        return {formInfo, setFormInfo};
    }, [formInfo]);

    return <FormInfoContext.Provider value={value}>{children}</FormInfoContext.Provider>;
};
