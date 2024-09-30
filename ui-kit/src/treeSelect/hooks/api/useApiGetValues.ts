import {ILabeledValue} from '@src/treeSelect/types/types';

export const useApiGetValues = (value: ILabeledValue[] | null) => {
    return () => value ?? null;
};
