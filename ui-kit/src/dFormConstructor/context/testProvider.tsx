import React, {createContext, PropsWithChildren, useMemo, useState} from 'react';

export interface ITestContext {
    val: string;
    setVal: (val: string) => void;
}

export const TestContext = createContext<ITestContext>({} as ITestContext);

export const TestProvider = ({children}: PropsWithChildren) => {
    const [val, setVal] = useState('');

    const value: ITestContext = useMemo(() => {
        console.log('testcontxt', val)
        return {val, setVal};
    }, [val]);

    return <TestContext.Provider value={value}>{children}</TestContext.Provider>;
};
