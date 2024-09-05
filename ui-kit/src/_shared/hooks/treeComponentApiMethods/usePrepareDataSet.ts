import {IBaseTreeComponentProps, IKey} from "@src/_shared/@types/nodes";
import {useGetFieldNames} from "@src/_shared/hooks/treeComponentApiMethods/useGetFieldNames";
import React, {useCallback, useRef} from "react";

/** Converts the given data by applying the dataMutator function to each node in the tree. */
export const usePrepareDataSet = <T extends Record<string, unknown>>(
    props: IBaseTreeComponentProps<T>,
    setIsDataPlain: (isDataPlain: boolean) => void,
    setExpandedKeys: React.Dispatch<React.SetStateAction<IKey[] | undefined>>,
    prepareNodeFn?: (node: T, props: IBaseTreeComponentProps) => T,
) => {
    const getFieldNames = useGetFieldNames(props);
    const fieldNames = getFieldNames();
    const prevDataSetRef = useRef<T[] | undefined>(undefined);
    const prevUpdatedDataSetRef = useRef<T[] | undefined>(undefined);

    return useCallback(
        (dataSet: T[] | undefined): T[] | undefined => {
            if (prevDataSetRef.current === dataSet) return prevUpdatedDataSetRef.current;
            prevDataSetRef.current = dataSet;

            let isDataPlain = true;
            const expandedKeys: IKey[] = [];

            const recursive = (data: T[] | undefined) => {
                const result: T[] = [];
                if (!data) return result;
                for (const node of data) {
                    const preparedNode = prepareNodeFn ? prepareNodeFn(node, props) : {...node}
                    if (props.defaultExpandAll && !prevUpdatedDataSetRef.current && preparedNode[fieldNames.children])
                        expandedKeys.push(preparedNode[fieldNames.key] as IKey);

                    if ((preparedNode[fieldNames.children] as T[])?.length) {
                        isDataPlain = false;
                        (preparedNode[fieldNames.children] as T[]) = recursive(preparedNode[fieldNames.children] as T[]);
                    }

                    result.push(preparedNode);
                }
                return result;
            };

            const updatedDataSet = recursive(dataSet);
            setIsDataPlain(isDataPlain);
            if (props.defaultExpandAll && !prevUpdatedDataSetRef.current) setExpandedKeys(expandedKeys);

            prevUpdatedDataSetRef.current = updatedDataSet;
            return updatedDataSet;
        },
        [setIsDataPlain, props, setExpandedKeys, prepareNodeFn, fieldNames.children, fieldNames.key]
    );
};

