import React, {Key, useEffect, useMemo, useRef, useState} from 'react';

export const useApiDataSetState = <T extends Record<string, unknown>>(
    propsDataSet: T[] | undefined,
    fieldNames: {key: string; children: string; title: string},
    prepareNodeFn?: (node: T) => T
): [T[] | undefined, React.Dispatch<React.SetStateAction<T[] | undefined>>, boolean, Key[]] => {
    const [preparedDataSet, isPlain, parentKeys] = useGetPreparedDataSet(propsDataSet, fieldNames, prepareNodeFn);

    const [dataSet, setDataSet] = useState(preparedDataSet);

    const isFirstRender = useRef(true);

    /** Set dataSet if props changed */
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        setDataSet(preparedDataSet); //user can set dataSet in props
    }, [preparedDataSet]);

    return [dataSet, setDataSet, isPlain, parentKeys];
};

/** Converts the given data by applying the dataMutator function to each node in the tree. */
const useGetPreparedDataSet = <T extends Record<string, unknown>>(
    dataSet: T[] | undefined,
    fieldNames: { key: string; children: string; title: string },
    prepareNodeFn?: (node: T) => T
) => {
    return useMemo(
        (): [T[] | undefined, boolean, Key[]] => {

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
            return [updatedDataSet, isDataPlain, parentKeys];
        },
        [dataSet, prepareNodeFn, fieldNames.children, fieldNames.key]
    );
};
