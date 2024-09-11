import React, {Key, useCallback, useEffect, useRef, useState} from 'react';
import {IFieldNames} from "@src/_shared/hooks/treeComponentApiMethods/types/treeApiTypes";

export const useDataSetState = <T extends Record<string, unknown>>(
    propsDataSet: React.SetStateAction<T[] | undefined>,
    fieldNames: IFieldNames,
    prepareNodeFn?: (node: T) => T
): [T[] | undefined, React.Dispatch<React.SetStateAction<T[] | undefined>>, boolean, Key[]] => {
    const propsState = typeof propsDataSet === 'function' ? propsDataSet(undefined) : propsDataSet;
    const prepareDataSet = usePrepareDataSet<T>(fieldNames, prepareNodeFn);

    const initialStateRef = useRef<[T[] | undefined, boolean, Key[]] | undefined>(undefined);
    if (!initialStateRef.current) {
        initialStateRef.current = prepareDataSet(propsState);
    }

    const [initPrepData, initIsPlain, initParentKeys] = initialStateRef.current;
    const [data, setData] = useState<T[] | undefined>(initPrepData);
    const [isPlain, setIsPlain] = useState(initIsPlain);
    const [parentKeys, setParentKeys] = useState<Key[]>(initParentKeys);

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

    const isFirstRender = useRef(true);
    useEffect(() => {
        //allow to change dataset via props
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        setDataSet(propsState);
    }, [propsState, setDataSet]);

    return [data, setDataSet, isPlain, parentKeys];
};

/** Converts the given data by applying the dataMutator function to each node in the tree. */
const usePrepareDataSet = <T extends Record<string, unknown>>(
    fieldNames: {
        key: string;
        children: string;
        title: string;
    },
    prepareNodeFn?: (node: T) => T
) => {
    const prevDataRef = useRef<T[] | undefined>(undefined);
    const cachedResultRef = useRef<[T[] | undefined, boolean, Key[]]>([undefined, true, []]);

    return useCallback(
        (dataSet: T[] | undefined): [T[] | undefined, boolean, Key[]] => {
            if (prevDataRef.current === dataSet) return cachedResultRef.current;
            prevDataRef.current = dataSet;

            let isDataPlain = true;
            const parentKeys: Key[] = [];
            const recursive = (nodes: T[] | undefined) => {
                const result: T[] = [];
                if (!nodes) return result;
                for (const node of nodes) {
                    const preparedNode = prepareNodeFn ? prepareNodeFn(node) : {...node};
                    if (preparedNode[fieldNames.children]) parentKeys.push(preparedNode[fieldNames.key] as Key);

                    if ((preparedNode[fieldNames.children] as T[])?.length) {
                        isDataPlain = false;
                        (preparedNode[fieldNames.children] as T[]) = recursive(preparedNode[fieldNames.children] as T[]);
                    }
                    result.push(preparedNode);
                }
                return result;
            };

            const updatedDataSet = recursive(dataSet);
            const result: [T[] | undefined, boolean, Key[]] = [updatedDataSet, isDataPlain, parentKeys];
            cachedResultRef.current = result;
            return result;
        },
        [prepareNodeFn, fieldNames.children, fieldNames.key]
    );
};
