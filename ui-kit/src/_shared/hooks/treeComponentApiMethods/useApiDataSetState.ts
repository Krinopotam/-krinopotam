import React, {Key, useCallback, useRef, useState} from 'react';

export const useApiDataSetState = <T extends Record<string, unknown>>(
    initialState: React.SetStateAction<T[] | undefined>,
    fieldNames: {
        key: string;
        children: string;
        title: string;
    },
    prepareNodeFn?: (node: T) => T
): [T[] | undefined, React.Dispatch<React.SetStateAction<T[] | undefined>>, boolean, Key[]] => {
    const prepareDataSet = usePrepareDataSet<T>(fieldNames, prepareNodeFn);

    const initialStateRef = useRef<[T[] | undefined, boolean, Key[]] | undefined>(undefined);
    if (!initialStateRef.current) {
        const initState = typeof initialState === 'function' ? initialState(undefined) : initialState;
        initialStateRef.current = prepareDataSet(initState);
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
