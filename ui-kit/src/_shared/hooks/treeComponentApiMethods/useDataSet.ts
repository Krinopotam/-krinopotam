import React, {useCallback, useEffect, useState} from 'react';
import {IBaseTreeComponentProps} from '@src/_shared/@types/nodes';
import {usePrepareDataSet} from '@src/_shared/hooks/treeComponentApiMethods/usePrepareDataSet';

export const useDataSet = <T extends Record<string, unknown>>(
    props: IBaseTreeComponentProps<T>,
    setIsDataPlain: React.Dispatch<React.SetStateAction<boolean>>,
    setExpandedKeys: React.Dispatch<React.SetStateAction<React.Key[] | undefined>>,
    prepareNodeFn?: (node: T, props: IBaseTreeComponentProps) => T
): [T[] | undefined, React.Dispatch<React.SetStateAction<T[] | undefined>>] => {
    const prepareData = usePrepareDataSet<T>(props, setIsDataPlain, setExpandedKeys, prepareNodeFn);
    const [dataSet, setDataSet] = useState(prepareData(props.dataSet));
    /** Set dataSet if props changed */
    useEffect(() => {
        setDataSet(prepareData(props.dataSet)); //user can set dataSet in props
    }, [prepareData, props.dataSet]);

    return [dataSet, setDataSet];
};

export const useGetDataSet = <T extends Record<string, unknown>>(dataSet: T[] | undefined): (() => T[] | undefined) => {
    return useCallback(() => dataSet, [dataSet]);
};

export const useSetDataSet = <T extends Record<string, unknown>>(
    setDataSet: React.Dispatch<React.SetStateAction<T[] | undefined>>
): ((dataSet: T[] | undefined | null) => void) => {
    return useCallback(
        dataSet => {
            setDataSet(dataSet ?? []);
        },
        [setDataSet]
    );
};

export const useIsDataPlainList = (isDataPlain: boolean) => {
    return useCallback(() => isDataPlain, [isDataPlain]);
};