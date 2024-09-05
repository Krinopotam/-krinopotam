import React, {Key, useCallback} from 'react';
import {useGetNode} from '@src/_shared/hooks/treeComponentApiMethods/useGetNode';
import {IFieldNames} from '@src/_shared/@types/nodes';
import {ITreeSelectNode} from "@src/treeSelect";

export const useGetSelectedKeys = (selectedKeys: Key[] | undefined): (() => Key[] | undefined) => {
    return useCallback(() => selectedKeys, [selectedKeys]);
};

export const useSetSelectedKeys = (
    setSelectedKeys: React.Dispatch<React.SetStateAction<Key[] | undefined>>
): ((keys: Key | Key[] | undefined | null) => void) => {
    return useCallback(
        keys => {
            if (!keys) setSelectedKeys(undefined)
            if (!Array.isArray(keys)) setSelectedKeys([keys as Key]);
            else setSelectedKeys(keys);
        },
        [setSelectedKeys]
    );
};

export const useGetSelectedNodes = <T extends Record<string, unknown>>(
    dataSet: T[] | undefined,
    fieldNames: IFieldNames,
    selectedKeys: Key[] | undefined
): ((extDataSet?: T[]) => T[] | undefined) => {
    const getNode = useGetNode(dataSet, fieldNames);
    return useCallback((extDataSet?: T[]) => {
        if (!selectedKeys) return undefined;

        const result: T[] = [];
        for (const key of selectedKeys) {
            const foundNode = getNode(key, extDataSet);
            if (foundNode) result.push(foundNode);
        }
        return result;
    }, [getNode, selectedKeys]);
};

export const useSelectNode = (
    selectedKeys: Key[] | undefined,
    setSelectedKeys: React.Dispatch<React.SetStateAction<Key[] | undefined>>,
    multiple: boolean | undefined
): ((key: Key, select?: boolean) => void) => {
    return useCallback(
        (key, isSelect = true) => {
            if (isSelect) {
                if (selectedKeys?.includes(key)) return;
                if (multiple) setSelectedKeys([...(selectedKeys ?? []), key]);
                else setSelectedKeys([key]);
            } else {
                if (!selectedKeys?.includes(key)) return;
                if (multiple) setSelectedKeys(selectedKeys?.filter(curKey => curKey !== key));
                else setSelectedKeys([]);
            }
        },
        [multiple, selectedKeys, setSelectedKeys]
    );
};
