import React, {createContext, PropsWithChildren, useState} from 'react';
import {IDFormProps} from '@src/dForm';

type IUpdatedBy = 'default' | 'fieldsTree' | 'propsEditor' | 'codeEditor';

export interface IFormPropsContext {
    formProps: IDFormProps | null;
    source: string;
    updatedBy: IUpdatedBy;
    setFormProps: (formProps: IDFormProps | null, source: string, updatedBy: IUpdatedBy) => void;
}

export const FormPropsContext = createContext<IFormPropsContext>({} as IFormPropsContext);

export const FormPropsProvider = ({children}: PropsWithChildren) => {
    const value = useFormPropsState();
    return <FormPropsContext.Provider value={value}>{children}</FormPropsContext.Provider>;
};

const useFormPropsState = (): IFormPropsContext => {
    const [formProps, setFormProps] = useState<IDFormProps | null>({});
    const [source, setSource] = useState('');
    const [updatedBy, setUpdatedBy] = useState<IUpdatedBy>('default');

    const extSetFormProps = (props: IDFormProps | null, src: string, updBy: IUpdatedBy) => {
        setFormProps(props);
        setSource(src);
        setUpdatedBy(updBy);
    };

    return {
        formProps,
        source,
        setFormProps: extSetFormProps,
        updatedBy,
    };
};
