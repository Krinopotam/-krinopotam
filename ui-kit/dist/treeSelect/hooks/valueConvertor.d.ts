import React from 'react';
import { ITreeSelectNode, ITreeSelectPlainValue, ITreeSelectProps, ITreeSelectValue, ITreeSelectApi } from '../../treeSelect';
export interface ITreeSelectInternalValue {
    value: string | number;
    label: React.ReactNode;
}
export declare const useValueConvertor: (fieldNames: ITreeSelectProps['fieldNames'], labelRender: ITreeSelectProps['labelRender'], titleRender: ITreeSelectProps['titleRender'], multiple: ITreeSelectProps['multiple']) => [ITreeSelectInternalValue | ITreeSelectInternalValue[] | null | undefined, React.MutableRefObject<ITreeSelectNode[]>, (nodes: ITreeSelectValue) => void];
export declare const usePlainValuesToNodes: (api: ITreeSelectApi) => (plainValues: ITreeSelectPlainValue | ITreeSelectPlainValue[] | null | undefined) => ITreeSelectNode[] | undefined;
