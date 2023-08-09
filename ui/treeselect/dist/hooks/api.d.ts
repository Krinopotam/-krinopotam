import { ITreeSelectNode, ITreeSelectPlainValue, ITreeSelectProps, ITreeSelectValue } from '../treeSelect';
import { ITreeSelectInternalValue } from './valueConvertor';
import { IButtonsRowApi } from '@krinopotam/ui-buttons-row';
export interface ITreeSelectApi {
    getId: () => string;
    isMounted: () => boolean;
    buttonsApi: IButtonsRowApi;
    getProps: () => ITreeSelectProps;
    setProps: (props: ITreeSelectProps) => void;
    getValues: () => ITreeSelectNode[];
    setValues: (values: ITreeSelectValue | string | null) => void;
    getInternalValue: () => ITreeSelectInternalValue | ITreeSelectInternalValue[] | null | undefined;
    getDataSet: () => ITreeSelectNode[] | undefined;
    setDataSet: (dataSet: ITreeSelectNode[] | undefined | null) => void;
    getIsReady: () => boolean;
    setIsReady: (value: boolean) => void;
    getIsFetching: () => boolean;
    setIsFetching: (value: boolean) => void;
    getFetchError: () => string;
    setSetFetchError: (value: string | null) => void;
    getIsAllFetched: () => boolean;
    setIsAllFetched: (value: boolean) => void;
    getMinSymbols: () => number;
    setSetMynSymbols: (value: number) => void;
    fetchData: (search: string, debounce?: boolean) => void;
    plainValueToNodes: (plainValues: ITreeSelectPlainValue | ITreeSelectPlainValue[] | null | undefined) => ITreeSelectNode[] | undefined;
    addNodes: (parentNode: ITreeSelectNode | undefined, newNodes: ITreeSelectNode | ITreeSelectNode[]) => void;
    updateNodes: (nodes: ITreeSelectNode | ITreeSelectNode[]) => void;
    deleteNodes: (nodes: ITreeSelectNode | ITreeSelectNode[]) => void;
}
export declare const useInitApi: ({ api, componentId, treeProps, updateProps, buttonsApi, }: {
    api: ITreeSelectApi;
    componentId: string;
    treeProps: ITreeSelectProps;
    updateProps: (props: ITreeSelectProps) => void;
    buttonsApi: IButtonsRowApi;
}) => void;
export declare const useApiGetId: (componentId: string) => () => string;
