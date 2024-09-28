import React, {useCallback, useRef, useState} from 'react';
import {IFieldNames} from '@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes';
import {AnyType, IKey} from '@krinopotam/service-types';
import {useUpdateEffect} from '@krinopotam/common-hooks';

export const useDataSetState = <T extends Record<string, AnyType>>(
    propsDataSet: React.SetStateAction<T[] | undefined>,
    fieldNames: IFieldNames,
    prepareNodeFn?: (node: T) => T
): [T[] | undefined, React.Dispatch<React.SetStateAction<T[] | undefined>>, boolean, IKey[]] => {
    const prepareDataSet = usePrepareDataSet<T>(fieldNames, prepareNodeFn);

    const initialStateRef = useRef<[T[] | undefined, boolean, IKey[]] | undefined>(undefined);
    if (!initialStateRef.current) {
        initialStateRef.current = prepareDataSet(typeof propsDataSet === 'function' ? propsDataSet(undefined) : propsDataSet);
    }

    const [initPrepData, initIsPlain, initParentKeys] = initialStateRef.current;
    const [data, setData] = useState<T[] | undefined>(initPrepData);
    const [isPlain, setIsPlain] = useState(initIsPlain);
    const [parentKeys, setParentKeys] = useState<IKey[]>(initParentKeys);

    const setDataSet = useCallback(
        (newState: React.SetStateAction<T[] | undefined>) => {
            setData(oldState => {
                const state = typeof newState === 'function' ? newState(oldState) : newState;
                const [data, isPlain, parentKeys] = prepareDataSet(state);
                setIsPlain(isPlain);
                setParentKeys(parentKeys);
                return data;
            });
        },
        [prepareDataSet]
    );

    useUpdateEffect(() => {
        //allow to change dataset via props
        setDataSet(propsDataSet);
    }, [propsDataSet, setDataSet]);

    return [data, setDataSet, isPlain, parentKeys];
};

/** Converts the given data by applying the dataMutator function to each node in the tree. */
const usePrepareDataSet = <T extends Record<string, AnyType>>(
    fieldNames: {
        key: string;
        children: string;
        title: string;
    },
    prepareNodeFn?: (node: T) => T
) => {
    const prevDataRef = useRef<T[] | undefined>(undefined);
    const cachedResultRef = useRef<[T[] | undefined, boolean, IKey[]]>([undefined, true, []]);

    return useCallback(
        (dataSet: T[] | undefined): [T[] | undefined, boolean, IKey[]] => {
            if (prevDataRef.current === dataSet) return cachedResultRef.current;
            prevDataRef.current = dataSet;

            let isDataPlain = true;
            const parentKeys: IKey[] = [];
            const recursive = (nodes: T[] | undefined) => {
                const result: T[] = [];
                if (!nodes) return result;
                for (const node of nodes) {
                    const preparedNode = prepareNodeFn?.(node) ?? node;
                    if (preparedNode[fieldNames.children]) parentKeys.push(preparedNode[fieldNames.key] as IKey);

                    if ((preparedNode[fieldNames.children] as T[])?.length) {
                        isDataPlain = false;
                        (preparedNode[fieldNames.children] as T[]) = recursive(preparedNode[fieldNames.children] as T[]);
                    }
                    result.push(preparedNode);
                }
                return result;
            };

            const updatedDataSet = recursive(dataSet);
            const result: [T[] | undefined, boolean, IKey[]] = [updatedDataSet, isDataPlain, parentKeys];
            cachedResultRef.current = result;
            return result;
        },
        [prepareNodeFn, fieldNames.children, fieldNames.key]
    );
};
