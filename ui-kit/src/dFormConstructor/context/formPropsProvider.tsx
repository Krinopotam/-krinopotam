import React, {createContext, PropsWithChildren, useState} from 'react';
import {IDFormProps} from '@src/dForm';

type IUpdatedBy = 'default' | 'fieldsTree' | 'propsEditor' | 'codeEditor';

export interface IFormPropsContext {
    formProps: IDFormProps;
    updatedBy: IUpdatedBy;
    setFormProps: (formProps: IDFormProps, updatedBy: IUpdatedBy) => void;
}

export const FormPropsContext = createContext<IFormPropsContext>({} as IFormPropsContext);

export const FormPropsProvider = ({children}: PropsWithChildren) => {
    const value = useFormPropsState();
    return <FormPropsContext.Provider value={value}>{children}</FormPropsContext.Provider>;
};

const useFormPropsState = () => {
    const [formProps, setFormProps] = useState<IDFormProps>({});
    const [updatedBy, setUpdatedBy] = useState<IUpdatedBy>('default');

    const extSetFormProps = (props: IDFormProps, updBy: IUpdatedBy) => {
        setFormProps(props);
        setUpdatedBy(updBy);
    };

    return {
        formProps,
        setFormProps: extSetFormProps,
        updatedBy,
    };
};
