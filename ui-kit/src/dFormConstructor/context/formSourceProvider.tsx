import React, {createContext, PropsWithChildren, useState} from 'react';

type IUpdatedBy = 'default' | 'fieldsTree' | 'propsEditor' | 'codeEditor';

export interface IFormSourceContext {
    source: string;
    updatedBy: IUpdatedBy;
    setSource: (source: string, updatedBy: IUpdatedBy) => void;
}

export const FormSourceContext = createContext<IFormSourceContext>({} as IFormSourceContext);

export const FormSourceProvider = ({children}: PropsWithChildren) => {
    const value = useSourceState();
    return <FormSourceContext.Provider value={value}>{children}</FormSourceContext.Provider>;
};

const useSourceState = (): IFormSourceContext => {
    const [source, setSource] = useState('');
    const [updatedBy, setUpdatedBy] = useState<IUpdatedBy>('default');

    const extSetSourceProps = (src: string, updBy: IUpdatedBy) => {
        setSource(src);
        setUpdatedBy(updBy);
    };

    console.log(source)

    return {
        source,
        setSource: extSetSourceProps,
        updatedBy,
    };
};
